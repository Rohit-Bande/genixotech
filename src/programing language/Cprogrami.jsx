import React from "react";
import Faqs from "../components/Faqs";
import { Code2, Cpu, Rocket, Settings } from "lucide-react";
import { cFaqs } from "../assets/cFaqs";

const cCourse = [
  {
    id: 1,
    module: "Module Exam 1",
    topics: [
      "Introduction of C Programming",
      "Fundamental of C",
      "Operators",
      "Conditional Statement",
    ],
  },
  {
    id: 2,
    module: "Module Exam 2",
    topics: [
      "Loops",
      "Pointer",
      "Function",
      "Array",
      "String",
      "Storage Classes",
    ],
  },
  {
    id: 3,
    module: "Module Exam 3",
    topics: [
      "2D Array, 3D Array",
      "Array of Pointer",
      "Pointer to an Array",
      "Double Pointer",
      "Function Pointer",
      "Dangling Pointer",
      "Null Pointer",
      "Dynamic Memory Allocation",
      "Command Line Argument",
      "Structure",
      "Union & Enum",
      "Bit Operation",
      "Pragma Directives, Macro",
      "File Handling Concept",
      "Make Utility and Multiple File Programming",
    ],
  },
];

const whyLearnCData = [
  {
    id: 1,
    title: "Core Foundation",
    subtitle: "The Foundation of Modern Coding",
    description:
      "The syntax and core logic of major languages like C++, Java, JavaScript, and Python are heavily derived from C. Mastering C makes learning any other language incredibly easy.",
    icon: Code2,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: 2,
    title: "Hardware & Memory",
    subtitle: "Master the Hardware",
    description:
      "C bridges the gap between software and hardware, teaching you how a computer's CPU and RAM actually operate through direct memory management and pointers.",
    icon: Cpu,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    id: 3,
    title: "Maximum Performance",
    subtitle: "Blazing Fast Speed",
    description:
      "Because C compiles directly into machine code with minimal runtime overhead, it remains one of the fastest languages powering modern gaming engines and high-speed systems.",
    icon: Rocket,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    id: 4,
    title: "Industry Standard",
    subtitle: "Powering Operating Systems & IoT",
    description:
      "From major operating systems like Linux, Windows, and Android to advanced embedded electronics and smart IoT devices, C remains irreplaceable in core engineering.",
    icon: Settings,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
];

const Cprogrami = () => {
  return (
    <>
      <div>
        <div className="relative w-full h-100 object-contain">
          <img src="/images/AI-image.jpg" alt="" className="w-full h-100" />
          <div className="absolute inset-0 bg-black/50 flex flex-col  items-center justify-center">
            <h1 className="text-white text-6xl font-semibold">C Training</h1>
            <p className="text-white font-bold mt-3">
              The Language Every Programmer Needs
            </p>
          </div>
        </div>

        <div className="flex mx-5 lg:px-20 lg:mx-10 flex-col items-center mt-10 mb-15">
          <h1 className="text-5xl text-center p-5 mb-5">
            Master C Programming
          </h1>
          <p className="text-[1.1rem] font-semibold text-gray-600 text-center">
            Welcome to the ultimate guide to C Programming. Often called the
            "mother of all programming languages," C is the backbone of
            operating systems, embedded systems, and high-performance
            applications. Whether you want to understand how computers work
            under the hood or build a rock-solid foundation for software
            engineering, learning C is your perfect first step.
          </p>
        </div>

        <div className="flex flex-col items-center bg-blue-50 py-10">
          <h1 className="text-5xl mb-10">Program Module</h1>
          <div className="grid w-[80%] gap-5 p-5">
            {cCourse.map((item) => (
              <div>
                <div className="flex gap-2 text-4xl mb-4">
                  <h1>{item.id}.</h1>
                  <h2>{item.module}</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-7">
                  {item.topics.map((val) => (
                    <p className="bg-blue-500 font-semibold text-[1rem] p-4 text-white rounded-xl">
                      {val}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center py-10 my-10">
          <h1 className="text-5xl text-center mb-15">
            Why Learn C Programming?
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-5 w-[80%]">
            {whyLearnCData.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  className="group flex items-center bg-blue-100 shadow-xl rounded-xl hover:scale-105 transition-transform duration-300 flex-col p-5"
                >
                  <div
                    className={`w-20 h-20 rounded-full mb-4 flex justify-center items-center  ${item.bgColor} ${item.color} transition-transform duration-1000 group-hover:rotate-[360deg]`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex gap-1 flex-col">
                    <h1 className="font-semibold text-center text-xl text-gray-700">
                      {item.title}
                    </h1>
                    <p className="mt-5">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <Faqs questionAndAnswer={cFaqs} />
        </div>
      </div>
    </>
  );
};

export default Cprogrami;
