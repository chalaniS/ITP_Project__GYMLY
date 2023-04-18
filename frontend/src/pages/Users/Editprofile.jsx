import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "./Style/Editprofile.css";

const Editprofile = () => {
    return (
        <div className="container-fluid d-flex justify-content-center" id="usereditdata">
        
        <Form id="EditForm" className="text-center">

            {/* Title */}
            <div className="mb-3 fw-normal" id="reg-title">Edit Profile</div>
            {/* Title */}
                  
                <Form.Group className="mb-3 inputs" >
                    <Form.Control type="file" placeholder="Upload Profile Picture" accept=".png,.jpg,jpeg"  />
                </Form.Group>

                <Form.Group className="mb-3 inputs" >
                    <Form.Control type="text" placeholder="Name" onChange={onchange}/>
                </Form.Group>

                <Form.Group className="mb-3 inputs" >
                    <Form.Control type="text" placeholder="NIC" onChange={onchange}/>
                </Form.Group>

                <Form.Group className="mb-3 inputs" >
                    <Form.Control type="email" placeholder="Email" onChange={onchange}/>
                </Form.Group>

                <Form.Group className="mb-3 inputs" >
                    <Form.Control type="text" placeholder="Address" onChange={onchange}/>
                </Form.Group>

                <Form.Group className="mb-3 inputs" >
                    <Form.Control type="text" placeholder="Contact Number" onChange={onchange}/>
                </Form.Group>

                <Button type="submit" id="editProfile-submit-button" className="outline-dark">
                Save Changes
                </Button>

            </Form>
            
        </div>
    )
}

export default Editprofile;