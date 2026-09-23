import { useCallback, useEffect, useRef } from 'react';
import type { CSSProperties, ReactNode } from 'react';

const clamp = (v: number, a: number, b: number): number => (v < a ? a : v > b ? b : v);

const smoothstep = (edge0: number, edge1: number, x: number): number => {
  const t = clamp((x - edge0) / (edge1 - edge0 || 1e-6), 0, 1);
  return t * t * (3 - 2 * t);
};

type ConfigKey =
  | 'startWidth'
  | 'startHeight'
  | 'startRadius'
  | 'endRadius'
  | 'mediaZoom'
  | 'scrollDistance'
  | 'holdDistance'
  | 'smoothing'
  | 'overlayScrim'
  | 'useWindowScroll'
  | 'enabled';

export interface ScrollExpandProps {
  src?: string;
  mediaType?: 'image' | 'video';
  poster?: string;
  alt?: string;
  title?: string;
  scrollHint?: string;
  startWidth?: number;
  startHeight?: number;
  startRadius?: number;
  endRadius?: number;
  mediaZoom?: number;
  objectPosition?: string;
  scrollDistance?: number;
  holdDistance?: number;
  smoothing?: number;
  overlayScrim?: number;
  useWindowScroll?: boolean;
  enabled?: boolean;
  isLocked?: boolean;
  onProgressChange?: (progress: number) => void;
  onComplete?: () => void;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  [key: string]: unknown;
}

