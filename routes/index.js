const products = require('./products')
const adminRouter = require('./admin')
const homeRouter = require('./home')
const userRouter = require('./user')

function routes(app) {
    app.use('/admin', adminRouter)
    app.use('/user', userRouter)
    app.use('/products', products)
    app.use('/',homeRouter)

}

module.exports = routes