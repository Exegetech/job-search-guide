Slides: http://slides.com/lindakung417/reacto

### Problem 
1. You are given a multi-dimensional array of integers.
2. From the top left, spiral traverse each element in a clockwise order and return the integers in a single array.

#### Example 

```
var array = 
[[1,2,3,4], 
[5,6,7,8], 
[9,10,11,12], 
[13,14,15,16]];

console.log(spiral(array));
//output should be [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];

```

#### Implementation

```
1. Return the first array: [1,2,3,4]
2. Spiral traverse the rest of the elements by working backwords with the rows that are left.  Perhaps create new arrays to store those elements:
[8, 12, 16], 
[7, 11, 15], 
[6, 10, 14], 
[5, 9, 13]
3. Push the new array [8, 12, 16] into the first array
4. Repeat from 2



```
