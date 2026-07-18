import React from "react";
import { pythonContent } from "./pythonContent";
import Faqs from "../components/Faqs";
import { pythonFaqs } from "../assets/pythonFaqs";

const PythonProg = () => {
  return (
    <>
      <div className="relative w-full h-150">
        <img
          src="/images/0_COLH-_jl52dK8c0c.jpg"
          alt=""
          className="w-full h-150 object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center flex-col text-white justify-center">
          <h1 className="text-white lg:text-7xl text-4xl font-bold pb-2">
            Python Tranning
          </h1>
          <h1 className="lg:text-2xl font-bold">
            Think Python, Build Anything
          </h1>
          <h1 className="lg:w-160 w-80 text-center mt-5 font-bold">
            Upskill with our Python Certification Course in Indore, designed to
            give you hands-on development experience and prepare you for a
            successful career as a professional Python programmer. Our Python
            training focuses on real-world projects, practical coding, and
            industry-relevant skills.
          </h1>
        </div>
      </div>

      <div className="">
        <h1 className="text-center lg:text-4xl text-3xl mt-30 text-[#7696fd] font-bold">
          Program Modules
        </h1>

        <div className="flex justify-center">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-[85%] my-15 mb-25 gap-4">
            {pythonContent.map((item) => (
              <div className="flex gap-2 bg-[#7696fd] lg:p-5 p-4 text-white lg:text-xl text-[1.2rem] rounded-xl">
                <h1>{item.id}.</h1>
                <h1>{item.topic}</h1>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Faqs questionAndAnswer={pythonFaqs} />
        </div>
      </div>
    </>
  );
};

export default PythonProg;
