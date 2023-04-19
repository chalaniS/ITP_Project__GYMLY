import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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

        const user = {Name,NIC,Email,Password,Address,Phone,Gender,Birthday,Height,Weight}

        const res = fetch('/users', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {"Content-Type": "application/json"},
        })

        const data = res.json()

        if(!res.ok){
            console.log(console.error)
            alert("can't add user")
        }
        else if(res.ok){
            setName("")
            setNic("")
            setEmail("")
            setPassword("")
            setAddress("")
            setContact("")
            setGender("")
            setBirthday("")
            setHeight("")
            setWeight("")
            alert('You have successfully registered')
        }
    }


  return (
        
    <div id="registation" className="container-fluid" >

        <div className="container" id="form-section">

        <Form id="RegForm" className="text-center" onSubmit={handleSubmit}>

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
            <Form.Select id="inputs-selct" aria-label="Default select example" className="gender-selct" value={Gender} cnChange={(e) => setGender(e.target.value)}>
              <option> Select Gender</option>
                <option value="Male" >Male</option>
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
    
          <Button variant="outline-primary" type="Submit" id="reg-sub-btn">
            Register
          </Button>

          <div id="logging-alert">If you already have account? <a href="/Loging">Sign In</a></div>
        </Form>
        
        </div>
    
    </div>
 
    );
    }

export default Registation;