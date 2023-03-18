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

    test ('Registration with valid data', async ({ page }) => {
        await registrationPage.registration('fullName', 'email@gmail.com', '123qwe!');
        await expect(page.locator("[class='logo']")).toBeVisible;
        //await expect(page.locator('h2')).toHaveText('Login form');
    });

    test.only('click sign in link', async ({ page }) => {
        await registrationPage.clicksignInButton();
        //await registrationPage.registration('fullName', 'email@gmail.com', '123qwe!');
        //await expect(page.locator("[class='logo']")).toBeVisible;
        await expect(page.locator('h2')).toHaveText('Login form');
    });

});