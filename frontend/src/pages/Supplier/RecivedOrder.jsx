// import Table from 'react-bootstrap/Table';
import '../../App.css'
import './RecivedOrder.css'
import { AiOutlineSearch } from "react-icons/ai";
import { Table, Col, Container, Row } from 'reactstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { showLoadingSpinner, hideLoadingSpinner } from '../../Components/Loading/Loading.js'

const RecivedOrder = () => {
    const navigate = useNavigate();
    const [TableData, setTableData] = useState([]);
    // const [ProductName, setProductName] = useState([]);
    // const [Quantity, setQuantity] = useState([]);
    // const [Size, setSize] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                showLoadingSpinner();
                const response = await axios.get("http://localhost:5000/suppliers");
                setTableData(response.data);
            } catch (error) {
                console.log('Error fetching Reports:', error);
            }

            hideLoadingSpinner();
        }
        fetchOrders()
    }, [])

    const handleEdit = (id) => {
        navigate(`/Edit/${id}`);
    };

    return(
        <section>
            <Container>
                <div className="title code">Received Orders</div>
                <br />
                <Row>
                    <Col>
                        <input type="button" className="tertiary_btn" value="Generate a report" />
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <input type="date" className="calender" />
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
                                    // on onChange={(e) => onSearchChange(e.target.value)}
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
                                {TableData.map((row, index) => (
                                    <tr key={row.index}>
                                        <td>{row.userId}</td>
                                        <td>{row.SupplierName}</td>
                                        <td>{row.Quantity}</td>
                                        <td>{row.Size}</td>
                                        {/* <td>{row.uploadedTime}</td> */}
                                        <td>
                                            <button className='edit_btn' >edit</button>
                                        </td>
                                        <td>
                                            <button className='delete_btn' >delete</button>
                                        </td>


                                    </tr>
                                ))}   
                            </tbody>
                            <thead>
                                <tr>
                                    <th>userId</th>
                                    <th>SupplierName</th>
                                    <th>Quantity</th>
                                    <th>Size</th>
                                    {/* <th>uploadedTime</th> */}
                                    {/* {isPdf ? null : ( */}
                                         <th>Edit</th>
                                          <th>Delete</th>
                                    
                                    {/* )} */}
                                </tr>
                            </thead>
                            <tbody>   
                                {TableData.map((row) => (
                                    <tr key={row._id}>
                                        <td>{row.userId}</td>
                                        <td>{row.SupplierName}</td>
                                        <td>{row.Quantity}</td>
                                        <td>{row.Size}</td>
                                        
                                                <td>
                                                    <button className='edit_btn' >edit</button>
                                                </td>
                                                <td>
                                                    <button className='delete_btn' >delete</button>
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

export default RecivedOrder