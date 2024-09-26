import express from 'express';
import { createOne, getAll, updateOne, deleteOne } from '../../controller/Payment/ReportCtrl.js';

const router = express.Router();

console.log('IN ReportRouter');

// create a schedule
router.post('/Report', createOne);

// get all schedules
router.get('/Report', getAll);

// update a schedule by id
router.put('/Report/:id', updateOne);

// delete a schedule by id
router.delete('/Report/:id', deleteOne);

export default router;