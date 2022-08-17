#Sudoku Validator
<a href="https://slides.com/seemaullal/reacto-3-8/" target="_blank">Slides</a><br>

<a href="https://slides.com/pat310/reacto-3-8/">Updated slides with correct solution 2</a>

### Write a function that determines whether a Sudoku solution is valid or not. ###

#### Problem ####
Write a function that determines if a Sudoku solution is valid. Your input will be a 2-D array that represents a 9x9 matrix. Sudoku has three rules:
 - Every row must contain the numbers from 1-9 (no repeats)
 - Every column must also contain every number from 1-9
 - Every 3x3 subgroup/square must contain each number from 1-9

#### Representing the Data ####
Your input is a 2-D array that represents a 9x9 matrix. For example:
```
var solution = [
  [5,3,4,6,7,8,9,1,2],
  [6,7,2,1,9,5,3,4,8],
  [1,9,8,3,4,2,5,6,7],
  [8,5,9,7,6,1,4,2,3],
  [4,2,6,8,5,3,7,9,1],
  [7,1,3,9,2,4,8,5,6],
  [9,6,1,5,3,7,2,8,4],
  [2,8,7,4,1,9,6,3,5],
  [3,4,5,2,8,6,1,7,9]
];
```

#### Examples ####
    ``` javascript
    sudokuValidator([
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9]
        ])
    //should return true
    sudokuValidator([
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [2, 3, 1, 5, 6, 4, 8, 9, 7],
        [3, 1, 2, 6, 4, 5, 9, 7, 8],
        [4, 5, 6, 7, 8, 9, 1, 2, 3],
        [5, 6, 4, 8, 9, 7, 2, 3, 1],
        [6, 4, 5, 9, 7, 8, 3, 1, 2],
        [7, 8, 9, 1, 2, 3, 4, 5, 6],
        [8, 9, 7, 2, 3, 1, 5, 6, 4],
        [9, 7, 8, 3, 1, 2, 6, 4, 5]
        ])
    ```
    //should return false

