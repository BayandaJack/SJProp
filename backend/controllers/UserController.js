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


//delete a user

//export function for use elsewhere
module.exports = { createUser, getAllUsers };