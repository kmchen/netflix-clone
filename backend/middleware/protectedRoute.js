import jwt from "jsonwebtoken";
import { ENV_VARS } from "../config/envVars.js";
import { User } from "../models/user.model.js";

export const protectedRoute = async(req, res, next) => {
    const token = req.cookies['jwt-netflix'];
    if(!token) {
        return res.status(400).json({success: false, message: "Missing cookie"})
    }
    const isDecoded = jwt.verify(token, ENV_VARS.JWT_SECRET);
    if(!isDecoded) {
        return res.status(401).json({success: false, message: "Unauthorized request"})
    }
    const user = await User.findOne({id: isDecoded.id});
    if(!user) {
        return res.status(404).json({success: false, message: "User not found"})
    }
    req.user = user;
    next();
}