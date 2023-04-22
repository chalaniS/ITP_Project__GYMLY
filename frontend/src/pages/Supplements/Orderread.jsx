import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'reactstrap'
import '../../Styles/schedule/Supplements/Placeorder.css'
import '../../App.css'
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineSearch } from "react-icons/ai";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { showLoadingSpinner, hideLoadingSpinner } from '../../Components/Loading/loading.js'
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;


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

    // const generateReport = () => {
    //     const data = []; // Add the data you want to include in the report here
      
    //     const docDefinition = {
    //       content: [
    //         { text: "Report Title", style: "header" },
    //         "\n",
    //         {
    //           table: {
    //             headerRows: 1,
    //             widths: ["*", "*", "*", "*"],
    //             body: [
    //               ["Supplement Id", "Supplement Date", "Supplement Type", "Supplement Quantity"],
    //               ...data.map((row) => [
    //                 row.Supplement_Id,
    //                 row.Supplement_Date,
    //                 row.Supplement_Type,
    //                 row.Supplement_Quantity,
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
    
const generateReport = () => {
    const orderData = []; // Array to store order data
  
    // Retrieve the data from the Orderread page and store it in the orderData array
    const tableRows = document.querySelectorAll("table tbody tr");
    tableRows.forEach((row) => {
      const rowData = {};
      const columns = row.querySelectorAll("td");
      rowData.Supplement_Id = columns[0].innerText;
      rowData.Supplement_Date = columns[1].innerText;
      rowData.Supplement_Type = columns[2].innerText;
      rowData.Supplement_Quantity = columns[3].innerText;
      orderData.push(rowData);
    });
  
    const docDefinition = {
      content: [
        { text: "Report Title", style: "header" },
        "\n",
        {
          table: {
            headerRows: 1,
            widths: ["*", "*", "*", "*"],
            body: [
              ["Supplement Id", "Supplement Date", "Supplement Type", "Supplement Quantity"],
              ...orderData.map((row) => [
                row.Supplement_Id,
                row.Supplement_Date,
                row.Supplement_Type,
                row.Supplement_Quantity,
              ]),
            ],
          },
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: "center",
          margin: [0, 0, 0, 10],
        },
      },
    };
  
    pdfMake.createPdf(docDefinition).open();
  };

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
                    <button className="tertiary_btn" onClick={generateReport}>
                        Generate A Report
                    </button>
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