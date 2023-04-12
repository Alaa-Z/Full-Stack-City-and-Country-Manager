const express = require("express");
const {graphqlHTTP }= require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require('mongoose')
require('dotenv').config();

const app =  express();

// Connect to db 
const url = process.env.MONGODB_URL;
mongoose.connect(url);
mongoose.connection.once('open', ()=>{
    console.log('connect to database')
})

// Route Middleware
app.use('/graphql',graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(4000, ()=>{
    console.log("Server is running")
})
