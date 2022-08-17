//SLIDES -- http://slides.com/es1831/reacto#/

Array.prototype.isInt = function() {
  return this.filter(function(n) { return (typeof(n)==='number') && (n% 1 === 0) });
}

Array.prototype.even = function() {
  return this.isInt().filter(function(n) { return n%2===0 });
}

Array.prototype.odd = function() {
  return this.isInt().filter(function(n) { return n%2!== 0 });
}

Array.prototype.under = function(x) {
  return this.isInt().filter(function(n) { return  n < x });
}

Array.prototype.over = function(x) {
  return this.isInt().filter(function(n) { return  n > x });
}

Array.prototype.inRange = function(min, max) {
  return this.isInt().filter(function(n) { return n >= min && n <= max });
}
