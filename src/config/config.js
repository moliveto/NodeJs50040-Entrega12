import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

const { NODE_ENV, PORT, PERSISTENCE, DB_HOST, DB_PORT, DB_NAME } = process.env;
const MONGO_URI = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

export { NODE_ENV, PORT, PERSISTENCE, MONGO_URI };
