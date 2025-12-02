import React from 'react'
import "./Campus.css"
import galary_1 from "../../assets/gallery-1.png"
import galary_2 from "../../assets/gallery-2.png"
import galary_3 from "../../assets/gallery-3.png"
import galary_4 from "../../assets/gallery-4.png"
import white_Arrow from "../../assets/white-arrow.png"
function Campus() {
    return (
        <div className='campus'>
            <div className="gallery">
                <img src={galary_1} alt="" />
                <img src={galary_2} alt="" />
                <img src={galary_3} alt="" />
                <img src={galary_4} alt="" />
            </div>
            <button className='btn dark-btn'>See more here <img src={white_Arrow} alt="" /></button>
        </div>
    )
}

export default Campus