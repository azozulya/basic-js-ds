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
  constructor(){
    this.head = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if(!this.head) {
      this.head = new ListNode(value);
      return;
    }

    if(this.head.next === null) {
      this.head.next = new ListNode(value); 
      return;
    }
    
    let tail = this.head.next;

    while(tail.next) {
      tail = tail.next;
    }

    tail.next = new ListNode(value);
  }

  dequeue() {
    const firstListNode = this.head;
    
    this.head = this.head.next;

    return firstListNode.value;
  }
}

// const queue = new Queue();
// queue.enqueue(5);
// queue.enqueue(6);
// queue.enqueue(7);
// console.log(queue.getUnderlyingList());
// console.log(queue.dequeue()); //, 5
// queue.dequeue(); //, 6
// console.log(queue.getUnderlyingList());

module.exports = {
  Queue
};
