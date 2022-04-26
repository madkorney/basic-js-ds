const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  inOrderTreeString = '';

  root() {
    if (this.binaryTree) {
      return this.binaryTree;
    } else {
      return null;
    }
  }

  add(data) {
    this.binaryTree = this.addNode(this.binaryTree, data);
  }

  addNode(currentNode , data) {
 
    if (!currentNode) { // if root is empty  or  end of the tree is reached - add new node
        currentNode = new Node(data);
        return currentNode;
    }

    if (data < currentNode.data)
        currentNode.left = this.addNode(currentNode.left, data);
    else if (data > currentNode.data)
        currentNode.right = this.addNode(currentNode.right, data);

    //if data is already in the tree - do nothing, end recurs
    return currentNode;
  }

  has(data) { //boolean
    let treeHasData = this.find(data) !== null;
    return treeHasData
  }

  
  find(data) {
    let currentNode = this.root();

    while (currentNode !== null && currentNode.data !== data) {
      if (currentNode.left === null && currentNode.right === null) {
        return null; // end of tree - data not found
      } else {
        if (currentNode.data > data) {
          //left 
          currentNode = currentNode.left;
        } else {
          //right
          currentNode = currentNode.right;
        }
      }
    }
    return currentNode;
  }


  remove(data) {
    if (this.has(data)) { 
      this.removeNode(this.root(), data);
    }
  }

  removeNode(root, data) {
    if (root === null) {return root } // tree is empty/ end of tree
    // todo recur delete down the tree
    let currentNode = root; 
    let parentNode = null;
    
    while (currentNode != null && currentNode.data != data) {
      parentNode = currentNode;

      if (data < currentNode.data) {
        currentNode =currentNode.left;
      } else {
        currentNode =currentNode.right;
      }
    }

    if (currentNode === null) {return root} // our key is not found - nothing  to delete. should not be the case but..

    //1. node is a leaf. no children
    if (currentNode.left === null && currentNode.right === null) {
      if (currentNode != root) { //clear parent pointer
        if (parentNode.left === currentNode) {
          parentNode.left = null;
        } else {
          parentNode.right = null;
        }
      } else {
        root = null; // delete root
      }
    }
    //2. node has 2 children
    else if (currentNode.left != null && currentNode.right != null) {
      let successorNode = this.minNodeFromCurrent(currentNode.right);
      let successorData = successorNode.data;

      this.removeNode(root, successorNode.data);// recursively delete the successor

      currentNode.data = successorData; // replace data in current node

    }
    //3. node has 1 child 
    else { 
      let child = (currentNode.left != null) ? currentNode.left : currentNode.right; 
      if (currentNode != root) {
        if (currentNode === parentNode.left) {
          parentNode.left = child;
        } else {
          parentNode.right = child;
        }
      } else {
        root = child;
      }
    }
    return root;
  } 


  min() {  // return value of min node
    
   return this.minNode() ? this.minNode().data : null;
  }

  minNode() {  // support func - return node with min Value
    
    if (this.root() === null) {return null} // no root - no nodes
    
    let currentNode = this.binaryTree;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    } 

    return currentNode;
  }

  minNodeFromCurrent(currentNode) {  // support func - return node with min Value in subtree starting from certain currentNode 
    
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    } 

    return currentNode;
  }

  max() {  // return value of max node
    return this.maxNode() ? this.maxNode().data : null;
  }

  maxNode() { // support func - return node with max Value
    
    if (this.root() === null) {return null} // no root - no nodes

    let currentNode = this.binaryTree;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    } 

    return currentNode;
  }

  //==========================================  optional 1)toString   , 2) +toArray
  toStringInOrder() {
    this.inOrderTreeString = '';  // let? var?
    this.inOrderTraversal(this.root());
    return this.inOrderTreeString.trim();
  }

  toArrayInOrder() {
    if (!this.root()) {return []} // empty BTS
    return this.toStringInOrder().split(' ').map(element => Number(element));
  }
 
  inOrderTraversal(node) {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      this.inOrderTreeString += node.data + ' ';
      this.inOrderTraversal(node.right);
    }
  }

}


// const tree = new BinarySearchTree();
// console.log('root',tree.root());
// console.log('inorder list _ ', tree.toStringInOrder());
// console.log('inorder arr _ ', tree.toArrayInOrder());
// console.log('max ', tree.max());

// tree.add(10);

// console.log('inorder list _ ', tree.toStringInOrder());
// console.log('has 1 - ', tree.has(1));
// console.log('has 10 - ', tree.has(10));
// console.log('min ', tree.min()); //` => `1`
// console.log('max ', tree.max());

// tree.add(2);
// console.log('inorder list _ ', tree.toStringInOrder());
// tree.add(3);
// console.log('inorder list _ ', tree.toStringInOrder());
// tree.add(14);
// tree.add(5);
// console.log('inorder list _ ', tree.toStringInOrder());
// console.log('root data: ', tree.root().data); //` => `1;`
// console.log('min ', tree.min()); //` => `1`
// console.log('max ', tree.max()); //` => `5`


// console.log('inorder list _ ', tree.toStringInOrder());
// console.log('removing -5-');
// tree.remove(5); //
// console.log('has 5 ', tree.has(5)); // => false
// console.log('max ', tree.max()); // `4`
// console.log('inorder list _ ', tree.toStringInOrder());
// console.log('inorder arr _ ', tree.toArrayInOrder());

// console.log('find existing -3- ', tree.has(3));
// console.log(tree.find(3));
// console.log('find nonexisting -42- ', tree.has(42));
// console.log(tree.find(42));

// const tree1 = new BinarySearchTree();
// tree1.add(2);
// tree1.add(7);
// tree1.add(1);
// tree1.add(8);
// tree1.add(4);
// tree1.add(32);
// tree1.add(12);
// tree1.add(14);
// console.log('inorder arr _ ', tree1.toStringInOrder());
// console.log('find  _8_ ', tree1.has(8), ' ', tree1.find(8).data );
// console.log('find  _2_ ', tree1.has(2), ' ', tree1.find(2).data );
// console.log('find  _32_ ', tree1.has(32), ' ', tree1.find(32).data );
// console.log('find  _14_ ', tree1.has(14), ' ', tree1.find(14).data );
// console.log('find  _33_ ', tree1.has(33), ' ', tree1.find(33) );
// console.log('find  _1337_ ', tree1.has(1337), ' ', tree1.find(1337) );
// console.log('find  _42_ ', tree1.has(42), ' ', tree1.find(42) );


// assert.strictEqual(tree.find(33), null);
//       assert.strictEqual(tree.find(1337), null);
//       assert.strictEqual(tree.find(42), null);

module.exports = {
  BinarySearchTree
};