const express = require('express');
const user = require('../schemas/UserSchema');
const { createUser } = require('../controllers/UserController');

//
const router = express.Router();

router.get('/', (req, res) => {
    res.json({msg: "All the listings!"});
});

router.post('/post', createUser);

router.delete('/:id', (req, res) => {
    res.json({msg: "Deleting from posts!"});
});

router.patch('/:id', (req, res) => {
    res.json({msg: "Updating posts!"});
});


module.exports = router;