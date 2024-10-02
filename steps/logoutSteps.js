import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { BrowserUtility } from '../utilities/BrowserUtility.js';
import { PageManager } from "../globalPagesSetup.js";


// WRITE YOUR STEP DEFINITIONS HERE...
Given('user is already logged in as {string}', async function (string) {
    await PageManager.loginPage.login(string);
});
When('user clicks the user profile on top right corner of the page', async function () {
    await PageManager.dashboardPage.userprofileImage.click();
    await BrowserUtility.sleep(2);
});


When('clicks the logout button', async function () {
    await PageManager.dashboardPage.logoutButton.clear();
    await BrowserUtility.sleep(2);
});

Then('user should be logged out from the app', async function () {
    await expect(PageManager.page).toHaveTitle("Login - Library");
});

