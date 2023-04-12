const express = require("express");
const {graphqlHTTP }= require("express-graphql");

const app =  express();

// Route Middleware
app.use('/graphql',graphqlHTTP({

}))

app.listen(4000, ()=>{
    console.log("Server is running")
})
