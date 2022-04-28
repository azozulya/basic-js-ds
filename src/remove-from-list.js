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
function removeKFromList(l, k) { 
  let head = l;

  if(l.value === k && l.next === null) {
    head = null;
  }

  if(l.value === k) {
    head = l.next;
  }

  let prev = head;
  let tail = head.next;

  while(tail.next) {    
    const {value, next} = tail;

    if(value === k && next === null) {
      prev.next = null;
    }
    if(value === k) {
      prev.next = next;
      tail = next;
    } else {
      prev = tail;
      tail = next;
    }
  }
  
  if(tail.value === k && tail.next === null) {
    prev.next = null;
  }

  return head;
}

// const generateLinkedList = (arr) => {
  
//   const getListNode = (prev, val) => {
//     const node = new ListNode(val);
//     prev.next = node;
//     return node;
//   }
  
//   let list = new ListNode(arr[0]);
//   let current = getListNode(list, arr[1]);

//   for(let i = 2; i < arr.length; i++) {
//     const node = getListNode(current, arr[i]);
//     current = node;
//   }
//   return list;
// }

// const l = [3, 1, 2, 3, 3, 5];
// const list = generateLinkedList(l);

// console.log('result: ', removeKFromList(list, 3));

module.exports = {
  removeKFromList
};
