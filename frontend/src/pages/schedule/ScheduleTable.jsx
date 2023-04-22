import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Table } from 'reactstrap'
import '../../Styles/schedule/schedule.css'
import '../../App.css'
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineSearch } from "react-icons/ai";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { showLoadingSpinner, hideLoadingSpinner } from '../../Components/Loading/Loading.js'
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const ScheduleTable = () => {
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    const [schedules, setSchedules] = useState([]);
    const [tempData, setTempData] = useState(schedules);
    const tableRef = useRef(null);

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

    const handleGeneratePdf = () => {
        // initialize the PDF document
        const doc = new jsPDF();

        // add title to the PDF document
        doc.setFontSize(16);
        doc.text('Daily Training Schedules', 14, 22);
      
        // define the table columns
        const columns = [    
            { header: 'No', dataKey: 'dayscount' },    
            { header: 'TimeSlot', dataKey: 'timeslot' },    
            { header: 'Date', dataKey: 'date' },    
            { header: 'Instructor', dataKey: 'instructor' },    
            { header: 'Section', dataKey: 'section' }  
        ];
        
        // define the table rows
        const rows = schedules.map(schedule => ({
          dayscount: schedule.dayscount,
          timeslot: schedule.timeslot,
          date: schedule.date,
          instructor: schedule.instructor,
          section: schedule.section
        }));
        
        // add the table to the PDF document
        doc.autoTable(columns, rows);
        
        // save the PDF file
        doc.save('DailyTrainingSchedules.pdf');
    };
      

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


    const onSearchChange = (value) => {
        console.log(value);

        const newData = schedules.filter((sche) =>

            sche.date.toLocaleLowerCase().includes(value.toLocaleLowerCase())

        );
        console.log(newData);
        setTempData(newData);


    }


    return (
        <section>
            <Container>
                <div className="title code">Schedule Daily Training Time Slot</div>
                <br />
                <Row>
                    <Col>
                        <input type="button" className="tertiary_btn" value="Generate a report" onClick={handleGeneratePdf} />
                    </Col>
                    <Col>
                        <Row>

                            <Col>
                                <a href="/changeinstrutor/" target="_blank" className="tertiary_btn">Change Instructor</a>
                            </Col>

                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <input
                                    type="search"
                                    className='search'
                                    placeholder="Search"
                                    onChange={(e) => onSearchChange(e.target.value)}
                                />

                            </Col>
                            <Col>
                                <AiOutlineSearch className="i" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <br />

                <Row>
                    <div>

                        <Table dark striped bordered hover responsive>

                            <tbody>
                                {tempData.map((row, index) => (
                                    <tr key={row.index}>
                                        <td>{row.dayscount}</td>
                                        <td>{row.timeslot}</td>
                                        <td>{row.date}</td>
                                        <td>{row.instructor}</td>
                                        <td>{row.section}</td>
                                        <td>
                                            <button className='edit_btn' onClick={() => handleEdit(row._id)}>edit</button>
                                        </td>
                                        <td>
                                            <button className='delete_btn' onClick={() => handleDelete(row._id)}>delete</button>
                                        </td>


                                    </tr>
                                ))}
                            </tbody>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>TimeSlot</th>
                                    <th>Date</th>
                                    <th>Instructor</th>
                                    <th>Section</th>
                                    
                                        <> <th>Edit</th>
                                            <th>Delete</th>

                                        </>
                                    
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
                                        
                                            <>
                                                <td>
                                                    <button className='edit_btn' onClick={() => handleEdit(row._id)}>edit</button>
                                                </td>
                                                <td>
                                                    <button className='delete_btn' onClick={() => handleDelete(row._id)}>delete</button>
                                                </td>
                                            </>
                                        
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                    </div>
                </Row>
            </Container>
        </section>
    )

}

export default ScheduleTable;