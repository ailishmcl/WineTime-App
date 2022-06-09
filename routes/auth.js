// Import express
const express = require('express');

// Initialise router
const router = express.Router();

const { route } = require('.');

// Create controller
const authCtrl = require('../controllers/auth');

router.get('/auth/signup', authCtrl.auth_signup_get);
router.post('/auth/signup', authCtrl.auth_signup_post);
router.get('/auth/signin', authCtrl.auth_signin_get);
router.post('/auth/signin', authCtrl.auth_signin_post);
router.get('/auth/logout', authCtrl.auth_logout_get);


module.exports = router;

