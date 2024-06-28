import React from 'react'
import './ContactUs.css'
import { assets } from '../../assets/index'
import { useNavBarContext } from '../../Context/NavBarContextProvider'
import { FaMessage } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
const ContactUs = () => {
     
    const {hidden} = useNavBarContext();

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "19c4dc74-be84-4eee-858e-12b864d03813");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Email Sent Successfully , will reply you soon");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }

        setTimeout(()=>{
            setResult("");
        } , 2000)
    };

    return (
        <div className={`contact `}  >





            <div className="contact-left">
                <p className='contact-left-heading' >Send us a message  <FaMessage />    </p>
                <p className='contact-left-para' >
                    Feel free to reach out through contact form or find our contact information below.
                    Your feedback, questions, and suggestions are important to us as we strive to provide exceptional
                    service to our university community.

                </p>
                <ul>

                    <li className='contact-left-smallpara' >
                        <img src={assets.mail} alt="" />
                        <span>kshitijgupta070704@gmail.com</span>
                    </li>
                    <li className='contact-left-smallpara' >
                        <img src={assets.phone} alt="" />
                        <span>8851330391</span>
                    </li>
                    <li className='contact-left-smallpara' >
                        <img src={assets.location} alt="" />
                        <span> Sector 64 , IMT Manesar , Gurgaon <br />
                            Harayana  , India</span>
                    </li>

                </ul>

            </div>

            <div className="contact-right">

                <form onSubmit={onSubmit}  className='form'>

                    <input type="hidden" name="access_key" value="19c4dc74-be84-4eee-858e-12b864d03813" />
                    <label>
                        Your name
                        <input type="text" id='name' name='name' placeholder='Enter your name' />
                    </label>
                    <label>
                        Phone Number
                        <input type="text" id='phone' name='phone' placeholder='Enter your mobile number' />

                    </label>
                    <label>
                        Your Email
                        <input type="text" id='email' name='email' placeholder='Enter your email' />

                    </label>
                    <label>
                        Write your messages here
                        <textarea id="message" name='message' placeholder='Enter your message'  >

                        </textarea>

                    </label>
                    <button type='submit' className='btn dark-btn' >Submit now <img src={assets.whiteArrow} alt="" /></button>


                </form>
                <span className='form-result' >{result}</span>

            </div>









        </div>
    )
}

export default ContactUs