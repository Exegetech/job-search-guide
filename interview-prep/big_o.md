# Time Complexity & Big O

Big O is a notation used to express the time complexity of an algorithm as
a function of the number of inputs (`n`). That is, in terms of `n`, how
many simple operations does the algorithm perform?

Common time complexities:

* Linear: `O(n)`
* Exponential: `O(2^n)`
* Logarithmic: `O(log(n))`
* Constant: `O(1)`

## Asymptotic analysis

When we want to know the time complexity of an algorithm, we look not at
the best case scenario but at the average and worst case scenarios as
`n` becomes sufficiently large. That is, as `n` tends towards infinity,
what is the time complexity of the algorithm?

So, when you're thinking about Big O, think about what happens with big
values for `n`. We care about average case and worst case, not best
case.

#### What we do with constant coefficients

Oftentimes, you'll have some constant coefficients in the analysis.
Because we care about the time complexity as `n` grows very, very large,
we usually will simply throw out the constant.  We care more about the
*class of complexity* than about the precision of the complexity
analysis.


## Examples

### Linear time complexity

A brute force search of an unsorted array happens in linear time. That
is, if there are 1000 elements in the array (`n = 1000`), the number of
simple operations that need to happen is a linear function of `n`.

Brute force linear search: `O(n)`

Now you may be wondering, "Wait a minute, if the array has 1000
elements, on average, it won't take 1000 operations to find whether or
not the element is in the array." You're right. Let's say if it's in the
array, and the array's elements are randomly distributed, then chances
are you find it somewhere in the middle and so only have to do `0.5 * n`
operations (`O(0.5*n)`).

Because we strip out the constants, `O(0.5*n)` simply becomes `O(n)`. 

What happens though if the element is not in the array? For an array of
1000 elements, 1000 simple operations will be done. This is called the
worst-case. Our worst-case is also `O(n)` (i.e. it grows linearly with
n).

Linear time complexity is oftentimes the naive solution to a problem
(such as searching an array). If the array is sorted, you'd want to use
binary search which happens in logarithmic time (which we'll cover
shortly).

### Polynomial & Exponential time complexity

Polynomial time would be `O(n^2)` (this special case of the exponent
being 2 is called *quadratic*) . Exponential would be `O(2^n)`.  They
are descriptions of very different time complexities.  `O(2^n)` is far
slower than `O(n^2)`. 

`O(2^n)` says that for each additional input, the number of basic
operations doubles. This class of time complexity is rare and an example
of where it presents itself is with the [traveling salesman
problem][traveling-salesman].

`O(n^2)` is fairly common, especially when the algorithm uses nested
loops (loop within a loop).  Bubble sort is an example of a sorting
algorithm that happens in `O(n^2)` time. For each element in the array
(`n`), you traverse and potentially swap all the way up the rest of the
array (another `n` operations).  Leaving aside all the constant factors,
you get `n * n` time, or `O(n^2)`.

### Logarithmic time complexity

---

#### A refresher on logarithms
As a refresher, logarithms are basically the opposite of exponentials.

Example:

```
a = 10^b

log(a) = b
```

Logarithms are usually assumed to be "base 10" when a base isn't
specified, but in time complexity analysis we usually don't consider the
base at all.

In the above example, the question the logarithm is asking is: "10 raised to the power of what number yields `a`?" The answer is `b`.

Some more examples:

```
log(10) = 1
log(100) = 2

// The general case
log( 10 ^ a ) = a
```

---

Binary search happens in logarithmic time. For an array of 1000
elements, each pass (checking the middle value and then looking in the
left half or the right half) cuts `n` in half. It is the cutting in half
that makes binary search logarithmic.

### Constant time complexity

Constant time is the fastest of all. Looking up the value of an array at
a specific index is constant time. Looking up the value at a certain key
in a hash happens in constant time. No matter how big the array or hash,
it takes a constant amount of time to do the lookups. Check out the Big
O Cheatsheet below to see what else happens in constant time (look under
the data structures heading).

## Ranking time complexities

So, you've seen what it means to have different time complexities and
should have a sense of which is better than which but just to restate
the obvious:

Constant < Logarithmic < Linear < Polynomial < Exponential

i.e. Something that happens in constant time is best of all and in
exponential time worst of all. Constant time is fastest, exponential time
slowest.

When developing an algorithm, try to find ways to have it happen in a
faster time complexity class.

## Resources

* [Complexity & Big O][wisc-big-o]
* [Stack Overflow Big O][so-big-o]
* [Big O Cheatsheet][big-o-cheatsheet]: gives you the time (and space)
  complexity of various algorithms and data structures. Important NOT to
  memorize these but to actually understand why they are what they are.

[traveling-salesman]: http://en.wikipedia.org/wiki/Travelling_salesman_problem
[big-o-cheatsheet]: http://bigocheatsheet.com/
[wisc-big-o]: http://pages.cs.wisc.edu/~vernon/cs367/notes/3.COMPLEXITY.html
[so-big-o]: http://stackoverflow.com/questions/487258/plain-english-explanation-of-big-o

