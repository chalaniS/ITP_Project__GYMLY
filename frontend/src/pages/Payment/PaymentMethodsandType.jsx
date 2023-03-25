import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../App.css'
import image from '../../images/Schedule/image3.jpg'

const PaymentMethodsandType = () => {
    return (
        <body>
            <section >
                <Container>
                    <div className="form">
                        <div className="title code">request to change instructor</div>
                        <br />
                        <div className="inputs">
                            <form action="">
                                <Row>
                                    <img src={image} alt="" className='images' />
                                </Row>
                                <br />
                                <Row>
                                    <Col lg='4'>
                                        <label for="UserId">Membership ID  :</label>
                                    </Col>
                                    <Col>
                                        <input type="text" name='token' value="S10236" disabled />
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col lg='4'>
                                        <label for="currentInstructor">Current fitness Instructor  :</label>
                                    </Col>
                                    <Col>
                                        <input type="text" name='token' value="Mr. Perera" disabled />
                                    </Col>
                                </ Row>
                                <br />
                                < Row>
                                    <Col lg='4'>
                                        <label for="instructor">request fitness Instructor  :</label>
                                    </Col>
                                    <Col>
                                        {/* need instructor list */}
                                        <div className="select">:
                                            <select name="instructor" id="timeslot">
                                                <option value="vije">mr.vije kulasuruya</option>
                                                <option value="kanthi">kanthi</option>
                                                <option value="wimalasiri">wimalasiri</option>
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
                                    <Col >
                                        <label for="Weekday"></label>
                                        <textarea cols={35} rows={4} class=" " name="reason" placeholder='Enter reason for this request' > </textarea>

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

export default PaymentMethodsandType