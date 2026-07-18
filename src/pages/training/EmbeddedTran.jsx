import React from "react";
import { Link } from "react-router-dom";
import { IoMail } from "react-icons/io5";
import {
  FaPhone,
  FaCode,
  FaLinux,
  FaMicrochip,
  FaNetworkWired,
  FaGears, // 1. Replaced FaCogs with FaGears
  FaBriefcase,
  FaClock,
  FaBookOpen,
  FaCircleCheck,
} from "react-icons/fa6";

const EmbeddedTran = () => {
  const modulesData = [
    {
      title: "Module 1: Programming Foundation",
      weeks: "Weeks 1–4",
      desc: '"Strong programmers become great embedded engineers."',
      subsections: [
        {
          name: "C Programming",
          items: [
            "Introduction to Embedded Systems",
            "Fundamentals of C",
            "Operators",
            "Decision Making",
            "Loops",
            "Functions",
            "Arrays",
            "Strings",
            "Pointers",
            "Storage Classes",
            "Structures",
            "Unions",
            "Enums",
            "Dynamic Memory Allocation",
            "Command Line Arguments",
            "Bitwise Programming",
            "Macros",
            "Pragmas",
            "File Handling",
            "Multi-file Programming",
            "Make Utility",
            "Searching & Sorting",
          ],
        },
        {
          name: "Data Structures",
          items: ["Linked List", "Doubly Linked List", "Trees"],
        },
      ],
      highlights: [
        "Weekly Coding Practice",
        "Mini Projects",
        "Module Assessment",
      ],
    },
    {
      title: "Module 2: Linux System Programming",
      weeks: "Weeks 5–7",
      subsections: [
        {
          name: "Linux Fundamentals",
          items: [
            "Linux Architecture",
            "Kernel",
            "Shell",
            "Services",
            "System Calls",
            "Error Handling",
          ],
        },
        {
          name: "Linux Programming",
          items: [
            "File System",
            "Process Management",
            "Threads",
            "Memory Management",
            "IPC",
            "Pipes",
            "FIFO",
            "Message Queue",
            "Shared Memory",
          ],
        },
        {
          name: "Advanced Linux",
          items: ["Static Libraries", "Dynamic Libraries", "Shell Scripting"],
        },
      ],
      highlights: ["Linux Practical Lab", "System Programming Assignments"],
    },
    {
      title: "Module 3: Embedded C & 8051 Microcontroller",
      weeks: "Weeks 8–11",
      subsections: [
        {
          name: "Embedded Programming",
          items: ["Embedded C", "Assembly Basics"],
        },
        {
          name: "8051 Architecture",
          items: ["Timers", "Counters", "UART", "Interrupts", "GPIO"],
        },
        {
          name: "Hardware Interface",
          items: [
            "LEDs",
            "LCD",
            "Motors",
            "Sensors",
            "Relays",
            "Keypad",
            "Buzzer",
          ],
        },
        {
          name: "Communication Protocols",
          items: ["UART", "I2C", "SPI"],
        },
        {
          name: "PCB Design",
          items: ["Eagle CAD", "PCB Fabrication", "Testing", "Soldering"],
        },
      ],
      highlights: ["Embedded Mini Project"],
    },
    {
      title: "Module 4: Object Oriented Programming with C++",
      weeks: "Weeks 12–13",
      subsections: [
        {
          name: "Core C++ & Software Design",
          items: [
            "OOP Concepts",
            "Classes",
            "Objects",
            "Constructors",
            "Destructors",
            "Friend Functions",
            "Operator Overloading",
            "Inheritance",
            "Polymorphism",
            "Templates",
            "Exception Handling",
            "File Streams",
          ],
        },
      ],
      highlights: ["C++ Coding Challenge"],
    },
    {
      title: "Module 5: Computer Networking & TCP/IP",
      weeks: "Weeks 14–15",
      subsections: [
        {
          name: "Network Architecture",
          items: [
            "OSI Model",
            "TCP/IP",
            "IP Addressing",
            "ARP",
            "Routing",
            "Switching",
            "Socket Programming",
          ],
        },
        {
          name: "Application Layer Protocols",
          items: [
            "HTTP",
            "FTP",
            "SMTP",
            "DNS",
            "DHCP",
            "SNMP",
            "POP3",
            "Telnet",
          ],
        },
      ],
      highlights: ["Socket Programming Project"],
    },
    {
      title: "Module 6: AVR & PIC Microcontrollers",
      weeks: "Weeks 16–17",
      subsections: [
        {
          name: "Architecture & Control",
          items: ["GPIO", "ADC", "Timers", "UART", "I2C"],
        },
        {
          name: "Hardware Interfacing",
          items: ["LCD", "Motor", "LED", "Sensors"],
        },
      ],
      highlights: ["Hardware Project"],
    },
    {
      title: "Module 7: ARM Cortex Programming",
      weeks: "Weeks 18–20",
      subsections: [
        {
          name: "Advanced Architecture",
          items: [
            "ARM Architecture",
            "Memory Organization",
            "Interrupts",
            "Embedded C",
            "AMBA Bus",
            "PLL",
            "GPIO",
            "VIC",
            "RTOS",
            "Embedded Linux",
            "Kernel Compilation",
          ],
        },
      ],
      highlights: ["ARM Development Project"],
    },
    {
      title: "Module 8: Advanced Embedded Systems",
      weeks: "Week 21",
      subsections: [
        {
          name: "Wireless Technologies",
          items: ["Bluetooth", "ZigBee", "RFID", "RF Modules", "GSM", "GPS"],
        },
        {
          name: "Sensors & Industrial Protocols",
          items: ["Ultrasonic", "Graphical LCD", "Industrial Communication"],
        },
      ],
      highlights: ["Wireless Testing Modules"],
    },
    {
      title: "Module 9: IoT & Smart Systems",
      weeks: "Week 22",
      subsections: [
        {
          name: "Build Smart Embedded Systems",
          items: [
            "IoT Fundamentals",
            "Cloud Integration",
            "Sensor Networks",
            "Connected Devices",
          ],
        },
      ],
      highlights: ["Cloud Connectivity Lab"],
    },
    {
      title: "Module 10: Capstone Project & Placement Prep",
      weeks: "Weeks 23–24",
      subsections: [
        {
          name: "Major Industry Project",
          items: [
            "Smart Home Automation",
            "Industrial Automation",
            "Vehicle Tracking",
            "Smart Agriculture",
            "Smart Attendance",
            "Smart Energy Meter",
            "Robotics System",
            "IoT Monitoring Device",
          ],
        },
        {
          name: "Placement Preparation",
          items: [
            "Resume Building",
            "GitHub Portfolio",
            "LinkedIn Optimization",
            "Aptitude Training",
            "Technical Interview",
            "HR Interview",
            "Mock Interviews",
          ],
        },
      ],
      highlights: ["Portfolio Validation", "Certification", "Career Readiness"],
    },
  ];

  return (
    <div className="w-full min-h-screen text-slate-800 font-sans pb-16">
      <header className="w-full flex justify-center relative overflow-hidden py-8 px-4 text-center border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 pointer-events-none" />
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center w-[85%]">
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mt-1 mb-4 tracking-tight text-white leading-tight">
              <span className="md:whitespace-nowrap">
                Genixotech Embedded Systems
              </span>
              <span className="md:block mt-1 md:mt-2">Engineer Program</span>
            </h1>
            <p className="text-white max-w-3xl mx-auto text-base md:text-lg font-medium leading-relaxed">
              Learn C Programming, Embedded C, Linux, 8051, AVR, ARM, RTOS, PCB
              Design, Networking, IoT, and build real industry projects with
              expert mentorship and placement assistance.
            </p>
          </div>
          <div className="z-10 flex justify-center">
            <img
              className="h-100 w-100"
              src="/gifs/web (6).gif"
              alt="embeddedImg"
            />
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 -mt-8 mb-20 relative z-10">
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl font-bold text-slate-900">
              6-Month Embedded Systems Course with Internship & Placement
              Assistance
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              India's Most Practical Embedded Systems Career Accelerator.
              Experience 80% practical training path designed to match global
              technology standards.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {[
              {
                label: "6 Months Duration",
                desc: "24 Weeks Cohort",
                icon: <FaClock className="text-blue-500" />,
              },
              {
                label: "600+ Hours Labs",
                desc: "Practical Driven",
                icon: <FaGears className="text-purple-500" />, // 2. Updated to FaGears here
              },
              {
                label: "80% Hands-on",
                desc: "Active Building",
                icon: <FaCode className="text-blue-500" />,
              },
              {
                label: "20+ Projects",
                desc: "Industry Standard",
                icon: <FaMicrochip className="text-purple-500" />,
              },
              {
                label: "Placement Support",
                desc: "Career Ecosystem",
                icon: <FaBriefcase className="text-blue-500" />,
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50/50 border border-slate-100 flex flex-col items-center"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <h4 className="text-sm font-bold text-slate-900">
                  {stat.label}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">{stat.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 justify-center text-xs font-semibold text-slate-600">
            <div className="flex items-center gap-2 justify-center">
              <FaCircleCheck className="text-green-500" /> Real Hardware
              Practice
            </div>
            <div className="flex items-center gap-2 justify-center">
              <FaCircleCheck className="text-green-500" /> Industry Recognized
              Certification
            </div>
            <div className="flex items-center gap-2 justify-center">
              <FaCircleCheck className="text-green-500" /> Expert Mentorship
            </div>
            <div className="flex items-center gap-2 justify-center">
              <FaCircleCheck className="text-green-500" /> GitHub Portfolio
              Development
            </div>
            <div className="flex items-center gap-2 justify-center">
              <FaCircleCheck className="text-green-500" /> Resume & Interview
              Preparation
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTENT WORKSPACE GRID --- */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* LEFT COLUMN: CURRICULUM ROADMAP */}
        <div className="lg:col-span-2 space-y-10">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <FaBookOpen className="text-blue-500 text-xl" /> Curated Learning
              Journey
            </h2>
            <p className="text-slate-500 text-sm mt-0.5">
              Structured into 10 comprehensive Career Modules for maximum market
              compliance.
            </p>
          </div>

          {/* 10 MODULES ARCHITECTURE */}
          <div className="space-y-6">
            {modulesData.map((mod, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-9 md:h-9 aspect-square bg-gradient-to-r from-blue-500 to-purple-500 text-white border border-slate-200/50 rounded-lg flex items-center justify-center font-bold text-sm sm:text-base shrink-0">
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
                      <span className="w-1 h-1 bg-emerald-500 rounded-full" />{" "}
                      {hl}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: OUTCOMES & ROADMAP TRACKER */}
        <div className="space-y-8 lg:sticky lg:top-6">
          {/* OUTCOMES HIGHLIGHTS CARD */}
          <div className="bg-slate-900 text-white p-6 rounded-xl border border-slate-800 shadow-lg">
            <h3 className="text-base font-bold text-blue-400 border-b border-slate-800 pb-3 mb-4">
              What You'll Build & Deliver
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                "20+ Hands-on Technical Labs",
                "10+ Domain Mini Projects",
                "3 Major Scaled Industry Projects",
                "End-to-End PCB Design & Fabrication",
                "Linux System Programming Assignments",
                "Low-Level Embedded Driver Development",
                "Production Ready IoT Applications",
                "ARM-Based Product Development Architecture",
                "Verified Engineering Portfolio Layout",
                "Production Grade GitHub Repository",
                "Comprehensive Technical Documentation",
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

          {/* QUICK TIME-INDEX WEEK-WISE ROADMAP */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
              <FaClock className="text-purple-500" /> Week-wise Roadmap
            </h4>
            <div className="overflow-hidden border border-slate-100 rounded-lg text-xs">
              <div className="grid grid-cols-3 bg-slate-50 font-bold text-slate-600 border-b border-slate-100 p-2">
                <div>Weeks</div>
                <div>Module Focus</div>
                <div>Expected Outcome</div>
              </div>
              <div className="divide-y divide-slate-100 text-slate-600 font-medium">
                {[
                  {
                    w: "1–4",
                    m: "Programming Foundation",
                    o: "Strong C & Data Structures",
                  },
                  {
                    w: "5–7",
                    m: "Linux Programming",
                    o: "Linux & System Programming",
                  },
                  {
                    w: "8–11",
                    m: "Embedded C & 8051",
                    o: "Hardware Programming",
                  },
                  {
                    w: "12–13",
                    m: "C++ Programming",
                    o: "OOP & Software Design",
                  },
                  {
                    w: "14–15",
                    m: "Networking",
                    o: "TCP/IP & Socket Programming",
                  },
                  { w: "16–17", m: "PIC/AVR", o: "Advanced Microcontrollers" },
                  { w: "18–20", m: "ARM Cortex", o: "Industry Embedded Dev" },
                  {
                    w: "21",
                    m: "Advanced Embedded Tech",
                    o: "Wireless & Industrial Interfaces",
                  },
                  {
                    w: "22",
                    m: "IoT Systems",
                    o: "Connected Devices & Cloud Basics",
                  },
                  {
                    w: "23–24",
                    m: "Major Project & Placement",
                    o: "Portfolio & Career Readiness",
                  },
                ].map((row, rIdx) => (
                  <div
                    key={rIdx}
                    className="grid grid-cols-3 p-2 hover:bg-slate-50/50"
                  >
                    <div className="font-bold text-slate-900">{row.w}</div>
                    <div className="pr-1">{row.m}</div>
                    <div className="text-slate-500">{row.o}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- FLOATING PLATFORM CALL TO ACTION --- */}
      <div className="max-w-4xl mx-auto px-4 mt-20 mb-15">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Accelerate Your Engineering Career Tracks
          </h2>
          <p className="text-blue-50/90 mb-8 max-w-lg mx-auto text-sm md:text-base">
            Connect with our technical onboarding desk to review cohort intake
            schedules, hardware kits routing, or curriculum alignment paths.
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

export default EmbeddedTran;
