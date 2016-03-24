
function curry( originalFunc ) {
    this.__ = {};
    var __ = this.__;
    
	var originalLength = originalFunc.length;
	
	var isFilled = function(list) {
	    return list.every(function(item) {
	        return item !== __;
	    });
	};
	
	var getMemory = function(a) {
	    return Array.apply(
        null, 
        new Array(originalLength)).map(function(_, i) {
		    return a.shift() || __;   
		});
	};
	
	var applyToMemory = function(m, a) {
	    m.forEach(function(item, index) {
	        if (item === __) {
	            m[index] = a.shift();
	        }
	    })
	};

	function resolver() {
	    var args = Array.prototype.slice.call(arguments);
		var memory = getMemory(args);
		
		var returningFunction = function() {
			var next,
			    args = Array.prototype.slice.call( arguments );
			
			applyToMemory(memory, args);

		
		    if (isFilled(memory)) {
		        next = originalFunc;    
		    } else {
		        next = resolver;   
		    }

			return next.apply(null, memory); 
		};

	
		return returningFunction;
	}

	return resolver(); 
}


function addNums(a, b, c, d) {
    console.log(a, b, c, d);
    return a + b - c * d;
}

var __ = curry.__;
var curried = curry(addNums);
var lastOne = curried(__, __, __, 1);
lastOne(1,2,3);