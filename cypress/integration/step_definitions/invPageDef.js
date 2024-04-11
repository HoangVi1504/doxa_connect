import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import CommonAction from '../commons/common_actions'
import ApiAction from "../commons/call_api"
import { faker } from '@faker-js/faker';
import InvPage from "../PageObject/invPage"

const commonAction = new CommonAction()
const apiAction = new ApiAction()
const invPage = new InvPage()

When(/^Get INV number in list$/, () => {
    commonAction.getInvNoInList()
})

When(/^"([^"]*)" call API set "([^"]*)" 'Document Prefix' as "([^"]*)"$/, (roleName, functionName, type) => {
    apiAction.callApiConfigDocumentPrefix(roleName, functionName, type)
})

When(/^I input DO No to filter DO in 'Select PO' table at 'Create Invoice' page$/, () => {
    invPage.enterValueToFilterDoInSelectPoTable(sessionStorage.getItem("doNumberDoList"))
})

When(/^I input PO No to filter PO in 'Select PO' table at 'Create Invoice' page$/, () => {
    invPage.enterValueToFilterPoInSelectPoTable(sessionStorage.getItem("poNumber"))
})

When(/^I input DO No to filter DO in 'Select DO' table at 'Create Invoice' page$/, () => {
    invPage.enterValueToFilterDoInSelectDoTable(sessionStorage.getItem("doNumberDoList"))
})

When(/^I input Invoice No random to 'Invoice No' textbox at 'Create Invoice' page$/, () => {
    sessionStorage.setItem("invNumber", "INV-00" + faker.random.numeric(7))
    invPage.enterValueToInvoiceNoTextbox(sessionStorage.getItem("invNumber"))
})

When(/^I input PO No to filter PO in 'Invoice Pending Approval' list$/, () => {
    invPage.enterValueToFilterPoInInvoiceApprovalList(sessionStorage.getItem("poNumber"))
})

When(/^"([^"]*)" input INV No to filter INV in "([^"]*)" list$/, (roleName, listName) => {
    invPage.enterValueToFilterInvNumberInList(sessionStorage.getItem("invNumberList"), roleName, listName)
})

When(/^I input invoice date as next "([^"]*)" days to 'Invoice Date' textbox at 'Create Invoice' page$/, (date) => {
    invPage.enterValueToInvoiceDateTextbox(commonAction.getDateFormat4(date))
})

When(/^I input invoice due date as next "([^"]*)" days to 'Invoice Due Date' textbox at 'Create Invoice' page$/, (date) => {
    invPage.enterValueToInvoiceDueDateTextbox(commonAction.getDateFormat4(date))
})

When(/^I input "([^"]*)" to 'Invoice Quantity' textbox in "([^"]*)" table at 'Create Invoice' page$/, (quantity, table) => {
    invPage.enterValueToInvoiceQuantityTextbox(quantity, table)
})

When(/^I input "([^"]*)" to 'Expected Amount' textbox at 'Create Invoice' page$/, (value) => {
    invPage.enterValueToExpectedAmountTextbox(value)
})

When(/^I input "([^"]*)" to 'Item Name' textbox in "([^"]*)" table at 'Create Invoice' page$/, (name, table) => {
    invPage.enterValueToInvoiceItemNameTextboxInTable(name, table)
})

When(/^I input "([^"]*)" to 'Item Code' textbox in 'Add Item' table at 'Create Invoice' page$/, (code) => {
    invPage.enterValueToInvoiceItemCodeTextboxInAddItemTable(code)
})

When(/^I input "([^"]*)" to 'Model' textbox in 'Add Item' table at 'Create Invoice' page$/, (model) => {
    invPage.enterValueToInvoiceItemModelTextboxInAddItemTable(model)
})

When(/^I input "([^"]*)" to 'Size' textbox in 'Add Item' table at 'Create Invoice' page$/, (size) => {
    invPage.enterValueToInvoiceItemSizeTextboxInAddItemTable(size)
})

When(/^I input "([^"]*)" to 'Brand' textbox in 'Add Item' table at 'Create Invoice' page$/, (brand) => {
    invPage.enterValueToInvoiceItemBrandTextboxInAddItemTable(brand)
})

When(/^I input "([^"]*)" to filter 'Item Name' in 'Added PO' table at 'Create Invoice' page$/, (name) => {
    invPage.enterValueToInvoiceItemNameFilterInAddedPoTable(name)
})

When(/^I input "([^"]*)" to 'Invoice Unit Price' textbox in "([^"]*)" table at 'Create Invoice' page$/, (value, table) => {
    invPage.enterValueToInvoiceUnitPriceTextbox(value, table)
})

When(/^I input "([^"]*)" to 'Reason' textbox at 'Invoice Pending Approval' page$/, (reason) => {
    invPage.enterValueToRejectTextbox(reason)
})

When(/^I select "([^"]*)" from 'Tax Code' dropdown in "([^"]*)" table at 'Create Invoice' page$/, (taxCode, table) => {
    invPage.selectValueFromTaxCodeDropdownInTable(taxCode, table)
})

When(/^I select "([^"]*)" from 'Invoice Type' dropdown at 'Create Invoice' page$/, (invoiceType) => {
    invPage.selectValueFromInvoiceTypeDropdown(invoiceType)
})

