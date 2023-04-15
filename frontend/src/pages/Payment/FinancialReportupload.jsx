import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../App.css'
import '../../Styles/Payment/payment.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiFillCalendar } from "react-icons/ai";
import image from '../../images/Payment/gym2.jpg'

const FinancialReport = () => {
    return (
        <body>
            <section >
                <Container>
                    <div className="form">
                        <div className="title code">Upload Financial Reports</div>
                        <br />
                        <div className="inputs">
                            <form action="">
                                <Row>
                                    <img src={image} alt="" className='images' />
                                </Row>
                                <br />
                                <Row>
                                    <Col lg='4'>
                                        <label for="day">Select Date  :</label>
                                    </Col>
                                    <Col>
                                        <AiFillCalendar className="i" />
                                    </Col>
                                </Row>
                                <br />
                                < Row>
                                    <Col lg='4'>
                                        <label for="Report">Select Report Category  :</label>
                                    </Col>
                                    <Col>
                                        {/* Report category list */}
                                        <div className="select">:
                                            <select name="Category" id="Report">
                                                <option value="">Income Reports</option>
                                                <option value="">Package payment Reports</option>
                                                <option value="">Supplement Sales Reports</option>
                                                <option value="">Outgoing Reports</option>
                                                <option value="">Salary Reports</option>
                                                <option value="">Supplier payment Reports</option>
                                                <option value="">Net Income Reports</option>
                                                <option value="">2022</option>
                                                <option value="">2021</option>
                                                <option value="">2020</option>
                                            </select>
                                        </div>
                                        </Col>
                                </ Row>
                                <br />

                                <Row>
                                <form>
                                    <input type="file" id="file-upload" name="file-upload"></input>
                                    <button type='submit' className='primary__btn submit'>Uplode</button>
                                </form>
                                
                                </Row>
                                

                                <br />
                                < Row>
                                    <Col>
                                        <button type='cancle' className='primary__btn submit'>Cancle</button>
                                    </Col>
                                    <Col>
                                        <button type='save' className='primary__btn submit'>Save</button>
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

export default FinancialReport ;