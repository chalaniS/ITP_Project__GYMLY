import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../Styles/Payment/payment.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiFillCalendar } from "react-icons/ai";
import image from '../../images/Payment/Img2.jpg'

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
                                                <option value="vije">Income Reports</option>
                                                <option value="kanthi">Package payment Reports</option>
                                                <option value="wimalasiri">Supplement Sales Reports</option>
                                                <option value="vije">Outgoing Reports</option>
                                                <option value="kanthi">Salary Reports</option>
                                                <option value="wimalasiri">Supplier payment Reports</option>
                                                <option value="vije">Net Income Reports</option>
                                                <option value="kanthi">2022</option>
                                                <option value="wimalasiri">2021</option>
                                                <option value="wimalasiri">2020</option>
                                            </select>
                                        </div>
                                    </Col>
                                </ Row>
                                <br />

                                <Row>
                                <form>
                                    <label for="file-upload">Choose a file:</label>
                                    <input type="file" id="file-upload" name="file-upload"></input>
                                    <button type='submit'className='primary__btn submit'>Upload</button>
                                </form>
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

export default FinancialReport