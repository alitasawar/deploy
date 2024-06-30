import React from 'react'
import './Home.css'

const ContactDialog = ({ heading, paragraph, buttons ,css}) => {
    return (
        <div className='contact-dialog' style={{...css,height:buttons?"120px":"auto"}}>
            <div className="dialog-container ">
                <div className="dialog-texts">
                    <h3>{heading}</h3>
                    <p>{paragraph} </p>
                </div>
                <div className="contact-buttons">
                    {buttons
                        ? (<><button className='btn-orange'>Hire Me</button>
                            <button className='btn-blue'>Skype Call</button></>)
                        : (<div >Home {"->"} <span style={{color:'orangered'}}>{heading}</span></div>)
                    }

                </div>
            </div>

        </div>
    )
}

export default ContactDialog