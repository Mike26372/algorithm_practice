var perEl = ['C', 'El'];


function getName(name) {
  let rootEl = document.getElementById('root');
  let updatedName = addPeriodicElement(name);
  rootEl.innerHTML = updatedName;
}

function addPeriodicElement(str) {
  let newString = '';
  for (var i = 0; i < str.length; i++) {
    let changed = false;
    for (var j = 0; j < perEl.length; j++) {
      let el = perEl[j];
      if (str.substr(i, el.length).toLowerCase() === el.toLowerCase()) {
        newString += '<span class="element">' + el + '</span>'
        changed = true;
        i += el.length - 1;
        break;
      } 
    }
    if (!changed) {
      newString += str[i];
    }
  }
  return newString;
}

getName('Michael');

/*
perEl.forEach(el => {
    let regexp = new RegExp(el, 'gi');
    str = str.replace(regexp, '<span class="element">' + el + '</span>' )
  })
  return str;
*/