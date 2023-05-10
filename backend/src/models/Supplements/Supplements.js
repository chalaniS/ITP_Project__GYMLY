import mongoose from "mongoose";
const Schema = mongoose.Schema;
const SupplementsSchema = new Schema({
    userId: {
        type: String,

    },
    Supplement_Type: {
        type: String,
        //required:true
    },

    Supplement_Id: {
        type: String,
        // required:true,

    },

    Supplement_Price: {
        type: Number,
        //required:true,
    },
    Supplement_Quantity: {
        type: Number,
        //required:true,
    },
    Supplement_Date: {
        type: String,
        //required:true,
    },

})

const Supplements = mongoose.model('SupplementsData', SupplementsSchema);
export default Supplements;
