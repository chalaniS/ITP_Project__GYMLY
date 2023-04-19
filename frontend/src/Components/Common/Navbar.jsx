import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../images/logo.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './header.css';
import Router from "../../router/Routes";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              height="40"
              width="auto"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#home me-5">About Us</Nav.Link>
              <Nav.Link href="#features">Fitness Instructors</Nav.Link>
              <Nav.Link href="#features">Suppliment Store</Nav.Link>
              <Nav.Link href="#">Contact Us</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button variant="outline-primary" id="Button">Sign in</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;