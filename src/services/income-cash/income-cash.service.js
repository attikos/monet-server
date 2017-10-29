// Initializes the `incomeCash` service on path `/income-cash`
const createService = require('feathers-nedb');
const createModel = require('../../models/income-cash.model');
const hooks = require('./income-cash.hooks');
const filters = require('./income-cash.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'income-cash',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/income-cash', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('income-cash');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
