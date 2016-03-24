'use strict'
function validSolution(solution){
    function check(arr){
        return arr.sort()
               .filter(function(val, index){
                    return val===index+1;
                })
                .length===9;
    }

    for(let i=0;i<9;i++){
        var col=[ ];
        var row=[ ];
        var square=[ ];
        for(var j=0;j<9;j++){
            col.push(solution[j][i]);
            row.push(solution[i][j]);
            square.push(solution[Math.floor(j/3)+(i%3)*3][j%3+Math.floor(i/3)*3]);
        }

    if(!check(col) || !check(row) || !check(square)) return false;
    }

    return true;

}
