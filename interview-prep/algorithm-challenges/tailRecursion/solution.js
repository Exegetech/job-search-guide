function factorial(n) {
    function recur(n, acc) {
        if (n == 0) return acc;
        else return recur(n-1, n*acc);
    }
    return recur(n, 1);
}