import React, { useState } from 'react'
import { Container, Row, Col, Table } from 'reactstrap'
import '../../Styles/schedule/Supplements/Placeorder.css'
import '../../App.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiFillCalendar, AiOutlineSearch } from "react-icons/ai";

const Orderread = () => {

    const [startDate, setStartDate] = useState(new Date());
    return (
        <section>
            <Container>
                <div className="title code">Your Supplement Order</div>
                <br />
                <Row>
                    <Col>
                        <Row>
                            
                            
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            
                           
                            
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
                                No
                            </th>
                            <th>
                                  Date
                            </th>
                            <th>
                                  Supplement type 
                            </th>
                            <th>
                                 Quantity
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
                                <td >Type1</td>
                                <td >5</td>
                                <td><button className='edit_btn '>edit</button></td>
                                <td><button className='delete_btn '>delete</button></td>
                            </tr>
                            <tr >
                                <td>2</td>
                                <td>02/10/2023</td>
                                <td >Type1</td>
                                <td >5</td>
                                <td><button className='edit_btn '>edit</button></td>
                                <td><button className='delete_btn '>delete</button></td>
                            </tr>
                            <tr >
                                <td>3</td>
                                <td>02/10/2023</td>
                                <td >Type1</td>
                                <td >5</td>
                                <td><button className='edit_btn '>edit</button></td>
                                <td><button className='delete_btn '>delete</button></td>
                            </tr>
                            <tr >
                                <td>3</td>
                                <td>02/10/2023</td>
                                <td >Type1</td>
                                <td >5</td>
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

export default Orderread;