//differences: this one returns a string,
//and outputs '1,2,3' instead of '1,2,4'

var anagramFunction = function(wordsArr){
    var wordsTable = {};
    
    wordsArr.forEach(function(word){
        var wordKey = word.split('').sort().join('')
        if (wordsTable[wordKey]){
            wordsTable[wordKey].push(word)
        }
        else wordsTable[wordKey] = [word]
    });
    
    var counter = 1;
    var returnStr = '';
    
    for (var key in wordsTable){
        if (wordsTable[key].length > 1){
            returnStr += counter++ + '. ' + wordsTable[key] + '\n';
        }
    }
    
    return returnStr;

}