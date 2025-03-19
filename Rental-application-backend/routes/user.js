import express from 'express';
import { userSigninSchema } from '../zodSchema.js';
import { User } from '../db.js';
import jwt from 'jsonwebtoken';

const userRouter = express.Router();

const JSONSECRET = 'ThisISMySecretKey';

const generateToken = (id) => {
    const token = jwt.sign({ id }, JSONSECRET, { expiresIn: "7 days" });
    return token;
};

userRouter.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ success: false, message: "Please provide email and password" });
    }
    const { success, error } = userSigninSchema.safeParse({ email, password });
    if (!success) {
        return res.status(400).json({ success: false, message: "Invalid inputs", error: error.errors });
    }
    try {
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(401).json({ success: false, message: "Invalid Credentials" });
        }
        const token = generateToken(user._id);
        return res.status(200).json({ success: true, message: "User signed in successfully", data: user, token: token });
    } catch (error) {
        return res.status(500).json({ success: false, message: "An error occurred", error: error.message });
    }
});

userRouter.post('/signup', async (req, res) => {
    const { email, fullname, phoneno, password } = req.body;
    if (!email || !fullname || !password || !phoneno) {
        return res.status(400).json({ success: false, message: "Please provide all required fields" });
    }
    try {
        const { success, error } = userSigninSchema.safeParse({ email, password });
        if (!success) {
            return res.status(400).json({ success: false, message: "Invalid inputs", error: error.errors });
        }
        const user = await User.findOne({ email });
        if (user) {
            return res.status(409).json({ success: false, message: "User already exists" });
        }
        const newUser = await User.create({
            fullname,   
            email,
            password,
            phoneno
        });
        const token = generateToken(newUser._id);
        return res.status(201).json({ success: true, message: "User signed up successfully", data: newUser, token: token });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "An error occurred", error: error.message });
    }
});

export default userRouter;
