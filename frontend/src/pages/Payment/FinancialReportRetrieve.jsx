import React from 'react'
import { Container, Row, Col, Table } from 'reactstrap'
import '../../App.css'
import '../../Styles/Payment/payment.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiFillCalendar, AiOutlineSearch } from "react-icons/ai";

const FinancialReportRetrieve = () => {
    return (
        <section>
            <Container>
                <div className="title code">Retrieve Financial Reports</div>
                <br />
                <Row>
                    <Col>
                        <Row>
                            <Col lg='3'>
                                <label for="from">From :</label>
                            </Col>
                        
                             <Col>
                                <AiFillCalendar className="i" />
                            </Col> 
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col lg='2'>
                                <label for="to">to :</label>
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
                                Report Category
                            </th>
                            <th>
                                Dates
                            </th>
                            <th>
                                Buttons
                            </th>
                        </thead>
                        <tbody>
                            <tr >
                                <td> <div className="select">:
                                            <select name="Category" id="Report">
                                                <option value="810">Income Reports</option>
                                                <option value="911">Package Payment Reports</option>
                                                <option value="1012">Supplement Sales Reports</option>
                                            </select>
                                        </div></td>
                                <td>03/01/2023</td>
                                <td><button className='edit_btn '>Read</button>
                                    <button className='edit_btn '>Print</button>
                                    <button className='edit_btn '>Edit</button>
                                    <button className='edit_btn '>Delete</button>
                                </td>
                            </tr>
                            <tr >
                            <td> <div className="select">:
                                            <select name="Category" id="Reports">
                                                <option value="810">Outgoing Reports</option>
                                                <option value="911">Salary Reports</option>
                                                <option value="1012">Supplier Payment Reports</option>
                                            </select>
                                        </div></td>
                                <td>03/01/2023</td>
                                <td><button className='edit_btn '>Read</button>
                                    <button className='edit_btn '>Print</button>
                                    <button className='edit_btn '>Edit</button>
                                    <button className='edit_btn '>Delete</button>
                                </td>
                            </tr>
                            <tr >
                            <td> <div className="select">:
                                            <select name="Category" id="Reports">
                                                <option value="810">Net Income Reports</option>
                                                <option value="911">2022</option>
                                                <option value="1012">2021</option>
                                                <option value="1012">2020</option>
                                            </select>
                                        </div></td>
                                <td>03/01/2023</td>
                                <td><button className='edit_btn '>Read</button>
                                    <button className='edit_btn '>Print</button>
                                    <button className='edit_btn '>Edit</button>
                                    <button className='edit_btn '>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
                <Row>
                <button className='edit_btn '>Insert Reports</button>
                </Row>
            </Container>
        </section>
    )
}


export default FinancialReportRetrieve;