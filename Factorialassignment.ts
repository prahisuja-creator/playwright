//Declare the funcation with name factorial with parametr declared.

function factorial(n: number): number {

    //To display the number whether it is neagtive

    if (n < 0) {
        console.log("It is negative integer");
    }

    //initialized the variable to store the factorial result

    let ans = 1;

    //For loop initiated with 2 to comput factorial

    for (let i = 2; i <= n; i++) {
        ans *= i;
    }

    return ans;



}

// Factorial calls
console.log('If the negative number is passed:' + factorial(-5));
console.log('The factorial of positivie number 5 is passed:' + factorial(5));
console.log('The factorial of positivie number 3 is passed:' + factorial(3));

