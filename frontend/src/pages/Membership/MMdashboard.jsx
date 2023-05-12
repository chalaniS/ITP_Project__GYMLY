import React from 'react'
import { Container, Row, Col, Table } from 'reactstrap'
import image from '../../images/Membership/image8.jpg'
import '../../App.css'
import '../../Styles/OMdashboard/OMHome.css'

function MMdashboard() {
    return (
        <>
            <Container>
                <div className="title code">Membership Manager Dashboard</div>
                <Row>
                    <img src={image} alt="" className='' />
                </Row>
                <br />
                <Row className='om_btn'>
                    <Col>
                        <Container >
                            <a><p id='ed'>Standard Packages</p></a>
                        </Container>
                    </Col>
                    <Col>
                        <Container>
                            <a><p id='ed'>Promo Packages</p></a>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MMdashboard