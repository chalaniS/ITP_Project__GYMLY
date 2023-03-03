import React from "react";
import '../../Styles/CustomerAffairs/SearchInstructor.css'
import pic from '../../images/CustomerAffairs/fitnessInstructor.jpg'



const SearchInstructor = () => {
    return(
        
        <body>
           <h1><center>Our Fitness Instructors</center></h1>
           <div class="instsearchbar">
            <label class="instsearch">Search</label>
            <input type="text" placeholder="Search"></input>
           </div>
           <div class="instructor-container">
                <div class="instructor-card">
                    <div class="imgBx">
                        <a href="#">
                            <img src={pic}></img>
                        </a>
                        <h2>Mr.Romesh Pathirana</h2>
                        <p>Experience : 3 Yrs<br/>Ratings : Excellent</p>
                    </div>
                </div>

                <div class="instructor-card">
                    <div class="imgBx">
                        <a href="#">
                            <img src={pic}></img>
                        </a>
                        <h2>Mr. KUMAR SILVA</h2>
                        <p>Experience : 5 Yrs<br/>Ratings : Excellent</p>
                    </div>
                </div>
                <div class="instructor-card">
                    <div class="imgBx">
                        <a href="#">
                            <img src={pic}></img>
                        </a>
                        <h2>Mr. RAYAN ALWIS</h2>
                        <p>Experience : 2 Yrs<br/>Ratings : Good</p>
                    </div>
                </div>
                <div class="instructor-card">
                    <div class="imgBx">
                        <a href="#">
                            <img src={pic}></img>
                        </a>
                        <h2>Mr. WIJEY FERNANDO</h2>
                        <p>Experience : 1 Yrs<br/>Ratings : Good</p>
                    </div>
                </div>
           </div>
        </body>
        
    )
}

export default SearchInstructor;