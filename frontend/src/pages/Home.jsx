import React from 'react'
import '../Styles/Home.css'
import { Button } from 'react-bootstrap'
import aboutus from '../images/LandingPage/aboutus.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
    <div id='home-body'>
        <div className='container-fluid text-center' id='title'>
            <h1 id='title-text'>Welcome to GYMLY</h1>
        </div>

   
        {/* about us section start */}
        <div className="container">
        <div className='container row text-center justify-content-center' id='about'>

            <div className="container col-md-6 col-md-offset-3 how-img" id='aboutus-img-section'> 
                <img src={aboutus} className="rounded mx-auto d-block img-fluid" alt="aboutus" id='aboutus-img'/>
            </div>

            <div className="container col-md-6 col-md-offset-3 " id='aboutus-texts-section'>
                <h1 id="about-title">About Us</h1>
                <p  id="about-discription">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

        </div>
        </div>
        {/* about us section end */}


    </div>
    )
}

export default Home;