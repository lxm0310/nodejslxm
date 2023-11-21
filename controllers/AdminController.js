const Product = require('../model/ProductModel')
const { mutipleMongooseToObject, mongooseToObject} = require('../util/mongoose');

class AdminController{
    // [GET] /products
    async getAllProducts(req, res) {
        try {
          const products = await Product.find();
          res.json(products);
          // res.render('admin/dashboard', {
          //   products: mutipleMongooseToObject(products),
          // });
        } catch (error) {
          res.status(400).json({ error: 'ERROR!!!' });
        }
      }
      // [PUT] /product/:id
      async updateProduct(req, res) {
        try {
          const product = await Product.updateOne({ _id: req.params.id }, req.body);
          res.status(200).json({ message: 'update ok'});
        } catch (error) {
          res.status(400).json({ error: 'ERROR!!!' });
        }
      }
      // [DELETE] /product/:id
      async deleleProduct(req, res, next) {
        try {
          const products = await Product.deleteOne({ _id: req.params.id });
          res.status(200).json({ message: 'ok' });
        } catch (error) {
          res.status(400).json({ error: 'ERROR!!!' });
        }
      }



    
}
module.exports = new AdminController();
