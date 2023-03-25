import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../Styles/Payment/Verification.js'
import '../../Styles/Payment/Verification.css'


const Verification = () => {
    return (
        <body>

            <section >
                <Container>
                    <div className="form">
                        <div className="title code">Verification Code</div>
                        <br/>
                        <br/>
                        <br/>
                         <p><h4>We sent your verification code to mobile or email.Please enter your code within 5 minutes. </h4></p>
                        <br/>
                        <br/>       
                        <br/>      
                        <h3>VERIFY</h3> 
                        <br/>
                        <br/>
                        <input type ="text"></input>
                        <br/>
                        <br/>
                        <br/>
                        <div id="countdown-clock">
                         <span id="minutes"></span> : <span id="seconds"></span>
                         </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <input type="checkbox" value="lsRememberMe" id="rememberMe"></input> 
                        <label for="rememberMe">Remember me</label>
                        <br/>
                        <br/>
                        <button type='LogIn' className='primary__btn LogIn'>Cancel</button>
                    </div>
                </Container>
            </section>
        </body>
    )
}

export default Verification