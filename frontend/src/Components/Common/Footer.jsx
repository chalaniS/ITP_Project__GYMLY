import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/logo.png';
import './footer.css'

const Footer = () => {
    return (
<footer className="page-footer font-small blue pt-4 bg-dark">
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
                    <li><a href="#!">Suppliment Stores</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase"><b>GYM Management</b></h5>
                <ul className="list-unstyled">
                    <li><a href="#Contacts">Contacts</a></li>
                    <li><a href="#">Management Logging</a></li>
                    <li><a href="#!"></a></li>
                    <li><a href="#!"></a></li>
                </ul>
            </div>
        </div>
    </div>


    <hr />
    <div className="footer-copyright text-center py-3">© 2023 Copyright :
        <a href="#!"> Team GYMLY</a>
    </div>

</footer>
    )}


export default Footer;