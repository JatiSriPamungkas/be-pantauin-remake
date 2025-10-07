import { dbPool } from "../config/database.js";

export const getUsers = () => {
    const SQLQuery = `SELECT * FROM users;`;

    return dbPool.execute(SQLQuery);
};

export const getUsersByUsername = (username) => {
    const SQLQuery = `SELECT * FROM users WHERE username = ?;`;

    return dbPool.execute(SQLQuery, [username]);
};
