import mongoose from 'mongoose';

const { Schema } = mongoose;

const ReportSchema = new Schema({
    fullName: {
        type: String,
        // required: true
    },
    address: {
        type: String,
        // required: true
    },
    state: {
        type: String,
        // required: true
    },
    zipCode: {
        type: String,
        // required: true
    },
    paymentType: {
        type: String,
        // required: true
    },
    paymentMethod:{
        type: String,
       
    },
    creditcardNumber:{
        type: Number,
    },
    expireMonth:{
        type: String,
    },
    expireYear:{
        type: String,
    },
    cvv:{
        type: Number,
    }
});

// CardData is collection name
const DetailsModel = mongoose.model('CardData', CardSchema);

export default DetailsModel;
