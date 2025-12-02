import React from 'react'
import './Contact.css'
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"

function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "1150302a-28c5-4113-ad42-4e7908129238");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="" /></h3>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <ul>
                    <li> <img src={mail_icon} alt="" />hrpgcollage@gmail.com</li>
                    <li>  <img src={phone_icon} alt="" /> +91 9919803788 </li>
                    <li> <img src={location_icon} alt="" />Khalilabaad Near-Nedula Chauraha <br />
                        Khalilabbad ,Sant Kabir Nagar  272175 Utter Pradesh
                    </li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name='name' placeholder='Enter Your Name' id='name' required />
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter your Phone no' id='phone' required />
                    <label htmlFor="message"> Write your message's here</label>
                    <textarea name="message" className='textarea' id="message" rows={6} placeholder='Enter your message'  ></textarea>
                    <button className='btn dark-btn'>Submit <img src={white_arrow} alt="" /></button>

                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact