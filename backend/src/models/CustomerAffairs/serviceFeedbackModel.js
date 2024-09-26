import mongoose from "mongoose";

const Schema = mongoose.Schema

const serviceFeedbackSchema = new Schema({
    userId:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    feedback:{
        type:String,
        required:true    }
},{timestamps:true})

const serviceFeedback = mongoose.model('serviceFeedbackData', serviceFeedbackSchema);
export default serviceFeedback;