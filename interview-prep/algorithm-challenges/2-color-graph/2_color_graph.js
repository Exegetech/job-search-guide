
// Graph 1 - Will return false
// a collection of unique entities (three objects in this case) that represent the verticies
var vertices = [ {}, {}, {}];
// a collection of vertex pairings (relationships — graph forms a triangle in this case)
var edges = [
  [ vertices[0], vertices[1] ],
  [ vertices[1], vertices[2] ],
  [ vertices[2], vertices[0] ],
];

// Graph 2 - Will return true
// a collection of unique entities (eight objects in this case) that represent the verticies
var vertices = [ {}, {}, {}, {}, {}, {}, {}, {}];
// a collection of vertex pairings (relationships — a complete bipartite graph in this case)
// See K_(5,3) for a visual: http://en.wikipedia.org/wiki/Complete_bipartite_graph

var edges = [
  [ vertices[0], vertices[5] ],
  [ vertices[0], vertices[6] ],
  [ vertices[0], vertices[7] ],
  [ vertices[1], vertices[5] ],
  [ vertices[1], vertices[6] ],
  [ vertices[1], vertices[7] ],
  [ vertices[2], vertices[5] ],
  [ vertices[2], vertices[6] ],
  [ vertices[2], vertices[7] ],
  [ vertices[3], vertices[5] ],
  [ vertices[3], vertices[6] ],
  [ vertices[3], vertices[7] ],
  [ vertices[4], vertices[5] ],
  [ vertices[4], vertices[6] ],
  [ vertices[4], vertices[7] ],
];

// Create graph object using either examples from above
var graph = {
  vertices: vertices,
  edges: edges
};


// The function colors a vertex, loops through all edges to see if that vertex is paired with a vetex of the same color, and then changes
// the color of the given vertix if it is paired with one of the same color. Then the function loops through all edge pairings again to see 
// if any of them contain vertices of the same color.

var isBipartite = function (graph){

	var result;

	graph.vertices.forEach(function(vertex){

		// Assign each vertex a color to possibly be changed later
	    if (!vertex.color) {vertex.color = "red"};

		graph.edges.forEach(function(edge){
			if (edge.indexOf(vertex) > -1){

				var neighbor = edge[(edge.indexOf(vertex) + 1)%2];

				if (neighbor.color && neighbor.color == "red"){
					vertex.color = "blue";
				} 
				if (neighbor.color && neighbor.color == "blue"){
					vertex.color = "red";
				}
			}
		});
	});

	//check edge color combinations
	graph.edges.forEach(function(edge){
		if (edge[0].color == edge[1].color) {
			result = false;
		} else {
			result = true;
		}
	});
	return result;
}

