import { faker } from '@faker-js/faker';
import ManageGlAccountPage from '../PageObject/manageGlAccountPage';
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

const manageGlAccountPage = new ManageGlAccountPage()

When(/^I input random gl account to 'GL Account' textbox at 'Create GL Account' page$/, () => {
    sessionStorage.setItem("glAccount", "auto GL "+ faker.random.alphaNumeric(5))
    manageGlAccountPage.enterValueToGlAccountTextbox(sessionStorage.getItem("glAccount"))
})

When(/^I input "([^"]*)" to 'Description' textbox at 'Create GL Account' page$/, (description) => {
    manageGlAccountPage.enterValueToDescriptionGlTextbox(description)
})

When(/^I input random code to 'Code' textbox for 'Cost Code' at 'Create GL Account' page$/, () => {
    sessionStorage.setItem("costCode", " auto cost code "+ faker.random.alphaNumeric(5))
    manageGlAccountPage.enterValueToCodeTextbox(sessionStorage.getItem("costCode"))
})

When(/^I input random code to 'Code' textbox for 'Department Code' at 'Create GL Account' page$/, () => {
    sessionStorage.setItem("departmentCode", " auto department code "+ faker.random.alphaNumeric(5))
    manageGlAccountPage.enterValueToCodeTextbox(sessionStorage.getItem("departmentCode"))
})

When(/^I input "([^"]*)" to 'Remarks' textbox at 'Create GL Account' page$/, (remark) => {
    manageGlAccountPage.enterValueToRemarksTextbox(remark)
})

When(/^I input GL account just created to 'Filter GL Account' in GL list$/, () => {
    manageGlAccountPage.enterValueToFilterGlAccountTextbox(sessionStorage.getItem("glAccount"))
})

When(/^I double click to GL account just created in GL list$/, () => {
    manageGlAccountPage.doubleClickToGlAccountInList(sessionStorage.getItem("glAccount"))
})

When(/^I check to 'Set Active Status' checkbox at 'GL Account Details' page$/, () => {
    manageGlAccountPage.checkToSetActiveStatusCheckbox()
})

When(/^I check to gl account checkbox just created in GL list$/, () => {
    manageGlAccountPage.checkToGlAccountCheckbox(sessionStorage.getItem("glAccount"))
})

When(/^I click to "([^"]*)" tab at 'Create GL Account' page$/, (linkName) => {
    manageGlAccountPage.clickToOptionLink(linkName)
})

When(/^I click to GL action "([^"]*)" in GL list$/, (action) => {
    manageGlAccountPage.clickToGlAction(action)
})

When(/^I click to 'Deactivate' button in notification at GL list$/, () => {
    manageGlAccountPage.forceClickToDeactivateButtonInNotification()
})

When(/^I click to 'Activate' button in notification at GL list$/, () => {
    manageGlAccountPage.forceClickToActivateButtonInNotification()
})

When(/^I click to 'Add Code' button in 'Cost and Department Code' list$/, () => {
    manageGlAccountPage.clickToAddCodeButton()
})

Then(/^I see a notification of gl account appears "([^"]*)"$/, (notification) => {
    manageGlAccountPage.verifyNotificationDisplay(notification)
})

Then(/^I see 'Create GL Account' page$/, () => {
    manageGlAccountPage.verifyCreateGlAccountPageTitleDisplay()
})

Then(/^I see 'GL Account Details' page$/, () => {
    manageGlAccountPage.verifyGlAccountDetailPageTitleDisplay()
})

Then(/^I see gl account just created in 'GL Account' textbox at 'GL Account Details' page$/, () => {
    manageGlAccountPage.verifyValueInGlAccountTextboxExist(sessionStorage.getItem("glAccount"))
})

Then(/^I see 'List of GL Account' title$/, () => {
    manageGlAccountPage.verifyListGlAccountTitleDisplay()
})

Then(/^I see random GL account in GL list$/, () => {
    manageGlAccountPage.verifyGlAccountInListDisplay(sessionStorage.getItem("glAccount"))
})

Then(/^I see GL action in GL list is "([^"]*)"$/, (action) => {
    manageGlAccountPage.verifyGlActionInListDisplay(action)
})

Then(/^I see description GL in GL list is "([^"]*)"$/, (description) => {
    manageGlAccountPage.getDescriptionGlAccountInList().should('have.text', description)
})

Then(/^I see cost code just created in GL list$/, () => {
    manageGlAccountPage.getCostCodeInList().should('have.text', sessionStorage.getItem("costCode"))
})

Then(/^I see department code just created in GL list$/, () => {
    manageGlAccountPage.getDepartmentCodeInList().should('have.text', sessionStorage.getItem("departmentCode"))
})

Then(/^I see GL active status in GL list is "([^"]*)"$/, (status) => {
    manageGlAccountPage.getGlActiveStatusInList().should('have.text', status)
})

Then(/^I see cost code just created in 'Cost Code' list$/, () => {
    manageGlAccountPage.getCodeInCostList().should('have.text', sessionStorage.getItem("costCode"))
})

Then(/^I see department code just created in 'Department Code' list$/, () => {
    manageGlAccountPage.getCodeInCostList().should('have.text', sessionStorage.getItem("departmentCode"))
})

Then(/^I see remarks cost code in 'Cost Code' list is "([^"]*)"$/, (remark) => {
    manageGlAccountPage.getRemarkInCostList().should('have.text', remark)
})

Then(/^I see remark department code in 'Department Code' list is "([^"]*)"$/, (remark) => {
    manageGlAccountPage.getRemarkInCostList().should('have.text', remark)
})

Then(/^I see a validation text of 'GL Account' at 'Create GL Account' page appears "([^"]*)"$/, (validation) => {
    manageGlAccountPage.getValidationTextGlAccount().should('have.text', validation)
})

Then(/^I see a validation text of 'Code' at 'Create GL Account' page appears "([^"]*)"$/, (validation) => {
    manageGlAccountPage.getValidationTextCode().should('have.text', validation)
})