import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import ManageCurrencyPage from "../PageObject/manageCurrencyPage"

const manageCurrencyPage = new ManageCurrencyPage()

When(/^I input "([^"]*)" to 'Filter Currency Code' in 'Currency' list$/, (currencyCode) => {
    manageCurrencyPage.enterValueToFilterCurrencyCode(currencyCode)
})

When(/^I input "([^"]*)" to 'Filter Currency Name' in 'Currency' list$/, (currencyName) => {
    manageCurrencyPage.enterValueToFilterCurrencyName(currencyName)
})

When(/^I input "([^"]*)" to 'Exchange Rate' textbox at 'Currency Details' page$/, (exchangeRate) => {
    manageCurrencyPage.enterValueToExchangeRateTextbox(exchangeRate)
})

When(/^I double click to currency code "([^"]*)" in 'Currency' list$/, (currencyCode) => {
    manageCurrencyPage.doubleClickToCurrencyCodeInLIst(currencyCode)
})

When(/^I check default currency checkbox at 'Currency Details' page$/, () => {
    manageCurrencyPage.checkToDefaultCurrencyCheckbox()
})

When(/^I check to "([^"]*)" currency code checkbox in 'Currency' list$/, (currencyCode) => {
    manageCurrencyPage.checkToCurrencyCodeCheckboxInList(currencyCode)
})

When(/^I click to 'Deactivate' button in notification at 'Currency' list$/, () => {
    manageCurrencyPage.clickToDeactivateNotificationButton()
})

When(/^I click to 'Activate' button in notification at 'Currency' list$/, () => {
    manageCurrencyPage.clickToActivateNotificationButton()
})

When(/^I click to currency action "([^"]*)" in 'Currency' list$/, (action) => {
    manageCurrencyPage.clickToCurrencyActionInList(action)
})

Then(/^I see value in 'Currency Code' textbox at 'Currency Details' page is "([^"]*)"$/, (currencyCode) => {
    manageCurrencyPage.verifyValueInCurrencyCodeTextboxExist(currencyCode)
})

Then(/^I see value in 'Currency Name' textbox at 'Currency Details' page is "([^"]*)"$/, (currencyName) => {
    manageCurrencyPage.verifyValueInCurrencyNameTextboxExist(currencyName)
})

Then(/^I see 'List of Currency' page$/, () => {
    manageCurrencyPage.verifyListCurrencyPageTitleDisplay()
})

Then(/^I see 'Currency Details' page$/, () => {
    manageCurrencyPage.verifyCurrencyDetailsPageTitleDisplay()
})

Then(/^I see currency code in 'Currency' list is "([^"]*)"$/, (currencyCode) => {
    manageCurrencyPage.verifyCurrencyCodeInListDisplay(currencyCode)
})

Then(/^I see currency action in 'Currency' list is "([^"]*)"$/, (action) => {
    manageCurrencyPage.verifyActionCurrencyInListDisplay(action)
})

Then(/^I see currency name in 'Currency' list is "([^"]*)"$/, (currencyName) => {
    manageCurrencyPage.getCurrencyNameInList().should('have.text', currencyName)
})

Then(/^I see exchange rate in 'Currency' list is "([^"]*)"$/, (exchangeRate) => {
    manageCurrencyPage.getExchangeRateInList().should('have.text', exchangeRate)
})

Then(/^I see currency default status in 'Currency' list is "([^"]*)"$/, (status) => {
    manageCurrencyPage.getDefaultCurrencyStatusInList().should('have.text', status)
})

Then(/^I see currency active status in 'Currency' list is "([^"]*)"$/, (status) => {
    manageCurrencyPage.getActiveCurrencyStatusInList().should('have.text', status)
})