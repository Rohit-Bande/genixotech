import React, { useState } from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { MdHome } from "react-icons/md";
import { LiaLanguageSolid } from "react-icons/lia";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { BsMicrosoft } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import DropdownComp from "../components/DropdownComp";
import { Link, useNavigate } from "react-router-dom";
import EnquiryForm from "../components/EnquiryForm";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import TraningDrop from "../components/TraningDrop";
import { AiFillInstagram } from "react-icons/ai";
import { FaInfoCircle } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { TbFidgetSpinner } from "react-icons/tb";
import { FaHandsHelping } from "react-icons/fa";
import WorkshopDrop from "../components/WorkshopDrop";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const [trainingDropdown, setTrainingDropdown] = useState(false);
  const [showEnquiryForm, setShowEnquiryForm] = useState();
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const [mobileTranOpen, setMobileTranOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [workshop, setWorkshop] = useState(false);

  const navigate = useNavigate();

  const handleClose = () => {
    setClose(true);
    setTimeout(() => {
      setOpen(false);
      setClose(false);
      setIsVisible(false);
    }, 300);
  };

  const handleEnquiry = () => {
    setShowEnquiryForm(!showEnquiryForm);
  };

  const handleClosePopUp = () => {
    handleClose();
  };

  const openSidebar = () => {
    setIsVisible(true);
    setOpen(true);
  };

  return (
    <>
      <div className="h-10 w-full bg-[#1f272b] hidden lg:flex justify-center">
        <div className="h-10 w-[83%] flex items-center justify-between">
          <div className="flex text-white gap-7">
            <h1 className="flex items-center gap-3">
              <IoMail className="text-white" /> <h1>info@genixotech.com</h1>
            </h1>
            <h1 className="flex items-center gap-3">
              <FaPhone className="text-white" /> <h1>91718-05055</h1>
            </h1>
          </div>
          <div className="flex gap-4 text-amber-50 text-[1.2rem] items-center">
            <h1 className="text-[.8rem]">ISO Certified</h1>
            <a href="https://www.facebook.com/genixotech/" target="_blank">
              <TiSocialFacebook className="hover:text-[#7696fd] cursor-pointer" />
            </a>

            <a
              href="https://www.linkedin.com/company/genixotech"
              target="_blank"
            >
              <TiSocialLinkedin className="hover:text-[#7696fd] cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/genixotech/" target="_blank">
              <AiFillInstagram className="hover:text-[#7696fd] cursor-pointer text-[1rem]" />
            </a>
          </div>
        </div>
      </div>

      <div className="lg:h-23 w-full shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] bg-white backdrop-blur-sm sticky top-0 z-20 flex justify-center">
        <div className="w-[83%] flex items-center justify-between">
          <h1 className="text-4xl font-bold text-black">
            <img
              src="/images/bg logo.png"
              className="lg:w-25 w-25 mt-2 cursor-pointer"
              alt=""
              onClick={() => navigate("/home")}
            />
          </h1>
          <ul className="gap-8 text-[1rem] hidden lg:flex font-bold text-black">
            <li
              className="hover:text-[#1D52FF] cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className="hover:text-[#1D52FF] cursor-pointer"
              onClick={() => navigate("/about")}
            >
              About
            </li>
            <li
              className="hover:text-[#1D52FF] cursor-pointer flex items-center justify-center relative"
              onMouseOver={() => setLangDropdown(true)}
              onMouseLeave={() => setLangDropdown(false)}
            >
              <p>Courses</p>
              <IoIosArrowDown
                className={`transition-transform duration-300 ${
                  langDropdown ? "rotate-180" : ""
                }`}
              />
              {langDropdown && (
                <div className="absolute top-5 left-0">
                  <DropdownComp />
                </div>
              )}
            </li>
            <li
              className="hover:text-[#1D52FF] cursor-pointer flex items-center justify-center relative"
              onMouseOver={() => setTrainingDropdown(true)}
              onMouseLeave={() => setTrainingDropdown(false)}
            >
              <p>Training</p>
              <IoIosArrowDown
                className={`transition-transform duration-300 ${
                  trainingDropdown ? "rotate-180" : ""
                }`}
              />
              {trainingDropdown && (
                <div className="absolute top-5 left-0">
                  <TraningDrop />
                </div>
              )}
            </li>

            <li
              className="hover:text-[#1D52FF] cursor-pointer flex items-center justify-center relative"
              onMouseOver={() => setWorkshop(true)}
              onMouseLeave={() => setWorkshop(false)}
            >
              <p>Workshops</p>
              <IoIosArrowDown
                className={`transition-transform duration-300 ${
                  workshop ? "rotate-180" : ""
                }`}
              />
              {workshop && (
                <div className="absolute top-5 left-0">
                  <WorkshopDrop />
                </div>
              )}
            </li>

            <li
              className="hover:text-[#1D52FF] cursor-pointer"
              onClick={() => {
                navigate("/help");
                setTimeout(() => {
                  document
                    .getElementById("faq-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
            >
              Help
            </li>

            <li onClick={() => navigate("/contactUs")}>
              <span className="cursor-pointer bg-[length:200%_100%] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-left hover:bg-right transition-all duration-500 px-4 py-2 rounded text-white">
                Contact Us
              </span>
            </li>
          </ul>

          <div className="lg:hidden flex text-2xl">
            <GiHamburgerMenu
              className="text-black"
              onClick={() => {
                setOpen(!open);
                openSidebar();
              }}
            />
          </div>
        </div>
      </div>

      {showEnquiryForm && <EnquiryForm />}

      {open && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={handleClose}>
          {isVisible && (
            <div
              className={`fixed top-0 left-0 w-[80%] h-full bg-white z-50 shadow-xl  ${
                close ? "animate-slideRight" : "animate-slideLeft"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center py-5 pl-5  mt-3">
                <img
                  src="/images/bg logo.png"
                  alt=""
                  className="w-22 ml-2 mb-5 "
                />
              </div>

              {/* MOBILE SIDEBAR MENU CONTAINER */}
              <ul className="flex flex-col gap-5 text-[1.1rem] ml-10 w-[80%] text-black z-100 bg-white">
                <li
                  className="hover:text-[#c48e25] cursor-pointer flex items-center gap-3"
                  onClick={() => {
                    navigate("/");
                    handleClosePopUp();
                  }}
                >
                  <MdHome className="text-2xl text-blue-600" />
                  Home
                </li>
                <li
                  className="hover:text-[#c48e25] cursor-pointer flex items-center gap-3"
                  onClick={() => {
                    navigate("/about");
                    handleClosePopUp();
                  }}
                >
                  <FaInfoCircle className="text-xl text-blue-600" /> About
                </li>

                {/* Courses Dropdown */}
                <li className="flex flex-col gap-2">
                  <div
                    className="hover:text-[#c48e25] cursor-pointer flex items-center justify-between"
                    onClick={() => {
                      setMobileLangOpen(!mobileLangOpen);
                      setMobileTranOpen(false);
                      setMobileWorkOpen(false);

                      setTimeout(() => {
                        document
                          .querySelector("#mobile-courses")
                          ?.scrollIntoView({
                            behavior: "smooth",
                            block: "nearest",
                          });
                      }, 100);
                    }}
                  >
                    <span className="flex items-center gap-3">
                      <LiaLanguageSolid className="text-xl text-blue-600" />
                      Courses
                    </span>
                    <IoIosArrowDown
                      className={`transition-transform duration-300 ${
                        mobileLangOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {mobileLangOpen && (
                    <div
                      id="mobile-courses"
                      className="w-full pl-6 !static !block !h-auto !visible -mt-0"
                      style={{
                        position: "static",
                        display: "block",
                        height: "auto",
                      }}
                    >
                      <div className="mobile-override-wrapper [&>*]:!static [&>*]:!block [&>*]:!h-auto [&>*]:!mt-0 [&>*]:!top-0">
                        <DropdownComp handleClosePopUp={handleClosePopUp} />
                      </div>
                    </div>
                  )}
                </li>

                {/* Training Dropdown */}
                <li className="flex flex-col gap-2">
                  <div
                    className="hover:text-[#c48e25] cursor-pointer flex items-center justify-between"
                    onClick={() => {
                      setMobileTranOpen(!mobileTranOpen);
                      setMobileLangOpen(false);
                      setMobileWorkOpen(false);

                      setTimeout(() => {
                        document
                          .querySelector("#mobile-training")
                          ?.scrollIntoView({
                            behavior: "smooth",
                            block: "nearest",
                          });
                      }, 100);
                    }}
                  >
                    <span className="flex items-center gap-3">
                      <TbFidgetSpinner className="text-xl text-blue-600" />
                      Training
                    </span>
                    <IoIosArrowDown
                      className={`transition-transform duration-300 ${
                        mobileTranOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {mobileTranOpen && (
                    <div
                      id="mobile-training"
                      className="w-full pl-6 !static !block !h-auto !visible -mt-0"
                      style={{
                        position: "static",
                        display: "block",
                        height: "auto",
                      }}
                    >
                      <div className="mobile-override-wrapper [&>*]:!static [&>*]:!block [&>*]:!h-auto [&>*]:!mt-0 [&>*]:!top-0">
                        <TraningDrop handleClosePopUp={handleClosePopUp} />
                      </div>
                    </div>
                  )}
                </li>

                {/* Workshop Dropdown */}
                <li className="flex flex-col gap-2">
                  <div
                    className="hover:text-[#c48e25] cursor-pointer flex items-center justify-between"
                    onClick={() => {
                      setMobileWorkOpen(!mobileWorkOpen);
                      setMobileLangOpen(false);
                      setMobileTranOpen(false);

                      setTimeout(() => {
                        document
                          .querySelector("#mobile-workshop")
                          ?.scrollIntoView({
                            behavior: "smooth",
                            block: "nearest",
                          });
                      }, 100);
                    }}
                  >
                    <span className="flex items-center gap-3">
                      <TbFidgetSpinner className="text-xl text-blue-600" />
                      Workshop
                    </span>
                    <IoIosArrowDown
                      className={`transition-transform duration-300 ${
                        mobileWorkOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {mobileWorkOpen && (
                    <div
                      id="mobile-workshop"
                      className="w-full pl-6 !static !block !h-auto !visible -mt-0"
                      style={{
                        position: "static",
                        display: "block",
                        height: "auto",
                      }}
                    >
                      <div className="mobile-override-wrapper [&>*]:!static [&>*]:!block [&>*]:!h-auto [&>*]:!mt-0 [&>*]:!top-0">
                        <WorkshopDrop handleClosePopUp={handleClosePopUp} />
                      </div>
                    </div>
                  )}
                </li>

                <li
                  className="hover:text-[#c48e25] cursor-pointer flex items-center gap-3"
                  onClick={() => {
                    navigate("/contactUs");
                    handleClosePopUp();
                  }}
                >
                  <FaPhone className="text-xl text-blue-600" />
                  Contact Us
                </li>
                <li
                  className="hover:text-[#c48e25] cursor-pointer flex items-center gap-3"
                  onClick={() => {
                    navigate("/help");
                    handleClosePopUp();
                  }}
                >
                  <FaHandsHelping className="text-xl text-blue-600" />
                  Help
                </li>
              </ul>

              <RxCross2
                className="text-2xl absolute top-10 right-5"
                onClick={handleClose}
              />
              <div className="absolute bottom-3 flex justify-center w-full">
                <a href="https://www.facebook.com/genixotech/" target="_blank">
                  <img
                    src="/images/facebook-icon-free-png.webp"
                    alt="facebook"
                    className="w-10 h-10 mt-1 mr-1 cursor-pointer"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/genixotech"
                  target="_blank"
                >
                  <img
                    src="/images/Linkdin.png"
                    alt="facebook"
                    className="w-12 cursor-pointer"
                  />
                </a>
                <a href="https://www.instagram.com/genixotech/" target="_blank">
                  <img
                    src="/images/insta (2).png"
                    alt="facebook"
                    className="w-12 cursor-pointer"
                  />
                </a>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
