var spiral = function(n){

    var direction;
    x=0
    y=0
    resultArray = [[0,0]]
    for (var k=1; k < n; k++){
        direction = k%2;
        if (direction === 1){
            var i = 0;
            var j = 0;
            while(i < k){
                x++;
                resultArray.push([x,y]);
                i++
            }
            while(j < k){
                y++;
                resultArray.push([x,y])
                j++
            }
        }
        if (direction === 0){
            var i = 0;
            var j = 0;
            while (i < k){
                x--;
                resultArray.push([x,y]);
                i++;
            }
            while (j < k){
                y--;
                resultArray.push([x,y]);
                j++
            }
        }
    }
   return resultArray;
}