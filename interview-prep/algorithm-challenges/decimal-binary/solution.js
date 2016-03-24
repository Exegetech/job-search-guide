// Simple Solutions: http://repl.it/pqO



/* A note on binary:
Every place in a binary representation represents a quantity 2^n, where
n is how "far" the place is (starting at index 0). For example, the binary
`101` represents (1 * 2^2) + (0 * 2^1) + (1 * 2^0), or (4 + 0 + 1) = 5.

In place-based numerical representations, the numbers towards the right are
the "least significant" bits, which indicate *remainders* of the larger places.
Consider the decimal number 213; the 3 x ones are what is left over when two
hundred ones have been accounted for by the 2 x hundreds place and ten ones
have already been accounted for the by 1 x tens place.

If you mod 213 by 10, you get *3* left over; if you then divide 213 by 10
and round down (to ignore the least-significant digit), you are left with 21.
Repeat the process: mod by 10 to get *1*, divide by 10 and round down to get 2.
Mod by 10 to get *2*, divide by 10 and round down to get zero (the end).
We just re-built our decimal number bit by bit: 3, then 13, then 213.

Converting from decimal to decimal is… well, pointless. But converting from
decimal to binary is useful and uses the same exact concept. Mod 213 by 2 to
get *1*, divide by two and round down to get 106. Now we are dealing with the
"twos" place (instead of the tens place). Mod 106 by 2 to get *0*, divide by
two and round down to get 53; this is the "fours" place (instead of hundreds).
Mod 2 -> *1*, divide by 2 & floor -> 26. Continuing on in this way, we build
the string `11010101` from right to left. Each time we mod by 2, we get the
"leftovers" for the current place; then we divide by two to shift our places
over, and floor to wipe out the remainders that we just took care of.

This is often a difficult algorithm to wrap one's head around, so you are
encouraged to try a lot of diagramming / exercises / discussion to get a feel
for binary representations and conversion. If you are in an interview however,
the important thing is that you can convert a num to any base system:

num % BASE -> next least significant digit (prepend to front)
num / BASE -> shift the digits over
floor(num) -> remove the remainder (which we already used for the least dig.)
repeat until num is < 1.
*/

function decToBin(num) {

    // create a string to store the binary output
    var strOutput = "";

    // set up a loop to run while num !== 0
    while(num) {

        // by mod-ing the given number by 2, we will either concat a
        // 0 or 1 to the front of the output string
        strOutput = (num % 2) + strOutput;

        // after we mod the number, we divide it by 2 then floor that
        // result. this means that when the number finally reaches
        // 1, it will be divided to 0.5, which is then floored to 0.
        // this will cause the loop condition to evaluate as false.
        num = Math.floor(num / 2);
    }

    // return the final string output
    return strOutput;
}




