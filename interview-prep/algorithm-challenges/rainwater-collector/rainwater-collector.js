// WATER COLLECTION REACTO SOLUTION
 
/* 
Before we begin to sum the total water volume of the collector, it is 
important to use our understanding of water itself. Water will only gather
up to the height of its resevoir walls.  Therefore we should think about this 
problem in terms of height.  Initially one might attempt to loop through
the array and try to sum the volumes of the vertical columns of water.  This
approach quickly breaks down whenever the complexity of calculating the size 
of each resevior is encountered.

Instead of summing the volume vertically we will think about how much
volume exists in a horizontal plane at each incremental height.  The solution
below goes about this by starting at the heighest 'peak' and and summing the 
total amount of volume at that level then decrementing the height by one
and repeating the process until a height of 0 is reached.  See individual 
comments to better understand the solution.
*/
 
 
/* the 'totalVol' function will find the 'peak'
of the collection array then sum the volume
at each subsequent level util the 'ground'
is reached. */
   
function totalVol(arr) {
    
    // 'peak' is set to the return of Math.max() 
    //  when it is applied to the array with
    // 'null' as the 'this'.
    var peak = Math.max.apply(null,arr);
    
    // instantiate volume to 0
    var vol = 0
    
    // this loop starts at the 'peak' height
    // then decrements the height
    for (var height = peak; height > 0; height--) {
        
        // 'peaksAtHeightLevel' is set to the return of 
        // 'peakIndicesMaker' which is an array of indicies
        //  of resevoir walls that exist at that level.
        var peaksAtHeightLevel = peakIndicesMaker(arr,height);
        
        // 'vol' is then incremended by the volume that exists
        // at that level.
        vol += volAtLevel(peaksAtHeightLevel);
    }
    
    // total volume is returned
    return vol;
}
 
 
/* As demonstated above this function takes
the original array as well as the height level
and returns an array of indicies where resevoir
walls exist*/
function peakIndicesMaker(arr,level) {
    
    // instansiation
    var peakIndices = [];
    
    // loop over the entire array
    for (var i = 0; i < arr.length; i++) {
        
        // if the wall height present at each index
        // is at least the height of the given level
        // then that index is pushed to the output array
        if(arr[i] >= level) {
            peakIndices.push(i);
        }
    }
    
    // array of indices is returned
    return peakIndices;
}
 
/* This is the meat of the calculation for this problem.
The key point to understand is that the distance between
the two walls at the same height will also be the 
volume of water held between them.  Finally if two walls of 
at least the same height are adjacent to one another then it
is not possible for water to be present.*/
function volAtLevel(peakIndices) {
	
    // instansiation
    var levelVol = 0
    
    // if there is only one wall at the height currently being
    // calculated, there cannot physically be any water 
    // at that level.  In this case we return 0 volume.
    if(peakIndices.length === 1) {
        return 0;
    } else {
        
        // If there is more than one wall of at least the current 
        // level being measured then the level volume is incremented
        // for each 'pair' of walls at that level.  It is important 
        // to note that we are comparing each wall to its adjecent
        // neighbor located at the next index in the array.  Therefore
        // the last element in the array could not possibly hold water
        // to its right.  This is because no wall exists at that level
        // beyond the last wall.
        for (var i = 0; i < (peakIndices.length-1); i++) {
            
            // this is the most imporant part of the function.
            // Instead of simply summing the difference of the 
            // indices we have to think about the physical nature
            // of the walls. The walls have a width of 1 so we
            // need to measure the right side of one wall to the
            // left side of its neighbor.  This ensures that a total
            // volume of 0 is added for adjacent walls.
            levelVol += (peakIndices[i+1] - (peakIndices[i]+1));
            
        };
    }
    
    // the level volume is then returned after all pairs have been summed.
    return levelVol
}
 
 
/* Here are some samples to test to be sure the function works.
It is helpful to draw them out then walk step-by-step through 
the solution to help visualize it.*/
 
 
// vol = 7
var a = [0,0,1,2,4,3,2,5,0,0,2,1]
console.log('collection device "a" can hold', totalVol(a))
 
// vol = 6
var b = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log('collection device "b" can hold', totalVol(b))
 
// vol = 12
var c =[0,3,0,1,0,0,0,1,0,2]
console.log('collection device "c" can hold', totalVol(c))
 
// vol = 8
var d = [0,1,0,3,5,0,0,0,2,0,1]
console.log('collection device "d" can hold', totalVol(d))
 
// vol = 38
var e = [0,5,3,2,8,8,1,1,2,4,3,3,7,1,2,4,3,2]
console.log('collection device "e" can hold', totalVol(e))