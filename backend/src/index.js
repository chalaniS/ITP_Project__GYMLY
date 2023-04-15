import "dotenv/config";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import ReportModel from "./models/Payment/ReportModel.js";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;


//connect with frontend
app.get("/getData", (req, res) => {
    res.send("Hello I'm from backend");
});

let database;
// app.use('/Report',router)


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
        res.status(200).send("Data inserted successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error occurred while inserting data");
    }
});



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


