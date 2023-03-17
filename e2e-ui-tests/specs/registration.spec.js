const { test, expect, request } = require('@playwright/test');
//const { LoginPage } = require('../pages/loginPage');
const { RegistrationPage } = require('../pages/registrationPage');
//const { EditProfilePage } = require('../pages/editProfilePage');
const { users } = require('../../test-data/users');
const { userData } = require('../../test-data/data');
const config = require("../../playwright.config");

let registrationPage;
const env = config.default.use.env;


test.describe('Registration tests', () => {

    test.beforeEach(async ({ page }) => {
        registrationPage = new RegistrationPage(page);
        await registrationPage.open();
    });

    test('Registration with valid data', async ({ page }) => {
        await registrationPage.registration(users[env].user.fullName, users[env].user.email, users[env].user.password);
        await expect(page.locator("[class='logo']")).toBeVisible;
    });

});