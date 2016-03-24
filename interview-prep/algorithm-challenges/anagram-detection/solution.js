var table = {};

function anagramFunction(words) {

//Map, split, sort and join all the words in the array 
    var sortedWords = words.map( function( word ){
          return word.split('').sort().join('');
    });

/* Create a table of key/value pairs. The key would be the first instance 
of each sorted word and value should be an array that consists of the word 
and its anagrams (or just the word itself if there is no anagram) */

    sortedWords.forEach( function ( sortedWord, index){
          table[sortedWord] = table[sortedWord] || [];
          table[sortedWord].push( words[index] );
    });

//All arrays in the table with a size > 1 are anagrams. Return those words in an ordered list.

    Object.keys( table ).forEach( function( sortedWord , index  ){
          var value = table[sortedWord];
          if( value.length > 1 ){
              console.log( index + 1 + ". " + value.join(', ') );
          }
    });

}