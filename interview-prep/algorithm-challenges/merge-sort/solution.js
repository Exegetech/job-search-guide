
// merge is a function that takes 2 arrays and returns a single sorted array
// this function will be used by our final mergeSort function
/* IMPORTANT: it is assumed that the arrays you pass it are sorted */
function merge(left, right) {
    // instantiate output array
    var outputArray = [];
    
    /* this loop will compare the heads of each sorted array and push
       the smaller value into the output array for as long as both 
       the left and right arrays have numbers in them */
    while(left.length && right.length) {
        if (left[0] < right[0]) {
            outputArray.push(left.shift());
        } else {
            outputArray.push(right.shift());
        }
    }

    /* once the above loop is exited due to one of the arrays being empty,
       the remaining array has its values pushed into the output array.
       again, this only works because both arrays are already sorted */
    
    while(left.length) {
        outputArray.push(left.shift());
    }
    
    while(right.length) {
        outputArray.push(right.shift());
    }
    
    // return merged array
    return outputArray
}

/* mergeSort is a function that takes a single unsorted array and returns 
   a single sorted array */

function mergeSort(array) {
    /* because this is a recursive function there needs to be a base case 
       that will prevent the function from calling itself again.  in order
       for this to make sense lets look at what the middle three variables
       of this function are doing.  first we find the middle of the given
       by halving its length.  we have to floor this number so it can be
       used as and index in the slice method.  we then 'split' the array in
       half by using slice.  it doesn't matter if the two arrays are not 
       of equal length because the recusive nature of the function will 
       continue to slice the arrays down until all the numbers in the 
       original array are contained in there own arrays.  this brings us
       back to this first if block.  when the length of the array is finally
       1, that array is returned instead of the return on line 66.  the 
       recursive line of this function calls merge on the return of mergeSort
       for the left and right arrays.  remember how we stated above that 
       the arrays needed to be sorted?  this happens because the merge 
       function only returns for the first time when the arrays past to it
       have a length of 1. the stack then collapses and what we get is a
       final sorted array. */
    if (array.length < 2) {
        return array
    }
    
    var middle = Math.floor(array.length / 2);
    var left = array.slice(0, middle);
    var right = array.slice(middle);
    
    return merge(mergeSort(left),mergeSort(right));
}

