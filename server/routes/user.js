const express = require('express');
const userController = require('../controllers/UserController.js');
const bodyParser = require('body-parser');
const router = express.Router();

router.get('/',(req,res) => {
    res.status(200).send('get request from /api/user is received');
});

router.post('/signup',userController.createUser,(req,res) => {
    res.status(200).send(res.locals.user);
});

router.post('/login',userController.verifyUser,(req,res) => {
    res.json(res.locals.isVerified);
});

module.exports = router;