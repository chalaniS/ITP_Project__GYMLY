import logger from "./utils/logger";
import express from "express";
import cors from "cors";
import { connect } from "./utils/database.connection";

const app = express();
const PORT = process.env.PORT || "8090";

app.use(cors());
app.use(express.json({ limit: "20mb" }));

app.get("/getData", (req, res, next) => {
    res.send("Hello, I'm from Backend 👋😁");
    next();
});

app.listen(PORT, () => {
    logger.info("test");
    console.log(`🚀 Server is running on PORT : ${PORT}`);
    connect();
});