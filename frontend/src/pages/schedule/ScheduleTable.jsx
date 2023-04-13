import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'reactstrap'
import '../../Styles/schedule/schedule.css'
import '../../App.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiFillCalendar, AiOutlineSearch } from "react-icons/ai";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { showLoadingSpinner, hideLoadingSpinner } from '../../Components/Loading/Loading.js'



const ScheduleTable = () => {

    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    const [schedules, setSchedules] = useState([]);

    useEffect(() => {
        const fetchSchedules = async () => {
            try {
                showLoadingSpinner();
                const response = await axios.get("http://localhost:5000/schedules");
                setSchedules(response.data);
            } catch (error) {
                console.log('Error fetching schedules:', error);
            }

            hideLoadingSpinner();
        };
        fetchSchedules();
    }, []);

    const handleEdit = (id) => {
        navigate(`/changetimeslot/${id}`);
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/schedules/${id}`)
            .then(response => {

                console.log('Schedule deleted successfully');
                // Refresh the table to show updated data
                window.alert('Data has been deleted successfully');
                window.location.reload();

            })
            .catch(error => {

                console.log('Error deleting schedule:', error);

            });
    }

    return (
        <section>
            <Container>
                <div className="title code">Schedule Daily Training Time Slot</div>
                <br />
                <Row>
                    <Col>
                        <Row>
                            <Col lg='3'>
                                <label htmlFor="from">From :</label>
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
                                <label htmlFor="to">to :</label>
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
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>TimeSlot</th>
                                <th>Date</th>
                                <th>Instructor</th>
                                <th>Section</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {schedules.map((row) => (
                                <tr key={row._id}>
                                    <td>{row.dayscount}</td>
                                    <td>{row.timeslot}</td>
                                    <td>{row.date}</td>
                                    <td>{row.instructor}</td>
                                    <td>{row.section}</td>
                                    <td> <button className='edit_btn' onClick={() => handleEdit(row._id)}>edit</button></td>
                                    <td><button className='delete_btn' onClick={() => handleDelete(row._id)}>delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </section>
    )

}

export default ScheduleTable;