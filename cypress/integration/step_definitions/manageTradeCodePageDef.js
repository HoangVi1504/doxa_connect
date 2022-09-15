import { faker } from '@faker-js/faker';
import ManageTradeCodePage from '../PageObject/manageTradeCodePage';
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

const manageTradeCodePage = new ManageTradeCodePage()

When(/^I input random trade code to 'Trade Code' textbox at 'Create Trade Code' page$/, () => {
    sessionStorage.setItem("tradeCode", "TRADE CODE "+ faker.random.numeric(5))
    manageTradeCodePage.enterValueToTradeCodeTextbox(sessionStorage.getItem("tradeCode"))
})

When(/^I input random trade title to 'Trade Title' textbox at 'Create Trade Code' page$/, () => {
    sessionStorage.setItem("tradeTitle", "auto trade title "+ faker.random.alphaNumeric(5))
    manageTradeCodePage.enterValueToTradeTitleTextbox(sessionStorage.getItem("tradeTitle"))
})

When(/^I input "([^"]*)" to 'Description' textbox at 'Create Trade Code' page$/, (description) => {
    manageTradeCodePage.enterValueToTradeDescriptionTextbox(description)
})

When(/^I input trade code just created to 'Filter Trade Code' in 'Trade Code' list$/, () => {
    manageTradeCodePage.enterValueToFilterTradeCode(sessionStorage.getItem("tradeCode"))
})

When(/^I input trade title just created to 'Filter Trade Title' in 'Trade Code' list$/, () => {
    manageTradeCodePage.enterValueToFilterTradeTitle(sessionStorage.getItem("tradeTitle"))
})

When(/^I double click to trade code just created in 'Trade Code' list$/, () => {
    manageTradeCodePage.doubleClickToTradeCodeInList(sessionStorage.getItem("tradeCode"))
})

When(/^I check to trade code just created in 'Trade Code' list$/, () => {
    manageTradeCodePage.checkToTradeCodeCheckbox(sessionStorage.getItem("tradeCode"))
})

When(/^I clear value in 'Trade Title' textbox at 'Trade Code Details' page$/, () => {
    manageTradeCodePage.clearValueInTradeTitleTextbox()
})

When(/^I click to trade code action "([^"]*)" in 'Trade Code' list$/, (action) => {
    manageTradeCodePage.clickToTradeCodeActionInList(action)
})

When(/^I click to 'Activate' button in notification at 'Trade Code' list$/, () => {
    manageTradeCodePage.clickToActivateButtonInNotification()
})

When(/^I click to 'Deactivate' button in notification at 'Trade Code' list$/, () => {
    manageTradeCodePage.clickToDeactivateButtonInNotification()
})

Then(/^I see 'Create New Trade Code' page$/, () => {
    manageTradeCodePage.verifyCreateTradeCodePageTitleDisplay()
})

Then(/^I see 'Trade Code Details' page$/, () => {
    manageTradeCodePage.verifyTradeCodeDetailsPageTitleDisplay()
})

Then(/^I see 'List of Trade Code' title$/, () => {
    manageTradeCodePage.verifyListTradeCodePageTitleDisplay()
})

Then(/^I see trade code just created in 'Trade Code' textbox at 'Trade Code Details' page$/, () => {
    manageTradeCodePage.verifyValueInTradeCodeTextboxExist(sessionStorage.getItem("tradeCode"))
})

Then(/^I see trade title just created in 'Trade Title' textbox at 'Trade Code Details' page$/, () => {
    manageTradeCodePage.verifyValueInTradeTitleTextboxExist(sessionStorage.getItem("tradeTitle"))
})

Then(/^I see random trade code in 'Trade Code' list$/, () => {
    manageTradeCodePage.verifyTradeCodeInListDisplay(sessionStorage.getItem("tradeCode"))
})

Then(/^I see trade code action in 'Trade Code' list is "([^"]*)"$/, (action) => {
    manageTradeCodePage.verifyTradeCodeActionInListDisplay(action)
})

Then(/^I see random trade title in 'Trade Code' list$/, () => {
    manageTradeCodePage.getTradeTitleInList().should('have.text', sessionStorage.getItem("tradeTitle"))
})

Then(/^I see description trade code in 'Trade Code' list is "([^"]*)"$/, (description) => {
    manageTradeCodePage.getTradeDescriptionInList().should('have.text', description)
})

Then(/^I see creator trade code in 'Trade Code' list is "([^"]*)"$/, (creator) => {
    manageTradeCodePage.getCreatorTradeCodeInList().should('have.text', creator)
})

Then(/^I see trade code status in 'Trade Code' list is "([^"]*)"$/, (status) => {
    manageTradeCodePage.getTradeCodeActiveStatusInList().should('have.text', status)
})

Then(/^I see a validation text of 'Trade Code' at 'Create Trade Code' page appears "([^"]*)"$/, (validation) => {
    manageTradeCodePage.getValidationTextTradeCode().should('have.text', validation)
})

Then(/^I see a validation text of 'Trade Title' at 'Create Trade Code' page appears "([^"]*)"$/, (validation) => {
    manageTradeCodePage.getValidationTextTradeTitle().should('have.text', validation)
})