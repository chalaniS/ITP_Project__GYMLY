import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'reactstrap'
import '../../Styles/schedule/Supplements/Placeorder.css'
import '../../App.css'
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineSearch } from "react-icons/ai";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { showLoadingSpinner, hideLoadingSpinner } from '../../Components/Loading/loading.js'


const Orderread = () => {
    const navigate = useNavigate();
    const [supplementId,setsupplementId]=useState();
    const [startDate, setStartDate] = useState(new Date());
    const [Order, setOrder] = useState([]);
    const [tempData, setTempData] = useState(Order);

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                showLoadingSpinner();
                const response = await axios.get("http://localhost:5000/Supplements");
                setOrder(response.data);
            } catch (error) {
                console.log('Error fetching Order:', error);
            }

            hideLoadingSpinner();
        };
        fetchOrder();
    }, []);


    const handleEdit = (id) => {
        navigate(`/Editorder/${id}`);
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/Supplements/${id}`)
            .then(response => {

                console.log('Order deleted successfully');
                // Refresh the table to show updated data
                window.alert('Data has been deleted successfully');
                window.location.reload();

            })
            .catch(error => {

                console.log('Error deleting Order:', error);

            });
    }

    const onSearchChange = (value) => {
        console.log(value);

        const newData = Order.filter((sche) =>

            sche.Supplement_Date.toLocaleLowerCase().includes(value.toLocaleLowerCase())

        );
        console.log(newData);
        setTempData(newData);
    }
    
      

    return (
        <section>
            <Container>
                <div className="title code">Your Supllement Order</div>
                <br />
                <Row>
                    <Col>
                        <button className="tertiary_btn">Generate A Report</button>
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
                                        <td>{row.Supplement_Id}</td>   
                                        <td>{row.Supplement_Date}</td>
                                        <td>{row.Supplement_Type}</td>
                                        <td>{row.Supplement_Quantity}</td>
                                       
                                       
                                        

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
                                    <th>Supplement Id</th>  
                                    <th>Supplement Date</th>
                                    <th>Supplement Type</th>
                                    <th>SupplementQuantity</th>
                                    
                                    {/* {isPdf ? null : ( */}
                                         <th>Edit</th>
                                          <th>Delete</th>
                                    
                                    {/* )} */}
                                </tr>
                            </thead>
                            <tbody>   
                                 {Order.map((row) => (
                                    <tr key={row._id}>  
                                        <td>{row.Supplement_Id}</td>                                     
                                        <td>{row.Supplement_Date}</td>
                                        <td>{row.Supplement_Type}</td>
                                        <td>{row.Supplement_Quantity}</td>
                                        
                                        
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

export default Orderread;