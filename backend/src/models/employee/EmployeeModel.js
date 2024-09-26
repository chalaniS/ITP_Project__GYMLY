import mongoose from 'mongoose';
// import autoIncrement from 'mongoose-auto-increment';

const { Schema } = mongoose;

const EmployeeSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    NIC: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    qualifications: {
        type: String,
        required: true
    },
    joinedDate: {
        type: Date,
        required: true
    },
    terminateDate: {
        type: Date,
        required: true
    },
    totalSal: {
        type: Number,
        required: true
    }
});

// EmployeeSchema.plugin(autoIncrement.plugin, {
//     model: 'Employee',
//     field: 'sequence',
//     startAt: 1,
//     incrementBy: 1
//   });

// employeeSchema.methods.generateUserId = async function() {
// // Define the prefix mapping here
// const prefixMapping = {
//     'operation manager': 'OM',
//     'fitness instructor': 'FI',
//     'customer service manager': 'CSM',
//     'membership manager': 'MM',
//     'payment manager': 'PM',
//     'supplier manager': 'SM',
//     'cleaner': 'CL',
//     'cashier': 'CSH'
// };

// // Get the prefix based on the employee type
// const prefix = prefixMapping[this.type.toLowerCase()] || '';

// // Generate the ID using the auto-incremented sequence number and the prefix
// const sequence = await mongoose.model('Employee').getNextSequence();
// return `${prefix}${sequence}`;
// };


//Employee is collection name
const Employee = mongoose.model('Employee', EmployeeSchema);

export default Employee;