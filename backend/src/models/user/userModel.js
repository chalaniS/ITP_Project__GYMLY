//const mongoose = require('mongoose');
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const {Schema} = mongoose;

const UserSchema = new Schema({
    Name:{
        type: String,
        required: true
    },

    NIC:{
        type:Number,
        required: true,
        Unique: true
    },

    Email:{
        type: String,
        required: true,
        unique: true
    },

    Address:{
        type: String,
        required: true
    },

    Phone:{
        type: Number,
        required: true,
        Unique: true
    },

    Gender:{
        type: String,
        required: true
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

// Hash the password before saving
/*
UserSchema.pre('save', async function(next) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
      next();
    } catch (error) {
      next(error);
    }
  });*/

// Export the model  
const User = mongoose.model('User', UserSchema);
export default User;