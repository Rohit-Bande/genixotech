import React, { useState } from "react";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "info-collect", title: "1. Information We Collect" },
    { id: "how-use", title: "2. How We Use Your Information" },
    { id: "marketing", title: "3. Marketing Communications" },
    { id: "cookies", title: "4. Cookies and Analytics" },
    { id: "sharing", title: "5. Information Sharing" },
    { id: "security", title: "6. Data Security" },
    { id: "media", title: "7. Student Media and Testimonials" },
    { id: "third-party", title: "8. Third-Party Websites" },
    { id: "retention", title: "9. Data Retention" },
    { id: "rights", title: "10. Your Rights" },
    { id: "children", title: "11. Children’s Privacy" },
    { id: "changes", title: "12. Changes to This Privacy Policy" },
    { id: "contact", title: "13. Contact Us" },
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
      <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-12 px-4 sm:px-6 lg:px-8 text-center shadow-md">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Genixotech Privacy Policy
        </h1>
        <p className="mt-3 text-sm sm:text-base text-blue-100 max-w-2xl mx-auto">
          Effective Date: 04 July 2026
        </p>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Sidebar / Table of Contents (Hidden on mobile, sticky on desktop) */}
          <aside className="hidden lg:block lg:w-1/4 lg:sticky lg:top-6 h-fit max-h-[calc(100vh-4rem)] overflow-y-auto bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Table of Contents
            </h2>
            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150 block ${
                    activeSection === section.id
                      ? "bg-blue-50 text-blue-700 font-semibold"
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
                Welcome to <strong>Genixotech</strong>. Your privacy is
                important to us. This Privacy Policy explains how Genixotech
                collects, uses, stores, and protects your information when you
                visit our website, enroll in our courses, register for workshops
                or internships, submit inquiry forms, or interact with our
                services.
              </p>
              <p className="bg-blue-50 border-l-4 border-blue-600 p-4 text-blue-900 rounded-r-md text-sm">
                By using our website and services, you agree to the practices
                described in this Privacy Policy.
              </p>
            </section>

            {/* Section 1 */}
            <section id="info-collect" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                1. Information We Collect
              </h2>
              <p className="text-gray-600 mb-4">
                We may collect the following information from students, parents,
                professionals, institutions, and website visitors:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h3 className="font-semibold text-blue-800 mb-2">
                    Personal Information
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                    <li>Full Name</li>
                    <li>Mobile Number</li>
                    <li>Email Address</li>
                    <li>Address &amp; Date of Birth</li>
                    <li>Educational Qualification &amp; College/School Name</li>
                    <li>City and State</li>
                    <li>Parent or Guardian Information (where applicable)</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h3 className="font-semibold text-blue-800 mb-2">
                    Course &amp; Enrollment Information
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                    <li>Course selections &amp; Internship registrations</li>
                    <li>Workshop participation details</li>
                    <li>Project submissions</li>
                    <li>Certificates and completion records</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
                <h3 className="font-semibold text-blue-800 mb-2">
                  Payment Information
                </h3>
                <p className="text-sm text-gray-600">
                  For paid courses or services, payment details may be processed
                  through secure third-party payment gateways.{" "}
                  <strong>
                    Genixotech does not store complete credit card, debit card,
                    or banking information on its servers.
                  </strong>
                </p>
              </div>

              <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
                <h3 className="font-semibold text-blue-800 mb-2">
                  Technical Information
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  We may automatically collect:
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 pl-2">
                  <div>• IP Address</div>
                  <div>• Browser type &amp; version</div>
                  <div>• Device info &amp; Operating system</div>
                  <div>• Website usage statistics</div>
                  <div>• Referral sources</div>
                  <div>• Pages visited &amp; session duration</div>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section id="how-use" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-600 mb-3">
                Genixotech uses collected information for the following
                purposes:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600 list-inside list-disc bg-gray-50 p-5 rounded-lg border border-gray-100">
                <li>Processing course admissions &amp; registrations</li>
                <li>Managing internships, workshops, &amp; training</li>
                <li>Generating invoices, receipts, &amp; certificates</li>
                <li>Providing customer support &amp; resolving queries</li>
                <li>Sending class schedules, updates, &amp; notifications</li>
                <li>Sharing educational content &amp; learning resources</li>
                <li>Improving website performance &amp; user experience</li>
                <li>
                  Sending promotional offers, discounts, &amp; announcements
                </li>
                <li>Maintaining academic and business records</li>
                <li>Complying with legal and regulatory obligations</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="marketing" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                3. Marketing Communications
              </h2>
              <p className="text-gray-600 mb-3">
                By submitting your details through our website, forms,
                advertisements, WhatsApp links, or registration portals, you
                consent to receive calls, SMS notifications, WhatsApp messages,
                emails, and promotional communications.
              </p>
              <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 text-sm text-indigo-900">
                <span className="font-semibold block mb-1">
                  These communications may include:
                </span>
                Course announcements, internship opportunities, workshop
                registrations, discounts, offers, educational updates, and event
                invitations.
                <span className="block mt-2 font-medium text-indigo-700">
                  You may opt out of promotional communications at any time by
                  contacting us.
                </span>
              </div>
            </section>

            {/* Section 4 */}
            <section id="cookies" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                4. Cookies and Analytics
              </h2>
              <p className="text-gray-600 mb-3">
                Our website may use cookies and similar technologies to improve
                functionality, remember user preferences, analyze traffic, and
                enhance your browsing experience. We may use analytics tools
                including Google Analytics to understand how visitors interact
                with our website.
              </p>
              <p className="text-sm bg-gray-50 border border-gray-200 p-3 rounded text-gray-500">
                Users can disable cookies through their browser settings if they
                prefer not to share such information.
              </p>
            </section>

            {/* Section 5 */}
            <section id="sharing" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                5. Information Sharing
              </h2>
              <p className="text-gray-600 mb-3">
                Genixotech values your privacy and{" "}
                <strong>
                  does not sell, rent, or trade your personal information to
                  third parties
                </strong>
                . Information may only be shared with trusted service providers
                involved in:
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {[
                  "Payment processing",
                  "Certificate generation",
                  "Email delivery services",
                  "SMS & WhatsApp services",
                  "Website hosting & analytics",
                ].map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500 italic">
                Such service providers are permitted to use your information
                only for the specific services they provide to Genixotech.
              </p>
            </section>

            {/* Section 6 */}
            <section id="security" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                6. Data Security
              </h2>
              <p className="text-gray-600 mb-3">
                We implement appropriate administrative, technical, and physical
                safeguards to protect your information against unauthorized
                access, alteration, disclosure, misuse, loss, or destruction.
              </p>
              <p className="text-sm text-amber-800 bg-amber-50 border-l-4 border-amber-500 p-3 rounded-r-md">
                While we strive to use commercially acceptable methods to
                protect your information, no method of transmission over the
                internet is completely secure.
              </p>
            </section>

            {/* Section 7 */}
            <section id="media" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                7. Student Media and Testimonials
              </h2>
              <p className="text-gray-600">
                Genixotech may use photographs, videos, project demonstrations,
                workshop activities, testimonials, reviews, achievements, and
                success stories of students for educational, promotional, and
                marketing purposes.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                If a student or parent does not wish such material to be used, a
                written request may be submitted to Genixotech and we will make
                reasonable efforts to honor the request.
              </p>
            </section>

            {/* Section 8 */}
            <section id="third-party" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                8. Third-Party Websites
              </h2>
              <p className="text-gray-600">
                Our website may contain links to third-party websites and
                external resources. Genixotech is not responsible for the
                privacy practices, policies, or content of such external
                websites. Users are encouraged to review their policies
                explicitly.
              </p>
            </section>

            {/* Section 9 */}
            <section id="retention" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                9. Data Retention
              </h2>
              <p className="text-gray-600 mb-2">
                We retain personal information only for as long as necessary to:
              </p>
              <div className="text-sm text-gray-600 space-y-1 pl-4 border-l-2 border-gray-200">
                <div>
                  • Provide educational services &amp; maintain academic
                  records.
                </div>
                <div>
                  • Meet legal obligations, resolve disputes, and enforce
                  agreements.
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2 italic">
                After the retention period expires, information may be securely
                deleted or anonymized.
              </p>
            </section>

            {/* Section 10 */}
            <section id="rights" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                10. Your Rights
              </h2>
              <p className="text-gray-600 mb-3">
                You may request to access, correct, update, or delete your
                personal data (where legally permitted), or withdraw consent for
                promotional communications.
              </p>
              <p className="text-sm text-gray-500">
                Requests can be submitted through our contact details provided
                below.
              </p>
            </section>

            {/* Section 11 */}
            <section id="children" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                11. Children’s Privacy
              </h2>
              <p className="text-gray-600">
                Certain programs offered by Genixotech are designed for school
                students and minors. Where required, registration and consent
                may be obtained from parents or guardians before collecting
                information from children.
              </p>
            </section>

            {/* Section 12 */}
            <section id="changes" className="scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                12. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-600">
                Genixotech reserves the right to update or modify this Privacy
                Policy at any time without prior notice. Any updates will be
                published on this page along with the revised effective date.
                Continued use constitutes acceptance.
              </p>
            </section>

            {/* Section 13 */}
            <section
              id="contact"
              className="scroll-mt-6 bg-slate-900 text-white p-6 sm:p-8 rounded-xl shadow-inner"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-slate-700 pb-2 mb-4">
                13. Contact Us
              </h2>
              <p className="text-slate-300 text-sm mb-6">
                If you have questions regarding this Privacy Policy or your
                personal information, please contact us:
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
                      className="text-blue-400 hover:underline"
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
                      className="text-blue-400 hover:underline"
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
                    201- White Lotus Plaza,
                    <br />
                    1 Avantika Nagar, Sangamm Nagar,
                    <br />
                    Indore, Madhya Pradesh, 452006 India
                  </p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-gray-100 text-center py-6 text-xs text-gray-500 border-t border-gray-200">
        Thank you for trusting Genixotech for your learning and career growth
        journey.
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
