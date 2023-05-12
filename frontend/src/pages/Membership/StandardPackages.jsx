import React, { useState } from "react";
import '../../App.css'
import '../../Styles/Membership/Membership.css'
import { Container } from 'reactstrap'
import image from '../../images/Membership/stPackage.png'

function StandardPackages() {
    return (
        <section>
            <Container>
                <div className="title code">Standard Packages</div>
                <br />
                <div class="std-container">
                    <div class="std-packages">
                        <br />
                        <img src={image} alt="" className='std-image' /> <br /><br />
                        <h2 class="std-name">Platinum Package</h2>
                        <p class="std-price">LKR 25,000</p>
                        <p class="std-description">
                            Training sessions in weekends.<br />
                            3 Kg Protein Supplement included with the package. <br />
                            Package Validity - 50 days (renew after expired)
                        </p>
                        <p><button class="std-edit-btn">Edit</button></p>
                    </div>
                    <div class="std-packages">
                        <br />
                        <img src={image} alt="" className='std-image' /> <br /><br />
                        <h2 class="std-name">Gold Package</h2>
                        <p class="std-price">LKR 20,000</p>
                        <p class="std-description">
                            Training sessions in weekends.<br />
                            2 Kg Protein Supplement included with the package. <br />
                            Package Validity - 30 days (renew after expired)
                        </p>
                        <p><button class="std-edit-btn">Edit</button></p>
                    </div>
                    <div class="std-packages">
                        <br />
                        <img src={image} alt="" className='std-image' /> <br /><br />
                        <h2 class="std-name">Silver Package</h2>
                        <p class="std-price">LKR 15,000</p>
                        <p class="std-description">
                            Training sessions in weekends.<br />
                            1 Kg Protein Supplement included with the package. <br />
                            Package Validity - 20 days (renew after expired)
                        </p>
                        <p><button class="std-edit-btn">Edit</button></p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default StandardPackages