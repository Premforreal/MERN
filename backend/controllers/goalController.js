const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');
const User = require('../models/userModel');


//@desc   gets all goals but after auth it gets specific user goals
//@route  GET/api/goals
//@access Private
const getGoals = asyncHandler( async (req,res)=>{
    const goals = await Goal.find({user:req.user.id})
    res.status(200).json(goals);
});



//@desc   gets all goals but aft6er auth it gets specific user goals
//@route  POST/api/goals
//@access Private
const setGoal = asyncHandler(async (req,res)=>{
    if(!req.body.text){
        res.status(400);
        throw new Error("Please add a text field");//this gives a HTML error message
    }
    const goal = await Goal.create({
        text:req.body.text,
        user:req.user.id
    });
    res.status(200).json(goal);
});



//@desc   gets all goals but aft6er auth it gets specific user goals
//@route  PUT/api/goals
//@access Private
const updateGoal = asyncHandler( async (req,res)=>{
    const goal = await Goal.findById(req.params.id);

    if(!goal){
        res.status(400);
        throw new Error('error not found');
    }

    const user = await User.findById(req.user.id);
    if(!user){
        res.status(401);
        throw new Error('User not found'); 
    }
    //making sure loggged in user is the creator of the goal
    if(goal.user.toString() !== user.id){
        res.status(401);
        throw new Error('User not authorized!');
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new:true
    });

    res.status(200).json(updatedGoal);
});



//@desc   gets all goals but aft6er auth it gets specific user goals
//@route  DELETE/api/goals
//@access Private
const deleteGoal = asyncHandler(async (req,res)=>{
    const goal = await Goal.findById(req.params.id);
    
    if(!goal){
        res.status(400);
        throw new Error('goal not found');
    }

    const user = await User.findById(req.user.id);
    if(!user){
        res.status(401);
        throw new Error('User not found'); 
    }
    //making sure loggged in user is the creator of the goal
    if(goal.user.toString() !== user.id){
        res.status(401);
        throw new Error('User not authorized!');
    }

    await goal.remove();

    res.status(200).json({id:req.params.id});
});



module.exports={
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}