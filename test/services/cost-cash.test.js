const assert = require('assert');
const app = require('../../src/app');

describe('\'costCash\' service', () => {
  it('registered the service', () => {
    const service = app.service('cost-cash');

    assert.ok(service, 'Registered the service');
  });
});
