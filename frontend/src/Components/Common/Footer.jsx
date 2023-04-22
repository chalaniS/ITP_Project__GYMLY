import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/logo.png';
import './footer.css'
import * as Icons from 'react-bootstrap-icons';

const Footer = () => {
    return (
<footer className="page-footer font-small blue pt-4 bg-dark">

    {/*Icons of social media icons and links*/}
   <div className="container text-center" id="social-media-title">
        Connect With Us :
        <a href="https://www.facebook.com/"><Icons.Facebook className='icons'/></a>
        <a href="https://www.instagram.com/"><Icons.Instagram className='icons'/></a>
        <a href="https://www.twitter.com/"><Icons.Twitter className='icons'/></a>
    </div>
    {/*Icons of social media icons and links*/}
    <hr className="container" />

    <div className="container text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <img src={logo} alt="Logo" width={250} />
                <p>Beyond The Traditional GYM</p>
            </div>

            <hr className="clearfix w-80 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase"><b>Useful Links</b></h5>
                <ul className="list-unstyled">
                    <li><a href="/Loging">Sign In</a></li>
                    <li><a href="/registation">Sign Up</a></li>
                    <li><a href="#!">Packages</a></li>
                    <li><a href="#!">Suppliments</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase"><b>GYM Management</b></h5>
                <ul className="list-unstyled">
                    <li><a href="#Contacts">Contacts</a></li>
                    <li><a href="/ManagmentLogin">Management</a></li>
                    <li><a href="#!">Blog</a></li>
                    <li><a href="#!">Help</a></li>
                </ul>
            </div>
        </div>
    </div>


    <hr className="container" />
    <div className="footer-copyright text-center py-3">© 2023 Copyright :
        <a href="#!"> Team GYMLY</a>
    </div>

</footer>
    )}


export default Footer;