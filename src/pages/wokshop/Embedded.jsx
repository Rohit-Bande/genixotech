import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  Box,
  CheckCircle2,
  CircuitBoard,
  Clock,
  Code2,
  Cpu,
  GraduationCap,
  Hammer,
  Layers,
  PackageCheck,
  Sparkles,
  TestTube2,
} from "lucide-react";

const modules = {
  day1: [
    {
      number: "01",
      title: "Introduction to PCB Technology",
      duration: "45 min",
      topics: [
        "What a PCB is and why it matters",
        "PCB vs. breadboard and common applications",
        "Overview of the PCB manufacturing process",
        "Single, double and multilayer PCBs",
        "Flex, rigid, rigid-flex and metal-core PCBs",
      ],
    },
    {
      number: "02",
      title: "PCB Components, Packages & Footprints",
      duration: "45 min",
      topics: [
        "Through-hole and SMD components",
        "DIP, SOIC, TQFP, QFN and BGA introduction",
        "Reading component datasheets",
        "Understanding symbols vs. footprints",
      ],
    },
    {
      number: "03",
      title: "Industry PCB Design Flow",
      duration: "45 min",
      topics: [
        "Idea and circuit design",
        "Schematic and component selection",
        "Footprint assignment and PCB layout",
        "DRC, Gerber, manufacturing, assembly and testing",
      ],
    },
    {
      number: "04",
      title: "Introduction to KiCad / EasyEDA",
      duration: "1 hour",
      topics: [
        "Installation and interface orientation",
        "Projects, libraries and preferences",
        "Essential shortcuts",
        "Practical library management",
      ],
    },
    {
      number: "05",
      title: "Schematic Design",
      duration: "2 hours",
      practical: "LED Blinker or 555 Timer Circuit",
      topics: [
        "Create a project and add components",
        "Power symbols, ground and net labels",
        "Annotation, ERC and schematic best practices",
        "Generate a Bill of Materials (BOM)",
      ],
    },
    {
      number: "06",
      title: "PCB Layout Basics",
      duration: "2 hours",
      practical: "Create Your First PCB",
      topics: [
        "Board outline and component placement",
        "Manual vs. automatic routing",
        "Track width, clearance and copper pour",
        "Ground plane, silkscreen and reference designators",
        "Mounting holes and layout review",
      ],
    },
  ],
  day2: [
    {
      number: "07",
      title: "PCB Routing Best Practices",
      duration: "1 hour",
      topics: [
        "45-degree routing techniques",
        "Power, signal and ground routing",
        "Vias and thermal relief",
        "Common routing mistakes and prevention",
      ],
    },
    {
      number: "08",
      title: "Design Rules",
      duration: "45 min",
      topics: [
        "DRC and ERC",
        "Spacing and copper clearance",
        "Track width and hole size",
        "Manufacturer-specific design constraints",
      ],
    },
    {
      number: "09",
      title: "Manufacturing Files",
      duration: "1 hour",
      practical: "Prepare a Manufacturing Package",
      topics: [
        "Gerber and drill files",
        "BOM and pick-and-place files",
        "3D inspection and export",
        "How to order a PCB online",
      ],
    },
    {
      number: "10",
      title: "PCB Fabrication Process",
      duration: "45 min",
      topics: [
        "How PCB factories manufacture boards",
        "FR4 and copper thickness",
        "Solder mask and silkscreen",
        "HASL, ENIG and OSP surface finishes",
      ],
    },
    {
      number: "11",
      title: "PCB Assembly",
      duration: "1.5 hours",
      practical: "THT and SMD Soldering Practice",
      topics: [
        "Soldering tools, flux, wire and temperature",
        "THT and introductory SMD soldering",
        "Desoldering methods",
        "Common mistakes and workshop safety",
      ],
    },
    {
      number: "12",
      title: "PCB Testing & Troubleshooting",
      duration: "1 hour",
      practical: "Safe Power-up and Fault Finding",
      topics: [
        "Visual inspection and continuity testing",
        "Short-circuit checks and multimeter usage",
        "Safe power-up procedure",
        "Basic troubleshooting workflow",
      ],
    },
    {
      number: "13",
      title: "Independent Mini Project",
      duration: "3 hours",
      practical: "Design • Validate • Export",
      topics: [
        "Create a schematic and assign footprints",
        "Design the board and run ERC / DRC",
        "Generate Gerber and drill files",
        "Inspect the PCB in 3D",
        "Prepare a manufacturing-ready package",
      ],
    },
  ],
};

