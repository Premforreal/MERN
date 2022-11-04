const jwt    = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

//@desc   register new user
//@route  POST/api/users
//@access Public
const registerUser = asyncHandler( async (req,res)=>{
    const {name,email,password} = req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please add all fields');
    }
    
    //check is user already exists
    const userExists = await User.findOne({email});
    if(userExists){
        res.status(400);
        throw new Error('User already exists!');
    }

    //Hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    //Create user
    const user = await User.create({
        name,
        email,
        password:hashedPassword
    });

    //is user is created
    if(user){
        res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email,
        })
    }else{
        res.status(400);
        throw new Error("Invalid user data");
    }
});



//@desc   authenticate user
//@route  POST/api/users/login
//@access Public
const loginUser = asyncHandler( async (req,res)=>{
    res.json({
        message:'Login User'
    });
});



//@desc   get user data
//@route  GET/api/users/me
//@access Public
const getMe = asyncHandler( async (req,res)=>{
    res.json({
        message:'User data'
    });
});



module.exports={
    registerUser,
    loginUser,
    getMe, 
};