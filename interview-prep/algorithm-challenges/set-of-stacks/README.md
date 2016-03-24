#Set of Stacks


#### Problem ####
Imagine stacking plates in real life. If the stack is too high, you would start a new stack of plates.

Implement a data structure SetOfStacks that mimics this. Your data structure will be initiated with a maximum value. SetOfStacks should be composed of several stacks– a a new stack is created once the previous one is at capacity.

SetOfStacks.push(value) and SetOfStacks.pop () should behave identically to a single stack (that is, pop () should return the same values as it would if there were just a single stack). You shoud also add a SetOfStacks.peek() method (similar to a regular stack- this returns the last element added without actually removing it)

You can assume a Node class exists which takes in a value and creates a node with that value and use this class as needed.

#### Examples ####

    var mySetOfStacks = new SetOfStacks(5);
    //this create a new instance of a SetOfStacks with max capacity 5
    mySetOfStacks.push(3);
    mySetOfStacks.push(5);
    mySetOfStacks.push(7);
    mySetOfStacks.push(9);
    mySetOfStacks.push(4);
    //mySetOfStacks should currently consist of one stack with 5 elements
    mySetOfStacks.push(2);
    //since the previous stack is at max capacity, a new stack should be created
    //mySetOfStacks now has 2 stacks– one with 1 element (the 2 just added) and another with 5 elements
    mySetOfStacks.pop();
    //this should return 2. mySetOfStacks should now consist of just one stack (with 5 elements)
    mySetOfStacks.push(8);
    //mySetOfStacks should now have two stacks again (one with one element- the 8 just added- and the other with five elements)
    mySetOfStacks.pop();
    //returns 8. mySetOfStacks now consists of just one stack (with five elements)
    mySetOfStacks.pop();
    //returns 4. mySetOfStacks still consists of one stack (with four elements now)
    mySetOfStacks.push(1);
    //mySetOfStacks now has one stack with five elements
    mySetOfStacks.push(6);
    //a new stack will be created since the previous stack was full. 
    //mySetOfStacks now has two stacks (one with five elements and one with one element- the 5 just added)
