import "dotenv/config";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import ScheduleModel from './models/schedule/ScheduleModel.js'
<<<<<<< HEAD
import SchedulRouter from './routes/schedule/SchedulRouter.js'
import User from './routes/Users/userRouters.js' 
=======
import IRequestModel from './models/schedule/RequestModel.js'

>>>>>>> chalani_dev

const app = express();
app.use(cors());
app.use(express.json());

<<<<<<< HEAD
const PORT = process.env.PORT || 5001;

let database;

//make connection with datahase
=======
const PORT = process.env.PORT || 5000;

let database;

>>>>>>> chalani_dev
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
<<<<<<< HEAD

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
        console.log("'Schedule read successfully'");
        res.status(200).json(schedules);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while retrieving data');
    }

});

// read a single schedule by id for update
app.get('/schedules/:id', async (req, res) => {
    try {
        const schedule = await ScheduleModel.findById(req.params.id);
        console.log('Schedule read successfully for update');
        res.status(200).json(schedule);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error occurred while retrieving data');
    }
});


=======

//connect with frontend
app.get("/getData", (req, res) => {
    res.send("Hello I'm from backend");
});


//throw API to SchedulRouter class
// app.use('/schedules', SchedulRouter);


// IT21377280 - Rajapaksha C.S. 
// user Inserts default schedule data
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



// Read all scheduled timetable 
app.get("/schedules", async (req, res) => {

    const userId = "45821463#23669545";

    try {
        const schedules = await ScheduleModel.find({ userId });
        console.log("'Schedule read successfully'");
        res.status(200).json(schedules);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while retrieving data');
    }

});

// read a single schedule by id for update
app.get('/schedules/:id', async (req, res) => {
    try {
        const schedule = await ScheduleModel.findById(req.params.id);
        console.log('Schedule read successfully for update');
        res.status(200).json(schedule);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error occurred while retrieving data');
    }
});


// Update the schedule datas by _uid document by document
>>>>>>> chalani_dev
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


<<<<<<< HEAD
=======
// Delete the schedule datas by _uid document by document
>>>>>>> chalani_dev
app.delete("/schedules/:id", async (req, res) => {
    const objectId = req.params.id;
    try {
        await ScheduleModel.findByIdAndDelete(objectId);
        console.log("'Schedule deleted successfully'");
        res.status(200).send('Schedule deleted successfully');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while deleting data');
    }
});


<<<<<<< HEAD

//lakindu's part
app.use(User);
=======
// confirmation part - request to change instructor

// user inserts data to change instructor 
app.post("/changerequest", async (req, res) => {
    const { currentInstructor, requestInstructor, reason, status } = req.body;

    // Validation checks
    if (!currentInstructor || !requestInstructor || !reason || !status) {
        return res.status(400).send("Please provide all required fields.");
    }

    const IRequest = new IRequestModel({
        userId: "45821463#23669545",
        currentInstructor,
        requestInstructor,
        reason,
        status,
    });

    try {
        await IRequest.save();
        console.log("successfully data inserted");
        res.status(200).send("Data inserted successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error occurred while inserting data");
    }
});




>>>>>>> chalani_dev
