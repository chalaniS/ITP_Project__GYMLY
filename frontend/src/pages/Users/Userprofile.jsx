import profilepic from '../../images/profilePics/profilepic.png'
import './Style/Userprofile.css'
import * as Icons from 'react-bootstrap-icons';
import { useState, useEffect } from "react";

const Userprofile = () => {


        // Retrieve token and userId values from localStorage
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('userId')
    
        //get user details from backend using token and userId
        const [user, setUser] = useState([])
        
        useEffect(() => {
          fetch(`http://localhost:5002/users/${userId}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          })
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.error(error));
        }, [userId, token]);
        

        return (
            <div className="container-fluid" id='userprofile-section'>

                {/* Row for Profile Pic and name */}
                <div className="container" id="Profile-Name-Pic-section">
                    <div className="container text-center" id="Pic-Section">
                    </div>
                    <div className="text-center" id='name-title'>
                        <div>
                            {user.Name}
                        </div>
                    </div>
                </div>

                {/*User details section*/}
                <div className="container" id='userdetails-section'>
                <div className='user-inftomations-divs' id="email"><Icons.EnvelopeFill className='icons'/> :  {user.Email}</div>
                <div className='user-inftomations-divs' id="phoneNumber"><Icons.TelephoneFill className='icons'/> :  0{user.Phone}</div>
                <div className='user-inftomations-divs' id="Address"><Icons.HouseFill className='icons'/> :  {user.Address} </div>
                <div className='user-inftomations-divs' id="Gender"><Icons.PeopleFill className='icons'/> :  {user.Gender}</div>
                <div className='user-inftomations-divs' id="DOB"><Icons.CalendarFill className='icons'/> :  {user.Height}Cm</div>
                <div className='user-inftomations-divs' id="Height"><Icons.ArrowUpCircleFill className='icons'/> :  {user.Weight}Kg</div>

                
                </div>

                <div className="container text-center">
                        <div className="col" id='btn-section'>
                            <button className="btn btn-primary" id="edit-btn" onClick={event =>  window.location.href='/setting'}  > <Icons.GearWideConnected/> Edit Profile</button>
                        </div>
                </div>

            </div>
        );
    }

export default Userprofile;