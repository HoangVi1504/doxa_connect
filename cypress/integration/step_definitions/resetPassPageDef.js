import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import ResetPassPage from "../PageObject/resetPassPage"

const resetPassPage = new ResetPassPage()

When(/^I input "([^"]*)" to 'New Password' textbox$/, (password) => {
    resetPassPage.enterValueToNewPasswordTextbox(password)
})

When(/^I input "([^"]*)" to 'Repeat Password' textbox$/, (password) => {
    resetPassPage.enterValueToRepeatPasswordTextbox(password)
})

When(/^I click to 'Submit' button at 'Reset Password' page$/, () => {
    resetPassPage.clickToSubmitButton()
})

When(/^I click to 'Login Now' link at 'Reset Password' page$/, () => {
    resetPassPage.clickToLoginNowButton()
})

Then(/^I see 'Reset Password' title$/, () => {
    resetPassPage.verifyResetPasswordTitleDisplay()
})

Then(/^I see a message reset password appears "([^"]*)"$/, (message) => {
    resetPassPage.verifyResetPassMessageDisplay().should('have.text', message)
})