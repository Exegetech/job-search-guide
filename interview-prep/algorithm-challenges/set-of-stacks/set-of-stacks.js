/*
Note: An alternate solution is to have an array containing all of the stacks instead of using a stack of stacks.

In this case, a new stack is pushed to the array if the previous stack is at the max length. Some way to keep track of stack length is still necessary. Popping would involve removing an element from the current stack (and removing the stack itself if it has length 0).
*/

function Node(value) { //solution does not need to implement this
	this.value = value;
}

function Stack() { 
	this.top = null;
	this.length = 0;
}

Stack.prototype.push = function(value) {
	var newNode = new Node(value);
	if (!this.top) { //pushing to an empty stack
		this.top = newNode;
	} else {
		newNode.next = this.top;
		this.top =newNode;
	}
	this.length++;
};

Stack.prototype.pop = function() {
	if (!this.top) return null; // stack is empty
	var popped = this.top.value;
	this.top = this.top.next;
	this.length--;
	return popped;
};

Stack.prototype.peek = function() {
	if (!this.top) return null; // stack is empty
	return this.top.value;
};

function setOfStacks(maxValue) {
	this.maxValue = maxValue || 5; //set a default max value of 5 if no max value is provided. This could be any number (or an error could be thrown)
	this.stackOfStacks = new Stack();
	this.currentStack = null;
}

setOfStacks.prototype.push = function(value) {
	var newNode = new Node(value);
	if (!this.currentStack || this.currentStack.length === this.maxValue) { //need to create a new stack (if no previous stack or previous stack at max capacity)
		var newStack = new Stack();
		newStack.push(new Node(value));
		this.stackOfStacks.push(newStack);
		this.currentStack = this.stackOfStacks.peek();
	} else {
		this.currentStack.push(newNode);
	}
};

setOfStacks.prototype.pop = function() {
	if (!this.currentStack) return null; //stackOfStacks is empty- no elements currently
	var popped = this.currentStack.pop();
	if (!this.currentStack.length) { //current stack is now empty so remove it
		this.stackOfStacks.pop();
		this.currentStack = this.stackOfStacks.peek();
	}
	return popped;
};

setOfStacks.prototype.peek = function() {
	if (!this.currentStack) return null;//no elements in your stackOfStacks
	return this.currentStack.peek();
};