function selectionSort(array) {

	// For each element in the array...
	for (var i = 0; i < array.length; i++) {
		var minVal = array[i];
		var minIdx = i;

		// look through every element beginning there...
		for (var j = i + 1; j < array.length; j++) {

			// and keep track of the lowest one.
			if (array[j] < array[minIdx]) {
				minVal = array[j];
				minIdx = j;
			}
		}

		// Swap the lowest value with the current element
		array[minIdx] = array[i];
		array[i] = minVal;
	}
	return array;
}