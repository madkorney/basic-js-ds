const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
 

  getUnderlyingList() {
    return this.UnderlyingList;
  }

  enqueue(value) {
    

    if (!this.UnderlyingList) {
      this.UnderlyingList = new ListNode(value)
    } else {


    let lastNode = this.UnderlyingList;
    
      while (lastNode.next) {
        lastNode = lastNode.next
      }
      lastNode.next = new ListNode(value);
    }
    
    
  }

  dequeue() {
    let elementFromQueue = this.UnderlyingList.value; 
    this.UnderlyingList = this.UnderlyingList.next;
    
    // this.UnderlyingList.value = this.UnderlyingList.next.value;
    // this.UnderlyingList.next = this.UnderlyingList.next.next;

    return elementFromQueue
  }
}

// const queue = new Queue();
// console.log( queue.getUnderlyingList());

// queue.enqueue(1); // adds the element to the queue
// console.log( queue.getUnderlyingList());
//  queue.enqueue(3); // adds the element to the queue
//  console.log( queue.getUnderlyingList());

//  queue.enqueue(33); // adds the element to the queue
//  console.log( queue.getUnderlyingList());

//  console.log(queue.dequeue()); // returns the top element from queue and deletes it, returns 1
//  console.log( queue.getUnderlyingList());

//  queue.enqueue(99); // adds the element to the queue
//  console.log( queue.getUnderlyingList());

//  console.log(queue.dequeue());
//  console.log( queue.getUnderlyingList()); // returns { value: 3, next: null }




module.exports = {
  Queue
};
