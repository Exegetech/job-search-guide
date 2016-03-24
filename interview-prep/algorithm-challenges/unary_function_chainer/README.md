######Problem
Write a higher order function for chaining together a list of unary functions.  In other words, it should return a function that does a left fold on the given functions.

######Example
chained([a,b,c,d])(input) should yield the same as d(c(b(a(input))))

[Slides](http://slides.com/pat310/unary-function-chainer#/)

This problem is adapted from [codewars](http://www.codewars.com/kata/unary-function-chainer/)