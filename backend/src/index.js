import "dotenv/config";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import ScheduleModel from "./models/schedule/Schedule.js";
// import scheduleRouter from './routes/schedule/scheduleRouter.js'

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

// app.use('/schedule', scheduleRouter);
app.post("/insert", async (req, res) => {

    const timeslot = req.body.timeslot
    const instructor = req.body.instructor
    const section = req.body.section

    console.log(timeslot + instructor + section)

    const schedule = new ScheduleModel({ timeslot: timeslot, instructor: instructor, section: section });

    console.log(timeslot + instructor + section)

    try {
        await schedule.save()
        console.log("successfully data inserted")
        res.status(200).send("Data inserted successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error occurred while inserting data");
    }
});