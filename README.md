mocha-inline
============
What is this? This is a really small helper (you could do it in 2 lines, really)
to work with the idea of inlined BDD test blocks. Those are the `describe` and
`it` blocks JavaScript testing frameworks like `mocha` use.

## Rationale and usage

The idea is to write them along your code. When running your code with `mocha`,
`karma` or whatever you want to run them with, they'll be treated as tests. When
running your tests normallly, they'll treated as noops. An example:

```javascript
require('mocha-inline')();

function add(x, y) {
  return x + y;
}

describe('add(x, y)', function() {
  var assert = require('assert');

  it('add(1, 1) is 2', function() {
    assert(add(1, 1) === 2);
  });
});
```

## TODO Removing inlined tests from built code

**This is not implemented yet**

There's something important this little package should provide: an utility for
removing those test blocks from your code. This is for browser people, who don't
want test blocks to be shipped to clients.

### ... from the command-line

```bash
$ echo "describe('stuff', function() {it('here');});" > example.js
$ mkdir output
$ mocha-inline example.js
Removed 1 `describe` from example.js (example.js -> example-notest.js)
```

## License
This code is licensed under the MIT license. See LICENSE for more information.
