import {
  FaEnvelope,
  FaPaperPlane,
  FaUsers,
  FaGraduationCap,
  FaHandshake,
} from "react-icons/fa6";

const CareersPage = () => {
  return (
    <div className="bg-white py-16">
      <div className="w-[85%] mx-auto">
        {/* Header Section */}
        <header className="mb-20 text-center">
          <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">
            Join Our Team
          </span>
          <h1 className="text-4xl md:text-5xl font-black mt-2 text-[#1f272b]">
            We're Always Looking for Talent
          </h1>
          <p className="mt-6 text-gray-600 max-w-xl mx-auto text-lg">
            While we don't have active openings right now, we are always eager
            to meet exceptional engineers, researchers, and tech enthusiasts.
          </p>
        </header>

        {/* Culture / Values (Kept these to show the vibe) */}
        <section className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <FaHandshake />,
              title: "Collaborative Spirit",
              desc: "We thrive on open communication and cross-functional team brainstorming.",
            },
            {
              icon: <FaGraduationCap />,
              title: "Continuous Learning",
              desc: "Paid certification tracks and regular R&D workshops for all employees.",
            },
            {
              icon: <FaUsers />,
              title: "Impact Driven",
              desc: "Your contributions directly shape the technology education of the next generation.",
            },
          ].map((v, i) => (
            <div
              key={i}
              className="p-8 bg-gray-50 rounded-2xl border border-gray-100"
            >
              <div className="text-2xl text-blue-600 mb-4">{v.icon}</div>
              <h3 className="font-bold text-lg mb-2">{v.title}</h3>
              <p className="text-sm text-gray-600">{v.desc}</p>
            </div>
          ))}
        </section>

        {/* Talent Pool Section (Replacing the Jobs List) */}
        <section className="bg-[#1f272b] p-10 mb-10 md:p-16 rounded-3xl text-white text-center">
          <div className="max-w-2xl mx-auto">
            {/* <div className="text-blue-500 text-4xl mb-6 flex justify-center">
              <FaPaperPlane />
            </div> */}
            <h2 className="text-3xl font-black mb-4">Join Our Talent Pool</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Interested in working with us in the future? We'd love to keep
              your profile on file. Send us your CV and a brief note about what
              makes you a great fit for Genixotech.
            </p>
            <a
              href="mailto:info@genixotech.com"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg"
            >
              <FaEnvelope /> SEND YOUR PROFILE
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CareersPage;
