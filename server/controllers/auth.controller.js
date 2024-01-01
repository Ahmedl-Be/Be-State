import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { SUCCESS, FAIL, ERROR } from "../utils/httpStatusText.js";
import appError from "../utils/appError.js";
import jwt from "jsonwebtoken";

export const signUp = async (req, res, next) => {
    const { username, email, password } = req.body;
    const oldEmail = await User.findOne({ email: email });
    const oldUserName = await User.findOne({ username: username });
    if (oldEmail) {
        const error = appError.create("Email Already Used", 404, FAIL)
        return next(error);
    }
    if (oldUserName) {
        const error = appError.create("Username Already Used", 404, FAIL)
        return next(error);
    }
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save();
        res.status(201).json({ status: SUCCESS})
    }
    catch (err) {
        next(err)
    }
}

export const signIn = async(req, res, next) => {
    const {email, password} = req.body;
    try {
        const validUser = await User.findOne({email});
        if(!validUser){       
        const error = appError.create("User Not Found!",404, ERROR)
        return next(error);
        }
        const matchedPassword = bcryptjs.compareSync(password,validUser.password)
        if(!matchedPassword){
            const error = appError.create("Wrong credentials!",401, FAIL)
            return next(error);
        }
        const token = jwt.sign({id:validUser._id},process.env.JTW_SECRET);
        const {password:pass , ...rest}= validUser._doc;
        res.cookie('access_token',token,{
            httpOnly:true,
        })
        res.status(200).json(rest)
    } catch (error) {
        next(error)
    }
}
