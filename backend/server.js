//allows process.env prefix to env variables
require('dotenv').config()

//first get express functionality
const express = require('express');

//get route functionality from other file
//can use app.use and it will automatically become 
const listingRoutes = require('./routes/listings');

//create instance of express - express app
const app = express();

//global middleware that runs before an endpoint is hit
//requests go through here before reaching actual endpoint
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next(); //moves to endpoint
})

app.use('/api/listings', listingRoutes);
//section dealing with requests/responses to the different server routes
//req -> what is sent from the frontend
//res -> what is sent back to the frontend by the server
app.get('/', (req, res) => {
    res.json({msg: "Hello world"});
});

//listen for requests on the server
app.listen(process.env.PORT, ()=> {
    console.log("Listening on port ", process.env.PORT);
});