require('./')();

function add(x, y) {
  return x + y;
}

describe('add(x, y)', function() {
  var assert = require('assert');

  it('add(1, 1) is 2', function() {
    assert(add(1, 1) === 2);
  });
});
