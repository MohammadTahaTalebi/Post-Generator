/* eslint-disable */
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#fdf7ef] text-slate-900 flex flex-col pt-[72px] md:pt-[88px]">
      <main className="flex-1">
        <section className="min-h-screen flex items-center">
          <div className="w-full max-w-7xl px-10 flex justify-center gap-20 items-center mx-auto">

            <Image width={1000} height={1000} alt="" src={"/robotLanding.png"} className="lg:max-w-120 md:max-w-80 md:flex hidden"></Image>

            <div className="space-y-8">
                <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.1rem] leading-tight tracking-tight">
                  Turn your raw idea into a
                  <span className="text-sky-500"> polished LinkedIn post</span>
                </h1>
                <p className="text-base md:text-lg text-slate-700 leading-relaxed max-w-xl">
                  This tool analyzes your idea, finds the best match among over 
                  <span className="font-semibold text-sky-600"> 160 post templates</span>,
                  and creates a clean, well-structured LinkedIn post ready to publish.
                </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/postGenerator"
                  className="inline-flex items-center justify-center px-6 md:px-7 py-3 rounded-2xl bg-sky-500 text-white text-sm md:text-base font-semibold shadow-[0_18px_45px_rgba(56,189,248,0.35)] hover:bg-sky-400 transition-transform hover:-translate-y-0.5"
                >
                  Generate my post
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-2xl border border-slate-200 bg-white/70 text-sm md:text-base hover:bg-white transition-colors"
                >
                  How it works
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="py-16 md:py-20 border-t border-slate-100 bg-white/60"
        >
          <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
                  How it works
                </h2>
                <p className="text-slate-600 max-w-xl text-sm md:text-base leading-relaxed">
                  No overthinking, no blank pages. Just write your idea and let the system find the
                  perfect template for your message.
                </p>
              </div>
              <div className="flex items-center gap-3 text-xs md:text-sm text-slate-500">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 text-xs">
                  ✓
                </span>
                No writing skills needed
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3 text-sm md:text-base">
              <div className="rounded-2xl bg-white border border-slate-100 px-5 py-6 shadow-[0_12px_40px_rgba(148,163,184,0.18)]">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-100 text-sky-600 text-sm font-bold mb-4">
                  1
                </span>
                <h3 className="font-semibold mb-2 text-slate-900">Write your idea</h3>
                <p className="text-slate-600 leading-relaxed">
                  It can be rough, short or incomplete. Example:
                  <span className="inline-block mt-1 text-xs bg-slate-50 border border-slate-100 rounded-xl px-3 py-1">
                    "I want to share what remote work taught me"
                  </span>
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-100 px-5 py-6 shadow-[0_12px_40px_rgba(148,163,184,0.18)]">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-100 text-sky-600 text-sm font-bold mb-4">
                  2
                </span>
                <h3 className="font-semibold mb-2 text-slate-900">Auto-template matching</h3>
                <p className="text-slate-600 leading-relaxed">
                  The system checks over 
                  <span className="font-semibold text-sky-600"> 160 templates</span>
                  and selects the most relevant one for your idea and tone.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-100 px-5 py-6 shadow-[0_12px_40px_rgba(148,163,184,0.18)]">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-100 text-sky-600 text-sm font-bold mb-4">
                  3
                </span>
                <h3 className="font-semibold mb-2 text-slate-900">Receive your post</h3>
                <p className="text-slate-600 leading-relaxed">
                  A clean, structured LinkedIn post with hook, spacing and CTA perfectly formatted.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-[#fdf7ef]">
          <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10 space-y-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
                  Who is this for?
                </h2>
                <p className="text-sm md:text-base text-slate-600 max-w-xl leading-relaxed">
                  Perfect for anyone who wants to write consistently on LinkedIn without spending
                  hours crafting each post.
                </p>
              </div>
              <div className="inline-flex flex-wrap gap-2 text-[11px] md:text-xs text-slate-500">
                <span className="px-3 py-1 rounded-full bg-white border border-slate-100">
                  Creators
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-slate-100">
                  Marketers
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-slate-100">
                  Startup founders
                </span>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
              <div className="grid gap-4 sm:grid-cols-2 text-sm md:text-base">
                <div className="rounded-2xl bg-white border border-slate-100 p-5 space-y-2">
                  <h3 className="font-semibold text-slate-900">Fast, clean content</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Every post follows a consistent structure: hook, body, insight and CTA.
                  </p>
                </div>
                <div className="rounded-2xl bg-white border border-slate-100 p-5 space-y-2">
                  <h3 className="font-semibold text-slate-900">Tone control</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Choose between friendly, professional or storytelling tones.
                  </p>
                </div>
                <div className="rounded-2xl bg-white border border-slate-100 p-5 space-y-2">
                  <h3 className="font-semibold text-slate-900">Template flexibility</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Suitable for intros, announcements, lessons, stories, product launches and more.
                  </p>
                </div>
                <div className="rounded-2xl bg-white border border-slate-100 p-5 space-y-2">
                  <h3 className="font-semibold text-slate-900">Minimal, distraction-free UI</h3>
                  <p className="text-slate-600 leading-relaxed">
                    A calm workspace that makes writing refreshing and simple.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-white border border-sky-100 p-6 md:p-7 shadow-[0_18px_55px_rgba(148,163,184,0.18)] flex flex-col justify-between gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg md:text-xl text-slate-900">
                    You only need the idea — the system does the rest
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    Turn LinkedIn posting from a chore into a quick, enjoyable workflow.
                    Write your idea, receive your final post.
                  </p>
                </div>
                <div className="space-y-3 text-xs md:text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-sky-50 text-sky-600 text-sm">
                      ⏱
                    </span>
                    <span>Your post is ready in under one minute.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 text-sm">
                      ✍️
                    </span>
                    <span>Save your ideas and turn them into multiple styles later.</span>
                  </div>
                </div>
                <div className="pt-1">
                  <Link
                    href="/postGenerator"
                    className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 rounded-2xl bg-sky-500 text-white text-sm md:text-base font-semibold hover:bg-sky-400 transition-colors"
                  >
                    Create your first post
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-16 border-t border-slate-100 bg-white/80">
          <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-10">
            <div className="rounded-4xl bg-[#fdf7ef] border border-slate-100 px-6 md:px-10 py-8 md:py-9 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-[0_14px_45px_rgba(148,163,184,0.18)]">
              <div className="space-y-2 md:space-y-3">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  Ready to upgrade your LinkedIn?
                </h2>
                <p className="text-sm md:text-base text-slate-600 max-w-xl leading-relaxed">
                  Go to <span className="font-semibold text-sky-700">/postGenerator</span>,
                  write your idea and get a clean, ready-to-publish post.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <Link
                  href="/postGenerator"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-sky-500 text-white text-sm md:text-base font-semibold hover:bg-sky-400 transition-colors shadow-[0_18px_45px_rgba(56,189,248,0.3)]"
                >
                  Start with /postGenerator
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
