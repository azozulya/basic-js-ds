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
	//	return data > root.data ? findNode(root.right) : findNode(root.left);
  }

  remove(data) {
    //let node = this.ROOT;

    // if(data < node.data) {
    //   let prev = node.left;
    //   while(node.data !== data) { console.log(node);
    //     prev = node;
    //     node = node.left;
    //   }
    //   if(node.left === null && node.right === null) {
    //     prev.left = null;
    //   }
    //   if(node.right === null) {
    //     prev.left = node.left;
    //   }
    //   if(node.left === null) {
    //     prev.left = node.right;
    //   }
    // }

    const deleteNode = (node) => {
      if(data < node.data) {
        return node.left = deleteNode(node.left);
      } 
      
      if(data > node.data)  
        return node.right = deleteNode(node.right);

      
        // let prev = node.left;
        // while(node.data !== data) { console.log(node);
        //   prev = node;
        //   node = node.left;
        // }

        console.log('delete node: ', node);
      if(node.left === null) {
        return node.right;
      }
      if(node.right === null) {
        return node.left;
      }
     
      
    }

    return this.ROOT = deleteNode(this.ROOT);    
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

const tree = new BinarySearchTree();
tree.add(10);
tree.add(3);
tree.add(6);
tree.add(7);
tree.add(2);
//tree.add(4);
tree.add(1);
console.log('root1: ', tree.root()); 
//console.log('find 3: ', tree.find(3));
//console.log('min: ', tree.min());
//console.log('max: ', tree.max());
console.log(tree.remove(7));
console.log('root2: ', tree.root());

// console.log('find 8: ', tree.find(8));
//console.log('has 1: ', tree.has(3));
//                10
//              /
//             3
//           /  \
//          2    6
//         /
//        1
module.exports = {
  BinarySearchTree
};