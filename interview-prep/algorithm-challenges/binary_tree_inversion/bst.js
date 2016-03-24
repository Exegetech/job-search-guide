function BinarySearchTree(value){
	this.value = value;
	this.left = undefined;
	this.right = undefined;
}

BinarySearchTree.prototype.insert = function(value){
	(function insertionFunc(tree, prevTree, direction){
		if(!tree){
			tree = new BinarySearchTree(value);
			prevTree[direction] = tree;
		}
		else if(value <= tree.value) insertionFunc(tree.left, tree, 'left');
		else if(value >= tree.value) insertionFunc(tree.right, tree, 'right');
	})(this);
};

BinarySearchTree.prototype.breadthFirstForEach = function(cbFunc){
	var queue = [];
	(function breadthFirst(tree){
		cbFunc(tree.value);
		if(tree.left) queue.push(tree.left);
		if(tree.right) queue.push(tree.right);

		if(queue.length) breadthFirst(queue.shift());
	})(this);
};

BinarySearchTree.prototype.inverse = function(){
	(function inverseFunc(tree){
		var temp = tree.left;
		tree.left = tree.right;
		tree.right = temp;
		if(tree.left) inverseFunc(tree.left);
		if(tree.right) inverseFunc(tree.right);
	})(this);
};