const express =require('express')
const colors=require('colors')
const morgan=require('morgan')
const dotenv=require('dotenv');
const connectDB = require('./config/db');
//dotenv config
dotenv.config();
//mongo connection
connectDB()

//restobject
const app=express()

//middleware
app.use(express.json())
app.use(morgan('dev'))

//routes
app.get('/',(req,res)=>{
    res.send({message:"Serving RUnning"}).status(200)
})
//listening
const port=process.env.PORT||8000
const mode=process.env.NODE_MODE||'development'
app.listen(port,()=>{
    console.log(`Server Port ${mode} Mode on ${port}`.bgCyan);
})