import React from 'react';
import { Container, Row } from 'react-bootstrap';
import '../../App.css'
import '../../Styles/Payment/payment.css'

function GetToken() {
  return (
    <body>
      <section>
        <Container>
          <div className="tokenform">
            <div className="title code">Token</div>
            <Row>
              <div className="payment-success">
                <h2>Your Payment is Successful!</h2>
              </div>
            </Row>
            <Row>
              <div className="payment-details">
                <p>User ID: <span>001</span></p>
               
                <p>Package Type: <span>Golden Evening</span></p>
                
                <p>Token No.: <span>GE1</span></p>
                
                <p>Payment Date: <span>01/31/2023</span></p>
               
                <p>Payment Price: <span>10 000</span></p>
              </div>
            </Row>
            <p className="report-validity">This report valid only 30 days from payment date.</p>
            <p className="membership-card-note">If you get your membership card, you must have this token.</p>
          </div>
        </Container>
      </section>
    </body>
  );
}

export default GetToken;
