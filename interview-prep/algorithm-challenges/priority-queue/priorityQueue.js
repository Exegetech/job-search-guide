function Node(data, priority) {
	this.data = data;
	this.priority = priority;
	this.next;
}

function PriorityQueue() {
	this.first;
}

PriorityQueue.prototype.insert = function(data, priority) {
	if (!this.first || this.first.priority < priority) {
		// First case handles both empty PQ and higher priority than anything else
		var prevFirst = this.first;
		this.first = new Node(data, priority);
		this.first.next = prevFirst;
	} else {
		// Second case finds the place to insert the new item and inserts it
		var pointer = this.first;
		while (pointer.next && pointer.next.priority >= priority) {
			pointer = pointer.next;
		}
		var newItem = new Node(data, priority);
		newItem.next = pointer.next;
		pointer.next = newItem;
	}
}

PriorityQueue.prototype.peek = function() {
	return this.first.data;
}

PriorityQueue.prototype.popMax = function() {
	var retVal = this.first.data;
	this.first = this.first.next;
	return retVal;
}