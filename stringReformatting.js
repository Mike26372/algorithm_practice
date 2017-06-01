function stringReformatting(s, k) {
  s = s.split('-').join('');
  var result = [];
  var first = s.length % k;
  if (first) {
    result.push(s.substr(0, first));
    s = s.substr(first);
  }
  while (s) {
    result.push(s.substr(0, k));
    s = s.substr(k);
  }
  
  
  return result.join('-');
}