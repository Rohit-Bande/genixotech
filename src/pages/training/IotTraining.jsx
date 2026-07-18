import React from "react";
import { Link } from "react-router-dom";
import { IoMail } from "react-icons/io5";
import {
  FaPhone,
  FaCode,
  FaWifi,
  FaMicrochip,
  FaBriefcase,
  FaClock,
  FaBookOpen,
  FaCircleCheck,
  FaGears,
  FaServer,
  FaGraduationCap,
  FaUserTie,
  FaChalkboardUser,
} from "react-icons/fa6";

const IotTraining = () => {
  const modulesData = [
    {
      title: "Module 1: Programming Foundation",
      weeks: "Week 1",
      desc: '"Strong code logic powers flawless remote device configurations."',
      subsections: [
        {
          name: "C Programming & Embedded Fundamentals",
          items: [
            "Introduction to Embedded Systems",
            "Fundamentals of C",
            "Operators",
            "Control Statements",
            "Loops",
            "Functions",
            "Arrays",
            "Strings",
            "Pointers",
            "Storage Classes",
          ],
        },
      ],
      highlights: [
        "Programming Exercises",
        "Logic Building Modules",
        "Problem Solving Frameworks",
      ],
    },
    {
      title: "Module 2: Internet of Things Fundamentals",
      weeks: "Week 2",
      subsections: [
        {
          name: "IoT Architectural Layouts",
          items: [
            "What is IoT?",
            "Machine-to-Machine Communication",
            "Industry 4.0 Architecture",
            "IoT Standards",
            "IoT Security Frameworks",
            "IoT Job Market Overview",
            "Indian IoT Ecosystem Platforms",
          ],
        },
        {
          name: "Hardware Platform Landscapes",
          items: [
            "Arduino UNO",
            "Arduino Yun",
            "Raspberry Pi Ecosystem",
            "BeagleBone Black",
            "Intel Edison",
            "Galileo Hardware Boards",
          ],
        },
      ],
      highlights: [
        "Arduino IDE Installation",
        "Development Environment Benchmarking",
      ],
    },
    {
      title: "Module 3: Arduino Programming & Sensor Integration",
      weeks: "Week 3",
      subsections: [
        {
          name: "AVR Microcontroller Control Elements",
          items: [
            "AVR Basics",
            "GPIO Registers",
            "Timers",
            "Counters",
            "Interrupts",
            "PWM Signal Controls",
          ],
        },
        {
          name: "Hardware Communications & Switches",
          items: [
            "Serial Communication",
            "RS232 Standard",
            "Relay Automation Drivers",
            "Bluetooth HC-05 Triggers",
          ],
        },
        {
          name: "Sensor Array Interfacing",
          items: [
            "IR Sensor Boards",
            "Ultrasonic Sensors",
            "Distance Measurement Matrix",
            "Level Monitoring Nodes",
          ],
        },
      ],
      highlights: [
        "Smart Lighting Deployments",
        "Bluetooth Home Automation",
        "Sensor Telemetry Dashboards",
      ],
    },
    {
      title: "Module 4: ESP8266 & NodeMCU Cloud Automation",
      weeks: "Week 4",
      subsections: [
        {
          name: "Edge Wireless Controllers",
          items: [
            "NodeMCU Architecture",
            "ESP8266 Wi-Fi Modems",
            "GPIO Node Configurations",
            "Wi-Fi Communication Layers",
          ],
        },
        {
          name: "Cloud Apps & Broker Layers",
          items: [
            "Blynk Platform Integration",
            "Mobile App UI Frameworks",
            "MQTT Protocol Basics",
            "MQTT Brokers",
            "Publish/Subscribe Topologies",
          ],
        },
      ],
      highlights: [
        "Wi-Fi Controlled Appliances",
        "Mobile Automation Bridges",
        "MQTT Data Communication Labs",
      ],
    },
    {
      title: "Module 5: Python for IoT Platforms",
      weeks: "Week 5",
      subsections: [
        {
          name: "Python Engine Foundations",
          items: [
            "Python Basics",
            "Operators & Loops",
            "Lists & Tuples",
            "Sets & Dictionaries",
            "Functions & Lambda Expressions",
            "Modules & Packages",
            "File Handling Operations",
          ],
        },
      ],
      highlights: ["Data Processing Frameworks", "Edge Edge Automation Macros"],
    },
    {
      title: "Module 6: Raspberry Pi & Edge Computing Hubs",
      weeks: "Week 6",
      subsections: [
        {
          name: "Single Board Computers Environment",
          items: [
            "Raspberry Pi Installation Profiles",
            "Raspbian OS Ecosystem",
            "Linux GUI & Command Line Shells",
            "GPIO Peripheral Interfacing",
            "Serial Hardware Interfacing",
            "Motor Control Actuation",
          ],
        },
        {
          name: "Advanced Gateway Modules",
          items: [
            "Raspberry Pi configured as MQTT Broker",
            "Edge Device Local Telemetry Processing",
          ],
        },
      ],
      highlights: [
        "Raspberry Pi Automation Blueprints",
        "Edge Gateway Architecture Deployment",
      ],
    },
    {
      title: "Module 7: Wireless Communication Protocols & Capstone Portfolio",
      weeks: "Week 7",
      subsections: [
        {
          name: "Wireless Transport Protocols",
          items: [
            "ZigBee Networks",
            "GSM Network Modules",
            "Bluetooth Protocols",
            "ESP8266 Over-The-Air Meshes",
          ],
        },
        {
          name: "Career Accelerator Frameworks",
          items: [
            "Resume Refactoring",
            "GitHub Repository Portfolios",
            "LinkedIn Profile Upgrades",
            "Technical Interview Cracking Paths",
            "HR Mock Interviews",
          ],
        },
      ],
      highlights: [
        "Production Grade Project Handover",
        "Portfolio Review Assurances",
      ],
    },
  ];

  const targetAudience = [
    {
      title: "For Engineering & Diploma Students",
      icon: <FaGraduationCap className="text-blue-500 text-xl" />,
      points: [
        "Learn Industry 4.0 Systems",
        "Build Smart IoT Products",
        "Improve Practical Skills",
        "Prepare for Campus Placements",
      ],
    },
    {
      title: "For Fresh Graduates & Job Seekers",
      icon: <FaUserTie className="text-purple-500 text-xl" />,
      points: [
        "Bridge the Industry Skill Gap",
        "Learn End-to-End IoT Assets",
        "Build Real Products",
        "Gain Real Industry Experience",
      ],
    },
    {
      title: "For Faculty Members & Researchers",
      icon: <FaChalkboardUser className="text-blue-500 text-xl" />,
      points: [
        "Upgrade IoT Lab Curriculums",
        "Mentor Student Innovations",
        "Conduct Advanced Practical Sessions",
      ],
    },
  ];

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="w-full min-h-screen text-slate-800 font-sans pb-16">
      {/* HEADER HERO SECTION */}

      <header className="w-full flex justify-center relative overflow-hidden py-8 px-4 text-center border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 pointer-events-none" />
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center w-[85%]">
          <div className=" mx-auto relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mt-1 mb-4 tracking-tight text-white leading-tight">
              <span className="md:whitespace">
                Genixotech IoT Engineer Professional Internship
              </span>
              <span className="md:block mt-1 md:mt-2">Engineer Program</span>
            </h1>
            <p className="text-white max-w-3xl mx-auto text-base md:text-lg font-medium leading-relaxed">
              Master Arduino, ESP8266, NodeMCU, Raspberry Pi, Python, MQTT, IoT
              Clouds, Sensors, Wireless Communication, and Smart Automation
              through real-world, project-based learning.
            </p>
          </div>
          <div className="z-10 flex justify-center">
            <img
              className="h-100 w-100"
              src="/gifs/web (7).gif"
              alt="embeddedImg"
            />
          </div>
        </div>
      </header>

      {/* METRIC SUB-BANNER CARD */}
      <div className="max-w-6xl mx-auto px-4 -mt-8 mb-20 relative z-10">
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Accelerated IoT Product Development Internship Layout
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              An exhaustive 100% practical curriculum mapping program tailored
              to bridge theoretical gaps and equip you with market-ready
              connected hardware skillsets.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {[
              {
                label: "45 Days Duration",
                desc: "7-Week Focused Tracks",
                icon: <FaClock className="text-purple-500" />,
              },
              {
                label: "100% Practical Labs",
                desc: "No Dry Lectures",
                icon: <FaGears className="text-purple-500" />,
              },
              {
                label: "Hardware Centric",
                desc: "Active Architecture",
                icon: <FaCode className="text-purple-500" />,
              },
              {
                label: "15+ Smart Projects",
                desc: "Industry Standards",
                icon: <FaMicrochip className="text-purple-500" />,
              },
              {
                label: "Career & Placement",
                desc: "Portfolio Validation",
                icon: <FaBriefcase className="text-purple-500" />,
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 transition-all duration-300 hover:bg-blue-400 hover:text-white hover:border-blue-700 flex flex-col items-center"
              >
                <div className={`text-2xl mb-2`}>{stat.icon}</div>
                <h4 className="text-sm font-bold">{stat.label}</h4>
                <p className="text-xs mt-0.5">{stat.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center text-xs font-semibold text-slate-500 mt-8 pt-6 border-t border-slate-100 text-center">
            <div className="flex items-center gap-2 justify-center">
              <FaCircleCheck className="text-green-500" /> Real Hardware
              Automation Kits
            </div>
            <div className="flex items-center gap-2 justify-center">
              <FaCircleCheck className="text-green-500" /> Professional
              Internship Certificates
            </div>
            <div className="flex items-center gap-2 justify-center">
              <FaCircleCheck className="text-green-500" /> End-to-End Cloud
              Cloud Deployments
            </div>
            <div className="flex items-center gap-2 justify-center">
              <FaCircleCheck className="text-green-500" /> Portfolio
              Optimization Guides
            </div>
          </div>
        </div>
      </div>

      {/* MAIN TWO-COLUMN WORKSPACE WORKFLOW */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* LEFT COMPONENT COLUMN: TIMELINE CURRICULUM */}
        <div className="lg:col-span-2 space-y-10">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <FaBookOpen className="text-blue-500 text-xl" /> Core Training
              Curriculum Roadmap
            </h2>
            <p className="text-slate-500 text-sm mt-0.5">
              Traverse the full development stack of microcontrollers, cloud
              gateways, and remote hardware actuators step-by-step.
            </p>
          </div>

          {/* DYNAMIC ITERATIVE SYLLABUS CARDS */}
          <div className="space-y-6">
            {modulesData.map((mod, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 aspect-square bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg flex items-center justify-center font-bold text-sm shrink-0">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {mod.title}
                    </h3>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md">
                    {mod.weeks}
                  </span>
                </div>

                {mod.desc && (
                  <p className="text-sm italic text-slate-500 mb-4 font-serif pl-2 border-l-2 border-blue-500">
                    {mod.desc}
                  </p>
                )}

                <div className="space-y-4">
                  {mod.subsections.map((sub, sIdx) => (
                    <div key={sIdx}>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        {sub.name}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {sub.items.map((item, iIdx) => (
                          <span
                            key={iIdx}
                            className="text-xs px-2 py-1 bg-slate-50 border border-slate-200/60 rounded text-slate-600"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-3">
                  {mod.highlights.map((hl, hIdx) => (
                    <span
                      key={hIdx}
                      className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1"
                    >
                      <span className="w-1 h-1 bg-emerald-500 rounded-full" />
                      {hl}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* TARGET AUDIENCE SUBSECTION */}
          <div className="pt-6 border-t border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Ecosystem Alignment Tracks
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {targetAudience.map((audience, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm"
                >
                  <div className="mb-3">{audience.icon}</div>
                  <h4 className="font-bold text-slate-800 text-sm mb-2">
                    {audience.title}
                  </h4>
                  <ul className="space-y-1">
                    {audience.points.map((pt, pIdx) => (
                      <li
                        key={pIdx}
                        className="text-[11px] text-slate-500 flex items-start gap-1"
                      >
                        <span className="text-blue-500 mt-0.5">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: SIDEBAR METRICS & CAPSTONE SYNOPSIS */}
        <div className="space-y-8 lg:sticky lg:top-6">
          {/* INTERNSHIP PRODUCTION DELIVERABLES CARD */}
          <div className="bg-slate-900 text-white p-6 rounded-xl border border-slate-800 shadow-lg">
            <h3 className="text-base font-bold text-blue-400 border-b border-slate-800 pb-3 mb-4">
              Internship Deliverables & Assets
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                "Internship Completion Certificate",
                "Project Completion Credentials",
                "Verified Source Code Repository",
                "Practical Smart Device Handbooks",
                "Production Project Documentation",
                "GitHub Engineering Portfolio Reviews",
                "LinkedIn Optimization Audits",
                "Expert Technical Career Mentorship",
                "15+ End-to-End Hands-on Builds",
                "Industry 4.0 Systems Frameworks",
              ].map((outcome, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-slate-300"
                >
                  <span className="text-blue-400 font-bold mt-0.5">✔</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPACT CAPSTONE PROJECT REFERENCE CARD */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
              <FaServer className="text-purple-500" /> Major Project Track
              Options
            </h4>
            <p className="text-xs text-slate-500 mb-3 leading-relaxed">
              Students build and customize one industry-standard edge capstone
              system during their last week:
            </p>
            <div className="grid grid-cols-1 gap-1.5">
              {[
                "Smart Home Automation System",
                "IoT Weather Monitoring Engine",
                "Smart Agriculture Sensor Field",
                "Smart Energy Meter Grid Node",
                "Industrial Infrastructure Dashboard",
                "Biometric Cloud Attendance System",
                "Smart Water Level Asset Monitor",
                "Intelligent Security Intruders Node",
              ].map((proj, pIdx) => (
                <div
                  key={pIdx}
                  className="text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-100 rounded px-2.5 py-1.5 flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  {proj}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM ACTION CTA BANNER */}
      <div className="max-w-4xl mx-auto px-4 mt-20 mb-15">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Launch Your Connected Device Career Track
          </h2>
          <p className="text-blue-50/90 mb-8 max-w-lg mx-auto text-sm md:text-base">
            Get in touch with our technical onboarding panel to secure
            admissions information, hardware inventory distribution timelines,
            or program batch structures.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm font-semibold">
            <a
              href="tel:+919171805055"
              className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full shadow-md hover:bg-slate-50 transition-colors w-full sm:w-auto justify-center"
            >
              <FaPhone /> +91 91718-05055
            </a>
            <a
              href="mailto:info@genixotech.com"
              className="flex items-center gap-2 bg-purple-700/50 text-white border border-purple-400/40 px-6 py-3 rounded-full hover:bg-purple-700/80 transition-colors w-full sm:w-auto justify-center"
            >
              <IoMail /> info@genixotech.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IotTraining;
