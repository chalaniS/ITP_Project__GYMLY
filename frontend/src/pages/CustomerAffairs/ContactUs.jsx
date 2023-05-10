import React from "react";
import '../../App.css';
import '../../Styles/CustomerAffairs/ContactUs.css'
import {MdEmail} from 'react-icons/md'
import {FaPhoneAlt,FaMapMarkerAlt,FaUserAlt,FaMailBulk} from 'react-icons/fa'



const ContactUs = () => {
    return(
        
        <body>
            <section>
                
                <h1 class="title">Contact Us</h1>
                <center><p class="contactPara">Fill the following form to contact our panel to solve your issues regarding the system</p></center>
            
                <div class="contact_container">
                    <div class="contact-info">
                    <div class="contact-box">
                            <div class="contact-icon">
                                <FaMapMarkerAlt/>
                            </div>
                            <div class="contact-text">
                                <h3>Address</h3>
                                <p class="contactPara">SLIIT Malabe Campus,<br/> New Kandy Rd,<br/> Malabe 10115</p>
                            </div>
                        </div>
                        <div class="contact-box">
                            <div class="contact-icon">
                                <FaPhoneAlt/>
                            </div>
                            <div class="contact-text">
                                <h3>Phone</h3>
                                <p class="contactPara">011-2148991</p>
                            </div>
                        </div>
                        <div class="contact-box">
                            <div class="contact-icon">
                                <MdEmail/>
                            </div>
                            <div class="contact-text">
                                <h3>Email</h3>
                                <p class="contactPara">contactgymly@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <form>
                
                <div class = "contactcontainer">
                <div class= "contactid">
                    <input class="my-input" type="text" placeholder="Full name"></input>
                    <FaUserAlt class="user"/>
                </div>
                <div class="contactid">
                    <input class="my-input" type="email" placeholder="Email Address"></input>
                    <FaMailBulk class="mail"/>
                </div>
                <textarea cols="30" rows="5" placeholder="Enter your opinions here.." class="contactMessage"></textarea>
                <button class="primary__btn" id="button_style">Submit</button>
                <button class="primary__btn" id="button_style">Cancel</button>
                </div>
                </form>
            </section>
                
        </body>
        
    )
}

export default ContactUs;