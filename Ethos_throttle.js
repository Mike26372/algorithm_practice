function throttle(func, timeout = 1000) {

  var usedRecently = false;

  return function() {
    if (!usedRecently) {
      usedRecently = true;
      setTimeout(function() {
        usedRecently = false;
      }, timeout);
      return func.apply(this, arguments);
    } else {
      return null;
    }
  };

}

var printName = function(name) {
  console.log('Michael');
};

var printNameThrottled = throttle(printName, 1000);
printNameThrottled();
printNameThrottled();
printNameThrottled();