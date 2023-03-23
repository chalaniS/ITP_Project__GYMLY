import mongoose from "mongoose";
import config from "../configs/config";
// import logger from "./logger";

let database;

const connect = async () => {

    const MONGODB_URL = config.DB_CONNECTION_STRING;

    if (database) return;

    // mongoose.set('strictQuery', true);

    mongoose
        .connect(MONGODB_URL)
        .then((connection) => {
            database = connection;
            console.log("Database Synced");
        })
        .catch((err) => {
            console.log(err.message);
        });
};

export { connect };