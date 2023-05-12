import mongoose from "mongoose";
const Schema = mongoose.Schema;
const SupplementOrderSchema = new Schema({
    SupplementOrderId: {
        type: String,

    },
    Supplement_Type: {
        type: String,
        //required:true
    },

    SupplementOrder_Date: {
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

    Client_Name : {
        type: Number,
        //required:true,
    },

})

const SupplementOrder = mongoose.model('SupplementOrderData', SupplementOrder);
export default SupplementOrder;
