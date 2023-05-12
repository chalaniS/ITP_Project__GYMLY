import express from "express";
import {getServiceFeedbacks,getServiceFeedback,createServiceFeedback,deleteServiceFeedback,updateServiceFeedback} from '../../controller/CustomerAffairs/serviceFeedbackController.js'
const serviceFeedbackRouter=express.Router()
//GET all service feedbacks
serviceFeedbackRouter.get('/',getServiceFeedbacks)

//GET a single service feedback
serviceFeedbackRouter.get('/:id',getServiceFeedback)

//POST a new service feedback
serviceFeedbackRouter.post('/',createServiceFeedback)

//DELETE a service feedback
serviceFeedbackRouter.delete('/:id',deleteServiceFeedback)

//UPDATE a service feedback
serviceFeedbackRouter.patch('/:id',updateServiceFeedback)

export default serviceFeedbackRouter;
//This file is to register different routes