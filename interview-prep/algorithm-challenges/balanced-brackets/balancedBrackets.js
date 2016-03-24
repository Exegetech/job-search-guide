function hasBalancedBrackets(inputString) {
	var inputBrackets = inputString.match(/[[\](){}]/g); //returns an array of all the brackets in the input
	var bracketPairs = { //keeps track of the possible bracket pairings 
		'[' : ']',
		'(' : ')',
		'{' : '}'
	}; 
	var brackets = [ ];
	if (!inputString.length || !inputBrackets.length) 
	return true; //empty input or no brackets i.e. 'balanced' (throwing an error is fine also)
	inputBrackets.forEach (function (bracket) {
		var lastBracket = brackets[brackets.length - 1];
		if (bracketPairs[lastBracket] === bracket) //the current bracket and the last bracket are a pair
			brackets.pop(); //we found a pair so remove the opening bracket from the array and move on
		else 
			brackets.push(bracket);
	});
	return brackets.length === 0; //if the brackets were balanced then we should not have any brackets in the array
}