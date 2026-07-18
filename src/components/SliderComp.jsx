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
        <SwiperSlide className="border-[#7696fd] border-3 rounded-2xl shadow-black/30">
          <div className="h-58 bg-white flex flex-col items-center rounded-2xl p-5 gap-2 overflow-hidden">
            <img
              src="/images/5968292.png"
              alt=""
              className="mix-blend-multiply h-20 w-20"
            />
            <p className="z-10 font-bold">Javascript</p>
            <p className="text-center text-[.9rem]">
              JavaScript is a versatile programming language used to create
              interactive, dynamic, and responsive web applications
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="border-[#7696fd] border-3 shadow-black/30 rounded-2xl">
          <div className="h-58 bg-white flex flex-col items-center p-5 gap-2 overflow-hidden rounded-2xl">
            <img
              src="/images/embeded-c.png"
              alt=""
              className="mix-blend-multiply h-20 w-20"
            />
            <p className="z-10 font-bold">Embedded System</p>
            <p className="text-center text-[.9rem]">
              Embedded systems power smart devices by integrating hardware and
              software for real-time, reliable operations.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className=" border-[#7696fd] border-3 rounded-2xl overflow-hidden">
          <div className="h-58 bg-white flex flex-col items-center p-5 gap-2">
            <img
              src="/images/Inspire Future Innovators (9).png"
              alt=""
              className="mix-blend-multiply h-20 w-20"
            />
            <p className="z-10 font-bold">C++</p>
            <p className="text-center text-[.9rem]">
              C++ is a powerful programming language used for system software,
              games, and high-performance applications.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="border-[#7696fd] border-3 rounded-2xl overflow-hidden">
          <div className="h-58 bg-white flex flex-col items-center p-5 gap-2">
            <img
              src="/images/Inspire Future Innovators (10).png"
              alt=""
              className="mix-blend-multiply h-20 w-20"
            />
            <p className="z-10 font-bold">Python</p>
            <p className="text-center text-[.9rem]">
              Python is a versatile language for web development, data analysis,
              automation, and artificial intelligence solutions.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderComp;
