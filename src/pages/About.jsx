import React from "react";
import {
  FaCode,
  FaRobot,
  FaGlobe,
  FaMicrochip,
  FaChalkboardUser,
  FaTerminal,
  FaLightbulb,
  FaUserTie,
  FaHeadset,
  FaChartPie,
  FaRocket,
  FaBullseye,
  FaCircleCheck,
} from "react-icons/fa6";

const About = () => {
  // Data matrix for "What We Offer" - Aligned to Blue and Purple theme accents
  const offerings = [
    {
      text: "Programming Languages Training (Python, JavaScript, C, C++)",
      icon: <FaCode />,
      bg: "bg-blue-50 text-blue-600",
    },
    {
      text: "Robotics (School & College Academic Bootcamps)",
      icon: <FaRobot />,
      bg: "bg-purple-50 text-purple-600",
    },
    {
      text: "Web Development & Modern Architecture Technologies",
      icon: <FaGlobe />,
      bg: "bg-blue-50 text-blue-600",
    },
    {
      text: "Embedded Systems & Electronics Prototyping Labs",
      icon: <FaMicrochip />,
      bg: "bg-purple-50 text-purple-600",
    },
    {
      text: "Technical Workshops, Keynotes & Institutional Seminars",
      icon: <FaChalkboardUser />,
      bg: "bg-blue-50 text-blue-600",
    },
    {
      text: "Real-Time Project Sandboxes & Experiential Learning",
      icon: <FaTerminal />,
      bg: "bg-purple-50 text-purple-600",
    },
  ];

  // Data matrix for "Why Choose Us" - Unified with new brand colors
  const pillars = [
    {
      title: "Practical & Project-Based",
      desc: "We replace abstract simulator screens with direct hardware debugging environments.",
      icon: <FaLightbulb />,
      bg: "bg-blue-50 text-blue-600",
    },
    {
      title: "Career-Focused Development",
      desc: "Our programs scale core industry skills recognized directly by technology firms.",
      icon: <FaUserTie />,
      bg: "bg-purple-50 text-purple-600",
    },
    {
      title: "Continuous Mentorship Support",
      desc: "Students maintain access to open resource bases, code sandboxes, and verification.",
      icon: <FaHeadset />,
      bg: "bg-blue-50 text-blue-600",
    },
    {
      title: "Real-World Industry Exposure",
      desc: "Projects are designed around production-grade protocols and operational systems.",
      icon: <FaChartPie />,
      bg: "bg-purple-50 text-purple-600",
    },
  ];

  return (
    // Main container background color removed so it adapts perfectly to your site
    <div className="w-full min-h-screen text-slate-800 font-sans pb-20">
      {/* --- HERO BANNER HEADER BLOCK --- */}
      <div className="w-full relative overflow-hidden py-16 md:py-24 flex justify-center border-b border-slate-200">
        {/* Subtle background gradient to match the embedded page hero feeling */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
        <div className="w-[83%] text-center relative z-10">
          <span className="text-blue-600 font-bold tracking-widest text-sm uppercase block mb-3">
            Who We Are
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-slate-900">
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              GenixoTech
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <h2 className="max-w-3xl mx-auto text-xl md:text-2xl font-semibold text-slate-700 leading-relaxed">
            Empowering Future Innovators Through Technology & Practical
            Learning.
          </h2>
        </div>
      </div>

      {/* --- CONTENT CONTAINER WRAPPER --- */}
      <div className="w-full flex justify-center mt-16">
        <div className="w-[83%] space-y-16">
          {/* 1. BRAND STORY / OVERVIEW BLOCK */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6 text-slate-600 leading-relaxed text-base md:text-lg">
              <p>
                At{" "}
                <strong className="text-slate-900 font-bold">GenixoTech</strong>
                , we are passionate about helping students and aspiring
                professionals build robust technical foundations and meaningful
                careers in the ever-evolving universe of advanced engineering.
              </p>
              <p>
                Our core operational goal is to seamlessly{" "}
                <strong className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
                  bridge the gap between traditional academic theory and modern
                  Industry requirements
                </strong>
                . We achieve this through meticulous hand-on environments,
                production-grade prototyping kits, and responsive industrial
                system designs.
              </p>
              <p>
                Learning here transcends static software screens. We emphasize
                strict, project-based engineering development tracking alongside
                collaborative hack patterns to guarantee each learner graduates
                with reliable technical autonomy.
              </p>
            </div>

            {/* Quick Metrics Callout Box */}
            <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="font-bold text-slate-900 text-lg mb-2">
                Our Competency Scope
              </h4>
              <div className="space-y-2.5">
                {[
                  "Core Programming Firmware",
                  "Robotics System Architectures",
                  "Embedded Microcontrollers",
                  "IoT Network Configurations",
                ].map((scope, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-sm text-slate-700 font-medium"
                  >
                    <FaCircleCheck className="text-blue-500 text-base shrink-0" />
                    <span>{scope}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs text-slate-400">
                Calibrated against contemporary academic global frameworks.
              </div>
            </div>
          </section>

          {/* 2. WHAT WE OFFER (GRID) */}
          <section>
            <div className="mb-8">
              <span className="text-blue-600 text-xs font-bold uppercase tracking-wider block mb-1">
                Operational Tracks
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                What We Offer
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offerings.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-500/40 hover:shadow-md transition-all flex items-start gap-4"
                >
                  <div
                    className={`w-10 h-10 ${item.bg} rounded-lg flex items-center justify-center text-lg shrink-0`}
                  >
                    {item.icon}
                  </div>
                  <span className="text-sm md:text-base text-slate-700 font-semibold pt-1.5 leading-snug">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* 3. WHY CHOOSE US (PILLARS) */}
          <section className="bg-slate-50/50 border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="mb-10 text-center md:text-left">
              <span className="text-purple-600 text-xs font-bold uppercase tracking-wider block mb-1">
                Differentiating Edge
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Why Choose GenixoTech?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div
                    className={`p-3.5 ${pillar.bg} rounded-xl text-xl mt-1 shrink-0`}
                  >
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-base md:text-lg mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. VISION & MISSION STATEMENTS */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            {/* Vision Box */}
            <div className="bg-gradient-to-br from-blue-500/5 to-transparent border border-blue-500/10 p-8 md:p-10 rounded-2xl shadow-sm relative overflow-hidden group bg-white">
              <div className="absolute -bottom-6 -right-6 text-blue-500/5 font-black text-8xl pointer-events-none">
                <FaRocket />
              </div>
              <div className="w-12 h-12 bg-blue-500/10 text-blue-600 rounded-xl flex items-center justify-center text-xl mb-6">
                <FaRocket />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">
                Our Vision
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed italic">
                "To become a highly trusted technological training platform that
                empowers global learners with precise, actionable practical
                skills, persistent system innovation, and sustainable career
                launchpads."
              </p>
            </div>

            {/* Mission Box */}
            <div className="bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/10 p-8 md:p-10 rounded-2xl shadow-sm relative overflow-hidden group bg-white">
              <div className="absolute -bottom-6 -right-6 text-purple-500/5 font-black text-8xl pointer-events-none">
                <FaBullseye />
              </div>
              <div className="w-12 h-12 bg-purple-500/10 text-purple-600 rounded-xl flex items-center justify-center text-xl mb-6">
                <FaBullseye />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">
                Our Mission
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed italic">
                "To engineering top-tier, industry-relevant pedagogical
                workflows that systematically transform passive abstract
                concepts into verifiable hardware and software breakthroughs for
                real-world application."
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
