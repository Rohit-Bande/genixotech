import React, { useState } from "react";
import { questionsAndAnswers } from "../assets/faqsQesAns";
import { IoIosArrowDown } from "react-icons/io";

const Faqs = ({ questionAndAnswer }) => {
  const [activeId, setActiveId] = useState(null);

  const handleAnswer = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div
      id="faq-section"
      className="my-20 flex justify-center w-full scroll-mt-30"
    >
      <div className="w-[80%] flex flex-col items-center">
        <h1 className="text-center text-5xl mb-10 font-bold text-[#7696fd]">
          FAQs
        </h1>

        <div className="flex flex-col gap-5 w-full lg:w-[80%]">
          {questionAndAnswer?.map((item) => {
            const isOpen = activeId === item.id;

            return (
              <div
                key={item.id}
                className="bg-[#7696fd] p-6 rounded-2xl text-white"
              >
                <button
                  onClick={() => handleAnswer(item.id)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <span className="font-semibold">{item.question}</span>
                  <IoIosArrowDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-3"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
