import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import CommonAction from '../commons/common_actions'
import InvPage from "../PageObject/invPage"

const commonAction = new CommonAction()
const invPage = new InvPage()

When(/^Get INV number in list$/, () => {
    commonAction.getInvNoInList()
})

When(/^I input DO No to filter DO in 'Select PO' table at 'Create Invoice' page$/, () => {
    invPage.enterValueToFilterDoInSelectPoTable(sessionStorage.getItem("doNumberDoList"))
})

When(/^I input PO No to filter PO in 'Select PO' table at 'Create Invoice' page$/, () => {
    invPage.enterValueToFilterPoInSelectPoTable(sessionStorage.getItem("poNumber"))
})

When(/^I input PO No to filter PO in 'Invoice Pending Approval' list$/, () => {
    invPage.enterValueToFilterPoInInvoiceApprovalList(sessionStorage.getItem("poNumber"))
})

When(/^I input INV No to filter INV in List$/, () => {
    invPage.enterValueToFilterInvInList(sessionStorage.getItem("invNumberList"))
})

When(/^I input invoice date as next "([^"]*)" days to 'Invoice Date' textbox at 'Create Invoice' page$/, (date) => {
    invPage.enterValueToInvoiceDateTextbox(commonAction.getDateFormat4(date))
})

When(/^I input invoice due date as next "([^"]*)" days to 'Invoice Due Date' textbox at 'Create Invoice' page$/, (date) => {
    invPage.enterValueToInvoiceDueDateTextbox(commonAction.getDateFormat4(date))
})

When(/^I input "([^"]*)" to Invoice Quantity textbox at 'Create Invoice' page$/, (quantity) => {
    invPage.enterValueToInvoiceQuantityTextbox(quantity)
})

When(/^I select "([^"]*)" from 'Invoice Type' dropdown at 'Create Invoice' page$/, (invoiceType) => {
    invPage.selectValueFromInvoiceTypeDropdown(invoiceType)
})

When(/^I select supplier code "([^"]*)" from dropdown at 'Create Invoice' page$/, (supplierCode) => {
    invPage.selectSupplierCodeFromDropdown(supplierCode)
})

When(/^I select "([^"]*)" from 'Approval Route' dropdown at 'Invoice Pending Approval' page$/, (approvalRoute) => {
    invPage.selectValueFromApprovalRouteDropdown(approvalRoute)
})

When(/^I select "([^"]*)" from 'GL Account' dropdown at 'Invoice Pending Approval' page$/, (glCode) => {
    invPage.selectValueFromGlCodeDropdown(glCode)
})

When(/^I double click to INV No in 'Invoice Pending Approval' list$/, () => {
    invPage.doubleClickToInvoiceInList(sessionStorage.getItem("invNumberList"))
})

When(/^I check to PO No just created checkbox at 'Create Invoice' page$/, () => {
    invPage.checkToPoNumberCheckbox(sessionStorage.getItem("poNumber"))
})

Then(/^I see 'Create Invoice' page$/, () => {
    invPage.verifyCreateInvoicePageTitleDisplay()
})

Then(/^I see 'Invoice Pending Approval' page$/, () => {
    invPage.verifyInvoiceApprovalPageTitleDisplay()
})

Then(/^I see INV No in 'Invoice No' textbox appears$/, () => {
    invPage.verifyValueInInvoiceNumberTextboxExits(sessionStorage.getItem("invNumberList"))
})

Then(/^I see company name "([^"]*)" at 'Create Invoice' page$/, (companyName) => {
    invPage.verifyValueInCompanyNameTextboxExits(companyName)
})

Then(/^I see PO No in 'Added PO' table at 'Create Invoice' page$/, () => {
    invPage.verifyPoNumberInAddedPoTableDisplay(sessionStorage.getItem("poNumber"))
})

Then(/^I see Invoice status in list is "([^"]*)"$/, (invStatus) => {
    invPage.verifyInvoiceStatusInListDisplay().should('have.text', invStatus)
})

Then(/^I see Invoice Type in list is "([^"]*)"$/, (invType) => {
    invPage.verifyInvoiceTypeInListDisplay().should('have.text', invType)
})

Then(/^I see Matching in list is "([^"]*)"$/, (matching) => {
    invPage.verifyMatchingInListDisplay().should('have.text', matching)
})