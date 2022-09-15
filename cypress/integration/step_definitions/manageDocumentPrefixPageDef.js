import {When, Then} from "cypress-cucumber-preprocessor/steps"
import CommonPage from "../PageObject/commonPage"
import CommonAction from '../commons/common_actions'
import ManageDocumentPrefixPage from "../PageObject/manageDocumentPrefixPage";

const commonPage = new CommonPage()
const commonAction = new CommonAction()
const manageDocumentPrefixPage = new ManageDocumentPrefixPage()

When(/^I input "([^"]*)" to 'Filter Function' in 'Document Prefix' list$/, (functionName) => {
    manageDocumentPrefixPage.enterValueToFilterFunction(functionName)
})

When(/^I input "([^"]*)" to 'Start Number Format' textbox at 'Document Prefix Details' page$/, (startNumberFormat) => {
    manageDocumentPrefixPage.enterValueToStartNumberFormatTextbox(startNumberFormat)
})

When(/^I input "([^"]*)" to 'Prefix' textbox at 'Document Prefix Details' page$/, (prefix) => {
    manageDocumentPrefixPage.enterValueToPrefixTextbox(prefix)
})

When(/^I select "([^"]*)" from 'Digits' dropdown at 'Document Prefix Details' page$/, (digits) => {
    manageDocumentPrefixPage.selectValueFromDigitsDropdown(digits)
})

When(/^I select "([^"]*)" from 'Pre-fix Status' dropdown at 'Document Prefix Details' page$/, (prefix) => {
    manageDocumentPrefixPage.selectValueFromPrefixDropdown(prefix)
})

When(/^I force click Setup "([^"]*)" is "([^"]*)" from 'Dynamic Prefix' at 'Document Prefix Details' page$/, (setupName, checkboxName) => {
    manageDocumentPrefixPage.forceClickToSetupOptionCheckbox(setupName, checkboxName)
})

When(/^I double click to function "([^"]*)" in 'Document Prefix' list$/, (functionName) => {
    manageDocumentPrefixPage.doubleClickToFunctionInList(functionName)
})

When(/^I clear value in 'Prefix' textbox at 'Document Prefix Details' page$/, () => {
    manageDocumentPrefixPage.clearValueInPrefixTextbox()
})

Then(/^I see 'Document Prefix Details' page$/, () => {
    manageDocumentPrefixPage.verifyDocumentPrefixDetailsPageTitleDisplay()
})

Then(/^I see function in 'Function' textbox at 'Document Prefix Details' page is "([^"]*)"$/, (functionName) => {
    manageDocumentPrefixPage.verifyValueInFunctionNameTextboxExist(functionName)
})

Then(/^I see 'Pre-fix Status' is "([^"]*)" at 'Document Prefix Details' page$/, (prefix) => {
    manageDocumentPrefixPage.verifyValueInPrefixStatusTextboxExist(prefix)
})

Then(/^I see 'Default Document Number' is "([^"]*)" at 'Document Prefix Details' page$/, (defaultDocumentNumber) => {
    manageDocumentPrefixPage.verifyValueInDefaultDocumentNumberTextboxExist(defaultDocumentNumber)
})

Then(/^I see 'Sample Output' is "([^"]*)" at 'Document Prefix Details' page$/, (sampleOutput) => {
    manageDocumentPrefixPage.verifySampleOutputDisplay(sampleOutput)
})

Then(/^I see 'List of Document Prefix' page$/, () => {
    manageDocumentPrefixPage.verifyListDocumentPrefixTitleDisplay()
})

Then(/^I see "([^"]*)" is "([^"]*)" in table at 'Document Prefix Details' page$/, (colId, value) => {
    manageDocumentPrefixPage.verifyFunctionNameDisplay(colId, value)
})

Then(/^I see function "([^"]*)" just searched in 'Document Prefix' list$/, (functionName) => {
    manageDocumentPrefixPage.verifyFunctionNameDisplay(functionName)
})

Then(/^I see 'Default Document Number' dropdown is disabled at 'Document Prefix Details' page$/, () => {
    manageDocumentPrefixPage.verifyDefaultDocumentDropdownNumberDisabled()
})

Then(/^I see 'Pre-fix Status' dropdown is disabled at 'Document Prefix Details' page$/, () => {
    manageDocumentPrefixPage.verifyPrefixStatusDropdownDisabled()
})

Then(/^I see prefix random of function just searched with 'Dynamic Prefix' Vendor Code format YYYY in 'Document Prefix' list$/, () => {
    let fullYear = commonAction.getSomeDateByFullYear(0)
    manageDocumentPrefixPage.verifyPrefixInListDisplay("TS" + fullYear)
})

Then(/^I see prefix random of function just searched with 'Dynamic Prefix' Project Code format YY in 'Document Prefix' list$/, () => {
    let year = commonAction.getSomeDateByYear(0)
    manageDocumentPrefixPage.verifyPrefixInListDisplay("PROJ" + year)
})

Then(/^I see prefix random of function just searched with 'Dynamic Prefix' Project Code format YYMM in 'Document Prefix' list$/, () => {
    let month = String(commonAction.getSomeDateByMonth(0) + 1)
    if (month.length == 1){
        month = "0" + month
    }
    let year = commonAction.getSomeDateByYear(0)
    manageDocumentPrefixPage.verifyPrefixInListDisplay("PROJ" + year + month)
})

Then(/^I see prefix random of function just searched with 'Dynamic Prefix' Vendor Code format MMYY in 'Document Prefix' list$/, () => {
    let month = String(commonAction.getSomeDateByMonth(0) + 1)
    if (month.length == 1){
        month = "0" + month
    }
    let year = String(commonAction.getSomeDateByYear(0)).substr(1,2)
    manageDocumentPrefixPage.verifyPrefixInListDisplay("TS" + month + year)
})

Then(/^I see prefix random of function just searched with 'Dynamic Prefix' Project Code format None in 'Document Prefix' list$/, () => {
    manageDocumentPrefixPage.verifyPrefixInListDisplay("PROJ1")
})

Then(/^I see a validation text of 'Prefix' at 'Document Prefix Details' page appears "([^"]*)"$/, (validationPrefix) => {
    manageDocumentPrefixPage.verifyValidationTextPrefixDisplay(validationPrefix)
})

Then(/^I see a validation text of 'Number Of Digits' at 'Document Prefix Details' page appears "([^"]*)"$/, (validationDigits) => {
    manageDocumentPrefixPage.verifyValidationTextDigitsDisplay(validationDigits)
})

Then(/^I see function just searched in 'Document Prefix' list is "([^"]*)"$/, (functionName) => {
    manageDocumentPrefixPage.getFunctionNameInList().should('have.text', functionName)
})

Then(/^I see type of function just searched in 'Document Prefix' list is "([^"]*)"$/, (type) => {
    manageDocumentPrefixPage.getTypeInList().should('have.text', type)
})

Then(/^I see creator of function just searched in 'Document Prefix' list is "([^"]*)"$/, (creator) => {
    manageDocumentPrefixPage.getCreatorInList().should('have.text', creator)
})