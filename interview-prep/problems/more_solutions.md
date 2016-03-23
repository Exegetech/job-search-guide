
0. Implement the 'look and say' function. 'Look and say' takes an input array and outputs an array that describes the count of the elements in the input array as they appear in order. Ex:

  ```
  look_and_say([1]) == [1,1] # there is one '1' in the input array
  look_and_say([1,1]) == [2,1] # there are two '1's in the input array
  look_and_say([2,1]) == [1,2,1,1] # there is one '2', followed by one '1' in the input array
  look_and_say([1,2,1,1]) == [1,1,1,2,2,1] # is one '1', followed by one '2', followed by 2 '1's in the input array
  ```

  **Solution:**

  ```ruby
    def look_and_say(array)
      # maintain a current count
      # maintain a current element
      # push both onto new array when a different element is detected

      cur_el = array[0]
      cur_count = 0

      output = []

      array.each do |el|
        if el == cur_el
          cur_count += 1
        else
          output << cur_count
          output << cur_el

          cur_el = el
          cur_count = 1
        end
      end

      # push the last set

      output << cur_count
      output << cur_el

      output
    end
  ```

0. Given an input stream of numbers, implement a function that would return the median of all numbers seen so far. Total runtime should be O(n log n). Determining the median should be a O(1) operation. Memory usage can be O(n).

  **Solution:**

  ```
  # The solution is to maintain two heaps, a min heap and a max heap.
  # The min heap represents all numbers larger than the current median.
  # The max heap represents all numbers smaler than the current median.

  # When a new number comes in, add it to either the min heap or the max
  # heap appropriately. When the heaps differ is size, pop from one and
  # push onto the other.

  # Pushes and pops are on the order of O(log n). For n elements, the
  # total computational time is on the order O(n log n).
  ```


0. Implement a stack with a 'bonus' method that returns the maximum value of the stack. The `max` method should take O(1) time.

  **Solution:**

  ```ruby
    # Each node in the stack maintains a reference to the largest
    # node in the stack at the time it was pushed in. To determine
    # the largest node, we only need to look at the head of the
    # stack.

    class Node
      attr_reader :value
      attr_accessor :max, next

      def initialize(value)
        @value = value
        @next, @max = nil
      end
    end

    class MaxStack
      def initialize
        @head = nil
      end

      def push(value)
        n = Node.new(value)

        if @head && n.max < @head.max
          n.max = @head.max
        else
          n.max = n
        end

        n.next = @head
        @head = n
      end

      def pop
        n = @head
        @head = @head.next

        n.value
      end

      def max
        @head.max.value
      end
    end
  ```

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

  **Solution:**

  ```
  "foo" in the first case.
  "bar" in the second.
  ```

0. Given a set of disjointed intervals and an additional interval, write a method that would merge the additional interval into the set. Ex:

  ```
  set = [[0, 1], [4, 6], [8, 10]]

  merge(set, [2, 3]) == [[0,1], [2, 3], [4, 6], [8, 10]]
  merge(set, [1, 4]) == [[0, 6], [8, 10]]
  merge(set, [5, 12]) == [[0, 2], [4, 12]]
  ```

  **Solution:**

  ```
  # Implement using an interval tree
  ```

0. Design Google's look-ahead search. What kind of datastructures would you use? What would be the computational time to build this datastructure? The memory space? The lookup time?

  **Solution:**

  ```
  # Use tries for the look ahead part, and a min heap value for each key in the trie to determine the top rankings.
  ```

0. Implement an LRU cache.

0. Given a string, determine the longest substring with only two unique characters. Ex:

  ```
  longest_substring("abdfkssssjjjeiee") == "ssssjjj"
  ```

