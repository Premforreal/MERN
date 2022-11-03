const express = require('express');
const dotenv  = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const port    = process.env.PORT || 5000
//https://stackoverflow.com/questions/59428844/listen-eacces-permission-denied-in-windows
//PORT=5000; gives error. Don't use semicolon.

const app =express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}))

app.use('/api/goals',require('./routes/goalRoutes'));

app.use(errorHandler); //overrides express default error handler

app.listen(port,()=>console.log(`listening on port ${port}`));  