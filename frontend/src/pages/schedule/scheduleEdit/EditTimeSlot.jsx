import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../../../App.css'
import '../../../Styles/schedule/schedule.css'
import { Container, Row, Col } from 'reactstrap'
import image from '../../../images/Schedule/image2.jpg'
import { AiFillCalendar } from "react-icons/ai";

const EditTimeSlot = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <body>
            <section >
                <Container>
                    <div className="form">
                        <div className="title code">change timeslot for oneday</div>

                        <div className="inputs">
                            <form action="">
                                <Row>
                                    <img src={image} alt="" className='images' />
                                </Row>
                                <br />
                                <Row>
                                    <Col lg='4'>
                                        <label for="day">Date  :</label>
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
                                        <label for="timeslot">Current Time Slot  :</label>
                                    </Col>
                                    <Col>
                                        <input type="text" name='token' value="9.00pm - 11pm" className='' disabled />
                                    </Col>
                                </ Row>
                                <br />
                                <Row>
                                    <Col lg='4'>
                                        <label for="timeslot">New Time Slot  :</label>
                                    </Col>
                                    <Col>
                                        {/* Should change with payment id */}
                                        <div className="select">
                                            <select name="timeslot" className="timeslot">
                                                <option value="810">8.00pm - 10.00pm</option>
                                                <option value="911">9.00pm - 11.00pm</option>
                                                <option value="1012">10.00pm - 12.00pm</option>
                                            </select>
                                        </div>
                                    </Col>
                                </ Row>
                                <br />


                                <br />
                                < Row>
                                    <Col lg='10' className='cancel'>
                                        <button type='reset' className='secondary__btn '>Cancel</button>
                                    </Col>
                                    <Col>
                                        <button type='submit' className='primary__btn submit'>Save</button>
                                    </Col>
                                </ Row>
                            </form>
                        </div>
                    </div>
                </Container >
            </section >
        </body>
    )
}

export default EditTimeSlot;