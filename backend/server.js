//first get express functionality
const express = require('express');

//create instance of express - express app
const app = express();

//listen for requests on the server
app.listen(4000, ()=> {
    console.log("Listening on port 4000...");
})