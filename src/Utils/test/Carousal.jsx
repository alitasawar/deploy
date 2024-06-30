import React, { useState } from 'react'
import './Carousal.css';

const Carousal = ({ imgs }) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const handleChange = (chg) => {
        setCurrentSlide(curr => {
            const newVal = curr + chg;
            let val= (newVal< 0 || newVal>(imgs.length-1))? curr: newVal
            console.log(val);
            return val    
        })
    }
    return (
        <div className='carousal-body'>
            <button className='slide-changer' onClick={() => handleChange(-1)}>{'<'}</button>
            <img src={imgs[currentSlide]} width={100 + "%"} />
            <button className='slide-changer' onClick={() => handleChange(1)}>{'>'}</button>
        </div>
    )
}

export default Carousal