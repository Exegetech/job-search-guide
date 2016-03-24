function getMaxSubArray(arr) {
    var cur = [ ], max = [ ], curSum = 0, maxSum = 0;
    arr.forEach(function (currElement) {
        if (currElement + curSum < currElement) {
            cur = [ currElement ];
            curSum = currElement;
        } else {
            cur.push(currElement);
            curSum += currElement;
            if (curSum > maxSum) {
                max = cur.slice();
                maxSum = curSum
            }
        }
    });
    return max;
}
