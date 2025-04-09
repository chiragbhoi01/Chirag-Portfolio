import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'; // Import necessary Swiper modules
import 'swiper/css'; // Import the core Swiper CSS
import 'swiper/css/navigation'; // Import Navigation CSS
import 'swiper/css/pagination'; // Import Pagination CSS
import 'swiper/css/scrollbar'; // Import Scrollbar CSS
import jeweleryProject from '../assets/image/jeweleryProject.png'

function Projects() {
  return (
    <div className='flex flex-col items-center justify-center '>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Projects</h1>
        <span className="text-lg text-gray-500">Most recent work</span>
      </div>

      <Swiper
        
        modules={[Navigation, Pagination, Scrollbar, A11y]} // Passing the required modules
        spaceBetween={50} // Space between slides
        slidesPerView={3} // 1 slide per view by default
        navigation // Enable navigation (next/prev buttons)
        pagination={{ clickable: true }} // Enable pagination with clickable dots
        scrollbar={{ draggable: true }} // Enable draggable scrollbar
        onSwiper={(swiper) => console.log(swiper)} // Log the swiper instance when initialized
        onSlideChange={() => console.log('slide change')} // Log when a slide changes
        breakpoints={{
          640: {
            slidesPerView: 1, // 2 slides per view for small screens
          },
          1024: {
            slidesPerView: 1, // 3 slides per view for large screens
          },
          
        }}
      >
        <SwiperSlide>
          <div >
            <span className='font-bold'>Jewelery Ecommerce - Website</span>
            <img src={jeweleryProject} alt="Jewelery Project" width={"800px"} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            Project1
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}

export default Projects;