const audiences = [
  "ECE, EE, EEE & EI Students",
  "Mechatronics Students",
  "Diploma Students",
  "Robotics Enthusiasts",
  "IoT Learners",
  "Embedded Systems Beginners",
];

const outcomes = [
  "Understand the complete PCB design lifecycle",
  "Read datasheets and select appropriate footprints",
  "Create clear, professional electronic schematics",
  "Design single- and simple double-layer PCBs",
  "Apply routing and design-rule best practices",
  "Generate manufacturing-ready Gerber and drill files",
  "Assemble and test basic PCBs safely",
  "Order fabricated PCBs from manufacturers",
];

const deliverables = [
  "Complete PCB design files",
  "Manufacturing-ready Gerber package",
  "Bill of Materials (BOM)",
  "PCB manufacturing checklist",
  "Design-rule cheat sheet",
  "KiCad shortcut guide",
  "Sample PCB library and workshop handbook",
  "Genixotech Certificate of Completion",
];

const projectLevels = [
  {
    level: "Beginner",
    badgeClass: "bg-blue-50 text-blue-700",
    projects: ["LED Flasher", "Power Supply Board", "Traffic Light Circuit"],
  },
  {
    level: "Intermediate",
    badgeClass: "bg-purple-50 text-purple-700",
    projects: ["Arduino Shield", "Relay Driver Board", "IR Sensor Board"],
  },
  {
    level: "Advanced",
    badgeClass: "bg-emerald-50 text-emerald-700",
    projects: [
      "ESP32 Development Board",
      "ATmega328P Minimum System",
      "STM32 Breakout Board",
    ],
  },
];

const tools = [
  "Laptop with KiCad",
  "Multimeter",
  "Soldering Station",
  "Flux & Solder Wire",
  "Desoldering Pump / Wick",
  "Tweezers & Side Cutter",
  "Magnifying Glass",
  "Prototype Components",
];

function usePageSeo() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title =
      "PCB Design Workshop in Indore | 2-Day Hands-on Training | Genixotech";

    const definitions = [
      {
        selector: 'meta[name="description"]',
        attrs: {
          name: "description",
          content:
            "Join Genixotech's 2-day hands-on PCB design workshop in Indore. Learn KiCad, schematic design, PCB layout, Gerber generation, soldering, assembly and testing.",
        },
      },
      {
        selector: 'meta[name="keywords"]',
        attrs: {
          name: "keywords",
          content:
            "PCB design workshop in Indore, KiCad training, PCB layout course, electronics workshop, PCB fabrication training, PCB soldering workshop",
        },
      },
      {
        selector: 'meta[property="og:title"]',
        attrs: {
          property: "og:title",
          content: "2-Day Hands-on PCB Design Workshop | Genixotech",
        },
      },
      {
        selector: 'meta[property="og:description"]',
        attrs: {
          property: "og:description",
          content:
            "Design, build and test your own PCB with practical KiCad, fabrication, soldering and testing sessions.",
        },
      },
      {
        selector: 'meta[property="og:type"]',
        attrs: { property: "og:type", content: "website" },
      },
    ];

    const snapshots = definitions.map(({ selector, attrs }) => {
      let element = document.head.querySelector(selector);
      const existed = Boolean(element);
      const previous = existed
        ? Object.fromEntries(
            Array.from(element.attributes).map(({ name, value }) => [
              name,
              value,
            ]),
          )
        : null;
      if (!element) {
        element = document.createElement("meta");
        document.head.appendChild(element);
      }
      Object.entries(attrs).forEach(([key, value]) =>
        element.setAttribute(key, value),
      );
      return { element, existed, previous };
    });

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      name: "Genixotech PCB Design Workshop",
      description:
        "A two-day practical PCB design workshop covering KiCad, schematics, PCB layout, design rules, Gerber generation, assembly and testing.",
      provider: {
        "@type": "Organization",
        name: "Genixotech",
        url: "https://genixotech.com/",
      },
      timeRequired: "PT16H",
      educationalLevel: "Beginner to Intermediate",
      inLanguage: "en-IN",
      areaServed: { "@type": "City", name: "Indore" },
    });
    document.head.appendChild(schema);

    return () => {
      document.title = previousTitle;
      snapshots.forEach(({ element, existed, previous }) => {
        if (!existed) return element.remove();
        Array.from(element.attributes).forEach(({ name }) =>
          element.removeAttribute(name),
        );
        Object.entries(previous).forEach(([key, value]) =>
          element.setAttribute(key, value),
        );
      });
      schema.remove();
    };
  }, []);
}

