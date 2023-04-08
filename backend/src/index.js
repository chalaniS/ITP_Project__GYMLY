import "dotenv/config";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import ScheduleModel from './models/schedule/ScheduleModel.js'
import SchedulRouter from './routes/schedule/SchedulRouter.js'

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

let database;

app.listen(PORT, () => {

    // Start the server
    console.log(`Server started on port ${PORT}`)

    //connect db
    mongoose
        .connect("mongodb+srv://gymly:gymly123@gymly-db-cluster.sfmuyh9.mongodb.net/gymly-db?retryWrites=true&w=majority")
        .then((connection) => {
            database = connection;
            console.log("Database Synced");
        })
        .catch((err) => {
            console.log(err.message);
        });
});

//connect with frontend
app.get("/getData", (req, res) => {
    res.send("Hello I'm from backend");
});


//throw API to SchedulRouter class
// app.use('/schedules', SchedulRouter);


app.post("/schedules", async (req, res) => {

    const dayscount = req.body.dayscount
    const date = req.body.date
    const timeslot = req.body.timeslot
    const instructor = req.body.instructor
    const section = req.body.section

    console.log(timeslot + instructor + section)

    const schedule = new ScheduleModel({

        userId: "45821463#23669545",
        dayscount: dayscount,
        timeslot: timeslot,
        date: date,
        instructor: instructor,
        section: section
    });

    try {
        await schedule.save()
        console.log("successfully data inserted")
        res.status(200).send("Data inserted successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error occurred while inserting data");
    }
});

app.get("/schedules", async (req, res) => {

    const userId = "45821463#23669545";

    try {
        const schedules = await ScheduleModel.find({ userId });
        res.status(200).json(schedules);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while retrieving data');
    }

});

app.put("/schedules/:id", async (req, res) => {
    const objectId = req.params.id;
    const { dayscount, date, timeslot, instructor, section } = req.body;
    try {
        const updatedSchedule = await ScheduleModel.findByIdAndUpdate(
            objectId,
            {
                dayscount: dayscount,
                date: date,
                timeslot: timeslot,
                instructor: instructor,
                section: section
            },
            { new: true }
        );
        res.status(200).send(updatedSchedule);
        console.log('Schedule updated successfully');

    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while updating data');
    }
});


app.delete("/schedules/:id", async (req, res) => {
    const objectId = req.params.id;
    try {
        await ScheduleModel.findByIdAndDelete(objectId);
        res.status(200).send('Schedule deleted successfully');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while deleting data');
    }
});
