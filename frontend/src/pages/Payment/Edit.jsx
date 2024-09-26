import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../App.css';
import '../../Styles/Payment/payment.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AiFillCalendar } from 'react-icons/ai';
import image from '../../images/Payment/gym2.jpg';
import { useParams } from 'react-router-dom';
import { showLoadingSpinner, hideLoadingSpinner } from '../../Components/Loading/Loading.js';
import Axios from 'axios';

const FinancialReport = () => {
    const { id } = useParams();

    const [financialReportId, setFinancialReportId] = useState('');
    const [reportCatogery, setReportCatogery] = useState('');
    const [employeeID, setEmployeeId] = useState('');
    const [uploadedDate, setUploadedDate] = useState('');
    const [uploadedTime, setUploadedTime] = useState('');

    useEffect(() => {
        const fetchFinancialReport = async () => {
            try {
                showLoadingSpinner();
                const response = await Axios.get(`http://localhost:5000/payment453/${id}`);
                setFinancialReportId(response.financialReportId);
                setReportCatogery(response.reportCatogery)
                setEmployeeId(response.employeeID);
                setUploadedDate(response.uploadedDate);
                setUploadedTime(response.uploadedTime);
                console.log(response.data);
            } catch (error) {
                console.log('Error fetching financial report:', error);
            } finally {
                hideLoadingSpinner();
            }
        };

        fetchFinancialReport();
    }, [id]);


    const handleFormSubmit = (e) => {
        e.preventDefault();
        showLoadingSpinner();
        console.log({
            financialReportId,
            reportCatogery,
            employeeID,
            uploadedDate,
            uploadedTime,
        });

        // Send the updated data to the server using an API call
        Axios.put(`http://localhost:5000/payment453/${id}`, {
            financialReportId,
            reportCatogery,
            employeeID,
            uploadedDate,
            uploadedTime,
        })
            .then((response) => {
                console.log(response);
                hideLoadingSpinner();
                window.alert('Data has been updated successfully');
                window.location = 'http://localhost:3000/FinancialReportGenerate';
                console.log('Successfully updated list');
            })
            .catch((error) => {
                console.log(error);
                console.log('error when updating the data');
                window.alert('Data was not updated successfully');
                window.location.reload();
            });
    };




    return (
        <body>
            <section>
                <Container>
                    <div className="form">
                        <div className="title code">Edit Financial Reports</div>
                        <br />
                        <div className="inputs">
                            <form onSubmit={handleFormSubmit}>
                                <Row>
                                    <img src={image} alt="" className="images" />
                                </Row>
                                <br />

                                <Row>
                                    <Col lg="4">
                                        <label htmlFor="UploadedReport">FinancialReportId :</label>
                                    </Col>
                                    <Col>
                                        <input
                                            type="text"
                                            name=""
                                            placeholder="ReportID"
                                            value={financialReportId}
                                            onChange={(e) => setFinancialReportId(e.target.value)}
                                        />
                                    </Col>
                                </Row>
                                <br />
                                < Row>
                                    <Col lg='4'>
                                        <label for="Report">Select Report Category  :</label>
                                    </Col>
                                    <Col>
                                        {/* Report category list */}
                                        <div className="select">:
                                            <select name="Category" id="Report" onChange={(e) => setReportCatogery(e.target.value)} value={reportCatogery}>
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

                                <Row>
                                    <Col lg="4">
                                        <label htmlFor="UploadedReport">EmployeeID :</label>
                                    </Col>
                                    <Col>
                                        <input
                                            type="text"
                                            name=""
                                            placeholder="EmployeeID"
                                            value={employeeID}
                                            onChange={(e) => setEmployeeId(e.target.value)}
                                        />
                                    </Col>
                                </Row>
                                <br />

                                <Row>
                                    <Col lg="4">
                                        <label htmlFor="day">Select Date :</label>
                                    </Col>
                                    {/* <Col>
                    <AiFillCalendar className="i"  />
                  </Col> */}
                                    <Col>
                                        <DatePicker
                                            selected={uploadedDate}
                                            onChange={(uploadedDate) => setUploadedDate(uploadedDate)}
                                            dateFormat="yyyy/MM/dd"
                                        />
                                    </Col>
                                </Row>
                                <br />

                                <Row>
                                    <Col lg="4">
                                        <label htmlFor="payment-time">Payment Time:</label>
                                    </Col>
                                    <Col>
                                        <input
                                            type="time"
                                            id="payment-time"
                                            name="payment-time"
                                            value={uploadedTime}
                                            onChange={(e) => setUploadedTime(e.target.value)}
                                        ></input>
                                    </Col>
                                </Row>
                                <br />

                                <Row>
                                    <Col>
                                        <button
                                            type="reset"
                                            className="primary__btn submit"

                                        >
                                            Cancel
                                        </button>
                                    </Col>
                                    <Col>
                                        <button
                                            type="submit"
                                            className="primary__btn submit"

                                        >
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

export default FinancialReport;
