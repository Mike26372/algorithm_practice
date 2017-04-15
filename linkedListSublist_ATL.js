function findSublist(list, sublist) {
  // Set current node as head of list
  let current = list;
  // Keep track of index within list while looping through
  let index = 0;
  // Iterate through list
  while (current) {

    if (current.value = sublist.value) {
      let currentListItem = current;
      let currentSublistItem = sublist;
      
      while (currentSublistItem && currentListItem) {
        console.log(currentListItem, currentSublistItem);
        // If value of sublist item and list item aren't equal, sublist not a subset of list
        if (currentSublistItem.value !== currentListItem.value) break;
        // move both items to next spot in list if equal
        currentListItem = currentListItem.next;
        currentSublistItem = currentSublistItem.next;
      }
      // If current sublist item is null, loop has reached end of sublist
      // therefore, sublist is truly a sublist of list and return start index
      if (currentSublistItem === null) return index;
    }

    // Update index count and move current to next item in linked list
    index++;
    current = current.next;
  }
  // If loop gets to end of list without returning, return -1
  return -1;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

var list1 = new Node(1);
var list2 = new Node(2);
var list3 = new Node(3);
var list4 = new Node(4);
var list5 = new Node(5);
var list6 = new Node(6);
var list7 = new Node(7);

list1.next = list2;
list2.next = list3;
list3.next = list4;
list4.next = list5;
list5.next = list6;
list6.next = list7;

var sublist1 = new Node(4);
var sublist2 = new Node(6);
var sublist3 = new Node(6);

sublist1.next = sublist2;
sublist2.next = sublist3;

// console.log(list1);
// console.log(sublist1);

console.log(findSublist(list1, sublist1));