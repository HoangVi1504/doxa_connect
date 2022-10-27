import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import CreditNotePage from "../PageObject/cnPage"
import CommonAction from '../commons/common_actions'

const commonAction = new CommonAction()
const cnPage = new CreditNotePage()

When(/^I get CN number in list$/, () => {
    commonAction.getCreditNoteNoInList()
})

When(/^I input "([^"]*)" to 'Item Quantity' textbox at 'Create Credit Note' page$/, (quantity) => {
    cnPage.enterValueToItemQuantityTextbox(quantity)
})

When(/^I input "([^"]*)" to 'Unit Price' textbox at 'Create Credit Note' page$/, (unitPrice) => {
    cnPage.enterValueToUnitPriceTextbox(unitPrice)
})

When(/^I input "([^"]*)" to 'Exchange Rate' textbox at 'Create Credit Note' page$/, (exchangeRate) => {
    cnPage.enterValueToExchangeRateTextbox(exchangeRate)
})

When(/^I input credit note date as next "([^"]*)" days to 'Creadit Note Date' textbox at 'Create Credit Note' page$/, (date) => {
    cnPage.enterValueToCreditNoteDateTextbox(commonAction.getDateFormat4(date))
})

When(/^I input INV No to filter INV in 'Credit Notes' list$/, () => {
    cnPage.enterValueToFilterInvNumberInList(sessionStorage.getItem("invNumberList"))
})

When(/^I input CN No to filter CN in 'Credit Notes' list$/, () => {
    cnPage.enterValueToFilterCreditNoteNumberInList(sessionStorage.getItem("cnNumberList"))
})

When(/^I input "([^"]*)" to 'Reason' textbox at 'Credit Note Details' page$/, (reason) => {
    cnPage.enterValueToReasonTextbox(reason)
})

When(/^I double click to CN No in 'Credit Notes' list$/, () => {
    cnPage.doubleClickToCreditNoteInList(sessionStorage.getItem("cnNumberList"))
})

When(/^I select "([^"]*)" from 'Approval Route' dropdown at 'Credit Note Details' page$/, (approvalRoute) => {
    cnPage.selectValueFromApprovalRouteDropdown(approvalRoute)
})

When(/^I select "([^"]*)" from 'Supplier Code' dropdown at 'Create Credit Note' page$/, (supplierCode) => {
    cnPage.selectSupplierCodeFromDropdown(supplierCode)
})

When(/^I select INV No from 'Reference Invoice' dropdown at 'Create Credit Note' page$/, () => {
    cnPage.selectReferenceInvNoFromDropdown(sessionStorage.getItem("invNumberList"))
})

When(/^I select "([^"]*)" from 'GL Account' dropdown at 'Create Credit Note' page$/, (glCode) => {
    cnPage.selectValueFromGlCodeDropdown(glCode)
})

When(/^I click to 'Reject' button in 'Reason Dialog Box' at 'Credit Note Details' page$/, () => {
    cnPage.clickToRejectButton()
})

When(/^I click to 'Plus Tax' button at 'Credit Note' page$/, () => {
    cnPage.clickToPlusTaxButton()
})

When(/^I click to 'Item Delete' button in 'Add Item' table at 'Create Credit Note' page$/, () => {
    cnPage.clickToItemDeleteButtonInTable()
})

Then(/^I see 'CN Sub Total' is equal to "([^"]*)" at 'Credit Note' page$/, (value) => {
    cnPage.verifyValueCreditNoteSubTotalDisplay(value)
})

Then(/^I see 'CN Total' is equal to "([^"]*)" at 'Credit Note' page$/, (value) => {
    cnPage.verifyValueCreditNoteTotalDisplay(value)
})

Then(/^I see 'CN Tax' is equal to "([^"]*)" at 'Credit Note' page$/, (value) => {
    cnPage.verifyValueCreditNoteTaxDisplay(value)
})

Then(/^I see 'Create Credit Note' page$/, () => {
    cnPage.verifyCreateCreditNotePageTitleDisplay()
})

Then(/^I see 'Credit Note Details' page$/, () => {
    cnPage.verifyCreditNoteDetailPageTitleDisplay()
})

Then(/^I see 'Credit Note List' page$/, () => {
    cnPage.verifyCreditNoteListPageTitleDisplay()
})

Then(/^I see CN No in 'Credit Note No' textbox appears$/, () => {
    cnPage.verifyCreditNoteNumberTextboxExits(sessionStorage.getItem("cnNumberList"))
})

Then(/^I see company name "([^"]*)" at 'Create Credit Note' page$/, (companyName) => {
    cnPage.verifyValueInCompanyNameTextboxExits(companyName)
})

Then(/^I see pop-up appears to show preview of credit note$/, () => {
    cnPage.verifyPopUpPreviewCreditNoteDisplay()
})

Then(/^I see a validation text of 'Supplier Code' "([^"]*)" appears$/, (validation) => {
    cnPage.verifyValidationTextSupplierCodeDisplay(validation)
})

Then(/^I see credit note status in list is "([^"]*)"$/, (status) => {
    cnPage.getCreditNoteStatusInList().should('have.text', status)
})