import React from "react";
import Faqs from "../components/Faqs";
import { questionsAndAnswers } from "../assets/faqsQesAns";

const JavascriptProg = () => {
  return (
    <>
      <div>
        <div className="relative h-150">
          <img
            src="/images/360_F_549658419_eROKNGDj7XSZ3Px1zp0qvbJfsDsZx4c3.jpg"
            alt=""
            className="w-full h-150 object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-white text-7xl font-bold">
              Javascript Tranning
            </h1>
          </div>
        </div>

        <div>
          <Faqs questionAndAnswer={questionsAndAnswers} />
        </div>
      </div>
    </>
  );
};

export default JavascriptProg;
