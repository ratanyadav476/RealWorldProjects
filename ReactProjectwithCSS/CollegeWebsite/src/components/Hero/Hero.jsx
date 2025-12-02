import React from 'react'
import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png"
function Hero() {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>We ensure better education for a better world</h1>
                <p>"Our college is not just about classrooms and books, it is about discovering your potential, shaping your dreams, gaining real-world knowledge, exploring endless opportunities, making lifelong friends."</p>
                <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
            </div>
        </div>
    )
}

export default Hero