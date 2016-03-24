//unary function chainer

function chained(functions) {
    return function(x){
        return functions.reduce(function(acc, curr){
            return curr(acc); 
        }, x)
    };
}

//Example

function a(num){
    return num * 2; //5 * 2 = 10
}

function b(num){
    return num + 2; //10 + 2 = 12
}

function c(num){
    return num / 4; //12 / 4 = 3
}

function d(num){
    return num - 5; // 3 - 5 = -2
}

chained([a, b, c, d])(5) // returns -2