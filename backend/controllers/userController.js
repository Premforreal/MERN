//@desc   register new user
//@route  POST/api/users
//@access Public
const registerUser = (req,res)=>{
    res.json({
        message:'Register User'
    })
};

//@desc   authenticate user
//@route  POST/api/users/login
//@access Public
const loginUser = (req,res)=>{
    res.json({
        message:'Login User'
    });
};

//@desc   get user data
//@route  GET/api/users/me
//@access Public
const getMe = (req,res)=>{
    res.json({
        message:'User data'
    });
};

module.exports={
    registerUser,
    loginUser,
    getMe, 
};