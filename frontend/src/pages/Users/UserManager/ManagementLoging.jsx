import {React, useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import logo from '../../../images/logo.png';
import '../Style/ManagementLogin.css';

const ManagmentLogin = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    {/*User Validation and redirect to relevant page */}
    const handleLogin = (e) => {
        e.preventDefault();
        if(username === 'userAdmin' && password === 'uadmin'){
            window.location.href = '/managerDashboard';
        }
        else if(username === 'empAdmin' && password === 'Eadmin')
        {
            window.location.href = '/EmpDashboard';
        }
        else{
            alert('Invalid Username or Password. Please try again.');
        }
    }
    {/*User Validation and redirect to relevant page */}


    
 return ( 
     <div className="container-fluid" id="Mangement-logging">
   
    <div className="container" id="logging-form-section">
    <Form id="LogingForm" className="text-center">
      
      <div id="">
        <img src={logo} alt="logo" width="120px" height="auto" className="img-fluid"/>
      </div>
      
      <div id="logging-title">Sign In</div>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter UserName" name="email" value={username} onChange={(e) => setUsername(e.target.value)} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Enter Password" name="password" value={password} onChange={(e) => setPassword(e.target.value )} required/>
      </Form.Group>

      <Button variant="outline-primary" type="submit" id="LG-Button" onClick={handleLogin} >
        Sign In
      </Button>
    
      <div id="logging-alert" className='text-danger'  >Only For Management</div>

    </Form>
    </div>

   </div>
   )

}

export default ManagmentLogin