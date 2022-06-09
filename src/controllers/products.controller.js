const { faker } = require('@faker-js/faker');

class ProductsController {
  static getProducts(ctx) {
    ctx.response.body = Array.from(Array(100)
      .keys())
      .map(() => ({
        title: faker.lorem.words(2),
        description: faker.lorem.paragraph(),
        price: faker.random.numeric(2),
      }));
  }
}

module.exports = ProductsController;
