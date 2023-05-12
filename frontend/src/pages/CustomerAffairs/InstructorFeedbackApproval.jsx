import { useEffect,useState,useRef } from 'react'
import React from 'react'
import { Container, Row, Table } from 'reactstrap'
import '../../Styles/CustomerAffairs/FeedbackApproval.css'
import '../../App.css'
import axios from 'axios';
import { showLoadingSpinner, hideLoadingSpinner } from '../../Components/Loading/Loading.js'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


function handleClick() {
    window.alert('Feedback is approved successfully ')
  }

const InstructorFeedbackApproval = () => {
    const ref = useRef(null);
    const [instructorfeedbacks, setInstructorFeedbacks] = useState([]);

    
    useEffect(() => {
        const fetchInstructorFeedback = async () => {
            try {
                showLoadingSpinner();
                const response = await axios.get("http://localhost:5000/api/instructorFeedback");
                setInstructorFeedbacks(response.data);
            } catch (error) {
                console.log('Error fetching instructor feedbacks:', error);
            }

            hideLoadingSpinner();
        };
        fetchInstructorFeedback();
    }, []);

   

    const handleInstructorFeedbackDelete = (id) => {
        axios.delete(`http://localhost:5000/api/instructorfeedback/${id}`)
            .then(response => {

                console.log('Feedback deleted successfully');
                // Refresh the table to show updated data
                window.alert('Data has been deleted successfully');
                window.location.reload();

            })
            .catch(error => {

                console.log('Error deleting feedback:', error);

            });
    }
    const handleGeneratePdf = () => {
        // initialize the PDF document
        const doc = new jsPDF();

        // add title to the PDF document
        doc.setFontSize(16);
        doc.text('Instructor Feedback Report', 14, 22);
        
      
        // define the table columns
        const columns = [    
            { header: 'Date', dataKey: 'updatedAt' },    
            { header: 'Customer Name', dataKey: 'customerName' },    
            { header: 'Email', dataKey: 'customerEmail' },
            { header: 'Instructor Name', dataKey: 'instructorName' },    
            { header: 'Rating', dataKey: 'instructorRating' },    
            { header: 'Feedback', dataKey: 'instructorfeedback' }  
        ];
        
        // define the table rows
        const rows = instructorfeedbacks.map(instructorfeedback => ({
          updatedAt: instructorfeedback.updatedAt.substr(0,10),
          customerName: instructorfeedback.customerName,
          customerEmail: instructorfeedback.customerEmail,
          instructorName: instructorfeedback.instructorName,
          instructorRating: instructorfeedback.instructorRating,
          instructorfeedback: instructorfeedback.instructorfeedback
        }));
        
        // add the table to the PDF document
        doc.autoTable(columns, rows);
        
        // save the PDF file
        doc.save('InstructorFeedbackReport.pdf');
    };
      

    return (
        <section ref={ref}>
           
           
                <Container>
                <div className="title code">Instructor Feedback List</div>
                <button class="secondary__btn" id="btn_position" onClick={handleGeneratePdf}>Generate Feedback Report</button>
                <br />
                
                <br />
                <Row>
                    <Table dark striped bordered hover responsive>
                        <thead >
                            <th>
                                <center>Date</center>
                            </th>
                            <th>
                                <center>Customer Name</center>
                            </th>
                            <th>
                                <center>Email</center>
                            </th>
                            <th>
                                <center>Instructor Name</center>
                            </th>
                            <th>
                                <center>Rating</center>
                            </th>
                            <th>
                                <center>Feedback</center>
                            </th>
                            <th>
                                <center>Approve</center>
                            </th>
                            <th>
                                <center>Reject</center>
                            </th>
                        </thead>
                        <tbody>
                            {instructorfeedbacks.map((row) => (
                                <tr key={row._id}>
                                <td>{row.updatedAt.substr(0,10)}</td>
                                <td>{row.customerName}</td>
                                <td>{row.customerEmail}</td>
                                <td >{row.instructorName}</td>
                                <td >{row.instructorRating}</td>
                                <td >{row.instructorfeedback}</td>
                                <td><button className='accept_btn 'onClick={handleClick}>Accept</button></td>
                                <td><button className='reject_btn ' onClick={() => handleInstructorFeedbackDelete(row._id)}>Reject</button></td>
                            </tr>
                            ))}
                            
                            

                        </tbody>
                    </Table>
                </Row>
            </Container>
            <br/>
            <br/>
            <br/>
            <br/>
            
           
                
        </section>
    )
}

export default InstructorFeedbackApproval;
