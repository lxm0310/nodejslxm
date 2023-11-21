const express = require('express');
const router = express.Router();

const adminController = require('../controllers/AdminController')
router.get('/dashboard', adminController.getAllProducts)
router.put('/:id', adminController.updateProduct)
router.delete('/:id', adminController.deleleProduct)



module.exports = router;