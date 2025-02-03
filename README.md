# JavaScript Function with Subtle Zero-Division Handling

This repository demonstrates a subtle bug in a simple JavaScript function that handles division. The function is designed to return 0 if either input parameter is 0 but fails to correctly handle the case where both parameters are 0.  The solution demonstrates a corrected implementation that appropriately deals with this edge case.

## Bug Description
The original code returns 0 when both input parameters are 0, which may not be the expected behavior and can mask other errors.  The corrected version correctly returns NaN (Not a Number) to indicate an undefined mathematical result.

## How to Run
1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred code editor or IDE. 
3. Run the respective files in a JavaScript environment (such as Node.js or a browser's console).