const { faker } = require('@faker-js/faker');

class CustomersController {
  static getCustomers(ctx) {
    ctx.response.body = Array.from(Array(100).keys())
      .map((value, index) => ({
        id: index + 1,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.unique(faker.internet.email),
        phone: faker.phone.phoneNumber('+37529-###-##-##'),
      }));
  }
}

module.exports = CustomersController;
