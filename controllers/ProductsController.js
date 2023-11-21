const Product = require('../model/ProductModel')
const { mutipleMongooseToObject, mongooseToObject} = require('../util/mongoose');

class ProductsController{
    // [GET] /products
    async getAllProducts(req, res) {
        try {
          const products = await Product.find();
          res.json(products);
          // res.render('products/list', {
          //   products: mutipleMongooseToObject(products),
          // });
        } catch (error) {
          res.status(400).json({ error: 'ERROR!!!' });
        }
      }
    
    //[GET] /product/:slug
    async getProductDetail(req, res){
        try {
            const product = await Product.findOne({ slug: req.params.slug })
            // res.json(product)
            res.render('products/detail', {
                product: mongooseToObject(product)
            })
        } catch (error) {
            res.status(400).json({ error: 'ERROR!!!' });
        }
    }
    //[GET] /product/:id
    async getProductDetail(req,res){
      try {
        const product = await Product.findOne({_id: req.params.id})
        res.json(product)
      } catch (error) {
        res.status(400).json({ error: 'ERROR!!!' });
      }
    }
    
    // [GET] /product/create
    async createProduct(req, res) {
      res.render('products/create');
    }

    // [POST] /product/store
    async storeProduct(req, res) {
      try {
        const product = new Product(req.body);
        await product.save();
        res.status(200).json({ message: 'ok' });
      } catch (error) {
        res.status(400).json({ error: 'ERROR!!!' });
      }
    }
    //[PUT] /:slug
    async updateProduct(req, res) {
      try {
        const product = await Product.updateOne({ slug: req.params.slug }, req.body);
        res.status(200).json({ message: 'update ok'});
      } catch (error) {
        res.status(400).json({ error: 'ERROR!!!' });
      }
    }
    // [DELETE] /:slug
    async deleleProduct(req, res, next) {
      try {
        const products = await Product.deleteOne({ slug: req.params.slug });
        res.status(200).json({ message: 'ok' });
      } catch (error) {
        res.status(400).json({ error: 'ERROR!!!' });
      }
    }
}
module.exports = new ProductsController();
