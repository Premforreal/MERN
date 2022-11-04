const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

//@desc : we are checking for authorization header
//making sure its a bearer token
//decoding and verifying the token 
//getting user from token
// calling next piece of middleware
const protect = asyncHandler(async (req,res,next)=>{
    let token;

    if(req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer')
        )
        {
            try{
                //get token from header
                token = req.headers.authorization.split(' ')[1]; //"bearer <token>" splits by space

                //verify token
                const decoded = jwt.verify(token,process.env.JWT_SECRET);

                //get user from token
                req.user = await User.findById(decoded.id).select('-password')//won't include the password;
                next();
            } catch(err){
                console.log(err);
                res.status(401);
                throw new Error("not authorized");
            }
    }

    if(!token){
        res.status(401);
        throw new Error('Not Authorized (no token)');
    }
});

module.exports = {protect};