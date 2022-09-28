import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import CommonAction from '../commons/common_actions'
import { faker } from '@faker-js/faker';
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

When(/^I input Invoice No random to 'Invoice No' textbox at 'Create Invoice' page$/, () => {
    sessionStorage.setItem("invNumber", "INV-" + faker.random.numeric(5))
    invPage.enterValueToInvoiceNoTextbox(sessionStorage.getItem("invNumber"))
})

When(/^I input PO No to filter PO in 'Invoice Pending Approval' list$/, () => {
    invPage.enterValueToFilterPoInInvoiceApprovalList(sessionStorage.getItem("poNumber"))
})

When(/^I input INV No to filter INV in "([^"]*)" list$/, (listName) => {
    invPage.enterValueToFilterInvNumberInList(sessionStorage.getItem("invNumberList"), listName)
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

When(/^I input "([^"]*)" to 'Expected Amount' textbox at 'Create Invoice' page$/, (value) => {
    invPage.enterValueToExpectedAmountTextbox(value)
})

When(/^I input "([^"]*)" to 'Item Name' in 'Added PO' table at 'Create Invoice' page$/, (name) => {
    invPage.enterValueToInvoiceItemNameTextbox(name)
})

When(/^I input "([^"]*)" to 'Item Code' in 'Added PO' table at 'Create Invoice' page$/, (code) => {
    invPage.enterValueToInvoiceItemCodeTextbox(code)
})

When(/^I input "([^"]*)" to 'Model' in 'Added PO' table at 'Create Invoice' page$/, (model) => {
    invPage.enterValueToInvoiceItemModelTextbox(model)
})

When(/^I input "([^"]*)" to 'Size' in 'Added PO' table at 'Create Invoice' page$/, (size) => {
    invPage.enterValueToInvoiceItemSizeTextbox(size)
})

When(/^I input "([^"]*)" to 'Brand' in 'Added PO' table at 'Create Invoice' page$/, (brand) => {
    invPage.enterValueToInvoiceItemBrandTextbox(brand)
})

When(/^I input "([^"]*)" to filter 'Item Name' in 'Added PO' table at 'Create Invoice' page$/, (name) => {
    invPage.enterValueToInvoiceItemNameFilter(name)
})

When(/^I input "([^"]*)" to 'Invoice Qty' in 'Added PO' table at 'Create Invoice' page$/, (quantity) => {
    invPage.enterValueToInvoiceQuantityTextbox(quantity)
})

When(/^I input "([^"]*)" to 'Invoice Unit Price' in 'Added PO' table at 'Create Invoice' page$/, (value) => {
    invPage.enterValueToInvoiceUnitPriceTextbox(value)
})

When(/^I select "([^"]*)" from 'Tax Code' dropdown at 'Added PO' table at 'Create Invoice' page$/, (taxCode) => {
    invPage.selectValueFromTaxCodeDropdown(taxCode)
})

When(/^I select "([^"]*)" from 'Invoice Type' dropdown at 'Create Invoice' page$/, (invoiceType) => {
    invPage.selectValueFromInvoiceTypeDropdown(invoiceType)
})

When(/^I select "([^"]*)" from 'UOM' dropdown in 'Added PO' table at 'Create Invoice' page$/, (uom) => {
    invPage.selectValueFromUOMDropdown(uom)
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

When(/^I click to 'Plus Tax' button at 'Create Invoice' page$/, () => {
    invPage.clickToPlusTaxButton()
})

When(/^I click to 'Item Delete' button at 'Create Invoice' page$/, () => {
    invPage.clickToItemDeleteButton()
})

When(/^I check to PO No just created checkbox at 'Create Invoice' page$/, () => {
    invPage.checkToPoNumberCheckbox(sessionStorage.getItem("poNumber"))
})

When(/^I check to 'Expected Amount' checkbox at 'Create Invoice' page$/, () => {
    invPage.checkToExpectedAmountCheckbox()
})

Then(/^I see 'Create Invoice' page$/, () => {
    invPage.verifyCreateInvoicePageTitleDisplay()
})

Then(/^I see 'Item Delete' button at 'Create Invoice' page$/, () => {
    invPage.verifyItemDeleteButtonDisplay()
})

Then(/^I see pop-up appears to show preview of invoice$/, () => {
    invPage.verifyPopUpPreviewInvoiceDisplay()
})

Then(/^I see 'Invoice List' page$/, () => {
    invPage.verifyInvoiceListPageTitleDisplay()
})

Then(/^I see 'Invoice Pending Approval' page$/, () => {
    invPage.verifyInvoiceApprovalPageTitleDisplay()
})

Then(/^I see 'Invoices Pending Approval List' page$/, () => {
    invPage.verifyInvoicePendingApprovalListPageTitleDisplay()
})

Then(/^I see INV No in 'Invoice No' textbox appears$/, () => {
    invPage.verifyValueInInvoiceNumberTextboxExits(sessionStorage.getItem("invNumberList"))
})

Then(/^I see company name "([^"]*)" at 'Create Invoice' page$/, (companyName) => {
    invPage.verifyValueInCompanyNameTextboxExits(companyName)
})

Then(/^I see 'Invoice Sub Total' is equal to "([^"]*)" at 'Create Invoice' page$/, (value) => {
    invPage.verifyValueInvoiceSubTotalDisplay(value)
})

Then(/^I see 'Invoice Total' is equal to "([^"]*)" at 'Create Invoice' page$/, (value) => {
    invPage.verifyValueInvoiceTotalDisplay(value)
})

Then(/^I see 'Invoice Tax' is equal to "([^"]*)" at 'Create Invoice' page$/, (value) => {
    invPage.verifyValueInvoiceTaxDisplay(value)
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