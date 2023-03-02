import React from "react";
import '../../Styles/CustomerAffairs/ContactUs.css'
import {MdEmail} from 'react-icons/md'
import {FaPhoneAlt,FaMapMarkerAlt} from 'react-icons/fa'



const ContactUs = () => {
    return(
        
        <body>
            <section class="contact-section">
                <div class="contact_content">
                    <h2 class="contactTitle">Contact Us</h2>
                    <p class="contactPara">Fill the following form to contact our panel to solve your issues regarding the system</p>
                </div>
                <div class="contact_container">
                    <div class="contact-info">
                    <div class="contact-box">
                            <div class="contact-icon">
                                <FaMapMarkerAlt/>
                            </div>
                            <div class="contact-text">
                                <h3>Address</h3>
                                <p>SLIIT Malabe Campus,<br/> New Kandy Rd,<br/> Malabe 10115</p>
                            </div>
                        </div>
                        <div class="contact-box">
                            <div class="contact-icon">
                                <FaPhoneAlt/>
                            </div>
                            <div class="contact-text">
                                <h3>Phone</h3>
                                <p>011-2148991</p>
                            </div>
                        </div>
                        <div class="contact-box">
                            <div class="contact-icon">
                                <MdEmail/>
                            </div>
                            <div class="contact-text">
                                <h3>Email</h3>
                                <p>contactgymly@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contact-form">
                    <form>
                        <h2>Send Message</h2>
                        <div class="contact-inputbox">
                            <input class="InputName" type="text" name="" required="required"></input>
                            <span>Full Name</span>
                        </div>
                        <div class="contact-inputbox">
                            <input class="InputEmail" type="text" name="" required="required"></input>
                            <span>Email</span>
                        </div>
                        <div class="contact-inputbox">
                            <textarea class="InputText" required="required"></textarea>
                            <span>Type Your Message...</span>
                        </div>
                        <div class="contact-inputbox">
                            <input type="submit" name="" value="Send"></input>
                        </div>
                    </form>
                </div>
            </section>
                
        </body>
        
    )
}

export default ContactUs;