import React, { useState } from "react";
import '../../Styles/CustomerAffairs/InstFeedbackform.css'
import {FaMailBulk,FaUserAlt} from 'react-icons/fa';
import {AiFillStar,AiOutlineStar} from 'react-icons/ai';

import '../../App.css'
const InstructorFeedbackform = () => {
    const [number,setnumber] = useState(0);
    
    return(
        <body>
            <script src="https://kit.fontawesome.com/67c66657c7.js"></script>
                <section class="instsection"></section>
                
                <div class="feedbackcontainer">
                    <form>
                    <h1>Give Your Feedback</h1>
                    <div class= "feedbackid">
                        <input type="text" placeholder="Full name"></input>
                        <FaUserAlt class="user"/>
                    </div>
                    <div class="feedbackid">
                        <input type="email" placeholder="Email Address"></input>
                        <FaMailBulk class="mail"/>
                    </div>
                    <div>
                        <label id="ftins">Select Your Fitness Instructor</label>
                        <select>
                            <option>Select</option>
                            <option>Mr. ROMESH PATHIRANA</option>
                            <option>Mr. KUMAR SILVA</option>
                            <option>Mr. RAYAN ALWIS</option>
                            <option>Mr. WIJEY FERNANDO</option>
                            <option>Mr. REYMOND BALASOORIYA</option>
                        </select>
                    </div>
                    
                    <div>
                        <label id="rate">Rate Your Fitness Instructor</label>
                        {Array(5).fill().map((_,index)=>
                        number >= index + 1 ?
                        (<AiFillStar style={{color:'orange'}} onClick={()=>setnumber(index + 1)} class="FillStar"/>
                        ):(<AiOutlineStar style={{color:'orange'}} onClick={()=>setnumber(index + 1)} class="OutlineStar"/>))}
                    </div>
                    <textarea cols="15" rows="5" placeholder="Enter your opinions here.."></textarea>
                    <button>Submit</button>
                    <button>Cancel</button>
                    </form>
                </div>
                
                
                
                
        </body>
        
    )
}

export default InstructorFeedbackform;