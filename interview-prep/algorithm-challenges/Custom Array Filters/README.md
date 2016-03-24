#Custom Array Filters

*Difficulty: Medium*

| Cohort | Date       |
|--------|------------|
| 1503   | 2015-5     |

[Slides](http://slides.com/es1831/reacto)

---

Barack Obama has a lot of data he is required to apply filters to, which is simple enough, but he wants a shorter way of doing so.

He wants the following functions to work as expected:

```javascript
even    // [1,2,3,4,5].even() should return [2,4]
odd     // [1,2,3,4,5].odd() should return [1,3,5]
under   // [1,2,3,4,5].under(4) should return [1,2,3]
over    // [1,2,3,4,5].over(4) should return [5]
inRange // [1,2,3,4,5].inRange(1,3) should return [1,2,3]
```
They should also work when used together, for example:
```javascript
[1,2,18,19,20,21,22,30,40,50,100].even().inRange(18,30) // should return [18, 20, 22, 30]
```
And finally the filters should only accept integer values from an array, for example:
```javascript
["a", 1, "b", 300, "x", "q", 63, 122, 181, "z", 0.83, 0.11].even() // should return [300, 122]
```
