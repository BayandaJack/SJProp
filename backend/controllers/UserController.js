const user = require('../schemas/UserSchema');

//get all users
const getAllUsers = async (req, res) => {
    try {
        const AllUsers = await user.find();
        res.status(200).json(AllUsers);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}


//get a single user
const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const User = await user.findById(id);
        res.status(200).json(User);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}


//create a new user
const createUser = async (req, res) => {
    const { username, contactNo, role } = req.body;
    //post to database
    try {
        const newUser = await user.create({
            username,
            contactNo,
            role
        })
        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).json({error: error.message});
        console.log(error); 
    }
}

//update user details
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedUser = await user.findByIdAndUpdate(id, data);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}


//delete a user
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const User = await user.findByIdAndDelete(id);
        res.status(200).json(User);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

//export function for use elsewhere
module.exports = { createUser, getAllUsers, deleteUser, getUser, updateUser };