import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const SliderComp = () => {
  return (
    <div className="w-full flex justify-center lg:py-7 py-15">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="w-[80%] md:w-[70%] lg:w-[75%] overflow-visible pb-20"
      >
        <SwiperSlide>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-[2px] rounded-2xl shadow-lg shadow-black/30">
            <div className="h-58 bg-white flex flex-col items-center rounded-[calc(1rem-2px)] p-5 gap-2 overflow-hidden">
              <img
                src="/images/5968292.png"
                alt="Javascript"
                className="mix-blend-multiply h-20 w-20"
              />

              <p className="font-bold">Javascript</p>

              <p className="text-center text-[.9rem]">
                JavaScript is a versatile programming language used to create
                interactive, dynamic, and responsive web applications.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-[2px] rounded-2xl shadow-lg shadow-black/30">
            <div className="h-58 bg-white flex flex-col items-center p-5 gap-2 overflow-hidden rounded-[14px]">
              <img
                src="/images/embeded-c.png"
                alt="Embedded System"
                className="mix-blend-multiply h-20 w-20"
              />

              <p className="font-bold">Embedded System</p>

              <p className="text-center text-[.9rem]">
                Embedded systems power smart devices by integrating hardware and
                software for real-time, reliable operations.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-[2px] rounded-2xl shadow-lg shadow-black/30">
            <div className="h-58 bg-white flex flex-col items-center p-5 gap-2 overflow-hidden rounded-[14px]">
              <img
                src="/images/Inspire Future Innovators (9).png"
                alt="C++"
                className="mix-blend-multiply h-20 w-20"
              />

              <p className="font-bold">C++</p>

              <p className="text-center text-[.9rem]">
                C++ is a powerful programming language used for system software,
                games, and high-performance applications.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-[2px] rounded-2xl shadow-lg shadow-black/30">
            <div className="h-58 bg-white flex flex-col items-center p-5 gap-2 overflow-hidden rounded-[14px]">
              <img
                src="/images/Inspire Future Innovators (10).png"
                alt="Python"
                className="mix-blend-multiply h-20 w-20"
              />

              <p className="font-bold">Python</p>

              <p className="text-center text-[.9rem]">
                Python is a versatile language for web development, data
                analysis, automation, and artificial intelligence solutions.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderComp;
