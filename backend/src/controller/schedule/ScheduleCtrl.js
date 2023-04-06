import { Router } from 'express';
import ScheduleModel from "../../models/schedule/Schedule.js"

const scheduleCtrl = Router();

console.log("scheduleCtrl");

scheduleCtrl.get("/", async (_req, res) => {

    const schedule = new ScheduleModel({ timeslot: "9pm - 8pm", instructor: "Kamal Amarasinhe", section: "weekend", });

    try {
        await schedule.save()
        console.log("successfully data inserted")
        res.status(200).send("Data inserted successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error occurred while inserting data");
    }
});

export default scheduleCtrl;
