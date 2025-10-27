//allows process.env prefix to env variables
require('dotenv').config()

//first get express functionality
const express = require('express');

//create instance of express - express app
const app = express();


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