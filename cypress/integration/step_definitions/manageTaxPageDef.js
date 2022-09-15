import { faker } from '@faker-js/faker';
import ManageTaxPage from '../PageObject/manageTaxPage';
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

const manageTaxPage = new ManageTaxPage()

When(/^I input random tax code to 'Tax Code' textbox at 'Create Tax Record' page$/, () => {
    sessionStorage.setItem("taxCode", "auto tax code "+ faker.random.alphaNumeric(5))
    manageTaxPage.enterValueToTaxCodeTextbox(sessionStorage.getItem("taxCode"))
})

When(/^I input "([^"]*)" to 'Tax Rate' textbox at 'Create Tax Record' page$/, (taxRate) => {
    manageTaxPage.enterValueToTaxRateTextbox(taxRate)
})

When(/^I input "([^"]*)" to 'Description tax' textbox at 'Create Tax Record' page$/, (description) => {
    manageTaxPage.enterValueToDescriptionTaxTextbox(description)
})

When(/^I input tax code just created to 'Filter Tax Code' in Tax list$/, () => {
    manageTaxPage.enterValueToFilterTaxCodeInList(sessionStorage.getItem("taxCode"))
})

When(/^I double click to tax code just created in Tax list$/, () => {
    manageTaxPage.doubleClickToTaxCodeInList(sessionStorage.getItem("taxCode"))
})

When(/^I check to 'Set Default Tax' checkbox at 'Create Tax Record' page$/, () => {
    manageTaxPage.checkToSetDefaultTaxCheckbox()
})

When(/^I check to 'Set Active Status' checkbox at 'Tax Detail' page$/, () => {
    manageTaxPage.checkToSetActiveStatusCheckbox()
})

When(/^I check to tax code just created in Tax list$/, () => {
    manageTaxPage.checkToTaxCodeCheckbox(sessionStorage.getItem("taxCode"))
})

When(/^I clear value in 'Tax Rate' textbox at 'Tax Detail' page$/, () => {
    manageTaxPage.clearValueInTaxRateTextbox()
})

When(/^I click to tax action "([^"]*)" in Tax list$/, (action) => {
    manageTaxPage.clickToTaxActionInList(action)
})

When(/^I click to 'Deactivate' button in notification at 'List Tax'$/, () => {
    manageTaxPage.clickToDeactivateButtonInNotification()
})

When(/^I click to 'Activate' button in notification at 'List Tax'$/, () => {
    manageTaxPage.clickToActivateButtonInNotification()
})

Then(/^I see 'Create Tax Record' page$/, () => {
    manageTaxPage.verifyCreateTaxPageTitleDisplay()
})

Then(/^I see 'Tax Record Details' page$/, () => {
    manageTaxPage.verifyTaxDetailPageTitleDisplay()
})

Then(/^I see 'List of Tax Record' title$/, () => {
    manageTaxPage.verifyListTaxTitleDisplay()
})

Then(/^I see tax code just created in 'Tax Code' textbox at 'Tax Detail' page$/, () => {
    manageTaxPage.verifyValueInTaxCodeExist(sessionStorage.getItem("taxCode"))
})

Then(/^I see random tax code in Tax list$/, () => {
    manageTaxPage.verifyTaxCodeInListDisplay(sessionStorage.getItem("taxCode"))
})

Then(/^I see tax action in Tax list is "([^"]*)"$/, (action) => {
    manageTaxPage.verifyTaxActionInListDisplay(action)
})

Then(/^I see tax rate in Tax list is "([^"]*)"$/, (taxRate) => {
    manageTaxPage.getTaxRateInList().should('have.text', taxRate)
})

Then(/^I see description tax in Tax list is "([^"]*)"$/, (description) => {
    manageTaxPage.getDescriptionTaxInList().should('have.text', description)
})

Then(/^I see tax default status in Tax list is "([^"]*)"$/, (status) => {
    manageTaxPage.getTaxDefaultStatusInList().should('have.text', status)
})

Then(/^I see tax active status in Tax list is "([^"]*)"$/, (status) => {
    manageTaxPage.getTaxActiveStatusInList().should('have.text', status)
})

Then(/^I see a validation text of 'Tax Code' at 'Create Tax Record' page appears "([^"]*)"$/, (validation) => {
    manageTaxPage.getValidationTextTaxCode().should('have.text', validation)
})

Then(/^I see a validation text of 'Tax Rate' at 'Create Tax Record' page appears "([^"]*)"$/, (validation) => {
    manageTaxPage.getValidationTextTaxRate().should('have.text', validation)
})