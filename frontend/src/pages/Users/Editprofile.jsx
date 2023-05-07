import React from "react";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./Style/Editprofile.css";

const USERNAME = "6444eb6aaf90ced21b6cff1b";

{/*There is form to update data. create function to handle by update of giving user name using proxy method */}

const Editprofile = (props) => {
    const [Name, setName] = useState("");
    const [NIC, setNIC] = useState("");
    const [Email, setEmail] = useState("");
    const [Address, setAddress] = useState("");
    const [PhoneNum, setphoneNum] = useState("");

    const handleUpdate = (e) => {
        e.preventDefault();
        const user = {Name, NIC, Email, Address, PhoneNum};

        const res = fetch('/users/'+ USERNAME, {
            method: 'PATCH',
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
            setNIC("")
            setEmail("")
            setAddress("")
            setphoneNum("")
            alert('You have successfully registered')
        }

    }




    return (
        <div className="container-fluid d-flex justify-content-center" id="usereditdata">
        
        <Form id="EditForm" className="text-center" onSubmit={handleUpdate}>

            {/* Title */}
            <div className="mb-3 fw-normal" id="reg-title">Edit Profile</div>
            {/* Title */}
                  
                <Form.Group className="mb-3 inputs" >
                    <Form.Control type="file" placeholder="Upload Profile Picture" accept=".png,.jpg,jpeg"  />
                </Form.Group>

                <Form.Group className="mb-3 inputs" >
                    <Form.Control type="text" placeholder="Name" value={Name} onChange={(e)=> setName(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3 inputs" >
                    <Form.Control type="text" placeholder="NIC" value={NIC} onChange={(e)=> setNIC(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3 inputs" >
                    <Form.Control type="email" placeholder="Email" value={Email} onChange={(e)=> setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3 inputs" >
                    <Form.Control type="text" placeholder="Address" value={Address} onChange={(e)=> setAddress(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3 inputs" >
                    <Form.Control type="text" placeholder="Contact Number" value={PhoneNum} onChange={(e)=> setphoneNum(e.target.value)}/>
                </Form.Group>

                <Button type="submit" id="editProfile-submit-button" className="outline-dark">
                Save Changes
                </Button>

            </Form>
            
        </div>
    )
}

export default Editprofile;