import React, { useState, useEffect } from "react";
// import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../App.css'
import '../../Styles/Payment/payment.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiFillCalendar } from "react-icons/ai";
// import image from '../../images/Payment/gym2.jpg'
import { useParams } from "react-router-dom";
import Axios from "axios";
import { showLoadingSpinner, hideLoadingSpinner } from '../../Components/Loading/Loading.js'
import { parseISO, format } from 'date-fns';

const PaymentGateway = () => {


    const [fullName,setfullName] = useState("");
    const [address,setaddress] = useState("");
    const [state,setstate] = useState("");
    const [zipCode, setzipCode] = useState("");
    const [paymentType, setpaymentType] = useState("");
    const [paymentMethod, setpaymentMethod] = useState("");
    const [creditcardNumber, setcreditcardNumber] = useState("");
    const [expireMonth, setexpireMonth] = useState("");
    const [expireYear, setexpireYear] = useState("");
    const [cvv, setcvv] = useState("");


    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        console.log('In handleFormSubmit');
        console.log(fullName+address+state+zipCode+paymentType+paymentMethod+creditcardNumber+expireMonth+expireYear+cvv);
    
        try {
          const response = await Axios.post(
            'http://localhost:5000/payment453/',
            {
                fullName:fullName,
                address:address,
                state:state,
                zipCode:zipCode,
                paymentType:paymentType,
                paymentMethod:paymentMethod,
                creditcardNumber:creditcardNumber,
                expireMonth:expireMonth,
                expireYear:expireYear,
                cvv:cvv
            }
          );
          console.log(response);
          window.alert('Data has been updated successfully');
        //   window.location= "http://localhost:3000/FinancialReportGenerate";
          console.log('Successfully inserted list');
        } catch (error) {
          console.log(error);
          console.log('error when update the data');
          window.alert('Data is insert unsuccessfully');
        }
      };

    return (
       <body>
         <section>
             <Container>
                 {/* <div class="form"> */}
                 <div class="title code">Payment Gateway</div>
                 {/* <br/><br/><br/><br/> */}
                 {/* <div class="">
                 <form>
                        <label for="radio-buttons">Select an option:</label>
                        <div id="radio-buttons">
                        <input type="radio" id="option1" name="option" value="option1" />
                        <label for="option1">Option 1</label><br>
                        <input type="radio" id="option2" name="option" value="option2" />
                        <label for="option2">Option 2</label><br>
                        <input type="radio" id="option3" name="option" value="option3" />
                        <label for="option3">Option 3</label><br>
                        </div>

                 </form> */}
                 {/* </div>  */}
                 {/* </div> */}

                 <br/><br/>

       <div class="form">
            <header>
                <Row>
                    <Col>
                        <Row>
                            <h3>Personal Details</h3>
                            <br/><br/><br/><br/>
                        </Row>
                        <br/>
                        <form onSubmit={handleFormSubmit}>
                            <Row>
                                Full Name
                                <input type="text" name="" placeholder="Enter name" onChange={(event) => setfullName(event.target.value)} value={fullName}/>
                            </Row>
                            <br/>
                            {/* <Row>
                                Email
                                <input type="text" name="" placeholder="Enter email" />
                            </Row>
                            <br/> */}
                            <Row>
                                Address
                                <input type="text" name="" placeholder="Enter address" onChange={(event) => setaddress(event.target.value)} value={address}/>
                            </Row>
                            <br/>
                            {/* <Row>
                                City
                                <input type="text" name="" placeholder="Enter city" />
                            </Row>
                            <br/> */}
                                <div id="Zip">
                                <Row>
                                   <Col>
                                    <label>
                                        State
                                        <br />
                                        <select onChange={(event) => setstate(event.target.value)} value={state}>
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
                                        <input type="number" name="" placeholder="zip code" onChange={(event) => setzipCode(event.target.value)} value={zipCode}/>
                                    </label>
                                </Col>
                                </Row>
                                </div>
                                <br/>   
                        
                       
                        
                        <Row>
                            <h3>Payment</h3>
                            <br/><br/><br/><br/>
                        </Row>
                        <br/>
                            
                            <Row>
                                <Col>
                                <Row><Col>Payment type</Col></Row>
                                <Row>
                                <div class="row custom-row">
                                <Col class="custom-col"><input type="radio" id="option1" name="option" value="option2" /></Col>
                                <Col class="custom-col"><label for="option1">Monthly</label></Col><br />
                                <Col class="custom-col"><input type="radio" id="option1" name="option" value="option3" /></Col>
                                <Col class="custom-col"><label for="option1">Annually</label></Col><br />
                                </div>
                                </Row>
                                </Col>

                                <Col>
                                <Row><Col>Payment method</Col></Row>
                                <Row>
                                <div class="row custom-row">
                                <Col class="custom-col"><input type="radio" id="option1" name="option" value="option2" /></Col>
                                <Col class="custom-col"><label for="option1">Cash</label></Col><br />
                                <Col class="custom-col"><input type="radio" id="option1" name="option" value="option3" /></Col>
                                <Col class="custom-col"><label for="option1">Card</label></Col><br />
                                </div>
                                </Row>
                                </Col>
                            </Row>
                            <Row>
                                Accepted Card
                                <br />
                                <img src={image} alt="" className='pay-img' />
                                <br /><br /><br/>
                            </Row>
                            <br/>
                            <Row>
                                Credit Card Number
                                <input type="text" name="" placeholder="Enter card number" onChange={(event) => setcreditcardNumber(event.target.value)} value={creditcardNumber}/>
                            </Row>
                            <br/>
                            <Row>
                                Expire Month
                                <input type="text" name="" placeholder="Enter month" onChange={(event) => setexpireMonth(event.target.value)} value={expireMonth}/>
                            </Row>
                            <br/>
                            <div id="Zip">
                                    <Row>
                                        <Col>
                                    <label>
                                        Expire Year
                                        <br />
                                        <select onChange={(event) => setexpireYear(event.target.value)} value={expireYear}>
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
                                        <input type="number" name="" placeholder="CVV" onChange={(event) => setcvv(event.target.value)} value={cvv}/>
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