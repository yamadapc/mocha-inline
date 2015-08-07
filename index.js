'use strict';
function ensureGlobal() {
  try {
    global.stuff = 10;
    delete global.stuff;
  } catch(err) {
    if(err instanceof ReferenceError) {
      window.global = window;
    }
  }
}

function inline() {
  ensureGlobal();
  if(!global.describe) {
    global.describe = function() {};
    global.it = function() {};
  }
}
exports = module.exports = inline;
