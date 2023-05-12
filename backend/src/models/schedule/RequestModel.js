import mongoose from 'mongoose';

const { Schema } = mongoose;

const IRequestSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    currentInstructor: {
        type: Number,
        required: true
    },
    requestInstructor: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});


//IChangerequest is collection name
const IRequest = mongoose.model('IChangerequest', IRequestSchema);

export default IRequest;