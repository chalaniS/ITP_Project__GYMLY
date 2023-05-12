import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../Styles/Payment/Verification.js'
import '../../App.css'
import '../../Styles/Payment/payment.css'



const Verification = () => {
    return (
        <body>

            <section >
                <Container>
                    <form>
                    <div className="verificationform">
                        <Row>
                        <div className="title code">Verification Code</div>
                        </Row>
                        <Row>
                        <div className="paragraph">
                        <p><h4>We sent your verification code to mobile or email.Please enter your code within 5 minutes. </h4></p>
                        </div>
                        </Row>
                        <Row>
                        <div className="topic">
                        <h3>VERIFY</h3>
                        </div>
                        </Row>
                        <Row>
                        <input type="text"></input>
                        </Row>
                        <br/>
                        <Row>
                        <div id="countdown-clock">
                            <span id="minutes"></span> : <span id="seconds"></span>
                        </div>
                        </Row>
                        <br/>
                        <Row>
                        <Col>
                        <input type="checkbox" value="lsRememberMe" id="rememberMe"></input>
                        </Col>
                        <Col> 
                        <label for="rememberMe">Remember me</label>
                        </Col>  
                        </Row>
                        <br/>
                        <Row>
                        <Col>
                        <button type='cancel' className='primary__btn LogIn'>Back</button>
                        </Col>
                        <Col>
                        <button type='submit' className='primary__btn LogIn'>Continue</button>
                        </Col>
                        </Row>
                    </div>
                    </form>
                </Container>
            </section>
        </body>
    )
}

export default Verification ;