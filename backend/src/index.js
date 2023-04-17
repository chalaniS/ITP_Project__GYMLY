import "dotenv/config";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import ScheduleModel from './models/schedule/ScheduleModel.js'
import SchedulRouter from './routes/schedule/SchedulRouter.js'
import EmployeeModel from './models/employee/EmployeeModel.js'
import EmployeeRouter from './routes/employee/EmployeeRouter.js'

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
        console.log("'Schedule deleted successfully'");
        res.status(200).send('Schedule deleted successfully');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while deleting data');
    }
});

//throw API to EmployeeRouter class
// app.use('/employee', EmployeeRouter);

app.post("/employee", async (req, res) => {

    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const NIC = req.body.NIC
    const role = req.body.role
    const gender = req.body.gender
    const DOB = req.body.DOB
    const contactNo = req.body.contactNo
    const email = req.body.email
    const address = req.body.address
    const qualifications = req.body.qualifications
    const joinedDate = req.body.joinedDate
    const terminateDate = req.body.terminateDate

    console.log(firstName + lastName + NIC + role + gender + DOB + contactNo + email + address + qualifications + joinedDate + terminateDate)

    const employee = new EmployeeModel({

        userId: "45821463#23669546",
        firstName: firstName,
        lastName: lastName,
        NIC: NIC,
        role: role,
        gender: gender,
        DOB: DOB,
        contactNo: contactNo,
        email: email,
        address: address,
        qualifications: qualifications,
        joinedDate: joinedDate,
        terminateDate: terminateDate
    });

    try {
        await employee.save()
        console.log("successfully data inserted")
        res.status(200).send("Data inserted successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error occurred while inserting data");
    }
});

app.get("/employee", async (req, res) => {

    const userId = "45821463#23669546";

    try {
        const employee = await EmployeeModel.find({ userId });
        console.log("'Employee read successfully'");
        res.status(200).json(employee);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while retrieving data');
    }

});

// read a single employee by id for update
app.get('/employee/:id', async (req, res) => {
    try {
        const employee = await EmployeeModel.findById(req.params.id);
        console.log('Employee read successfully for update');
        res.status(200).json(employee);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error occurred while retrieving data');
    }
});


app.put("/employee/:id", async (req, res) => {
    const objectId = req.params.id;
    const { firstName, 
            lastName, 
            NIC, 
            role, 
            gender, 
            DOB, 
            contactNo, 
            email, 
            address, 
            qualifications, 
            joinedDate, 
            terminateDate 
    } = req.body;
    try {
        const updatedEmployee = await EmployeeModel.findByIdAndUpdate(
            objectId,
            {
                firstName: firstName,
                lastName: lastName,
                NIC: NIC,
                role: role,
                gender: gender,
                DOB: DOB,
                contactNo: contactNo,
                email: email,
                address: address,
                qualifications: qualifications,
                joinedDate: joinedDate,
                terminateDate: terminateDate
            },
            { new: true }
        );
        res.status(200).send(updatedEmployee);
        console.log('Employee updated successfully');

    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while updating data');
    }
});


app.delete("/employee/:id", async (req, res) => {
    const objectId = req.params.id;
    try {
        await EmployeeModel.findByIdAndDelete(objectId);
        console.log("'Employee deleted successfully'");
        res.status(200).send('Employee deleted successfully');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while deleting data');
    }
});
