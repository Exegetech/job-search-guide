//recursive solution (only works for small grids)
function paths2Bottom(x, y, max){
	if (x == max || y == max){
		return 1;
	}
	return paths2Bottom(x+1, y, max) + paths2Bottom(x, y+1, max);
}

//BONUS POINTS: memoized, recursive solution (able to handle larger grids)
var paths = {};
function memoizer(x, y, max){
	if(paths[[x,y,max]]){
		return paths[[x,y,max]];
	}
	else{
		return paths[[x,y,max]] = paths2Bottom(x, y, max);
	}
}
function paths2Bottom(x, y, max){
	if (x == max || y == max){
		return 1;
	}
	return memoizer(x+1, y, max) + memoizer(x, y+1, max);
}
