//allows process.env prefix to env variables
require('dotenv').config()

//first get express functionality
const express = require('express');
const mongoose = require('mongoose');

const listingRoutes = require('./routes/listings');

//create instance of express - express app
const app = express();

//allows req body to go through middleware
app.use(express.json());

//requests go through here before reaching actual endpoint
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next(); //moves to endpoint
})

app.use('/api/listings', listingRoutes);

app.get('/', (req, res) => {
    res.json({msg: "Hello world"});
});

//connect to db with mongoose
mongoose.connect(process.env.MONGO_URI)
    //only listen for requests once connected to db
    .then(() => {
        app.listen(process.env.PORT, () => {
        console.log("Connected to db & Listening on port ", process.env.PORT);
    });
    })
    .catch((error) => {
        console.log(error)
    })