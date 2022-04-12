const { Node, ListNode } = require("./Node");
const LinkedList = require("./LinkedList");
function convertLLToArr(head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
}

//option 1 -
//Time: , Space:
var mergeTwoLists = function (list1, list2) {};

const odds = new LinkedList();
odds.push(1);
odds.push(3);

const evens = new LinkedList();
evens.push(2);
evens.push(4);
evens.push(6);
evens.push(8);
console.log(convertLLToArr(mergeTwoLists(odds.head, evens.head))); //[1, 2, 3, 4, 6, 8]

const odds2 = new LinkedList();
odds2.push(1);
odds2.push(3);

const evens2 = new LinkedList();

console.log(convertLLToArr(mergeTwoLists(odds2.head, evens2.head))); //[1, 2, 3, 4, 6, 8]
