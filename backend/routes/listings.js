const express = require('express');

//
const router = express.Router();

router.get('/', (req, res) => {
    res.json({msg: "All the listings!"});
});

router.post('/post', (req, res) => {
    res.json({msg: "Posting to listings!"});
});

router.delete('/:id', (req, res) => {
    res.json({msg: "Deleting from posts!"});
});

router.update('/:id', (req, res) => {
    res.json({msg: "Updating posts!"});
});


module.exports = router;