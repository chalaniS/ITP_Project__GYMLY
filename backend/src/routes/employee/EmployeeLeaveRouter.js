import express from 'express';
import { addEmployeeLeave, getAllEmployeeLeave, getEmployeeLeave, deleteEmployeeLeave} from '../../controller/employee/EmployeeLeaveController.js'

const router = express.Router();

console.log('IN employeeLeaveRouter');

//add employee leave
router.post('/addEmployeeLeave', addEmployeeLeave);

//get all employees' leaves
router.get('/getEmployeeLeave', getAllEmployeeLeave);

//get one employee's leave by id
router.get('/getEmployeeLeave/:id', getEmployeeLeave)

//delete employee leave by id
router.delete('/deleteEmployeeLeave/:id', deleteEmployeeLeave);

export default router;