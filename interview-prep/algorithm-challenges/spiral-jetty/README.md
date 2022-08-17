# Spiral Jetty

***

[Slides Link](http://slides.com/nickellsworth/spiral-jetty)

## The Problme
Write a function that returns a sequence of coordinates representing the spiral below.

![ScreenShot](https://github.com/FullstackAcademy/reacto/blob/master/spiral-jetty/spiral.png)

The function should take one parameter *n*, which controls how far out the spiral travels. 

## Approach

It is useful to group together positive movements in the *x* and *y* direction and negative movements in the *x* and *y* direction.

**Step 0**
Form the resulting array with the origin added to it: [[0,0]].

**Step 1**
Increment x once. Push it into the result array: [[0,0],[1,0]].
Increment y once. Push it into the result array: [[0,0],[1,0],[1,1]].  

**Step 2**
Decrement x twice, pushing each array into the result array. This will give: [[0,0],[1,0],[1,1], [0,1],[-1,1]]. Next,
decrement y twice, pushing each array into the result array. This will give: [[0,0],[1,0],[1,1], [0,1],[-1,1], [-1,0],[-1,-1]].

To determine whether you are incrementing or decrementing, you need to keep track of the direction of movement. This will correspond to what step you are on.

Good luck!
