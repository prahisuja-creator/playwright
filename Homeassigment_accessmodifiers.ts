class LoginTest {

    public browserName: string
    private password: string
    protected userName: string

    constructor(elogin: string) {
        this.browserName = 'Chrome'
        this.password = 'admin123'
        this.userName = 'tester'

    }

 

    public openApplication() {
        this.browserName
        console.log("Accessing the public variable -- Browser Name : " + `${this.browserName} `);

    }

    public login() {

        this.userName
        this.password
        console.log("Accessing the protected variable -- User Name: " + `${this.userName} `);
        console.log("Accessing the private variable -- Password : " + `${this.password} `);


    }
}

const Objlogin = new LoginTest('Home Assignment')
Objlogin.openApplication();
Objlogin.login();
