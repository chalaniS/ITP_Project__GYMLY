import express from "express";
import {getInstructorFeedbacks,getInstructorFeedback,createInstructorFeedback,deleteInstructorFeedback, updateInstructorFeedback} from '../../controller/CustomerAffairs/instructorFeedbackController.js'
const instructorFeedbackRouter=express.Router()
//GET all instructor feedbacks
instructorFeedbackRouter.get('/',getInstructorFeedbacks)

//GET a single instructor feedback
instructorFeedbackRouter.get('/:id',getInstructorFeedback)

//POST a new instructor feedback
instructorFeedbackRouter.post('/',createInstructorFeedback)

//DELETE a instructor feedback
instructorFeedbackRouter.delete('/:id',deleteInstructorFeedback)

//UPDATE a instructor feedback
instructorFeedbackRouter.patch('/:id',updateInstructorFeedback)

export default instructorFeedbackRouter;
//This file is to register different routes