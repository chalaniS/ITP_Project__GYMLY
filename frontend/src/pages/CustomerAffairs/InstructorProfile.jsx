import React, { useState,useEffect } from 'react'
import { Container, Row, Col, Table } from 'reactstrap'
import '../../Styles/CustomerAffairs/InstructorProfile.css'
import '../../App.css'
import axios from 'axios';
import { showLoadingSpinner, hideLoadingSpinner } from '../../Components/Loading/Loading.js'
import { useNavigate } from 'react-router-dom'

const InstructorProfile = () => {
    const [instructorfeedbacks, setInstructorFeedbacks] = useState([]);
    const navigate = useNavigate();

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
    
    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/api/instructorFeedback/${id}`)
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
    
    const handleEdit = (id) => {
        navigate(`/EditInstructorFeedback/${id}`);
    };
    
    return (
        <section>
            <Container>
                <div className="title code">Instructor - Mr. Leanne Graham</div>
                
                <br />
                <Row>
                    <Table dark striped bordered hover responsive>
                        <thead >
                            <th>
                                Customer Name
                            </th>
                            <th>
                                Rating
                            </th>
                            <th>
                                Feedback
                            </th>
                            <th>
                                Edit
                            </th>
                            <th>
                                Delete
                            </th>
                        </thead>
                        <tbody>
                            {instructorfeedbacks.map((row) => (
                                <tr key={row._id}>
                                <td>{row.customerName}</td>
                                <td>{row.instructorRating}</td>
                                <td >{row.instructorfeedback}</td>
                                <td><button className='edit_btn ' onClick={() => handleEdit(row._id)}>edit</button></td>
                                <td><button className='delete_btn ' onClick={() => handleDelete(row._id)}>delete</button></td>
                            </tr>
                            ))}
                            
                            

                        </tbody>
                    </Table>


                </Row>




            </Container>
        </section>
    )
}

export default InstructorProfile;