import React, { useState } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import '../../App.css'

import { Container, Row, Col } from 'reactstrap'
import '../../Styles/schedule/Supplements/Placeorder.css'

import pic1 from '../../images/Supplements/img(8).jpg'




import { AiFillCalendar } from "react-icons/ai";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Placeorder = ()=>{
    const [startDate, setStartDate] = useState(new Date());
     return (
    <>       
            <body>
                <section >
                    <Container>
                    <div class="gallery">
  <a target="_blank" href="C:\ITP\ITP_Project__GYMLY\frontend\src\images\Supplements\img(8).jpg">
    <img src={pic1} alt="Sup" width="600" height="400"/>
  </a>
 
</div>


                        
                        <div className="form">
                            <div className="title code">place your order</div>
    
                            <div className="inputs">
                                <form action="">
                                   
                                    <Row>
                                        <Col lg='4'>
                                            <label for="day">Date:</label>
                                        </Col>
                                        <Col>
                                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                        </Col>
                                        <Col>
                                            <AiFillCalendar className="i" />
                                        </Col>
                                    </Row>
                                    <br />
                                    <Row>
                                        <Col lg='4'>
                                            <label for="timeslot">Select supplement amount:</label>
                                        </Col>
                                        <Col>
                                            <input type="text" name='token' value="1-10" className='' disabled />
                                        </Col>
                                    </ Row>
                                    <br />
                                    <Row>
                                        <Col lg='4'>
                                            <label for="timeslot">Select supplement type:</label>
                                        </Col>
                                        <Col>
                                            {/* Should change with payment id */}
                                            <div className="select">
                                                <select name="supplement type" className="supplement type">
                                                    <option value="810">typeA</option>
                                                    <option value="911">typeB</option>
                                                    <option value="1012">typeC</option>
                                                </select>
                                            </div>
                                        </Col>
                                    </ Row>
                                    <br />
    
    
                                    <br />
                                    < Row>
                                        <Col lg='10' className='cancel'>
                                            <button type='update' className='secondary__btn '>Scd ave</button>
                                        </Col>
                                        <Col>
                                            <button type='cancel' className='primary__btn submit'>cancel</button>
                                        </Col>
                                        
                                    </ Row>
                                </form>
                            </div>
                        </div>
                    </Container >
                </section >





            </body>
            </>
    )
    
    }
    
    export default Placeorder;