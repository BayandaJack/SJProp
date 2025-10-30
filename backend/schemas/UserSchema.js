const mongoose = require('mongoose');

//get mongoose class used to create schemas
const Schema = mongoose.Schema

//instantiate a new schema object & define structure
//first arg -> structure 
//second arg -> timestamp
const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    contactNo: {
        type: String
    },
    role: {
        type: String,
        required: true
    },
    favourites: {
        type: Array
    }

}, { timestamps: true});

//auto plurization when creating model in database
//basically "create user collection that has UserSchema structure"
module.exports = mongoose.model('user', UserSchema);
//now we can import "user" and use this to interact with user collection in other files