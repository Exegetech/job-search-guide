function spiral(array) {
    //if the array has a length of 1, return array
    if(array.length == 1) {
        return array[0];
    }
    
    var firstRow = array[0],
        numRows = array.length,
        
        nextRow = [],
        newArr,
        rowIndex,
        colIndex = array[1].length - 1;
    
    //store elements in new arrays to push into the next row    
    for(colIndex; colIndex >= 0; colIndex--) {
        newArr = [];
        for(rowIndex = 1; rowIndex < numRows; rowIndex++) {
            newArr.push( array[rowIndex][colIndex]);
        }
        
        nextRow.push( newArr );
    }
    
    firstRow.push.apply( firstRow, spiral(nextRow));
    
    return firstRow;
}