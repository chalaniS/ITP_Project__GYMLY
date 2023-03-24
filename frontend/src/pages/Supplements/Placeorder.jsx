import React from 'react'
import "react-datepicker/dist/react-datepicker.css";
import '../../App.css'

import { Container, Row, Col } from 'reactstrap'
import { AiFillCalendar } from "react-icons/ai";

const placeorder = ()=>{
    return (
    <>        <div>placeorder</div>
            <body>
                <section >
                    <Container>
                        <div className="form">
                            <div className="title code">place your order</div>
    
                            <div className="inputs">
                                <form action="">
                                    <Row>
                                        {/* <img src='{image}' alt="" className='images' /> */}
                                    </Row>
                                    <br />
                                    <Row>
                                        <Col lg='4'>
                                            <label for="day">Date  :</label>
                                        </Col>
                                        <Col>
                                            {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                                        </Col>
                                        <Col>
                                            <AiFillCalendar className="i" />
                                        </Col>
                                    </Row>
                                    <br />
                                    <Row>
                                        <Col lg='4'>
                                            <label for="timeslot">Select supplement type  :</label>
                                        </Col>
                                        <Col>
                                            <input type="text" name='token' value="ABC-CDE" className='' disabled />
                                        </Col>
                                    </ Row>
                                    <br />
                                    <Row>
                                        <Col lg='4'>
                                            <label for="timeslot">Select supplement type :</label>
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
                                            <button type='update' className='secondary__btn '>update</button>
                                        </Col>
                                        <Col>
                                            <button type='cancel' className='primary__btn submit'>cancel</button>
                                        </Col>
                                        <Col>
                                            <button type='save' className='primary__btn submit'>save</button>
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
    
    export default placeorder;