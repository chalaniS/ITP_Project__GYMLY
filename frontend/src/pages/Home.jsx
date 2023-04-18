import React from 'react'
import '../Styles/Home.css'
import { Button } from 'react-bootstrap'
import aboutus from '../images/LandingPage/aboutus.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TelephoneFill } from 'react-bootstrap-icons';
import { EnvelopeAtFill } from 'react-bootstrap-icons';
import { GeoAlt } from 'react-bootstrap-icons';
import { Globe } from 'react-bootstrap-icons';



const Home = () => {
    return (
    <div id='home-body'>
        <div className='container-fluid text-center' id='title'>
            <div id='title-text'>Welcome to GYMLY</div>
            <div className="container" id='title-btn-section'>
                <Button variant="outline-light" id='title-button'>Membership</Button>
                <Button variant="outline-light" id='title-button'>Team GYMLY</Button>
            </div>
        </div>

   
        {/* about us section start */}
        <div className="container">
        <div className='container row text-center justify-content-center' id='about'>

            <div className="container col-md-6 col-md-offset-3 how-img" id='aboutus-img-section'> 
                <img src={aboutus} className="rounded mx-auto d-block img-fluid" alt="aboutus" id='aboutus-img'/>
            </div>

            <div className="container col-md-6 col-md-offset-3 " id='aboutus-texts-section'>
                <div id="about-title">About Us</div>
                <div  id="about-discription">A web-based gym management solution is called Gymly. It makes daily duties simple and efficient for clients (users), trainers, and gym personnel. Customers can personalize their package using the system by selecting the trainer and time slot they desire. Clients can book training sessions with their selected trainer by logging in to the system and adding their available time slots. Customers can provide feedback to the gym and grade their trainer based on the level of service they receive. In addition, there is a supplement store where customers may purchase all of their supplement requirements under one roof.</div>
            </div>

        </div>
        </div>
        {/* about us section end */}

        {/*location section*/}
        <div className="container">
           <div className='container row text-center justify-content-center' id='location'>

            <div className="container col-md-6 col-md-offset-3 " id='location-texts-section'>
                <div id="location-title">Contact Us</div>
                <div id='contact-info-list'>
                <div id="location-discription"><TelephoneFill size={30} /> <div id='contact-info'>076 922 3432</div> </div>
                <div id="location-discription"><EnvelopeAtFill size={30}/> <div id='contact-info'>info@gymly.lk</div></div>
                <div id="location-discription"><GeoAlt size={30}/><div id='contact-info'>De Mel mawatha, Colombo 03</div></div>
                <div id="location-discription"><Globe size={30}/> <div id='contact-info'>www.gymly.com</div></div>
                </div>
            </div>

            <div className="container col-md-6 col-md-offset-3 how-img" id='location-img-section'> 
                <img src={aboutus} className="rounded mx-auto d-block img-fluid" alt="aboutus" id='location-img'/>
            </div>

          </div>
        </div>
        {/*location section*/}

        {/*footer section*/}

        {/*footer section*/}

        
    </div>
    )
}

export default Home;