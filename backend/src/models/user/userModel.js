//const mongoose = require('mongoose');
import mongoose from 'mongoose';

const {Schema} = mongoose;

const scheduleSchema = new Schema({
    userId: {
        type: String,
        required: false
    },
    
    Name:{
        type: String,
        required: true
    },

    NIC:{
        type:Number,
        required: true
    },

    Email:{
        type: String,
        required: true
    },

    Address:{
        type: String,
        required: true
    },

    Phone:{
        type: Number,
        required: true
    },

    Gender:{
        type: String,
        required: false
    },

    Birthdate:{
        type: Date,
        required: false
    },

    Password:{
        type: String,
        required: true
    },

    Height:{
        type: Number,
        required: false
    },

    Weight:{
        type: Number,
        required: false
    },
},{timestamps: true})

// Export the model
//module.exports = mongoose.model('User', scheduleSchema);

const User = mongoose.model('User', scheduleSchema);
export default User;