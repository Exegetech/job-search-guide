# Test a Graph for Bipartiteness (2-Colorability)

*Difficulty: Hard*

| Cohort | Date       |
|--------|------------|
| Nov-14 | 2015-02-10 |

---

## Elementary Graph Theory

A [graph](http://en.wikipedia.org/wiki/Graph_theory) is defined as a set of *vertices* (abstract points / entities) plus a set of vertex pair *edges* (relationships / links / associations). A graph can be visualized as "dots and lines", but this is a concrete representation of an abstract mathematical concept — no coordinates here!

![sample graph](http://i.imgur.com/9pLy9Bv.png)

Above is a representation of a graph with eight vertices and six edges. In JavaScript, it could be modeled as follows:

```javascript
// a collection of unique entities (eight objects in this case)
var vertices = [ {}, {}, {}, {}, {}, {}, {}, {} ];
// a collection of vertex pairings (relationships — six in this case)
var edges = [
  [ vertices[1], vertices[2] ],
  [ vertices[1], vertices[3] ],
  [ vertices[1], vertices[4] ],
  [ vertices[3], vertices[4] ],
  [ vertices[2], vertices[5] ],
  [ vertices[6], vertices[7] ]
];
// together, these form a graph
var graph = {
  vertices: vertices,
  edges: edges
};
```

Graphs are useful models for network theory and diverse data structures (a tree is a specific type of directed graph), so it is no surprise that graph theory is at the heart of many algorithms.

### Bipartite (or 2-Colorable) Graphs

[Coloring a graph](http://en.wikipedia.org/wiki/Graph_coloring) (more specifically, *vertex coloring*) means assigning colors (labels/properties) to each vertex such that no two adjacent vertices have the same color. By *adjacent*, we mean that the vertices share an edge. When a graph is *n*-colorable, that means it is possible to color it using merely *n* colors.

For example, the following graphs are 2-colorable; using only two colors, we can label every vertex, yet no vertex is adjacent to a vertex of the same color.

![2-color example](http://i.imgur.com/HLYgPBg.png)

Conversely, the following graphs are not 2-colorable; they are at best 3-colorable.

![3-color example](http://i.imgur.com/cPAakcC.png)

A 2-colorable graph is also called a [*bipartite* graph](http://mathworld.wolfram.com/BipartiteGraph.html). Its vertices can be expressed as two disjoint sets, where elements of one set never share edges within the same set — only with elements of the opposite set. One famous bipartite graph is the [Houses and Utilities](http://mathworld.wolfram.com/UtilityGraph.html) graph, also known as K<sub>3,3</sub>.

![Houses and Utilities](http://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Graph_K3-3.svg/140px-Graph_K3-3.svg.png)

## REACTO

Whew! Bet you're wondering what your REACTO problem is today, right?

Write a function `isBipartite` that accepts a `graph` object (like the JS example shown earlier) and returns `true` or `false` depending on if the graph is 2-colorable. You may assume for this problem that the `graph` is [connected](http://bit.ly/1IOVU6T).

Hint: you are allowed to assign properties to the vertex objects.

---

P.S. — one of the most famous theorems in the world of graphs is that [every planar graph can be colored with four colors](http://en.wikipedia.org/wiki/Four_color_theorem). It was not until 1976 that this was proved; controversially, that first "proof" relied on computer checking for some 1,936 cases!
