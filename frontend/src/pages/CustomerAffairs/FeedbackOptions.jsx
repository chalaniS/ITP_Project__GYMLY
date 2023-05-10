import React from "react";
import '../../Styles/CustomerAffairs/Options.css'
import '../../App.css'
import { showLoadingSpinner,hideLoadingSpinner } from "../../Components/Loading/Loading";
import { useNavigate } from 'react-router-dom'


const FeedbackOptions = () => {
    const navigate = useNavigate();
    const handleInstructorFeedbackClick = () => {
        navigate(`/InstructorFeedbackform`);
    };
    const handleServiceFeedbackClick = () => {
        navigate(`/ServiceFeedbackform`);
    };
    return(
        
        <body>
        
            <section class="optionssec">
            <h1 class="title">Select the option you wish to proceed</h1>
            <div class="Optionscontainer">
                
                <button class="primary__btn" onClick={handleInstructorFeedbackClick}>Fitness Instructor Feedback</button>
                <button class="primary__btn" id="servicebutton" onClick={handleServiceFeedbackClick}>Service Feedback</button>
                
            </div>
            </section>
            
            
    </body>
        
    )
}

export default FeedbackOptions;