const { test, expect, request } = require('@playwright/test');
//const { LoginPage } = require('../pages/loginPage');
const { RegistrationPage } = require('../pages/registrationPage');
//const { EditProfilePage } = require('../pages/editProfilePage');
const { users } = require('../../test-data/users');
const { userData } = require('../../test-data/data');
const config = require("../../playwright.config");
const { faker } = require('@faker-js/faker');
const { registrationData } = require('../../test-data/registrationData');

let registrationPage;

test.describe('Registration tests', () => {

    test.beforeEach(async ({ page }) => {
        registrationPage = new RegistrationPage(page);
        await registrationPage.open();
    });
    test('Registration with valid data', async ({ page }) => {
        await registrationPage.registration(registrationData.fullName, registrationData.email, registrationData.password);
        await expect(page.locator("[class='logo']")).toBeVisible;
    });

    test('click sign in link', async ({ page }) => {
        await registrationPage.clicksignInButton();
        await expect(page.url()).toContain('/sign-in');
    });

});