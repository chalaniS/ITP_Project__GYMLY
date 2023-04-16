//import mongoose error handeling
import Mongoose from 'mongoose';
//importing the user model
import User from '../../models/user/userModel.js'


//get all users
export async function getAllUsers  (req, res) {
    const users = await User.find({});
    res.status(200).json(users);
}    

//get user by id
export async function getUserById (req, res) {
    const {userId} = req.params;

        //check for valid id
        if (!Mongoose.Types.ObjectId.isValid(userId)){
            return res.status(404).json({error:'invalid id'})
        }
    
    const user = await User.findById(userId)

        //if User not found
        if(!user){
            return res.status(400).json({error:'User not found'})
        }
    
        res.status(200).json(user)
    }


//create user
export async function createUser (req, res) {
    const {userId, Name, NIC, Email, Address, Phone, Gender, Birthdate, Password, Height, Weight} = req.body;

    try{
        const newUser = await User.create({userId, Name, NIC, Email, Address, Phone, Gender, Birthdate, Password, Height, Weight})
        res.status(200).json(newUser);
    }

    catch(err){
        console.log(err);
        res.status(500).send('Error occurred while inserting data');
    }
}

//update user
export async function updateUser (req, res) {
    const {userId} = req.params

    //check for valid id
    if (!Mongoose.Types.ObjectId.isValid(userId)){
        return res.status(404).json({error:'invalid id'})
    }

    const user = await User.findByIdAndUpdate({_id:userId}, req.body, {new:true})

    //if User not found
    if(!user){
        return res.status(400).json({error:'User not found'})
    }
}


//delete user
export async function deleteUser (req, res) {
    
    const {userId} = req.params

    //check for valid id
    if (!Mongoose.Types.ObjectId.isValid(userId)){
        return res.status(404).json({error:'invalid id'})
    }

    const user = await User.findByIdAndDelete({_id:userId})

    //if User not found
    if(!user){
        return res.status(400).json({error:'User not found'})
    }
}



//exporting the functions
export default {getAllUsers, createUser, getUserById, deleteUser, updateUser}