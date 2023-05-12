import React, { useState, useEffect } from "react";
// import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../App.css'
import '../../Styles/Payment/payment.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiFillCalendar } from "react-icons/ai";
// import image from '../../images/Payment/gym2.jpg'
import { useParams } from "react-router-dom";
import Axios from "axios";
import { showLoadingSpinner, hideLoadingSpinner } from '../../Components/Loading/Loading.js'
import { parseISO, format } from 'date-fns';



const FinancialReportUpload = () => {


    const [FinancialReports,setFinancialReports] = useState("");
    const [ReportCatogery,setReportCatogery] = useState("");
    const [EmployeeID,setEmployeeID] = useState("");
    const [startDate, setStartDate] = useState("");
    const [timeSlot, setTimeSlot] = useState("");


    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        console.log('In handleFormSubmit');
        console.log(startDate + FinancialReports + ReportCatogery + EmployeeID + timeSlot);
    
        try {
          const response = await Axios.post(
            'http://localhost:5000/payment453/',
            {
                financialReportId: FinancialReports,
                reportCatogery: ReportCatogery,
                employeeID:EmployeeID,
                uploadedDate:startDate,
                uploadedTime:timeSlot
            }
          );
          console.log(response);
          window.alert('Data has been updated successfully');
          window.location= "http://localhost:3000/FinancialReportGenerate";
          console.log('Successfully inserted list');
        } catch (error) {
          console.log(error);
          console.log('error when update the data');
          window.alert('Data is insert unsuccessfully');
        }
      };


    return (
        <body>
            <section >
                <Container>
                    <div className="form">
                        <div className="title code">Upload Financial Reports</div>
                        <br />
                        <div className="inputs">
                            <form 
                            onSubmit={handleFormSubmit}>
                                {/* <Row>
                                    <img src={image} alt="" className='images' />
                                </Row>
                                <br /> */}

                                <Row>
                                <Col lg='4'>
                                    <label for="UploadedReport">FinancialReportId  :</label>
                                </Col>
                                <Col>
                                    <input type="text" name="" placeholder="ReportID" onChange={(event) => setFinancialReports(event.target.value)} value={FinancialReports}/>
                                </Col>
                                </Row>
                                <br/>

                                < Row>
                                    <Col lg='4'>
                                        <label for="Report">Select Report Category  :</label>
                                    </Col>
                                    <Col>
                                        {/* Report category list */}
                                        <div className="select">:
                                            <select name="Category" id="Report" onChange={(event) => setReportCatogery(event.target.value)} value={ReportCatogery}>
                                                <option value="Income Reports">Income Reports</option>
                                                <option value="Package payment Reports">Package payment Reports</option>
                                                <option value="Supplement Sales Reports">Supplement Sales Reports</option>
                                                <option value="Outgoing Reports">Outgoing Reports</option>
                                                <option value="Salary Reports">Salary Reports</option>
                                                <option value="Supplier payment Reports">Supplier payment Reports</option>
                                                <option value="Net Income Reports">Net Income Reports</option>
                                                <option value="2022">2022</option>
                                                <option value="2021">2021</option>
                                                <option value="2020">2020</option>
                                            </select>
                                        </div>
                                        </Col>
                                </ Row>
                                <br />

                                {/* <Row>
                                <Col lg='4'>
                                    <label for="UploadedReport">EmployeeID  :</label>
                                </Col>
                                <Col>
                                    <input type="text" name="" value="" placeholder="EmployeeID"/>
                                </Col>
                                </Row> */}
                                <Row>
                                <Col lg='4'>
                                    <label for="UploadedReport">EmployeeID  :</label>
                                </Col>
                                <Col>
                                    <input type="text" name="" placeholder="EmployeeID" onChange={(event) => setEmployeeID(event.target.value)} value={EmployeeID}/>
                                </Col>
                                </Row>
                                <br/>

                                <Row>
                                    <Col lg='4'>
                                        <label for="day">Select Date  :</label>
                                    </Col>
                                    <Col>
                                        <input type="date" className="calender" onChange={(event) => setStartDate(event.target.value)} value={startDate} />
                                    </Col>
                                </Row>
                                <br />

                                <Row>
                                     <Col lg='4'>
                                        <label for="payment-time">Payment Time:</label>
                                     </Col>
                                     <Col>
                                        <input type="time" id="payment-time" name="payment-time" onChange={(event) => setTimeSlot(event.target.value)} value={timeSlot}></input>
                                     </Col>
                                </Row>
                                <br/>

                                <Row>
                                <form>
                                    <input type="file" id="file-upload" name="file-upload"></input>
                                    {/* <button type='submit' className='primary__btn submit'>Uplode</button> */}
                                </form>   
                                </Row>
                                
                                <br />
                                < Row>
                                    <Col>
                                        <button type='cancle' className='primary__btn submit'>Cancle</button>
                                    </Col>
                                    <Col>
                                        <button type='save' className='primary__btn submit'>Submit</button>
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

export default FinancialReportUpload ;