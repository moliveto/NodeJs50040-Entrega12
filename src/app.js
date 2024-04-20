import express from "express";
const mongoose = require("mongoose");
import cookieParser from "cookie-parser";
import displayRoutes from "express-routemap";

const app = express();
const PORT = 5000;
const API_PREFIX = "api";

const DB_HOST = "localhost";
const DB_PORT = 27017;
const DB_NAME = "entrega12";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
    .connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`)
    .then((conn) => {
        console.log("CONNECTED TO MONGO, WELCOME!!!");
    })
    .catch((err) => {
        console.log("ERROR CONNECTION!!!", err);
    });

app.listen(PORT, () => {
    console.log(`UP AND RUNNING ON PORT: ${PORT}`);
});