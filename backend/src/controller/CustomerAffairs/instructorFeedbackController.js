import instructorFeedback from "../../models/CustomerAffairs/instructorFeedbackModel.js";
import mongoose from "mongoose";
//get all instructor feedbacks
export async function getInstructorFeedbacks(req,res)  {
    const InstructorFeedback = await instructorFeedback.find({}).sort({createdAt:-1})//inorder to get all of the document,we set find({}).To get a selected property we can set as find({rating:4}).And also the document is sorted in the descending order of the created time,newest ones at the top

    res.status(200).json(InstructorFeedback)//gives all instructor feedbacks in an array to the client through browser
}

//get a single instructor feedback
export async function getInstructorFeedback(req,res){
    const { id } = req.params //all the route parameters are stored on params property

    if(!mongoose.Types.ObjectId.isValid(id)){ //to reduce the internal errors when invalid id is passed
        return res.status(404).json({error:'No such instructor feedback'})
    }

    const InstructorFeedback = await instructorFeedback.findById(id)
    if(!InstructorFeedback){
        return res.status(404).json({error:'No such instructor feedback'})
    }
    res.status(200).json(InstructorFeedback)
}


//create a new instructor feedback
export async function createInstructorFeedback(req,res) {
    const{userId,customerName,customerEmail,instructorName,instructorRating,instructorfeedback} = req.body

    try{
        const InstructorFeedback = await instructorFeedback.create({userId,customerName,customerEmail,instructorName,instructorRating,instructorfeedback}) 
        res.status(200).json(InstructorFeedback)
    }catch(error){
        res.status(400).json({error: error.message})
    }  

}


//delete a instructor feedback
export async function deleteInstructorFeedback(req,res){
    const { id } = req.params //all the route parameters are stored on params property

    if(!mongoose.Types.ObjectId.isValid(id)){ //to reduce the internal errors when invalid id is passed
        return res.status(404).json({error:'No such instructor feedback'})
    }

    const InstructorFeedback = await instructorFeedback.findOneAndDelete({_id: id})
    if(!InstructorFeedback){
        return res.status(404).json({error:'No such instructor feedback'})
    }
    res.status(200).json(InstructorFeedback)
}


//update an instructor feedback
export async function updateInstructorFeedback(req,res){
    const { id } = req.params //all the route parameters are stored on params property

    if(!mongoose.Types.ObjectId.isValid(id)){ //to reduce the internal errors when invalid id is passed
        return res.status(404).json({error:'No such instructor feedback'})
    }

    const InstructorFeedback = await instructorFeedback.findOneAndUpdate({_id: id},{
        ...req.body //spread the properties of the object
    })
    if(!InstructorFeedback){
        return res.status(404).json({error:'No such instructor feedback'})
    }
    res.status(200).json(InstructorFeedback)
}


export default { getInstructorFeedbacks,getInstructorFeedback,createInstructorFeedback,deleteInstructorFeedback, updateInstructorFeedback };