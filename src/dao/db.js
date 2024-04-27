// db.js
import mongoose from "mongoose";
import { DB_HOST, DB_PORT, DB_NAME } from "../config/config.js";

const MONGO_URL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

let connection = null;

const connectDb = async () => {
    if (connection) {
        return connection;
    }

    try {
        connection = await mongoose.connect(MONGO_URL);
        console.log("🚀 ~ file: db.js ~ CONECTADO!:");
    } catch (err) {
        console.log("🚀 ~ file: db.js ~ err:", err);
    }

    return connection;
};

export default connectDb;