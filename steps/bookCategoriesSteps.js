import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { BrowserUtility } from '../utilities/BrowserUtility.js';
import { PageManager } from "../globalPagesSetup.js";

// WRITE YOUR STEP DEFINITIONS HERE...

When('user clicks Books link', async function () {
    await PageManager.dashboardPage.bookLink.click();
    await BrowserUtility.sleep(2);
});

When('user clicks the book categories drop down box', async function () {
await PageManager.booksPage.bookCategoriesDropDown.click();
});
//! SAKIN '' KULLANMA LOCATER OKUNMUYOR 
//ic ice elementi locate edebilirim asagidaki gibi
// Then('user should see {int} book categories', async function (int) {
//   const totalOptions =  await PageManager.booksPage.bookCategoriesDropdown.locator('option').count();
//   expect(totalOptions).toBe(int);
// });
Then('user should see {int} book categories', async function (int) {
  const totalOptions = await PageManager.booksPage.bookCategoriesDropDown.locator("option").count();
  expect(totalOptions).toBe(int);
});

Then('book category name {string} should be inlcuded in the categories', async function (string) {
  const options = await PageManager.booksPage.bookCategoriesDropDown.locator("option").allInnerTexts();
  expect(options).toContain(string);
});