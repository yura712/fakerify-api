const { faker } = require('@faker-js/faker');

class ProductsController {
  static getProducts(ctx) {
    ctx.response.body = Array.from(Array(10)
      .keys())
      .map(() => ({
        title: faker.lorem.words(2),
        description: faker.lorem.paragraph(),
      }));
  }
}

module.exports = ProductsController;
