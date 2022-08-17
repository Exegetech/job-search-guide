// //~=~=~=~=~=~=~=~=~=~=~=~=~=~= O(n*a) solution (n is the size of the array, a is the maximum number in the array) ~=~=~=~=~=~=~=~=~=~=~=~=~=~=
// function rainCollector(arr){
//     var collection = 0;
//     var maxVal = 0;
    
//     arr.forEach(function(elem){
//         if(elem > maxVal) maxVal = elem;
//     })
    
//     for(let i = maxVal; i>0; i--){
//         let positions = [];
//         for(let j = 0; j < arr.length; j++){
//             if(arr[j] >= i) positions.push(j);
//         }
        
//         collection = positions.reduce(function(acc, curr, index){
//             if(index > 0) return acc + (curr - positions[index - 1] - 1);
//             return acc;
//         }, collection)

//     }
    
//     return collection;
// }

// var rainArr = [0,5,3,2,8,8,1,1,2,4,3,3,7,1,2,4,3,2];

// console.log(rainCollector(rainArr)); //logs 38

// //~=~=~=~=~=~=~=~=~=~=~=~=~=~= O(n) solution ~=~=~=~=~=~=~=~=~=~=~=~=~=~=
// function rainCollector(arr){
//     var rightMax = [], max = 0;
    
//     for(let i = arr.length - 1; i >= 0; i--){
//         max = arr[i] > max ? arr[i] : max;
//         rightMax[i] = max;
//     }
    
//     var sum = 0;
//     max = 0;
    
//     for(let i = 0; i < arr.length; i++){
//         max = arr[i] > max ? arr[i] : max;
//         sum += Math.min(max, rightMax[i]) - arr[i];
//     }
    
//     return sum;
// }

// var rainArr = [0,5,3,2,8,8,1,1,2,4,3,3,7,1,2,4,3,2];

// console.log(rainCollector(rainArr)); //logs 38