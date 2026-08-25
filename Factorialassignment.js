"use strict";
function factorial(n) {
    if (n < 0) {
        console.log("It is negative integer");
    }
    let ans = 1;
    for (let i = 2; i <= n; i++) {
        ans *= i;
    }
    return ans;
}
console.log('If the negative number is passed:' + factorial(-5));
console.log('The factorial of positivie number 5 is passed:' + factorial(5));
console.log('The factorial of positivie number 3 is passed:' + factorial(3));
