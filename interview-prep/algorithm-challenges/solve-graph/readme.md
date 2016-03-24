# Solve Graph

***

[Slides link](https://slides.com/colinmeret/reacto-1)

## The Problem
Write a function that can find out if a 'graph' has a solution from a given start point to an end point

1. Given an array like [{start: 'a', end: 'b'}, {start: 'b', end: 'c'}] and start point 'a', and end point 'c'.
2. Loop through the objects in the array to determine if you can arrive at 'c' from point 'a'.
3. The array may not be sorted, and may be of arbitrary length.
4. Return true if the 'graph' is solvable, false if not.

## Approach

### Inputs: 

    start='a', end='f',
    array = [
    {start:'b', end:'a'},
    {start:'f', end:'g'},
    {start:'a', end:'c'},
    {start:'c', end:'f'},
    {start:'d', end:'b'}
    ]

1. Assign a variable to keep track of current point. Initial value is the given start point 'a'.
2. Loop through the array until array[n].start === 'a', in this case array[2].start === a.
3. Assign array[2].end to current_point. 
4. Loop through the array again to find the next connection point (in this case 'c' to 'b').

## Addendum:

The graph can loop in on itself, ex: a -> b -> a. So you need to keep track of points you have visited and not reset current_point to arcs[n].end if arcs[n].end is a previously visited point.

There is an edge case not covered by the iterative solution, where in the case of an arcs array [{a,b},{b,c},{b,d}], and inputs start=a, end=d, the function will return false because it sets current_point to b in arcs[0], then b to c in arcs[1] and then there is no point c->d so it returns false, even though b->d is one of the points. It does this because b->c is before b->d. Basically, if someone brings up this edge case, tell them they do Not have to account for it, but if they do, great!

