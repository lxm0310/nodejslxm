const Product = require('../model/ProductModel')
const { mutipleMongooseToObject, mongooseToObject} = require('../util/mongoose');

class HomeController{
    // [GET] /products
    async getAllProducts(req, res) {
        try {
          const products = await Product.find();
        //   res.json(products);
          res.render('home', {
            products: mutipleMongooseToObject(products),
          });
        } catch (error) {
          res.status(400).json({ error: 'ERROR!!!' });
        }
      }
    
}
module.exports = new HomeController();
