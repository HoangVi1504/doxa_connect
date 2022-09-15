import { faker } from '@faker-js/faker';
import CommonPage from "../PageObject/commonPage"
import ManageCategoryPage from '../PageObject/manageCategoryPage';
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

const manageCategoryPage = new ManageCategoryPage()

When(/^I input category name of category just created to 'Filter Category Name' in 'Category' list$/, () => {
    manageCategoryPage.enterValueToFilterCategoryName(sessionStorage.getItem("categoryName"))
})

When(/^I input "([^"]*)" to 'Filter Category Name' in 'Category' list$/, (categoryName) => {
    manageCategoryPage.enterValueToFilterCategoryName(categoryName)
})

When(/^I input "([^"]*)" to 'Category Name' textbox at 'Create New Category' page$/, (categoryName) => {
    manageCategoryPage.enterValueToCategoryNameTextbox(categoryName)
})

When(/^I input random category name to 'Category Name' textbox at 'Create New Category' page$/, () => {
    sessionStorage.setItem("categoryName", "auto category random " + faker.random.alphaNumeric(5))
    manageCategoryPage.enterValueToCategoryNameTextbox(sessionStorage.getItem("categoryName"))
})

When(/^I input "([^"]*)" to 'Category Description' textbox at 'Create New Category' page$/, (description) => {
    manageCategoryPage.enterValueToCategoryDescriptionTextbox(description)
})

When(/^I double click to category name of category just created in 'Category' list$/, () => {
    manageCategoryPage.doubleClickToCategoryNameInList(sessionStorage.getItem("categoryName"))
})

When(/^I check to category name of category just created in 'Category' list$/, () => {
    manageCategoryPage.checkToCategoryNameCheckboxInList(sessionStorage.getItem("categoryName"))
})

When(/^I check to category name "([^"]*)" checkbox in 'Category' list$/, (categoryName) => {
    manageCategoryPage.checkToCategoryNameCheckboxInList(categoryName)
})

When(/^I click to 'Deactivate' button in notification at 'Category' list$/, () => {
    manageCategoryPage.clickToDeactivateNotificationButton()
})

When(/^I click to 'Activate' button in notification at 'Category' list$/, () => {
    manageCategoryPage.clickToActivateNotificationButton()
})

When(/^I click to 'Delete' button in notification at 'Category' list$/, () => {
    manageCategoryPage.clickToDeleteNotificationButton()
})

When(/^I click to action "([^"]*)" of category just created in 'Category' list$/, (action) => {
    manageCategoryPage.clickToActionCategoryInList(action)
})

Then(/^I see 'Create New Category' page$/, () => {
    manageCategoryPage.verifyCreateCategoryPageTitleDisplay()
})

Then(/^I see 'List of Category' page$/, () => {
    manageCategoryPage.verifyListCategoryPageTitleDisplay()
})

Then(/^I see 'Category Details' page$/, () => {
    manageCategoryPage.verifyCategoryDetailPageTitleDisplay()
})

Then(/^I see category name of category just created in 'Category Name' textbox at 'Category Details' page$/, () => {
    manageCategoryPage.verifyValueInCategoryNameTextboxExist(sessionStorage.getItem("categoryName"))
})

Then(/^I see value in 'Category Description' textbox at 'Category Details' page is "([^"]*)"$/, (description) => {
    manageCategoryPage.verifyValueInCategoryDescriptionTextboxExist(description)
})

Then(/^I see random category name of category just created in 'Category' list$/, () => {
    manageCategoryPage.verifyCategoryNameInList(sessionStorage.getItem("categoryName"))
})

Then(/^I see category name of category just searched 'Category' list is "([^"]*)"$/, (categoryName) => {
    manageCategoryPage.verifyCategoryNameInList(categoryName)
})

Then(/^I see action of category just searched in 'Category' list is "([^"]*)"$/, (action) => {
    manageCategoryPage.verifyActionCatalogueInList(action)
})

Then(/^I see category description of category just searched in 'Category' list is "([^"]*)"$/, (description) => {
    manageCategoryPage.getCategoryDescriptionInList().should('have.text', description)
})

Then(/^I see active category status of category just searched in 'Category' list is "([^"]*)"$/, (status) => {
    manageCategoryPage.getActiveCategoryStatusInList().should('have.text', status)
})

Then(/^I see validation text of 'Category Name' at 'Create New Category' page appears "([^"]*)"$/, (validation) => {
    manageCategoryPage.getValidationCategoryName().should('have.text', validation)
})