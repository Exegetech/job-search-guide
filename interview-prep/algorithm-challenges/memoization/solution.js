//Fibonacci without Memoization
function fibonacci(num){  
    if(num > 2) return fibonacci(num - 1) + fibonacci(num - 2);
    else if(num <= 1) return num;
    else return 1;
}

fibonacci(42) // returns 267914296 after a couple of seconds


//Fibonacci with memoization
var fibonacciTable = [0, 1, 1]

function fibonacci(num){  
    if(num > 2){
        if(!fibonacciTable[num-1]) fibonacciTable[num-1] = fibonacci(num-1);
        if(!fibonacciTable[num-2]) fibonacciTable[num-2] = fibonacci(num-2);
        return fibonacciTable[num-1] + fibonacciTable[num-2];
    }
    else if(num <= 1) return num;
    else return 1;
}

fibonacci(1000); //returns 4.346655768693743e+208 almost instantly