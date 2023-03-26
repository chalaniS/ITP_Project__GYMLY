import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../Styles/Payment/payment.css'
import image from '../../images/Payment/Img2.jpg'


const PaymentHomepage = () => {
    return (
        <body>

        <section >
            <Container>
                <div className="form">
                    <div className="title code">LogIn to Payment</div>

                    <div className="inputs">
                        <form action="">
                            <Row>
                                <img src={image} alt="" className='images' />
                            </Row>
                            <br />
                            <Row>
                                <Col lg='4'>
                                    <label for="token">EmployeeID  :</label>
                                </Col>
                                <Col>
                                    <input type="text" name='ID' value="X10236" className='' disabled />
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col lg='4'>
                                    <label for="timeslot">NIC  :</label>
                                </Col>
                                <Col>
                                    <input type="text" name='NIC' value="X10236" className='' disabled />
                                </Col>
                            </ Row>
                            <br />
                            <Row>
                                <Col>
                                     <input type="checkbox" value="lsRememberMe" id="rememberMe"></input> 
                                    <label for="rememberMe">Remember me</label>
                                </Col>
                            </Row>
                            < Row>
                                <Col lg='10' className='LogIn'>
                                    <button type='LogIn' className='primary__btn LogIn'>Cancel</button>
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

export default PaymentHomepage