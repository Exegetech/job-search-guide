######Problem 1
First we will implement a function that recursively finds the nth Fibonacci number.  For example, fibonacci(4) returns 3

(The Fibonacci sequence is 0,1,1,2,3,5,8,13,...)

######Problem 2
If we were to run the above in REPL, we'll see for larger numbers it is very slow.  In fact, even numbers as small as 45 can cause REPL to timeout.  Let's use memoization to cache the results of our Fibonacci sequence to improve the performance.

[slides](http://slides.com/pat310/memoization#/)