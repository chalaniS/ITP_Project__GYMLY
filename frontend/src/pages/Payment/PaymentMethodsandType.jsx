import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../App.css'


const PaymentMethodsandType = () => {
    return (
        <body>
            <section >
            <Container>
                <div className="form">
                    <div className="title code"PaymentMethodsandType></div>

                     <div class="payment-form">
                     <div class="column">
                     <h2>Payment Type</h2>
                     <label>
                     <input type="radio" name="payment-type" value="hourly"></input>
                     Hourly
                    </label>
                    <label>
                    <input type="radio" name="payment-type" value="monthly"></input>
                      Monthly
                    </label>
                    <label>
                    <input type="radio" name="payment-type" value="annually"></input>
                    Annually
                    </label>
                    </div>
                    <div class="column">
                    <h2>Payment Method</h2>
                    <label>
                    <input type="radio" name="payment-method" value="cash"></input>
                     Cash
                    </label>
                    <label>
                    <input type="radio" name="payment-method" value="card"></input>
                     Card
                    </label>
                    </div>
                    <button type="submit">Submit</button>
                </div>
            </div>
        </Container >
    </section >
</body>
)    
}

export default PaymentMethodsandType