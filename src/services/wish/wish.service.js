// Initializes the `wish` service on path `/wish`
const createService = require('feathers-nedb');
const createModel = require('../../models/wish.model');
const hooks = require('./wish.hooks');
const filters = require('./wish.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'wish',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/wish', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('wish');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
