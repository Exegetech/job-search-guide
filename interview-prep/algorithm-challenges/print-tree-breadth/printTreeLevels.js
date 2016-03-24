/*
CONCEPTS TESTED: data structures (trees), recursion

There are multiple ways to solve this problem.

One method for breadth-first tree traversal is to create a queue of nodes
and a while loop which executes as long as the queue is not empty; you can
then take a node off the queue, print its value, and add its children to
the queue. However, to print each new level on a newline will require adding
more variables to keep track of the number of nodes per level.

Another method, shown here, is to recurse depth-first for the tree and add each
node value to a hash table. The hash table organizes value by level, so when
you are finished traversing the tree, you can easily iterate over the hash
and print the values.
*/

// One possible solution

function printTreeLevels (startingNode) {

  // This will be a multi-dim array of "level" arrays, each containing values
  var levels = [];

  // recursive IIFE to collect each value and add it to the right level array
  (function collectVals (node, level) {
    // if there is no level this deep yet, make it
    levels[ level ] = levels[ level ] || [];
    levels[ level ].push( node.value );
    // recursively handle each child node, one level deeper
    node.children.forEach(function (childNode) {
      collectVals( childNode, level+1 );
    });
  })( startingNode, 0 );

  // Print the results
  levels.forEach(function (level) {
    console.log( level.join(' ') );
  });

}

/* A sample tree to test, should print the following:
A
B C
D E F G
H I J
*/

var myTree = {
  value: 'A',
  children: [{
    value: 'B',
    children: [{
      value: 'D',
      children: [{
        value: 'H',
        children: []
      }]
    }]
  }, {
    value: 'C',
    children: [{
      value: 'E',
      children: []
    }, {
      value: 'F',
      children: [{
        value: 'I',
        children: []
      }, {
        value: 'J',
        children: []
      }]
    }, {
      value: 'G',
      children: []
    }]
  }]
};

