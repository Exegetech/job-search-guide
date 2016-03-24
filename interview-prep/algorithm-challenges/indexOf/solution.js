function indexOf(haystack,needle) {
  var pos = 0;
  for (var i = 0 ; i <= haystack.length - needle.length ;  i++) {
    for(var j = 0; j < needle.length; j++) {
      if(haystack[i+j] !== needle[j]) {
        break;
      }
      if(j === needle.length - 1) {
        return i;
      }
    }
  }
  return -1;
}
