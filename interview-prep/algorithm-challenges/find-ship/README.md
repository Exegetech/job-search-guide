# Find a Ship Traveling on the Integer Sea

*Difficulty: Hard*

| Cohort | Date       |
|--------|------------|
| Sep-14 | ? |

---

There exists a "ship" somewhere on the number line (set of all integers, positive & negative). The ship moves with constant *nonzero* velocity *v*, meaning every time step *t* it changes position by integer distance *d*. The ship's velocity may be positive or negative, meaning it is moving forwards or backwards on the number line. You do not know where the ship begins, the sign of its velocity, or its magnitude.

Write a program that, given (potentially) infinite time, *will* eventually find the ship. **Your program may only check one location per time step.** Yes, it is possible. For syntax, you can consider the following variable to exist:

* `shipPosition` — the location of the ship, which is automatically changing every time step (function loop). **You may not simply "ask" for this value**; you can only check it in the context of seeing if your candidate location is equal to the ship position (for example, `if (guessLocation === shipPosition)`. Remember, you may only do this once per time step (function loop).

Good luck!
