const express = require('express');
const loginController = require('../controllers/loginController');

const router = express.Router();


router.get('/',  loginController.get)

router.post('/',  loginController.post)






module.exports = router
