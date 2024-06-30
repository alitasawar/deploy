import React from 'react'
import ContactDialog from './ContactDialog'
import './Price.css'
const pricings = ["Normal", "Medium", "Premium", "Gold"]
const Pricing = () => {
    return (
        <>
            <ContactDialog heading={"Price Table"} paragraph={"We Are Smart Web Technologies"} />
            <div class="pricing-table">
                {pricings.map(e => <div class="plan normal">
                    <div className='top'>
                        <h2>{e}</h2>
                        <p class="price">$29.99</p>
                    </div>
                    <ul>
                        <li>Unlimited Domain Uses</li>
                        <li>Access to All Themes</li>
                        <li>Photoshop Layered Files</li>
                        <li>Access to Support Forum</li>
                        <li>Free Theme Updates For Life</li>
                        <li>Documentation in Tutorials</li>
                    </ul>
                    <button>Choose this plan</button>
                </div>
                )}
            </div>

        </>
    )
}

export default Pricing