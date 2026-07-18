import { useEffect, useState } from "react";
import EnquiryForm from "../components/EnquiryForm";
import SliderComp from "../components/SliderComp";

// Icons used for the design layout (Lucide React style fallback/SVG)
// Change FaCpu to FaMicrochip
import {
  FaRocket,
  FaMicrochip,
  FaCloud,
  FaShieldHalved,
  FaAward,
  FaUsersGear,
  FaLightbulb,
  FaChartLine,
  FaQuoteLeft,
  FaCircleCheck,
} from "react-icons/fa6";

const Home = () => {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const text = "WELCOME TO GENIXOTECH WORLD";

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const speed = isDeleting ? 80 : 120;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(text.substring(0, index + 1));
        setIndex(index + 1);

        if (index + 1 === text.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setDisplayText(text.substring(0, index - 1));
        setIndex(index - 1);

        if (index === 0) {
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [index, isDeleting]);

  return (
    <>
      {/* --- HERO VIDEO HERO SECTION --- */}
      <div className="w-full relative top-0 left-0 flex justify-center bg-amber-200">
        <video
          src="/images/Electronic Pulse Futuristic Circuit Board Background.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover relative bg-white/50 min-h-screen min-w-full"
        ></video>

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute top-[30%] lg:top-[30%] transform -translate-y-1/4 w-[83%] text-white flex gap-8 flex-col p-4 sm:top-1/3 sm:-translate-y-1/3">
          <p className="font-bold">HELLO STUDENTS</p>
          <p className="text-3xl sm:text-5xl font-extrabold tracking-wider text-[#839ffc] bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
          <p className="w-full text-base sm:w-150">
            Electronics engineering education helps students understand
            circuits, develop practical skills, explore innovation, and prepare
            for careers in modern technology-driven industries.
          </p>
          <div>
            <button
              onClick={() => setShowEnquiryForm(!showEnquiryForm)}
              className="bg-white px-5 py-2 rounded-4xl text-[.8rem] text-[#1D52FF] font-bold cursor-pointer mt-3 
               hover:bg-[#1D52FF] hover:text-white transition-colors duration-300 ease-in-out"
            >
              JOIN US NOW!
            </button>
          </div>
        </div>
      </div>

      {showEnquiryForm && (
        <EnquiryForm onClose={() => setShowEnquiryForm(false)} />
      )}

      <div className="relative -mt-[20vh] sm:-mt-[25vh] lg:-mt-35 mb-10">
        <SliderComp />
      </div>

      <div className="w-full flex flex-col items-center bg-gray-50 text-gray-800 font-sans overflow-x-hidden">
        <section className="w-[83%] lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-b border-gray-200">
          <div>
            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase block mb-2">
              Established Legacy
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#1f272b] leading-tight">
              12+ Years as a Trusted Digital Transformation Partner
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed text-base">
              For more than two decades, Genixotech has steered enterprises and
              academic hubs through volatile technology life cycles. We
              transition workflows into cohesive automated environments using
              reliable industry standards, enabling scalable continuous growth.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <FaCircleCheck className="text-blue-600" /> 500+ Students
              </div>
              <div className="flex items-center gap-2">
                <FaCircleCheck className="text-blue-600" /> 98% Retention Rate
              </div>
              <div className="flex items-center gap-2">
                <FaCircleCheck className="text-blue-600" /> ISO Certified
                Workflows
              </div>
              <div className="flex items-center gap-2">
                <FaCircleCheck className="text-blue-600" /> 24/7 Production
                Support
              </div>
            </div>
          </div>
          <div className="bg-[#1f272b] p-8 rounded-2xl text-white relative shadow-xl min-h-[250px] flex flex-col justify-center">
            <div className="absolute top-4 right-4 text-gray-700 font-bold text-7xl select-none opacity-40">
              12+
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#839ffc]">
              Accelerating Modern Innovation
            </h3>
            <p className="text-sm text-gray-400">
              We close the structural operational gaps by engineering highly
              responsive, micro-targeted automation ecosystems across global
              infrastructures.
            </p>
          </div>
        </section>

        {/* --- 2. SERVICES SECTION --- */}
        <section className="w-[83%] py-16 border-b border-gray-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">
              Our Portfolio
            </span>
            <h2 className="text-3xl font-black text-[#1f272b] mt-1">
              Solutions We Provide to Our Valued Customers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-lg text-blue-600 flex items-center justify-center mb-4 text-xl">
                <FaRocket />
              </div>
              <h3 className="font-bold text-black text-lg mb-2">
                Automated Optimization
              </h3>
              <p className="text-sm text-gray-600">
                Refining manual workflow operations into high-velocity digital
                execution systems.
              </p>
            </div>
            {/* Service 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-50 rounded-lg text-amber-600 flex items-center justify-center mb-4 text-xl">
                <FaMicrochip />
              </div>
              <h3 className="font-bold text-black text-lg mb-2">
                Embedded Systems Lab
              </h3>
              <p className="text-sm text-gray-600">
                Provisioning direct hardware setups, customized edge boards, and
                micro-controller tracks.
              </p>
            </div>
            {/* Service 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-50 rounded-lg text-purple-600 flex items-center justify-center mb-4 text-xl">
                <FaCloud />
              </div>
              <h3 className="font-bold text-black text-lg mb-2">
                Cloud Infrastructure
              </h3>
              <p className="text-sm text-gray-600">
                Deploying elastic microservices frameworks with zero operational
                downtime targets.
              </p>
            </div>
            {/* Service 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-50 rounded-lg text-emerald-600 flex items-center justify-center mb-4 text-xl">
                <FaShieldHalved />
              </div>
              <h3 className="font-bold text-black text-lg mb-2">
                Enterprise Defense
              </h3>
              <p className="text-sm text-gray-600">
                Integrating strict compliance monitoring protocols to shield
                crucial data payloads.
              </p>
            </div>
          </div>
        </section>

        {/* --- 3. WHY CHOOSE US --- */}
        <section className="w-[83%] py-16 border-b border-gray-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">
              Core Strengths
            </span>
            <h2 className="text-3xl font-black text-[#1f272b] mt-1">
              Driven by Technology and Innovation
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600 text-lg mt-1">
                  <FaAward />
                </div>
                <div>
                  <h4 className="font-bold text-black text-base">
                    Verified Field Experts
                  </h4>
                  <p className="text-sm text-gray-600 mt-0.5">
                    Engineered solutions steered exclusively by active industry
                    researchers and automation veterans.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-purple-100 rounded-lg text-purple-600 text-lg mt-1">
                  <FaUsersGear />
                </div>
                <div>
                  <h4 className="font-bold text-black text-base">
                    Agile Co-Development
                  </h4>
                  <p className="text-sm text-gray-600 mt-0.5">
                    We construct architecture changes collaboratively alongside
                    your internal operational units.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-emerald-100 rounded-lg text-emerald-600 text-lg mt-1">
                  <FaLightbulb />
                </div>
                <div>
                  <h4 className="font-bold text-black text-base">
                    NEP & STEM Sync Avenues
                  </h4>
                  <p className="text-sm text-gray-600 mt-0.5">
                    Educational modules engineered explicitly in alignment with
                    standard modern educational guidelines.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-3 text-black flex items-center gap-2">
                <FaChartLine className="text-blue-600" /> Continuous Pipeline
                Calibration
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We ensure that your infrastructure is never rendered obsolete.
                By monitoring framework drifts in real-time, our developers
                patch and update systems systematically without impacting target
                key performance indicators.
              </p>
            </div>
          </div>
        </section>

        {/* --- 4. SUCCESS STORIES (CASE STUDIES) --- */}
        <section className="w-[83%] py-16 border-b border-gray-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">
              Proven Track Records
            </span>
            <h2 className="text-3xl font-black text-[#1f272b] mt-1">
              Our Success Stories
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-4 bg-blue-600 w-full"></div>
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                  EdTech Infrastructure
                </span>
                <h3 className="font-bold text-black text-xl mt-2 mb-3">
                  Scaling STEM Hubs Across 40+ Campuses
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We engineered and delivered modular robotics testing
                  configurations across forty regional labs simultaneously,
                  establishing automated learning metrics tracking software.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-4 bg-purple-600 w-full"></div>
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2 py-0.5 rounded">
                  Enterprise Process
                </span>
                <h3 className="font-bold text-black text-xl mt-2 mb-3">
                  Legacy Logistics Migration Framework
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Transitioned a complex inventory architecture handling
                  millions of real-time pipeline telemetry streams into an
                  elastic cloud system with 0% configuration loss.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 5. TESTIMONIALS SECTION --- */}
        {/* <section className="w-[83%] py-16 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">
              Feedback Logs
            </span>
            <h2 className="text-3xl font-black text-[#1f272b] mt-1">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100 relative shadow-sm">
              <FaQuoteLeft className="text-gray-200 text-3xl absolute top-4 right-4" />
              <p className="text-sm text-gray-600 italic leading-relaxed pt-2">
                "Genixotech’s technical training models drastically modernized
                how our faculty approaches laboratory tasks. The physical
                component kits are premium quality."
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h5 className="font-bold text-black text-sm">
                  Dr. A. K. Sharma
                </h5>
                <p className="text-xs text-gray-400">
                  Dean of Engineering Academy
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 relative shadow-sm">
              <FaQuoteLeft className="text-gray-200 text-3xl absolute top-4 right-4" />
              <p className="text-sm text-gray-600 italic leading-relaxed pt-2">
                "Their digital framework migration expertise saved us months of
                internal dev structural testing. Communication loops were highly
                transparent throughout."
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h5 className="font-bold text-black text-sm">Rajesh V.</h5>
                <p className="text-xs text-gray-400">
                  Chief Technology Officer, LogiSystems
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 relative shadow-sm">
              <FaQuoteLeft className="text-gray-200 text-3xl absolute top-4 right-4" />
              <p className="text-sm text-gray-600 italic leading-relaxed pt-2">
                "The summer robotics bootcamp sequence triggered incredible
                conversions during our institutional open admissions cycle.
                Highly recommended!"
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h5 className="font-bold text-black text-sm">Meera Deshmukh</h5>
                <p className="text-xs text-gray-400">
                  Managing Principal, High-Tech Global School
                </p>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
};

export default Home;
