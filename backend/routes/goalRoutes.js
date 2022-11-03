const express = require('express');
const router = express.Router();

//https://expressjs.com/en/guide/writing-middleware.html
router.get('/',(req,res,next)=>{
    res.status(200).json({msg:'GET Goals'})
});

router.post('/',(req,res,next)=>{
    res.status(200).json({msg:'SET Goals'})
});

router.put('/:id',(req,res,next)=>{
    res.status(200).json({msg:`UPDATE goal ${req.params.id}`})
});

router.delete('/:id',(req,res,next)=>{
    res.status(200).json({msg:`DELETE goal ${req.params.id}`})
});

module.exports = router;