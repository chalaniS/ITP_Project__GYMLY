import mongoose from "mongoose";

const Schema = mongoose.Schema

const instructorFeedbackSchema = new Schema({
    userId:{
        type:String,
        
    },
    customerName:{
        type:String,
        required: true
    },
    customerEmail:{
        type:String,
        required:true
    },
    instructorName:{
        type:String,
        required:true
    },
    instructorRating:{
        type:Number,
        required:true
    },
    instructorfeedback:{
        type:String,
        required:true    }
},{timestamps:true})

const instructorFeedback = mongoose.model('instructorFeedbackData', instructorFeedbackSchema);
export default instructorFeedback;