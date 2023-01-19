const express = require('express');
const homeController = require('../controllers/homeController');
const jwtAuth = require('../middlewares/auth.middleware')

const router = express.Router();


router.get('/',  jwtAuth, homeController.get)

router.post('/',  jwtAuth, homeController.post)

router.post('/delete', jwtAuth, homeController.deleteItem);

router.get('/:dir', jwtAuth, homeController.getCustomDir);








module.exports = router
