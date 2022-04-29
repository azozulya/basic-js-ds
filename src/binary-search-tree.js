const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.ROOT = null;
  }
  
  root() {    
    return this.ROOT;
  }

  add(data) {
    const addNode = (current) => { 
      if(!current) {
        current = new Node(data);
      } else if(data > current.data)  {
        current.right = addNode(current.right);
      } else {
        current.left = addNode(current.left);
      }
      return current;
    }    
      
    this.ROOT = addNode(this.ROOT); 
  }

  has(data) {
		return this.find(data) !== null;
  }

  find(data) {
    if(!data)
      return;

    const root = this.ROOT;

		if(data === root.data)
			return root;

		const findNode = (current) => {
			if(!current)
				return null;

			if(data === current.data)
				return current;

			return data > current.data ? findNode(current.right) : findNode(current.left);
		}
    return findNode(root);
  }

  remove(data) {
    const deleteNode = (node) => { 
      if(!node)
        return;

      if(data < node.data) {
        node.left = deleteNode(node.left);
        return node;
      } 
      
      if(data > node.data) {
        node.right = deleteNode(node.right);
        return node;
      }
      
      if(data === node.data) {
        if(node.left === null && node.right === null) {
          return null;
        }

        if(node.left === null) {
          node = node.right;
          return node;
        }

        if(node.right === null) {
          node = node.left;
          return node;
        }

        let minRight = node.right;

        while(minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;
        data = minRight.data;
        node.right = deleteNode(node.right);
        return node;
      }
    }
    this.ROOT = deleteNode(this.ROOT);
  }

  min() {
    const getMin = (current) => {
      if(current && !current.left)
        return current.data;
      
      return getMin(current.left);
    }
    return getMin(this.ROOT);
  }

  max() {
    const getMax = (current) => {
      if(current && !current.right)
        return current.data;
      
      return getMax(current.right);
    }
    return getMax(this.ROOT);
  }
}

//const tree = new BinarySearchTree();
// tree.add(10);
// tree.add(3);
// tree.add(6);
// tree.add(7);
// tree.add(2);
// //tree.add(4);
// tree.add(1);
// //console.log('root1: ', tree.root()); 
// //console.log('find 3: ', tree.find(3));
// //console.log('min: ', tree.min());
// //console.log('max: ', tree.max());
// console.log(tree.remove(75));
// console.log('root2: ', tree.root());

// console.log('find 8: ', tree.find(8));
//console.log('has 1: ', tree.has(3));
//                10
//              /
//             3
//           /  \
//          2    6
//         /      \
//        1        7


// tree.add(9);
// //tree.add(14);
// tree.add(2);
// tree.add(6);
// tree.add(128);
// tree.add(8);
// tree.add(31);
// tree.add(54);
// tree.add(1);
// //console.log('before remove 14: ', tree.root());
// //tree.remove(14);
// //tree.remove(8);
// tree.remove(9);
// console.log('final tree: ', tree.root());
// console.log(tree.has(14)); //, false);
//console.log(tree.has(8)); // false);
// console.log(tree.has(9)); // false);
// console.log(tree.has(2)); // true);
// console.log(tree.has(6)); // true);
// console.log(tree.has(12)); //), true);
// console.log(tree.has(31)); //, true);
// console.log(tree.has(54)); //, true);
// console.log(tree.has(1)); // true);

//                 9
//               /   \
//             2     14
//           /  \     \
//          1   6    128
//               \    /
//               8   31
//                    \
//                    54


module.exports = {
  BinarySearchTree
};