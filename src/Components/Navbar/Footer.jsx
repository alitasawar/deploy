import React, { useState } from 'react'
import './Layout.css'
import { Link } from 'react-router-dom'
import { getSvg } from '../../Utils/svgGetter'

const Footer = () => {
    const [active, setActive] = useState(0);
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section stay-connect">
                    <h4>STAY CONNECT WITH US</h4>
                    <div className="social-icons">
                        <Link to="#"><img style={{height:"40px" ,width:"40px"}}  onClick={() => setActive(0)} src={getSvg("fb", (active == 0) ?'orangered': '#fff')} alt="Facebook" /></Link>
                        <Link to="#"><img style={{height:"40px" ,width:"40px"}}  onClick={() => setActive(1)} src={getSvg("twitter", (active == 1) ?'orangered': '#fff')} alt="Twitter" /></Link>
                        <Link to="#"><img style={{height:"40px" ,width:"40px"}}  onClick={() => setActive(2)} src={getSvg("skype", (active == 2) ?'orangered': '#fff')} alt="Skype" /></Link>
                        {/* <a href="#"><img src="path/to/dribbble-icon.svg" alt="Dribbble" /></a>
                        <a href="#"><img src="path/to/behance-icon.svg" alt="Behance" /></a> */}
                    </div>
                </div>
                <div className="footer-section contact-info">
                    <h4>CONTACT INFO</h4>
                    <div className='p-container' >
                        <p><img style={{height:"40px"}}  onClick={() => setActive(0)} src={getSvg("home", '#fff')} alt="Home" /> 7777 modern Avenue, Suite 05, New York, CA 9077, USA</p>
                        <p><img style={{height:"40px"}}  onClick={() => setActive(1)} src={getSvg("phn", '#fff')} alt="Phone" /> (123) 456-7890</p>
                        <p><img style={{height:"40px"}}  onClick={() => setActive(2)} src={getSvg("mail", '#fff')} alt="Email" /> info@companyname.com</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2017 Copyright <a href="#">createuiux</a>. All rights reserved</p>
                <nav className="footer-nav">
                    <Link to="#" >HOME</Link>
                    <Link to="#" >FEATURES</Link>
                    <Link to="#" >BLOG</Link>
                    <Link to="#" >PORTFOLIO</Link>
                    <Link to="#" >PRIVACY POLICY</Link>
                    <Link to="#" >TERMS</Link>
                    <Link to="#" >CONTACT</Link>
                </nav>
            </div>
        </footer>

    )
}

export default Footer