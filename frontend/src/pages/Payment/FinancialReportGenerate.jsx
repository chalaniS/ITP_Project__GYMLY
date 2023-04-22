import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'reactstrap'
import '../../Styles/Payment/payment.css'
import '../../App.css'
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineSearch } from "react-icons/ai";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { showLoadingSpinner, hideLoadingSpinner } from '../../Components/Loading/Loading.js'
// import html2pdf from 'html2pdf';

// function isPdf() {
//     const userAgent = navigator.userAgent.toLowerCase();
//     return (userAgent.indexOf('firefox') > -1 || userAgent.indexOf('chrome') > -1);
// }

// function generatePDF() {
//     const element = document.getElementById('pdf-table');
//     const opt = {
//         margin: 0.3,
//         filename: 'Report Details.pdf',
//         image: { type: 'jpeg', quality: 0.98 },
//         html2canvas: { scale: 2 },
//         jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
//     };

    // html2pdf().set(opt).from(element).toPdf().get('pdf').then(function (pdf) {
    //     const pdfBlob = pdf.output('blob');
    //     const blobUrl = URL.createObjectURL(pdfBlob);
    //     window.open(blobUrl, '_blank');
    // });
// }


const FinancialReportGenerate = () => {
    // isPdf = false;
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    const [Reports, setReports] = useState([]);
    const [tempData, setTempData] = useState(Reports);


    useEffect(() => {
        const fetchReports = async () => {
            try {
                showLoadingSpinner();
                const response = await axios.get("http://localhost:5000/payment453");
                setReports(response.data);
            } catch (error) {
                console.log('Error fetching Reports:', error);
            }

            hideLoadingSpinner();
        };
        fetchReports();
    }, []);


    const handleEdit = (id) => {
        navigate(`/Edit/${id}`);
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/payment453/${id}`)
            .then(response => {

                console.log('Report deleted successfully');
                // Refresh the table to show updated data
                window.alert('Data has been deleted successfully');
                window.location.reload();

            })
            .catch(error => {

                console.log('Error deleting Reports:', error);

            });
    }


    const onSearchChange = (value) => {
        console.log(value);

        const newData = Reports.filter((sche) =>

            sche.date.toLocaleLowerCase().includes(value.toLocaleLowerCase())

        );
        console.log(newData);
        setTempData(newData);


    }

// const FinancialReportGenerate = () => {
    return (
        <section>
            <Container>
                <div className="title code">Financial Reports Uploaded Details</div>
                <br />
                <Row>
                    <Col>
                        <input type="button" className="tertiary_btn" value="Generate a report" />
                    </Col>
                    <Col>
                        <Row>

                            <Col>
                                <input type="date" className="calender" selected={startDate} />
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
                                    on onChange={(e) => onSearchChange(e.target.value)}
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
                    <div id='pdf-table'>

                        <Table dark striped bordered hover responsive>

                            <tbody>
                                {tempData.map((row, index) => (
                                    <tr key={row.index}>
                                        <td>{row.financialReportId}</td>
                                        <td>{row.reportCatogery}</td>
                                        <td>{row.employeeID}</td>
                                        <td>{row.uploadedDate}</td>
                                        <td>{row.uploadedTime}</td>
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
                                    <th>financialReportId</th>
                                    <th>reportCatogery</th>
                                    <th>employeeID</th>
                                    <th>uploadedDate</th>
                                    <th>uploadedTime</th>
                                    {/* {isPdf ? null : ( */}
                                         <th>Edit</th>
                                          <th>Delete</th>
                                    
                                    {/* )} */}
                                </tr>
                            </thead>
                            <tbody>   
                                 {Reports.map((row) => (
                                    <tr key={row._id}>
                                        <td>{row.financialReportId}</td>
                                        <td>{row.reportCatogery}</td>
                                        <td>{row.employeeID}</td>
                                        <td>{row.uploadedDate}</td>
                                        <td>{row.uploadedTime}</td>
                                        
                                            
                                                <td>
                                                    <button className='edit_btn' onClick={() => handleEdit(row._id)}>edit</button>
                                                </td>
                                                <td>
                                                    <button className='delete_btn' onClick={() => handleDelete(row._id)}>delete</button>
                                                </td>
                                               
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

export default FinancialReportGenerate;