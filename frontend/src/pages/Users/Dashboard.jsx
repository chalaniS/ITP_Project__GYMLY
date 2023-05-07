import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import { Person } from 'react-bootstrap-icons';
import { Activity } from "react-bootstrap-icons";
import { People } from "react-bootstrap-icons";
import { Bell } from "react-bootstrap-icons";
import { CreditCard } from "react-bootstrap-icons";
import { Boxes } from "react-bootstrap-icons";
import './Style/Dashboard.css'

const Dashboard = () => {
    
    // Retrieve token and userId values from localStorage
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    


    {/*Get Hours*/}
    let myDate = new Date()
    let hour= myDate.getHours()
    {/*Get Hours*/}


    return (
      <div  className="container-fluid"  id="userdashboard-section">

      <div className="Container">
       {/*Have to do some changes on this elemet after backend*/}
       <div className="container" id="userdashboard-header">
         <div className="container text-center content-justify-Center" id="dashboard-title">{hour < 12 ? "Good Morning" : "Good evening"} Lakindu</div>
       </div>
       
       <div className="container d-flex content-justify-center text-center" id="cards">
        <div className="row content-justify-center text-center">
            <div className="col" >
          
                <div className="dsbd-cards ">
                  <div className="dbd-title text-center"> Profile</div>
                  {/*icon*/}
                  <Person class="text-center img-fluid" size={100} id="dsbd-cards-icons"/>
                  {/*icon*/}

                  {/*Button*/}
                  <div id="dsbd-cards-links">
                    <Button variant="outline-primary" size="sm" id="dsbd-cards-links-btn" onClick={event =>  window.location.href='/Userprofile'} >Go &#8250;</Button>
                  </div>
                  {/*Button*/}
                </div>
            </div>

            <div className="col">
                 <div className="dsbd-cards">
                     <div className="dbd-title text-center">BMI</div>
                   {/*icon*/}
                    <Activity class="text-center img-fluid" size={100} id="dsbd-cards-icons"/>
                    {/*icon*/}

                  {/*Button*/}
                  <div id="dsbd-cards-links">
                    <Button variant="outline-primary" size="sm" id="dsbd-cards-links-btn">Go &#8250;</Button>
                  </div>
                  {/*Button*/}
                 </div>
            </div>

            <div className="col">
                  <div className="dsbd-cards">
                     <div className="dbd-title text-center">Trainers {'\n'}</div>

                  {/*icon*/}
                  <People class="text-center img-fluid" size={100} id="dsbd-cards-icons"/>
                  {/*icon*/}

                  {/*Button*/}
                  <div id="dsbd-cards-links">
                    <Button variant="outline-primary" size="sm" id="dsbd-cards-links-btn">Go &#8250;</Button>
                  </div>
                  {/*Button*/}
                 </div>
            </div>

            <div className="col">
            <div className="dsbd-cards">
                  <div className="dbd-title text-center">Notifications {'\n'}</div>

                  {/*icon*/}
                  <Bell class="text-center img-fluid" size={100} id="dsbd-cards-icons"/>
                  {/*icon*/}
                  
                  {/*Button*/}
                  <div id="dsbd-cards-links">
                    <Button variant="outline-primary" size="sm" id="dsbd-cards-links-btn">Go &#8250;</Button>
                  </div>
                  {/*Button*/}                    

            </div>
            </div>


            <div className="col">
            <div className="dsbd-cards">
                     <div className="dbd-title text-center">Payment</div>
                  {/*icon*/}
                  <CreditCard class="text-center img-fluid" size={100} id="dsbd-cards-icons"/>
                  {/*icon*/}

                  {/*Button*/}
                  <div id="dsbd-cards-links">
                    <Button variant="outline-primary" size="sm" id="dsbd-cards-links-btn">Go &#8250;</Button>
                  </div>
                  {/*Button*/}

            </div>
            </div>

            <div className="col">
            <div className="dsbd-cards">
                     <div className="dbd-title text-center">Packages</div>
                  {/*icon*/}
                  <Boxes class="text-center img-fluid" size={100} id="dsbd-cards-icons"/>
                  {/*icon*/}

                  {/*Button*/}
                  <div id="dsbd-cards-links">
                    <Button variant="outline-primary" size="sm" id="dsbd-cards-links-btn">Go &#8250;</Button>
                  </div>
                  {/*Button*/}

            </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
    )
  }

  export default Dashboard;



