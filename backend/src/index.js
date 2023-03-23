import "dotenv/config";
import config from "./configs/config";
import express from "express";
import cors from "cors";
import { connect } from "./utils/database.connection"


const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;


//connect with frontend
app.get("/getData", (req, res) => {
    res.send("Hello I'm from backend");
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
    connect();

});
