import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative w-full bg-[#1f272b] lg:h-110 h-281 shadow-[0_-6px_6px_-2px_rgba(0,0,0,0.15)] flex items-center flex-col">
        <div className="absolute lg:bottom-99 bottom-270 rounded-2xl w-[80%] lg:px-10 px-5 lg:py-1 py-2 bg-gradient-to-r from-purple-400 to-blue-400 grid grid-cols-2 mt-3 border-b-2 border-gray-400 items-center">
          <img
            src="/images/bg logo.png"
            alt="bg logo.png"
            className="lg:w-23 pt-3 pb-1 w-20 cursor-pointer"
            onClick={() => navigate("/home")}
          />
          <div className="flex flex-col items-end text-white">
            <h1 className="lg:text-[1rem] text-[.9rem] font-bold">
              +91 9171805055
            </h1>
            <h1 className="lg:text-[1rem] text-[.9rem] font-bold">
              info@genixotech.com
            </h1>
          </div>
        </div>

        <div className="w-[80%] px-10 py-1 grid pb-10 text-white gap-2 lg:mt-1 mt-5 border-b-2 border-gray-400">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:mt-10 mt-8 lg:gap-15 gap-10 pt-6">
            <div className="flex flex-col gap-1">
              <h1 className="text-left text-xl border-b-1 pb-2">Contact Us</h1>
              <div className="mt-3 leading-7">
                <p className="flex items-center text-[.8rem] gap-2">
                  <FaPhone />
                  <p>+91 9171805055</p>
                </p>
                <p className="flex items-center gap-2">
                  <IoIosMail />
                  info@genixotech.com
                </p>
                <h1>
                  201, White Lotus Plaza, 1 Avantika Nagar, Near Sangam Nagar,
                  Indore, Madhya Pradesh - 452006
                </h1>
              </div>
            </div>

            <div className="text-[.9rem]">
              <h1 className="text-xl mb-1 border-b-1 pb-2">Company</h1>
              <ul className="mt-4 leading-7 ml-3 list-disc sm:list-none cursor-pointer">
                <li
                  className="hover:text-[#7696fd]"
                  onClick={() => navigate("/about")}
                >
                  About Us
                </li>
                <li
                  className="hover:text-[#7696fd]"
                  onClick={() => navigate("/contactUs")}
                >
                  Contact Us
                </li>
                <li
                  className="hover:text-[#7696fd]"
                  onClick={() => navigate("/coming-soon")}
                >
                  Career
                </li>
                <li
                  className="hover:text-[#7696fd]"
                  onClick={() => navigate("/coming-soon")}
                >
                  Blog
                </li>
              </ul>
            </div>

            <div className="text-[.9rem]">
              <h1 className="text-xl mb-1 border-b-1 pb-2">Programs</h1>
              <ul className="mt-4 leading-7 ml-3 list-disc sm:list-none cursor-pointer">
                <li className="hover:text-[#7696fd]">Course</li>
                <li className="hover:text-[#7696fd]">Internship</li>
                <li className="hover:text-[#7696fd]">Workshops</li>
                <li className="hover:text-[#7696fd]">Corporate Training</li>
              </ul>
            </div>

            <div className="text-[.9rem]">
              <h1 className="text-xl mb-1 border-b-1 pb-2">Legal</h1>
              <ul className="mt-4 leading-7 ml-3 list-disc sm:list-none cursor-pointer">
                <li
                  className="hover:text-[#7696fd]"
                  onClick={() => navigate("/privacy")}
                >
                  Privacy Policy
                </li>
                <li
                  className="hover:text-[#7696fd]"
                  onClick={() => navigate("/term")}
                >
                  Terms & conditions
                </li>
                <li
                  className="hover:text-[#7696fd]"
                  onClick={() => navigate("/refund")}
                >
                  Refund & Cancellation Policy
                </li>
                <li className="hover:text-[#7696fd]">
                  Shipping & Delivery Policy
                </li>
                <li className="hover:text-[#7696fd]">Disclaimer</li>
                <li className="hover:text-[#7696fd]">Cookie Policy</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 items-center w-[80%] px-10 mt-5 lg:mt-2">
          <h1 className="text-white text-center">© Powered By Genixotech</h1>

          <div className="flex gap-4 text-[1.5rem] text-white justify-center">
            <a href="https://www.facebook.com/genixotech/" target="_blank">
              <TiSocialFacebook className="hover:text-[#7696fd] cursor-pointer" />
            </a>
            {/* <TiSocialTwitter className="hover:text-[#7696fd] cursor-pointer" />
                          <TiSocialYoutube className="hover:text-[#7696fd] cursor-pointer" /> */}
            <a
              href="https://www.linkedin.com/company/genixotech"
              target="_blank"
            >
              <TiSocialLinkedin className="hover:text-[#7696fd] cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/genixotech/" target="_blank">
              <AiFillInstagram className="hover:text-[#7696fd] cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
