import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { IoMail } from "react-icons/io5";
import {
  FaPhone,
  FaBuildingColumns,
  FaSchool,
  FaGraduationCap,
} from "react-icons/fa6";

const RoboticsPage = () => {
  // 1. Create Refs for Smooth Scrolling
  const schoolRef = useRef(null);
  const collegeRef = useRef(null);
  const instituteRef = useRef(null);

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="w-full min-h-screen text-slate-800 font-sans pb-16">
      {/* --- HERO BANNER --- */}
      <div className="w-full relative overflow-hidden py-16 px-4 text-center border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-slate-900 relative z-10">
          Robotics Workshops &
          <span className="bg-gradient-to-r from-blue-500 pl-2 to-purple-500 bg-clip-text text-transparent">
            Training
          </span>
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg relative z-10">
          Transforming campuses into hubs of innovation. We introduce students
          to Electronics, Coding, AI, and STEM through hands-on building.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-10 mb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            onClick={() => scrollToSection(schoolRef)}
            className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <FaSchool className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-900">
              For Schools
            </h3>
            <p className="text-slate-500 text-sm">
              Grades 6–12, ATL Labs, Science exhibitions, and alignment with NEP
              2020.
            </p>
            <span className="mt-4 text-sm font-semibold text-blue-600 group-hover:underline">
              Explore Workshops &rarr;
            </span>
          </div>

          <div
            onClick={() => scrollToSection(collegeRef)}
            className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
              <FaGraduationCap className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-900">
              For Colleges
            </h3>
            <p className="text-slate-500 text-sm">
              Engineering, B.Sc, Diploma programs, Minor/Major projects & IoT
              bootcamps.
            </p>
            <span className="mt-4 text-sm font-semibold text-purple-600 group-hover:underline">
              Explore Programs &rarr;
            </span>
          </div>

          <div
            onClick={() => scrollToSection(instituteRef)}
            className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <FaBuildingColumns className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-900">
              For Coaching & Institutes
            </h3>
            <p className="text-slate-500 text-sm">
              Value-added skill courses, summer training hubs, and franchise
              support.
            </p>
            <span className="mt-4 text-sm font-semibold text-blue-600 group-hover:underline">
              Explore Structural Models &rarr;
            </span>
          </div>
        </div>
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="max-w-6xl mx-auto px-4 space-y-24">
        {/* =======================================================
            SECTION 1: SCHOOLS
            ======================================================= */}
        <section
          ref={schoolRef}
          className="scroll-mt-24 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200"
        >
          <div className="border-b border-slate-100 pb-6 mb-8">
            <div className="text-center mb-10">
              <span className="text-xl font-bold uppercase tracking-wider text-blue-600 px-3 py-1 bg-blue-50 rounded-full">
                Grades 6 to 12
              </span>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-2">
              Robotics Workshop for
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 pl-2 bg-clip-text text-transparent">
                Schools
              </span>
            </h2>
            <p className="text-slate-500 mt-1">
              Inspire Future Innovators with Genixotech
            </p>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed mb-10">
            Transform your school into a hub of innovation with Genixotech's
            Robotics Workshop. Our workshop is designed to introduce students to
            Robotics, Electronics, Coding, Artificial Intelligence concepts, and
            STEM education through exciting hands-on activities. Students don't
            just learn—they build, test, innovate, and experience engineering in
            action.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Why Schools Choose Genixotech
              </h3>
              <ul className="space-y-2 list-disc list-inside text-slate-600 pl-1">
                <li>100% practical, activity-based learning</li>
                <li>Designed for Grades 6–12</li>
                <li>Aligned with NEP 2020 and STEM education</li>
                <li>Experienced industry mentors</li>
                <li>Modern robotics kits and Arduino platforms</li>
                <li>
                  Customizable for school events, ATL labs and science
                  exhibitions
                </li>
                <li>Participation certificates for students</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Perfect For
              </h3>
              <ul className="space-y-2 list-disc list-inside text-slate-600 pl-1">
                <li>STEM Education Programs</li>
                <li>Science & Technology Week</li>
                <li>Annual School Events</li>
                <li>ATL / Innovation Labs</li>
                <li>Summer & Winter Camps</li>
                <li>Career Awareness Programs</li>
                <li>Teacher Development Programs</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
            Dedicated Ecosystem Alignment
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-slate-50/60 p-5 rounded-xl border border-slate-100">
              <h4 className="font-bold text-blue-700 mb-2">
                For School Principals
              </h4>
              <ul className="text-sm space-y-1 text-slate-600 list-disc list-inside">
                <li>Enhances your school's innovation ecosystem</li>
                <li>Supports practical implementation of NEP 2020</li>
                <li>Suitable for CBSE, ICSE and State Board schools</li>
                <li>Excellent value addition during admissions</li>
              </ul>
            </div>
            <div className="bg-slate-50/60 p-5 rounded-xl border border-slate-100">
              <h4 className="font-bold text-purple-700 mb-2">For Teachers</h4>
              <ul className="text-sm space-y-1 text-slate-600 list-disc list-inside">
                <li>Interactive classroom demonstrations</li>
                <li>Faculty orientation sessions available</li>
                <li>Opportunity to establish Robotics or STEM Clubs</li>
                <li>Long-term support for school initiatives</li>
              </ul>
            </div>
            <div className="bg-slate-50/60 p-5 rounded-xl border border-slate-100">
              <h4 className="font-bold text-blue-700 mb-2">For Parents</h4>
              <ul className="text-sm space-y-1 text-slate-600 list-disc list-inside">
                <li>Builds confidence and curiosity</li>
                <li>Develops problem-solving skills & reduces screen time</li>
                <li>Introduces future career opportunities in AI</li>
              </ul>
            </div>
            <div className="bg-slate-50/60 p-5 rounded-xl border border-slate-100">
              <h4 className="font-bold text-purple-700 mb-2">For Students</h4>
              <ul className="text-sm space-y-1 text-slate-600 list-disc list-inside">
                <li>Build real robots & learn Arduino</li>
                <li>Work with active sensors and motors</li>
                <li>Participate in instant innovation challenges</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-blue-400 border-b border-slate-800 pb-2 mb-3">
                Workshop Curriculum
              </h4>
              <ul className="text-sm space-y-1 text-slate-300">
                <li>• Intro to Robotics & STEM</li>
                <li>• Basic Electronics & Arduino</li>
                <li>• Sensors, Actuators & Motors</li>
                <li>• Robot Assembly & Testing</li>
                <li>• Demo & Challenge</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-purple-400 border-b border-slate-800 pb-2 mb-3">
                Hands-on Projects
              </h4>
              <ul className="text-sm space-y-1 text-slate-300">
                <li>• LED Blinking Circuit</li>
                <li>• Automatic Night Lamp</li>
                <li>• Ultrasonic Distance Meter</li>
                <li>• Line Follower & Obstacle Robot</li>
                <li>• Bluetooth Controlled Robot</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-blue-400 border-b border-slate-800 pb-2 mb-3">
                Learning Outcomes
              </h4>
              <ul className="text-sm space-y-1 text-slate-300">
                <li>• Understand robotics frameworks</li>
                <li>• Write clean modular Arduino code</li>
                <li>• Build functional circuit paths</li>
                <li>• Analytical thinking growth</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap justify-between items-center gap-4">
            <div>
              <span className="font-semibold text-slate-900">
                Available Formats:
              </span>
              <span className="text-xs text-slate-500 block">
                2-Hr / Half-Day / 1-Day / 2-Day / Bootcamps
              </span>
            </div>
            <div className="text-sm text-slate-600">
              <span className="font-semibold text-slate-900">Included:</span>{" "}
              Expert trainer, hardware kits, worksheets, certificates.
            </div>
          </div>
        </section>

        {/* =======================================================
            SECTION 2: COLLEGES
            ======================================================= */}
        <section
          ref={collegeRef}
          className="scroll-mt-24 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200"
        >
          <div className="border-b border-slate-100 pb-6 mb-8">
            <div className="text-center mb-10">
              <span className="text-xl font-bold uppercase tracking-wider text-purple-600 px-3 py-1 bg-purple-50 rounded-full">
                Graduates & Engineers
              </span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">
              Robotics Workshop for
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 pl-2 bg-clip-text text-transparent">
                College Students
              </span>
            </h2>
            <p className="text-slate-500 mt-1">
              Build. Program. Innovate. Experience Industry-Ready Robotics with
              Genixotech
            </p>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Step beyond textbooks and discover how modern robots are designed,
            programmed, and controlled. The Genixotech Robotics Workshop for
            College Students is an intensive, hands-on training program designed
            to introduce engineering and diploma students to Robotics, Embedded
            Systems, Arduino, IoT, Electronics, Automation, and Artificial
            Intelligence through real-world applications and practical projects.
          </p>
          <p className="text-slate-600 leading-relaxed mb-10">
            Students don't just assemble robots—they understand the technology
            behind them, write code, interface sensors, solve engineering
            problems, and build working prototypes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Why Engineering Colleges Choose Genixotech
              </h3>
              <ul className="space-y-2 list-disc list-inside text-slate-600 pl-1">
                <li>100% Practical & Hands-on Learning approach</li>
                <li>Industry-oriented robotics curriculum track</li>
                <li>Learn with cutting edge Arduino & ESP32 Platforms</li>
                <li>
                  Seamless Programming + Electronics + Robotics Integration
                </li>
                <li>Real Hardware kit experience for every student cohort</li>
                <li>
                  Build multiple functional mini projects during the workshop
                </li>
                <li>Industry Expert Trainers & project mentors</li>
                <li>Official Genixotech Participation Certificate</li>
                <li>
                  Career guidance session & placement/internship roadmap
                  awareness
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Perfect For
              </h3>
              <ul className="space-y-2 list-disc list-inside text-slate-600 pl-1">
                <li>Engineering Colleges & Technical Universities</li>
                <li>Polytechnic Colleges & Diploma Institutes</li>
                <li>Skill Development & Incubation Center Activities</li>
                <li>Campus Robotics & Electronics Clubs</li>
                <li>AICTE Skill Development & Activity Points Mapping</li>
                <li>National Hackathon & Robofest Preparation</li>
                <li>Pre-Placement & Industry Readiness Programs</li>
                <li>Departmental Induction & Custom Bootcamps</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
            Dedicated Ecosystem Alignment
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-slate-50/60 p-5 rounded-xl border border-slate-100">
              <h4 className="font-bold text-purple-700 mb-2">
                For College Management
              </h4>
              <ul className="text-sm space-y-1 text-slate-600 list-disc list-inside">
                <li>Enhance institutional innovation & technical excellence</li>
                <li>
                  Supports AICTE, NBA and NAAC outcome-based education metrics
                </li>
                <li>Strengthens critical industry-academia collaborations</li>
                <li>
                  Excellent metrics for technical festivals and induction tracks
                </li>
              </ul>
            </div>
            <div className="bg-slate-50/60 p-5 rounded-xl border border-slate-100">
              <h4 className="font-bold text-blue-700 mb-2">
                For Training & Placement Cell
              </h4>
              <ul className="text-sm space-y-1 text-slate-600 list-disc list-inside">
                <li>Improve students' practical, baseline technical skills</li>
                <li>Prepare engineering grads for technical core interviews</li>
                <li>
                  Introduce industry-standard microcontroller development
                  platforms
                </li>
                <li>Encourage production scale project-based logic building</li>
              </ul>
            </div>
            <div className="bg-slate-50/60 p-5 rounded-xl border border-slate-100">
              <h4 className="font-bold text-purple-700 mb-2">
                For Faculty Members
              </h4>
              <ul className="text-sm space-y-1 text-slate-600 list-disc list-inside">
                <li>
                  Direct hands-on exposure to emerging automated technologies
                </li>
                <li>
                  Faculty Development Program (FDP) collaborative frameworks
                </li>
                <li>Robotics Club structural guidance and layout mentorship</li>
                <li>
                  Continuous academic year support from Genixotech engineers
                </li>
              </ul>
            </div>
            <div className="bg-slate-50/60 p-5 rounded-xl border border-slate-100">
              <h4 className="font-bold text-blue-700 mb-2">
                For College Students
              </h4>
              <ul className="text-sm space-y-1 text-slate-600 list-disc list-inside">
                <li>
                  Learn production robotics architecture from Industry Experts
                </li>
                <li>
                  Write robust embedded programs using modular code patterns
                </li>
                <li>
                  Interface complex sensor arrays and mechanical driver motors
                </li>
                <li>
                  Explore high-paying career opportunities across IoT platforms
                </li>
              </ul>
            </div>
          </div>

          {/* Core Syllabus Layout Grid */}
          <div className="bg-slate-900 text-white rounded-xl p-6 md:p-8 space-y-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-slate-800 pb-6">
              <div>
                <h4 className="font-bold text-blue-400 text-sm tracking-wider uppercase mb-3">
                  Technologies Covered
                </h4>
                <div className="text-xs space-y-2 text-slate-300">
                  <p>
                    <strong className="text-white">Programming:</strong>{" "}
                    Embedded C, Arduino Programming
                  </p>
                  <p>
                    <strong className="text-white">Hardware:</strong> Arduino
                    UNO, ESP32 Microcontrollers
                  </p>
                  <p>
                    <strong className="text-white">Peripherals:</strong>{" "}
                    Actuators, Relay Modules, Sensor Arrays
                  </p>
                  <p>
                    <strong className="text-white">Communication:</strong> UART,
                    Bluetooth, Wi-Fi Protocols
                  </p>
                  <p>
                    <strong className="text-white">Software:</strong> Arduino
                    IDE, Integrated Tools
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-purple-400 text-sm tracking-wider uppercase mb-3">
                  Hands-on Projects Built
                </h4>
                <ul className="text-xs space-y-1 text-slate-300">
                  <li>• LED Blinking Orchestration System</li>
                  <li>• Smart Traffic Light Management Matrix</li>
                  <li>• Automatic Night Lamp Control Circuit</li>
                  <li>• Ultrasonic Precision Distance Meter</li>
                  <li>• Autonomous Obstacle Avoiding Robot</li>
                  <li>• Precision Line Follower Robot</li>
                  <li>• Bluetooth Mobile Controlled Robot</li>
                  <li>• Smart Home Automation Prototyping</li>
                  <li>• Live ESP32 IoT Device Cloud Demo</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-blue-400 text-sm tracking-wider uppercase mb-3">
                  Learning Outcomes
                </h4>
                <ul className="text-xs space-y-1 text-slate-300">
                  <li>• Master Embedded System baseline architectures</li>
                  <li>• Program modular logic architectures with Embedded C</li>
                  <li>• Interface active sensory endpoints & motor setups</li>
                  <li>• Build, isolate, and debug hardware prototypes</li>
                  <li>• Map structural concepts back to Industry 4.0</li>
                </ul>
              </div>
            </div>

            {/* Detailed Module Breakdown */}
            <div>
              <h4 className="font-bold text-white text-base mb-4 text-center">
                Detailed Workshop Curriculum Breakdowns
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-800">
                  <h5 className="font-bold text-blue-400 mb-1">
                    Mod 1: Intro & Industry 4.0
                  </h5>
                  <p className="text-slate-400">
                    Evolution of industrial robotics, modern automation trends,
                    and professional career scaling frameworks.
                  </p>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-800">
                  <h5 className="font-bold text-purple-400 mb-1">
                    Mod 2: Embedded Systems
                  </h5>
                  <p className="text-slate-400">
                    Electronic component analysis, custom circuit design
                    configurations, and power rail architecture basics.
                  </p>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-800">
                  <h5 className="font-bold text-blue-400 mb-1">
                    Mod 3: Arduino Engine
                  </h5>
                  <p className="text-slate-400">
                    Arduino IDE navigation, writing Embedded C frameworks,
                    managing Analog/Digital I/O loops, and PWM control arrays.
                  </p>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-800">
                  <h5 className="font-bold text-purple-400 mb-1">
                    Mod 4: Sensors & Actuators
                  </h5>
                  <p className="text-slate-400">
                    Hands-on calibration with IR, Ultrasonic, PIR, LDR,
                    Temperature endpoints, Servo/DC motors, Relays, and audio
                    Buzzers.
                  </p>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-800">
                  <h5 className="font-bold text-blue-400 mb-1">
                    Mod 5: Chassis Assembly
                  </h5>
                  <p className="text-slate-400">
                    Assembling physical modular robot units, linking structural
                    motors, configuring sensory networks, and live loop tuning.
                  </p>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-800">
                  <h5 className="font-bold text-purple-400 mb-1">
                    Mod 6: IoT & Networks
                  </h5>
                  <p className="text-slate-400">
                    Bluetooth integration metrics, Wi-Fi connectivity, live
                    cloud-connected ESP32 demonstrations, and Custom App
                    control.
                  </p>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-800 col-span-1 sm:col-span-2 lg:col-span-2">
                  <h5 className="font-bold text-emerald-400 mb-1">
                    Mod 7: Innovation Hackathon Challenge
                  </h5>
                  <p className="text-slate-400">
                    Students aggregate into balanced structural engineering
                    teams to resolve real-world situational automation
                    bottlenecks using their complete active toolkit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formats and structural tiers */}
          <h3 className="text-lg font-bold text-slate-900 mb-4">
            Available Workshop Delivery Models
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            <div className="border border-slate-200 p-4 rounded-xl text-center bg-slate-50/50">
              <span className="block font-bold text-slate-900 text-sm">
                2-Hour Seminar
              </span>
              <p className="text-xs text-slate-500 mt-1">
                Introductory awareness seminars and high-level induction
                pathways.
              </p>
            </div>
            <div className="border border-slate-200 p-4 rounded-xl text-center bg-slate-50/50">
              <span className="block font-bold text-slate-900 text-sm">
                Half-Day Session
              </span>
              <p className="text-xs text-slate-500 mt-1">
                Fast-paced, high-level introductory practical engineering
                sandbox.
              </p>
            </div>
            <div className="border border-slate-200 p-4 rounded-xl text-center bg-slate-50/50">
              <span className="block font-bold text-slate-900 text-sm">
                1-Day Workshop
              </span>
              <p className="text-xs text-slate-500 mt-1">
                Core architectural theory backed by fundamental device
                demonstrations.
              </p>
            </div>
            <div className="border border-blue-200 p-4 rounded-xl text-center bg-blue-50/30">
              <span className="block font-bold text-blue-700 text-sm">
                2-Day Intensive
              </span>
              <p className="text-xs text-slate-600 mt-1">
                Recommended track for custom logic, assembly, and core embedded
                project work.
              </p>
            </div>
            <div className="border border-purple-200 p-4 rounded-xl text-center bg-purple-50/30">
              <span className="block font-bold text-purple-700 text-sm">
                3-Day Advanced
              </span>
              <p className="text-xs text-slate-600 mt-1">
                Most popular structure: Full design loops, hackathon tasks, and
                placement mentorship paths.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-wrap justify-between items-center gap-4 text-sm">
            <div>
              <span className="font-semibold text-slate-900">
                Deliverables Pack:
              </span>
              <span className="text-xs text-slate-500 block">
                Certificates, study guides, reference system source files,
                roadmap documents.
              </span>
            </div>
          </div>
        </section>

        {/* =======================================================
            SECTION 3: INSTITUTES (Placeholder Remains Intact)
            ======================================================= */}
        {/* =======================================================
            SECTION 3: COACHING & INSTITUTES
            ======================================================= */}
        <section
          ref={instituteRef}
          className="scroll-mt-24 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200"
        >
          <div className="border-b border-slate-100 pb-6 mb-8">
            <div className="text-center mb-10">
              <span className="text-xl font-bold uppercase tracking-wider text-blue-600 px-3 py-1 bg-blue-50 rounded-full">
                30-Day Training & Certification
              </span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">
              Robotics Professional
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 pl-2 bg-clip-text text-transparent">
                Internship Program
              </span>
            </h2>
            <p className="text-slate-500 mt-1">
              Become an Industry-Ready Robotics & Automation Engineer in Just 30
              Days
            </p>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Build Real Robots. Learn Industry Skills. Accelerate Your Career.
            The Genixotech Robotics Professional Internship Program is an
            intensive 30-day, project-based internship designed for engineering
            students, fresh graduates, faculty members, and professionals
            looking to build practical expertise in Robotics, Embedded Systems,
            Arduino, ESP32, IoT, Automation, Sensors, and Artificial
            Intelligence.
          </p>
          <p className="text-slate-600 leading-relaxed mb-10">
            Unlike traditional training programs, this internship focuses
            heavily on real engineering practices, product development,
            debugging, teamwork, and industry-oriented projects. We ensure
            participants gain the standalone confidence and technical toolkits
            required for internships, higher studies, and high-growth technical
            career paths.
          </p>

          {/* Core Info Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Why Choose Genixotech?
              </h3>
              <ul className="space-y-2 list-disc list-inside text-slate-600 pl-1">
                <li>100% Practical & Hands-on Learning roadmap</li>
                <li>Build 10+ Real Hardware Projects from scratch</li>
                <li>
                  Seamless Programming + Electronics + Robotics integration
                </li>
                <li>Comprehensive Arduino & ESP32 core development</li>
                <li>Industry-Oriented Curriculum designed by expert mentors</li>
                <li>Deep-dive into IoT & Automation framework concepts</li>
                <li>Structured Mini & Capstone production-grade projects</li>
                <li>
                  GitHub Portfolio guidance, Resume & LinkedIn profile
                  optimization
                </li>
                <li>
                  Official Internship Certificate & Career Mentorship support
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Who Should Join & Perfect For
              </h3>
              <p className="text-sm font-semibold text-slate-700 mb-2">
                Ideal for:
              </p>
              <ul className="space-y-1 list-disc list-inside text-slate-600 pl-1 mb-4 text-sm">
                <li>Engineering Students (2nd, 3rd & Final Year)</li>
                <li>Diploma & Polytechnic Students / Fresh Graduates</li>
                <li>School & College Faculty Members / STEM Trainers</li>
                <li>Working Professionals, Startup Founders & Innovators</li>
              </ul>
              <p className="text-sm font-semibold text-slate-700 mb-2">
                Excellent Alignment For:
              </p>
              <ul className="space-y-1 list-disc list-inside text-slate-600 pl-1 text-sm">
                <li>Summer & Industrial Internship Requirements</li>
                <li>Faculty Skill Development Programs</li>
                <li>Mini & Major Academic Project Preparation</li>
                <li>Placement Readiness & Technical Portfolio Building</li>
                <li>Research, Innovation & Product Development Tracks</li>
              </ul>
              <p className="mt-3 text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg inline-block">
                💡 No prior robotics experience is required. Basic computer
                knowledge is sufficient.
              </p>
            </div>
          </div>

          {/* Ecosystem Alignment Tabs */}
          <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
            Dedicated Partner & Professional Alignment
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="bg-slate-50/60 p-4 rounded-xl border border-slate-100">
              <h4 className="font-bold text-blue-700 text-sm mb-2">
                For Engineering Students
              </h4>
              <ul className="text-xs space-y-1 text-slate-600 list-disc list-inside">
                <li>Gain authentic practical industry experience</li>
                <li>
                  Build confidence handling active physical hardware arrays
                </li>
                <li>Construct a powerful, verifiable technical portfolio</li>
              </ul>
            </div>
            <div className="bg-slate-50/60 p-4 rounded-xl border border-slate-100">
              <h4 className="font-bold text-purple-700 text-sm mb-2">
                For Fresh Graduates
              </h4>
              <ul className="text-xs space-y-1 text-slate-600 list-disc list-inside">
                <li>
                  Bridge the structural gap between academics and industry
                </li>
                <li>Master development boards used by R&D engineering firms</li>
                <li>Drastically enhance direct post-grad employability</li>
              </ul>
            </div>
            <div className="bg-slate-50/60 p-4 rounded-xl border border-slate-100">
              <h4 className="font-bold text-blue-700 text-sm mb-2">
                For Faculty Members
              </h4>
              <ul className="text-xs space-y-1 text-slate-600 list-disc list-inside">
                <li>
                  Upgrade standard institutional technical domain knowledge
                </li>
                <li>
                  Integrate advanced hands-on learning pipelines into classrooms
                </li>
                <li>Establish specialized campus Robotics and STEM Clubs</li>
              </ul>
            </div>
            <div className="bg-slate-50/60 p-4 rounded-xl border border-slate-100">
              <h4 className="font-bold text-purple-700 text-sm mb-2">
                For Working Professionals
              </h4>
              <ul className="text-xs space-y-1 text-slate-600 list-disc list-inside">
                <li>Upskill in core cross-functional Automation tracks</li>
                <li>Transition into Embedded Systems & custom IoT logic</li>
                <li>Acquire high-demand Industry 4.0 technical skills</li>
              </ul>
            </div>
          </div>

          {/* Interactive Learning Roadmap Timeline */}
          <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
            30-Day Structured Learning Roadmap
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="border border-slate-200 p-5 rounded-xl bg-slate-50/40 relative">
              <span className="absolute -top-3 left-4 bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded">
                WEEK 1
              </span>
              <h4 className="font-bold text-slate-900 text-sm mt-1 mb-2">
                Fundamentals & Logic
              </h4>
              <div className="text-xs text-slate-600 space-y-2">
                <p>
                  <strong>Mod 1-2:</strong> Industrial applications, electronics
                  basics, circuit design paradigms.
                </p>
                <p>
                  <strong>Mod 3:</strong> Arduino IDE setup, Embedded C basics,
                  I/O parameters, Serial loops, PWM control.
                </p>
                <p className="text-blue-600 font-medium font-mono">
                  ⚡ LED Blink, Traffic Controls, Smart Night Lamps.
                </p>
              </div>
            </div>

            <div className="border border-slate-200 p-5 rounded-xl bg-slate-50/40 relative">
              <span className="absolute -top-3 left-4 bg-purple-600 text-white text-xs font-bold px-2 py-0.5 rounded">
                WEEK 2
              </span>
              <h4 className="font-bold text-slate-900 text-sm mt-1 mb-2">
                Sensors & Automation
              </h4>
              <div className="text-xs text-slate-600 space-y-2">
                <p>
                  <strong>Mod 4-5:</strong> Sensor configurations (IR,
                  Ultrasonic, PIR, LDR, Temp). DC/Servo drivers, Relays,
                  Buzzers.
                </p>
                <p>
                  <strong>Mod 6:</strong> Robot chassis design rules, power path
                  balancing, real-time hardware diagnostics.
                </p>
                <p className="text-purple-600 font-medium font-mono">
                  ⚡ Obstacle Detection, Precision Meters, Robot Assembly.
                </p>
              </div>
            </div>

            <div className="border border-slate-200 p-5 rounded-xl bg-slate-50/40 relative">
              <span className="absolute -top-3 left-4 bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded">
                WEEK 3
              </span>
              <h4 className="font-bold text-slate-900 text-sm mt-1 mb-2">
                Robotics & IoT Networks
              </h4>
              <div className="text-xs text-slate-600 space-y-2">
                <p>
                  <strong>Mod 7-8:</strong> Motion patterns, sensor-guided
                  routing logic. Wi-Fi / Bluetooth configurations with ESP32
                  chips.
                </p>
                <p>
                  <strong>Mod 9:</strong> Cloud platform dashboards, remote
                  parameters, automation architecture loops.
                </p>
                <p className="text-blue-600 font-medium font-mono">
                  ⚡ BT Mobile Robots, IoT Home Hubs, Custom Dashboards.
                </p>
              </div>
            </div>

            <div className="border border-blue-200 p-5 rounded-xl bg-blue-50/20 relative">
              <span className="absolute -top-3 left-4 bg-emerald-600 text-white text-xs font-bold px-2 py-0.5 rounded">
                WEEK 4
              </span>
              <h4 className="font-bold text-slate-900 text-sm mt-1 mb-2">
                Capstone & Careers
              </h4>
              <div className="text-xs text-slate-600 space-y-2">
                <p>
                  <strong>Mod 10:</strong> Finalize a production robotics system
                  integrating entire three-week hardware frameworks.
                </p>
                <p>
                  <strong>Career Dev:</strong> Custom engineering resume
                  architecture, GitHub repository portfolios, LinkedIn tuning,
                  and Mock HR/Technical preparation loops.
                </p>
              </div>
            </div>
          </div>

          {/* Capstone Projects Box Grid */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-12">
            <h4 className="font-bold text-slate-900 text-sm mb-4 uppercase tracking-wider text-center">
              Available Capstone Innovation Projects
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-center text-xs text-slate-700 font-medium">
              <div className="bg-white p-3 rounded-lg border border-slate-200">
                Line Follower Robot
              </div>
              <div className="bg-white p-3 rounded-lg border border-slate-200">
                Obstacle Avoiding Robot
              </div>
              <div className="bg-white p-3 rounded-lg border border-slate-200">
                Smart Home Automation
              </div>
              <div className="bg-white p-3 rounded-lg border border-slate-200">
                RFID Attendance Matrix
              </div>
              <div className="bg-white p-3 rounded-lg border border-slate-200">
                Smart Parking Grid
              </div>
              <div className="bg-white p-3 rounded-lg border border-slate-200">
                Fire Fighting Drone/Bot
              </div>
              <div className="bg-white p-3 rounded-lg border border-slate-200">
                Voice Controlled Setup
              </div>
              <div className="bg-white p-3 rounded-lg border border-slate-200">
                Gesture Controlled Automation
              </div>
              <div className="bg-white p-3 rounded-lg border border-slate-200 col-span-2 sm:col-span-1 lg:col-span-2 flex items-center justify-center">
                Warehouse Automation Prototype
              </div>
            </div>
          </div>

          {/* Technologies, Outcomes, Deliverables Dark Grid */}
          <div className="bg-slate-900 text-white rounded-xl p-6 md:p-8 space-y-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-blue-400 border-b border-slate-800 pb-2 mb-3 text-sm tracking-wider uppercase">
                  Technologies Covered
                </h4>
                <div className="text-xs space-y-2 text-slate-300">
                  <p>
                    <strong className="text-white">Software:</strong> Arduino
                    IDE, VS Code, Git/GitHub Ecosystems
                  </p>
                  <p>
                    <strong className="text-white">Hardware:</strong> Arduino
                    UNO, ESP32 Microcontroller units
                  </p>
                  <p>
                    <strong className="text-white">Sensors & Actuators:</strong>{" "}
                    IR, Ultrasonic, PIR, LDR, Temp, Servos, DC Motors, Relays,
                    Buzzers
                  </p>
                  <p>
                    <strong className="text-white">Protocols:</strong> UART,
                    Bluetooth, Wi-Fi connectivity matrices
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-purple-400 border-b border-slate-800 pb-2 mb-3 text-sm tracking-wider uppercase">
                  Internship Deliverables
                </h4>
                <ul className="text-xs space-y-1.5 text-slate-300">
                  <li>• Official Internship Completion Certificate</li>
                  <li>• Dedicated Project Completion Certificate</li>
                  <li>• Structured Practical Engineering Workbook</li>
                  <li>• Source Code Repository access parameters</li>
                  <li>• Professional Project Documentation layout</li>
                  <li>• Tailored GitHub, Resume, & LinkedIn Optimization</li>
                  <li>• Complete Interview Toolkit & Mentorship Paths</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-blue-400 border-b border-slate-800 pb-2 mb-3 text-sm tracking-wider uppercase">
                  Learning & Career Outcomes
                </h4>
                <ul className="text-xs space-y-1.5 text-slate-300">
                  <li>• Engineer, wire, and balance complex automated rigs</li>
                  <li>• Write advanced logic inside Embedded C environments</li>
                  <li>
                    • Troubleshoot complex software/hardware stack runtime
                    errors
                  </li>
                  <li>
                    • Prepares for target roles:{" "}
                    <em className="text-slate-400">
                      Robotics Engineer, Embedded Developer, IoT Architect,
                      Automation Professional, Product R&D Engineer.
                    </em>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Footnote Summary info */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap justify-between items-center gap-4 text-xs text-slate-500">
            <div>
              <span className="font-semibold text-slate-900 block mb-0.5">
                The Genixotech Promise:
              </span>
              We don't believe internships should end with just a piece of
              paper. Every participant works with actual physical hardware,
              tackles real engineering problems, and builds the confidence
              needed to excel across competitive markets, deep-tech research
              hubs, or innovative startup landscapes.
            </div>
          </div>
        </section>
      </div>

      {/* --- REUSABLE FAQ & CTA BOTTOM ELEMENT --- */}
      <div className="max-w-4xl mx-auto px-4 mt-24">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 mb-12">
          <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4 divide-y divide-slate-100">
            <div className="pt-2">
              <p className="font-semibold text-slate-900">
                Q. Do students need coding knowledge?
              </p>
              <p className="text-slate-600 text-sm mt-1">
                A. No. The workshops are completely beginner-friendly.
              </p>
            </div>
            <div className="pt-4">
              <p className="font-semibold text-slate-900">
                Q. Can you conduct the workshop at our campus?
              </p>
              <p className="text-slate-600 text-sm mt-1">
                A. Yes, we conduct full on-campus installations and workshops
                across regions.
              </p>
            </div>
            <div className="pt-4">
              <p className="font-semibold text-slate-900">
                Q. How many students can participate?
              </p>
              <p className="text-slate-600 text-sm mt-1">
                A. We can conduct workshops for a classroom or an entire school.
              </p>
            </div>
            <div className="pt-4">
              <p className="font-semibold text-slate-900">
                Q. Will students receive certificates?
              </p>
              <p className="text-slate-600 text-sm mt-1">
                A. Yes, every participant receives a certificate.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Card */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-10 rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to inspire the next generation of innovators?
          </h2>
          <p className="text-blue-50/90 mb-8 max-w-lg mx-auto text-sm md:text-base">
            Partner with Genixotech to organize a Robotics Workshop or Training
            track directly at your institution.
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

export default RoboticsPage;
