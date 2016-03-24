'use strict'
function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let j = i;
        while(arr[j-1] > arr[j] && j > 0){
            let temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
            j--;
        }
    }
    return arr;
}

var unsortedArr = [4,2,6,2,3];

console.log(insertionSort(unsortedArr));