import { Container, Row, Col, Table } from 'reactstrap'
import '../../Styles/schedule/schedule.css'
import '../../App.css'
import { AiOutlineSearch } from "react-icons/ai";

const TblEmpSummary = () => {

    return (
        <section>
            <Container>
                <div className="title code">Employee Leave Evaluation</div>
                <br />
                <Row>
                    <Col>
                        <Row>
                            <Col style={{marginLeft:"61.5%"}}> <AiOutlineSearch className="i" /></Col>
                            <Col style={{marginRight:"14.5%"}}> <input type="text" className='search' value=""/></Col>
                        </Row>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Table dark striped bordered hover responsive>
                        <thead >
                            <th>
                                Employee ID
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Job Role
                            </th>
                            <th>
                                Leave Type
                            </th>
                            <th>
                                Leave Dates
                            </th>
                            <th>
                                Actions
                            </th>
                        </thead>
                        <tbody>
                            <tr >
                                <td> </td>
                                <td> </td>
                                <td > </td>
                                <td > </td>
                                <td > </td>
                                <td>
                                    <button className='edit_btn '>Approve</button>
                                    <nbsp>  </nbsp>
                                    <button className='edit_btn '>Reject</button>
                                </td>
                            </tr>
                            <tr >
                                <td> </td>
                                <td> </td>
                                <td > </td>
                                <td > </td>
                                <td > </td>
                                <td>
                                    <button className='edit_btn '>Approve</button>
                                    <nbsp>  </nbsp>
                                    <button className='edit_btn '>Reject</button>
                                </td>
                            </tr>
                            <tr >
                            <   td> </td>
                                <td> </td>
                                <td > </td>
                                <td > </td>
                                <td > </td>
                                <td>
                                    <button className='edit_btn '>Approve</button>
                                    <nbsp>  </nbsp>
                                    <button className='edit_btn '>Reject</button>
                                </td>
                            </tr>
                            <tr >
                                <td> </td>
                                <td> </td>
                                <td > </td>
                                <td > </td>
                                <td > </td>
                                <td>
                                    <button className='edit_btn '>Approve</button>
                                    <nbsp>  </nbsp>
                                    <button className='edit_btn '>Reject</button>
                                </td>
                            </tr>
                            <tr >
                                <td> </td>
                                <td> </td>
                                <td > </td>
                                <td > </td>
                                <td > </td>
                                <td>
                                    <button className='edit_btn '>Approve</button>
                                    <nbsp>  </nbsp>
                                    <button className='edit_btn '>Reject</button>
                                </td>
                            </tr>
                            <tr >
                                <td> </td>
                                <td> </td>
                                <td > </td>
                                <td > </td>
                                <td > </td>
                                <td>
                                    <button className='edit_btn '>Approve</button>
                                    <nbsp>  </nbsp>
                                    <button className='edit_btn '>Reject</button>
                                </td>
                            </tr>
                            <tr >
                                <td> </td>
                                <td> </td>
                                <td > </td>
                                <td > </td>
                                <td > </td>
                                <td>
                                    <button className='edit_btn '>Approve</button>
                                    <nbsp>  </nbsp>
                                    <button className='edit_btn '>Reject</button>
                                </td>
                            </tr>
                            <tr >
                                <td> </td>
                                <td> </td>
                                <td > </td>
                                <td > </td>
                                <td > </td>
                                <td>
                                    <button className='edit_btn '>Approv</button>
                                    <nbsp>  </nbsp>
                                    <button className='edit_btn '>Reject</button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </section>
    )
}

export default TblEmpSummary;