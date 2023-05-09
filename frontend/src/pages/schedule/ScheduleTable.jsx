import React, { useState } from 'react'
import { Container, Row, Col, Table } from 'reactstrap'
import '../../Styles/schedule/schedule.css'
import '../../App.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiFillCalendar, AiOutlineSearch } from "react-icons/ai";

const ScheduleTable = () => {

    const [startDate, setStartDate] = useState(new Date());
    return (
        <section>
            <Container>
                <div className="title code">Schedule Daily Training Time Slot</div>
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
                    <Table light striped bordered hover responsive>
                        <thead >
                            <th>
                                No
                            </th>
                            <th>
                                Date
                            </th>
                            <th>
                                TimeSlot
                            </th>
                            <th>
                                Edit
                            </th>
                            <th>
                                Delete
                            </th>
                        </thead>
                        <tbody>
                            <tr >
                                <td>1</td>
                                <td>02/10/2023</td>
                                <td >02/10/2023</td>
                                <td><button className='edit_btn '>edit</button></td>
                                <td><button className='delete_btn '>delete</button></td>
                            </tr>
                            <tr >
                                <td>2</td>
                                <td>02/10/2023</td>
                                <td >02/10/2023</td>
                                <td><button className='edit_btn '>edit</button></td>
                                <td><button className='delete_btn '>delete</button></td>
                            </tr>
                            <tr >
                                <td>3</td>
                                <td>02/10/2023</td>
                                <td >02/10/2023</td>
                                <td><button className='edit_btn '>edit</button></td>
                                <td><button className='delete_btn '>delete</button></td>
                            </tr>
                            <tr >
                                <td>3</td>
                                <td>02/10/2023</td>
                                <td >02/10/2023</td>
                                <td><button className='edit_btn '>edit</button></td>
                                <td><button className='delete_btn '>delete</button></td>
                            </tr>
                        </tbody>
                    </Table>


                </Row>




            </Container>
        </section>
    )
}

export default ScheduleTable;