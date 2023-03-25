import React, { useState } from "react";
import '../../App.css'
import '../../Styles/Membership/Membership.css'
import { Container,Row, Col } from 'reactstrap'
import image from '../../images/Membership/prmPackage.png'
import { AiOutlineSearch } from "react-icons/ai";

function PromoPackages() {
    return (
        <section>
            <Container>
                <div className="title code">Promo Packages</div>
                <br />
                <div>
                    <Row>
                        <Col lg="8">
                    <div>
                        <button class="add-prm-btn">Add New Promo Package</button>
                    </div>
                    </Col>
                    <Col lg="4">
                    <div>
                        <AiOutlineSearch className="i" />
                        <input type="text" className='search' value="" />
                    </div>
                    </Col>
                    </Row>
                </div>
                <div class="prm-container">
                    <div class="prm-packages">
                        <br />
                        <img src={image} alt="" className='prm-image' /> <br /><br />
                        <h2 class="prm-name">New Year Promo Package</h2>
                        <p class="prm-price">LKR 25,000</p>
                        <p class="prm-description">
                            Training sessions in weedays.<br />
                            2 Kg Protein Supplement included with the package. <br /><br />
                            Valid until - 30/04/2023
                        </p>
                        <p><button class="prm-edit-btn">Delete</button></p>
                    </div>
                    <div class="prm-packages">
                        <br />
                        <img src={image} alt="" className='prm-image' /> <br /><br />
                        <h2 class="prm-name">New Year Promo Package</h2>
                        <p class="prm-price">LKR 25,000</p>
                        <p class="prm-description">
                            Training sessions in weedays.<br />
                            2 Kg Protein Supplement included with the package. <br /><br />
                            Valid until - 30/04/2023
                        </p>
                        <p><button class="prm-edit-btn">Delete</button></p>
                    </div>
                    <div class="prm-packages">
                        <br />
                        <img src={image} alt="" className='prm-image' /> <br /><br />
                        <h2 class="prm-name">New Year Promo Package</h2>
                        <p class="prm-price">LKR 25,000</p>
                        <p class="prm-description">
                            Training sessions in weedays.<br />
                            2 Kg Protein Supplement included with the package. <br /><br />
                            Valid until - 30/04/2023
                        </p>
                        <p><button class="prm-edit-btn">Delete</button></p>
                    </div>
                </div>
                <br />
                <div class="prm-container">
                    <div class="prm-packages">
                        <br />
                        <img src={image} alt="" className='prm-image' /> <br /><br />
                        <h2 class="prm-name">New Year Promo Package</h2>
                        <p class="prm-price">LKR 25,000</p>
                        <p class="prm-description">
                            Training sessions in weedays.<br />
                            2 Kg Protein Supplement included with the package. <br /><br />
                            Valid until - 30/04/2023
                        </p>
                        <p><button class="prm-edit-btn">Delete</button></p>
                    </div>
                    <div class="prm-packages">
                        <br />
                        <img src={image} alt="" className='prm-image' /> <br /><br />
                        <h2 class="prm-name">New Year Promo Package</h2>
                        <p class="prm-price">LKR 25,000</p>
                        <p class="prm-description">
                            Training sessions in weedays.<br />
                            2 Kg Protein Supplement included with the package. <br /><br />
                            Valid until - 30/04/2023
                        </p>
                        <p><button class="prm-edit-btn">Delete</button></p>
                    </div>
                    <div class="prm-packages">
                        <br />
                        <img src={image} alt="" className='prm-image' /> <br /><br />
                        <h2 class="prm-name">New Year Promo Package</h2>
                        <p class="prm-price">LKR 25,000</p>
                        <p class="prm-description">
                            Training sessions in weedays.<br />
                            2 Kg Protein Supplement included with the package. <br /><br />
                            Valid until - 30/04/2023
                        </p>
                        <p><button class="prm-edit-btn">Delete</button></p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default PromoPackages