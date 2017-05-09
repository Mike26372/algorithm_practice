function debounce(func, timeout) {
  var lastCalled = null;

  return function() {
    if (lastCalled) {
      clearTimeout(lastCalled);
    }

    lastCalled = setTimeout(() => {
      return func.apply(this, arguments);
    }, timeout);
  };
}

var printName = function(name) {
  console.log('Michael');
};

var printNamedebounced = debounce(printName, 1000);
printNamedebounced();
printNamedebounced();
printNamedebounced();