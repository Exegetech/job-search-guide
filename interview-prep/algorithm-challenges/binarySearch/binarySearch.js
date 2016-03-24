
// Recursive Solution - set start and end to 0 and array.length - 1
function binarySearch(array, value, start, end) {

	// If the value is not in the array, return -1
  	if (start > end) { return -1; }

  	var midIndex = Math.floor((start + end) / 2);
  	var midValue = array[midIndex];

  	if (midValue > value) { 
  		return binarySearch(array, value, start, midIndex-1); 
  	};

  	if (midValue < value) { 
  		return binarySearch(array, value, midIndex+1, end); 
  	};

  	// If value is equal to the middle value
  	return midIndex;
}

// Iterative Solution - set start and end to - and array.length - 1
function binarySearch(array, value, start, end){

	while (start <= end){

		var midIndex = Math.floor((start + end) / 2);
		var midValue = array[midIndex];

		if (midValue === value){
			return midIndex;
		}
		else if (midValue < value){
			start = midIndex+1;
		}
		else {
			end = midIndex-1;
		}
	}
	return -1;
};