const ScrollExpand: React.FC<ScrollExpandProps> = ({
  src = '',
  mediaType = 'image',
  poster = '',
  alt = '',
  title = 'Hello',
  scrollHint = 'Scroll to expand',
  startWidth = 42,
  startHeight = 58,
  startRadius = 24,
  endRadius = 0,
  mediaZoom = 1.05,
  objectPosition = 'center 38%',
  scrollDistance = 1.2,
  holdDistance = 0.35,
  smoothing = 0.1,
  overlayScrim = 0.55,
  useWindowScroll = false,
  enabled = true,
  isLocked = false,
  onProgressChange,
  onComplete,
  children,
  className = '',
  style,
  ...rest
}: ScrollExpandProps) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const mediaRef = useRef<HTMLImageElement & HTMLVideoElement>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const scrimRef = useRef<HTMLDivElement | null>(null);
  const hintRef = useRef<HTMLDivElement | null>(null);

  const onProgressChangeRef = useRef(onProgressChange);
  onProgressChangeRef.current = onProgressChange;
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const propsRef = useRef<Required<Pick<ScrollExpandProps, ConfigKey>>>(
    {} as Required<Pick<ScrollExpandProps, ConfigKey>>
  );
  propsRef.current = {
    startWidth,
    startHeight,
    startRadius,
    endRadius,
    mediaZoom,
    scrollDistance,
    holdDistance,
    smoothing,
    overlayScrim,
    useWindowScroll,
    enabled
  };

  const applyProgress = useCallback((p: number) => {
    const frame = frameRef.current;
    const media = mediaRef.current;
    if (!frame || !media) return;
    const c = propsRef.current;

    const e = smoothstep(0, 1, p);

    const w = c.startWidth + (100 - c.startWidth) * e;
    const h = c.startHeight + (100 - c.startHeight) * e;
    const ix = Math.max(0, (100 - w) / 2);
    const iy = Math.max(0, (100 - h) / 2);
    const r = c.startRadius + (c.endRadius - c.startRadius) * e;
    frame.style.clipPath = `inset(${iy}% ${ix}% ${iy}% ${ix}% round ${r}px)`;

    media.style.transform = `scale(${c.mediaZoom + (1 - c.mediaZoom) * e})`;

    if (scrimRef.current) scrimRef.current.style.opacity = `${c.overlayScrim * e}`;

    if (titleRef.current) {
      const out = smoothstep(0.35, 0.82, p);
      titleRef.current.style.opacity = `${1 - out}`;
      titleRef.current.style.transform = `translate3d(0, ${-28 * out}px, 0) scale(${1 + 0.06 * out})`;
    }

    if (hintRef.current) {
      const gone = smoothstep(0, 0.15, p);
      hintRef.current.style.opacity = `${1 - gone}`;
      hintRef.current.style.transform = `translate3d(0, ${8 * gone}px, 0)`;
    }

    if (overlayRef.current) {
      const inn = smoothstep(0.65, 0.98, p);
      overlayRef.current.style.opacity = `${inn}`;
      overlayRef.current.style.transform = `translate3d(0, ${20 * (1 - inn)}px, 0)`;
      overlayRef.current.style.pointerEvents = inn > 0.1 ? 'auto' : 'none';
    }

    onProgressChangeRef.current?.(p);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    const stage = stageRef.current;

    // If locked, immediately reset track and stage heights to 100%, apply 100% progress, and exit
    if (isLocked) {
      if (track) track.style.height = '100%';
      if (stage) stage.style.height = '100%';
      applyProgress(1);
      return;
    }

    if (!root || !track || !stage) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let raf = 0;
    let current = 0;
    let target = 0;
    let stageH = 0;
    let running = false;

    const measure = () => {
      const c = propsRef.current;
      stageH = c.useWindowScroll ? window.innerHeight : root.clientHeight;
      if (stageH <= 0) return;
      stage.style.height = `${stageH}px`;
      track.style.height = `${stageH * (1 + Math.max(0, c.scrollDistance) + Math.max(0, c.holdDistance))}px`;

      const w = root.clientWidth || stageH;
      stage.style.setProperty('--se-title-size', `${clamp(w * 0.08, 28, 96)}px`);
    };

    const readProgress = () => {
      const c = propsRef.current;
      if (!c.enabled) return 1;
      const span = stageH * Math.max(0.01, c.scrollDistance);
      if (c.useWindowScroll) {
        const top = track.getBoundingClientRect().top;
        return clamp(-top / span, 0, 1);
      }
      return clamp(root.scrollTop / span, 0, 1);
    };

    const tick = () => {
      const c = propsRef.current;
      const k = c.smoothing <= 0 ? 1 : 1 - Math.exp(-1 / (60 * c.smoothing));
      current += (target - current) * k;
      if (Math.abs(target - current) < 0.0004) {
        current = target;
        running = false;
      }
      applyProgress(current);
      raf = running ? requestAnimationFrame(tick) : 0;
    };

    const kick = () => {
      if (running) return;
      running = true;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      target = readProgress();
      if (!useWindowScroll && root) {
        const atBottom = root.scrollTop + root.clientHeight >= root.scrollHeight - 8;
        if (atBottom && target >= 0.95) {
          onCompleteRef.current?.();
        }
      }
      if (propsRef.current.smoothing <= 0 || reduceMotion) {
        current = target;
        applyProgress(current);
        return;
      }
      kick();
    };

    const onResize = () => {
      measure();
      target = readProgress();
      current = target;
      applyProgress(current);
    };

    measure();
    target = readProgress();
    current = target;
    applyProgress(current);

    const scroller = useWindowScroll ? window : root;
    scroller.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    const ro = new ResizeObserver(onResize);
    ro.observe(root);

    // Chained scroll completion for internal container when scrolling DOWN at the end
    const handleWheel = (e: WheelEvent) => {
      if (useWindowScroll) return;
      if (!root) return;
      const atBottom = root.scrollTop + root.clientHeight >= root.scrollHeight - 16;
      // Only trigger completion when at the bottom AND scrolling downward (deltaY > 0)
      if (atBottom && e.deltaY > 2) {
        onCompleteRef.current?.();
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        touchStartY = e.touches[0].clientY;
      }
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (useWindowScroll) return;
      if (!root || e.touches.length === 0) return;
      const atBottom = root.scrollTop + root.clientHeight >= root.scrollHeight - 16;
      const delta = touchStartY - e.touches[0].clientY;
      // Only trigger completion on downward swipe (delta > 10)
      if (atBottom && delta > 10) {
        onCompleteRef.current?.();
      }
    };

    root.addEventListener('wheel', handleWheel, { passive: true });
    root.addEventListener('touchstart', handleTouchStart, { passive: true });
    root.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      if (raf) cancelAnimationFrame(raf);
      scroller.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      root.removeEventListener('wheel', handleWheel);
      root.removeEventListener('touchstart', handleTouchStart);
      root.removeEventListener('touchmove', handleTouchMove);
      ro.disconnect();
      if (track) track.style.height = '';
      if (stage) stage.style.height = '';
    };
  }, [applyProgress, isLocked, useWindowScroll]);

  const initialInsetX = Math.max(0, (100 - startWidth) / 2);
  const initialInsetY = Math.max(0, (100 - startHeight) / 2);

  const media =
    mediaType === 'video' ? (
      <video
        ref={mediaRef}
        className="absolute inset-0 w-full h-full object-cover select-none [will-change:transform]"
        style={{
          objectPosition,
          transform: isLocked ? 'scale(1)' : undefined,
        }}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
      />
    ) : (
      <img
        ref={mediaRef}
        className="absolute inset-0 w-full h-full object-cover select-none [will-change:transform]"
        style={{
          objectPosition,
          transform: isLocked ? 'scale(1)' : undefined,
        }}
        src={src}
        alt={alt}
        draggable={false}
      />
    );

  return (
    <div
      ref={rootRef}
      data-lenis-prevent={!isLocked ? '' : undefined}
      className={`relative w-full h-full ${
        isLocked
          ? 'overflow-hidden'
          : useWindowScroll
          ? ''
          : 'overflow-y-auto overflow-x-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'
      } ${className}`.trim()}
      style={style}
      {...rest}
    >
      <div
        ref={trackRef}
        className={`relative w-full ${isLocked ? 'h-full' : ''}`}
        style={{ height: isLocked ? '100%' : undefined }}
      >
        <div
          ref={stageRef}
          className={`w-full overflow-hidden [--se-title-size:4.5rem] ${
            isLocked ? 'h-full' : 'sticky top-0'
          }`}
          style={{ height: isLocked ? '100%' : undefined }}
        >
          <div
            ref={frameRef}
            className="absolute inset-0 [will-change:clip-path]"
            style={{
              clipPath: isLocked
                ? `inset(0% 0% 0% 0% round ${endRadius}px)`
                : `inset(${initialInsetY}% ${initialInsetX}% ${initialInsetY}% ${initialInsetX}% round ${startRadius}px)`,
            }}
          >
            {media}
            <div
              ref={scrimRef}
              className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_top,rgba(0,0,0,0.7)_0%,transparent_35%,transparent_65%,rgba(0,0,0,0.5)_100%)]"
              style={{ opacity: isLocked ? overlayScrim : 0 }}
            />
            {children ? (
              <div
                ref={overlayRef}
                className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10 md:p-12 [will-change:opacity,transform]"
                style={{
                  opacity: isLocked ? 1 : 0,
                  pointerEvents: isLocked ? 'auto' : 'none',
                  transform: isLocked ? 'translate3d(0, 0px, 0)' : 'translate3d(0, 20px, 0)',
                }}
              >
                {children}
              </div>
            ) : null}
          </div>
          {!isLocked && title ? (
            <div
              ref={titleRef}
              className="absolute inset-0 flex items-center justify-center m-0 px-[6%] text-center font-bold leading-none tracking-[-0.03em] text-white [font-size:var(--se-title-size)] [text-shadow:0_4px_32px_rgba(0,0,0,0.8)] pointer-events-none [will-change:opacity,transform]"
            >
              {title}
            </div>
          ) : null}
          {!isLocked && scrollHint ? (
            <div
              ref={hintRef}
              className="absolute inset-x-0 bottom-6 text-center text-xs sm:text-sm tracking-wider uppercase text-stone-900 dark:text-white font-semibold dark:font-medium pointer-events-none [will-change:opacity,transform] flex items-center justify-center gap-1.5 dark:[text-shadow:0_2px_12px_rgba(0,0,0,0.8)]"
            >
              <span>{scrollHint}</span>
              <span className="inline-block animate-bounce">↓</span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export { ScrollExpand };
export default ScrollExpand;
