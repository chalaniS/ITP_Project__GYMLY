import express from 'express';
import { createOne, getAll, updateOne, deleteOne } from '../../controller/employee/EmployeeController.js';

const router = express.Router();

console.log('IN employeeRouter');

// create an employee
router.post('/employee', createOne);

// get all employees
router.get('/employee', getAll);

// update an employee by id
router.put('/employee/:id', updateOne);

// delete an employee by id
router.delete('/employee/:id', deleteOne);

export default router;