const incomeCash = require('./income-cash/income-cash.service.js');
const costCash = require('./cost-cash/cost-cash.service.js');
const wish = require('./wish/wish.service.js');
const users = require('./users/users.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(incomeCash);
  app.configure(costCash);
  app.configure(wish);
  app.configure(users);
};
