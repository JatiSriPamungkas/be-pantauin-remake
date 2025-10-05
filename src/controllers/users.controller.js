import { getUsers } from "../models/users.model.js";

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
