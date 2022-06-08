const Router = require('@koa/router');
const CustomersController = require('../controllers/customers.controller');

const router = new Router({
  prefix: '/customers',
});

router.get('/', CustomersController.getCustomers);

module.exports = router;
