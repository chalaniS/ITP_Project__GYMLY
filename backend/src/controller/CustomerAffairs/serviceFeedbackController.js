import serviceFeedback from "../../models/CustomerAffairs/serviceFeedbackModel.js";
import mongoose from "mongoose";
//get all service feedbacks
export async function getServiceFeedbacks(req,res)  {
    const ServiceFeedback = await serviceFeedback.find({}).sort({createdAt:-1})//inorder to get all of the document,we set find({}).To get a selected property we can set as find({rating:4}).And also the document is sorted in the descending order of the created time,newest ones at the top

    res.status(200).json(ServiceFeedback)//gives all service feedbacks in an array to the client through browser
}

//get a single service feedback
export async function getServiceFeedback(req,res){
    const { id } = req.params //all the route parameters are stored on params property

    if(!mongoose.Types.ObjectId.isValid(id)){ //to reduce the internal errors when invalid id is passed
        return res.status(404).json({error:'No such service feedback'})
    }

    const ServiceFeedback = await serviceFeedback.findById(id)
    if(!ServiceFeedback){
        return res.status(404).json({error:'No such service feedback'})
    }
    res.status(200).json(ServiceFeedback)
}


//create a new service feedback
export async function createServiceFeedback(req,res) {
    const{userId,name,email,rating,feedback} = req.body

    try{
        const ServiceFeedback = await serviceFeedback.create({userId,name,email,rating,feedback}) 
        res.status(200).json(ServiceFeedback)
    }catch(error){
        res.status(400).json({error: error.message})
    }  

}


//delete a service feedback
export async function deleteServiceFeedback(req,res){
    const { id } = req.params //all the route parameters are stored on params property

    if(!mongoose.Types.ObjectId.isValid(id)){ //to reduce the internal errors when invalid id is passed
        return res.status(404).json({error:'No such service feedback'})
    }

    const ServiceFeedback = await serviceFeedback.findOneAndDelete({_id: id})
    if(!ServiceFeedback){
        return res.status(404).json({error:'No such service feedback'})
    }
    res.status(200).json(ServiceFeedback)
}


//update a service feedback
export async function updateServiceFeedback(req,res){
    const { id } = req.params //all the route parameters are stored on params property

    if(!mongoose.Types.ObjectId.isValid(id)){ //to reduce the internal errors when invalid id is passed
        return res.status(404).json({error:'No such service feedback'})
    }

    const ServiceFeedback = await serviceFeedback.findOneAndUpdate({_id: id},{
        ...req.body //spread the properties of the object
    })
    if(!ServiceFeedback){
        return res.status(404).json({error:'No such service feedback'})
    }
    res.status(200).json(ServiceFeedback)
}


export default { getServiceFeedbacks,getServiceFeedback,createServiceFeedback,deleteServiceFeedback, updateServiceFeedback };