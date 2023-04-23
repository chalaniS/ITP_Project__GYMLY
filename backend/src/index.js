import "dotenv/config";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import serviceFeedbackRouter from './routes/CustomerAffairs/serviceFeedback.js'
import instructorFeedbackRouter from './routes/CustomerAffairs/instructorFeedback.js'


//express app
const app = express();


//middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;


//connect with frontend
app.get("/getData", (req, res) => {
    res.send("Hello I'm from backend");
});

let database;



app.listen(PORT, () => {

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

//routes
app.use('/api/CustomerAffairs',serviceFeedbackRouter)
app.use('/api/instructorFeedback',instructorFeedbackRouter)