const express = require('express');
const router = express.Router();
const {getGoals,postGoals,putGoals,deleteGoals} = require('../controllers/goalController');

//https://expressjs.com/en/guide/writing-middleware.html
router.get('/',getGoals);

router.post('/',postGoals);

router.put('/:id',putGoals);

router.delete('/:id',deleteGoals);

module.exports = router;