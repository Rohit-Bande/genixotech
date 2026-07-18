import React, { useRef, useState, useEffect } from "react";
import {
  BookOpen,
  Clock,
  Cpu,
  Award,
  CheckCircle2,
  Layers,
  Hammer,
  Sparkles,
  Zap,
  Building2,
  Briefcase,
  GraduationCap,
  ArrowRight,
  Terminal,
  Code2,
} from "lucide-react";

export default function RoboticsWorkshopPage() {
  const [activeTab, setActiveTab] = useState("day1");
  const [activeFormat, setActiveFormat] = useState(
    "3-Day Advanced Robotics Workshop (Recommended)",
  );

  const syllabusRef = useRef(null);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0 });

    const previousTitle = document.title;
    document.title =
      "Robotics Workshop for Engineering Colleges in Indore | Genixotech";

    const upsertMeta = (selector, attributes) => {
      let element = document.head.querySelector(selector);
      const created = !element;
      if (!element) {
        element = document.createElement("meta");
        document.head.appendChild(element);
      }
      Object.entries(attributes).forEach(([key, value]) =>
        element.setAttribute(key, value),
      );
      return created ? element : null;
    };

    const createdMeta = [
      upsertMeta('meta[name="description"]', {
        name: "description",
        content:
          "Book Genixotech's hands-on robotics workshop for engineering colleges in Indore. Learn Arduino, sensors, motors, robot programming and build live robotic projects.",
      }),
      upsertMeta('meta[name="keywords"]', {
        name: "keywords",
        content:
          "robotics workshop for engineering colleges, robotics workshop Indore, Arduino robotics training, college robotics workshop, robotics training in Indore",
      }),
      upsertMeta('meta[property="og:title"]', {
        property: "og:title",
        content: "Robotics Workshop for Engineering Colleges | Genixotech",
      }),
      upsertMeta('meta[property="og:description"]', {
        property: "og:description",
        content:
          "Practical robotics training with Arduino, sensors, motors, programming and live robot-building challenges.",
      }),
      upsertMeta('meta[property="og:type"]', {
        property: "og:type",
        content: "website",
      }),
    ].filter(Boolean);

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      name: "Robotics Workshop for Engineering Colleges",
      description:
        "A practical robotics workshop covering Arduino, embedded programming, sensors, actuators, motor control and autonomous robot development.",
      provider: {
        "@type": "Organization",
        name: "Genixotech",
        url: "https://genixotech.com/",
      },
      areaServed: { "@type": "City", name: "Indore" },
      inLanguage: "en-IN",
    });
    document.head.appendChild(schema);

    return () => {
      document.title = previousTitle;
      createdMeta.forEach((meta) => meta.remove());
      schema.remove();
    };
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

  const highlights = [
    "100% Practical & Hands-on Learning",
    "Industry-Oriented Robotics Curriculum",
    "Arduino & Embedded C Programming",
    "Mobile Robot Development",
    "Sensors, Motors & Robot Control",
    "Automation & Industry 4.0 Exposure",
    "Expert Industry Mentors",
    "Mini Project Development",
    "Participation Certificate",
    "Career Guidance & Internship Awareness",
  ];

  const targetAudiences = [
    "Engineering Colleges",
    "Polytechnic Institutes",
    "Diploma Colleges",
    "Technical Universities",
    "Robotics & Embedded Clubs",
    "Innovation Cells",
    "AICTE Skill Development Programs",
    "Placement Readiness Programs",
    "Technical Festivals",
    "Faculty Development Programs",
  ];

  const projects = [
    "Line Follower Robot",
    "Obstacle Avoidance Robot",
    "Bluetooth Controlled Robot",
    "Edge Detection Robot",
    "Autonomous Robotics Challenge",
  ];

  const outcomes = [
    "Understand Robotics Architecture",
    "Build Arduino-based Mobile Robots",
    "Interface Sensors & Actuators",
    "Develop Basic Robotics Applications",
    "Control DC Motors Using Motor Drivers",
    "Program Line Following and Obstacle Avoidance",
    "Understand Automation and Industry 4.0 Applications",
    "Build a Foundation for Advanced Robotics Development",
  ];

  const deliverables = [
    "Genixotech Participation Certificate",
    "Workshop Study Material",
    "Practical Session Notes",
    "Functional Robot-Building Experience",
    "Career Guidance Session",
    "Internship & Placement Roadmap",
  ];

  const choices = [
    "Industry-Oriented Robotics Curriculum",
    "Practical Learning with Real Hardware",
    "Expert Industry Mentors",
    "Arduino-Based Robotics Training",
    "Automation & Industry 4.0 Exposure",
    "Project-Based Learning Methodology",
    "Career Guidance & Internship Pathways",
    "Customized Workshops for Engineering Departments",
  ];

  const careerPaths = [
    "45-Day Robotics Engineer Professional Internship",
    "30-Day Robotics Professional Internship",
    "6-Month Embedded Systems Engineer Program (Flagship)",
    "Industry Projects & Placement Assistance",
  ];

  const formats = [
    {
      name: "2-Hour Robotics Awareness Session",
      desc: "Ideal for orientation programs and introductory seminars.",
    },
    {
      name: "Half-Day Robotics Workshop",
      desc: "Quick introduction to Arduino, sensors, and autonomous robots.",
    },
    {
      name: "1-Day Robotics Workshop",
      desc: "Fundamentals of Robotics with practical demonstrations and live experiments.",
    },
    {
      name: "2-Day Intensive Robotics Workshop",
      desc: "Arduino programming, sensor interfacing, motor-driver control, chassis assembly, and a functional robot project.",
    },
    {
      name: "3-Day Advanced Robotics Workshop (Recommended)",
      desc: "Complete hands-on training covering embedded systems, Arduino, sensors, motors, chassis assembly, autonomous navigation, Bluetooth control, and an innovation challenge.",
    },
  ];

  return (
    <div className="min-h-screen text-slate-800 font-sans selection:bg-purple-500/30 bg-white">
      {/* HERO SECTION */}
      <header className="relative overflow-hidden py-20 lg:py-5 border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 mb-6 border border-slate-200">
            {/* <Zap size={12} className="text-purple-500 fill-current" /> Learn •
            Connect • Innovate */}
          </div>
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900">
            Robotics Workshop
            <span className="bg-gradient-to-r from-blue-500 px-2 to-purple-500 bg-clip-text text-transparent">
              for Engineering Colleges
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 mb-4 font-medium">
            Build Autonomous Robots. Learn by Designing, Coding and Testing.
          </p>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-500 mb-8 leading-relaxed">
            The Genixotech Robotics Workshop for Engineering Colleges is a 3-day
            intensive, hands-on training program designed to introduce students
            to Robotics, Embedded Systems, Arduino, sensors, motors, robot
            assembly, autonomous navigation, sensors, motors, robot control,
            autonomous navigation, and Industry 4.0 through practical learning
            and real-world applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto px-8 py-3 rounded-xl font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25 hover:opacity-95 transition-all transform hover:-translate-y-0.5">
              Request College Proposal
            </button>
            <a
              onClick={(e) => scrollToSection(e, syllabusRef)}
              href="#syllabus"
              className="w-full sm:w-auto px-8 py-3 rounded-xl font-medium bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 transition-all text-center shadow-sm"
            >
              Explore Curriculum
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
                Workshop Formats
              </h4>
              <p className="text-sm font-semibold text-slate-700">
                Seminar / 1-Day / 2-Day / 3-Day Advanced
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center sm:justify-start">
            <div className="p-3 rounded-lg bg-purple-500/10 text-purple-600">
              <BookOpen size={24} />
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Core Methodology
              </h4>
              <p className="text-sm font-semibold text-slate-700">
                100% Practical & Hardware Lab Centric
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center sm:justify-start">
            <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-600">
              <Award size={24} />
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Deliverable Kit Outputs
              </h4>
              <p className="text-sm font-semibold text-slate-700">
                Verified Certificates & Real Prototype Deployments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE & PERFECT FOR */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className="text-blue-500" size={24} /> Why Choose
            Genixotech?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 text-sm text-slate-600"
              >
                <CheckCircle2 size={16} className="text-purple-500 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 leading-relaxed pt-2">
            Participants will assemble, program, test, and control functional
            robots while gaining exposure to robotics technologies used in
            manufacturing, healthcare, agriculture, logistics, and automation.
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <GraduationCap className="text-purple-500" size={24} /> Perfect For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {targetAudiences.map((audience, idx) => (
              <div
                key={idx}
                className="bg-white px-4 py-2.5 rounded-xl border border-slate-200/80 shadow-sm text-xs font-semibold text-slate-700 flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                {audience}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEDICATED ECOSYSTEM ALIGNMENT */}
      <section className="py-20 bg-slate-50/50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Dedicated Ecosystem Alignment
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Customized, direct value metrics addressing every critical
              academic stakeholder layer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Management */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
                  <Building2 size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  For College Management
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      size={14}
                      className="text-blue-500 shrink-0 mt-0.5"
                    />{" "}
                    Supports AICTE, NBA & NAAC initiatives
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      size={14}
                      className="text-blue-500 shrink-0 mt-0.5"
                    />{" "}
                    Promotes innovation and practical learning
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      size={14}
                      className="text-blue-500 shrink-0 mt-0.5"
                    />{" "}
                    Strengthens industry-academia collaboration
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      size={14}
                      className="text-blue-500 shrink-0 mt-0.5"
                    />{" "}
                    Enhances students' employability
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      size={14}
                      className="text-blue-500 shrink-0 mt-0.5"
                    />{" "}
                    Ideal for induction programs, technical fests and innovation
                    weeks
                  </li>
                </ul>
              </div>
            </div>

            {/* T&P */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4 border border-purple-100">
                  <Briefcase size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  For Training & Placement Cell
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      size={14}
                      className="text-purple-500 shrink-0 mt-0.5"
                    />{" "}
                    Introduces students to robotics and Industry 4.0
                    technologies
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      size={14}
                      className="text-purple-500 shrink-0 mt-0.5"
                    />{" "}
                    Improves practical and technical skills
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      size={14}
                      className="text-purple-500 shrink-0 mt-0.5"
                    />{" "}
                    Enhances internship and placement readiness
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      size={14}
                      className="text-purple-500 shrink-0 mt-0.5"
                    />{" "}
                    Encourages project-based learning
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      size={14}
                      className="text-purple-500 shrink-0 mt-0.5"
                    />{" "}
                    Bridges the industry skill gap
                  </li>
                </ul>
              </div>
            </div>

            {/* Faculty & Students */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col justify-between shadow-sm md:col-span-2 lg:col-span-1">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-100">
                  <GraduationCap size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  For Faculty & Students
                </h3>
                <h4 className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-2">
                  Faculty Members:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-emerald-500" />{" "}
                    Exposure to Robotics and Embedded Systems
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-emerald-500" />{" "}
                    Faculty Development Program support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-emerald-500" />{" "}
                    Assistance in establishing Robotics and Innovation Clubs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-emerald-500" />{" "}
                    Project mentoring framework & guidance
                  </li>
                </ul>
                <h4 className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-2">
                  Students:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-emerald-500" />{" "}
                    Learn Robotics through practical implementation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-emerald-500" />{" "}
                    Build autonomous robots &amp; interface sensors
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-emerald-500" />{" "}
                    Discover career opportunities in Robotics & Embedded
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE WORKSHOP CURRICULUM */}
      <section
        id="syllabus"
        ref={syllabusRef}
        className="py-20 max-w-5xl mx-auto px-4 sm:px-6 scroll-mt-6"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl flex items-center justify-center gap-2 text-slate-900 font-extrabold">
            <Layers className="text-blue-500" /> Workshop Curriculum
          </h2>
          <p className="text-slate-500 mt-2 text-sm">
            Comprehensive 3-Day breakdown mapping structural theory sections to
            live laboratory hardware setups.
          </p>
        </div>

        {/* Dynamic Day Switch Tabs */}
        <div className="flex border-b border-slate-200 mb-8 max-w-md mx-auto justify-center">
          <button
            onClick={() => setActiveTab("day1")}
            className={`flex-1 py-3 text-sm font-semibold border-b-2 text-center transition-colors ${
              activeTab === "day1"
                ? "border-purple-500 text-purple-600"
                : "border-transparent text-slate-400 hover:text-slate-600"
            }`}
          >
            Day 01
          </button>
          <button
            onClick={() => setActiveTab("day2")}
            className={`flex-1 py-3 text-sm font-semibold border-b-2 text-center transition-colors ${
              activeTab === "day2"
                ? "border-purple-500 text-purple-600"
                : "border-transparent text-slate-400 hover:text-slate-600"
            }`}
          >
            Day 02
          </button>
          <button
            onClick={() => setActiveTab("day3")}
            className={`flex-1 py-3 text-sm font-semibold border-b-2 text-center transition-colors ${
              activeTab === "day3"
                ? "border-purple-500 text-purple-600"
                : "border-transparent text-slate-400 hover:text-slate-600"
            }`}
          >
            Day 03
          </button>
        </div>

        {/* Dynamic Curriculum Modules Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          {activeTab === "day1" && (
            <div className="space-y-8 animate-fadeIn">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-100">
                  Module 1
                </span>
                <h3 className="text-lg font-semibold text-slate-800 mt-2 mb-4">
                  Introduction to Robotics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
                  <div className="bg-white p-4 rounded-xl border border-slate-200/60">
                    <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">
                      Students Explore
                    </h4>
                    <ul className="space-y-1.5">
                      <li>• What is Robotics?</li>
                      <li>• Evolution of Autonomous Robots</li>
                      <li>• Types and Anatomy of Robots</li>
                      <li>• Autonomous vs. Remote-Controlled Robots</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200/60">
                    <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">
                      Robotics Applications & Careers
                    </h4>
                    <ul className="space-y-1.5">
                      <li>• Manufacturing &amp; Warehouse Automation</li>
                      <li>• Healthcare, Agriculture &amp; Service Robotics</li>
                      <li>• Robotics Career Opportunities</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-100">
                  Module 2
                </span>
                <h3 className="text-lg font-semibold text-slate-800 mt-2 mb-4">
                  Embedded Systems &amp; Arduino
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
                  <div className="bg-white p-4 rounded-xl border border-slate-200/60">
                    <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">
                      Topics Covered
                    </h4>
                    <ul className="space-y-1.5">
                      <li>• Introduction to Embedded Systems</li>
                      <li>• Arduino UNO Architecture &amp; Arduino IDE</li>
                      <li>• Digital &amp; Analog I/O and GPIO</li>
                      <li>• Embedded C Basics &amp; Serial Communication</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-purple-100 bg-purple-50/20">
                    <h4 className="text-xs uppercase tracking-wider text-purple-600 font-bold mb-2 flex items-center gap-1">
                      <Code2 size={12} /> Live Practical Session
                    </h4>
                    <ul className="space-y-1.5 font-medium text-slate-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle2
                          size={14}
                          className="text-purple-500 shrink-0"
                        />{" "}
                        Arduino Setup
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2
                          size={14}
                          className="text-purple-500 shrink-0"
                        />{" "}
                        LED Blinking
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2
                          size={14}
                          className="text-purple-500 shrink-0"
                        />{" "}
                        Serial Monitor Communication
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2
                          size={14}
                          className="text-purple-500 shrink-0"
                        />{" "}
                        Digital Input &amp; Output
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "day2" && (
            <div className="space-y-8 animate-fadeIn">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-100">
                  Module 3
                </span>
                <h3 className="text-lg font-semibold text-slate-800 mt-2 mb-4">
                  Sensors, Motors &amp; Robot Assembly
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
                  <div className="bg-white p-4 rounded-xl border border-slate-200/60">
                    <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">
                      Students Work With
                    </h4>
                    <ul className="space-y-1.5">
                      <li>• IR Sensor Array</li>
                      <li>• Ultrasonic Sensor</li>
                      <li>• DC Motors &amp; Motor Driver</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200/60">
                    <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">
                      Topics
                    </h4>
                    <ul className="space-y-1.5">
                      <li>• Sensor Calibration &amp; Interfacing</li>
                      <li>• Motor Speed and Direction Control</li>
                      <li>• Robot Chassis Assembly &amp; Testing</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-100">
                  Module 4
                </span>
                <h3 className="text-lg font-semibold text-slate-800 mt-2 mb-4">
                  Autonomous &amp; Bluetooth Robot Control
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
                  <div className="bg-white p-4 rounded-xl border border-slate-200/60">
                    <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">
                      Students Learn
                    </h4>
                    <ul className="space-y-1.5">
                      <li>• Line-Following Logic</li>
                      <li>• Obstacle Detection &amp; Navigation</li>
                      <li>• Bluetooth Mobile Control</li>
                      <li>• Bluetooth HC-05 Integration</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-purple-100 bg-purple-50/20">
                    <h4 className="text-xs uppercase tracking-wider text-purple-600 font-bold mb-2 flex items-center gap-1">
                      <Code2 size={12} /> Live Practical Session
                    </h4>
                    <ul className="space-y-1.5 font-medium text-slate-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle2
                          size={14}
                          className="text-purple-500 shrink-0"
                        />{" "}
                        Line Follower Robot
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2
                          size={14}
                          className="text-purple-500 shrink-0"
                        />{" "}
                        Obstacle Avoidance Robot
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2
                          size={14}
                          className="text-purple-500 shrink-0"
                        />{" "}
                        Bluetooth Controlled Robot
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "day3" && (
            <div className="space-y-8 animate-fadeIn">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-100">
                  Module 5
                </span>
                <h3 className="text-lg font-semibold text-slate-800 mt-2 mb-4">
                  Robot Intelligence &amp; Industrial Applications
                </h3>
                <div className="bg-white p-5 rounded-xl border border-slate-200/60 text-sm text-slate-600">
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-3">
                    Topics Covered
                  </h4>
                  <ul className="space-y-2">
                    <li>• Robot Control Architectures</li>
                    <li>• Real-Time Sensor Feedback</li>
                    <li>• Industrial and Service Robotics Overview</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-100">
                  Module 6
                </span>
                <h3 className="text-lg font-semibold text-slate-800 mt-2 mb-4">
                  Innovation Challenge
                </h3>
                <div className="bg-gradient-to-br from-purple-500/5 to-blue-500/5 border border-purple-500/10 p-5 rounded-xl text-sm text-slate-600 space-y-3">
                  <p>
                    Students work in teams to design and develop a functional
                    mobile robot using sensors, Arduino boards, motor drivers,
                    robot chassis, and control algorithms.
                  </p>
                  <p className="font-semibold text-slate-800 flex items-center gap-2 text-xs">
                    <Terminal size={14} className="text-purple-500" /> Teams
                    present their final working solutions to industry mentors to
                    receive core technical evaluation and expert feedback loops.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* HARDWARE TECHNOLOGIES COVERED */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h3 className="text-center text-xs uppercase tracking-widest text-slate-400 font-bold mb-8">
            Technologies, Tools &amp; Frameworks Covered
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/50">
              <h4 className="text-[10px] text-purple-400 font-bold tracking-wider uppercase mb-1">
                Programming
              </h4>
              <p className="text-sm font-semibold text-slate-200">Embedded C</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/50">
              <h4 className="text-[10px] text-purple-400 font-bold tracking-wider uppercase mb-1">
                Hardware
              </h4>
              <p className="text-xs font-semibold text-slate-200">
                Arduino UNO / Robot Chassis
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/50">
              <h4 className="text-[10px] text-purple-400 font-bold tracking-wider uppercase mb-1">
                Communication
              </h4>
              <p className="text-xs font-semibold text-slate-200">
                UART / Bluetooth
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/50">
              <h4 className="text-[10px] text-purple-400 font-bold tracking-wider uppercase mb-1">
                Sensors
              </h4>
              <p className="text-xs font-semibold text-slate-200">
                IR / Ultrasonic / Motor Driver
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/50 col-span-2 sm:col-span-1">
              <h4 className="text-[10px] text-purple-400 font-bold tracking-wider uppercase mb-1">
                Software
              </h4>
              <p className="text-xs font-semibold text-slate-200">
                Arduino IDE / Embedded C
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HANDS-ON PROJECTS GRID */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl flex items-center justify-center gap-3 text-slate-900">
            <Hammer className="text-purple-500" /> Hands-on Projects
          </h2>
          <p className="text-slate-600 mt-2 text-sm">
            Students build and experience live hardware components directly on
            site.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-blue-500/20 transition-all group"
            >
              <div>
                <Cpu
                  className="text-purple-500 mb-4 group-hover:scale-110 transition-transform"
                  size={28}
                />
                <h3 className="text-sm font-bold text-slate-800 group-hover:text-purple-600 transition-colors mb-2">
                  {project}
                </h3>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Lab Environment</span>
                <span className="text-purple-600 font-medium group-hover:translate-x-0.5 transition-transform">
                  Build →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OUTCOMES & DELIVERABLES */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <CheckCircle2 className="text-purple-500" size={20} /> Learning
              Outcomes
            </h3>
            <div className="space-y-3">
              {outcomes.map((outcome, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 mt-2" />
                  <span>
                    After completing the workshop, students will be able to{" "}
                    {outcome.charAt(0).toLowerCase() + outcome.slice(1)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Award className="text-blue-500" size={20} /> Workshop
              Deliverables
            </h3>
            <div className="space-y-4">
              {deliverables.map((deliverable, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700 pb-3 border-b border-slate-100 last:border-0 last:pb-0"
                >
                  <div className="w-6 h-6 rounded bg-blue-50 text-blue-600 flex items-center justify-center text-[10px]">
                    0{idx + 1}
                  </div>
                  {deliverable}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FLEXIBLE DURATION SELECTOR TAB RIG */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Available Engagement Formats
          </h2>
          <p className="text-slate-500 text-sm mt-2">
            Select the configuration architecture that matches your academic
            time budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1 flex flex-col gap-2">
            {formats.map((f) => (
              <button
                key={f.name}
                onClick={() => setActiveFormat(f.name)}
                className={`w-full text-left px-4 py-3 rounded-xl font-medium text-xs transition-all flex items-center justify-between border ${
                  activeFormat === f.name
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent shadow-md"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                }`}
              >
                <span className="truncate pr-2">{f.name}</span>
                <ArrowRight
                  size={14}
                  className={`shrink-0 ${activeFormat === f.name ? "opacity-100" : "opacity-40"}`}
                />
              </button>
            ))}
          </div>

          <div className="md:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm min-h-[220px] flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 flex items-center gap-1 mb-2">
                <Clock size={12} /> Format Configuration Overview
              </span>
              <h3 className="text-lg font-bold text-slate-800 mb-3">
                {activeFormat}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {formats.find((f) => f.name === activeFormat)?.desc}
              </p>
            </div>
            <div className="border-t border-slate-100 pt-4 mt-6 text-[11px] text-slate-400">
              * Structured deployment paths include hardware kit sourcing
              roadmaps and post-workshop support loops.
            </div>
          </div>
        </div>
      </section>

      {/* INSTITUTIONAL VALUE REASONS */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Why Engineering Colleges Choose Genixotech
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {choices.map((choice, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3"
              >
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">
                  {choice}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTINUOUS CAREER PATHS */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          Career Path After the Workshop
        </h2>
        <p className="text-slate-500 text-sm mb-8 max-w-xl mx-auto">
          This workshop serves as the foundation for students interested in
          Robotics, Embedded Systems, Automation, and Intelligent Product
          Development.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-12">
          {careerPaths.map((path, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm text-xs font-semibold text-slate-700 flex items-center gap-3 hover:border-purple-500/30 transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-purple-500 shrink-0" />
              {path}
            </div>
          ))}
        </div>

        {/* OUTCOME / CERTIFICATE 3D BOX ROW PREVIEW */}
        <div className="bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-purple-500/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center text-left gap-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">
              Get Certified Upon Completion
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Receive a verified Genixotech Participation Certificate showcasing
              your newly acquired technical abilities in circuit analysis, code
              execution, component interface, and wireless telemetry deployment
              maps.
            </p>
            <ul className="space-y-1 text-xs text-slate-500 font-medium">
              <li>• Shareable on LinkedIn Profiles &amp; Technical CVs</li>
              <li>• Validated tracking credential signature references</li>
            </ul>
          </div>

          <div className="w-full md:w-72 aspect-[4/3] bg-white rounded-xl border border-slate-200 shadow-xl flex flex-col items-center justify-center p-6 text-center relative rotate-2 hover:rotate-0 transition-transform duration-300 shrink-0">
            <Award className="text-purple-500 mb-2" size={40} />
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
              Certificate of Participation
            </span>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 my-2 rounded-full" />
            <p className="text-xs font-serif font-semibold text-slate-700">
              Robotics Workshop
            </p>
            <div className="w-full h-2 bg-slate-100 mt-4 rounded" />
            <div className="w-2/3 h-2 bg-slate-100 mt-2 rounded" />
          </div>
        </div>
      </section>
    </div>
  );
}
