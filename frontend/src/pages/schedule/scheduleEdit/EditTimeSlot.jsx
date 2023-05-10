<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../../App.css";
import "../../../Styles/schedule/schedule.css";
import { Container, Row, Col } from "reactstrap";
import image from "../../../images/Schedule/image2.jpg";
import { AiFillCalendar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { showLoadingSpinner, hideLoadingSpinner } from '../../../Components/Loading/Loading.js'
import { parseISO, format } from 'date-fns';

const EditTimeSlot = () => {

    const { id } = useParams();
    const [startDate, setStartDate] = useState("");
    const [timeSlot, setTimeSlot] = useState("");
    const [schedule, setSchedule] = useState(null);


    useEffect(() => {
        showLoadingSpinner();
        const fetchSchedule = async () => {
            try {

                const response = await Axios.get(`http://localhost:5000/schedules/${id}`);
                setSchedule(response.data);
                setStartDate(response.date);
                setTimeSlot(response.timeslot);
                console.log(response.data);
            } catch (error) {
                console.log('Error fetching schedule:', error);
            }
            hideLoadingSpinner();
        };
        fetchSchedule();
    }, [id]);



    const handleFormSubmit = (event) => {

        event.preventDefault();

        console.log("In handleFormSubmit");
        console.log(startDate);
        showLoadingSpinner();

        // Send the updated data to the server using an API call
        Axios.put(`http://localhost:5000/schedules/${id}`, {
            timeSlot: timeSlot,
            date: startDate

        })
            .then(response => {
                console.log(response);
                hideLoadingSpinner();
                window.alert('Data has been updated successfully');
                window.location = "http://localhost:3000/trainings";
                console.log('Successfully updated list');
            })
            .catch(error => {
                console.log(error);
                console.log("error when update the data");
                window.alert('Data is not updated unsuccessfully');
                window.location.reload();
            });
    };

    return (
        <body>
            <section>
                <Container>
                    <div className="form">
                        <div className="title code">Change Time Slot for One Day</div>
                        <div className="inputs">
                            <form onSubmit={handleFormSubmit}>
                                <Row>
                                    <img src={image} alt="" className="images" />
                                </Row>
                                <br />
                                {/* <Row>
                                    <Col lg="4">
                                        <label htmlFor="instructor">Change Instructor:</label>
                                    </Col>
                                    <Col>
                                        <button className="tertiary_btn">
                                            Change Instructor Form
                                        </button>
                                    </Col>
                                </Row> */}
                                <br />
                                <Row>
                                    <Col lg="4">
                                        <label htmlFor="date">Date:</label>
                                    </Col>
                                    <Col>
                                        <input
                                            type="date"
                                            selected={startDate}
                                            onChange={(event) => setStartDate(event.target.value)}
                                            dateFormat="dd/MM/yyyy"
                                        />
=======
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../../../App.css'
import '../../../Styles/schedule/schedule.css'
import { Container, Row, Col } from 'reactstrap'
import image from '../../../images/Schedule/image2.jpg'
import { AiFillCalendar } from "react-icons/ai";

const EditTimeSlot = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <body>
            <section >
                <Container>
                    <div className="form">
                        <div className="title code">change timeslot for oneday</div>

                        <div className="inputs">
                            <form action="">
                                <Row>
                                    <img src={image} alt="" className='images' />
                                </Row>
                                <br />
                                <Row>
                                    <Col lg='4'>
                                        <label for="day">Date  :</label>
                                    </Col>
                                    <Col>
                                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
>>>>>>> origin/Sujithra
                                    </Col>
                                    <Col>
                                        <AiFillCalendar className="i" />
                                    </Col>
                                </Row>
                                <br />
                                <Row>
<<<<<<< HEAD
                                    <Col lg="4">
                                        <label htmlFor="timeslot">New Time Slot:</label>
                                    </Col>
                                    <Col>
                                        <div className="select">
                                            <select
                                                name="timeslot"
                                                className="timeslot"
                                                value={timeSlot}
                                                onChange={(event) => setTimeSlot(event.target.value)}
                                            >
                                                <option value="">Select Time Slot</option>
                                                <option value="8.00pm - 10.00pm">8.00pm - 10.00pm</option>
                                                <option value="9.00pm - 11.00pm">9.00pm - 11.00pm</option>
                                                <option value="10.00pm - 12.00pm">10.00pm - 12.00pm</option>
                                            </select>
                                        </div>
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col lg="10" className="cancel">
                                        <button
                                            type="reset"
                                            className="secondary__btn ">
                                            Reset
                                        </button>
                                    </Col>
                                    <Col>
                                        <button
                                            type="submit"
                                            className="primary__btn submit">
                                            Save
                                        </button>
                                    </Col>
                                </Row>
                            </form>
                        </div>
                    </div>
                </Container>
            </section>
        </body>
    );
};

export default EditTimeSlot;
=======
                                    <Col lg='4'>
                                        <label for="timeslot">Current Time Slot  :</label>
                                    </Col>
                                    <Col>
                                        <input type="text" name='token' value="9.00pm - 11pm" className='' disabled />
                                    </Col>
                                </ Row>
                                <br />
                                <Row>
                                    <Col lg='4'>
                                        <label for="timeslot">New Time Slot  :</label>
                                    </Col>
                                    <Col>
                                        {/* Should change with payment id */}
                                        <div className="select">
                                            <select name="timeslot" className="timeslot">
                                                <option value="810">8.00pm - 10.00pm</option>
                                                <option value="911">9.00pm - 11.00pm</option>
                                                <option value="1012">10.00pm - 12.00pm</option>
                                            </select>
                                        </div>
                                    </Col>
                                </ Row>
                                <br />


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

export default EditTimeSlot;
>>>>>>> origin/Sujithra
