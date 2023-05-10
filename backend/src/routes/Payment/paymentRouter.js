import express from 'express';
import { createOne, getAll, updateOne, deleteOne } from '../../controller/Payment/paymentCtrl.js';

const router = express.Router();

console.log('IN paymentRouter');

// create a schedule
router.post('/payment', createOne);

// get all schedules
router.get('/payment', getAll);

// update a schedule by id
router.put('/payment/:id', updateOne);

// delete a schedule by id
router.delete('/payment/:id', deleteOne);

export default paymentRouter;