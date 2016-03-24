'use strict';

var spiral = function(maxLength){
    var xPos=0;
    var yPos=0;
    var resultArray = [[0,0]];
    
    //each large iteration creates an 'L' of the spiral
    for (let thisLength = 1; thisLength < maxLength; thisLength++){
        
        //control ++ or -- vertically and horizontally
        var goPositive = thisLength % 2; 

        //iterate horizontally left or right
        for (let xIterator = 0; xIterator < thisLength; xIterator++){
            goPositive ? xPos++ : xPos--;
            //push new coordinates
            resultArray.push([xPos,yPos])
        }

        //iterate vertically up or down
        for (let yIterator = 0; yIterator < thisLength; yIterator++){
            goPositive ? yPos++ : yPos--;
            //push new coordinates
            resultArray.push([xPos,yPos])
        }
    }
   return resultArray;
}
