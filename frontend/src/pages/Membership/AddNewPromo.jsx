import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../../App.css'
import '../../Styles/Membership/Membership.css'
import '../../Styles/schedule/schedule.css'
import { Container, Row, Col } from 'reactstrap'
import { AiFillCalendar } from "react-icons/ai";

const AddNewPromo = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <body>
            <section >
                <Container>
                    <div className="title code">New Promo Packages Creation</div>
                    <br />
                    <div className="pkg_inputs">
                        <form class="" method="" action="">
                            <Row>
                                <Col lg='4'>
                                    <label for="currentInstructor">Package Name :</label>
                                </Col>
                                <Col>
                                    <input type="text" name='token'/>
                                </Col>
                            </ Row>
                            <br />
                            <Row>
                                <Col lg='4'>
                                    <label for="UserId">Package Details  :</label>
                                </Col>
                                <Col>
                                    <textarea cols={100} rows={5} class=" " name="reason"></textarea>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col lg='4'>
                                    <label for="currentInstructor">Package Price :</label>
                                </Col>
                                <Col>
                                    <input type="text" name='token'/>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col lg='4'>
                                    <label for="day">Package Validity  :</label>
                                </Col>
                                <Col>
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                </Col>
                                <Col>
                                    <AiFillCalendar className="i" />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg='10' className='cancel'>
                                    <button type='reset' className='secondary__btn'>Create</button>
                                </Col>
                                <Col>
                                    <button type='submit' className='primary__btn submit'>Cancel</button>
                                </Col>
                            </ Row>
                        </form>
                    </div>
                </Container >
            </section >
        </body>
    )
}

export default AddNewPromo