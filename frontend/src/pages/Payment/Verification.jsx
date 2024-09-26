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
                    <div className="form">
                        <div className="title code">Verification Code</div>
                        <br />
                        <br />
                        <br />
                        <div className="paragraph">
                        <p><h4>We sent your verification code to mobile or email.Please enter your code within 5 minutes. </h4></p>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className="topic">
                        <h3>VERIFY</h3>
                        </div>
                        <br />
                        <br />
                        <input type="text"></input>
                        <br />
                        <br />
                        <div id="countdown-clock">
                            <span id="minutes"></span> : <span id="seconds"></span>
                        </div>
                        <br />
                        <br />
                        <Row>
                        
                        <input type="checkbox" value="lsRememberMe" id="rememberMe"></input>    
                        <label for="rememberMe">Remember me</label>
                        
                        </Row>
                        <br />
                        <br />
                        <button type='LogIn' className='primary__btn LogIn'>Cancel</button>
                    </div>
                </Container>
            </section>
        </body>
    )
}

export default Verification ;