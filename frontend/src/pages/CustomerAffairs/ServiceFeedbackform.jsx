import React from "react";
import { useState } from "react";
import '../../Styles/CustomerAffairs/ServiceFeedbackform.css'
import {FaMailBulk,FaUserAlt} from 'react-icons/fa';
import {AiFillStar,AiOutlineStar} from 'react-icons/ai';

const ServiceFeedbackform = () => {
    const [number,setnumber] = useState(0);
    return(
        
        <body>
        <script src="https://kit.fontawesome.com/67c66657c7.js"></script>
            <section class="servicesection"></section>
            
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
                        <label id="rate">Rate our service</label>
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

export default ServiceFeedbackform;