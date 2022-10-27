import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import CreditNotePage from "../PageObject/cnPage"
import CommonAction from '../commons/common_actions'

const commonAction = new CommonAction()
const cnPage = new CreditNotePage()

When(/^I get CN number in list$/, () => {
    commonAction.getCnNoInList()
})

When(/^I input "([^"]*)" to 'Item Quantity' textbox at 'Create Credit Note' page$/, (quantity) => {
    cnPage.enterValueToItemQuantityTextbox(quantity)
})

When(/^I input credit note date as next "([^"]*)" days to 'Creadit Note Date' textbox at 'Create Credit Note' page$/, (date) => {
    cnPage.enterValueToCreditNoteDateTextbox(commonAction.getDateFormat4(date))
})

When(/^I input INV No to filter INV in 'Credit Notes' list$/, () => {
    cnPage.enterValueToFilterInvNumberInList(sessionStorage.getItem("invNumberList"))
})

When(/^I input CN No to filter CN in 'Credit Notes' list$/, () => {
    cnPage.enterValueToFilterCnNumberInList(sessionStorage.getItem("cnNumberList"))
})

When(/^I input "([^"]*)" to 'Reason' textbox at 'Credit Note Details' page$/, (reason) => {
    cnPage.enterValueToReasonTextbox(reason)
})

When(/^I double click to CN No in 'Credit Notes' list$/, () => {
    cnPage.doubleClickToCnInList(sessionStorage.getItem("cnNumberList"))
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

Then(/^I see credit note status in list is "([^"]*)"$/, (status) => {
    cnPage.getCnStatusInList().should('have.text', status)
})

Then(/^I see pop-up appears to show preview of credit note$/, () => {
    cnPage.verifyPopUpPreviewCreditNoteDisplay()
})