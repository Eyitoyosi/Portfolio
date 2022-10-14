import {useState} from 'react'
import { IoLocationOutline } from  'react-icons/io5'
import { AiOutlineMail } from 'react-icons/ai'
import { FaPhoneAlt } from 'react-icons/fa'


const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: "", 
        lastName: "", 
        email: "",
        message: ""}
    )

function handleChange(event){
    setFormData(prevformData => {
        return {
            ...prevformData, 
            [event.target.name]: event.target.value
        }
    })
}
    return ( 
        <div className="contact">
            <div className="form-container">
                <form action="" className='form'>
                    <div>
                        <h2>Contact form</h2>
                        <label>First Name:</label>
                        <br />
                        <input 
                        type="text" 
                        placeholder='Your First Name'
                        onChange={handleChange}
                        name="firstName"
                        value={formData.firstName}
                        className="form--input"
                        />
                    </div>
                    <br />
                    <div>
                        <label>Last Name:</label>
                        <br />
                        <input 
                        type="text" 
                        placeholder='Your Last Name'
                        onChange={handleChange}
                        name="lastName"
                        value={formData.lastName}
                        className="form--input"
                        />
                    </div>
                    <br />
                    <div>
                        <label>Email:</label>
                        <br />
                        <input 
                        type="email"
                        placeholder='Your Email'
                        onChange={handleChange}
                        name="email"
                        value={formData.email}
                        className="form--input"
                         />
                    </div>
                    <br />
                    <br />
                    <div>
                        <label>Leave A Message:</label>
                        <br />
                        <textarea 
                        value={formData.message}
                        placeholder="Message"
                        onChange={handleChange}
                        name="message" cols="30" rows="10" />
                    </div>
                    <br />
                    <br />
                    <input type="button"
                    value='Submit' 
                    className='form--submit' />
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