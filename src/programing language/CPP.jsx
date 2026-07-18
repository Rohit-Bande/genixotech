import React from "react";
import Faqs from "../components/Faqs";
import { cppFaqs } from "../assets/cppFaqs";

const CPP = () => {
  return (
    <>
      <div>
        <div className="relative w-full h-150">
          <img
            src="/images/abstract-digital-artwork-shows-blue-binary-code-streams-flowing-across-dark-background-bokeh-lights-creating-modern-398571414.webp"
            alt=""
            className="w-full h-150 object-cover"
          />
          <div className="absolute bg-black/50 inset-0 flex items-center justify-center">
            <h1 className="text-white text-7xl font-bold">C++ Training</h1>
          </div>
        </div>

        <div>
          <Faqs questionAndAnswer={cppFaqs} />
        </div>
      </div>
    </>
  );
};

export default CPP;
