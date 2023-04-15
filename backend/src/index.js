import "dotenv/config";
import mongoose from "mongoose";
// import config from "./configs/config";
import express from "express";
import cors from "cors";
import Report from "./models/Payment/ReportModel.js";
// import { connect } from "./utils/dbconnect"


const app = express();
app.use(cors());
// app.use(express.json());

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

app.post("/Report", async (req, res) => {
    const financialReportId = req.body.financialReportId
    const reportCatogery = req.body.reportCatogery
    const employeeID = req.body.employeeID
    const uploadedDate = req.body.uploadedDate
    const uploadedTime = req.body.uploadedTime
    const userId = "45821463#23669545"

 const report = new ReportModel({

        userId: "45821463#23669545",
       financialReportId:financialReportId,
    reportCatogery:reportCatogery,
    employeeID:employeeID,
    uploadedDate:uploadedDate,
    uploadedTime:uploadedTime
});

try {
    await ReportModel.save()
    console.log("successfully data inserted")
    res.status(200).send("Data inserted successfully");
} catch (err) {
    console.log(err);
    res.status(500).send("Error occurred while inserting data");
}

}
);



// const ReportSchema = new mongoose.Schema({
//     userId: String,
//     financialReportId: String,
//     reportCatogery: String,
//     employeeID: String,
//     uploadedDate: Date,
//     uploadedTime: Date,
//   });
  
//   const Report = mongoose.model("Report", ReportSchema);

