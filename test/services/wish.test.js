const assert = require('assert');
const app = require('../../src/app');

describe('\'wish\' service', () => {
  it('registered the service', () => {
    const service = app.service('wish');

    assert.ok(service, 'Registered the service');
  });
});
