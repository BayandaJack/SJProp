const property = require('../schemas/PropertySchema');

//get all properties
const getAllProperties = async (req, res) => {
    try {
        const AllProperties = await property.find(); //get all properties using find()
        res.status(200).json(AllProperties);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

//get a single property

//create a new property
const createProperty = async (req, res) => {
    const { title, description, type, features } = req.body;
    //post to database
    try {
        const newProperty = await property.create({
            title,
            description,
            type,
            features
        })
        res.status(200).json(newProperty);
    } catch (error) {
        res.status(400).json({error: error.message});
        console.log(error); 
    }
}

//update property details


//delete a property

//export function for use elsewhere
module.exports = { createProperty, getAllProperties };