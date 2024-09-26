import mongoose from 'mongoose';

const { Schema } = mongoose;

const paymentSchema = new Schema({
    pID: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    paymentDate: {
        type: String,
        required: true
    },
    paymentMethode: {
        type: String,
        required: true
    },
    paymentType: {
        type: String,
        required: true
    },
    verificationCode: {
        type: Number,
        required: true
    },
});

// ScheduleData is collection name
const paymentModel = mongoose.model('paymentData', paymentSchema);

export default paymentModel;
