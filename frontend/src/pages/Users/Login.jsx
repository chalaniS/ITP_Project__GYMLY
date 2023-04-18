import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Style/Login.css';
import { useState } from "react";


const Login = () => {

  const [values, setvalues] = useState({
    email: "",
    password: "",
  });

  return (  
  <div className="container-fluid" id="logging">
   
    <div className="container" id="logging-form-section">
    <Form id="LogingForm" className="text-center">
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" name="email" value={values.email} onChange={(e) => setvalues({ ...values, email: e.target.value })} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" name="password" value={values.password} onChange={(e) => setvalues({ ...values, password: e.target.value })} />
      </Form.Group>

      <Button variant="outline-primary" type="submit" id="LG-Button">
        Sign In
      </Button>
    
      <div id="logging-alert">If you don't have account? <a href="/Registation">Sign Up</a></div>

    </Form>
    </div>

   </div>
  )
}

export default Login;