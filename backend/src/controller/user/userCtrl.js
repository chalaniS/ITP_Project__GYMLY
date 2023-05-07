//import mongoose error handeling
import Mongoose from 'mongoose';
//importing the user model
import User from '../../models/user/userModel.js'
import jwt from 'jsonwebtoken';


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

//user login
// Handle user login
export async function userLogin (req, res) {
    const { email, password } = req.body;

    //test email and password come to the frontend
    console.log(email + password);
  
    try {
      const user = await User.findOne({ Email: email });

      //test user is found
      console.log(user);

      if (!user) {
        return res.status(401).json({ message: 'Invalid email' });
      }
      
    //test user passwords are correctly matched
      console.log(password)
      console.log(user.Password)

    // Check if password is correct
      if(password !== user.Password){
        return res.status(401).json({ message: 'Invalid email or password' });
        }
        else{
            // test loging is success
            console.log('login success')
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
            //testing
            console.log(token)
            // Send the token
            return res.status(200).json({ token, userId: user._id });
        }
     
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  }

    
    

  
//exporting the functions
export default {getAllUsers, createUser, getUserById, deleteUser, updateUser, userLogin}