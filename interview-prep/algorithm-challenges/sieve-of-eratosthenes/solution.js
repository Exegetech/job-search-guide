function Sieve (n) {
  var array = [], 
      max = Math.sqrt(n), 
      resultArr = [];


  // create an array with all numbers from 0 to n 
  for (var i = 0; i <= n; i++) {
      array.push(true);
  }

  // iterate through the array, starting at two, incrementing by one 
  // if the array contains the number, start another loop 
  // that goes through multiples of i less than n 
  // if the array contains these multiples, assign index of the multiple to false
  for (var i = 2; i <= max; i++) {
      if (array[i]) {
          for (var j = i * i; j < n; j += i) {
              array[j] = false;
          }
      }
  }

  // collect all remaining elements in the array
  for (var i = 2; i < n; i++) {
      if(array[i]) {
          resultArr.push(i);
      }
  }
  
    return resultArr;
}
  