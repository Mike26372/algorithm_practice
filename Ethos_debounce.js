function debounce(func, wait, immediate = false) {
  let timeout = null;
  return function() {
    let context = this, args = arguments;
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (callNow) func.apply(context, args);
  };
}

var printName = function(name) {
  console.log('Michael');
};

function sleep(timeout) {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

var printNamedebounced = debounce(printName, 800, true);
printNamedebounced();
printNamedebounced();
printNamedebounced();

// setTimeout(printNamedebounced, 300);
// sleep(1000);

// printNamedebounced();
