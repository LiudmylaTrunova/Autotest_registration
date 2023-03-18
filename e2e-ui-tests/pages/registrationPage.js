const { BasePage } = require("./basePage");
exports.RegistrationPage = class RegistrationPage extends BasePage {

    constructor(page) {
        super(page, '/sign-up');
        this.fullName = page.locator("[placeholder='Full Name']");
        this.email = page.locator("[placeholder='Email address']");
        this.password = page.locator("[type='Password']");

        this.password = page.locator("[type='Password']");
        this.registerButton = page.getByRole('button');
        
    }     

    async registration(userName, userEmail, userPassword) {
        await this.fullName.locator(userName);
        await this.email.type(userEmail);
        await this.password.type(userPassword);
        await this.registerButton.click();
    }

}