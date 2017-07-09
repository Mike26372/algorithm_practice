function findProfession(level, pos) {
  
  let totalPreviousLevel = (1 << (level - 1)) - 1;
  
  let stack = [];
  let currentIndex = totalPreviousLevel + pos;
  
  while (currentIndex >= 1) {
    stack.push(currentIndex);
    currentIndex = Math.floor(currentIndex / 2);
  }
  console.log(stack);
  let isEngineer = true;
  let prevIndex = 1;
  
  while (stack.length) {
    var index = stack.pop();
    if (prevIndex * 2 + 1 === index) {
      isEngineer = !isEngineer;
    }
    prevIndex = index;
  }
  
  return isEngineer ? 'Engineer' : 'Doctor';
}


console.log(findProfession(17, 5921));
console.log(findProfession(20, 171971));
console.log(findProfession(25, 33554432));