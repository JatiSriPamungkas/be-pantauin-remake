import { getUsers, getUsersByUsername } from "../models/users.model.js";

export const getUser = async (req, res) => {
    try {
        const [data] = await getUsers();

        res.status(200).json({
            message: "Success to GET users data!",
            data,
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to GET users data!",
            errorMessage: error,
        });
    }
};

export const getUserByUsername = async (req, res) => {
    const { username } = req.body;
    console.log(username);

    try {
        const [data] = await getUsersByUsername(username);

        res.status(200).json({
            message: "Success to GET user by username data!",
            data,
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to GET users by username data!",
            errorMessage: error,
        });
    }
};
