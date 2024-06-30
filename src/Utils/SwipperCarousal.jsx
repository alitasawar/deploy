import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import bgDesign from "./../assets/bg-design.jpg";
import bgCustomize from "./../assets/bg-customize.jpg";
import bgCode from "./../assets/bg-code.jpg";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './SwipperCarousal.css'
import { GLOBAL } from './global';
import { useState } from 'react';
import { getSvg } from './svgGetter';
const Colors = GLOBAL.colors
const data = [
    { bg: bgDesign, heading: "Responsive Layouts", sub: "Mobile to Desktop", icon: { img: getSvg("responsive","#fff"), heading: "Responsive Layouts", sub: "Mobile to Desktop" } },
    { bg: bgCustomize, heading: "Easily Customizable", sub: "Build the way you want", icon: { img: getSvg("coding","#fff"), heading: "Easily Customizable", sub: "Build the way you want" } },
    { bg: bgCode, heading: "HTML5 / CSS3", sub: "Advance tech & Build to last.", icon: { img: getSvg("code","#fff"), heading: "HTML5 / CSS3", sub: "Advance tech & Build to last." } },
    { bg: bgCode, heading: "Unique & Engagging", sub: "Unleash your aspirations", icon: { img: getSvg("expand","#fff"), heading: "Unique & Engagging", sub: "Unleash your aspirations" } },
]
function customPaginationRender(index, className) {
    return `<span style="background:#${Colors[index]}" class="${className}">
    <img src="${data[index].icon.img}" height="30" alt="" />
    <h5>${data[index].icon.heading.toUpperCase()}</h5>
    <p>${data[index].icon.sub}</p>
    </span>`;
}

export default () => {
    const [textAnim,setTextAnim]=useState(true)
    return (
        <>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{ clickable: true }}
                loop
                pagination={{
                    el: '.custom-pagination',
                    clickable: true,
                    renderBullet: customPaginationRender,
                }}
                onSlideChange={()=>{console.log("change");setTextAnim(e=>e=!e)}}
            >
                {data.map((slider, index) => <SwiperSlide key={index}>
                    <div className="slider-text-container">
                        <h3 className={textAnim?"ltr":"ltr"}>{slider.heading}</h3>
                        <p className={textAnim?"rtl":"rtl"}>{slider.sub} Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, voluptatibus, sint rem sapiente ipsa laborum .</p>
                    </div>
                    <img src={slider.bg} width={"100%"} alt="" />
                </SwiperSlide>
                )}
            </Swiper>
            <div className="custom-pagination"></div>
        </>
    );
};