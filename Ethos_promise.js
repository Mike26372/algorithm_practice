var newPromise = new Promise(function(resolve, reject) {
  async(param, function(err, result) {
    if (err) {
      return reject(err);
    }

    return resolve(result);
  });
});