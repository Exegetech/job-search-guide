//Quicksort implementation
'use strict'
function quickSort(arr){

    (function quickSortImplement(leftPointer, rightPointer, pivotIndex){
        for(let i = rightPointer; i > leftPointer; i--){
            if(arr[i] < arr[pivotIndex] && i > pivotIndex || arr[i] > arr[pivotIndex] && i < pivotIndex){
                let tmp = arr[pivotIndex];
                arr[pivotIndex] = arr[i];
                arr[i] = tmp;
                pivotIndex = i;
            }
        }
        
        //note, using a random pivot point to prevent worst-case behavior
        if(pivotIndex > leftPointer) quickSortImplement(0, pivotIndex, Math.floor(Math.random()*(pivotIndex - leftPointer)));
        if(pivotIndex < rightPointer) quickSortImplement(pivotIndex+1, rightPointer, Math.floor(Math.random()*(rightPointer - pivotIndex))+pivotIndex+1);
        
    })(0, arr.length - 1, Math.floor(Math.random()*arr.length));

    return arr;
}

var arr = [5,2,4,1,3,7,9,8];

quickSort(arr);