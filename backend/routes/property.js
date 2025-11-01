const express = require('express');
const { createProperty, getAllProperties, getProperty, deleteProperty, updateProperty } = require('../controllers/PropertyController');

//
const router = express.Router();

router.get('/', getAllProperties);

router.get('/:id', getProperty);

router.post('/post', createProperty);

router.delete('/:id', deleteProperty);

router.patch('/:id', updateProperty);


module.exports = router;