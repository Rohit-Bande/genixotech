import { useState } from "react";
import {
  FaBookOpen,
  FaGraduationCap,
  FaCreditCard,
  FaCalendarDays,
  FaLaptopCode,
  FaHandshake,
  FaChevronDown,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa6";

const HelpCenter = () => {
  // State to manage individual open/close toggles for the FAQ accordion list
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Structured Data Array for the "How Can We Help You?" Cards
  const supportCategories = [
    {
      title: "Course Information",
      icon: <FaBookOpen />,
      iconBg: "bg-blue-50 text-blue-600",
      description: "Need details about our engineering tracks or syllabi?",
      items: [
        "C Programming",
        "Embedded Systems",
        "Robotics",
        "IoT (Internet of Things)",
        "Artificial Intelligence Basics",
        "STEM Learning Programs",
        "Internship Programs",
        "School & College Workshops",
      ],
      footer:
        "Contact us for complete syllabus, duration, eligibility, and career guidance.",
    },
    {
      title: "Admission Support",
      icon: <FaGraduationCap />,
      iconBg: "bg-amber-50 text-amber-600",
      description: "Need immediate assistance setting up your profile?",
      items: [
        "Eligibility Check",
        "Registration Process",
        "Batch Availability",
        "Seat Confirmation",
        "Student Verification",
        "Enrollment Process",
      ],
    },
    {
      title: "Fees & Payments",
      icon: <FaCreditCard />,
      iconBg: "bg-emerald-50 text-emerald-600",
      description: "Questions regarding processing structures or receipts?",
      items: [
        "Course Fees",
        "Installment Plans",
        "Payment Methods",
        "Payment Confirmation",
        "Invoice Requests",
        "Scholarship Information",
      ],
    },
    {
      title: "Upcoming Batches",
      icon: <FaCalendarDays />,
      iconBg: "bg-purple-50 text-purple-600",
      description: "Looking for calendar slots or class frequency ranges?",
      items: [
        "Upcoming Batches",
        "Weekend Batches",
        "Fast Track Programs",
        "Workshop Schedules",
        "Demo Classes",
      ],
    },
    {
      title: "Technical Support",
      icon: <FaLaptopCode />,
      iconBg: "bg-rose-50 text-rose-600",
      description: "Encountering system dashboard errors or portal locks?",
      items: [
        "Online Class Access",
        "Learning Portal Login",
        "Course Material Access",
        "Assignment Support",
        "Project Submission Issues",
        "Certificate Queries",
      ],
    },
    {
      title: "Partnership Portals",
      icon: <FaHandshake />,
      iconBg: "bg-indigo-50 text-indigo-600",
      description: "Institutional alignments or community programs?",
      items: [
        "School Robotics Programs",
        "College Skill Development",
        "Industrial Workshops",
        "Faculty Development (FDP)",
        "CSR Training Programs",
        "Campus Training",
      ],
    },
  ];

  // Structured Data Array for the Frequently Asked Questions
  const faqData = [
    {
      question: "Who can join Genixotech courses?",
      answer:
        "Our programs are carefully tiered for multiple skill brackets: School Students (Class 6–12), Diploma Tracks, Engineering Undergraduates, Strategic Graduates, Working Professionals, and complete beginners with absolutely no prior background in electronics.",
    },
    {
      question: "Do I need prior programming knowledge?",
      answer:
        "No. Most beginner-level modules introduce computing architecture completely from the fundamentals before progressing to advanced registers or script blocks.",
    },
    {
      question: "Are certificates provided?",
      answer:
        "Yes. All enrolled students receive a formal verifiable Certificate of Completion after successfully submitting their target system prototypes and passing program requirements.",
    },
    {
      question: "Are classes online or offline?",
      answer:
        "We accommodate diverse learners by providing traditional Offline Classroom Training labs, live synchronous Online Classes, and Hybrid learning models for specific programs.",
    },
    {
      question: "Will I get practical experience?",
      answer:
        "Absolutely. Our entire structural core is focused away from static screen simulations and centered on real micro-controllers, custom edge boards, active diagnostic tools, and live projects.",
    },
    {
      question: "Do you provide placement support?",
      answer:
        "Yes. Eligible students receive dedicated career guidance pipelines including resume reviews, core technical interview mock sessions, and direct portfolio evaluation loops tailored to student performance parameters.",
    },
    {
      question: "How do I enroll?",
      answer:
        "The pathway is straightforward: reach out directly to our team coordinators, select your custom technology framework, complete registration fields, process your basic admission seat deposit, and begin coding.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800 font-sans pb-20">
      {/* --- HEADER HERO BLOCK --- */}
      <div className="w-full bg-gradient-to-r from-blue-500 px-2 to-purple-500 text-white py-16 md:py-20 flex justify-center border-b border-gray-800">
        <div className="w-[83%] text-center md:text-left">
          <span className="text-white font-bold tracking-widest text-sm uppercase block mb-2">
            Support Database
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            Help Center. We're Here for You!
          </h1>
          <p className="max-w-2xl text-white-400 text-base md:text-lg leading-relaxed">
            Whether you're a student building code, a parent matching tracks, or
            a collegiate representative setting up advanced engineering labs,
            we're optimized to resolve your operational queries in real-time.
          </p>
        </div>
      </div>

      {/* --- CORE RESPONSIVE WRAPPER CONTENT --- */}
      <div className="w-full flex justify-center mt-12">
        <div className="w-[83%] flex flex-col lg:flex-row gap-10 items-start">
          {/* MAIN LEFT AREA: HELPDESK CATEGORIES + ACCORDIONS */}
          <div className="w-full lg:w-2/3 space-y-12">
            {/* GRID OF SERVICES COVERED */}
            <div>
              <h2 className="text-2xl font-black text-[#1f272b] mb-6 border-b pb-3">
                How Can We Help You?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {supportCategories.map((cat, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-xl border border-gray-200/60 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div
                        className={`w-10 h-10 ${cat.iconBg} rounded-lg flex items-center justify-center mb-4 text-lg font-bold`}
                      >
                        {cat.icon}
                      </div>
                      <h3 className="font-bold text-black text-lg mb-1">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-gray-500 mb-4">
                        {cat.description}
                      </p>

                      <ul className="space-y-1.5 mb-4">
                        {cat.items.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-600 flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {cat.footer && (
                      <div className="mt-2 pt-3 border-t border-gray-100 text-xs text-blue-600 font-medium">
                        {cat.footer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* INTERACTIVE FAQ ACCORDION */}
            <div>
              <h2 className="text-2xl font-black text-[#1f272b] mb-6 border-b pb-3">
                Frequently Asked Questions (FAQ)
              </h2>
              <div className="space-y-3">
                {faqData.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all shadow-sm"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-5 text-left font-bold text-gray-900 flex justify-between items-center hover:bg-gray-50/50 transition-colors gap-4"
                      >
                        <span className="text-sm md:text-base">
                          {faq.question}
                        </span>
                        <FaChevronDown
                          className={`text-gray-400 transition-transform duration-200 shrink-0 text-sm ${
                            isOpen ? "rotate-180 text-[#1D52FF]" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          isOpen
                            ? "max-h-[300px] border-t border-gray-100"
                            : "max-h-0"
                        }`}
                      >
                        <p className="p-5 text-sm text-gray-600 leading-relaxed bg-gray-50/30">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR PANEL: DIRECT REACH OUT INFRASTRUCTURE */}
          <div className="w-full lg:w-1/3 space-y-6 lg:sticky lg:top-24">
            {/* PANEL 1: CORE CHANNELS */}
            <div className="bg-[#1f272b] text-white p-6 rounded-2xl shadow-md border border-gray-800">
              <h3 className="text-lg font-bold border-b border-gray-700 pb-3 mb-4 text-[#839ffc]">
                Contact Support
              </h3>
              <p className="text-xs text-gray-400 mb-5">
                Need direct manual routing? Connect instantly across verified
                engineering help desks:
              </p>

              <div className="space-y-4">
                <a
                  href="tel:+919406701945"
                  className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center text-sm">
                    <FaPhone />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-medium">
                      Direct Voice Line
                    </span>
                    <span className="text-sm font-bold tracking-wide group-hover:text-blue-400 transition-colors">
                      +91 91718-05055
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:info@genixotech.com"
                  className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center text-sm">
                    <FaEnvelope />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-medium">
                      Secure Email Log
                    </span>
                    <span className="text-sm font-bold tracking-wide group-hover:text-amber-400 transition-colors">
                      info@genixotech.com
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center text-sm">
                    <FaGlobe />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-medium">
                      Global Domain
                    </span>
                    <span className="text-sm font-bold tracking-wide">
                      www.genixotech.com
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* PANEL 2: BUSINESS OPERATIONS WINDOW */}
            <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
              <h4 className="font-bold text-black text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                <FaClock className="text-gray-400" /> Business Hours
              </h4>
              <div className="text-sm space-y-2 text-gray-600">
                <div className="flex justify-between border-b pb-1.5 border-gray-100">
                  <span>Monday – Saturday</span>
                  <span className="font-semibold text-black">
                    10:00 AM – 7:00 PM
                  </span>
                </div>
                <div className="flex justify-between text-rose-600">
                  <span>Sunday</span>
                  <span className="font-bold uppercase text-xs tracking-wider bg-rose-50 px-2 py-0.5 rounded">
                    Closed
                  </span>
                </div>
              </div>
            </div>

            {/* PANEL 3: WHATSAPP ESCALATION TRUCK */}
            <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl text-center">
              <h4 className="font-bold text-emerald-950 text-base mb-1">
                Still Need Help?
              </h4>
              <p className="text-xs text-emerald-800 mb-4">
                Our quick response team is waiting. Open a instant telemetry
                chat mesh right now.
              </p>
              <a
                href="https://wa.me/919406701945"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm transition-colors shadow-sm shadow-emerald-700/10"
              >
                <FaWhatsapp className="text-lg" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
