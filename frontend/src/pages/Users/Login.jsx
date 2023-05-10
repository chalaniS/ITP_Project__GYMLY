<<<<<<< HEAD
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logo from "../../images/logo.png";
import { useHistory } from 'react-router-use-history'
import axios from 'axios';
import "./Style/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  // handle Login
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/users/login', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.userId);
      history.push('/');
      window.location.href = '/dashboard';
    } 
    catch (error) {   // if error occurs while login
      alert('Check your email or password');
      console.log(error);
    }
  };


  return (
    <div className="container-fluid" id="logging">
      <div className="container" id="logging-form-section">
        <Form id="LogingForm" className="text-center" onSubmit={handleLogin}>
          <img
            src={logo}
            alt="logo"
            width="120px"
            height="auto"
            className="img-fluid"
          />
          <div id="logging-title">Sign In</div>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="outline-primary" type="submit" id="LG-Button">
            Sign In
          </Button>
          <div id="logging-alert">
            If you don't have account? <a href="/Registation">Sign Up</a>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
=======
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
>>>>>>> origin/Sujithra
