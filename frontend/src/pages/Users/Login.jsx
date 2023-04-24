import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logo from "../../images/logo.png";
import * as Icons from "react-bootstrap-icons";
import "./Style/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateUser = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }
    // Call login API or validate user
    console.log("Validated user:", email, password);
  };

  return (
    <div className="container-fluid" id="logging">
      <div className="container" id="logging-form-section">
        <Form id="LogingForm" className="text-center" onSubmit={validateUser}>
          <img src={logo} alt="logo" width="120px" height="auto" className="img-fluid" />
          <h2 id="logging-title">Sign In</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Enter password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </Form.Group>
          {error && <div className="alert alert-danger">{error}</div>}
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