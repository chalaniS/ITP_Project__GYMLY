import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../Styles/Payment/Verification.js'
<<<<<<< HEAD
import '../../Styles/Payment/Verification.css'
import '../../Styles/Payment/payment.css'
=======
import '../../App.css'
>>>>>>> a65cf1de150f514368d80397c68e464f01065d87


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
                        <p><h4>We sent your verification code to mobile or email.Please enter your code within 5 minutes. </h4></p>
                        <br />
                        <br />
                        <br />
                        <h3>VERIFY</h3>
                        <br />
                        <br />
                        <input type="text"></input>
                        <div class="countdown">
                            <div class="time-section" id="seconds">
                                <div class="time-group">
                                    <div class="time-segment">
                                        <div class="segment-display">
                                            <div class="segment-display_top">2</div>
                                            <div class="segmant-display_bottom">2</div>
                                            <div class="segment-overlay">
                                                <div class="segment-overlay_top">2</div>
                                                <div class="segment-overlay_bottom">2</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="time-segment">
                                        <div class="segment-display">
                                            <div class="segment-display_top">2</div>
                                            <div class="segmant-display_bottom">2</div>
                                            <div class="segment-overlay">
                                                <div class="segment-overlay_top">2</div>
                                                <div class="segment-overlay_bottom">2</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="countdown-clock">
                            <span id="minutes"></span> : <span id="seconds"></span>
                        </div>
                        <br />
                        <input type="checkbox" value="lsRememberMe" id="rememberMe"></input>
                        <label for="rememberMe">Remember me</label>
                        <br />
                        <br />
                        <button type='LogIn' className='primary__btn LogIn'>Cancel</button>
                    </div>
                </Container>
            </section>
        </body>
    )
}

export default Verification