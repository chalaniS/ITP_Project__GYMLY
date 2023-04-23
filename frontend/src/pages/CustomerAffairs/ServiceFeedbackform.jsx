import React from "react";
import { useState } from "react";
import {FaMailBulk,FaUserAlt} from 'react-icons/fa';
import {AiFillStar,AiOutlineStar} from 'react-icons/ai';
import '../../App.css'
import '../../Styles/CustomerAffairs/Feedbackform.css'
import axios from 'axios';
import { showLoadingSpinner, hideLoadingSpinner } from '../../Components/Loading/Loading.js'

const API_URL = 'http://localhost:5000/api/CustomerAffairs';

const handleSubmit = async (userId,name,email,rating,feedback) => {

    showLoadingSpinner();

    try {
        const promises = [];

        
            promises.push(
                axios.post(API_URL, {
                    userId: "45821463#23669545",
                    name:name,
                    email:email,
                    rating:rating,
                    feedback:feedback
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
const ServiceFeedbackform = () => {
    const [userId,setUserId] = useState('');
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [rating,setRating] = useState(0);
    const [feedback,setFeedback] = useState('');
    

    return(
        
        <body class="bgimg">
        
            <section class="feedbacksection">
            
                <h1 class="title">Give Your Feedback</h1>
                <form onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSubmit(userId,name,email,rating,feedback);
                                }}>
                
                <div class = "feedbackcontainer">
                <div class= "feedbackid">
                    <input class="my-input" type="text" placeholder="Full name" onChange={(event) => setName(event.target.value)} value={name} required></input>
                    <FaUserAlt class="user"/>
                </div>
                <div class="feedbackid">
                    <input class="my-input" type="email" placeholder="Email Address" onChange={(event) => setEmail(event.target.value)} value={email} required></input>
                    <FaMailBulk class="mail"/>
                </div>
                <div>
                        <label class="servicerate">Rate our service</label>
                        {Array(5).fill().map((_,index)=>
                        rating >= index + 1 ?
                        (<AiFillStar style={{color:'orange'}} onClick={()=>setRating(index + 1)} class="FillStar" />
                        ):(<AiOutlineStar style={{color:'orange'}} onClick={()=>setRating(index + 1)} class="OutlineStar"/>))}
                    </div>
                <textarea cols="30" rows="5" placeholder="Enter your opinions here.." class="serviceText" onChange={(event) => setFeedback(event.target.value)} value={feedback} required></textarea>
                <button class="primary__btn" id="button_style" type="submit">Submit</button>
                <button class="primary__btn" id="button_style" type="reset">Cancel</button>
                </div>
                </form>
            

            </section>
            
            
    </body>
        
    )
}

export default ServiceFeedbackform;