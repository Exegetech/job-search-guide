// Iterative solution (is missing one edge case)
function solve_graph(start, end, arcs) {

  var current_point = start; // Assign current_point initial value to start value

  var prev_points = []; // Initialize an array to keep track of 
                        // previously visited points (in case 
                        // the an arc loops back to a previously visited point)

  if(start === end) return true; // Check that start and end arent the 
                                 // same, if they are you are already finished

  for(var n = 0, len = arcs.length; n < len; n++) {
    
    // This checks if both the current point is the start of the current arc, and that
    // the current arc's end point has not been visited before
    if(arcs[n].start === current_point && prev_points.indexOf(arcs[n].end) === -1) {

      // if the above condition is true, add the current point to the list of past points
      prev_points.push(current_point);

      current_point = arcs[n].end; // assign the current point to be the current arc's end
      
      n = 0; // start looping from the beginning of the array
    }
    
    // if your current point is equal to your end point, you have reached your destination --> return true
    if(current_point === end) return true;
  }

  // if you ever get to the end of the array, that means the chain was broken
  // and the graph is unsolvable --> return false
  return false;
}

// Recursive solution
function solve_graph(start, end, arcs, seen) {

  var res = false;

  seen = seen || [];

  if (start === end) {return true} // Base case

  arcs.forEach(function(arc){
    // Similar condition to iterative
    if (arc.start === start && seen.indexOf(arc) < 0) {
      seen.push(arc); // add to seen (previously visited point)

      // recursive call with start point as current arc's end point
      if (solve_graph(arc.end,end,arcs,seen)) {
        return res = true
      }
    }
  });

  return res;
}


var graph = [
    {start: 'a', end: 'b'},
    {start: 'b', end: 'd'},
    {start: 'c', end: 'f'},
    {start: 'a', end: 'a'},
    {start: 'd', end: 'c'},
    {start: 'f', end: 'g'},
    {start: 'f', end: 'h'}
    ];

var graph2 = [
    {start: 'a', end: 'b'},
    {start: 'b', end: 'd'}
    ];

    
console.log(solve_graph('a','d',graph)); // -> returns true
console.log(solve_graph('a','g',graph)); // -> returns true
console.log(solve_graph('a','h',graph)); // -> returns false
console.log(solve_graph('a','c',graph2)); // -> returns false
