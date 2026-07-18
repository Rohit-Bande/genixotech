import React, { useState } from "react";

const RefundAndCancellationPolicy = () => {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "registration-confirmation", title: "1. Registration Confirmation" },
    { id: "cancellation-by-student", title: "2. Cancellation by Student" },
    { id: "non-refundable-items", title: "3. Non-Refundable Items" },
    { id: "workshops-events", title: "4. Refund for Workshops & Events" },
    { id: "internship-programs", title: "5. Refund for Internship Programs" },
    { id: "project-services", title: "6. Refund for Project Services" },
    { id: "course-transfer", title: "7. Course Transfer & Rescheduling" },
    { id: "cancellation-by-company", title: "8. Cancellation by Genixotech" },
    { id: "processing-timeline", title: "9. Refund Processing Timeline" },
    { id: "promotional-offers", title: "10. Promotional Offers & Discounts" },
    { id: "no-refund-situations", title: "11. No Refund Situations" },
    { id: "force-majeure", title: "12. Force Majeure" },
    { id: "request-refund", title: "13. How to Request a Refund" },
    { id: "contact-info", title: "14. Contact Information" },
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
      <header className="bg-gradient-to-r from-teal-700 to-emerald-800 text-white py-12 px-4 sm:px-6 lg:px-8 text-center shadow-md">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Genixotech Refund &amp; Cancellation Policy
        </h1>
        <p className="mt-3 text-sm sm:text-base text-teal-100 max-w-2xl mx-auto">
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
                      ? "bg-teal-50 text-teal-700 font-semibold"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </aside>

          {/* Policy Content */}
          <main className="flex-1 bg-white p-6 sm:p-10 rounded-xl shadow-sm border border-gray-100 space-y-10">
            {/* Welcome Intro */}
            <section className="prose max-w-none text-gray-600 leading-relaxed border-b border-gray-100 pb-8">
              <p className="mb-4">
                At <strong>Genixotech</strong>, we strive to provide
                high-quality training, internships, workshops, and educational
                services. This Refund &amp; Cancellation Policy outlines the
                terms governing cancellations, refunds, transfers, and related
                matters for all programs and services offered by Genixotech.
              </p>
              <p className="bg-teal-50 border-l-4 border-teal-600 p-4 text-teal-900 rounded-r-md text-sm">
                By enrolling in any course, internship, workshop, project, or
                service provided by Genixotech, you agree to this Refund &amp;
                Cancellation Policy.
              </p>
            </section>

            {/* Section 1 */}
            <section id="registration-confirmation" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                1. Registration Confirmation
              </h2>
              <p className="text-gray-600 mb-3">
                Enrollment in any Genixotech program is confirmed only after:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-600 mb-4">
                <li>Successful payment of applicable fees.</li>
                <li>Completion of the registration process.</li>
                <li>Submission of required documents, where applicable.</li>
              </ul>
              <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded p-2 inline-block">
                Genixotech reserves the right to reject or cancel registrations
                if inaccurate or incomplete information is provided.
              </p>
            </section>

            {/* Section 2 */}
            <section id="cancellation-by-student" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                2. Cancellation by Student
              </h2>
              <p className="text-gray-600 mb-4">
                Students may request cancellation of their enrollment by
                submitting a written request via email or official communication
                channels. Refund eligibility depends on the time of cancellation
                as outlined below:
              </p>

              <div className="space-y-4">
                <div className="bg-gray-50 border border-gray-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-teal-800 text-sm mb-1">
                    Before Course Commencement
                  </h3>
                  <p className="text-xs text-gray-600">
                    Cancellation requests made{" "}
                    <strong>7 days or more before</strong> the batch start date
                    are eligible for a refund of the paid amount after deducting
                    applicable administrative or processing charges.
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-teal-800 text-sm mb-1">
                    Within 7 Days Before Course Start
                  </h3>
                  <p className="text-xs text-gray-600">
                    Cancellation requests made{" "}
                    <strong>within 7 days before</strong> the course
                    commencement date may be eligible for a partial refund after
                    deduction of administrative, registration, and resource
                    allocation charges.
                  </p>
                </div>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md text-amber-900 text-xs">
                  <span className="font-bold block mb-1">
                    After Course Commencement (No Refund Scenario):
                  </span>
                  No refund shall be provided if the student has attended any
                  live session, or if access to recorded content, learning
                  material, or LMS resources has been provided. Similarly, no
                  refunds apply once internship work/project allocation has
                  started or if course materials, kits, or resources have been
                  delivered or shared.
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="non-refundable-items" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                3. Non-Refundable Items
              </h2>
              <p className="text-gray-600 mb-3 text-sm">
                The following fees are non-refundable unless required by law:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-medium text-gray-600 bg-gray-50 p-4 rounded-lg border border-gray-100">
                {[
                  "Registration fees",
                  "Admission fees",
                  "Processing charges",
                  "Study material charges",
                  "Examination fees",
                  "Certification fees",
                  "Internship documentation fees",
                  "Project allocation charges",
                  "Software license fees",
                  "Hardware kit charges",
                  "Taxes paid to government",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-1">
                    <span className="text-red-400 font-bold">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4 */}
            <section id="workshops-events" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                4. Refund for Workshops and Events
              </h2>
              <p className="text-gray-600 mb-2">
                For workshops, seminars, bootcamps, and events:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-600">
                <li>
                  Cancellation requests received{" "}
                  <strong>at least 72 hours before</strong> the event may
                  qualify for a refund after deduction of administrative
                  charges.
                </li>
                <li>
                  No refund shall be issued for cancellations made{" "}
                  <strong>less than 72 hours</strong> before the scheduled
                  event.
                </li>
                <li>
                  Failure to attend an event does not qualify for a refund.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="internship-programs" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                5. Refund for Internship Programs
              </h2>
              <p className="text-gray-600 mb-3">For internships:</p>
              <p className="text-sm text-gray-600 mb-2">
                Refund requests are accepted <strong>only before</strong>{" "}
                onboarding activities begin.
              </p>
              <p className="text-xs text-red-700 bg-red-50 border-l-4 border-red-500 p-3 rounded-r">
                Once internship access, assignments, project work, mentor
                allocation, or documentation processes begin, refunds will not
                be provided.
              </p>
            </section>

            {/* Section 6 */}
            <section id="project-services" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                6. Refund for Project Services
              </h2>
              <p className="text-gray-600 mb-3">
                For academic or industrial projects:
              </p>
              <p className="text-sm text-gray-600 mb-3">
                Payments made for project consultation, design, development,
                documentation, or implementation are generally non-refundable.
              </p>
              <div className="bg-gray-50 border border-gray-200 p-3 rounded text-xs text-gray-500">
                If a project is cancelled before work begins, Genixotech may
                review refund eligibility on a case-by-case basis. Work already
                completed shall be charged proportionately.
              </div>
            </section>

            {/* Section 7 */}
            <section id="course-transfer" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                7. Course Transfer and Batch Rescheduling
              </h2>
              <p className="text-gray-600 mb-3">
                Subject to seat availability and management approval:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-600">
                <li>
                  Students may request transfer to another batch or upcoming
                  session.
                </li>
                <li>
                  Transfer requests should be submitted <strong>before</strong>{" "}
                  the batch start date.
                </li>
                <li>
                  Additional fees may apply if the new batch has a different fee
                  structure.
                </li>
              </ul>
              <p className="text-xs text-gray-500 font-medium italic mt-3">
                * Approval of transfer requests remains at the sole discretion
                of Genixotech.
              </p>
            </section>

            {/* Section 8 */}
            <section id="cancellation-by-company" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                8. Cancellation by Genixotech
              </h2>
              <p className="text-gray-600 mb-3">
                Genixotech reserves the right to postpone, reschedule, merge, or
                cancel programs due to insufficient enrollments, faculty
                availability issues, technical limitations, force majeure
                events, government restrictions, or circumstances beyond
                reasonable control.
              </p>
              <p className="text-sm text-gray-700 mb-2 font-medium">
                In such cases, participants may be offered one of the following:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-medium">
                <div className="bg-gray-100 p-2.5 rounded border border-gray-200">
                  Transfer to a future batch
                </div>
                <div className="bg-gray-100 p-2.5 rounded border border-gray-200">
                  Course credit
                </div>
                <div className="bg-gray-100 p-2.5 rounded border border-gray-200">
                  Alternative program
                </div>
                <div className="bg-teal-50 text-teal-800 p-2.5 rounded border border-teal-200 font-semibold">
                  Full refund of paid fees
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section id="processing-timeline" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                9. Refund Processing Timeline
              </h2>
              <div className="bg-teal-50 border-l-4 border-teal-500 p-4 text-teal-900 rounded-r-md">
                <p className="text-sm font-semibold mb-1">
                  Approved refunds shall be processed within:
                </p>
                <p className="text-2xl font-black text-teal-900 tracking-tight">
                  7 to 15 Business Days
                </p>
              </div>
              <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                The refund amount shall be credited through the original payment
                method wherever possible. Actual credit timelines may vary
                depending on banks, payment gateways, or financial institutions.
              </p>
            </section>

            {/* Section 10 */}
            <section id="promotional-offers" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                10. Promotional Offers and Discounts
              </h2>
              <p className="text-gray-600 text-sm">
                Fees paid under promotional campaigns, early bird offers,
                discount coupons, scholarship programs, or limited-time offers
                may have separate refund conditions which will be communicated
                during enrollment.
              </p>
            </section>

            {/* Section 11 */}
            <section id="no-refund-situations" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                11. No Refund in Following Situations
              </h2>
              <p className="text-gray-600 mb-3">
                Refunds shall not be issued in the following circumstances:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600 list-inside list-disc bg-gray-50 p-5 rounded-lg border border-gray-100">
                <li>Failure to attend classes</li>
                <li>Change of personal schedule</li>
                <li>Lack of interest in the course</li>
                <li>Dissatisfaction due to unmet personal expectations</li>
                <li>Failure to complete assignments/assessments</li>
                <li>Violation of institute policies</li>
                <li>Suspension/termination due to misconduct</li>
              </ul>
            </section>

            {/* Section 12 */}
            <section id="force-majeure" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                12. Force Majeure
              </h2>
              <p className="text-gray-600 mb-3 text-sm">
                Genixotech shall not be held responsible for delays,
                interruptions, or cancellations caused by events beyond
                reasonable control, including:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Natural disasters",
                  "Government restrictions",
                  "Internet outages",
                  "Pandemics",
                  "Civil disturbances",
                  "Technical infrastructure failures",
                ].map((evt, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded border border-gray-200 text-xs font-medium"
                  >
                    {evt}
                  </span>
                ))}
              </div>
            </section>

            {/* Section 13 */}
            <section id="request-refund" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                13. How to Request a Refund
              </h2>
              <p className="text-gray-600 mb-4 text-sm">
                Refund requests must be submitted through official communication
                channels with the following explicit details:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-4">
                <div className="space-y-2">
                  <div className="bg-gray-50 p-3 rounded border border-gray-100">
                    <strong>Full Name</strong>
                  </div>
                  <div className="bg-gray-50 p-3 rounded border border-gray-100">
                    <strong>Registered Mobile Number</strong>
                  </div>
                  <div className="bg-gray-50 p-3 rounded border border-gray-100">
                    <strong>Registered Email Address</strong>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-gray-50 p-3 rounded border border-gray-100">
                    <strong>Course or Program Name</strong>
                  </div>
                  <div className="bg-gray-50 p-3 rounded border border-gray-100">
                    <strong>Payment Receipt / Invoice Number</strong>
                  </div>
                  <div className="bg-gray-50 p-3 rounded border border-gray-100">
                    <strong>Reason for Refund Request</strong>
                  </div>
                </div>
              </div>
              <p className="text-xs text-amber-700 italic font-medium">
                * Note: Incomplete requests may delay processing.
              </p>
            </section>

            {/* Section 14 */}
            <section
              id="contact-info"
              className="scroll-mt-6 bg-slate-900 text-white p-6 sm:p-8 rounded-xl shadow-inner"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-slate-700 pb-2 mb-4">
                14. Contact Information
              </h2>
              <p className="text-slate-300 text-sm mb-6">
                For refund or cancellation requests, please contact us:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-3">
                  <div>
                    <span className="block text-xs font-semibold uppercase text-slate-400">
                      Website
                    </span>
                    <a
                      href="https://www.genixotech.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400 hover:underline"
                    >
                      https://www.genixotech.com
                    </a>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase text-slate-400">
                      Email
                    </span>
                    <a
                      href="mailto:info@genixotech.com"
                      className="text-teal-400 hover:underline"
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
        By enrolling in any Genixotech program or using our services, you
        acknowledge that you have read, understood, and agreed to this Refund
        &amp; Cancellation Policy.
      </footer>
    </div>
  );
};

export default RefundAndCancellationPolicy;
