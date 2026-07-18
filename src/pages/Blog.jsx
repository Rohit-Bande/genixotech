import { useState } from "react";
import { FaClock, FaUser, FaArrowRight } from "react-icons/fa6";

const BlogPage = () => {
  // Dummy data - in a real app, fetch this from an API/CMS
  const posts = [
    {
      id: 1,
      title: "Modern PCB Design Standards for 2026",
      cat: "Engineering",
      date: "Jul 18, 2026",
      author: "Admin",
      excerpt:
        "Exploring the latest shifts in miniaturization and high-speed signal integrity.",
    },
    {
      id: 2,
      title: "Why Firmware is the Backbone of IoT",
      cat: "Technology",
      date: "Jul 15, 2026",
      author: "Admin",
      excerpt:
        "Understanding the bridge between hardware sensors and cloud automation.",
    },
    {
      id: 3,
      title: "Navigating the New STEM Curriculum",
      cat: "Education",
      date: "Jul 10, 2026",
      author: "Admin",
      excerpt:
        "How the latest NEP guidelines are changing technical lab practices.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="w-[85%] mx-auto">
        {/* Header */}
        <header className="mb-16">
          <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">
            Insight & Knowledge
          </span>
          <h1 className="text-4xl md:text-5xl font-black mt-2 text-[#1f272b]">
            Engineering Blog
          </h1>
        </header>

        {/* Featured Post (Main Highlight) */}
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm mb-16 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 h-64 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 italic">
            [Featured Image Placeholder]
          </div>
          <div className="w-full md:w-1/2">
            <span className="bg-blue-100 text-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase">
              Featured
            </span>
            <h2 className="text-3xl font-black mt-4 mb-4">
              The Future of Industrial Automation
            </h2>
            <p className="text-gray-600 mb-6">
              A deep dive into how we are integrating real-time telemetry into
              our core training modules for students.
            </p>
            <button className="flex items-center gap-2 font-bold text-blue-600 hover:text-blue-800 transition-colors">
              Read Article <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Recent Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-blue-600 font-bold text-xs uppercase mb-3">
                {post.cat}
              </div>
              <h3 className="font-bold text-xl mb-3 text-[#1f272b] leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 mb-6 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-gray-100 text-xs text-gray-400">
                <span className="flex items-center gap-2">
                  <FaUser /> {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <FaClock /> {post.date}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
