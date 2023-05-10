import mongoose from "mongoose";
const Schema = mongoose.Schema;
const SManagerSchema = new Schema({
    UserId: {
        type: String,

    },
    SManager_Name: {
        type: String,
        //required:true
    },

    Report_Id: {
        type: String,
        // required:true,

    },


})

const SManager = mongoose.model('SManagerData', SManager);
export default SManager;
