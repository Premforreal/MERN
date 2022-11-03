//@desc   gets all goals but after auth it gets specific user goals
//@route  GET/api/goals
//@access Private
const getGoals = (req,res)=>{
    res.status(200).json({msg:'GET Goals'});
};

//@desc   gets all goals but aft6er auth it gets specific user goals
//@route  POST/api/goals
//@access Private
const setGoal = (req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error("Please add a text field");//this gives a HTML error message
    }
    res.status(200).json({msg:'SET Goals'});
};
//@desc   gets all goals but aft6er auth it gets specific user goals
//@route  PUT/api/goals
//@access Private
const updateGoal = (req,res)=>{
    res.status(200).json({msg:`UPDATE goal ${req.params.id}`});
};
//@desc   gets all goals but aft6er auth it gets specific user goals
//@route  DELETE/api/goals
//@access Private
const deleteGoal = (req,res)=>{
    res.status(200).json({msg:`DELETE goal ${req.params.id}`});
};

module.exports={
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}