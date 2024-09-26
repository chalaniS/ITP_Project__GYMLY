import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'reactstrap'
import '../../Styles/Payment/payment.css'
import '../../App.css'
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineSearch } from "react-icons/ai";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { showLoadingSpinner, hideLoadingSpinner } from '../../Components/Loading/Loading.js'
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;


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

    // const generatePDF = () => {
    //     const reportData = []; // Array to store report data
      
    //     // Retrieve the data from the FinancialReportUpload page and store it in the orderData array
    //     const tableRows = document.querySelectorAll("table tbody tr");
    //     tableRows.forEach((row) => {
    //       const rowData = {};
    //       const columns = row.querySelectorAll("td");
    //       rowData.financialReportId = columns[0].innerText;
    //       rowData.reportCatogery = columns[1].innerText;
    //       rowData.employeeID = columns[2].innerText;
    //       rowData.uploadedDate = columns[3].innerText;
    //       rowData.uploadedTime = columns[4].innerText;
    //       reportData.push(rowData);
    //     });
      
    //     const docDefinition = {
    //       content: [
    //         { text: "Report Title", style: "header" },
    //         "\n",
    //         {
    //           table: {
    //             headerRows: 1,
    //             widths: ["", "", "", ""],
    //             body: [
    //               ["financialReportId", "reportCatogery", "employeeID", "uploadedDate", "uploadedTime"],
    //               ...reportData.map((row) => [
    //                 row.financialReportId,
    //                 row.reportCatogery,
    //                 row.employeeID,
    //                 row.uploadedDate,
    //                 row.uploadedTime,
    //               ]),
    //             ],
    //           },
    //         },
    //       ],
    //       styles: {
    //         header: {
    //           fontSize: 18,
    //           bold: true,
    //           alignment: "center",
    //           margin: [0, 0, 0, 10],
    //         },
    //       },
    //     };
      
    //     pdfMake.createPdf(docDefinition).open();
    //   };

    // const generatePDF = () => {
    //     const unit = "pt";
    //     const size = "A4"; 
    //     const orientation = "landscape"; 
    //     const marginLeft = 40;
    //     const doc = new jsPDF(orientation, unit, size);
    //     doc.setFontSize(15);
    //     const title = "Employee Summary";
    //     const headers = [["Employee ID", "Name", "Job Role", "Salary"]];
    //     const data = tableData.map((Report) => [Report.financialReportId, Report.reportCatogery, Report.employeeID, Report.uploadedDate, Report.uploadedTime]);
    //     let content = {
    //       startY: 50,
    //       head: headers,
    //       body: data,
    //     };
    //     doc.text(title, marginLeft, 40);
    //     doc.autoTable(content);
    //     doc.save("employee-summary.pdf");
    //   };
      

    // Define a function to generate the report
const generatePDF = () => {
    const reportData = []; // Array to store report data
  
    // Retrieve the data from the FinancialReportGenerate page and store it in the orderData array
    const tableRows = document.querySelectorAll("table tbody tr");
    tableRows.forEach((row) => {
      const rowData = {};
      const columns = row.querySelectorAll("td");
      rowData.financialReportId = columns[0].innerText;
      rowData.reportCategory = columns[1].innerText;
      rowData.employeeID = columns[2].innerText;
      rowData.uploadedDate = columns[3].innerText;
      rowData.uploadedTime = columns[4].innerText;
      reportData.push(rowData);
    });
  
      // Define the document definition for the PDF
      const docDefinition = {
        pageSize: 'A4',
        content: [
          { text: "Financial Report", style: "header" },
          "\n",
          {
            table: {
              headerRows: 1,
              widths: ["20%", "20%", "20%", "20%", "20%"],
              body: [
                ["Financial Report ID", "Report Category", "Employee ID", "Uploaded Date", "Uploaded Time"],
                ...reportData.map((row) => [
                  row.financialReportId,
                  row.reportCategory,
                  row.employeeID,
                  row.uploadedDate,
                  row.uploadedTime,
                ]),
              ],
            },
            style: 'tableStyle'
          },
        ],
        styles: {
          header: {
            fontSize: 20,
            bold: true,
            alignment: "center",
            margin: [0, 0, 0, 10],
          },
          tableStyle: {
            margin: [0, 10, 0, 10],
            fontSize: 10,
            alignment: "left"
          }
        },
      };
      
      
  
    // Generate and open the PDF
    pdfMake.createPdf(docDefinition).open();
  };

   // Add an event listener to the button that triggers the report generation
//    const generateReportButton = document.getElementById("generate-report-button");
//    generateReportButton.addEventListener("click", generatePDF);


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

            sche.uploadedDate.toLocaleLowerCase().includes(value.toLocaleLowerCase())

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
                        
                    <button className="tertiary_btn" onClick={generatePDF}> Generate A Report </button>
                   
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