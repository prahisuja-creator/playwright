"use strict";
var Envirnoment;
(function (Envirnoment) {
    Envirnoment["local"] = "LOCAL";
    Envirnoment["dev"] = "DEVELOPMENT";
    Envirnoment["stg"] = "STAGING";
    Envirnoment["prod"] = "PRODUCTION";
})(Envirnoment || (Envirnoment = {}));
function runTests(env) {
    console.log('Launching in  : ' + env);
}
runTests(Envirnoment.local);
runTests(Envirnoment.dev);
runTests(Envirnoment.stg);
runTests(Envirnoment.prod);
