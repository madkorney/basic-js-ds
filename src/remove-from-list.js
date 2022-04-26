const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(inputList, k ) {

  let currentNode = inputList;
  while (currentNode.next != null) {
    if (currentNode.value === k) {
      if (currentNode.next.value === k) {
        currentNode.value = currentNode.next.next.value;    
        currentNode.next = currentNode.next.next.next;

      } else {
      currentNode.value = currentNode.next.value;    
      currentNode.next = currentNode.next.next;
      }
    } 

    if (currentNode.next.next == null && currentNode.next.value === k) {
      currentNode.next = null;
    } else {
      currentNode = currentNode.next;  
    }
  }
  return inputList
}



//  class ListNode {
//    constructor(x) {
//      this.value = x;
//      this.next = null;
//    }
//  }

// function convertArrayToList(arr) {
//   return arr.reverse().reduce((acc, cur) => {
//     if (acc) {
//       const node = new ListNode(cur);
//       node.next = acc;
//       return node;
//     }

//     return new ListNode(cur);
//   }, null);
// }
// const initial = convertArrayToList([3, 1, 2, 3, 4, 5]);
// const expected = convertArrayToList([1, 2, 4, 5]);
// console.log(initial);
//     console.log(removeKFromList(initial, 3));
//     console.log(initial);
//     console.log(expected);

module.exports = {
  removeKFromList
};
