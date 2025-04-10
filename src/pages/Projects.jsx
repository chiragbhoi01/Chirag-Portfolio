import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import {
  food_web,
  calculator,
  jeweleryProject,
  weather_checker,
  random_password,
} from "../assets/image/image";
import Button from "../utils/Button";
function Projects() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold">Projects</h1>
        <span className="text-lg text-gray-500">Most recent work</span>
      </div>

      <div className="w-full px-4 max-w-6xl relative">
        {/* Custom Navigation Buttons */}
        <div className="absolute top-1/2 left-0 z-10 -translate-y-1/2">
          <button
            ref={prevRef}
            className="p-3 bg-white rounded-full shadow hover:bg-gray-100"
          >
            <FaArrowLeft />
          </button>
        </div>
        <div className="absolute top-1/2 right-0 z-10 -translate-y-1/2">
          <button
            ref={nextRef}
            className="p-3 bg-white rounded-full shadow hover:bg-gray-100"
          >
            <FaArrowRight />
          </button>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          simulateTouch={true} // Enables drag/swipe on desktop
          grabCursor={true} // Changes cursor to grabbing hand
          loop={true} // Optional: make it loop infinitely
          onSwiper={(swiper) => {
            // Swiper needs this to properly bind custom buttons
            setTimeout(() => {
              if (swiper.params.navigation) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            });
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className="p-4 rounded-lg flex flex-col items-center bg-amber-200">
              <span className="block  font-bold my-5">
                Jewelry Ecommerce - Website
              </span>
              <img
                src={jeweleryProject}
                alt="Jewelry Project"
                className="h-50 rounded"
              />
              <div className="flex my-3">
                <Button
                  href={"https://chirag-shopmissgypsy.vercel.app/"}
                  className="mx-3"
                >
                  <span className="mx-2">Live Demo</span> <FaExternalLinkAlt />
                </Button>
                <Button
                  href={"https://github.com/chiragbhoi01/project01.git"}
                  className="mx-3"
                >
                  <span className="mx-2">Git Hub</span> <FaExternalLinkAlt />
                </Button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="p-4 rounded-lg flex flex-col items-center bg-amber-200">
              <span className="block  font-bold my-5">
              Weather Checker
              </span>
              <img
                src={weather_checker}
                alt="Weather Checker Project"
                className="h-50 rounded"
              />
              <div className="flex my-3">
                <Button
                  href={"https://chirag-weatherchecker.netlify.app/"}
                  className="mx-3"
                >
                  <span className="mx-2">Live Demo</span> <FaExternalLinkAlt />
                </Button>
                <Button
                  href={"https://github.com/chiragbhoi01/Weather-Checker"}
                  className="mx-3"
                >
                  <span className="mx-2">Git Hub</span> <FaExternalLinkAlt />
                </Button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="p-4 rounded-lg flex flex-col items-center bg-amber-200">
              <span className="block  font-bold my-5">
              Random Password Generator
              </span>
              <img
                src={random_password}
                alt="Random Password Generator"
                className="h-50 rounded"
              />
              <div className="flex my-3">
                <Button
                  href={"https://chirag-randompassword.netlify.app/"}
                  className="mx-3"
                >
                  <span className="mx-2">Live Demo</span> <FaExternalLinkAlt />
                </Button>
                <Button
                  href={"https://github.com/chiragbhoi01/Random-password-generator"}
                  className="mx-3"
                >
                  <span className="mx-2">Git Hub</span> <FaExternalLinkAlt />
                </Button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="p-4 rounded-lg flex flex-col items-center bg-amber-200">
              <span className="block  font-bold my-5">
              Basic Restaurant Website
              </span>
              <img
                src={food_web}
                alt="Random Password Generator"
                className="h-50 rounded"
              />
              <div className="flex my-3">
                <Button
                  href={"https://chirag-dilpunjabi.netlify.app/"}
                  className="mx-3"
                >
                  <span className="mx-2">Live Demo</span> <FaExternalLinkAlt />
                </Button>
                <Button
                  href={"https://github.com/chiragbhoi01/Food-Website"}
                  className="mx-3"
                >
                  <span className="mx-2">Git Hub</span> <FaExternalLinkAlt />
                </Button>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="p-4 rounded-lg flex flex-col items-center bg-amber-200">
              <span className="block  font-bold my-5">
              Calculator
              </span>
              <img
                src={calculator}
                alt="Calculator"
                className="h-50 rounded"
              />
              <div className="flex my-3">
               
                <Button
                  href={"https://github.com/chiragbhoi01/Calculator-For-Internship-Code-Samurai-"}
                  className="mx-3"
                >
                  <span className="mx-2">Git Hub</span> <FaExternalLinkAlt />
                </Button>
              </div>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;
