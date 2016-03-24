function mdArraySum(arr) {
  var sum = 0;
    for (var i = 0; i < arr.length ;  i++) {
        if (Array.isArray(arr[i])) {
            sum += mdArraySum(arr[i]);
        } else {
            sum += arr[i];
        }
    }
    return sum;
}
