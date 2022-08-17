function removeZeros(array) {
  var temp; // Will hold a temporary value when you move array elements
  var iterations = array.length; // the 'end' of the array, where zeros start
  for (var i = 0; i < iterations; i++) {
    if (array[i] === 0 || array[i] === '0') {
      for (var j = i; j < array.length - 1; j++) {
        temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
      i--; // since you shift the entire array backwards
      iterations--; // marks the spot where the zeros start
    }
  } 
  return array;
}