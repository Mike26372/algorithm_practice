function foo() {

  function bar() {
    setTimeout(() => {
      console.log('Curly')
    }, 1000);
  }

  console.log('Larry');
  return bar;
}

let x = foo();
x();
console.log('Moe')

const f = n => n <= 1 ? 1 : n * f(n - 1);

let g = f(4);
console.log(g)

function f(x) {
  x *= 2
  return function (y) {
    y *= x
    return function (z) {
      return y * z
    }
  }
}

let g = f(3)(4)(5);
console.log(g)

function strToFloat(str) {
  return parseFloat(str);
}

console.log(strToFloat('20.01'))

function reverseList(arr) {
  const newList = []
  for (let i = 0; i < arr.length; i++) {
    newList.push(arr[arr.length - i - 1]);
  }
  console.log(newList)
}

reverseList([1,2,3,4])

function incr(num) {
  this.count ++
}

incr.count = 0;

let i = 0;
for (i = 0; i < 10; i++) {
  if (i > 5) {
    incr(i)
  }
}

console.log(incr.count)

console.log(('hellodoghello').split('dog').join('cat'))