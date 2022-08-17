/**
 * Pascal's Triangle - Iterative Solution
 * @param: n - the depth of Pascal's triangle
 */
'use strict';
function pascalsTriangle(n) {
    var pascals = [],
        idx;
    for (let i = 0; i < n; i++) {
        idx = pascals.length - i;
        for (let j = 0; j < i + 1; j++) {
            if (j === 0 || j === i) {
                pascals.push(1);
            } else {
                pascals.push(pascals[idx + j - 1] + pascals[idx + j])
            }
        }
    }
    return pascals;
}

/**
 * Pascal's Triangle - Binomial Coefficient Solution
 * @param n
 * @returns {Array}
 */

function pascalsTriangleBinomial(n) {
    var ans = [];
    for (var i = 0; i < n; i++){
        for (var j = 0; j <= i; j++) {
            ans.push(fact(i, j));
        }
    }
    return ans;
}

function fact(n, r) {
    return Math.round((factorial(n) / (factorial(r) * factorial(n-r))));
}

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}
