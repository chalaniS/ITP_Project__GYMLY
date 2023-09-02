import React from "react";
import '../Style/ApplyLeave.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ApplyLeave = () => {
    return (
        <div className="container-fluid" id="aleave">
            <div id="form-section">
            <form className="text-center" id="aleave-form">
                <div className="mb-3 fw-normal" id="aleave-title">Apply Leave</div>
                
                    <Form.Group className="mb-3" >
                        <Form.Control className="aleave-inputs-selct-date" onFocus={(e) => (e.target.type = "date")} type="text"  placeholder="Date-From:" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Control className="aleave-inputs-selct-date" onFocus={(e) => (e.target.type = "date")} type="text"  placeholder="Date-To:" />
                    </Form.Group>

                    <Form.Select id="al-inputs-selct" aria-label="Default select example">
                        <option>Leave Types</option>
                        <option value="Annual">Annual Leave</option>
                        <option value="Casual">Casual Leave</option>
                        <option value="Medical">Medical Leave</option>
                        
                    </Form.Select>
                
                    <Button variant="outline-primary" type="submit" id="reg-sub-btn">
                        Apply
                    </Button>
            </form>
            </div>
        </div>
    );
}

 
export default ApplyLeave;