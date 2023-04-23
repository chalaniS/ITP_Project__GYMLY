import mongoose from 'mongoose';

const { Schema } = mongoose;

const EmployeeSalarySchema = new Schema({
    empId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EmployeeSchema'
    },
    basicSal: {
        type: Number,
        required: true
    },
    otHours: {
        type: Number,
        required: true
    },
    otRate: {
        type: Number,
        required: true
    },
    otTotal: {
        type: Number,
        required: true
    },
    bonus: {
        type: Number,
        required: true
    },
    totalSal: {
        type: Number,
        required: true
    },
    month: {
        type: Date,
        required: true
    },   
});

const EmployeeSalary = mongoose.model('EmployeeSalary', EmployeeSalarySchema);

export default EmployeeSalary;