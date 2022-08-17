0. Given an array, move all zeros to the end. The order of non-zero elements does not matter. Algorithm should be O(n) Ex:

  ```
  move_zeros([1,2,0,3,4,0,5,6,0]) == [1,2,6,3,4,5,0,0,0]
  ```

0. Implement the 'look and say' function. 'Look and say' takes an input array and outputs an array that describes the count of the elements in the input array as they appear in order. Ex:

  ```
  look_and_say([1]) == [1,1] # there is one '1' in the input array
  look_and_say([1,1]) == [2,1] # there are two '1's in the input array
  look_and_say([2,1]) == [1,2,1,1] # there is one '2', followed by one '1' in the input array
  look_and_say([1,2,1,1]) == [1,1,1,2,2,1] # is one '1', followed by one '2', followed by 2 '1's in the input array
  ```

0. Given an input stream of numbers, implement a function that would return a single number from the stream with an equal chance probability of being selected when compared with all other numbers in the stream. So, if the stream were 10 in size, any given number should have a 1 in 10 chance of being returned. Implement this in O(1) memory space (yes, constant memory).

0. Given an input stream of numbers, implement a function that would return the median of all numbers seen so far. Total runtime should be O(n log n). Determining the median should be a O(1) operation. Memory usage can be O(n).

0. Given two *sorted* arrays, find the median element amongst the two arrays. That is, if both arrays were combined, find the median element from the combined array. Assume that there is not enough memory to actually combine both arrays. Hint: there is an O(log n + log m) solution.

0. Given a node in a Binary Search Tree, find the node with the next largest value. Assume you don't have the root of the tree, just a single node from it.

0. Given two singly-linked lists of (potentially) differing lengths that converge at some point, find the node at which they converge.

0. Implement a stack with a 'bonus' method that returns the maximum value of the stack. The `max` method should take O(1) time.

0. Consider the following:

  ```javascript
    // First case:
    var yell = function(message) {
      setTimeout(function() {
        alert(message);
      }, 500);
    };

    m = "foo";
    yell(m);
    m = "bar";

    // Second case:
    var yell = function(message) {
      setTimeout(function() {
        alert(message.body);
      }, 500);
    };

    m = {};
    m.body = "foo";
    yell(m);
    m.body = "bar";
  ```

  What will the alert message be in each case?

0. Given a set of disjointed intervals and an additional interval, write a method that would merge the additional interval into the set. Ex:

  ```
  set = [[0, 1], [4, 6], [8, 10]]

  merge(set, [2, 3]) == [[0,1], [2, 3], [4, 6], [8, 10]]
  merge(set, [1, 4]) == [[0, 6], [8, 10]]
  merge(set, [5, 12]) == [[0, 2], [4, 12]]
  ```

0. Design Google's look-ahead search. What kind of datastructures would you use? What would be the computational time to build this datastructure? The memory space? The lookup time?

0. Implement an LRU cache.

0. Given an array, return an index with a probability weighted by the value at that index. For example, for the array `[4,6,8]`, index 0 should be returned with 4 in 18 odds, index 1 should be returned with 6 in 18 odds, and index 2 should be return with 8 in 18 odds. Implement this with an O(n) time.

0. Given a string, determine the longest substring with only two unique characters. Ex:

  ```
  longest_substring("abdfkssssjjjeiee") == "ssssjjj"
  ```

0. Given a list of numbers in an array, replace all the numbers with the product of all other numbers. Do this in O(n) time without using division.
