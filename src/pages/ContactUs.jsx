import React, { useEffect, useState } from "react";
import EnquiryForm from "../components/EnquiryForm";
import { Atom, OrbitProgress } from "react-loading-indicators";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const ContactUs = () => {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  const [showModal, setShowModal] = useState(true);
  const [email, setEmail] = useState("");

  const [showFeedbackBtn, setShowFeedbackBtn] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const [btnFade, setBtnFade] = useState(false);

  const [loading, setLoading] = useState(false);

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzNTbYHL7WAFZUOtXLghEkNUAcajTcqqQwQzV6IQx-iUN6NboqKMEbkJXYAVgr3y7Fn/exec";

  const handleEnquiry = () => {
    setShowEnquiryForm(true);
  };

  const verifyStudent = async (userEmail) => {
    try {
      setLoading(true);
      const res = await fetch(
        `${SCRIPT_URL}?email=${encodeURIComponent(userEmail)}`,
      );

      const data = await res.json();

      if (!data.found) {
        setShowFeedbackBtn(false);
        setStatusMessage("Email not registered.");
        setLoading(false);
        return;
      }

      if (data.demoStatus === "Completed" && data.feedbackSubmitted !== "Yes") {
        setShowFeedbackBtn(true);
        setStatusMessage(
          "Demo completed successfully. You can submit feedback.",
        );
      } else if (data.feedbackSubmitted === "Yes") {
        setShowFeedbackBtn(false);
        setStatusMessage("Feedback already submitted.");
      } else {
        setShowFeedbackBtn(false);
        setStatusMessage("Your demo classes are not completed yet.");
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setShowFeedbackBtn(false);
      setLoading(false);
    }
  };

  const handleVerifyCahnge = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!value.trim()) {
      setShowFeedbackBtn(false);
      setStatusMessage("");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(value)) {
      verifyStudent(value);
    } else {
      setShowFeedbackBtn(false);
      setStatusMessage("");
    }
  };

  useEffect(() => {
    setBtnFade(btnFade);
  }, []);

  return (
    <>
      {showEnquiryForm && <EnquiryForm />}

      <div className="flex flex-col items-center">
        {/* Register Button */}
        <div className="flex justify-center">
          <button
            onClick={handleEnquiry}
            className="zoom-btn cursor-pointer bg-gradient-to-r from-purple-400 to-blue-400 text-2xl flex justify-center items-center mt-18 rounded-full text-white h-15 w-60"
          >
            Register Now!
          </button>
        </div>

        <div className="flex flex-col items-center gap-5 lg:flex lg:flex-row justify-around mt-15 w-full bg-blue-100 py-10">
          <div className="flex gap-4 items-center">
            <input
              type="text"
              className="w-80 px-4 py-3 lg:py-[0.5rem] bg-white shadow-md rounded-xl outline-none text-center"
              placeholder="Enter your email to share feedback"
              value={email}
              onChange={(e) => handleVerifyCahnge(e)}
            />
            {loading && (
              <div>
                {loading && (
                  <div className="flex items-center justify-center w-10 h-10 overflow-hidden">
                    <div className="scale-225">
                      <img
                        src="/gifs/loader.gif"
                        alt="Loading..."
                        className="w-20 h-20 pt-1 object-contain"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <button
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSeAIhbezRnrEBAtLLG6PsxFmLhcWSjrH2eV2hUP-rZtPXnbyg/viewform?usp=sharing&ouid=112208435741411794450",
                "_blank",
              )
            }
            className={`px-5 py-2 rounded-full outline-none text-white ${
              showFeedbackBtn
                ? "bg-green-600 cursor-pointer"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!showFeedbackBtn}
          >
            Give Feedback
          </button>
        </div>

        <div className="mt-10 flex justify-center mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-25 w-[80%]">
            <div>
              <img src="/images/web.jpg.jpeg" alt="contactImag" />
            </div>

            <div className="flex flex-col">
              <h1 className="flex text-2xl mb-2 gap-4">
                <div className="flex items-center pl-3 justify-center w-10 h-10">
                  <div className="lg:scale-240 scale-400">
                    <img
                      src="/gifs/location.gif"
                      alt="Loading..."
                      className="w-25 h-20 pt-1 object-contain"
                    />
                  </div>
                </div>
                <div>
                  201, White Lotus Plaza, 1 Avantika Nagar, Near Sangam Nagar,
                  Indore, 452006
                </div>
              </h1>

              <div className="flex">
                <div className="flex items-center justify-center w-10 h-10 ">
                  <div className="scale-80">
                    <img
                      src="/gifs/mail.gif"
                      alt="Loading..."
                      className="w-25 h-20 pt-1 object-contain"
                    />
                  </div>
                </div>
                <a
                  href="mailto:info@genixotech.com"
                  className="text-xl flex items-center gap-4"
                >
                  <span className="ml-1">info@genixotech.com</span>
                </a>
              </div>

              <div className="flex">
                <div className="flex items-center justify-center w-10 h-10 ">
                  <div className="scale-150">
                    <img
                      src="/gifs/phone.gif"
                      alt="Loading..."
                      className="w-25 h-20 pt-1 object-contain"
                    />
                  </div>
                </div>
                <a
                  href="tel:+919171805055"
                  className="text-xl flex items-center gap-3"
                >
                  <span>+91 91718-05055</span>
                </a>
              </div>

              <div className="mt-5 ml-3">
                <a
                  className="bg-green-600 text-white rounded-full px-5 py-2"
                  href="https://wa.me/919171805055"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="map-container flex justify-center pb-30 mb-30">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.673213130609!2d75.83538927383586!3d22.74038452680273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd7a2eeec2c7%3A0x9c07dc13bd214931!2sWhite%20Lotus%20Plaza!5e0!3m2!1sen!2sin!4v1782557498312!5m2!1sen!2sin"
            width="750"
            height="300"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
