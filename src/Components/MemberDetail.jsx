import React from 'react'
import offman from './../assets/offman.jpg';
import { getSvg } from '../Utils/svgGetter';
import ContactDialog from './ContactDialog';

const MemberDetail = () => {
    const style = {
        padding: "0 20px",
        height: "30px"
    };

    return (
        <>
            <ContactDialog heading={"MemberDetail"} paragraph={"We are Smart Web Technologies"} />
            <div className='flex-centerr' style={{width:"100%"}}>

                <section class="main" style={{maxWidth:"840px"}}>
                    <div class="left">
                        <img src={offman} alt="" />

                    </div>
                    <div class="right">
                        <h2 class="heading">Jhon Smith</h2>
                        <h6 class="title">-UX Designer</h6>
                        <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tenetur neque velit nobis inventore reprehenderit, nostrum quo, rerum non eos totam impedit veritatis iure accusantium voluptatem omnis eaque maiores vitae aspernatur harum quam aliquid placeat quidem. Reiciendis eaque sunt mollitia atque quos eum architecto sapiente ratione voluptatibus officiis deserunt labore fugiat dolore quaerat, corrupti voluptates culpa laboriosam accusamus dolor veniam repellendus possimus quasi molestiae. Cum assumenda recusandae enim sunt quisquam, consequuntur veniam excepturi corporis! Veritatis in aliquam dolorem quo vero labore, exercitationem fugit maiores accusamus sed. Repellendus, perspiciatis maiores accusantium cupiditate eius perferendis commodi facilis, explicabo odit quam omnis magnam.</p>
                        <div class="icons">
                            <span><img src={getSvg('fb', 'black')} alt="" /></span>
                            <span><img src={getSvg('twitter', 'black')} alt="" /></span>
                            <span><img src={getSvg('skype', 'black')} alt="" /></span>
                            {/* <span><i class="fa-brands fa-github"></i></span>
                        <span><i class="fa-brands fa-discord"></i></span> */}

                        </div>
                    </div>
                </section>


                <div class="content" style={{maxWidth:"840px"}}>
                    <div class="core-values">
                        <h2>Our Core Values</h2>
                        <div class="value">
                            <div class="tab"><h3>Where does it come from? </h3> <span class="span">+</span></div>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old...</p>
                        </div>
                        <div class="value">
                            <div class="tab"><h3>Where can I get some demo text? </h3> <span class="span">+</span></div>

                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form...</p>
                        </div>
                        <div class="value">
                            <div class="tab"><h3> What is Lorem Ipsum? </h3> <span class="span">+</span></div>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                        </div>
                    </div>
                    <div class="specialization">
                        <h2>Our Specialization</h2>
                        <div class="skill">
                            <span>Adobe Photoshop</span>
                            <div class="skill-bar">
                                <div class="skill-level" style={{ width: "90%" }}></div>
                            </div>
                        </div>
                        <div class="skill">
                            <span>Adobe Indesign</span>
                            <div class="skill-bar">
                                <div class="skill-level" style={{ width: "90%" }}></div>
                            </div>
                        </div>
                        <div class="skill">
                            <span>Adobe Flash</span>
                            <div class="skill-bar">
                                <div class="skill-level" style={{ width: "80%" }}></div>
                            </div>
                        </div>
                        <div class="skill">
                            <span>Adobe After Effects</span>
                            <div class="skill-bar">
                                <div class="skill-level" style={{ width: "90%" }}></div>
                            </div>
                        </div>
                        <div class="skill">
                            <span>Adobe Dreamweaver</span>
                            <div class="skill-bar">
                                <div class="skill-level" style={{ width: "90%" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MemberDetail