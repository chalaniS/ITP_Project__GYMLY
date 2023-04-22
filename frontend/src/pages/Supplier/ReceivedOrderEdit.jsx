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

    const [SupplierName, setSupplierName] = useState("");
    const [ProductName,setProductName] = useState("");
    const [Quantity, setQuantity] = useState("");
    const [Size, setSize] = useState("");

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                showLoadingSpinner();
                const response = await Axios.get(`http://localhost:5000/payment453/${id}`);
                setSupplierName(response.SupplierName);
                setProductName(response.ProductName)
                setQuantity(response.Quantity);
                setSize(response.Size);
                console.log(response.data);
            } catch (error) {
                console.log('Error fetching orders:', error);
            } finally {
                hideLoadingSpinner();
            }
        };

        fetchOrders();
    }, [id]);


    const handleFormSubmit = (e) => {
        e.preventDefault();
        showLoadingSpinner();
        console.log({
            userId,
            reportId,
            SupplierName,
            Product,
            Quantity,
            Size
        });

        // Send the updated data to the server using an API call
        Axios.put(`http://localhost:5000/suppliers/${id}`, {
            SupplierName,
            Product,
            Quantity,
            Size
        })
            .then((response) => {
                console.log(response);
                hideLoadingSpinner();
                window.alert('Data has been updated successfully');
                window.location = 'http://localhost:3000/SupplierOrders';
                console.log('Successfully updated list');
            })
            .catch((error) => {
                console.log(error);
                console.log('error when updating the data');
                window.alert('Data was not updated successfully');
                window.location.reload();
            });
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
                                {tempData.map((row, index) => (
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
                                {Orders.map((row) => (
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
};

export default FinancialReport;
