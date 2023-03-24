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
                <p>Wanna Add Some pharagraph to this</p>
            </div>

            <hr className="clearfix w-80 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase"><b>Links</b></h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase"><b>Links</b></h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
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