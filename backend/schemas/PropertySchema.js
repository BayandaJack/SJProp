const mongoose = require('mongoose');

//get mongoose class used to create schemas
const Schema = mongoose.Schema

//instantiate a new schema object & define structure
//first arg -> structure 
//second arg -> timestamp
const PropertySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    features: {
        bedrooms: {
            type: Number,
            required: true
        },
        bathrooms: {
            type: Number,
            required: true
        },
        garages: {
            type: Number,
            default: 0
        },
        pool: {
            type: Boolean,
            required: true
        },
        size: {
            type: Number, 
            required: false
        },
        furnished: {
            type: Boolean,
            default: false
        }
    }
}, { timestamps: true});

//auto plurization when creating model in database
//basically "create user collection that has UserSchema structure"
module.exports = mongoose.model('property', PropertySchema);
//now we can import "user" and use this to interact with user collection in other files