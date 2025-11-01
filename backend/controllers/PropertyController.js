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
const getProperty = async (req, res) => {
    try {
        const { id } = req.params;
        const Property = await property.findById(id);
        res.status(200).json(Property);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

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
const updateProperty = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const Property = await property.findByIdAndUpdate(id, data);
        res.status(200).json(Property);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}


//delete a property
const deleteProperty = async (req, res) => {
    try {
        const { id } = req.params;
        const Property = await property.findByIdAndDelete(id);
        res.status(200).json(Property);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

//export function for use elsewhere
module.exports = { createProperty, getAllProperties, getProperty, deleteProperty, updateProperty };