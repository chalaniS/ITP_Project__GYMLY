// import mongoose from "mongoose";
// const Schema = mongoose.Schema;
// const OrderreadsSchema = new Schema({
//     UserId: {
//         type: String,

//     },
//     Supplement_Date: {
//         type: String,
//         //required:true
//     },

//     Supplement_Type: {
//         type: String,
//         // required:true,

//     },

   
//     Supplement_Quantity: {
//         type: Number,
//         //required:true,
//     },

// })

// const Orderread = mongoose.model('OrderreadData', OrderreadsSchema);
// export default Orderread;
import { Schema, model } from 'mongoose';

const OrderSchema = new Schema({
  UserId: {
    type: String,

},
Supplement_Type: {
  type: String,
  //required:true
},
 
  Supplement_Type: String,
  Supplement_Quantity: Number,
});





const Order = model('Order', OrderSchema);

export default Order;
