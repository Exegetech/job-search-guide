'use strict';

function bitShift (binString, direction, numShifts) {
    numShifts = numShifts || 1;

    let l = binString.length,
        zeroes = "0".repeat(numShifts);
    if (direction === 'left') return binString.slice(numShifts, l).concat(zeroes);
    else return zeroes.concat(binString.slice(0, l - numShifts));
}
