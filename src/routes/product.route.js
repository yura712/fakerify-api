const Router = require('@koa/router');
const ProductsController = require('../controllers/products.controller');

const router = new Router({
  prefix: '/products',
});

router.get('/', ProductsController.getProducts);

module.exports = router;
