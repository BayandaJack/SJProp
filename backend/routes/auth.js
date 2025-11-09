const express = require('express');
const passport = require('passport');

const { AuthLogin, AuthLogout, GoogleCallBack } = require('../controllers/AuthController');

const router = express.Router();

router.get('/login', AuthLogin);

//auth logout
router.get('/logout', AuthLogout);

//auth with google
router.get('/google', 
    passport.authenticate('google', {
        scope: ['profile']  //find out what other stuff can be retrieved from here
    })
);

//callback for Google redirection
router.get('/google/redirect', GoogleCallBack)

module.exports = router;