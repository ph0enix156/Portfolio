import React from 'react';
import {
  Cpu,
  Globe,
  Zap,
  GraduationCap,
  ArrowRight,
  Sparkles,
  Trophy,
  Music,
  CheckCircle2,
  Workflow,
  BookOpen,
  Users
} from 'lucide-react';

interface AboutProps {
  onNavigate?: (page: 'skills' | 'projects' | 'experience' | 'contact') => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const whatIWorkOn = [
    {
      icon: Cpu,
      title: 'AI & Computer Vision',
      tag: 'Machine Learning',
      description:
        'Building practical AI solutions using Python, OpenCV, MediaPipe, and machine learning, with projects spanning gesture recognition and agricultural diagnostics.',
    },
    {
      icon: Globe,
      title: 'Full-Stack Development',
      tag: 'Web Engineering',
      description:
        'Building responsive web applications using React, JavaScript, Tailwind CSS, Node.js, and REST APIs, with a focus on clean interfaces and practical functionality.',
    },
    {
      icon: Zap,
      title: 'Hackathons & Rapid Prototyping',
      tag: 'Fast Iteration',
      description:
        'Turning ideas into functional prototypes under tight deadlines, from problem definition and architecture to development, testing, and pitching.',
    },
  ];

  const approachSteps = [
    {
      step: '01',
      title: 'Problem',
      detail: 'Identify real friction or an unmet need where software provides genuine leverage.',
    },
    {
      step: '02',
      title: 'Understand',
      detail: 'Break down constraints, research domain nuances, and choose the right tools for the job.',
    },
    {
      step: '03',
      title: 'Build',
      detail: 'Write straightforward, modular code with functional interfaces and solid structure.',
    },
    {
      step: '04',
      title: 'Test',
      detail: 'Validate edge cases, test with real data inputs, and fix usability snags early.',
    },
    {
      step: '05',
      title: 'Improve',
      detail: 'Refine based on practical feedback, polish responsiveness, and document cleanly.',
    },
  ];

  const beyondCodeItems = [
    {
      icon: Users,
      title: 'Campus Leadership',
      subtitle: 'CII Young Indians & Insight AI Club · MIT-WPU',
      description:
        'Currently serving as Co-Lead of Events & Operations at the CII Young Indians (Yi) student chapter, MIT-WPU, organizing campus initiatives and operations. Previously served as Co-Technical Lead at Insight AI Club, conducting technical sessions and mentoring student developers in applied AI.',
      tags: ['CII Young Indians Co-Lead', 'Ex Co-Tech Lead Insight AI'],
    },
    {
      icon: Music,
      title: 'Classical Tabla',
      subtitle: 'Trained Indian Classical Percussionist',
      description:
        'Years of formal riyaz (daily rigorous practice). Taught me the value of steady patience, micro-timing precision, deep concentration, and returning day after day to master fundamentals.',
      tags: ['Daily Riyaz', 'Timing Precision & Patience'],
    },
    {
      icon: Sparkles,
      title: 'Hackathon Sprints',
      subtitle: 'Fast-Paced MVP Prototyping',
      description:
        'Thrives in high-tempo collaborative environments. Working against the clock teaches pragmatic technical tradeoffs, fast debugging, and pitching working prototypes with clarity.',
      tags: ['Rapid Prototyping', 'High-Tempo Collaboration'],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16 sm:py-24 space-y-20">
      
      {/* 1. Header & Personal Story Introduction */}
      <section className="space-y-8">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-3 font-mono">
            About Me · Computer Science Engineering Student
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-stone-950 dark:text-stone-50 mb-6 text-balance">
            I’m Pushkar.
          </h1>
          <p className="text-lg sm:text-xl text-stone-800 dark:text-stone-200 font-normal leading-relaxed text-balance">
            I’m a Computer Science Engineering student who enjoys turning ideas into practical software. My interests span Applied AI/ML, full-stack web development, computer vision, and rapid prototyping through hackathons and hands-on projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-5 text-base text-stone-600 dark:text-stone-350 leading-relaxed">
            <p>
              I enjoy working on problems where technology can have a practical impact. From building{' '}
              <span className="font-semibold text-stone-900 dark:text-stone-100">SignBridge</span>, a computer-vision-based Indian Sign Language project, to developing{' '}
              <span className="font-semibold text-stone-900 dark:text-stone-100">fasalMitra</span>, an AI-powered crop disease detection platform, I focus on turning technical concepts into solutions that are useful and accessible.
            </p>
            <p>
              Hackathons have played an important role in my growth as a developer. Working under tight deadlines has taught me how to break down problems, make practical technical decisions, collaborate with a team, and turn an idea into a working prototype.
            </p>
            <p>
              Beyond purely technical pursuits, I take an active role in campus leadership—currently serving as Co-Lead of Events &amp; Operations at the <span className="font-semibold text-stone-900 dark:text-stone-100">CII Young Indians</span> student chapter, and previously as Co-Technical Lead at the <span className="font-semibold text-stone-900 dark:text-stone-100">Insight AI Club</span> at MIT-WPU. Having also trained as a classical Tabla player, I bring steady discipline, focus under pressure, and a collaborative team mindset to engineering and beyond.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-stone-500 dark:text-stone-400 font-mono">
              <span className="font-medium text-stone-800 dark:text-stone-200">B.Tech Computer Science &amp; Engineering</span>
              <span aria-hidden="true">·</span>
              <span>MIT-WPU Pune (Expected 2028)</span>
              <span aria-hidden="true">·</span>
              <span>AI/ML</span>
              <span aria-hidden="true">·</span>
              <span>Full-Stack Development</span>
              <span aria-hidden="true">·</span>
              <span>Computer Vision</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Open to Engineering Internships</span>
            </div>

            {onNavigate && (
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onNavigate('projects')}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-stone-50 dark:text-stone-950 bg-stone-900 dark:bg-stone-100 hover:bg-stone-800 dark:hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('skills')}
                  className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-lg transition-colors cursor-pointer"
                >
                  Explore Technical Stack
                </button>
              </div>
            )}
          </div>

