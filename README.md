# Unexpected Null Return in Addition Function

This repository demonstrates a common JavaScript bug involving unexpected null returns from a seemingly simple addition function. The bug is subtle and can be difficult to spot without careful testing.

## Bug Description
The `foo` function adds two numbers. However, it returns `null` if either input is `null`. While this might seem intentional, it can lead to unexpected behavior in the calling code, especially if the caller doesn't handle the possibility of a `null` return value.

## How to Reproduce
1. Clone this repository.
2. Run the `bug.js` file using Node.js (e.g. `node bug.js`)
3. Observe the unexpected `null` output when either input is `null`.

## Solution
The `bugSolution.js` file provides a corrected version of the function.  It addresses the problem by handling null inputs more robustly, using a default value of 0 in case of a null input.

## Lessons Learned
This example highlights the importance of:
* **Thorough input validation:** Always check for unexpected or invalid input values.
* **Defensive programming:** Write code that handles errors gracefully and avoids unexpected behavior.
* **Robust error handling:**  Implement error handling mechanisms to prevent unexpected program crashes or incorrect results.
