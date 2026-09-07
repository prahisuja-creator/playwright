class Browser {

    browserType() {
        console.log("01 - Executing the method Browser type")
    }
    browserVersion() { 
        console.log("02 - Executing the method Browser Version")
    }
}

class Chrome extends Browser{
    launchBrowser(){
        console.log("03 - Launch browser from Chrome Browser")
    }
}

class Edge extends Browser{
    launchBrowser(){
        console.log("04 - Launch browser from Edge Browser")
    }
}

const objChrome = new Chrome
const objEdge = new Edge
objEdge.browserType()
objEdge.browserVersion()
objChrome.launchBrowser()
objEdge.launchBrowser()