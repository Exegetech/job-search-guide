'use strict';

function detectLoop (startNode) {
    // An empty list has no cycles
    if (startNode === null) return false;

    let slowNode = startNode,
        fastNode = startNode.next;

    while(fastNode !== null) {
        slowNode = slowNode.next;

        if (fastNode.next === null) return false;

        fastNode = fastNode.next.next;

        if (slowNode.value === fastNode.value) {
            let P = findPerimeterLength(slowNode, fastNode);
            let startOfCycle = findStartOfCycle(startNode, P);
            return {
                "P": P,
                "startOfCycle": startOfCycle
            }
        }
    }
    return false;
}

function findPerimeterLength(slowNode, fastNode) {
    let count = 1;
    slowNode = slowNode.next;
    while (slowNode.value !== fastNode.value) {
        slowNode = slowNode.next;
        count++;
    }
    return count;
}

function findStartOfCycle(startNode, P) {
    let fastNode = startNode,
        slowNode = startNode;

    for (var i = 0; i < P; i++) {
        fastNode = fastNode.next;
    }

    while (fastNode.value !== slowNode.value) {
        fastNode = fastNode.next;
        slowNode = slowNode.next;
        if (fastNode.value === slowNode.value) return fastNode;
    }
}


// Helper Functions to build test cases

function LinkedList () {
    this.head = null;
}

function Node (value) {
    this.value = value;
    this.next = null;
}

function buildLL (numNodes, startOfCycle) {
    if (startOfCycle >= numNodes) {
        throw new Error('startOfCycle must be smaller than numNodes');
    }
    var LL = new LinkedList();
    var startNode =  new Node(0);
    var listOfNodes = [startNode];
    LL.head = startNode;

    for (let i = 1; i < numNodes; i++) {
        let newNode = new Node(i);
        listOfNodes[i-1].next = newNode;
        listOfNodes.push(newNode);
    }
    listOfNodes[numNodes - 1].next = listOfNodes[startOfCycle];
    return startNode;
}

let testLL = buildLL(10,4);
detectLoop(testLL);