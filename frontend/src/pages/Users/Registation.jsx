import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './Style/Reg.css'

const Registation = () => {
    return (
        
    <div id="registation">
        <div className="container" id="form-section">
        <Form id="RegForm" className="text-center">
        {/* Title */}
        <div className="mb-3 fw-normal" id="reg-title">Register</div>
        {/* Title */}

          <Form.Group className="mb-3 inputs" >
            <Form.Control className="inputs-sub" type="text" placeholder="Enter name" />
          </Form.Group>

          <Form.Group className="mb-3 inputs">
            <Form.Control className="inputs-sub" type="text" placeholder="Enter NIC" />
          </Form.Group>
        
          <Form.Group className="mb-3 inputs">
            <Form.Control className="inputs-sub" type="text" placeholder="Enter email"/>
          </Form.Group>

          <Form.Group className="mb-3 inputs">
            <Form.Control className="inputs-sub" type="text" placeholder="Enter Address" />
          </Form.Group>

          <Form.Group className="mb-3 inputs">
            <Form.Control className="inputs-sub" type="text" placeholder="Enter Contact Number" />
          </Form.Group>

        <div className="row">
           <div className="col">
            <Form.Select id="inputs-selct" aria-label="Default select example">
                <option>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </Form.Select>
            </div>

           <div className="col">
            <Form.Group className="mb-3" >
            <Form.Control className="inputs-selct-date" onFocus={(e) => (e.target.type = "date")} type="text"  placeholder="Enter Birthday" />
            </Form.Group>
            </div>
        </div>

        {/* Weight and height form*/}
        <div className="row">
           <div className="col">
           <Form.Group className="mb-3 inputs-wnh">
            <Form.Control className="inputs-wnh-s" type="number" placeholder="Enter Height (cm)" />
          </Form.Group>
            </div>

           <div className="col">
           <Form.Group className="mb-3 inputs-wnh">
            <Form.Control className="inputs-wnh-s" type="number" placeholder="Enter Weight (Kg)" />
          </Form.Group>
            </div>
        </div>
        {/* Weight and height form*/}
    
          <Button variant="outline-primary" type="submit" id="reg-sub-btn">
            Sign In
          </Button>

        </Form>
        </div>
    </div>
 
    );
    }

export default Registation;