import React, { useRef } from 'react'
import "./Testimonials.css"
import next_icons from "../../assets/next-icon.png"
import back_icons from "../../assets/back-icon.png"
import user_1 from "../../assets/user-1.png"
import user_2 from "../../assets/user-2.png"
import user_3 from "../../assets/user-3.png"
import user_4 from "../../assets/user-4.png"
function Testimonials() {
    const slider = useRef()
    let tx = 0
    const slideForward = () => {
        if (tx > -50) {
            tx -= 25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackword = () => {
         if (tx < 0) {
            tx += 25
        }
        slider.current.style.transform = `translateX(${tx}%)`

    }

    return (
        <div className='Testimonials'>
            <img src={next_icons} alt="" className='next-btn' onClick={slideForward} />
            <img src={back_icons} alt="" className='back-btn' onClick={slideBackword} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Sayma Khan </h3>
                                    <span>H.R.P.G ,Khalilabad</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Krishna Gaud</h3>
                                    <span>H.R.P.G ,Khalilabad</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Nazia Saikh</h3>
                                    <span>H.R.P.G ,Khalilabad</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Ratan Yadav</h3>
                                    <span>HRPG ,Khalilabad</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Testimonials