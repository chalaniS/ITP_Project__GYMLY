import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Style/Login.css';
import { useState } from "react";
import * as Icons from 'react-bootstrap-icons';


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (  
  <div className="container-fluid" id="logging">
   
    <div className="container" id="logging-form-section">
    <Form id="LogingForm" className="text-center">

      <div id="logging-title">Sign In</div>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Enter password" name="password" value={password} onChange={(e) => setPassword(e.target.value )} required/>
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