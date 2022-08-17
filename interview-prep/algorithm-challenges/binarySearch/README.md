#Binary Search

### Write a function that implements binary search. ###

#### Problem ####
Given a sorted array of numbers, locate the index of a specified value according to the following algorithm. First identify the middle number in the array. Next determine if the value to be found is greater than, lower than, or equal to the middle number. If it is equal, you are finished, and output the index of the found value. If not, repeat the procedure for a smaller array, formed from by taking half of the given array that the specified number falls into. 

#### Example ####
Consider the array [1,3,4,7,12,17,20]. We want to locate the index of 17. First compare 17 to the middle of the array, which is 7. Because 17 > 7 we then repeat the comparison using the subarray [12,17,20]. We find that 17 matches the middle of this array, and so we output the index from the original array, which is 5. Note that we do not output the index of 17 from the smaller subarray.

http://slides.com/ivanloughman-pawelko/reacto
