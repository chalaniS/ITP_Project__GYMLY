import mongoose from 'mongoose';

const { Schema } = mongoose;


const SupplierSchema = new Schema({
    userId:{
        type: String,
       
    },
    reportId: {
        type: String,
        // required: true
    },
    SupplierName: {
        type: String,
        // required: true
    },
    Product: {
        type: String,
        // required: true
    },
    Quantity: {
        type: String,
        // required: true
    },
    Size: {
        type: String,
        // required: true
    }
   
});

// SupplierData is collection name
const SupplierModel = mongoose.model('SupplierData', SupplierSchema);

export default SupplierModel;
