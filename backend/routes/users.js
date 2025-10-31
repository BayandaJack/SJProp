const express = require('express');
const { createUser } = require('../controllers/UserController');

//
const router = express.Router();

//router.get('/', getAllProperties);

router.post('/post', createUser);

router.delete('/:id', (req, res) => {
    res.json({msg: "Deleting from posts!"});
});

router.patch('/:id', (req, res) => {
    res.json({msg: "Updating posts!"});
});


module.exports = router;