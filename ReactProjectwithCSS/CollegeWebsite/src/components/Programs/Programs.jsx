
import "./Programs.css"
import Program_1 from "../../assets/Program-1.jpeg"
import Program_2 from "../../assets/Program-2.jpeg"
import Program_3 from "../../assets/Program-3.jpeg"
import Program_icon_1 from "../../assets/Program-icon-1.png"
import Program_icon_2 from "../../assets/Program-icon-2.png"
import Program_icon_3 from "../../assets/Program-icon-3.png"
function Programs() {
    return (
        <div className='Programs'>
            <div className="program">
                <img src={Program_1} alt="" />
                <div className="caption">
                    <img src={Program_icon_1} alt="" />
                    <p>Graduation Degree</p>
                </div>
            </div>
            <div className="program">
                <img src={Program_2} alt="" />
                <div className="caption">
                    <img src={Program_icon_2} alt="" />
                    <p>Master's Degree</p>
                </div>
            </div>
            <div className="program">
                <img src={Program_3} alt="" />
                <div className="caption">
                    <img src={Program_icon_3} alt="" />
                    <p>Post Graduation</p>
                </div>
            </div>
        </div>
    )
}

export default Programs