function parallel(tasks, callback) {
  var promises = tasks.map(task => {
    return new Promise((resolve, reject) => {
      task(function(err, result) {
        if (err) reject(err);
        resolve(result);
      });
    });
  });

  Promise.all(promises)
    .then(data => {
      callback(null, data);
    })
    .catch(err => {
      callback(err);
    });
}
 // TEST CASE
parallel([
  function(callback) {
    setTimeout(function() {
      return callback(null, 'one');
    }, 200);
  },
  function(callback) {
    setTimeout(function() {
      callback(null, 'two');
    }, 100);
  },
  function(callback) {
    setTimeout(function() {
      callback(null, 'three');
    }, 0);
  }
], function(err, results) {
  console.log('Error: ', err);
  console.log('Results: ', results);
});


function test(text) {
  return new Promise(resolve => {
    resolve(text);
  });
}


test('testing').then(result => console.log(result));