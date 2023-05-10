import React, { useState,useEffect } from "react";
import '../../Styles/CustomerAffairs/EditInstructorFeedback.css'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { showLoadingSpinner, hideLoadingSpinner } from '../../Components/Loading/Loading.js'
import '../../App.css'




const EditInstructorFeedback = () => {
    const { id } = useParams();
    const [customerName,setCustomerName] = useState('');
    const [customerEmail,setCustomerEmail] = useState('');
    const [instructorName,setInstructorName] = useState('');
    const [instructorRating,setInstructorRating] = useState(0);
    const [instructorfeedback,setInstructorFeedback] = useState('');

    useEffect(() => {
        
        const fetchInstructorFeedback = async () => {
            try {
                showLoadingSpinner();
                const response = await axios.get(`http://localhost:5000/api/instructorFeedback/${id}`);
                const feedback = response.data;
                setCustomerName(feedback.customerName);
                setCustomerEmail(feedback.customerEmail);
                setInstructorName(feedback.instructorName);
                setInstructorRating(feedback.instructorRating);
                setInstructorFeedback(feedback.instructorfeedback);
                console.log(response.data);
            } catch (error) {
                console.log('Error fetching instructor feedback:', error);
            }
            hideLoadingSpinner();
        };
        fetchInstructorFeedback();
      }, [id]);

      const handleSubmit = (event) => {
        event.preventDefault();
        showLoadingSpinner();
        console.log({
          customerName,
          customerEmail,
          instructorName,
          instructorRating,
          instructorfeedback,
        }); // Log the form data
        axios
          .patch(`http://localhost:5000/api/instructorFeedback/${id}`, {
            customerName: customerName,
            customerEmail: customerEmail,
            instructorName: instructorName,
            instructorRating: instructorRating,
            instructorfeedback: instructorfeedback,
          })
          .then((response) => {
            console.log(response);
            hideLoadingSpinner();
            window.alert("Data has been updated successfully");
            window.location = "http://localhost:3000/InstructorProfile";
            console.log("Successfully updated list");
          })
          .catch((error) => {
            console.log(error);
            console.log("error when updating the data");
            window.alert("Data is not updated successfully");
            window.location.reload();
          });
      };
      
    
    return(
        <body class="bgimg">
        
        <section class="feedbacksection">
        
            <h1 class="title">Edit Your Feedback</h1>
            <form onSubmit={handleSubmit}>
            
            <div class = "Instructorfeedbackcontainer">
            
            <div>
                    <label class="rate">Give your new rating</label>
                    {Array(5).fill().map((_,index)=>
                    instructorRating >= index + 1 ?
                    (<AiFillStar style={{color:'orange'}} onClick={()=>setInstructorRating(index + 1)} value={instructorRating} class="FillStar"/>
                    ):(<AiOutlineStar style={{color:'orange'}} onClick={()=>setInstructorRating(index + 1)} class="OutlineStar"/>))}
                </div>
            <textarea cols="30" rows="5" placeholder="Enter your opinions here.." class="feedbacktext" name="instructorfeedback" onChange={(event) => setInstructorFeedback(event.target.value)} value={instructorfeedback} required></textarea>
            <button class="primary__btn" id="button_style_ins" type="submit">Submit</button>
            <button class="primary__btn" id="button_style_ins" type="reset">Cancel</button>
            </div>
            </form>
        

        </section>
        
        
</body>
        
    )
}

export default EditInstructorFeedback;