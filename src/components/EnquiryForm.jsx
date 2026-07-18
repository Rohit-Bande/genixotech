import React, { useEffect, useState } from "react";
import { courseList } from "../assets/course";
import { Mosaic } from "react-loading-indicators";
import toast from "react-hot-toast";

const EnquiryForm = () => {
  const course = courseList;
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [enquryData, setEnquryData] = useState({
    name: "",
    email: "",
    mobile: "",
    mode: "",
    course: "",
    enqury: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setEnquryData((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newError = {};
    const { name, email, mobile, mode, course, enqury } = enquryData;

    if (!name.trim()) {
      newError.name = "Name is required";
    } else if (name.trim().length < 3) {
      newError.name = "Name must be at least 3 characters";
    }

    if (!email.trim()) {
      newError.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newError.email = "Invalid email address";
      }
    }

    if (!mobile.trim()) {
      newError.mobile = "Mobile number is required";
    } else {
      const mobileReges = /^[6-9]\d{9}$/;
      if (!mobileReges.test(mobile)) {
        newError.mobile = "Enter 10-digit mobile number";
      }
    }

    if (!mode) {
      newError.mode = "Please select mode";
    }

    if (!course) {
      newError.course = "Please select course";
    }

    if (!enqury) {
      newError.enqury = "Please write your comment";
    }

    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const formBody = new URLSearchParams(enquryData).toString();

    try {
      setLoading(true);
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbz9fc0uVoP_Dk_oMnPDdiDEnPmb9HbOEUfn1KbziJVJjwJBUNYUT5laId_k8dbVsNGc/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formBody,
        },
      );

      const result = await res.json();

      if (!result.success) {
        toast.error(result.message);
        setLoading(false);
        return;
      }

      toast.success(result.message);

      setLoading(false);

      // toast.success("Form submitted successfully 🎉", {
      //   duration: 3000,
      //   style: {
      //     borderRadius: "10px",
      //     height: "60px",
      //     background: "green",
      //     color: "#fff",
      //   },
      // });

      setTimeout(() => {
        setOpen(false);
        setEnquryData({
          name: "",
          email: "",
          mobile: "",
          mode: "",
          course: "",
          enqury: "",
        });
      }, 100);
    } catch (error) {
      console.error("ERROR =>", error);
      setLoading(false);
      toast.error("Submission failed ❌");
    }
  };

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-[9999] h-screen flex justify-center items-center"
        onClick={() => setOpen(false)}
      >
        {loading ? (
          <Mosaic color="#3189cc" size="medium" text="" textColor="" />
        ) : (
          <div className="bg-white rounded-2xl lg:w-90 w-80 border-5 border-[#1D52FF]">
            <h1 className="text-center lg:text-3xl text-2xl font-bold mt-5">
              Registration Form
            </h1>
            <form
              action=""
              className="bg-white lg:px-6 px-3 py-5 rounded-2xl flex items-center gap-3 flex-col "
              onClick={(e) => e.stopPropagation()}
              onSubmit={handleSubmit}
            >
              <div className="flex gap-3 justify-between">
                {/* <label htmlFor="" className="">
                  Name
                </label> */}
                <input
                  type="text"
                  className="border px-3 py-1 rounded-[.4rem] lg:w-75 w-52 outline-none"
                  name="name"
                  value={enquryData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                />
              </div>
              {error.name && (
                <p className="text-red-500 text-center text-sm">{error.name}</p>
              )}
              <div className="flex gap-3 justify-between">
                {/* <label htmlFor="" className="">
                  Email
                </label> */}
                <input
                  type="text"
                  className="border px-3 py-1 rounded-[.4rem] lg:w-75 w-52 outline-none"
                  name="email"
                  value={enquryData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                />
              </div>
              {error.email && (
                <p className="text-red-500 text-center text-sm">
                  {error.email}
                </p>
              )}
              <div className="flex gap-3 justify-between">
                {/* <label htmlFor="" className="">
                  Mobile
                </label> */}
                <input
                  type="text"
                  className="border px-3 py-1 rounded-[.4rem] lg:w-75 w-52 outline-none"
                  name="mobile"
                  value={enquryData.mobile}
                  onChange={handleChange}
                  placeholder="Enter Your Number"
                />
              </div>
              {error.mobile && (
                <p className="text-red-500 text-center ml-15 text-sm">
                  {error.mobile}
                </p>
              )}
              <div className="flex gap-3 justify-between">
                {/* <label htmlFor="" className="">
                  Mode
                </label> */}
                <select
                  className="border lg:w-75 w-52 px-3 py-1 rounded-[.4rem]"
                  name="mode"
                  value={enquryData.mode}
                  onChange={handleChange}
                >
                  <option className="text-gray-300" value="" disabled>
                    Select mode
                  </option>
                  <option>Online</option>
                  <option>Offline</option>
                </select>
              </div>
              {error.mode && (
                <p className="text-red-500 text-center ml-4 text-sm">
                  {error.mode}
                </p>
              )}
              <div className="flex lg:gap-3 justify-between">
                {/* <label htmlFor="" className="">
                  Course
                </label> */}
                <select
                  className="border lg:w-75 w-52 px-3 py-1 rounded-[.4rem]"
                  name="course"
                  value={enquryData.course}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Course
                  </option>
                  {course.map((item, index) => {
                    return (
                      <>
                        <option key={index} value={item.courseName}>
                          {item.courseName}
                        </option>
                      </>
                    );
                  })}
                </select>
              </div>
              {error.course && (
                <p className="text-red-500 text-center ml-5 text-sm">
                  {error.course}
                </p>
              )}
              <div className="flex lg:gap-3 justify-between">
                {/* <label htmlFor="" className="">
                  Comment
                </label> */}
                <textarea
                  type="text"
                  rows={4}
                  className="border px-3 py-1 rounded-[.4rem] lg:w-75 w-52 outline-none"
                  name="enqury"
                  value={enquryData.enqury}
                  onChange={handleChange}
                  placeholder="Put your word..."
                />
              </div>
              {error.enqury && (
                <p className="text-red-500 text-center ml-15 text-sm">
                  {error.enqury}
                </p>
              )}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#1D52FF] px-5 py-1 rounded-2xl hover:bg-[#08278f] text-white cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default EnquiryForm;
