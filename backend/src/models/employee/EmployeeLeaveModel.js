import mongoose from 'mongoose';

const { Schema } = mongoose;

const EmployeeLeaveSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    leaveType: {
        type: String,
        required: true
    },
    leaveFrom: {
        type: Date,
        required: true
    },
    leaveTo: {
        type: Date,
        required: true
    },
    leaveStatus: {
        type: String,
        required: true
    }
});

const EmployeeLeave = mongoose.model('EmployeeLeave', EmployeeLeaveSchema)

export default EmployeeLeave