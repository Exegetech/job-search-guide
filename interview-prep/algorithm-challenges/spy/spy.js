var spyOn = function (func) {
  var callCount = 0,
      callVals  = [],
      retVals   = [];
  var spy = function () {
    var args = [].slice.call(arguments);
    var retVal = func.apply(this, args);
    retVals.push(retVal);
    callVals = callVals.concat(args);
    callCount++;
    return retVal;
  };
  spy.getCallCount = function () { return callCount; };
  spy.wasCalledWith = function (val) { return (callVals.indexOf(val) > -1); };
  spy.returned = function (val) { return (retVals.indexOf(val) > -1); };
  return spy;
};

module.exports = spyOn;
