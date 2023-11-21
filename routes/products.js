const express = require('express');
const router = express.Router();

const productsController = require('../controllers/ProductsController');
// get /all json
// gey=t id
// posst /
// put skug
// dete slug 
router.get('/:id', productsController.getProductDetail)
router.put('/:slug', productsController.updateProduct)
router.delete('/:slug', productsController.deleleProduct)
router.get('/create', productsController.createProduct)
router.get('/', productsController.getAllProducts)
router.get('/:slug', productsController.getProductDetail)
router.post('/', productsController.storeProduct)


module.exports = router;