import { faker } from '@faker-js/faker';
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import ManagePaymentTermPage from '../PageObject/managePaymentTermPage';

const managePaymentTermPage = new ManagePaymentTermPage()

When(/^I input random name of payment term just created to 'Filter Payment Term' in 'Payment Term' list$/, () => {
    managePaymentTermPage.enterValueToFilterPaymentTermName(sessionStorage.getItem("paymentTermName"))
})

When(/^I input random pay in of payment term just created to 'Filter Pay In' in 'Payment Term' list$/, () => {
    managePaymentTermPage.enterValueToFIlterPayIn(sessionStorage.getItem("payIn"))
})

When(/^I input "([^"]*)" to 'Name' textbox at 'Create New Payment Term' page$/, (name) => {
    managePaymentTermPage.enterValueToPaymentTermNameTextbox(name)
})

When(/^I input random value to 'Name' textbox at 'Payment Term Details' page$/, () => {
    sessionStorage.setItem("ptName", "auto pt " + faker.random.alphaNumeric(5))
    managePaymentTermPage.enterValueToPaymentTermNameTextbox(sessionStorage.getItem("ptName"))
})

When(/^I input random payment term name to 'Name' textbox at 'Create New Payment Term' page$/, () => {
    sessionStorage.setItem("paymentTermName", "auto payment term " + faker.random.alphaNumeric(5))
    managePaymentTermPage.enterValueToPaymentTermNameTextbox(sessionStorage.getItem("paymentTermName"))
})

When(/^I input random pay in to 'Pay in' textbox at 'Create New Payment Term' page$/, () => {
    sessionStorage.setItem("payIn", faker.random.numeric(3))
    managePaymentTermPage.enterValueToPayInTextbox(sessionStorage.getItem("payIn"))
})

When(/^I input "([^"]*)" to 'Pay in' textbox at 'Create New Payment Term' page$/, (days) => {
    managePaymentTermPage.enterValueToPayInTextbox(days)
})

When(/^I input "([^"]*)" to 'Remarks' textbox at 'Create New Payment Term' page$/, (remark) => {
    managePaymentTermPage.enterValueToRemarkTextbox(remark)
})

When(/^I double click to random payment term of payment term just created in 'Payment Term' list$/, () => {
    managePaymentTermPage.doubleClickToPaymentTermNameInList(sessionStorage.getItem("paymentTermName"))
})

Then(/^I see 'Create New Payment Term' page$/, () => {
    managePaymentTermPage.verifyCreatePaymentTermPageTitleDisplay()
})

Then(/^I see 'Payment Term Details' page$/, () => {
    managePaymentTermPage.verifyPaymentTermDetailsPageTitleDisplay()
})

Then(/^I see 'List of Payment Term' page$/, () => {
    managePaymentTermPage.verifyListPaymentTermPageTitleDisplay()
})

Then(/^I see name of payment term just created in 'Payment Term' textbox at 'Payment Term Details' page$/, () => {
    managePaymentTermPage.verifyValueInPaymentTermNameTextboxExist(sessionStorage.getItem("paymentTermName"))
})

Then(/^I see pay in of payment term just created in 'Payment In' textbox at 'Payment Term Details' page$/, () => {
    managePaymentTermPage.verifyValueInPayInTextboxExist(sessionStorage.getItem("payIn"))
})

Then(/^I see remark of of payment term just created in 'Remarks' textbox at 'Payment Term Details' page is "([^"]*)"$/, (remark) => {
    managePaymentTermPage.verifyValueInRemarkTextboxExist(remark)
})

Then(/^I see random name of payment term just created in 'Payment Term' list$/, () => {
    managePaymentTermPage.verifyPaymentTermNameInListDisplay(sessionStorage.getItem("paymentTermName"))
})

Then(/^I see random value name of payment term just created in 'Payment Term' list$/, () => {
    managePaymentTermPage.verifyPaymentTermNameInListDisplay(sessionStorage.getItem("ptName"))
})

Then(/^I see random pay in of payment term just created in 'Payment Term' list$/, () => {
    managePaymentTermPage.getPayInInList().should('have.text', sessionStorage.getItem("payIn") + " days")
})

Then(/^I see remarks of payment term just created in 'Payment Term' list is "([^"]*)"$/, (remark) => {
    managePaymentTermPage.getRemarkInList().should('have.text', remark)
})

Then(/^I see updater of payment term just created in 'Payment Term' list is "([^"]*)"$/, (updater) => {
    managePaymentTermPage.getUpdaterInList().should('have.text', updater)
})

Then(/^I see validation text of 'Name' at 'Create New Payment Term' page appears "([^"]*)"$/, (validation) => {
    managePaymentTermPage.getValidationPaymentTermName().should('have.text', validation)
})

Then(/^I see validation text of 'Pay In' at 'Create New Payment Term' page appears "([^"]*)"$/, (validation) => {
    managePaymentTermPage.getValidationPayIn().should('have.text', validation)
})