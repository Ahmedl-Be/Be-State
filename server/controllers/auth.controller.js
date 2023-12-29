import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { SUCCESS, FAIL, ERROR } from "../utils/httpStatusText.js";
import appError from "../utils/appError.js";

export const signUp = async(req,res,next)=>{
    const {username,email,password} = req.body;
    const oldEmail = await User.findOne({ email: email });
    const oldUserName = await User.findOne({ username: username });
    if (oldEmail || oldUserName ) {
        const error = appError.create("User Already Exists", 404, FAIL)
        return next(error);
    }
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({username, email, password:hashedPassword});
    // if user exits in db return msg 
    // if email exits in db return msg 
    try{
        await newUser.save();
        res.status(201).json({msg:"User created successfully"})
    }catch(err){
        next(err)
    }
}
