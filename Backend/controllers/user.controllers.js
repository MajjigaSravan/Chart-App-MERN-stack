import User from "../models/user.model.js";

export const getUsersForSidebar=async(req,res)=>{
    try {

        const loggedInuserId=req.user._id;

        const filteredUsers= await User.find({_id:{$ne:loggedInuserId}}).select("-password");

        res.status(201).json(filteredUsers);
        
    } catch (error) {
        console.error("Error in getUserForSidebar: ",error.message);
        res.status(501).json({error:""})
    }
};