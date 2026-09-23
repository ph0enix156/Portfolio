import React, { useState } from 'react';
import { Mail, Linkedin, Github, Instagram, Copy, Check, ArrowUpRight, MapPin, Clock, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
      {/* Header */}
      <div className="max-w-2xl mb-12">
        <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-3 font-mono">
          Contact Details
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-stone-950 dark:text-stone-50 mb-4 text-balance">
          Let's Connect
        </h1>
        <p className="text-base sm:text-lg text-stone-700 dark:text-stone-200 font-normal text-balance">
          Here are my direct contact channels and social platform IDs. Reach out regarding software engineering internships, technical collaborations, or hackathons.
        </p>
      </div>

      {/* Grid of Direct Contact Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Email Card */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800 shadow-xs flex flex-col justify-between hover:border-stone-400 dark:hover:border-stone-600 transition-all">
          <div>
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 inline-flex">
                <Mail className="w-5 h-5" />
              </div>
              <button
                type="button"
                onClick={() => handleCopy('email', PERSONAL_INFO.email)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-md transition-colors cursor-pointer border border-transparent dark:border-stone-700/60"
                title="Copy email to clipboard"
              >
                {copiedKey === 'email' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-700 dark:text-emerald-300 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1">
              Email Address
            </div>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 hover:text-stone-700 dark:hover:text-stone-300 transition-colors break-all inline-block"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>
          <div className="mt-6 pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
            <Clock className="w-3.5 h-3.5 text-stone-400 dark:text-stone-500" />
            <span>Response time: within 24 hours</span>
          </div>
        </div>

        {/* LinkedIn Card */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800 shadow-xs flex flex-col justify-between hover:border-stone-400 dark:hover:border-stone-600 transition-all">
          <div>
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 inline-flex">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => handleCopy('linkedin', PERSONAL_INFO.linkedinId)}
                  className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-md transition-colors cursor-pointer border border-transparent dark:border-stone-700/60"
                  title="Copy LinkedIn ID"
                >
                  {copiedKey === 'linkedin' ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-700 dark:text-emerald-300 font-medium">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-md transition-colors border border-transparent dark:border-stone-700/60"
                >
                  <span>Visit</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400" />
                </a>
              </div>
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1">
              LinkedIn ID
            </div>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 hover:text-stone-700 dark:hover:text-stone-300 transition-colors break-all inline-block font-mono"
            >
              @{PERSONAL_INFO.linkedinId}
            </a>
          </div>
          <div className="mt-6 pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
            <Globe className="w-3.5 h-3.5 text-stone-400 dark:text-stone-500" />
            <span>Professional profile &amp; network</span>
          </div>
        </div>

        {/* GitHub Card */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800 shadow-xs flex flex-col justify-between hover:border-stone-400 dark:hover:border-stone-600 transition-all">
          <div>
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 inline-flex">
                <Github className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => handleCopy('github', PERSONAL_INFO.githubId)}
                  className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-md transition-colors cursor-pointer border border-transparent dark:border-stone-700/60"
                  title="Copy GitHub ID"
                >
                  {copiedKey === 'github' ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-700 dark:text-emerald-300 font-medium">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-md transition-colors border border-transparent dark:border-stone-700/60"
                >
                  <span>Visit</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400" />
                </a>
              </div>
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1">
              GitHub ID
            </div>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 hover:text-stone-700 dark:hover:text-stone-300 transition-colors break-all inline-block font-mono"
            >
              @{PERSONAL_INFO.githubId}
            </a>
          </div>
          <div className="mt-6 pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
            <Globe className="w-3.5 h-3.5 text-stone-400 dark:text-stone-500" />
            <span>Code repositories &amp; open-source</span>
          </div>
        </div>
      </div>

      {/* Social Profiles Grid */}
      <div className="mb-12">
        <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-4 font-mono">
          Social Channels
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* X / Twitter Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800 shadow-xs flex flex-col justify-between hover:border-stone-400 dark:hover:border-stone-600 transition-all">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 inline-flex">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleCopy('twitter', `@${PERSONAL_INFO.twitterId}`)}
                    className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-md transition-colors cursor-pointer border border-transparent dark:border-stone-700/60"
                    title="Copy X handle"
                  >
                    {copiedKey === 'twitter' ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-emerald-700 dark:text-emerald-300 font-medium">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                  <a
                    href={PERSONAL_INFO.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-md transition-colors border border-transparent dark:border-stone-700/60"
                  >
                    <span>Visit</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400" />
                  </a>
                </div>
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1">
                X (Twitter) ID
              </div>
              <a
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 hover:text-stone-700 dark:hover:text-stone-300 transition-colors inline-block font-mono"
              >
                @{PERSONAL_INFO.twitterId}
              </a>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
              <Globe className="w-3.5 h-3.5 text-stone-400 dark:text-stone-500" />
              <span>Tech updates, building in public &amp; thoughts</span>
            </div>
          </div>

          {/* Instagram Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800 shadow-xs flex flex-col justify-between hover:border-stone-400 dark:hover:border-stone-600 transition-all">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-[#e1306c] dark:text-pink-400 inline-flex">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleCopy('instagram', `@${PERSONAL_INFO.instagramId}`)}
                    className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-md transition-colors cursor-pointer border border-transparent dark:border-stone-700/60"
                    title="Copy Instagram handle"
                  >
                    {copiedKey === 'instagram' ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-emerald-700 dark:text-emerald-300 font-medium">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                  <a
                    href={PERSONAL_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-md transition-colors border border-transparent dark:border-stone-700/60"
                  >
                    <span>Visit</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400" />
                  </a>
                </div>
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1">
                Instagram ID
              </div>
              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 hover:text-stone-700 dark:hover:text-stone-300 transition-colors inline-block font-mono"
              >
                @{PERSONAL_INFO.instagramId}
              </a>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
              <Globe className="w-3.5 h-3.5 text-stone-400 dark:text-stone-500" />
              <span>Campus life, events &amp; photos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Location & Availability Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-stone-100/80 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 shadow-2xs border border-transparent dark:border-stone-700/50">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1 font-mono">
              Current Location &amp; Availability
            </div>
            <div className="text-base font-bold text-stone-900 dark:text-stone-100">
              Pune, Maharashtra, India
            </div>
            <div className="text-sm text-stone-600 dark:text-stone-400 mt-1">
              Open to Summer &amp; Fall Engineering Internships (Remote, Hybrid, or On-site relocation).
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 self-stretch sm:self-auto">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white dark:text-stone-950 bg-stone-900 dark:bg-stone-100 hover:bg-stone-800 dark:hover:bg-stone-200 rounded-lg transition-colors shadow-xs"
          >
            <Mail className="w-4 h-4" />
            <span>Send Email</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
