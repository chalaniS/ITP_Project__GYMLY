import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../App.css'


const GetToken = () => {
    return (
        <body>

            <section >
                <Container>
                    <div className="form">
                        <div className="title code">Token</div>
                        <div class="payment-success">
                          <h2>Your Payment is Successful!</h2>
                          <div class="payment-details">
                          <p>User ID: <span>001</span></p>
                          <p>Package Type: <span>Golden Evening</span></p>
                          <p>Token No.: <span>GE1</span></p>
                          <p>Payment Date: <span>01/31/2023</span></p>
                          <p>Payment Price: <span>10 000</span></p>
                        </div>
                          <p class="report-validity">This report valid only 30 days from payment date.</p>
                          <p class="membership-card-note">If you get your membership card, you must have this token.</p>
                        </div>

                    </div>
                </Container >
            </section >
        </body>
    )
}

export default GetToken