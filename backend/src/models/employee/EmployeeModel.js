import mongoose from 'mongoose';

const { Schema } = mongoose;

const EmployeeSchema = new Schema({
    userId: {
        type: String,
        //required: true
    },
    firstName: {
        type: String,
        //required: true
    },
    lastName: {
        type: String,
        //required: true
    },
    NIC: {
        type: String,
        //required: true
    },
    role: {
        type: String,
        //required: true
    },
    gender: {
        type: String,
        //required: true
    },
    DOB: {
        type: Date,
        //required: true
    },
    contactNo: {
        type: String,
        //required: true
    },
    email: {
        type: String,
        //required: true
    },
    address: {
        type: String,
        //required: true
    },
    qualifications: {
        type: String,
        //required: true
    },
    joinedDate: {
        type: Date,
        //required: true
    },
    terminateDate: {
        type: Date,
        //required: true
    },
});


//Employee is collection name
const Employee = mongoose.model('Employee', EmployeeSchema);

export default Employee;