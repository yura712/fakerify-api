class CustomersController {
  static getCustomers(ctx) {
    ctx.body = ['test', 'one more'];
  }
}

module.exports = CustomersController;
