import CommonAction from '../commons/common_actions'
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import ManageProjectForeCastPage from "../PageObject/manageProjectForecastPage"

const commonAction = new CommonAction()
const manageProjectForecastPage = new ManageProjectForeCastPage()
var manageProject = require('../data/manageProject.json');

When(/^I input "([^"]*)" to 'Filter Trade Code' in 'Project Trade' list$/, (tradeCode) => {
    manageProjectForecastPage.enterValueToFilterTradeCode(tradeCode)
})

When(/^I input "([^"]*)" to 'Filter Item Code' in 'Catalogue Items' list$/, (itemCode) => {
    manageProjectForecastPage.enterValueToFilerItemCode(itemCode)
})

When(/^I check "([^"]*)" checkbox in 'Project Trade' list$/, (tradeCode) => {
    manageProjectForecastPage.checkToTradeCodeCheckbox(tradeCode)
})

When(/^I check "([^"]*)" checkbox in 'Catalogue Items' list$/, (itemCode) => {
    manageProjectForecastPage.checkToItemCodeCheckbox(itemCode)
})

When(/^I click to book icon add item in 'Project Forecast Detailed Breakdown' list$/, () => {
    manageProjectForecastPage.clickToBookIconAddItem()
})

Then(/^I see 'Forecast Trade' page$/, () => {
    manageProjectForecastPage.verifyForecastTradePageTitleDisplay()
})

Then(/^I see code in 'Project Forecast Detailed Breakdown' list is "([^"]*)"$/, (code) => {
    manageProjectForecastPage.verifyCodeInListDisplay(code)
})

Then(/^I see project code just created in 'Project Code' textbox at 'Project Forecast Details' page$/, () => {
    manageProjectForecastPage.verifyValueInProjectCodeTextboxExist(manageProject.projectCode)
})

Then(/^I see project title just created in 'Project Title' textbox at 'Project Forecast Details' page$/, () => {
    manageProjectForecastPage.verifyValueInProjectTitleTextboxExist(manageProject.projectTitle)
})

Then(/^I see random erp project code in 'ERP Project Code' textbox at 'Project Forecast Details' page$/, () => {
    manageProjectForecastPage.verifyValueInErpProjectCodeTextboxExist(manageProject.erpProject)
})

Then(/^I see value in 'Start Date' textbox as next "([^"]*)" days$/, (date) => {
    manageProjectForecastPage.verifyValueInStartDateTextboxExist(commonAction.getDateFormat1(date))
})

Then(/^I see value in 'End Date' textbox as next "([^"]*)" days$/, (date) => {
    manageProjectForecastPage.verifyValueInEndDateTextboxExist(commonAction.getDateFormat1(date))
})

Then(/^I see value in 'Project Currency' textbox at 'Project Forecast Details' page is "([^"]*)"$/, (currency) => {
    manageProjectForecastPage.verifyValueInCurrencyTextboxExist(currency)
})

Then(/^I see value in 'Approved PR Budget' textbox at 'Project Forecast Details' page is "([^"]*)"$/, (budget) => {
    manageProjectForecastPage.verifyValueInApprovedPrBudgetTextboxExist(budget)
})

Then(/^I see value in 'Overall Budget' textbox at 'Project Forecast Details' page is "([^"]*)"$/, (budget) => {
    manageProjectForecastPage.verifyValueInOverallBudgetTextboxExist(budget)
})

Then(/^I see value in 'Issued PO Budget' textbox at 'Project Forecast Details' page is "([^"]*)"$/, (budget) => {
    manageProjectForecastPage.verifyValueInIssuedPoBudgetTextboxExist(budget)
})

Then(/^I see value in 'Project Address' textbox at 'Project Forecast Details' page is "([^"]*)"$/, (address) => {
    manageProjectForecastPage.verifyValueInProjectAddressTextboxExist(address)
})

Then(/^I see value in 'Address Line 1' textbox at 'Project Forecast Details' page is "([^"]*)"$/, (address) => {
    manageProjectForecastPage.verifyValueInAddressLine1TextboxExist(address)
})

Then(/^I see value in 'Address Line 2' textbox at 'Project Forecast Details' page is "([^"]*)"$/, (address) => {
    manageProjectForecastPage.verifyValueInAddressLine2TextboxExist(address)
})

Then(/^I see value in 'Postal Code' textbox at 'Project Forecast Details' page is "([^"]*)"$/, (postalCode) => {
    manageProjectForecastPage.verifyValueInPostalCodeTextboxExist(postalCode)
})

Then(/^I see value in 'Country' textbox at 'Project Forecast Details' page is "([^"]*)"$/, (country) => {
    manageProjectForecastPage.verifyValueInCountryTextboxExist(country)
})

Then(/^I see value in 'State' textbox at 'Project Forecast Details' page is "([^"]*)"$/, (state) => {
    manageProjectForecastPage.verifyValueInStateTextboxExist(state)
})

Then(/^I see value in 'City' textbox at 'Project Forecast Details' page is "([^"]*)"$/, (city) => {
    manageProjectForecastPage.verifyValueInCityTextboxExist(city)
})