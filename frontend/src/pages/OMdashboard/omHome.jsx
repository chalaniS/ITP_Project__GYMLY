import React from 'react'
import { Container, Row, Col, Table } from 'reactstrap'
import image from '../../images/Schedule/image1.jpg'
import '../../App.css'
import '../../Styles/OMdashboard/OMHome.css'

function OMHome() {
    return (
        <>
            <Container>
                <div className="title code">Schedule Daily Training Time Slot</div>
                <Row>
                    <img src={image} alt="" className='images' />
                </Row>
                <br />
                <Row className='om_btn'>
                    <Col>
                        <Container >
                            <a href="http://"><p id='ed'>Employee Details</p></a>
                        </Container>
                    </Col>
                    <Col>
                        <Container>
                            <a><p>Instructor Change <br /> Requests</p></a>
                        </Container>
                    </Col>
                </Row>
                <br />
                <Row className='om_btn'>
                    <Col>
                        <Container>
                            <a href=""><p>Employee Leave<br /> Requests</p></a>
                        </Container>
                    </Col>
                    <Col>
                        <Container>
                            <a href=''> <p>Promo Package<br /> Requests</p></a>
                        </Container>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default OMHome;