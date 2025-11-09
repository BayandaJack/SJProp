const express = require('express');
const { AuthLogin, SignUpWithGoogle, AuthLogout } = require('../controllers/AuthController');

const router = express.Router();

router.get('/login', AuthLogin);

//auth logout
router.get('/logout', AuthLogout);

//auth with google
router.get('/google', SignUpWithGoogle);

module.exports = router;