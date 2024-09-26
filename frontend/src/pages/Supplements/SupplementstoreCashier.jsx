import React, { useState } from 'react'
import { Container, Row, Col, Table } from 'reactstrap'
import '../../App.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiFillCalendar, AiOutlineSearch } from "react-icons/ai";


const SupplementstoreCashier =() =>{
    const [startDate, setStartDate] = useState(new Date());
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
                                <DatePicker className='calender' selected={startDate} onChange={(date) => setStartDate(date)} />
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
                             Date
                             Date
                             Date
                            </th>
                            <th>
                                Client name
                                Client name
                                Client name
                                Client name
                            </th>
                            <th>
                                Supplement type
                                Supplement type
                                Supplement type
                                Supplement type
                            </th>
                            <th>
                                Price
                                Price
                                Price
                                Price
                            </th>
                            <th>
                                Quantity 
                                Quantity
                                Quantity
                                Quantity

                            </th>
                            <th>
                            Ready
                            Ready
                            Ready
                            Ready

                            </th>
                            <th>
                                Out of stock
                                Out of stock
                                Out of stock
                                Out of stock
                            </th>
                            <th>
                                Completed
                                Completed
                                Completed
                                Completed
                            </th>
                        </thead>
                        
                    </Table>


                </Row>

        




        </Container>
        </section>
    )
}
export default SupplementstoreCashier;