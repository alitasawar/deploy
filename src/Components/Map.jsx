import React from 'react'
import map from './../assets/map.jpg'
import ContactDialog from './ContactDialog'

const Map = () => {
    return (
        <>
        <ContactDialog heading={"Contact Us"} paragraph={"Let's Get In Touch"} css={{height:"110px",}} />
        <div className='map'>
            <img src={map}  width="840px" />
        </div>
        </>
    )
}

export default Map