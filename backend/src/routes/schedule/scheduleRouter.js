import { Router } from 'express';
import scheduleRouter from '../../controller/schedule/ScheduleCtrl.js';

const router = Router();

console.log("IN scheduleRouter");

router.get('/schedule', scheduleRouter);

console.log("scheduleRouter");

export default router;
