# Coding problems

## Easy iteration problems

* Given an array find the start and end indices of the longest
  increasing subsequence.
* Given two arrays, find the start and end indices (in both arrays) of
  the longest common subarray.
* Given an array, find the start and end indices of the subarray with the
  greatest sum.
* Given an array of coordinates, find the pair which are the closest
  (in 2 dimensional space; use the formula for distance between
  points).

All these pretty much just use two while loops. After reviewing, you
should get to the point where any of these are easy for you.

## Linked list exercises

* Implement a *stack* (push and pop) using either a dynamic array or
  linked list. Why would you chose one or the other?
* Consider a linked-list where the values are themselves nested linked
  lists. How would you write a flatten method that would return the
  concatenation of the lists.
* Given a linked list, write a method that will return true if the
  array eventually ends, and false if it contains a loop.

## Tree exercises

```
   1
 2   3
4 5 6 7
```

* Write a method that will *walk* a tree and print out the contained
  elements so that the left child is always printed before a right
  sibling, and both are printed before the parent (in our example,
  4-5-2-6-7-3-1).
    * Do this using recursion. Do this using a queue (first in, first
      out).
* Write a method that will find the most recent ancestor of two
  nodes. 4 and 5 have most recent ancestor 2. 4 and 7 have most recent
  ancestor 1.

## Arrays/Strings

* Go through an array or string and output the first non-repeated
  element.
* Go through an array and compute the number of times each item occurs
  in the array.
* Write a method that reverses a string.
    * Use only one string. Do not add or remove items from the string.
* Somewhat harder: split an array on whitespace into words. Reverse
  the array of words and rejoin with spaces.
* Write a method that will take a decimal string and convert it to a
  number (positive or negative; possibly with fractional component; no
  commas).  Write a method that will go in the opposite direction.

## Recursion

* Implement binary search.
* Implement an algorithm that will print out every permutation of a
  string (`"abc"` => `["abc", "acb", "bac", "bca", "cab", "cba"]`).
* Telephone words: given a set of words and a telephone number, print
  all 'wordified' telephone numbers.

## Randoms

* Given two rectangles (each has a top-left `(x,y)` coordinate and a
  `(width, height)`), find the intersecting rectangle, if any.
* Suppose you are in a hallway with 100 closed lockers; you begin by
  opening all 100. In the next round, you close every second
  locker. Next you open/close every third locker, depending on whether
  it is open. You continue toggling every n lockers. After locker
  #100, how many lockers are open?
    * You should be able to write a computer program to do this.
* Problem: you have two jars, 50 red marbles, 50 blue marbles. you
  need to place all the marbles into the jars such that when you
  blindly pick one marble out of one jar, you maximize the chances
  that it will be red. (when picking, you’ll first randomly pick a
  jar, and then randomly pick a marble out of that jar) you can
  arrange the marbles however you like, but each marble must be in a
  jar.

* Problem: You have 2 ropes. Each rope takes one hour to burn through. However, the ropes burn at varying rate along their lengths - so cutting a rope in half and lighting it up doesn't mean you measure 1/2 an hour. How do you determine when 45 minutes have passed?

## Hard problems

* http://www.mytechinterviews.com/how-strong-is-your-egg

## Sort problems

* What is bubble sort? Implement it.
* What is merge sort? Implement it.
* Compare how long it takes for merge sort and bubble sort to run in
  the worst case. How many comparisons may have to be made.

## Datastructure problems

These ones are too long to ask in a programming interview (beside
maybe LL), but try them out.

* Implement a linked list
    * Especially, implement remove and insert
* Implement a dynamic array (it should do resizing)
    * Especially, do 
* Implement a tree set
* Implement a hash table

## Number problems

* Given a number, find its prime factorization (`6 = 3 * 2`, `48 =
  2**3 * 3`).
* Given a number `n`, calculate `2**n` in `log_2(n)` steps.
* 

## Some other challenges
http://challenge.greplin.com/

## Resources
* https://github.com/ruby-jokes/job_interview
* http://news.ycombinator.com/item?id=5298164
