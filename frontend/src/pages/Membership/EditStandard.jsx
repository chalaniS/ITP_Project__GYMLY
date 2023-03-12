import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import '../../App.css'
import '../../Styles/Membership/Membership.css'
// import {FaMailBulk,FaUserAlt} from 'react-icons/fa';
import '../../Styles/schedule/schedule.css'
import { Container, Row, Col } from 'reactstrap'
import image from '../../images/Membership/image7.jpg'
// import { AiFillCalendar } from "react-icons/ai";

const EditStandard = () => {
    return (
        <body>
            <section >
                <Container>
                    <div className="title code">Edit Platinum Package</div>
                    <br />
                    <div className="pkg_inputs">
                        <form class="" method="" action="">
                            <Row>
                                <img src={image} alt="" className='' />
                            </Row>
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
                            </ Row>
                            <br />
                            <Row>
                                <Col lg='10' className='cancel'>
                                    <button type='reset' className='secondary__btn'>Cancel</button>
                                </Col>
                                <Col>
                                    <button type='submit' className='primary__btn submit'>Save</button>
                                </Col>
                            </ Row>
                        </form>
                    </div>
                </Container >
            </section >
        </body>
    )
}

export default EditStandard