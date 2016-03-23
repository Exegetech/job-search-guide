==============================================/Users/appacademy/Library/Containers/com.apple.TextEdit/Data/Desktop/Parker Lecture/curriculum=
===============================================
general interview prep=========================
===============================================
===============================================

who am i?
==========

Parker Phinney
i@madebyparker.com

Software Engineer
    currently at Symphony Commerce
        interviewed tons of candidates, including phone and onsite
        one each day at our peak
        also interviewed for product and analyst roles
    interned at Google
    been on both sides of interview process recently

starting my own business around technical intervew prep
    so this is helpful for me as well







who are you guys?
====================

what kinds of companies do you want to work at? big, or small?
have you done interviews before?
did you feel prepared?
what do you think are your weak points?





steps of an interview
=====================

smalltalk
    trying to get comfy

"tell me a little about your projects"
    interviewer is looking for:
        making you comfortable
        example of ownership
        example of an interesting problem you solved
        whether or not they actually know the language they claim is their most comfortable
    tips:
        smile. be excited about your past projects. nerd out about it
        know some trivia about your favorite language. and javascript (e.g. closures)

technical questions
    interviewer is looking for:
        can they think algorithmically? can think about efficiency?
        are they a good communicator? someone i want to think through a new feature with?
        can they code? neatness and correctness. (less hip?)
        this is the attempt to be objective
    tips:
        i'm looking for the thinking, not the answer
        keep in mind that it's not about speed
        think out loud. if you only kind of know it, just say what you know.
        use the board, stand close to the interviewer
        smile. get excited about the problem.
            ask if you don't understand
        don't worry about syntax. breeze through it.
        writing code on paper or a board is awkward.
            but not after you've done it 5 times.
        use descriptive variable names
            is_ for a boolean
            _s for a set
            don't use one letter unless it's "i" for index
        write helper functions and save their implementation for later.
        solve the problem. (tips on this below)

"any questions for me?"
    interviewer is looking for:
        just being nice
        trying to sell, if they liked you
    tips:
        have a couple questions about the company
            how do you guys stay resilient to google building your app?
            how do you monetize?
            what's an interesting problem you worked on recently?
        then questions about the work
            software engineering strategy (agile, scrum, etc)
            do people ever pair program?
            how's your test coverage? do you test drive?
            these show that you're amped about engineering
            "what's your favorite thing about working at X"







problem solving tricks:
====================

the beginning:
-------------
ask some questions
    ask what we're optimizing for
    ask if there are any constraints on the set
    be judicious with this one

if you're drawing a blank:
    do a couple samples by hand
    brute force first, efficiency later
    simplify problem and solve, then add complexity
        find 2nd highest number in an array


the middle/optimzing:
-----------
keep a list of intuitions, like this. share with each-other
eventually this is just a pattern matching exercise

bucketizing
    if your set is bounded, try putting it in a hash map

divide and conquer
    divide into smaller but equal subproblems
    ex:
        binary search
        traversing a binary tree to find the largest element

use a mathematical property
    ex:
        find the number that isn't in the product

amortized analysis
    ex:
        implementation of a queue with 2 stacks

use a stack or a queue
    ex:
        tree or graph traversal

keep two pointers

sort the list first

reverse the order / start from the end

think aloud about the likely bounds on efficiency of this problem, and how your solution stacks up
    "i have to at least look at all of the points, etc"
    "i know i can sort in nlgn and the problem is trivial when the set is sorted--so let's see if i can do better than nlgn"



the end:
-----------
think about the edge cases and make sure your algorithm handles those 
run your algorithm out loud for one or two sample inputs







practice questions
==================


    given an ordered list of integers, write a function to see if a given number is in that list










    given an unordered list of people's names with some repeats, find the most common name










    write an extended stack class that keeps track of the largest element in the stack at any given point







    anagrams






closing remarks
===============

smile. be interested.
check your work as you go. you'll miss some cases at first--that's fine.
write helper functions and save their implementation for later.
practice. write out your favorite search algorithms, BFS, DFS, etc.
save your favorite companies for last.












===============================================
===============================================
big-o notation=================================
===============================================
===============================================

concepts to cover:


n^2
n + (n-1) + (n-2) + (n-3) + (n-4) + ... + 3 + 2 + 1 = n^2/2 = o(n^2)

lg(n)


questions===========

walk through my usual interview:

sorting a list of integers
    insertion sort
    merge sort or quicksort
    intuitions about how well you could possibly do

bounded set of integers

suppose we have a list of URLs, and we're building a search engine
    it's keeping the urls in a linked list, and this is slow
        ok, so make it a hash map
    now we've run out of memory to store this hash map
        (caching)
        (lossless compression)
        trie

suppose we are building this feature for recommending products to facebook friends
    keep track of who has been selected (hash map)
    keep track of all the friends
    look up a friend quickly by name prefix (trie)
    



suppose we have a string of all distinct characters
    print all anagrams of that string

def print_all_anagrams_recursive(str, prefix=""):
    if len(str) == 0:
        print prefix
    for i in len(str):
        print_all_anagrams(str[:i] + str[i+1:], prefix + str[i])

memory: o(n^2) (notice that there is a string for each prefix on the stack whenever you are returning)
runtime: o(n!)











another n^2 example: insertion sort.

''''''
def print_all_anagrams_dynamic(str):
    anagrams = []
    for char in str: (n times)
        for anagram in anagrams: (0, 1, 2, 6)
            for i in len(anagram):
                insert_at(char, anagram, i)

def print_all_anagrams_streaming(str):
iterations = n!
for iteration in iterations:
    print_anagram(iteration, str)
def print_anagram(iteration, str):
''''''

notice that this is divide and conquer



review, if we were to do it linearly:::::::::::;

==================
arrays===================
==================
insert: constant
get: constant

==================
lists==================
==================
insert: constant if you do the right bookkeeping. but linear if you have to find it
delete: constant if you do the right bookkeeping. but linear if you have to find it
find: constant

==================
hash tables==================
==================
insert: constant in average case
delete: constant in average case

talk about growing it

==================
strings==================
==================
insert:
delete:

reverse?
    linear

see if it's a palindrome?
    linear

get all possible anagrams?
    n^2

==================
trees==================
==================

walk from root to leaf:
o(n) for an tree
o(lgn) for a bushy tree

==================
sorting==================
==================

==================
graphs==================
==================
