import React from "react";
import '../../Styles/CustomerAffairs/AboutUs.css'
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { RiInstagramFill} from 'react-icons/ri';
import pic from '../../images/CustomerAffairs/aboutus.jpg'



const AboutUs = () => {
    return(
        
        <body>
            <div class="about_section">
                <div class="about_container">
                    <div class="about_content-section">
                        <div class="about_title">
                            <h1><center>About Us</center></h1>
                        </div>
                        <div class="alignment">
                            <div class="about_content">
                                <h3>Gymly</h3>
                                <p>A web-based gym management solution is called Gymly. It makes daily duties simple and efficient for clients (users), trainers, and gym personnel. Customers can personalize their package using the system by selecting the trainer and time slot they desire. Clients can book training sessions with their selected trainer by logging in to the system and adding their available time slots. Customers can provide feedback to the gym and grade their trainer based on the level of service they receive. In addition, there is a supplement store where customers may purchase all of their supplement requirements under one roof.
                                    To receive all of these advantages, users must register with the Gymly Gym Management System. Our staff can log into the system and do administrative duties in addition to the client side. The admin is in charge of managing all the trainees and clients. The tasks associated with managing all stocks are handled by the supplier manager and stock manager. While Operation Manager handles all tasks linked to employees, Membership Manager handles all tasks related to packages. Moreover, a separate payment management section is available to handle all tasks relating to payments and money.
                                    For our web application, we utilize some technologies, including chat Messaging and Google authentication. Users' registration is handled using Google authentication. Users are immediately registered via Google authentication as soon as they are able to submit their username and password. OpenAI created the chatbot known as Chat GPT. In our system, we compute BMI using the conversation Gpt.
                                </p>
                            </div>
                            <div class="about_imagesection">
                                <img src={pic} alt="aboutus img"/>
                            </div>
                        </div>    
                        
                        
                    </div>
                    <div class="about_button">
                            <button>Read More</button>
                    </div>
                    <div class="about_socialmedia">
                            <BsFacebook class="icons"/>
                            <BsTwitter class="icons"/>
                            <RiInstagramFill class="icons"/>
                    </div>
                </div>
            </div>
                
        </body>
        
    )
}

export default AboutUs;