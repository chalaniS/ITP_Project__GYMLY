import express from 'express';
import { createOne, getAll, updateOne, deleteOne } from '../../controller/Payment/DetailsCtrl.js';

const router = express.Router();

console.log('IN DetailsRouter');

// create a schedule
router.post('/Details', createOne);

// get all schedules
router.get('/Details', getAll);

// update a schedule by id
router.put('/Details/:id', updateOne);

// delete a schedule by id
router.delete('/Details/:id', deleteOne);

export default router;