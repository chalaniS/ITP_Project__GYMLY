import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../Styles/schedule/schedule.css'
import '../../App.css'
import image from '../../images/Schedule/image1.jpg'


const Schedule = ({ paymentID }) => {
    return (
        <body id='Body'>

            <section >
                <Container>
                    <div className="form">
                        <div className="title code">Schedule Daily Training Time Slot</div>

                        <div className="inputs">
                            <form action="">
                                <Row>
                                    <img src={image} alt="" className='images' />
                                </Row>
                                <br />
                                <Row>
                                    <Col lg='4'>
                                        <label for="token">Payment Token  :</label>
                                    </Col>
                                    <Col>
                                        <input type="text" name='token' value="X10236" className='' disabled />
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col lg='4'>
                                        <label for="timeslot">Select Time Slot  :</label>
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
                                < Row>
                                    <Col lg='4'>
                                        <label for="instructor">Select the fitness Instructor  :</label>
                                    </Col>
                                    <Col>
                                        <div className="select">:
                                            <select name="instructor" id="timeslot">
                                                <option value="810">mr.vije kulasuruya</option>
                                                <option value="911">kanthi</option>
                                                <option value="1012">wimalasiri</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col>
                                        {/* navigate instructor rationpage */}
                                        <button className='tertiary_btn'>Check Instructor's Ratings</button>
                                    </Col>
                                </ Row>
                                <br />
                                <Row>
                                    <Col lg='4'>
                                        <label for="section">Section : </label>
                                    </Col>
                                    <Col lg='2'>
                                        <label for="Weekend">
                                            <input type="radio" class="Weekend radio" name="section" value="Weekend" checked /> Weekend
                                        </label>
                                    </Col>
                                    <Col >
                                        <label for="Weekday">
                                            <input type="radio" class="Weekday radio" name="section" value="Weekday" /> Weekday
                                        </label>
                                    </Col>
                                </Row>
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

export default Schedule;