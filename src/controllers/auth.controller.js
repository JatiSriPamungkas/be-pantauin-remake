import jwt from "jsonwebtoken";
import { getUsersByUsername } from "../models/users.model.js";

export const login = async (req, res) => {
    const { username, password } = req.body;
    const [[user]] = await getUsersByUsername(username);

    if (!user) return res.status(401).json({ message: "User not found!" });

    const validPassword = password == user.password;
    if (!validPassword) return res.status(401).json({ message: "Invalid password!" });

    const token = jwt.sign(
        {
            id: user.user_id,
            username: user.username,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "15m",
        }
    );

    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV == "production",
        sameSite: "lax",
        maxAge: 15 * 60 * 1000,
    });

    res.json({ message: "Login successful!" });
};

export const logout = (req, res) => {
    res.clearCookie("token");
    res.json({ message: "Log out successful!" });
};
