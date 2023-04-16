//const express = require('express');
import express from 'express';
const router = express.Router();
import  { getAllUsers, createUser, getUserById, deleteUser, updateUser } from '../../controller/user/userCtrl.js';

//get all users
router.get('/users', getAllUsers)

//create user
router.post('/users', createUser)

//get user by id
router.get('/users/:userId', getUserById)

//update user
router.patch('/users/:userId', updateUser)

//delete user
router.delete('/users/:userId', deleteUser)

export default router;