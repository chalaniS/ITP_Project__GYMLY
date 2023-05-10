import React from "react";
<<<<<<< HEAD
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from '../../images/logo.png'
import './Style/Reg.css'



const Registation = (props) => {
  
    const [Name, setName] = useState("");
    const [NIC, setNic] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Address, setAddress] = useState("");
    const [Phone, setContact] = useState("");
    const [Gender, setGender] = useState("");
    const [Birthday, setBirthday] = useState("");
    const [Height, setHeight] = useState("");
    const [Weight, setWeight] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
    
      const user = {Name,NIC,Email,Password,Address,Phone,Gender,Birthday,Height,Weight};
    
      try {
        const res = await fetch('/users', {
          method: 'POST',
          body: JSON.stringify(user),
          headers: {"Content-Type": "application/json"},
        });
    
        if (res.ok) {
        window.alert('You have successfully registered!');
        window.location.href = '/loging'; 
        } else {
          const errorData = await res.json();
          window.alert(`Error: ${errorData.message}`);
        }
      } catch (error) {
        console.error(error);
        window.alert('An error occurred while submitting the registration form. Please try again later.');
      }
    };

    {/* Form - selecting */}

  return (
        
    <div id="registation" className="container-fluid" >

        <div className="container" id="form-section">

        <Form id="RegForm" className="text-center" onSubmit={handleSubmit}>

         {/* Logo */}
        <div className="mb-3" id="reg-logo">
            <img src={logo} alt="logo" width="120" height="auto" className="img-fluid" />
        </div>


        {/* Title */}
        <div className="mb-3 fw-normal" id="reg-title">Register</div>
        {/* Title */} 


          <Form.Group className="mb-3 inputs" >
            <Form.Control className="inputs-sub" type="text" placeholder="Enter name"  name="name" value={Name} onChange={(e)=> setName(e.target.value)}  required/>
          </Form.Group>

          <Form.Group className="mb-3 inputs">
            <Form.Control className="inputs-sub" type="text" placeholder="Enter NIC"  name="nic" value={NIC} onChange={(e) => setNic(e.target.value)} required/>
          </Form.Group>
        
          <Form.Group className="mb-3 inputs">
            <Form.Control className="inputs-sub" type="text" placeholder="Enter email" name="email" value={Email} onChange={(e) => setEmail(e.target.value)} required/>
          </Form.Group>

          <Form.Group className="mb-3 inputs">
            <Form.Control className="inputs-sub" type="password" placeholder="Enter Password" name="password" value={Password} onChange={(e) => setPassword(e.target.value)} required/>
          </Form.Group>

          <Form.Group className="mb-3 inputs">
            <Form.Control className="inputs-sub" type="text" placeholder="Enter Address" name="address" value={Address} onChange={(e) => setAddress(e.target.value)} required/>
          </Form.Group>

          <Form.Group className="mb-3 inputs">
            <Form.Control className="inputs-sub" type="text" placeholder="Enter Contact Number" name="contact" value={Phone} onChange={(e) => setContact(e.target.value)} required/>
          </Form.Group>

        <div className="row">
           <div className="col">
            <Form.Select id="inputs-selct" aria-label="Default select example" placeholder="Enter you Gender" className="gender-selct" value={Gender} onChange={(e) => setGender(e.target.value)} required>
            <option value={null} >Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </Form.Select>
            </div>

           <div className="col">
            <Form.Group className="mb-3" >
            <Form.Control className="inputs-selct-date" onFocus={(e) => (e.target.type = "date")} type="text"  placeholder="Enter Birthday" name="birthday" value={Birthday} onChange={(e) => setBirthday(e.target.value)} />
            </Form.Group>
            </div>
        </div>

        {/* Weight and height form*/}
        <div className="row">
           <div className="col">
           <Form.Group className="mb-3 inputs-wnh">
            <Form.Control className="inputs-wnh-s" type="number" placeholder="Enter Height (cm)"  name="height" value={Height} onChange={(e) => setHeight(e.target.value)} />
          </Form.Group>
            </div>

           <div className="col">
           <Form.Group className="mb-3 inputs-wnh">
            <Form.Control className="inputs-wnh-s" type="number" placeholder="Enter Weight (Kg)" name="weight" value={Weight} onChange={(e) => setWeight(e.target.value)} />
          </Form.Group>
            </div>
        </div>
        {/* Weight and height form*/}
    
          <Button variant="outline-primary" type="Submit" id="reg-sub-btn" >
            Register
          </Button>

          <div id="logging-alert">If you already have account? <a href="/Loging">Sign In</a></div>
        </Form>
        
        </div>
    
    </div>
 
=======

const Registation = () => {
    return (
        <div>
        <h1>Registation</h1>
        </div>
>>>>>>> origin/Sujithra
    );
    }

export default Registation;