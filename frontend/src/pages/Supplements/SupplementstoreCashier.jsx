import React from 'react'
import { Container, Row, Col, Table } from 'reactstrap'
import '../../App.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiFillCalendar, AiOutlineSearch } from "react-icons/ai";
const SupplementstoreCashier =() =>{
    return(
        <section>
        <Container>
        <div>SupplementstorCashier</div>
        <br />
                <Row>
                    <Col>
                        <Row>
                            <Col lg='3'>
                                <label for="from">From :</label>
                            </Col>
                            <Col >
                                {/* <DatePicker className='calender' selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                            </Col>
                            {/* <Col>
                                <AiFillCalendar className="i" />
                            </Col> */}
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col lg='2'>
                                <label for="to">to :</label>
                            </Col>
                            <Col>
                                {/* <DatePicker className='calender' selected={startDate} onChange={(date) => setStartDate(date)} /> */}
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
                                Client name
                            </th>
                            <th>
                                Supplement type
                            </th>
                            <th>
                                Price
                            </th>
                            <th>
                                Quantity
                            </th>
                            <th>
                                Ready
                            </th>
                            <th>
                                Out of stock
                            </th>
                            <th>
                                Completed
                            </th>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Date</td>
                            <td>Person2</td>
                            <td>Type</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Ready</td>
                            <td>Person7</td>
                            <td>Comp</td>
                           
                            </tr>
                            <tr>
                            <td>Date</td>
                            <td>Person2</td>
                            <td>Type</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Ready</td>
                            <td>OOS</td>
                            <td>Comp</td>
                           
                            </tr>
                            <tr>
                            <td>Date</td>
                            <td>Person2</td>
                            <td>Type</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Ready</td>
                            <td>OOS</td>
                            <td>Comp</td>
                           
                            </tr>
                        </tbody>
                    </Table>


                </Row>

        

        </Container>
        </section>
    )
}

export default SupplementstoreCashier;