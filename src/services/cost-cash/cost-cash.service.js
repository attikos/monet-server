// Initializes the `costCash` service on path `/cost-cash`
const createService = require('feathers-nedb');
const createModel = require('../../models/cost-cash.model');
const hooks = require('./cost-cash.hooks');
const filters = require('./cost-cash.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'cost-cash',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/cost-cash', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('cost-cash');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