          {/* Quick Identity Card */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 font-mono">
              Current Focus
            </div>
            <div className="space-y-2.5 text-xs text-stone-700 dark:text-stone-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>B.Tech CSE at MIT-WPU Pune (Class of 2028)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>Co-Lead Events &amp; Ops, CII Young Indians (Yi)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>Former Co-Tech Lead, Insight AI Club</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>Computer vision pipelines &amp; applied ML</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>React, Node.js, and clean web APIs</span>
              </div>
            </div>
            <div className="pt-3 border-t border-stone-100 dark:border-stone-800 text-[11px] text-stone-500 dark:text-stone-400 font-mono">
              Available for Summer &amp; Fall Engineering Internships
            </div>
          </div>
        </div>
      </section>

      {/* 2. What I Work On */}
      <section className="space-y-6 pt-4 border-t border-stone-200/80 dark:border-stone-800">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2 font-mono">
            Core Areas
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-950 dark:text-stone-50">
            What I Work On
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
            Practical domains where I spend my time building software and exploring technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {whatIWorkOn.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 transition-all hover:border-stone-400 dark:hover:border-stone-600 hover:shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-stone-950 dark:text-stone-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. My Approach Pipeline */}
      <section className="space-y-6 pt-4 border-t border-stone-200/80 dark:border-stone-800">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2 font-mono">
            Methodology
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-950 dark:text-stone-50 flex items-center gap-2.5">
            <span>My Approach</span>
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
            A simple, pragmatic feedback loop for delivering software that actually works.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {approachSteps.map((step, idx) => (
            <div
              key={step.step}
              className="p-4 sm:p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs font-mono text-stone-400 mb-2">
                  <span>{step.step}</span>
                  {idx < approachSteps.length - 1 && (
                    <span className="hidden lg:inline text-stone-300 dark:text-stone-700">→</span>
                  )}
                </div>
                <h3 className="text-sm font-bold text-stone-950 dark:text-stone-100 mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Education Journey */}
      <section className="space-y-6 pt-4 border-t border-stone-200/80 dark:border-stone-800">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2 font-mono">
            Academic Background
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-950 dark:text-stone-50">
            Education Journey
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
            From foundational schooling and first web scripts in Nashik to studying Computer Science at MIT-WPU Pune.
          </p>
        </div>

        <div className="space-y-5">
          {/* 1. Undergrad Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xs">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 shrink-0 mt-1">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60 font-medium">
                      Undergraduate Degree · Currently Pursuing
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-950 dark:text-stone-50">
                    Bachelor of Technology in Computer Science &amp; Engineering
                  </h3>
                  <div className="text-sm font-semibold text-stone-700 dark:text-stone-300 mt-0.5">
                    MIT World Peace University, Pune (MIT-WPU)
                  </div>
                </div>
              </div>

              <div className="text-xs font-mono text-stone-600 dark:text-stone-300 self-start md:self-auto px-3 py-1.5 rounded-lg bg-stone-50 dark:bg-stone-800/80 border border-stone-200/80 dark:border-stone-700/60 shrink-0">
                Pune, Maharashtra · Expected Graduation: 2028
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed max-w-3xl mb-4">
              Pursuing a comprehensive curriculum in Computer Science and Engineering with coursework covering Data Structures &amp; Algorithms, Database Management Systems, Object-Oriented Programming, Operating Systems, and Artificial Intelligence.
            </p>

            <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex flex-wrap items-center gap-2 text-xs font-mono text-stone-600 dark:text-stone-400">
              <span className="text-stone-400 dark:text-stone-500 font-semibold">Coursework:</span>
              <span className="px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300">Data Structures &amp; Algorithms</span>
              <span className="px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300">Operating Systems</span>
              <span className="px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300">DBMS &amp; SQL</span>
              <span className="px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300">Object-Oriented Programming</span>
              <span className="px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300">Artificial Intelligence</span>
              <span className="px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300">Computer Vision</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* 2. Junior College (Class 12) Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300">
                    Class 12 (HSC)
                  </span>
                </div>

                <div className="text-xs font-mono text-stone-500 dark:text-stone-400 mb-1">
                  Junior College · Maharashtra HSC Board
                </div>
                <h3 className="text-base font-bold text-stone-950 dark:text-stone-100 mb-0.5">
                  Higher Secondary Certificate (HSC)
                </h3>
                <div className="text-xs font-semibold text-stone-700 dark:text-stone-300 mb-3">
                  Matoshri Junior College, Eklahare, Nashik
                </div>

                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed mb-4">
                  Completed Class 12 Higher Secondary Certificate in the Science stream. Discovered an early passion for web development and software through practical coursework in HTML, CSS, and server-side PHP scripting.
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 dark:border-stone-800">
                <div className="text-[11px] font-mono text-stone-500 dark:text-stone-400 mb-1.5 font-medium">
                  Early Tech &amp; Coursework:
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                  <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60 font-medium">HTML</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60 font-medium">CSS</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60 font-medium">PHP</span>
                  <span className="px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400">Computer Science</span>
                  <span className="px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400">Mathematics</span>
                </div>
              </div>
            </div>

            {/* 3. School (Class 10) Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300">
                    Class 10 (SSC)
                  </span>
                </div>

                <div className="text-xs font-mono text-stone-500 dark:text-stone-400 mb-1">
                  High School · Maharashtra SSC Board
                </div>
                <h3 className="text-base font-bold text-stone-950 dark:text-stone-100 mb-0.5">
                  Secondary School Certificate (SSC)
                </h3>
                <div className="text-xs font-semibold text-stone-700 dark:text-stone-300 mb-3">
                  Maratha High School, Nashik
                </div>

                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed mb-4">
                  Completed Class 10 Secondary School Certificate. Developed foundational computer knowledge, quantitative problem solving, and analytical thinking.
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 dark:border-stone-800">
                <div className="text-[11px] font-mono text-stone-500 dark:text-stone-400 mb-1.5 font-medium">
                  Foundations &amp; Co-Curricular:
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                  <span className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60 font-medium">Basic Computer Knowledge</span>
                  <span className="px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400">Mathematics</span>
                  <span className="px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400">Science</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Beyond Code: Campus Leadership, Classical Tabla, Hackathons */}
      <section className="space-y-6 pt-4 border-t border-stone-200/80 dark:border-stone-800">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2 font-mono">
            Personal Foundations &amp; Leadership
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-950 dark:text-stone-50">
            Beyond Code
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
            Experiences outside pure software that directly shape how I lead, focus, collaborate, and solve problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {beyondCodeItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex flex-col justify-between hover:border-stone-300 dark:hover:border-stone-700 transition-all shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 inline-flex">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-stone-950 dark:text-stone-100 mb-0.5">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-stone-500 dark:text-stone-400 mb-3">
                    {item.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {item.tags && item.tags.length > 0 && (
                  <div className="pt-4 mt-4 border-t border-stone-100 dark:border-stone-800 flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Footer Navigation Call to Action */}
      {onNavigate && (
        <div className="pt-6 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-stone-500 dark:text-stone-400 font-mono">
            Pushkar Gangurde · MIT World Peace University, Pune
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-stone-900 dark:text-stone-100 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-lg transition-colors cursor-pointer"
            >
              <span>Explore Projects</span>
              <span>→</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white dark:text-stone-950 bg-stone-900 dark:bg-stone-100 hover:bg-stone-800 dark:hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
            >
              <span>Get in Touch</span>
              <span>→</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default About;
