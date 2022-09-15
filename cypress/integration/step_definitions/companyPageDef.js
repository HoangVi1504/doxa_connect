import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import CompanyPage from "../PageObject/companyPage"
import { faker } from '@faker-js/faker';

const companyPage = new CompanyPage()

When(/^I input random name to 'User Name' textbox at 'Company User' page$/, () => {
    let number = faker.random.alphaNumeric(5)
    let userName = "Auto Company User " + number
    sessionStorage.setItem("companyName", userName)
    companyPage.enterValueToUserNameTextbox(sessionStorage.getItem("companyName"))
})

When(/^I input random phone to 'Work Phone' textbox at 'Company User' page$/, () => {
    let workPhone = faker.random.numeric(10)
    sessionStorage.setItem("workPhone", workPhone)
    companyPage.enterValueToWorkPhoneTextbox(sessionStorage.getItem("workPhone"))
})

When(/^I input random email to 'Email' textbox at 'Company User' page$/, () => {
    let number = faker.random.numeric(5)
    let email = "auto_org" + number + "@getnada.com"
    sessionStorage.setItem("email", email)
    companyPage.enterValueToEmailTextbox(sessionStorage.getItem("email"))
})

When(/^I input designation "([^"]*)" to 'Designation' textbox at 'Company User' page$/, (designation) => {
    companyPage.enterValueToDesignationTextbox(designation)
})

When(/^I input password "([^"]*)" to 'Custom Password' textbox at 'Company User' page$/, (password) => {
    companyPage.enterValueToCustomPasswordTextbox(password)
})

When(/^I input password "([^"]*)" to 'Custom Reset Password' textbox at 'Company User' page$/, (password) => {
    companyPage.enterValueToCustomResetPasswordTextbox(password)
})

When(/^I input remark "([^"]*)" to 'Remarks' textbox at 'Company User' page$/, (remark) => {
    companyPage.enterValueToRemarksTextbox(remark)
})

When(/^I input role name "([^"]*)" to 'Search Role' textbox at 'Company User' page$/, (roleName) => {
    companyPage.enterValueToSearchRoleTextbox(roleName)
})

When(/^I input feature "([^"]*)" to 'Search Feature' textbox$/, (feature) => {
    companyPage.enterValueToSearchFeatureTextbox(feature)
})

When(/^I input random name to 'Search Company Name' textbox in 'Company Users List'$/, () => {
    companyPage.enterValueToSearchCompanyNameTextbox(sessionStorage.getItem("companyName"))
})

When(/^I select dial code "([^"]*)" from 'Dial Code' dropdown at 'Company User' page$/, (dialCode) => {
    companyPage.selectValueFromDialCodeDropdown(dialCode)
})

When(/^I double click to random name in 'Company Users List'$/, () => {
    companyPage.doubleClickToCompanyNameInList(sessionStorage.getItem("companyName"))
})

When(/^I check to role "([^"]*)" from 'Assigned Roles' list at 'Company User' page$/, (roleName) => {
    companyPage.checkToRoleCheckboxInList(roleName)
})

When(/^I check to 'Read' "([^"]*)" checkbox in 'Assign Task' tab$/, (feature) => {
    companyPage.checkToFeatureReadCheckbox(feature)
})

When(/^I check to 'Write' "([^"]*)" checkbox in 'Assign Task' tab$/, (feature) => {
    companyPage.checkToFeatureWriteCheckbox(feature)
})

When(/^I check to 'Approve' "([^"]*)" checkbox in 'Assign Task' tab$/, (feature) => {
    companyPage.checkToFeatureApproveCheckbox(feature)
})

When(/^I click to 'Custom Password' radio button at 'Company User' page$/, () => {
    companyPage.forceClickToCustomPasswordRadioButton()
})

When(/^I click to "([^"]*)" tab at 'Company User' page$/, (tabName) => {
    companyPage.clickToTabNameInDetailPage(tabName)
})

When(/^I click to 'Reset Password' button at 'Company User' page$/, () => {
    companyPage.clickToResetPasswordButton()
})

When(/^I click to 'Reset Two Factor' button at 'Company User' page$/, () => {
    companyPage.clickToResetTwoFactorButton()
})

When(/^I click to 'Reset Notification Pass' button at 'Company User' page$/, () => {
    companyPage.clickToResetNotificationButton()
})

Then(/^I see 'Create New Company User' page title$/, () => {
    companyPage.verifyCreateCompanyUserPageTitleDisplay()
})

Then(/^I see 'Company Users List' page title$/, () => {
    companyPage.verifyCompanyUserListPageTitleDisplay()
})

Then(/^I see 'Company User Details' page title$/, () => {
    companyPage.verifyCompanyDetailPageDisplay()
})

Then(/^I see user name just created in 'Company User Details' page$/, () => {
    companyPage.verifyUserNameInDetailPageDisplay(sessionStorage.getItem("companyName"))
})

Then(/^I see a validation text of 'Email' at 'Company User' page appears "([^"]*)"$/, (validation) => {
    companyPage.verifyValidationTextEmailDisplay(validation)
})

Then(/^I see a validation text of 'Password' at 'Company User' page appears "([^"]*)"$/, (validation) => {
    companyPage.verifyValidationTextPasswordDisplay(validation)
})

Then(/^I see a validation text of 'User Name' at 'Company User' page appears "([^"]*)"$/, (validation) => {
    companyPage.verifyValidationTextUserNameDisplay(validation)
})

Then(/^I see a validation text of 'Work Phone' at 'Company User' page appears "([^"]*)"$/, (validation) => {
    companyPage.verifyValidationTextWorkPhoneDisplay(validation)
})

Then(/^I see random full name in 'Company Users List'$/, () => {
    companyPage.verifyFullNameInListDisplay(sessionStorage.getItem("companyName"))
})

Then(/^I see random email in 'Company Users List'$/, () => {
    companyPage.getEmailInCompanyList().should('have.text',sessionStorage.getItem("email"))
})

Then(/^I see random work phone in 'Company Users List'$/, () => {
    companyPage.getWorkPhoneInCompanyList().should('have.text', "+65 " + sessionStorage.getItem("workPhone"))
})

Then(/^I see user status in 'Company Users List' is "([^"]*)"$/, (status) => {
    companyPage.getUserStatusInList().should('have.text', status)
})

Then(/^I see designation in 'Company Users List' is "([^"]*)"$/, (designation) => {
    companyPage.getDesignationInList().should('have.text', designation)
})