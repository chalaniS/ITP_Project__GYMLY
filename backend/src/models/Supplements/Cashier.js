import mongoose from "mongoose";
const Schema = mongoose.Schema;
const CashierSchema = new Schema({
    UserId: {
        type: String,

    },
    Cashier_name: {
        type: String,
        //required:true
    },

    Cashier_Qualiifications: {
        type: String,
        // required:true,

    },

    WorkExperience: {
        type: String,
        //required:true,
    },
   

})

const Cashier = mongoose.model('CashierData', CashierSchema);
export default Cashier;
