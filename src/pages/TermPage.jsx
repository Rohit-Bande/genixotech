import React, { useState } from "react";

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "acceptance", title: "1. Acceptance of Terms" },
    { id: "services", title: "2. Services Offered" },
    { id: "eligibility", title: "3. Eligibility" },
    { id: "account", title: "4. Account Responsibility" },
    { id: "fees", title: "5. Course Enrollment & Fees" },
    { id: "attendance", title: "6. Attendance & Participation" },
    { id: "certificates", title: "7. Certificates" },
    { id: "ip-rights", title: "8. Intellectual Property Rights" },
    { id: "disclaimer", title: "9. Internship & Placement Disclaimer" },
    { id: "project-support", title: "10. Project Delivery & Support" },
    { id: "conduct", title: "11. User Conduct" },
    { id: "availability", title: "12. Website Availability" },
    { id: "third-party", title: "13. Third-Party Services" },
    { id: "liability", title: "14. Limitation of Liability" },
    { id: "indemnity", title: "15. Indemnification" },
    { id: "modifications", title: "16. Modifications to Terms" },
    { id: "governing-law", title: "17. Governing Law & Jurisdiction" },
    { id: "contact", title: "18. Contact Information" },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased">
      {/* Header Banner */}
      <header className="bg-gradient-to-r from-indigo-700 to-purple-800 text-white py-12 px-4 sm:px-6 lg:px-8 text-center shadow-md">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Genixotech Terms &amp; Conditions
        </h1>
        <p className="mt-3 text-sm sm:text-base text-indigo-100 max-w-2xl mx-auto">
          Effective Date: 04 July 2026
        </p>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Sidebar / Table of Contents (Sticky on desktop, hidden on mobile) */}
          <aside className="hidden lg:block lg:w-1/4 lg:sticky lg:top-6 h-fit max-h-[calc(100vh-4rem)] overflow-y-auto bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Table of Contents
            </h2>
            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-150 block ${
                    activeSection === section.id
                      ? "bg-indigo-50 text-indigo-700 font-semibold"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </aside>

          {/* Terms Content */}
          <main className="flex-1 bg-white p-6 sm:p-10 rounded-xl shadow-sm border border-gray-100 space-y-10">
            {/* Welcome Intro */}
            <section className="prose max-w-none text-gray-600 leading-relaxed border-b border-gray-100 pb-8">
              <p className="mb-4">
                Welcome to <strong>Genixotech</strong>. These Terms &amp;
                Conditions govern your access to and use of the Genixotech
                website, courses, training programs, internships, workshops,
                educational content, and related services.
              </p>
              <p className="bg-indigo-50 border-l-4 border-indigo-600 p-4 text-indigo-900 rounded-r-md text-sm">
                By accessing our website or enrolling in any of our programs,
                you agree to comply with and be bound by these Terms &amp;
                Conditions.
              </p>
            </section>

            {/* Section 1 */}
            <section id="acceptance" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-600">
                By accessing or using the Genixotech website or services, you
                acknowledge that you have read, understood, and agreed to these
                Terms &amp; Conditions and our Privacy Policy. If you do not
                agree with any part of these terms, please do not use our
                website or services.
              </p>
            </section>

            {/* Section 2 */}
            <section id="services" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                2. Services Offered
              </h2>
              <p className="text-gray-600 mb-4">
                Genixotech provides educational and training services including
                but not limited to:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700 font-medium">
                {[
                  "Embedded Systems Training",
                  "Programming Courses",
                  "Robotics Training",
                  "IoT Training",
                  "Artificial Intelligence and Machine Learning Programs",
                  "Internship Programs",
                  "Industrial Training",
                  "Workshops and Seminars",
                  "Project Development Support",
                  "Career Guidance and Counseling",
                ].map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg border border-gray-100"
                  >
                    <span className="w-2 h-2 rounded-full bg-indigo-500 shrink-0"></span>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 italic mt-4">
                Genixotech reserves the right to modify, suspend, or discontinue
                any service at any time without prior notice.
              </p>
            </section>

            {/* Section 3 */}
            <section id="eligibility" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                3. Eligibility
              </h2>
              <p className="text-gray-600 mb-3">
                Users enrolling in courses or services must:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-600 mb-4">
                <li>Provide accurate and complete information.</li>
                <li>Be legally capable of entering into agreements.</li>
                <li>
                  Obtain parental or guardian consent if under 18 years of age.
                </li>
              </ul>
              <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded p-2 inline-block">
                Genixotech reserves the right to refuse enrollment if false
                information is provided.
              </p>
            </section>

            {/* Section 4 */}
            <section id="account" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                4. Registration and Account Responsibility
              </h2>
              <p className="text-gray-600 mb-3">Users are responsible for:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-600 mb-3">
                <li>
                  Maintaining the confidentiality of their login credentials.
                </li>
                <li>Ensuring all registration information is accurate.</li>
                <li>Updating information when changes occur.</li>
              </ul>
              <p className="text-sm font-semibold text-gray-800 bg-gray-50 p-3 rounded-md border-l-4 border-gray-400">
                Any activity performed using your account shall be considered
                your responsibility.
              </p>
            </section>

            {/* Section 5 */}
            <section id="fees" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                5. Course Enrollment and Fees
              </h2>
              <div className="space-y-3 text-sm text-gray-600">
                <p>
                  • Course fees must be paid according to the selected program
                  structure. Enrollment is confirmed only after successful
                  payment verification.
                </p>
                <p>
                  • Prices displayed on the website are subject to change
                  without prior notice. Taxes, if applicable, shall be charged
                  additionally as per government regulations.
                </p>
              </div>
              <div className="mt-4 bg-amber-50 border-l-4 border-amber-500 p-4 text-amber-900 rounded-r-md text-sm">
                <strong>Warning:</strong> Failure to complete payments may
                result in suspension of access to training materials, classes,
                certificates, or project support.
              </div>
            </section>

            {/* Section 6 */}
            <section id="attendance" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                6. Attendance and Participation
              </h2>
              <p className="text-gray-600 mb-3">Students are expected to:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 mb-3">
                <li>Attend sessions regularly.</li>
                <li>
                  Participate actively in practical sessions and assignments.
                </li>
                <li>
                  Maintain discipline and professionalism during classes and
                  workshops.
                </li>
              </ul>
              <p className="text-xs text-red-700 italic">
                * Repeated misconduct may lead to suspension or termination of
                enrollment without refund.
              </p>
            </section>

            {/* Section 7 */}
            <section id="certificates" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                7. Certificates
              </h2>
              <p className="text-gray-600 mb-3">
                Completion certificates, internship certificates, or project
                certificates may be issued only if:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-sm font-medium mb-4">
                <div className="bg-gray-50 border border-gray-200 p-3 rounded-lg">
                  Minimum attendance requirements met
                </div>
                <div className="bg-gray-50 border border-gray-200 p-3 rounded-lg">
                  Assignments &amp; assessments completed
                </div>
                <div className="bg-gray-50 border border-gray-200 p-3 rounded-lg">
                  All dues are completely cleared
                </div>
              </div>
              <p className="text-xs text-gray-500 italic">
                Genixotech reserves the right to withhold certificates if these
                conditions are not met.
              </p>
            </section>

            {/* Section 8 */}
            <section id="ip-rights" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                8. Intellectual Property Rights
              </h2>
              <p className="text-gray-600 mb-3">
                All content available on the Genixotech website (including
                course material, presentations, videos, graphics, logos,
                documents, source code examples, and training resources) remains
                the intellectual property of Genixotech unless otherwise stated.
              </p>
              <div className="bg-red-50 text-red-900 border border-red-100 rounded-lg p-4 text-sm">
                <span className="font-semibold block mb-1">
                  Users are strictly prohibited from:
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs font-medium text-red-800">
                  <div>• Copying or reproducing materials</div>
                  <div>• Reselling training content</div>
                  <div>• Sharing paid resources publicly</div>
                  <div>• Distributing copyrighted material</div>
                </div>
                <span className="block mt-3 text-xs text-red-700 italic">
                  Unauthorized use may result in legal action.
                </span>
              </div>
            </section>

            {/* Section 9 */}
            <section id="disclaimer" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                9. Internship and Placement Disclaimer
              </h2>
              <p className="text-gray-600 mb-3">
                Genixotech provides skill development, training, and career
                guidance services. Unless explicitly mentioned in writing,
                Genixotech <strong>does not guarantee</strong> job placement,
                internship selection, salary packages, or employment
                opportunities.
              </p>
              <p className="text-sm bg-blue-50 border-l-4 border-blue-500 p-3 text-blue-900 rounded-r-md">
                Employment outcomes depend entirely on individual performance,
                market conditions, technical skills, and interview performance.
              </p>
            </section>

            {/* Section 10 */}
            <section id="project-support" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                10. Project Delivery and Support
              </h2>
              <p className="text-gray-600 mb-2">
                For academic and industrial projects:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                <li>
                  Timelines shall be communicated during project initiation.
                </li>
                <li>
                  Delays caused by incomplete requirements from clients or
                  students may affect delivery schedules.
                </li>
                <li>
                  Additional features requested after project approval may incur
                  additional charges.
                </li>
              </ul>
            </section>

            {/* Section 11 */}
            <section id="conduct" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                11. User Conduct
              </h2>
              <p className="text-gray-600 mb-3">Users agree not to:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600 pl-2 mb-3">
                <div>• Violate any applicable laws</div>
                <div>• Misuse website services</div>
                <div>• Attempt unauthorized system access</div>
                <div>• Upload malicious software/content</div>
                <div className="sm:col-span-2">
                  • Harass staff members, instructors, or other students
                </div>
              </div>
              <p className="text-xs text-red-600 italic">
                Violation may result in account suspension and legal action
                where necessary.
              </p>
            </section>

            {/* Section 12 */}
            <section id="availability" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                12. Website Availability
              </h2>
              <p className="text-gray-600 mb-2">
                Genixotech strives to maintain uninterrupted website access;
                however, we do not guarantee continuous availability, error-free
                operation, or virus-free access.
              </p>
              <p className="text-xs text-gray-500 italic">
                Temporary interruptions may occur due to maintenance, updates,
                or technical issues.
              </p>
            </section>

            {/* Section 13 */}
            <section id="third-party" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                13. Third-Party Services
              </h2>
              <p className="text-gray-600 mb-3">
                Our website may contain links or integrations with third-party
                services including payment gateways, communication platforms,
                social media platforms, and analytics providers.
              </p>
              <p className="text-xs bg-gray-50 p-2 border rounded text-gray-500">
                Genixotech is not responsible for the policies or actions of
                third-party providers.
              </p>
            </section>

            {/* Section 14 */}
            <section id="liability" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                14. Limitation of Liability
              </h2>
              <p className="text-gray-600 mb-3">
                Genixotech shall not be liable for loss of data, loss of
                profits, business interruption, technical issues beyond our
                control, or decisions taken based on training or educational
                content.
              </p>
              <p className="text-sm font-semibold text-gray-900 bg-gray-100 p-3 rounded">
                Our total liability, if any, shall be limited to the fees paid
                by the user for the specific service involved.
              </p>
            </section>

            {/* Section 15 */}
            <section id="indemnity" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                15. Indemnification
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Users agree to indemnify and hold harmless Genixotech, its
                employees, trainers, and affiliates against any claims,
                liabilities, damages, or expenses arising from misuse of
                services or violation of these Terms &amp; Conditions.
              </p>
            </section>

            {/* Section 16 */}
            <section id="modifications" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                16. Modifications to Terms
              </h2>
              <p className="text-gray-600 text-sm">
                Genixotech reserves the right to update these Terms &amp;
                Conditions at any time. Changes become effective immediately
                upon publication on this page. Continued use of the website
                constitutes acceptance of the revised terms.
              </p>
            </section>

            {/* Section 17 */}
            <section id="governing-law" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                17. Governing Law and Jurisdiction
              </h2>
              <p className="text-gray-600 text-sm">
                These Terms &amp; Conditions shall be governed by and
                interpreted in accordance with the laws of India. Any disputes
                arising out of these terms shall be subject to the exclusive
                jurisdiction of the courts located in Indore, Madhya Pradesh,
                India.
              </p>
            </section>

            {/* Section 18 */}
            <section
              id="contact"
              className="scroll-mt-6 bg-slate-900 text-white p-6 sm:p-8 rounded-xl shadow-inner"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-slate-700 pb-2 mb-4">
                18. Contact Information
              </h2>
              <p className="text-slate-300 text-sm mb-6">
                For questions regarding these Terms &amp; Conditions, please
                contact us:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-3">
                  <div>
                    <span className="block text-xs font-semibold uppercase text-slate-400">
                      Website
                    </span>
                    <a
                      href="https://genixotech.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:underline"
                    >
                      https://genixotech.com
                    </a>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase text-slate-400">
                      Email
                    </span>
                    <a
                      href="mailto:info@genixotech.com"
                      className="text-indigo-400 hover:underline"
                    >
                      info@genixotech.com
                    </a>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase text-slate-400">
                      Phone
                    </span>
                    <a
                      href="tel:+919171805055"
                      className="text-slate-200 hover:underline"
                    >
                      +91 9171805055
                    </a>
                  </div>
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase text-slate-400">
                    Address
                  </span>
                  <p className="text-slate-300 leading-relaxed mt-1">
                    201, White Lotus Plaza,
                    <br />
                    1 Avantika Nagar, Sangam Nagar,
                    <br />
                    Indore, Madhya Pradesh 452006, India
                  </p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-gray-100 text-center py-6 text-xs text-gray-500 border-t border-gray-200">
        By using our website and services, you acknowledge that you have read,
        understood, and agreed to these Terms &amp; Conditions.
      </footer>
    </div>
  );
};

export default TermsAndConditions;
