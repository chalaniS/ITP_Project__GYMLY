<<<<<<< HEAD
import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../Styles/schedule/schedule.css'
import '../../App.css'
import image from '../../images/Schedule/image1.jpg'
import Axios from 'axios'
import { showLoadingSpinner, hideLoadingSpinner } from '../../Components/Loading/Loading.js'

const API_URL = 'http://localhost:5000/schedules';

const addToList = async (packageDays, dates, timeslot, instructor, section) => {

    showLoadingSpinner();

    try {
        const promises = [];

        for (let daysCount = 1; daysCount <= packageDays; daysCount++) {
            promises.push(
                Axios.post(API_URL, {
                    dayscount: daysCount,
                    timeslot: timeslot,
                    date: dates,
                    instructor: instructor,
                    section: section,
                })
            );
        }

        await Promise.all(promises);
        hideLoadingSpinner();
        window.alert('Data has been inserted successfully');
        window.location = "http://localhost:3000/trainings";
        console.log('Successfully added to list');
    } catch (error) {
        console.log(error);
    }
};



const Schedule = ({ pdays }) => {

    const [timeslot, setTimeslot] = useState('');
    const [instructor, setInstructor] = useState('');
    const [section, setSection] = useState('');

    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US');
    console.log(formattedDate);

    let packageDays = 10;

    return (
        <body id='Body'>
=======
import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../Styles/schedule/schedule.css'
import '../../App.css'
import DatePicker from "react-datepicker";
import image from '../../images/Schedule/image1.jpg'



const Schedule = ({ paymentID }) => {
    return (
        <body>

>>>>>>> origin/Sujithra
            <section >
                <Container>
                    <div className="form">
                        <div className="title code">Schedule Daily Training Time Slot</div>

                        <div className="inputs">
<<<<<<< HEAD
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    addToList(packageDays, formattedDate, timeslot, instructor, section);
                                }}
                            >
                                {/* <Row>
                                    <img src={image} alt="" className='images' />
                                </Row> */}
=======
                            <form action="">
                                <Row>
                                    <img src={image} alt="" className='images' />
                                </Row>
>>>>>>> origin/Sujithra
                                <br />
                                <Row>
                                    <Col lg='4'>
                                        <label for="token">Payment Token  :</label>
                                    </Col>
                                    <Col>
<<<<<<< HEAD
                                        <input type="text" name='token' value="X10236" className='' disabled required />
=======
                                        <input type="text" name='token' value="X10236" className='' disabled />
>>>>>>> origin/Sujithra
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col lg='4'>
                                        <label for="timeslot">Select Time Slot  :</label>
                                    </Col>
                                    <Col>
                                        {/* Should change with payment id */}
                                        <div className="select">
<<<<<<< HEAD
                                            <select name="timeslot" className="timeslot" onChange={(event) => setTimeslot(event.target.value)} value={timeslot} required>
                                                <option value="0-0">Select TimeSlot </option>
                                                <option value="8.00pm - 10.00pm">8.00pm - 10.00pm</option>
                                                <option value="9.00pm - 11.00pm">9.00pm - 11.00pm</option>
                                                <option value="10.00pm - 12.00pm">10.00pm - 12.00pm</option>
=======
                                            <select name="timeslot" className="timeslot">
                                                <option value="810">8.00pm - 10.00pm</option>
                                                <option value="911">9.00pm - 11.00pm</option>
                                                <option value="1012">10.00pm - 12.00pm</option>
>>>>>>> origin/Sujithra
                                            </select>
                                        </div>
                                    </Col>
                                </ Row>
                                <br />
                                < Row>
                                    <Col lg='4'>
                                        <label for="instructor">Select the fitness Instructor  :</label>
                                    </Col>
                                    <Col>
                                        <div className="select">:
<<<<<<< HEAD
                                            <select name="instructor" id="timeslot" onChange={(event) => setInstructor(event.target.value)} value={instructor} required>
                                                <option value="none">Select Instructor</option>
                                                <option value="Vije Kulasuruya">Vije Kulasuruya</option>
                                                <option value="Kumara Darmasena">Kumara Darmasena</option>
                                                <option value="Ranil Wimalasiri">Ranil Wimalasiri</option>
                                                <option value="Mahinda Rajapaksha">Mahinda Rajapaksha</option>
                                                <option value="Suraweera Sirisena">Suraweera Sirisena</option>
                                                <option value="Namal Wijerathna">Namal Wijerathna</option>
=======
                                            <select name="instructor" id="timeslot">
                                                <option value="810">mr.vije kulasuruya</option>
                                                <option value="911">kanthi</option>
                                                <option value="1012">wimalasiri</option>
>>>>>>> origin/Sujithra
                                            </select>
                                        </div>
                                    </Col>
                                    <Col>
                                        {/* navigate instructor rationpage */}
                                        <button className='tertiary_btn'>Check Instructor's Ratings</button>
                                    </Col>
                                </ Row>
                                <br />
                                <Row>
                                    <Col lg='4'>
                                        <label for="section">Section : </label>
                                    </Col>
                                    <Col lg='2'>
                                        <label for="Weekend">
<<<<<<< HEAD
                                            <input type="radio" class="Weekend radio" name="section" value="Weekend" onChange={(event) => setSection(event.target.value)} /> Weekend
=======
                                            <input type="radio" class="Weekend radio" name="section" value="Weekend" checked /> Weekend
>>>>>>> origin/Sujithra
                                        </label>
                                    </Col>
                                    <Col >
                                        <label for="Weekday">
<<<<<<< HEAD
                                            <input type="radio" class="Weekday radio" name="section" value="Weekday" onChange={(event) => setSection(event.target.value)} /> Weekday
=======
                                            <input type="radio" class="Weekday radio" name="section" value="Weekday" /> Weekday
>>>>>>> origin/Sujithra
                                        </label>
                                    </Col>
                                </Row>
                                <br />
                                < Row>
                                    <Col lg='10' className='cancel'>
<<<<<<< HEAD
                                        <button type='reset' className='secondary__btn '>Reset</button>
=======
                                        <button type='reset' className='secondary__btn '>Cancel</button>
>>>>>>> origin/Sujithra
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

export default Schedule;