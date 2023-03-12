import React, { useState } from 'react'
import { Container, Row, Col, Table } from 'reactstrap'
import '../../Styles/Membership/Membership.css'
import '../../App.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiFillCalendar, AiOutlineSearch } from "react-icons/ai";

const PromoApproval = () => {

    const [startDate, setStartDate] = useState(new Date());
    return (
        <section>
            <Container>
                <div className="title code">Promo Package Approvals</div>
                <br />
                <Row>
                    <Col>
                        <Row>
                            <Col lg='3'>
                                <label for="from">From :</label>
                            </Col>
                            <Col>
                                <DatePicker className='calender' selected={startDate} onChange={(date) => setStartDate(date)} />
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col lg='2'>
                                <label for="to">to :</label>
                            </Col>
                            <Col>
                                <DatePicker className='calender' selected={startDate} onChange={(date) => setStartDate(date)} />
                            </Col>
                            <Col>
                                <AiFillCalendar className="i" />
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col> <input type="text" className='search' value="" /></Col>
                            <Col> <AiOutlineSearch className="i" /></Col>
                        </Row>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Table dark striped bordered hover responsive>
                        <thead >
                            <th>
                                Date
                            </th>
                            <th>
                                Package ID
                            </th>
                            <th>
                                Package Name
                            </th>
                            <th>
                                Details
                            </th>
                            <th>
                                Price
                            </th>
                            <th>
                                Validity
                            </th>
                            <th>
                                Approve
                            </th>
                            <th>
                                Reject
                            </th>
                        </thead>
                        <tbody>
                            <tr >
                                <td>06/03/2023</td>
                                <td>PROMO#123</td>
                                <td>New Year Promo Package</td>
                                <td>Weekday traning sessions,<br />1 Kg supplement package included</td>
                                <td>LKR 2500</td>
                                <td>30/04/2023</td>
                                <td><button className='approve_btn '>Approve</button></td>
                                <td><button className='reject_btn '>Reject</button></td>
                            </tr>
                            <tr>
                                <td>06/03/2023</td>
                                <td>PROMO#123</td>
                                <td>New Year Promo Package</td>
                                <td>Weekday traning sessions,<br />1 Kg supplement package included</td>
                                <td>LKR 2500</td>
                                <td>30/04/2023</td>
                                <td><button className='approve_btn '>Approve</button></td>
                                <td><button className='reject_btn '>Reject</button></td>
                            </tr>
                            <tr>
                                <td>06/03/2023</td>
                                <td>PROMO#123</td>
                                <td>New Year Promo Package</td>
                                <td>Weekday traning sessions,<br />1 Kg supplement package included</td>
                                <td>LKR 2500</td>
                                <td>30/04/2023</td>
                                <td><button className='approve_btn '>Approve</button></td>
                                <td><button className='reject_btn '>Reject</button></td>
                            </tr>
                            <tr >
                                <td>06/03/2023</td>
                                <td>PROMO#123</td>
                                <td>New Year Promo Package</td>
                                <td>Weekday traning sessions,<br />1 Kg supplement package included</td>
                                <td>LKR 2500</td>
                                <td>30/04/2023</td>
                                <td><button className='approve_btn '>Approve</button></td>
                                <td><button className='reject_btn '>Reject</button></td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
                <Row>
                    <Col>
                        <button type='' className='primary__btn submit'>Generate Report</button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PromoApproval