export default function PCBDesignWorkshopPage() {
  const [activeDay, setActiveDay] = useState("day1");
  const curriculumRef = useRef(null);
  usePageSeo();

  const scrollToCurriculum = (event) => {
    event.preventDefault();
    curriculumRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="min-h-screen bg-white font-sans text-slate-800 selection:bg-purple-500/30">
      <header className="relative overflow-hidden border-b border-slate-200 py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50 px-4 py-1.5 text-xs font-bold text-purple-700">
            <CircuitBoard size={14} /> 2 Days • 16 Hours • 100% Hands-on
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            PCB Design Workshop
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text px-2 text-transparent">
              in Indore
            </span>
          </h1>
          <p className="mx-auto mb-4 max-w-2xl text-lg font-semibold text-slate-700">
            Design • Build • Test Your Own PCB
          </p>
          <p className="mx-auto mb-8 max-w-3xl text-sm leading-relaxed text-slate-500 sm:text-base">
            A practical, industry-oriented workshop by Genixotech that gives
            participants the confidence to design schematics, create PCB
            layouts, generate manufacturing files, assemble components, and
            safely test their own boards—no prior PCB design experience needed.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/919171805055?text=I%20want%20details%20about%20the%202-Day%20PCB%20Design%20Workshop"
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5 hover:opacity-95 sm:w-auto"
            >
              Request Workshop Details
            </a>
            <a
              href="#curriculum"
              onClick={scrollToCurriculum}
              className="w-full rounded-xl border border-slate-200 bg-white px-8 py-3 text-center font-medium text-slate-700 shadow-sm transition-all hover:bg-slate-50 sm:w-auto"
            >
              Explore Curriculum
            </a>
          </div>
        </div>
      </header>

      <section
        aria-label="Workshop summary"
        className="border-b border-slate-200 bg-white/60"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-6 text-center sm:grid-cols-3 sm:px-6 sm:text-left">
          {[
            [
              Clock,
              "Duration",
              "2 Days • 16 Learning Hours",
              "bg-blue-50 text-blue-600",
            ],
            [
              BookOpen,
              "Methodology",
              "100% Practical & Project-Based",
              "bg-purple-50 text-purple-600",
            ],
            [
              Award,
              "Final Output",
              "Manufacturing-Ready PCB Package",
              "bg-emerald-50 text-emerald-600",
            ],
          ].map(([Icon, label, value, iconClass]) => (
            <div
              key={label}
              className="flex items-center justify-center gap-4 sm:justify-start"
            >
              <div className={`rounded-lg p-3 ${iconClass}`}>
                <Icon size={24} />
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {label}
                </h2>
                <p className="text-sm font-semibold text-slate-700">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            <Sparkles className="text-blue-500" /> Built for Practical
            Confidence
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-slate-600">
            This workshop does not promise overnight expertise. It builds a
            reliable foundation and guides every participant through the full
            design-to-testing workflow using practical exercises and an
            independent mini project.
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "Complete design-to-manufacturing workflow",
              "KiCad-first practical training",
              "Real schematic and layout exercises",
              "Gerber and BOM generation",
              "Soldering and assembly practice",
              "Multimeter-based PCB testing",
              "Industry-oriented design rules",
              "Independent final mini project",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-2.5 text-sm text-slate-600"
              >
                <CheckCircle2
                  size={16}
                  className="mt-0.5 shrink-0 text-purple-500"
                />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-900">
            <GraduationCap className="text-purple-500" /> Who Should Attend?
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {audiences.map((audience) => (
              <div
                key={audience}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-slate-700 shadow-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />{" "}
                {audience}
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-emerald-100 bg-emerald-50 p-4 text-xs leading-relaxed text-emerald-800">
            <strong>Prerequisite:</strong> Basic knowledge of resistors, LEDs,
            transistors and ICs is helpful. No previous PCB design experience is
            required.
          </div>
        </div>
      </section>

      <section
        ref={curriculumRef}
        id="curriculum"
        className="scroll-mt-6 border-y border-slate-200 bg-slate-50/50 py-20"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="flex items-center justify-center gap-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              <Layers className="text-blue-500" /> 2-Days Workshop Curriculum
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Structured to move from fundamentals to an independently prepared
              PCB manufacturing package.
            </p>
          </div>

          <div className="mx-auto mb-8 flex max-w-md border-b border-slate-200">
            {[
              ["day1", "Day 01 • Design"],
              ["day2", "Day 02 • Build & Test"],
            ].map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveDay(key)}
                className={`flex-1 border-b-2 py-3 text-sm font-semibold transition-colors ${
                  activeDay === key
                    ? "border-purple-500 text-purple-600"
                    : "border-transparent text-slate-400 hover:text-slate-600"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {modules[activeDay].map((module) => (
              <article
                key={module.number}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600">
                      Module {module.number}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-slate-900">
                      {module.title}
                    </h3>
                  </div>
                  <span className="shrink-0 rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold text-blue-700">
                    {module.duration}
                  </span>
                </div>
                <ul className="space-y-2 text-xs leading-relaxed text-slate-600">
                  {module.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2">
                      <CheckCircle2
                        size={13}
                        className="mt-0.5 shrink-0 text-emerald-500"
                      />{" "}
                      {topic}
                    </li>
                  ))}
                </ul>
                {module.practical && (
                  <div className="mt-5 flex items-center gap-2 rounded-lg border border-purple-100 bg-purple-50/60 px-3 py-2 text-xs font-semibold text-purple-700">
                    <Code2 size={14} /> Hands-on: {module.practical}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-xs font-bold uppercase tracking-widest text-slate-400">
            Recommended Software & Workshop Tools
          </h2>
          <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-6">
              <h3 className="mb-2 flex items-center gap-2 font-bold text-purple-300">
                <CircuitBoard size={18} /> KiCad — Primary Software
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                Free, open-source and widely used for professional schematic
                capture and PCB layout.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-6">
              <h3 className="mb-2 flex items-center gap-2 font-bold text-blue-300">
                <Box size={18} /> EasyEDA — Optional
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                A beginner-friendly browser-based option with an integrated
                manufacturing workflow.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {tools.map((tool) => (
              <div
                key={tool}
                className="rounded-xl border border-slate-700/70 bg-slate-800/60 p-3 text-center text-xs font-semibold text-slate-200"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="flex items-center justify-center gap-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            <Hammer className="text-purple-500" /> Choose Your Mini Project
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Participants select a project based on their current electronics
            experience.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projectLevels.map(({ level, projects, badgeClass }) => (
            <article
              key={level}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div
                className={`mb-5 inline-flex rounded-full px-3 py-1 text-xs font-bold ${badgeClass}`}
              >
                {level}
              </div>
              <ul className="space-y-3">
                {projects.map((project) => (
                  <li
                    key={project}
                    className="flex items-center gap-3 border-b border-slate-100 pb-3 text-sm font-semibold text-slate-700 last:border-0"
                  >
                    <Cpu size={16} className="shrink-0 text-purple-500" />{" "}
                    {project}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-900">
              <TestTube2 className="text-purple-500" /> Learning Outcomes
            </h2>
            <div className="space-y-3">
              {outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="flex items-start gap-3 text-sm text-slate-600"
                >
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-emerald-500"
                  />{" "}
                  {outcome}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-900">
              <PackageCheck className="text-blue-500" /> Participant
              Deliverables
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {deliverables.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 text-xs font-semibold text-slate-700"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-blue-50 text-[10px] text-blue-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-purple-500/10 bg-gradient-to-r from-blue-500/5 to-purple-500/5 p-8 sm:p-12">
          <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
          <Award className="mx-auto mb-4 text-purple-500" size={44} />
          <h2 className="mb-3 text-3xl font-bold text-slate-900">
            Ready to Design Your First PCB?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-slate-600">
            Bring your laptop and basic electronics knowledge. Leave with
            complete design files, a manufacturing package, practical assembly
            experience, and the confidence to continue building.
          </p>
          <a
            href="https://wa.me/919171805055?text=I%20want%20to%20book%20the%20Genixotech%20PCB%20Design%20Workshop"
            target="_blank"
            rel="noreferrer"
            className="relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
          >
            Book PCB Workshop <ArrowRight size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}
