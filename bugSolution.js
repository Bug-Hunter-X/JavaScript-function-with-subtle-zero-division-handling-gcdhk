function foo(a, b) {
  if (a === 0 || b === 0) {
    if (a === 0 && b === 0) {  //Check explicitly for 0/0 case
      return NaN; // Return NaN to indicate undefined
    } else {
      return 0; 
    }
  } else {
    return a / b; 
  }
}

console.log(foo(0, 10)); // Correctly returns 0
console.log(foo(10, 0)); // Correctly returns 0
console.log(foo(10, 0)); // Correctly returns 0
console.log(foo(10, 5)); // Correctly returns 2
console.log(foo(0, 0)); // Correctly returns NaN