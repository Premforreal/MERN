const path = require('path');
const express = require('express');
const dotenv  = require('dotenv').config();
//https://stackoverflow.com/questions/59428844/listen-eacces-permission-denied-in-windows
//PORT=5000; gives error. Don't use semicolon.
const port    = process.env.PORT || 5000
const colors = require('colors');
var cors = require('cors');

const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');

const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

connectDB();

const app =express();
app.use(cors(
//     {
//     origin:["http://localhost:3000"],
//     methods:["GET,POST,PUT,DELETE"],
//     credentials:true
// }
));
// app.use(cookieParser());
// app.use(bodyParser.urlencoded({extended:true}));

//https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded
app.use(express.json());
app.use(express.urlencoded({extended : false}))
 
app.use('/api/goals',require('./routes/goalRoutes'));
app.use('/api/users',require('./routes/userRoutes'));

//serve frontend
if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname,'../frontend/build')));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'../','frontend','build','index.html'));
    });
}; 

app.use(errorHandler); //overrides express default error handler

app.listen(port,()=>console.log(`listening on port ${port}`));  