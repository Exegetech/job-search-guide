# Print a Tree Breadth-First
<a href="http://slides.com/benjaminconant/reacto#/" target="_blank">Slides</a><br>
*Difficulty: Medium*

| Cohort | Date       |
|--------|------------|
| Sep-14 | 2014-01-06 |

---

Given a tree data structure, write a function that prints out the content of the tree in a breadth-first way.

* Content at the same "level" (depth) should be printed on a line **with spaces between each value.**
* Content from the next level down should be on a **new line.**

For example, for this tree:

![tree](https://www.cpp.edu/~ftang/courses/CS241/notes/images/trees/tree1.bmp)

The function would output the following:

```
A
B C D
E F G H I J
K L M
```

A tree is represented by its `root` or top node. In other words, the top node is what will be passed into your function. You can assume that each node in the tree contains the following properties:

* `.value` — the content (data) of the node, what you should print out
* `.children` — an ordered array of child nodes for that node
