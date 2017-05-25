function fizzBuzz() {
  for (var i = 0; i <= 100; i++) {
    var mod5 = (i % 5 === 0);
    var mod3 = (i % 3 === 0);
    if (mod5 && mod3) {
      console.log('FizzBuzz');
    } else if (mod3) {
      console.log('Fizz');
    } else if (mod5) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();