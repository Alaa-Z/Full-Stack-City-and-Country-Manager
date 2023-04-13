const express = require("express");
const {graphqlHTTP }= require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require('mongoose')
const cors = require('cors');
require('dotenv').config();

const app =  express();

//allow cross-origin request

app.use(cors())


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
