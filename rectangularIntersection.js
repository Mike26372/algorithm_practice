function rectangularIntersection(rec1, rec2) {
  let bottomY = rec1.bottomY > rec2.bottomY ? rec1.bottomY : rec2.bottomY;
  let leftX = rec1.leftX > rec2.leftX ? rec1.leftX : rec2.leftX;
  let width = Math.min(rec1.leftX + rec1.width, rec2.leftX + rec2.width) - leftX;
  let height = Math.min(rec1.bottomY + rec1.height, rec2.bottomY + rec2.height) - bottomY;
  console.log(leftX, bottomY, width, height);
  return {leftX, bottomY, width, height};
}


var testRec1 = {
  leftX: 1,
  bottomY: 5,
  width: 10,
  height: 4
};

var testRec2 = {
  leftX: 8,
  bottomY: 7,
  width: 5,
  height: 5
};

console.log(rectangularIntersection(testRec1, testRec2));