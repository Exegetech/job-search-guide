describe('binarySearchTree', function() {
  var tree;

  beforeEach(function() {
    tree = new BinarySearchTree(20);
  });

  it('inverse method inverses a tree', function() {
    tree.insert(15);
    tree.insert(25);
    tree.insert(5);
    tree.insert(17);
    tree.insert(21);
    tree.insert(28);
    tree.insert(0);
    tree.insert(14);
    tree.insert(50);
    tree.insert(1);
    tree.insert(45);
    tree.insert(13);
    tree.insert(12);
    tree.insert(11);
    tree.insert(30);
    tree.insert(35);
    tree.insert(33);
    tree.insert(31);
    tree.insert(34);
    tree.inverse();
    var depth = [];
    tree.breadthFirstForEach(function(val){depth.push(val);});
    expect(depth).toEqual([20,25,15,28,21,17,5,50,14,0,45,13,1,30,12,35,11,33,34,31]);
  });
});