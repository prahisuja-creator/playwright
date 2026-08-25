
//Creating the enum 
enum Envirnoment {
    local = 'LOCAL',
    dev = 'DEVELOPMENT',
    stg = 'STAGING',
    prod = 'PRODUCTION'
}

//Function that accepts enum and returns void 
function runTests(env: Envirnoment): void {
    console.log('Launching in  : ' + env);

}

//Example Calls to `runTests` using different enum values to demonstrate the function's functionality.
runTests(Envirnoment.local);
runTests(Envirnoment.dev);
runTests(Envirnoment.stg);
runTests(Envirnoment.prod)