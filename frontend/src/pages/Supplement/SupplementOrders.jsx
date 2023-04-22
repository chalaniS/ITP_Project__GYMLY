import React, { useState, useEffect } from "react";
// import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../App.css'
import '../../Styles/Payment/payment.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiFillCalendar } from "react-icons/ai";
import image from '../../images/Payment/gym2.jpg'
import { useParams } from "react-router-dom";
import Axios from "axios";
import { showLoadingSpinner, hideLoadingSpinner } from '../../Components/Loading/Loading.js'
import { parseISO, format } from 'date-fns';



const SupplementOrders = () => {


    const [SupplierName, setSupplierName] = useState("");
    const [ProductName,setProductName] = useState("");
    const [Quantity, setQuantity] = useState("");
    const [Size, setSize] = useState("");

    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        console.log('In handleFormSubmit');
        console.log(SupplierName + ProductName + Quantity + Size);
    
        try {
          const response = await Axios.post(
            'http://localhost:5000/suppliers',
            {
                SupplierName: SupplierName,
                ProductName: ProductName,
                Quantity: Quantity,
                Size: Size
            }
          );
          console.log(response);
          window.alert('Data has been inserted successfully');
          window.location.reload();
          console.log('Successfully inserted list');
        } catch (error) {
          console.log(error);
          console.log('error when update the data');
          window.alert('Data is not inserted successfully');
        }
      };


    return (
        <body>
            <section >
                <Container>
                    <div className="form">
                        <div className="title code">Place Orders</div>
                        <br />
                        <div className="inputs">
                            <form 
                            onSubmit={handleFormSubmit}>
                                <Row>
                                    <img src={image} alt="" className='images' />
                                </Row>
                                <br />

                                <Row>
                                <Col lg='4'>
                                    <label for="SupplierName">Supplier Name  :</label>
                                </Col>
                                <Col>
                                    <div className="select">:
                                            <select name="SupplierName" id="SupplierName" onChange={(event) => setSupplierName(event.target.value)} value={SupplierName}>
                                                <option value="Viraj Dhanushka">Viraj Dhanushka</option>
                                                <option value="Vishwajith Kasthoori">Vishwajith Kasthoori</option>
                                                <option value="Kalpana Nanayakkara">Kalpana Nanayakkara</option>
                                                <option value="Denuwan Asitha">Denuwan Asitha</option>
                                                <option value="Lakmal Withanage">Lakmal Withanage</option>
                                            </select>
                                        </div>
                                </Col>
                                </Row>
                                <br/>

                                <Row>
                                <Col lg='4'>
                                    <label for="ProductName">Product Name  :</label>
                                </Col>
                                <Col>
                                    <input type="text" name="" placeholder="Product Name" onChange={(event) => setProductName(event.target.value)} value={ProductName}/>
                                </Col>
                                </Row>
                                <br/>

                                <Row>
                                <Col lg='4'>
                                    <label for="Quantity">Quantity  :</label>
                                </Col>
                                <Col>
                                    <input type="text" name="" placeholder="Quantity" onChange={(event) => setQuantity(event.target.value)} value={Quantity}/>
                                </Col>
                                </Row>
                                <br/>

                                <Row>
                                <Col lg='4'>
                                    <label for="Size">Size  :</label>
                                </Col>
                                <Col>
                                    <div className="select">:
                                            <select name="Size" id="Size" onChange={(event) => setSize(event.target.value)} value={Size}>
                                                <option value="Small">Small</option>
                                                <option value="Large">Large</option>
                                                <option value="XL">XL</option>
                                            </select>
                                        </div>
                                </Col>
                                </Row>
                                <br/>
                                
                                <br />
                                < Row>
                                    <Col>
                                        <button type='reset' className='primary__btn submit'>Cancel</button>
                                    </Col>
                                    <Col>
                                        <button type='submit' className='primary__btn submit'>Submit</button>
                                    </Col>
                            </ Row>
                            </form>
                        </div>
                    </div>
                </Container >
            </section >
        </body>
    )
}

export default SupplementOrders;