import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import OrganizationPage from "../PageObject/organizationPage"
import { faker } from '@faker-js/faker';

const organizationPage = new OrganizationPage()

When(/^I input random name to 'User Name' textbox at 'Organization User' page$/, () => {
    let number = faker.random.alphaNumeric(5)
    let userName = "Auto Organization User " + number
    sessionStorage.setItem("organizationName", userName)
    organizationPage.enterValueToUserNameTextbox(sessionStorage.getItem("organizationName"))
})

When(/^I input random phone to 'Work Phone' textbox at 'Organization User' page$/, () => {
    let workPhone = faker.random.numeric(10)
    sessionStorage.setItem("workPhone", workPhone)
    organizationPage.enterValueToWorkPhoneTextbox(sessionStorage.getItem("workPhone"))
})

When(/^I input random email to 'Email' textbox at 'Organization User' page$/, () => {
    let number = faker.random.numeric(5)
    let email = "auto_org" + number + "@getnada.com"
    sessionStorage.setItem("email", email)
    organizationPage.enterValueToEmailTextbox(sessionStorage.getItem("email"))
})

When(/^I input company "([^"]*)" to 'Search Company' textbox at 'Organization User' page$/, (companyName) => {
    organizationPage.enterValueToSearchCompanyTextbox(companyName)
})

When(/^I input random company name to 'Filter Company Name' textbox in 'Organization Users List'$/, () => {
    organizationPage.enterValueToFilterCompanyNameInList(sessionStorage.getItem("organizationName"))
})

When(/^I input designation "([^"]*)" to 'Designation' textbox at 'Organization User' page$/, (designation) => {
    organizationPage.enterValueToDesignationTextbox(designation)
})

When(/^I input password "([^"]*)" to 'Custom Password' textbox at 'Organization User' page$/, (password) => {
    organizationPage.enterValueToCustomPasswordTextbox(password)
})

When(/^I input role name "([^"]*)" to 'Search Role' textbox at 'Organization User' page$/, (roleName) => {
    organizationPage.enterValueToSearchRoleTextbox(roleName)
})

When(/^I select dial code "([^"]*)" from 'Dial Code' dropdown at 'Organization User' page$/, (dialCode) => {
    organizationPage.selectValueFromDialCodeDropdown(dialCode)
})

When(/^I double click to random full name in 'Organization Users List'$/, () => {
    organizationPage.doubleClickToFullNameInList(sessionStorage.getItem("organizationName"))
})

When(/^I check to role "([^"]*)" from 'Assigned Roles' list$/, (roleName) => {
    organizationPage.checkToRoleCheckboxInList(roleName)
})

When(/^I check to company admin checkbox at 'Company List'$/, () => {
    organizationPage.checkToCompanyAdminCheckbox()
})

When(/^I click to 'Custom Password' radio button at 'Organization User' page$/, () => {
    organizationPage.forceClickToCustomPasswordRadioButton()
})

When(/^I click to 'Reset Password' button at 'Organization User' page$/, () => {
    organizationPage.clickToResetPasswordButton()
})

When(/^I click to 'Reset Two Factor' button at 'Organization User' page$/, () => {
    organizationPage.clickToResetFactorButton()
})

When(/^I click to 'Reset Notification Pass' button at 'Organization User' page$/, () => {
    organizationPage.clickToResetNotificationButton()
})

When(/^I click to 'Add' button in Company list at 'Organization User' page$/, () => {
    organizationPage.clickToAddCompanyButton()
})

When(/^I click company "([^"]*)" in Company list at 'Organization User' page$/, (companyName) => {
    organizationPage.clickToOptionCompanyName(companyName)
})

Then(/^I see user name just created in 'Organization User Details' page$/, () => {
    organizationPage.verifyUserNameInDetailPageDisplay(sessionStorage.getItem("organizationName"))
})

Then(/^I see 'Reset Password User' page title$/, () => {
    organizationPage.verifyResetPasswordUserTitleDisplay()
})

Then(/^I see 'Organization Users List' page title$/, () => {
    organizationPage.verifyOrganizationUserListPageTitleDisplay()
})

Then(/^I see 'Organization User Details' page title$/, () => {
    organizationPage.verifyOrganizationDetailPageDisplay()
})

Then(/^I see 'Create New Organization User' page title$/, () => {
    organizationPage.verifyCreateOrganizationUserPageTitleDisplay()
})

Then(/^I see entity admin "([^"]*)" in 'Companies List' tab$/, (entityAdmin) => {
    organizationPage.verifyEntityAdminInCompaniesListDisplay(entityAdmin)
})

Then(/^I see a validation text of 'Email' at 'Organization User' page appears "([^"]*)"$/, (validation) => {
    organizationPage.verifyValidationTextEmailDisplay(validation)
})

Then(/^I see a validation text of 'Password' at 'Organization User' page appears "([^"]*)"$/, (validation) => {
    organizationPage.verifyValidationTextPasswordDisplay(validation)
})

Then(/^I see a validation text of 'User Name' at 'Organization User' page appears "([^"]*)"$/, (validation) => {
    organizationPage.verifyValidationTextUserNameDisplay(validation)
})

Then(/^I see a validation text of 'Work Phone' at 'Organization User' page appears "([^"]*)"$/, (validation) => {
    organizationPage.verifyValidationTextWorkPhoneDisplay(validation)
})

Then(/^I see random full name in 'Organization Users List'$/, () => {
    organizationPage.verifyFullNameInListDisplay(sessionStorage.getItem("organizationName"))
})

Then(/^I see random email in 'Organization Users List'$/, () => {
    organizationPage.getEmailInList().should('have.text', sessionStorage.getItem("email"))
})

Then(/^I see random work phone in 'Organization Users List'$/, () => {
    organizationPage.getWorkNumberInList().should('have.text', "+65 " + sessionStorage.getItem("workPhone"))
})

Then(/^I see designation in 'Organization Users List' is "([^"]*)"$/, (designation) => {
    organizationPage.getDesignationInList().should('have.text', designation)
})

Then(/^I see user status in 'Organization Users List' is "([^"]*)"$/, (status) => {
    organizationPage.getUserStatusInList().should('have.text', status)
})