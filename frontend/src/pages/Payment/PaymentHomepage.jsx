import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../App.css'
import image from '../../images/Payment/gym2.jpg'


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
                                    <input type="text" name='ID' value="" className='' disabled />
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col lg='4'>
                                    <label for="timeslot">NIC  :</label>
                                </Col>
                                <Col>
                                    <input type="text" name='NIC' value="" className='' disabled />
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
                                <Col>
                                    <button type='submit' className='primary__btn submit'>Cancle</button>
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

export default PaymentHomepage ;