import React from 'react'
import{Container, row, Col, Row} from 'reactstrap'
import '../../App.css'
import '../../Styles/Payment/payment.css'
import image from '../../images/Payment/card1.png'

const PaymentGateway = () => {
    return (
       <body>
         <section>
             <Container>
                 <div class="form">
                 <div class="title code">Payment Gateway</div>
                 <br/><br/><br/><br/>
                 <div class="Payment forms">
                 <form>
                     <Row>
                     <Col>
                         <label htmlFor="method">Payment Method:</label>
                     </Col>
                     <Col>
                          <label>
                          <input type="radio" name="payment-method" value="hourly" /> Hourly
                          </label>
                          <br/>
                          <label>
                          <input type="radio" name="payment-method" value="monthly" /> Monthly
                          </label>
                          <br/>
                          <label>
                          <input type="radio" name="payment-method" value="annually" /> Annually
                          </label>
                     </Col>
                     
                         <br /><br/>
                     
                     <Col>
                           <label htmlFor="type">Payment Type:</label>
                     </Col>
                     <Col>
                           <label>
                           <input type="radio" name="payment-type" value="card" /> Card
                           </label>
                           <br/>
                           <label>
                           <input type="radio" name="payment-type" value="cash" /> Cash
                           </label>
                     </Col>
                     </Row>
                 </form>
                 </div>
                 </div>

                 <br/><br/><br/><br/><br/>

       <div class="form">
            <header>
                <Row>
                    <Col>
                        <Row>
                            <h3>Personal Details</h3>
                            <br/><br/><br/><br/>
                        </Row>
                        <br/>
                        <form>
                            <Row>
                                Full Name
                                <input type="text" name="" placeholder="Enter name" />
                            </Row>
                            <br/>
                            <Row>
                                Email
                                <input type="text" name="" placeholder="Enter email" />
                            </Row>
                            <br/>
                            <Row>
                                Address
                                <input type="text" name="" placeholder="Enter address" />
                            </Row>
                            <br/>
                            <Row>
                                City
                                <input type="text" name="" placeholder="Enter city" />
                            </Row>
                            <br/>
                                <div id="Zip">
                                <Row>
                                   <Col>
                                    <label>
                                        State
                                        <br />
                                        <select>
                                            <option>Choose State..</option> 
                                            <option>North</option>
                                            <option>Western</option>
                                            <option>Eastern</option>
                                            <option>Sorthern</option>
                                        </select>
                                    </label>
                                </Col>
                                <Col>
                                    <label>
                                        Zip Code
                                        <br />
                                        <input type="number" name="" placeholder="zip code" />
                                    </label>
                                </Col>
                                </Row>
                                </div>
                            
                            </form>
                        </Col>
                        <Col>
                        <Row>
                            <h3>Payment</h3>
                            <br/><br/><br/><br/>
                        </Row>
                        <br/>
                            <form>
                            <Row>
                                Accepted Card
                                <br />
                                <img src={image} alt="" className='images' />
                                <br /><br /><br/>
                            </Row>
                            <br/>
                            <Row>
                                Credit Card Number
                                <input type="text" name="" placeholder="Enter card number" />
                            </Row>
                            <br/>
                            <Row>
                                Expire Month
                                <input type="text" name="" placeholder="Enter month" />
                            </Row>
                            <br/>
                            <div id="Zip">
                                    <Row>
                                        <Col>
                                    <label>
                                        Expire Year
                                        <br />
                                        <select>
                                            <option>Choose Year..</option>
                                            <option>2022</option>
                                            <option>2023</option>
                                            <option>2024</option>
                                            <option>2025</option>
                                        </select>
                                    </label>
                                    </Col>
                                    <Col>
                                    <label>
                                        CVV
                                        <br/>
                                        <input type="number" name="" placeholder="CVV" />
                                    </label>
                                    </Col>
                                    </Row>
                                </div>
                            
                            </form>
                            <br/>
                            <Row>
                                <Col>
                                    <input type="checkbox" value="lsRememberMe" id="rememberMe" />
                                </Col>
                                <Col>
                                    <label for="rememberMe">If you select monthly or annually payment with card,you must save your card</label>
                                </Col>
                            </Row>
                            <br/><br/>
                            < Row>
                                    <Col>
                                        <button type='reset' className='primary__btn submit'>Delete</button>
                                    </Col>
                                    <Col>
                                        <button type='edit' className='primary__btn submit'>Edit</button>
                                    </Col>
                                    <Col>
                                        <button type='submit' className='primary__btn submit'>Submit</button>
                                    </Col>
                            </ Row>
                        </Col>
                    </Row>
                </header>
            </div>
        </Container>
    </section>
</body>

    )


}

export default PaymentGateway ;