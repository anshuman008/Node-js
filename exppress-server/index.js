
const express = require('express');
const {connectMongoDb} =  require('./connection');
// const data  = require('./MOCK_DATA.json'); old method
const {logReqRes} =  require('./middlewares');
const userRouter = require('./routes/user');


const PORT = 3000;
const  app = express();
app.use(express.json());


// connecting mongo DB
connectMongoDb('mongodb://127.0.0.1:27017/first-app');



//middle waree - plugins
app.use(logReqRes('log.txt'));


// Routess
app.use('/users',userRouter);



app.listen(PORT,()=>{
    console.log('server started');
})