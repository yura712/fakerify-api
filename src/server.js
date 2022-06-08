const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const customers = require('./routes/customer.route');
const products = require('./routes/product.route');

const app = new Koa();
const port = process.env.PORT || 3005;

app.use(bodyParser());

app.use(customers.routes());
app.use(products.routes());

app.listen(port);
console.log(`listening on ${port}`);
