SOLUTION AND OPTIMIZATION STRATEGIES:
--------------------
keep a list of strategies, like this. share with each-other
eventually interviewing is just a pattern matching exercise

Think aloud about the likely bounds on efficiency of this problem, and how your solution stacks up
    "i have to at least look at all of the points, etc"
    "i know i can sort in nlgn and the problem is trivial when the set is sorted--so let's see if i can do better than nlgn"


FOR SAVING TIME:
^^^^^^^^^^^^^^^

Bucketizing
    if your set is bounded, try putting it in a hash map
    ex:
        sort a set of 100,000 integers that are all in the range 1-100

Divide and conquer
    divide into smaller but equal subproblems
    ex:
        binary search
        traversing a binary tree to find the largest element

Dynamic programming
    divide into smaller but equal subproblems THAT OVERLAP
    ex:
        best time to buy and sell stocks
        anagrams--take all the anagrams for the string without the last character, then put the last character in every possible position in each of those choices
        find two disjoint contiguous subsets of an array of integers that give the largest difference in sum
            http://www.careercup.com/question?id=19286747

Use a mathematical property
    ex:
        find the number that isn't in the product
        find the one number in the set that is repeated (every number in the range 1-n appears once, except for one with appears twice)
            interesting bit: what if you had TWO numbers that repeat
        random number generator for 1-5 given one for 1-7

Amortized analysis
    ex:
        implementation of a queue with 2 stacks

Use a stack or a queue
    ex:
        tree or graph traversal
        augment a stack to keep track of largest item in the stack

Keep two pointers
    ex:
        reverse a string

Do something twice
    ex:
        reverse the WORD ORDER of a string ("i am cool" -> "cool i am") (solution, i think: reverse the whole string, keeping track of spaces, then reverse the words)
        KIND OF: figure out of a string is a rotation of another "needle" string, given a has_substring function
            answer: put append the input string to itself. then the needle will be a substring of the result.

Break the problem down into a simpler, equivalent problem
    ex:
        100 dooors problem is ONLY this - http://www.techinterview.org/post/526370758/100-doors-in-a-row

Reverse the order / start from the end / work up from the base case
    ex:
        greedy pirates dividing loot problem: http://www.techinterview.org/post/526325766/pirates

Use binary
    ex"
        random number generator for 1-7 given one for 1-5
        bad king with poisoned wine: http://www.techinterview.org/post/526313890/bad-king



FOR SAVING SPACE:
^^^^^^^^^^^^^^^^^

Use a bit vector

Use a trie
    look out for this if items in your set might share prefixes (of ANY length)
    ex:
        storing lots of phone numbers, lots of names, lots of URLs

Try to be iterative instead of recursive
    recall that the call stack can get tall in recursive solutions

Lean on a mathematical property
    ex:
        store sums instead of individual things, for example
