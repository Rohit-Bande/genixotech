import React, { useRef, useEffect } from "react";
import {
  BookOpen,
  Clock,
  Cpu,
  Award,
  CheckCircle2,
  Layers,
  Hammer,
} from "lucide-react";

export default function WorkshopPage() {
  const modules = [
    "Introduction to Embedded Systems",
    "C Programming Basics",
    "Electronics Fundamentals",
    "Microcontrollers & GPIO",
    "Sensors Integration",
    "LED & Switch Interface",
  ];

  const projects = [
    { title: "LED Blinking", desc: "The 'Hello World' of hardware." },
    {
      title: "Traffic Light Controller",
      desc: "Master timing and state logic.",
    },
    { title: "Digital Counter", desc: "Work with 7-segment displays/LCDs." },
    {
      title: "Temperature Monitor",
      desc: "Read real-world analog/digital sensor data.",
    },
  ];

  // 1. Initializing the reference hook
  const syllabusRef = useRef(null);

  // FIX: Force the layout viewport straight to the top coordinates on fresh page reloads
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  const scrollToSection = (e, elementRef) => {
    e.preventDefault();
    if (elementRef.current) {
      elementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="min-h-screen text-slate-800 font-sans selection:bg-purple-500/30">
      <header className="relative overflow-hidden py-20 lg:py-15 border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900">
            Master{" "}
            <span className="bg-gradient-to-r from-blue-500 px-2 to-purple-500 bg-clip-text text-transparent">
              Embedded Systems
            </span>{" "}
            From Scratch
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 mb-8">
            A practical, hands-on workshop tailored for Diploma, B.E., B.Tech
            students, and hardware beginners looking to bridge the gap between
            theory and real-world engineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto px-8 py-3 rounded-xl font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25 hover:opacity-95 transition-all transform hover:-translate-y-0.5">
              Enroll in Workshop
            </button>
            <a
              onClick={(e) => scrollToSection(e, syllabusRef)}
              href="#syllabus"
              className="w-full sm:w-auto px-8 py-3 rounded-xl font-medium bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 transition-all text-center shadow-sm"
            >
              View Syllabus
            </a>
          </div>
        </div>
      </header>

      {/* QUICK INFO BAR */}
      <section className="border-b border-slate-200 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4 justify-center sm:justify-start">
            <div className="p-3 rounded-lg bg-blue-500/10 text-blue-600">
              <Clock size={24} />
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Flexible Durations
              </h4>
              <p className="text-sm font-semibold text-slate-700">
                1 Day / 2 Days / Weekend / 1 Week
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center sm:justify-start">
            <div className="p-3 rounded-lg bg-purple-500/10 text-purple-600">
              <BookOpen size={24} />
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Target Audience
              </h4>
              <p className="text-sm font-semibold text-slate-700">
                Diploma & B.E / B.Tech Beginners
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center sm:justify-start">
            <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-600">
              <Award size={24} />
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Certification
              </h4>
              <p className="text-sm font-semibold text-slate-700">
                Verified Workshop Certificate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SYLLABUS & MODULES */}
      {/* FIX: Explicitly attached ref={syllabusRef} here so DOM location resolves cleanly */}
      <section
        id="syllabus"
        ref={syllabusRef}
        className="py-20 max-w-6xl mx-auto px-4 sm:px-6 scroll-mt-6"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl flex items-center justify-center gap-3 text-slate-900">
            <Layers className="text-blue-500" /> What You Will Learn
          </h2>
          <p className="text-slate-600 mt-2">
            Structured training modules taking you step-by-step from zero to
            building firmware.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-500/40 hover:shadow-md transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 text-white flex items-center justify-center text-xs font-bold mb-4">
                0{idx + 1}
              </div>
              <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                {module}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* HANDS-ON PROJECTS */}
      <section className="py-20 bg-slate-50/50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl flex items-center justify-center gap-3 text-slate-900">
              <Hammer className="text-purple-500" /> Hands-On Projects
            </h2>
            <p className="text-slate-600 mt-2">
              Build real physical computing hardware apps to solidify your
              logic.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <Cpu className="text-purple-500 mb-4" size={28} />
                  <h3 className="text-lg font-bold text-slate-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600">{project.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>Hardware Project</span>
                  <span className="text-purple-600 font-medium">
                    Live Kit →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOME / CERTIFICATE PREVIEW */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-blue-500/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex-1 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Get Certified Upon Completion
            </h3>
            <p className="text-slate-600 text-sm sm:text-base">
              Receive a verified{" "}
              <strong>Embedded Systems Workshop Certificate</strong> showcasing
              your newly acquired technical abilities in circuit analysis, code
              execution, and component interface.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-500" /> Shareable
                on LinkedIn & Resumes
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-500" /> Includes
                unique verification ID
              </li>
            </ul>
          </div>

          <div className="w-full md:w-72 aspect-[4/3] bg-white rounded-xl border border-slate-200 shadow-xl flex flex-col items-center justify-center p-6 text-center relative rotate-2 hover:rotate-0 transition-transform duration-300">
            <Award className="text-purple-500 mb-2" size={40} />
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
              Certificate of Participation
            </span>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 my-2 rounded-full" />
            <p className="text-xs font-serif font-semibold text-slate-700">
              Embedded Systems Workshop
            </p>
            <div className="w-full h-2 bg-slate-100 mt-4 rounded" />
            <div className="w-2/3 h-2 bg-slate-100 mt-2 rounded" />
          </div>
        </div>
      </section>
    </div>
  );
}
