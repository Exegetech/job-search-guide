# Uncategorized Interview Questions

## High Level Rails Interview Questions

0. Describe MVC
0. Tell me what you know about Arel (I had no idea)
0. What's a singleton?
0. What's Demeter's law?
0. What is Rake?  Have you written Rake scripts before?
0. Have you done meta-programming?
0. Readability vs. Performance.  Which one would you pick? (Yea, this
   one is a bit subjective but I chose "readability" and the
   interviewer said that's what he believes too)

0. Write a function in Ruby that takes a tweet and parses and returns
   the @mentions and #hashtags.
0. Explain JavaScript vs. jQuery
0. In Ruby, how would you implement the Enumerable map function (if it
   weren't provided for you)
0. In Javascript, how would you implement the Array.map function (if
   it isn't provided for you).
0. How would you implement a Javascript function that fades out a DOM
   element, using CSS3 if available (but is still functional when CSS3
   isn't available)?

## Interview Problems

### Linked List Multiplication

Suppose you represent integers as singly linked lists.  For example,
234 is 2-->3-->4.  Write a multiplication function.

For example, multiply(head1, head2) should return the head of the
linked list which represents the product.

### Sodoku

How would you write a program to solve Sudoku?  (very high level
description of algorithm)

### Horse Racing

There are 25 horses.  You can only race 5 at a time.  What's the
minimal number of races to determine the first, second and third
fastest horses?

## JS Questions

### Implement `fadeOut`

Without using any external libraries, write a basic implementation of
jQuery .fadeOut().

    .fadeOut( [duration ] [, complete ] )

Description: Hide the matched elements by fading them to transparent.

    duration (default: 400)
    Type: Number or String
    A string or number determining how long the animation will run.

    complete
    Type: Function()
    A function to call once the animation is complete.

Next, enhance your implementation by using CSS3 if the browser supports
it.

### Use Deferred

If you're unfamiliar with jQuery.Deferred(), first read the
[docs](http://api.jquery.com/jQuery.Deferred).

Using jQuery.Deferred(), create an image preloader that takes an
optional image element and an image src url and does:

- if the image has not previously been loaded by this function, then
  load the image (without inserting it into the DOM) and cache it
- if the image element is not null, then set the image element src to
  the image url once the image has been loaded (whether previous to
  the method invocation or not).

```javascript
function loadImage(imgEl, imgSrc) {
  // (implement this)
}
```

## More Questions

0. What's the difference between an array and hash?
0. In a SQL db, you have two tables, an employee table and a
   department table.  Employees belong to only one department.  Given
   a department name, find all the employees underneath it with a SQL
   query.
0. What do http request and http responses look like?
0. If you have a site that starts getting a lot of traffic, what type
   of scaling solutions do you know of?
0. How would you find files that contain a certain string?  (basically
   do you know grep?)

## More and More

0. What's a DOCTYPE?
0. Why was CSS invented?
0. Talk about id selector vs. class selector.
0. When would you use module, when would you use class?
0. Describe MVC
0. Talk about middleware and rack

0. Browsers evolved over time.  DOCTYPE lets the browser know what
   standards to use.  Sometimes a developer may want to use older browser
   standards.
0. You want to separate the functionality and style in your html document.
0. [your answer here!]
0. He wasn't satisfied with me just saying a module is a namespace,
   while a class is used creates objects (but could also be used as a
   namespace).  The keyword he was looking for is "state."  If what
   you're doing has a sense of state, then use a class.
0. [your answer here!]
0. Apparently Rails is built on rack, which mutates requests through
   filters.  These filters are called middleware.  The example he
   gives is you know how the browser can't do a put/delete request and
   rails hacks these using get.  This hacking is done through racks.

## Endless questions

0. What's a new feature were implemented in HTML5?
0. Tell me what you know about CSS selectors.
0. Tell me all you know about AJAX.
0. What's an example of a closure?
0. Talk about prototype in Javascript.
0. You are given an array and you want to find the k-largest elements.
   Devise an algorithm and describe the order of growth.
0. What's the difference between an inner join and a left join?

## More

Model an intersection's traffic flow with traffic lights using object
oriented programming (assume cars can't turn).

Show your process for building a User association of following / being
followed by other users.  show everything from writing the migrations,
to making the models and controllers (assume ajax calls from the front
end).

Find the best way to calculate whether (return true / false) a given
ransom note could be made from the text of a given magazine.  same
question, but try to use partial or whole words where possible from
the magazine.  try to find the way to make the fewest number of 'cuts'
from the magazine.  i.e. the bigger the word chunks, the fewer the
cuts.

## More

In which direction (left-to-right or right-to-left) does your browser
parse CSS?  Which is a more efficient operation for your browser and
why:

    .foo .li {text_align: center;}
    .li .foo {text_align: center;}
  
Explain the difference between the module pattern and the constructor
pattern in prototypal inheritance (JavaScript).
  
Build the Rails migration, views, models and controllers to meet the
following requirements:
  
* Allows for both job-seekers and recruiters
* Recruiters can post jobs.
* Both job-seekers and recruiters can initiate introductions.
* Once the other party has accepted, send an email to both parties.

