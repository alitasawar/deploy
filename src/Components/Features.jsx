import React from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import img1 from './../assets/img-desc.png'
import img2 from './../assets/bg-customize.jpg'
import img3 from './../assets/bg-design.jpg'
import img from './../assets/project.png'

import { Navigation, Pagination } from 'swiper/modules';
import './../Utils/OurServicesSlider.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { getSvg } from '../Utils/svgGetter';
import { GLOBAL } from '../Utils/global';
const colors = GLOBAL.colors
const services = [
    {
        title: "Responsive Design",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem",
        icon: "responsive"
    },
    {
        title: "Web Development",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem",
        icon: "responsive"
    },
    {
        title: "Programming",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem",
        icon: "coding"
    },
    {
        title: "UX Design",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem",
        icon: "UX"
    },
    {
        title: "SEO Optimization",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem",
        icon: 'seo'
    },
    {
        title: "Content Creation",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem",
        icon: "code"
    },
    {
        title: "Digital Marketing",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem",
        icon: "expand"
    },
    {
        title: "E-commerce Solutions",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem",
        icon: 'ecom'
    },
    {
        title: "Cloud Computing",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem",
        // icon:'coding'
    },
    {
        title: "Cybersecurity",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem",
        // icon:'expanding'
    }
];
const projects = [img, img1, img2, img3, img1, img3, img2]
const Features = ({ heading, displayNow, dimensions = 300, slidesPerView=3}) => {
    const dimens={height:dimensions,width:dimensions}

    return (
        <div className='our-services-slider' style={{ maxWidth: "840px" }}>
            <div className="slider-header">
                <h3>{heading}</h3>
                <div className={displayNow === "services"?"custom-navigation":"nav"}>
                    <button className="previous">{"<"}</button>
                    <button className="nexxt">{">"}</button>
                </div>
            </div>

            <Swiper
                modules={[Navigation]}
                spaceBetween={displayNow === "services" ? 50 : 50}
                slidesPerView={slidesPerView}
                slidesPerGroup={slidesPerView}
                navigation={{
                    clickable: true,
                    nextEl: '.nexxt',
                    prevEl: '.previous',
                }}
            // onSlideChange={() => { console.log("2nd slide changed"); }}

            >
                {displayNow === "services"
                    ? services.map((e, i) => <SwiperSlide key={i}>
                        <div style={{ borderBottom: "3px solid #" + colors[i % 4] }} className="services-slide">
                            {e.icon && <img height={50} src={getSvg(e.icon, "#f05908")} alt={e.title} />}
                            <h3>{e.title}</h3>
                            <p>{e.description}</p>

                        </div>
                    </SwiperSlide>)

                    : projects.map((e, i) => <SwiperSlide key={i}>
                        <div className="services-slide" style={dimens} >
                            <img src={e} {...dimens} />
                        </div>
                    </SwiperSlide>
                    )
                }


            </Swiper>
        </div>
    );
};

export default Features