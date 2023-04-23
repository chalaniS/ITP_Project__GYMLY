import express from 'express';
import { createOne, getAll, updateOne, deleteOne } from '../../controller/schedule/ScheduleCtrl.js';

const router = express.Router();

console.log('IN scheduleRouter');

// create a schedule
router.post('/schedules', createOne);

// get all schedules
router.get('/schedules', getAll);

// update a schedule by id
router.put('/schedules/:id', updateOne);

// delete a schedule by id
router.delete('/schedules/:id', deleteOne);

export default router;
