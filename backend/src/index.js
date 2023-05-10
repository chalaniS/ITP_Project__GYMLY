import "dotenv/config";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import ScheduleModel from './models/schedule/ScheduleModel.js'
<<<<<<< HEAD
import SchedulRouter from './routes/schedule/SchedulRouter.js'
import User from './routes/Users/userRouters.js' 
=======
import IRequestModel from './models/schedule/RequestModel.js'
=======
import serviceFeedbackRouter from './routes/CustomerAffairs/serviceFeedback.js'
import instructorFeedbackRouter from './routes/CustomerAffairs/instructorFeedback.js'
>>>>>>> origin/Sithum_dev
=======
//import Supplementsrouter from "./routes/Supplements/Supplementsrouter.js";
import Supplements from "./models/Supplements/Supplements.js";
// import { connect } from "./utils/dbconnect"
>>>>>>> sujithra

>>>>>>> chalani_dev

<<<<<<< HEAD
//express app
const app = express();
=======
=======
import ReportModel from "./models/Payment/ReportModel.js";
import paymentModel from "./models/Payment/paymentModel.js";
>>>>>>> origin/Tharani

const app = express();
app.use(cors());
app.use(express.json());
<<<<<<< HEAD
>>>>>>> sujithra
=======
>>>>>>> origin/Tharani


//middleware
app.use(cors());
app.use(express.json());

<<<<<<< HEAD
const PORT = process.env.PORT || 5001;

let database;
<<<<<<< HEAD

<<<<<<< HEAD
//make connection with datahase
=======
const PORT = process.env.PORT || 5000;
=======
// app.use('/Report',router)
>>>>>>> origin/Tharani

let database;
=======
//app.use('/Supplements',Supplementsrouter)
>>>>>>> sujithra

