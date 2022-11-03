//@desc   gets all goals but after auth it gets specific user goals
//@route  GET/api/goals
//@access Private
const getGoals = (req,res)=>{
    res.status(200).json({msg:'GET Goals'});
};

//@desc   gets all goals but aft6er auth it gets specific user goals
//@route  POST/api/goals
//@access Private
const postGoals = (req,res)=>{
    res.status(200).json({msg:'SET Goals'});
};
//@desc   gets all goals but aft6er auth it gets specific user goals
//@route  PUT/api/goals
//@access Private
const putGoals = (req,res)=>{
    res.status(200).json({msg:`UPDATE goal ${req.params.id}`});
};
//@desc   gets all goals but aft6er auth it gets specific user goals
//@route  DELETE/api/goals
//@access Private
const deleteGoals = (req,res)=>{
    res.status(200).json({msg:`DELETE goal ${req.params.id}`});
};

module.exports={
    getGoals,
    postGoals,
    putGoals,
    deleteGoals
}