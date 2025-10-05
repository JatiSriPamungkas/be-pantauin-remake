import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export const dbPool = mysql.createPool({
    host: process.env.EXPRESS_HOST,
    user: process.env.EXPRESS_USER,
    password: process.env.EXPRESS_PASSWORD,
    database: process.env.EXPRESS_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
