import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import CreditNotePage from "../PageObject/cnPage"
import CommonAction from '../commons/common_actions'
import ApiAction from "../commons/call_api"

const commonAction = new CommonAction()
const apiAction = new ApiAction()
const cnPage = new CreditNotePage()

When(/^Call API opt out approval configuration for "([^"]*)" feature$/, (featureName) => {
    apiAction.callApiOptOutApprovalConfiguration(featureName)
})

When(/^I get CN number in list$/, () => {
    commonAction.getCreditNoteNoInList()
})

When(/^I input random credit note number to 'Credit Note No' textbox at 'Create Credit Note' page$/, () => {
    sessionStorage.setItem("cnNumber", "CN-" + commonAction.getTime())
    cnPage.enterValueToCreditNoteNumberTextbox(sessionStorage.getItem("cnNumber"))
})

When(/^I input "([^"]*)" to 'CN Description' textbox at 'Create Credit Note' page$/, (cnDescription) => {
    cnPage.enterValueToCreditNoteDescriptionTextbox(cnDescription)
})

When(/^I input "([^"]*)" to 'Item Code' textbox at 'Create Credit Note' page$/, (itemCode) => {
    cnPage.enterValueToItemCodeTextbox(itemCode)
})

When(/^I input "([^"]*)" to 'Item Description' textbox at 'Create Credit Note' page$/, (itemDescription) => {
    cnPage.enterValueToItemDescriptionTextbox(itemDescription)
})

When(/^I input "([^"]*)" to 'Model' textbox at 'Create Credit Note' page$/, (model) => {
    cnPage.enterValueToModelTextbox(model)
})

When(/^I input "([^"]*)" to 'Size' textbox at 'Create Credit Note' page$/, (size) => {
    cnPage.enterValueToSizeTextbox(size)
})

When(/^I input "([^"]*)" to 'Brand' textbox at 'Create Credit Note' page$/, (brand) => {
    cnPage.enterValueToBrandTextbox(brand)
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

When(/^I input credit note date as next "([^"]*)" days to 'Credit Note Date' textbox at 'Create Credit Note' page$/, (date) => {
    cnPage.enterValueToCreditNoteDateTextbox(commonAction.getDateFormat4(date))
})

When(/^"([^"]*)" input INV No to filter INV in 'Credit Notes' list$/, (account) => {
    cnPage.enterValueToFilterInvNumberInList(sessionStorage.getItem("invNumberList"), account)
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

When(/^I check "([^"]*)" radio button to choose 'Reference to Existing Invoice' option at 'Create Credit Note' page$/, (option) => {
    cnPage.checkToChooseReferenceToExistingInvoice(option)
})

When(/^I select "([^"]*)" from 'Approval Route' dropdown at 'Credit Note Details' page$/, (approvalRoute) => {
    cnPage.selectValueFromApprovalRouteDropdown(approvalRoute)
})

When(/^I select "([^"]*)" from 'Supplier Code' dropdown at 'Create Credit Note' page$/, (supplierCode) => {
    cnPage.selectSupplierCodeFromDropdown(supplierCode)
})

When(/^I select "([^"]*)" from 'Buyer Code' dropdown at 'Create Credit Note' page$/, (buyerCode) => {
    cnPage.selectBuyerCodeFromDropdown(buyerCode)
})

When(/^I select INV No from 'Reference Invoice' dropdown at 'Create Credit Note' page$/, () => {
    cnPage.selectReferenceInvNoFromDropdown(sessionStorage.getItem("invNumberList"))
})

When(/^I select "([^"]*)" from 'UOM' dropdown at 'Create Credit Note' page$/, (uom) => {
    cnPage.selectValueFromUomDropdown(uom)
})

When(/^I select "([^"]*)" from 'Tax Code' dropdown at 'Create Credit Note' page$/, (taxCode) => {
    cnPage.selectValueFromTaxCodeDropdown(taxCode)
})

When(/^I select "([^"]*)" from 'Currency' dropdown at 'Create Credit Note' page$/, (currency) => {
    cnPage.selectValueFromCurrencyDropdown(currency)
})

When(/^I select "([^"]*)" from 'GL Account' dropdown at 'Create Credit Note' page$/, (glCode) => {
    cnPage.selectValueFromGlCodeDropdown(glCode)
})

When(/^I click to 'Reject' button in 'Reason Dialog Box' at 'Credit Note Details' page$/, () => {
    cnPage.clickToRejectButton()
})

When(/^I click to "([^"]*)" button "([^"]*)" times at 'Credit Note' page$/, (btn, times) => {
    cnPage.clickToTaxAdjustmentButton(btn, times)
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

Then(/^I see "([^"]*)" button disappear at 'Credit Note' page$/, (btn) => {
    cnPage.verifyItemTaxAdjustmentButtonDisappear(btn)
})

Then(/^"([^"]*)" see company name "([^"]*)" at 'Create Credit Note' page$/, (roleName, companyName) => {
    cnPage.verifyValueInCompanyNameTextboxExits(roleName, companyName)
})

Then(/^I see 'Item Delete' button in 'Add Item' table at 'Create Invoice' page$/, () => {
    cnPage.verifyItemDeleteButtonInTableDisplay()
})

Then(/^I see 'Reference Invoice' field disappear at 'Create Credit Note' page$/, () => {
    cnPage.verifyReferenceInvoiceFieldDisappear()
})

Then(/^I see the item in 'Add Item' table at 'Create Credit Note' page is deleted$/, () => {
    cnPage.verifyItemDeleteButtonInTableIsDeleted()
})

Then(/^I see 'Approval Route' dropdown at 'Credit Note Details' page is disabled$/, () => {
    cnPage.verifyApprovalRouteDropdownIsDisable()
})

Then(/^I see pop-up appears to show preview of credit note$/, () => {
    cnPage.verifyPopUpPreviewCreditNoteDisplay()
})

Then(/^I see a validation text of 'Credit Note Number' "([^"]*)" appears at 'Create Credit Note' page$/, (validation) => {
    cnPage.getValidationTextCreditNoteNumber().should('have.text', validation)
})

Then(/^I see a validation text of 'Buyer Code' "([^"]*)" appears at 'Create Credit Note' page$/, (validation) => {
    cnPage.getValidationTextBuyerCode().should('have.text', validation)
})

Then(/^I see a validation text of 'Supplier Code' "([^"]*)" appears at 'Create Credit Note' page$/, (validation) => {
    cnPage.getValidationTextSupplierCode().should('have.text', validation)
})

Then(/^I see a validation text of 'Reference Invoice' "([^"]*)" appears at 'Create Credit Note' page$/, (validation) => {
    cnPage.getValidationTextReferenceInvoice().should('have.text', validation)
})

Then(/^I see credit note status in list is "([^"]*)"$/, (status) => {
    cnPage.getCreditNoteStatusInList().should('have.text', status)
})