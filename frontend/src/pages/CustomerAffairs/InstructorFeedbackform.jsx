import React, { useState } from "react";
import '../../Styles/CustomerAffairs/Feedbackform.css'
import {FaMailBulk,FaUserAlt} from 'react-icons/fa';
import {AiFillStar,AiOutlineStar} from 'react-icons/ai';
import axios from 'axios';
import { showLoadingSpinner, hideLoadingSpinner } from '../../Components/Loading/Loading.js'
import '../../App.css'

const API_URL = 'http://localhost:5000/api/instructorFeedback';

const handleSubmit = async (userId,customerName,customerEmail,instructorName,instructorRating,instructorfeedback) => {

    showLoadingSpinner();

    try {
        const promises = [];

        
            promises.push(
                axios.post(API_URL, {
                    userId: "45821463#23669545",
                    customerName:customerName,
                    customerEmail:customerEmail,
                    instructorName:instructorName,
                    instructorRating:instructorRating,
                    instructorfeedback:instructorfeedback
                })
            );
       

        await Promise.all(promises);
        hideLoadingSpinner();
        window.alert('Feedback has been submitted successfully');
        window.location.reload();
        console.log('Successfully added to list');
    } catch (error) {
        console.log(error);
    }
};
const InstructorFeedbackform = () => {
    
    const [userId,setUserId] = useState('');
    const [customerName,setCustomerName] = useState('');
    const [customerEmail,setCustomerEmail] = useState('');
    const [instructorName,setInstructorName] = useState('');
    const [instructorRating,setInstructorRating] = useState(0);
    const [instructorfeedback,setInstructorFeedback] = useState('');
    
    return(
        <body class="bgimg">
        
        <section class="feedbacksection">
        
            <h1 class="title">Give Your Feedback</h1>
            <form onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSubmit(userId,customerName,customerEmail,instructorName,instructorRating,instructorfeedback);
                                }}>
            
            <div class = "Instructorfeedbackcontainer">
            <div class= "feedbackid">
                <input class="my-input-Ins" type="text" placeholder="Full name" onChange={(event) => setCustomerName(event.target.value)} value={customerName} required></input>
                <FaUserAlt class="user"/>
            </div>
            <div class="feedbackid">
                <input class="my-input-Ins" type="email" placeholder="Email Address" onChange={(event) => setCustomerEmail(event.target.value)} value={customerEmail} required></input>
                <FaMailBulk class="mail"/>
            </div>
            <div>
                        <label class="ftIns">Select Your Fitness Instructor</label>
                        <select class="insSelect" onChange={(event) => setInstructorName(event.target.value)} value={instructorName} required>
                            <option>Select</option>
                            <option>Mr. Leanne Graham</option>
                            <option>Mr. Ervin Howell</option>
                            <option>Mr. Kurtis Weissnat</option>
                            <option>Mr. Nicholas Runolfsdottir V</option>
                            <option>Mr. Glenna Reichert</option>
                            
                        </select>
            </div>
            <div>
                    <label class="rate">Rate your fitness instructor</label>
                    {Array(5).fill().map((_,index)=>
                    instructorRating >= index + 1 ?
                    (<AiFillStar style={{color:'orange'}} onClick={()=>setInstructorRating(index + 1)} class="FillStar"/>
                    ):(<AiOutlineStar style={{color:'orange'}} onClick={()=>setInstructorRating(index + 1)} class="OutlineStar"/>))}
                </div>
            <textarea cols="30" rows="5" placeholder="Enter your opinions here.." class="feedbacktext" onChange={(event) => setInstructorFeedback(event.target.value)} value={instructorfeedback} required></textarea>
            <button class="primary__btn" id="button_style_ins" type="submit">Submit</button>
            <button class="primary__btn" id="button_style_ins" type="reset">Cancel</button>
            </div>
            </form>
        

        </section>
        
        
</body>
        
    )
}

export default InstructorFeedbackform;