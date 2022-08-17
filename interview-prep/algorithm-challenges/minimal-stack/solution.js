function Node(val,next) {
    this.val = val;
    this.next = next;
}

function Stack() {
    this.top = null;
}

Stack.prototype.push = function(val) {
    var newNode = new Node(val);
    if (!this.top) {
        this.top = newNode;
        return;
    }
    newNode.next = this.top;
    this.top = newNode;
};

Stack.prototype.pop = function() {
    if (!this.top) return null;
    var popped = this.top.val;
    this.top = this.top.next;
    return popped;
};

Stack.prototype.peek = function() {
    if (!this.top) return null;
    return this.top.val;
};

function MinStack() {
    Stack.call(this);
    this.minStack = new Stack();
}

MinStack.prototype = new Stack(); //inheritance
MinStack.prototype.constructor = MinStack;

MinStack.prototype.push = function(val) {
    if (!this.top) { this.minStack.push(val); }
    Stack.prototype.push.call(this, val);

    if (this.minStack.peek() > val)
        this.minStack.push(val);
};

MinStack.prototype.pop = function() {
    var popped = Stack.prototype.pop.call(this);

    if (this.minStack.peek() === popped)
        this.minStack.pop();

    return popped;
};

MinStack.prototype.min = function() {
    return this.minStack.peek();
};