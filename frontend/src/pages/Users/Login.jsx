import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Style/Login.css';

const Login = () => {
  return (
    <div >
    <Form id="LogingForm" className="text-center">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="outline-primary" type="submit" id="Button">
        Sign In
      </Button>
    
      <p>Dont Have a Account?</p>

    </Form>
    </div>
  )
}

export default Login;