function curry( originalFunc ) {
	var originalLength = originalFunc.length;

	function resolver() {
		var memory = Array.prototype.slice.call( arguments );
		
		var whatToReturn = function() {
			var next,
				args = Array.prototype.slice.call( arguments ),
				copy = memory.concat(args);

			if (copy.length >= originalLength) {
				next = originalFunc;
			} else {
				next = resolver;
			}

			return next.apply(null, copy);
		};

	
		return whatToReturn;
	}

	return resolver();
}