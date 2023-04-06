import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../Styles/schedule/schedule.css'
import '../../App.css'
import image from '../../images/Schedule/image1.jpg'
import Axios from 'axios'


const Schedule = ({ paymentID }) => {

    const [timeslot, setTimeslot] = useState('');
    const [instructor, setInstructor] = useState('');
    const [section, setSection] = useState('');

    const addToList = () => {

        console.log(timeslot + instructor + section);

        Axios.post(
            "http://localhost:5000/insert",
            {
                timeslot: timeslot,
                instructor: instructor,
                section: section
            });


    };

    // const addToList = () => {
    //     console.log(timeslot + instructor + section);

    //     Axios.post("http://localhost:5000/insert", {
    //         params: {
    //             timeslot: timeslot,
    //             instructor: instructor,
    //             section: section
    //         }
    //     });
    // };


    return (
        <body id='Body'>
            <section >
                <Container>
                    <div className="form">
                        <div className="title code">Schedule Daily Training Time Slot</div>

                        <div className="inputs">
                            <form onSubmit={addToList}>
                                <Row>
                                    <img src={image} alt="" className='images' />
                                </Row>
                                <br />
                                <Row>
                                    <Col lg='4'>
                                        <label for="token">Payment Token  :</label>
                                    </Col>
                                    <Col>
                                        <input type="text" name='token' value="X10236" className='' disabled />
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
                                            <select name="timeslot" className="timeslot" onChange={(event) => setTimeslot(event.target.value)} value={timeslot}>
                                                <option value="8-10">8.00pm - 10.00pm</option>
                                                <option value="9-11">9.00pm - 11.00pm</option>
                                                <option value="10-12">10.00pm - 12.00pm</option>
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
                                            <select name="instructor" id="timeslot" onChange={(event) => setInstructor(event.target.value)} value={instructor}>
                                                <option value="vije">mr.vije kulasuruya</option>
                                                <option value="kanthi">kanthi</option>
                                                <option value="wimalasiri">wimalasiri</option>
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
                                            <input type="radio" class="Weekend radio" name="section" value="Weekend" onChange={(event) => setSection(event.target.value)} /> Weekend
                                        </label>
                                    </Col>
                                    <Col >
                                        <label for="Weekday">
                                            <input type="radio" class="Weekday radio" name="section" value="Weekday" onChange={(event) => setSection(event.target.value)} /> Weekday
                                        </label>
                                    </Col>
                                </Row>
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

export default Schedule;