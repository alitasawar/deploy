import React from 'react'

import SwipperCarousal from './../Utils/SwipperCarousal';
import ImageAndDescription50Split from './../Utils/ImageAndDescription50Split';
import ContactDialog from './ContactDialog';
import ServicesSlider from '../Utils/OurServicesSlider';
import Features from './Features';

const gridCss={
    display: "flex",
    flexDirection:"column",
    alignItems: "center",

}
const Home = () => {
    return (
        <>
            <SwipperCarousal />
            <div className="grid" style={gridCss}>
                <ImageAndDescription50Split />
                <ContactDialog heading={"Are You Imppressed With Our Amazing Portfolio?"} paragraph={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."} buttons={true}/>
                <Features displayNow="services" heading="What We Provide?" slidesPerView={4}/>
                <Features displayNow="projects" heading="Our Latest Projects"  dimensions={250} />
                {/* <ServicesSlider /> */}
            </div>
        </>
    )
}

export default Home