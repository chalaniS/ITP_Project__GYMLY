import { Container, Row, Table } from 'reactstrap'
import '../../Styles/CustomerAffairs/FeedbackApproval.css'
import '../../App.css'


const FeedbackApproval = () => {

    return (
        <section class="approvalsection">
            <Container>
                <div className="title code">Feedback List</div>
                <br />
                
                <br />
                <Row>
                    <Table dark striped bordered hover responsive>
                        <thead >
                            <th>
                                <center>Customer ID</center>
                            </th>
                            <th>
                                <center>Customer Name</center>
                            </th>
                            <th>
                                <center>Feedback Type</center>
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
                            <tr >
                                <td>Customer ID</td>
                                <td>Customer Name</td>
                                <td>Service Feedback</td>
                                <td >Feedback here</td>
                                <td><button className='accept_btn '>Accept</button></td>
                                <td><button className='reject_btn '>Reject</button></td>
                            </tr>
                            <tr >
                                <td>Customer ID</td>
                                <td>Customer Name</td>
                                <td>Fitness Instructor Feedback</td>
                                <td >Feedback here</td>
                                <td><button className='accept_btn '>Accept</button></td>
                                <td><button className='reject_btn '>Reject</button></td>
                            </tr>
                            <tr >
                                <td>Customer ID</td>
                                <td>Customer Name</td>
                                <td>Service Feedback</td>
                                <td >Feedback here</td>
                                <td><button className='accept_btn '>Accept</button></td>
                                <td><button className='reject_btn '>Reject</button></td>
                            </tr>
                            <tr >
                                <td>Customer ID</td>
                                <td>Customer Name</td>
                                <td>Fitness Instructor Feedback</td>
                                <td >Feedback here</td>
                                <td><button className='accept_btn '>Accept</button></td>
                                <td><button className='reject_btn '>Reject</button></td>
                            </tr>


                        </tbody>
                    </Table>
                </Row>
            </Container>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <button class="ratingsrep_btn">Generate Ratings Report</button>
                <button class="feedbackrep_btn">Generate Feedback Report</button>
                
        </section>
    )
}

export default FeedbackApproval;
