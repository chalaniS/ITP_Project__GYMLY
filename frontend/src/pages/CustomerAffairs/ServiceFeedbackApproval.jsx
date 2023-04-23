import { useEffect,useState,useRef } from 'react'
import React from 'react'
import { Container, Row, Table } from 'reactstrap'
import '../../Styles/CustomerAffairs/FeedbackApproval.css'
import '../../App.css'
import axios from 'axios';
import { showLoadingSpinner, hideLoadingSpinner } from '../../Components/Loading/Loading.js'
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useNavigate } from 'react-router-dom'

function handleClick() {
    window.alert('Feedback is approved successfully ')
  }
  

const ServiceFeedbackApproval = () => {
    const [servicefeedbacks, setServiceFeedbacks] = useState([]);
    const navigate = useNavigate();
    const viewInstructorFeedbackList = () => {
        navigate(`/InstructorFeedbackApproval`);
      }
    useEffect(() => {
        const fetchServiceFeedback = async () => {
            try {
                showLoadingSpinner();
                const response = await axios.get("http://localhost:5000/api/CustomerAffairs");
                setServiceFeedbacks(response.data);
            } catch (error) {
                console.log('Error fetching service feedbacks:', error);
            }

            hideLoadingSpinner();
        };
        fetchServiceFeedback();
    }, []);
    

    const handleServiceFeedbackDelete = (id) => {
        axios.delete(`http://localhost:5000/api/CustomerAffairs/${id}`)
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
        doc.text('Service Feedback Report', 14, 22);
        
      
        // define the table columns
        const columns = [    
            { header: 'Date', dataKey: 'updatedAt' },    
            { header: 'Customer Name', dataKey: 'name' },    
            { header: 'Email', dataKey: 'email' },    
            { header: 'Rating', dataKey: 'rating' },    
            { header: 'Feedback', dataKey: 'feedback' }  
        ];
        
        // define the table rows
        const rows = servicefeedbacks.map(servicefeedback => ({
          updatedAt: servicefeedback.updatedAt.substr(0,10),
          name: servicefeedback.name,
          email: servicefeedback.email,
          rating: servicefeedback.rating,
          feedback: servicefeedback.feedback
        }));
        
        // add the table to the PDF document
        doc.autoTable(columns, rows);
        
        // save the PDF file
        doc.save('ServiceFeedbackReport.pdf');
    };
      

    return (
        <section>
            <Container>
                <div className="title code">Service Feedback List</div>
                <div className="Buttonsdiv">
                <button class="secondary__btn" id="inst_btn_position" onClick={()=>viewInstructorFeedbackList()}>View Instructor Feedback List</button>
                <button class="secondary__btn" id="btn_position" onClick={handleGeneratePdf}>Generate Feedback Report</button>
                
                </div>
                <br />
                
                <br />
                <Row>
                    <Table  dark striped bordered hover responsive>
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
                            {servicefeedbacks.map((row) => (//map is a function which can loop through one by one
                                <tr key={row._id}>
                                <td>{row.updatedAt.substr(0,10)}</td>
                                <td>{row.name}</td>
                                <td>{row.email}</td>
                                <td >{row.rating}</td>
                                <td >{row.feedback}</td>
                                <td><button className='accept_btn 'onClick={handleClick}>Accept</button></td>
                                <td><button className='reject_btn 'onClick={() => handleServiceFeedbackDelete(row._id)}>Reject</button></td>
                            </tr>
                            ))}
                            
                            

                        </tbody>
                    </Table>
                </Row>
            </Container>
               
            <br/>
            <br/>
            <br/>
            
            
                
        </section>
    )
}

export default ServiceFeedbackApproval;