When(/^I select "([^"]*)" from 'UOM' dropdown in 'Add Item' table at 'Create Invoice' page$/, (uom) => {
    invPage.selectValueFromUomDropdownInAddItemTable(uom)
})

When(/^I select "([^"]*)" from 'Supplier Code' dropdown at 'Create Invoice' page$/, (supplierCode) => {
    invPage.selectSupplierCodeFromDropdown(supplierCode)
})

When(/^I select "([^"]*)" from 'Buyer Code' dropdown at 'Create Invoice' page$/, (buyerCode) => {
    invPage.selectBuyerCodeFromDropdown(buyerCode)
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

When(/^I double click to INV No in 'Purchase Invoice' list$/, () => {
    invPage.doubleClickToInvoiceInList(sessionStorage.getItem("invNumberList"))
})

When(/^I click to 'Reject' button in 'Reason Dialog Box' at 'Invoice Pending Approval' page$/, () => {
    invPage.clickToRejectButton()
})

When(/^I click to "([^"]*)" button "([^"]*)" times at 'Create Invoice' page$/, (btn, times) => {
    invPage.clickToTaxAdjustmentButton(btn, times)
})

When(/^I click to 'Item Delete' button in "([^"]*)" table at 'Create Invoice' page$/, (table) => {
    invPage.clickToItemDeleteButtonInTable(table)
})

When(/^I check to PO No just created checkbox at 'Create Invoice' page$/, () => {
    invPage.checkToPoNumberCheckbox(sessionStorage.getItem("poNumber"))
})

When(/^I check to DO No just created checkbox at 'Create Invoice' page$/, () => {
    invPage.checkToDoNumberCheckbox(sessionStorage.getItem("doNumberDoList"))
})

When(/^I check to 'Expected Amount' checkbox at 'Create Invoice' page$/, () => {
    invPage.checkToExpectedAmountCheckbox()
})

Then(/^I see 'Create Invoice' page$/, () => {
    invPage.verifyCreateInvoicePageTitleDisplay()
})

Then(/^I see 'Invoices Pending Approval' page$/, () => {
    invPage.verifyInvoicePendingApprovalPageTitleDisplay()
})

Then(/^I see 'Approval Route' dropdown at 'Invoice Details' page is disabled$/, () => {
    invPage.verifyApprovalRouteDropdownIsDisable()
})

Then(/^I see 'Item Delete' button in "([^"]*)" table at 'Create Invoice' page$/, (table) => {
    invPage.verifyItemDeleteButtonInTableDisplay(table)
})

Then(/^I see pop-up appears to show preview of invoice$/, () => {
    invPage.verifyPopUpPreviewInvoiceDisplay()
})

Then(/^I see 'Invoice List' page$/, () => {
    invPage.verifyInvoiceListPageTitleDisplay()
})

Then(/^I see 'Invoice Detail' page$/, () => {
    invPage.verifyInvoiceDetailPageTitleDisplay()
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

Then(/^"([^"]*)" see company name "([^"]*)" and "([^"]*)" table at 'Create Invoice' page$/, (account, companyName, invType) => {
    invPage.verifyValueInCompanyNameTextboxExits(account, companyName, invType)
})

Then(/^I see 'Invoice Sub Total' is equal to "([^"]*)" at 'Create Invoice' page$/, (value) => {
    invPage.verifyValueInvoiceSubTotalDisplay(value)
})

Then(/^I see 'Invoice Total' is equal to "([^"]*)" at 'Create Invoice' page$/, (value) => {
    invPage.verifyValueInvoiceTotalDisplay(value)
})

Then(/^I see "([^"]*)" button disappear at 'Create Invoice' page$/, (btn) => {
    invPage.verifyItemTaxAdjustmentButtonDisappear(btn)
})

Then(/^I see 'Invoice Tax' is equal to "([^"]*)" at 'Create Invoice' page$/, (value) => {
    invPage.verifyValueInvoiceTaxDisplay(value)
})

Then(/^I see PO No in 'Added PO' table at 'Create Invoice' page$/, () => {
    invPage.verifyPoNumberInAddedPoTableDisplay(sessionStorage.getItem("poNumber"))
})

Then(/^I see DO No in 'Added DO' table at 'Create Invoice' page$/, () => {
    invPage.verifyDoNumberInAddedDoTableDisplay(sessionStorage.getItem("doNumberDoList"))
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

Then(/^I see a validation text of 'Invoice Type' "([^"]*)" appears$/, (validation) => {
    invPage.verifyValidationTextInvoiceTypeDisplay(validation)
})

Then(/^I see a validation text of 'Due Date' "([^"]*)" appears$/, (validation) => {
    invPage.verifyValidationTextDueDateDisplay(validation)
})

Then(/^I see a validation text of 'Supplier' "([^"]*)" appears$/, (validation) => {
    invPage.verifyValidationTextSupplierDisplay(validation)
})

Then(/^I see a validation text of 'Buyer' "([^"]*)" appears$/, (validation) => {
    invPage.verifyValidationTextSupplierDisplay(validation)
})