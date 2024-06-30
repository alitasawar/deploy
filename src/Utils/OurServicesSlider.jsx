import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './OurServicesSlider.css'

import { Pagination } from 'swiper/modules';
const services = [
  {
    title: "Responsive Design",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem",
    icon: "path/to/responsive-design-icon.svg"
  },
  {
    title: "Web Development",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem",
    icon: "path/to/web-development-icon.svg"
  },
  {
    title: "Programming",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem",
    icon: "path/to/programming-icon.svg"
  },
  {
    title: "UX Design",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem",
    icon: "path/to/ux-design-icon.svg"
  }
];

const ServicesSlider = () => {


  return (
    <div className="services-slider">
      <h2>What We Provide?</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ServicesSlider;
