const express = require('express');
const { createProperty, getAllProperties } = require('../controllers/PropertyController');

//
const router = express.Router();

router.get('/', getAllProperties);

router.post('/post', createProperty);

router.delete('/:id', (req, res) => {
    res.json({msg: "Deleting from posts!"});
});

router.patch('/:id', (req, res) => {
    res.json({msg: "Updating posts!"});
});


module.exports = router;