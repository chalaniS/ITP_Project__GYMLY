<<<<<<< HEAD
import React, { useState } from 'react'
import { Container, Row, Col, Table } from 'reactstrap'
import '../../Styles/schedule/schedule.css'
import '../../App.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiFillCalendar, AiOutlineSearch } from "react-icons/ai";

const InstructorConfirmOM = () => {

    const [startDate, setStartDate] = useState(new Date());
    return (
        <section>
            <Container>
                <div className="title code">Instustor Change Requests</div>
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
                                Client Name
                            </th>
                            <th>
                                Current Trainer Name
                            </th>
                            <th>
                                Requested Trainer Name
                            </th>
                            <th>
                                Reason
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
                                <td>UserName</td>
                                <td>Trainer Name</td>
                                <td>Trainer Name</td>
                                <td >Reason for change</td>
                                <td><button className='edit_btn '>Approve</button></td>
                                <td><button className='delete_btn '>Reject</button></td>
                            </tr>


                        </tbody>
                    </Table>
                </Row>
            </Container>
        </section>
=======
import React from 'react'

const InstructorConfirmOM = () => {
    return (
        <div>InstructorConfirmOM</div>
>>>>>>> origin/Sujithra
    )
}

export default InstructorConfirmOM;