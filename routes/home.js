const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController')
router.get('/', homeController.getAllProducts)


module.exports = router;