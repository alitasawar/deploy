import React, { useState } from 'react'
import img1 from './../assets/img-desc.png'
import img2 from './../assets/bg-customize.jpg'
import img3 from './../assets/bg-design.jpg'
import './imageSplit.css'
import { getSvg } from './svgGetter'

const bestChoice=[img1,img2,img3]
const iconArr = [
    "support", "code", "unique"
]
const ImageAndDescription = () => {
    const [isActive, setIsActive] = useState(0)
    return (
        <div className='image-desc-spliter'>
            <div className="img">
                <img height="329px" width="380px" src={bestChoice[isActive]} alt="About us" />
            </div>
            <div className="desc">
                <h2><span className='span'>Why </span> Are We Best Choice?</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print- er took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publiLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scram- bled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.</p>

                <div className="icons-container ">
                    {iconArr.map((e, i) => {
                        if ((isActive === i)) {
                            return (<div style={{ borderBottom: "3px solid orange" }} className="icon-container" onClick={() => { setIsActive(i) }} key={e}>
                                <img src={getSvg(e, "#ff0000")} height="32" alt={e} />
                                <span style={{color:"orangered"}}>{e.toUpperCase()}</span>
                            </div>)
                        } else {
                            return (<div className="icon-container" onClick={() => { setIsActive(i) }} key={e}>
                                <img src={getSvg(e, "#000000")} height="32" alt={e} />
                                <span >{e.toUpperCase()}</span>
                            </div>)
                        }
                    }

                    )}
                    {/* <div className="icon-container ">
                        <img src={getSvg("code", "#ff0000")} height="32" alt="24/7 Support" />
                    </div>
                    <div className="icon-container ">
                        <img src={getSvg("support", "#ff0000")} height="32" alt="24/7 Support" />
                    </div> */}



                </div>
            </div>
            {/* 
                <img src={svgs.code} alt="" />
                <img src={unique} height="32" alt="" />
                */}
        </div>
    )
}

export default ImageAndDescription