<<<<<<< HEAD
>>>>>>> chalani_dev
app.listen(PORT, () => {
=======
app.listen(PORT, async () => {
>>>>>>> origin/Sujithra

    // Start the server
    console.log(`Server started on port ${PORT}`)

    //connect db
    mongoose
        .connect("mongodb+srv://gymly:gymly123@gymly-db-cluster.sfmuyh9.mongodb.net/gymly-db?retryWrites=true&w=majority")
        .then((connection) => {//to fire a function
            database = connection;
            console.log("Database Synced");
        })
        .catch((err) => {//to catch any error if URI is incorrect or username/password incorrect
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

<<<<<<< HEAD
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

<<<<<<< HEAD
<<<<<<< HEAD
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

<<<<<<< HEAD
//connect with frontend
app.get("/getData", (req, res) => {
    res.send("Hello I'm from backend");
=======
   
>>>>>>> origin/Sujithra
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
=======




app.post("/Supplements", async (req, res) => {

    console.log(req.body);

    const Supplement_Type = req.body.Supplement_Type;
    const Supplement_Id = req.body.Supplement_Id;
    const Supplement_Price = req.body.Supplement_Price;
    const Supplement_Quantity = req.body.Supplement_Quantity ;
    const Supplement_Date=req.body.Supplement_Date;
    const userId = "45821463#23669545";

    const supplements = new Supplements({
        userId: userId,
        Supplement_Type: Supplement_Type,
        Supplement_Id: Supplement_Id,
        Supplement_Price: Supplement_Price,
        Supplement_Quantity: Supplement_Quantity,
        Supplement_Date:Supplement_Date

    });

    try {
        await supplements.save()
>>>>>>> sujithra
        console.log("successfully data inserted")
=======
app.post("/payment453", async (req, res) => {

    console.log(req.body);


    const financialReportId = req.body.financialReportId;
    const reportCatogery = req.body.reportCatogery;
    const employeeID = req.body.employeeID;
    const uploadedDate = req.body.uploadedDate;
    const uploadedTime = req.body.uploadedTime;
    const userId = "45821463#23669545";

    // Validate input data
    if (!financialReportId || !reportCatogery || !employeeID || !uploadedDate || !uploadedTime) {
        return res.status(400).send("Missing required fields");
    }

    const report = new ReportModel({
        userId: userId,
        financialReportId: financialReportId,
        reportCatogery: reportCatogery,
        employeeID: employeeID,
        uploadedDate: uploadedDate,
        uploadedTime: uploadedTime,
    });

    try {
        await report.save();
        console.log("Successfully inserted data");
>>>>>>> origin/Tharani
        res.status(200).send("Data inserted successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error occurred while inserting data");
    }
<<<<<<< HEAD
});

<<<<<<< HEAD


// Read all scheduled timetable 
app.get("/schedules", async (req, res) => {
=======
app.get("/Supplements", async (req, res) => {
>>>>>>> sujithra
=======
    
});

app.get("/payment453", async (req, res) => {
>>>>>>> origin/Tharani

    const userId = "45821463#23669545";

    try {
<<<<<<< HEAD
<<<<<<< HEAD
        const schedules = await ScheduleModel.find({ userId });
        console.log("'Schedule read successfully'");
        res.status(200).json(schedules);
=======
        const supplements = await Supplements.find({ userId });
        console.log("supplements read successfully'");
        res.status(200).json(supplements);
>>>>>>> sujithra
=======
        const report = await ReportModel.find({ userId });
        console.log("'Report read successfully'");
        res.status(200).json(report);
>>>>>>> origin/Tharani
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while retrieving data');
    }

});

<<<<<<< HEAD
<<<<<<< HEAD
// read a single schedule by id for update
<<<<<<< HEAD
app.get('/schedules/:id', async (req, res) => {
    try {
        const schedule = await ScheduleModel.findById(req.params.id);
        console.log('Schedule read successfully for update');
        res.status(200).json(schedule);
=======
=======
// read a single supplement by id for update
>>>>>>> origin/Sujithra
app.get('/Supplements/:id', async (req, res) => {
    try {
        const supplements = await Supplements.findById(req.params.id);
        console.log('Supplement read successfully for update');
        res.status(200).json(supplements);
>>>>>>> sujithra
=======
// read a single supplement by id for update
app.get('/payment453/:id', async (req, res) => {
    try {
        const report = await ReportModel.findById(req.params.id);
        console.log('Report read successfully for update');
        res.status(200).json(report);
>>>>>>> origin/Tharani
    } catch (err) {
        console.error(err);
        res.status(500).send('Error occurred while retrieving data');
    }
});


<<<<<<< HEAD
<<<<<<< HEAD
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
=======
app.put("/Supplements/:id", async (req, res) => {
    const objectId = req.params.id;
    const {Supplement_Date,Supplement_Type, Supplement_Id,Supplement_Quantity } = req.body;
    try {
        const updatedSupplements = await Supplements.findByIdAndUpdate(
            objectId,
            {
                Supplement_Date: Supplement_Date,
                Supplement_Type: Supplement_Type,
                Supplement_Id: Supplement_Id,
                Supplement_Quantity: Supplement_Quantity
            },
            { new: true }
        );
        res.status(200).send(updatedSupplements);
        console.log('Supplements updated successfully');
>>>>>>> sujithra
=======

app.put("/payment453/:id", async (req, res) => {
    const objectId = req.params.id;
    const { userId,financialReportId,reportCatogery,employeeID,uploadedDate,uploadedTime} = req.body;
    try {
        const updatedReports = await ReportModel.findByIdAndUpdate(
            objectId,
            {
                userId:"45821463#23669545",
                financialReportId: financialReportId,
                reportCatogery: reportCatogery,
                employeeID: employeeID,
                uploadedDate: uploadedDate,
                uploadedTime: uploadedTime,
            },
            { new: true }
        );
        res.status(200).send(updatedReports);
        console.log('Reports updated successfully');
>>>>>>> origin/Tharani

    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while updating data');
    }
});


<<<<<<< HEAD
<<<<<<< HEAD
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
=======
app.delete("/Supplements/:id", async (req, res) => {
    const objectId = req.params.id;
    try {
        await Supplements.findByIdAndDelete(objectId);
        console.log("'Supplements deleted successfully'");
        res.status(200).send('Supplements deleted successfully');
>>>>>>> sujithra
=======
app.delete("/payment453/:id", async (req, res) => {
    const objectId = req.params.id;
    try {
        await ReportModel.findByIdAndDelete(objectId);
        console.log("'Reports deleted successfully'");
        res.status(200).send('Reports deleted successfully');
>>>>>>> origin/Tharani
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while deleting data');
    }
});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


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
=======
//routes
app.use('/api/CustomerAffairs',serviceFeedbackRouter)
app.use('/api/instructorFeedback',instructorFeedbackRouter)
>>>>>>> origin/Sithum_dev
=======
>>>>>>> sujithra
=======


// app.post("/payment", async (req, res) => {


//     console.log(req.body);
//     const financialReportId = req.body.financialReportId
//     const reportCatogery = req.body.reportCatogery
//     const employeeID = req.body.employeeID
//     const uploadedDate = req.body.uploadedDate
//     const uploadedTime = req.body.uploadedTime
//     const userId = "45821463#23669545"

//     const report = new ReportModel({

//         userId: userId,
//         financialReportId: financialReportId,
//         reportCatogery: reportCatogery,
//         employeeID: employeeID,
//         uploadedDate: uploadedDate,
//         uploadedTime: uploadedTime,
//     });

//     try {
//         await report.save();
//         console.log("successfully data inserted");
//         res.status(200).send("Data inserted successfully");
//     } catch (err) {
//         console.log(err);
//         res.status(500).send("Error occurred while inserting data");
//     }

// }
// );


>>>>>>> origin/Tharani
=======


// import Order from "./models/Supplements/Orderread.js";

// app.post("/Orderread", async (req, res) => {
//   console.log(req.body);

//   const Supplement_Date = req.body.Supplement_Date;
//   const Supplement_Type = req.body.Supplement_Type;
//   const Supplement_Quantity = req.body.Supplement_Quantity;
//   const UserId = "12345#12345";

//   const order = new Order({
//     UserId: UserId,
//     Supplement_Date: Supplement_Date,
//     Supplement_Type: Supplement_Type,
//     Supplement_Quantity: Supplement_Quantity,
//   });
//   try {
//     await order.save();
//     console.log("successfully data inserted");
//     res.status(200).send("Data inserted successfully");
//   } catch (err) {
//     console.log(err);
//     res.status(500).send("Error occurred while inserting data");
//   }
// });



    // app.post("/Orderread", async (req, res) => {

    //     console.log(req.body);
    
    //     const Supplement_Date = req.body.Supplement_Date
    //     const  Supplement_Type = req.body.Supplement_Type
    //     const  Supplement_Quantity = req.body.Supplement_Quantity
    //     const UserId="12345#12345"

    
    //     const Orderread  = new Orderread({
    //         UserId:UserId,
    //         Supplement_Date:Supplement_Date,
    //         Supplement_Type:Supplement_Type,
    //         Supplement_Quantity:Supplement_Quantity
    //     });
    //     try {
    //         await Orderread.save()
    //         console.log("successfully data inserted")
    //         res.status(200).send("Data inserted successfully");
    //     } catch (err) {
    //         console.log(err);
    //         res.status(500).send("Error occurred while inserting data");
    //     }
    // });
//     app.get("/Orderread", async (req, res) => {

//         const userId = "45821463#23669545";
    
//         try {
//             const Orderread = await Orderread.find({ userId });
//             console.log("Orderread read successfully'");
//             res.status(200).json(orderread);
//         } catch (err) {
//             console.log(err);
//             res.status(500).send('Error occurred while retrieving data');
//         }
    
//     });
//     // read a single Orderread  by id for update
// app.get('/Orderreads/:id', async (req, res) => {
//     try {
//         const Orderread = await Orderread.findById(req.params.id);
//         console.log('Orderread read successfully for update');
//         res.status(200).json(orderread);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Error occurred while retrieving data');
//     }
// });
    
// app.put("/Orderread/:id", async (req, res) => {
//     const objectId = req.params.id;
//     const {  UserId, Supplement_Date,Supplement_Type,Supplement_Quantity } = req.body;
//     try {
//         const updatedOrderread = await Orderread.findByIdAndUpdate(
//             objectId,
//             {UserId:UserId,
//                 Supplement_Date:Supplement_Date,
//                 Supplement_Type:Supplement_Type,
//                 Supplement_Quantity:Supplement_Quantity
//             },
//             { new: true }
//         );
//         res.status(200).send(updatedOrderread);
//         console.log('Orderread updated successfully');

//     } catch (err) {
//         console.log(err);
//         res.status(500).send('Error occurred while updating data');
//     }
// });
// app.delete("/Orderread/:id", async (req, res) => {
//     const objectId = req.params.id;
//     try {
//         await Orderread.findByIdAndDelete(objectId);
//         console.log("'Orderread deleted successfully'");
//         res.status(200).send('Orderreads deleted successfully');
//     } catch (err) {
//         console.log(err);
//         res.status(500).send('Error occurred while deleting data');
//     }
// });
>>>>>>> origin/Sujithra
