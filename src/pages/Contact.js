import {useRef} from 'react';
import { IoLocationOutline } from  'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_xvs918r', 'template_9wwr4g2', form.current, 'IjWJUUaGRazWslbmA')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
    return ( 
        <div className="contact">
            <div className="form-container">
                <form ref={form} onSubmit={sendEmail}>
                    <div>
                        <h2>Contact form</h2>
                        <br />
                        <input 
                        type="text" 
                        placeholder='Your Name'
                        name="user_name"
                        className="form--input"
                        />
                    </div>
                    <br />
                    <div>
                        <input 
                        type="email"
                        placeholder='Your Email'
                        name="user_email"
                        className="form--input"
                         />
                    </div>
                    <br />
                    <div>
                        <label>Leave a message:</label>
                        <br />
                        <textarea 
                        placeholder="Message"
                        name="message" cols="30" rows="10"
                        />
                    </div>
                    <br />
                    <br />
                    <input type='Submit' 
                    className='form--submit'
                    defaultValue="Send"
                    />
                </form>
            </div>
            <div className='contact-details'>
                <h2>Contact Details</h2>
                <div className="details">
                <ul>
                    <li className='flex'>
                        <h3><IoLocationOutline size={30}/> <span>Lagos, Nigeria.</span></h3>
                    </li>
                    <li className='flex'>
                        <h3><span><AiOutlineMail size={30}/></span> <a href='mailto:harlahbee@gmail.com'>harlahbee@gmail.com</a></h3>
                    </li>
                    <li className='flex'>
                        <h3><span><FaPhoneAlt size={30}/> +234 818 646 1182</span></h3>
                    </li>
                </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;