import CommonAction from '../commons/common_actions'
import UrlPageLocator from '../PageUI/urlPageUI'
import InvPageLocator from '../PageUI/inv_pageUI'
import CommonPageLocator from '../PageUI/commonPageUI'

var printf = require('printf')
var dataBuyer = require('../../../dataBuyer.json');

const commonAction = new CommonAction()
const invPageLocator = new InvPageLocator()
const urlPageLocator = new UrlPageLocator()
const commonPageLocator = new CommonPageLocator()

class InvPage{
    constructor() {
        this.env = 'stag'
    }

    enterValueToFilterDoInSelectPoTable(doNumber){
        commonAction.enterValueToTextbox(invPageLocator.filter_do_number_in_select_po_table_css, doNumber)
    }

    enterValueToFilterPoInSelectPoTable(poNumber){
        commonAction.wait(1)
        commonAction.clickToElementByXpath(invPageLocator.filter_po_number_in_select_po_table_xpath)
        commonAction.enterValueToTextboxByXpath(invPageLocator.filter_po_number_in_select_po_table_xpath, poNumber)
    }

    enterValueToInvoiceNoTextbox(invNumber){
        commonAction.enterValueToTextbox(invPageLocator.inv_number_txb_css, invNumber)
    }

    enterValueToFilterPoInInvoiceApprovalList(poNumber){
        commonAction.enterValueToTextbox(invPageLocator.filter_po_number_in_inv_approval_list_css, poNumber)
    }

    enterValueToFilterInvNumberInList(invNumber, listName){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        let urlRequest
        switch (listName) {
            case "INV Pending Approval":
                urlRequest = printf(urlPageLocator.inv_pending_approval_list_url, this.env, buyerCompanyUuid)
                break;
        
            case "INV":
                urlRequest = printf(urlPageLocator.inv_list_url, this.env, buyerCompanyUuid)
                break;

            default:
                break;
        }
        cy.request({
            method: 'GET',
            url: urlRequest,
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
            commonAction.wait(1)
            commonAction.enterValueToTextbox(invPageLocator.filter_inv_number_in_list_css, invNumber)
        })
    }

    enterValueToInvoiceDateTextbox(date){
        commonAction.enterValueToTextbox(invPageLocator.inv_date_txb_css, date)
    }

    enterValueToInvoiceDueDateTextbox(date){
        commonAction.enterValueToTextbox(invPageLocator.inv_due_date_txb_css, date)
    }

    enterValueToInvoiceQuantityTextbox(quantity){
        commonAction.wait(2)
        this.scrollToElementInAddedPoTable("20%")
        commonAction.clickToElement(invPageLocator.filter_inv_quantity_in_added_po_table_css)
        commonAction.doubleClickToElement(invPageLocator.inv_quantity_in_added_po_table_css)
        commonAction.doubleClickToElement(invPageLocator.inv_quantity_in_added_po_table_css)
        commonAction.enterValueToTextboxAfterClearByXpath(invPageLocator.inv_quantity_txb_in_added_po_table_xpath, quantity)
    }

    enterValueToInvoiceUnitPriceTextbox(price){
        commonAction.wait(2)
        this.scrollToElementInAddedPoTable("20%")
        commonAction.doubleClickToElement(invPageLocator.inv_unit_price_in_list_css)
        commonAction.enterValueToTextboxAfterClearByXpath(invPageLocator.inv_unit_price_txb_in_added_po_table_xpath, price)
    }

    enterValueToInvoiceItemNameTextbox(name){
        commonAction.wait(2)
        commonAction.doubleClickToElementByXpath(invPageLocator.item_name_in_added_po_table_xpath)
        commonAction.enterValueToTextboxAfterClearByXpath(invPageLocator.item_name_txb_in_added_po_table_xpath, name)
        commonAction.clickToElement(invPageLocator.filter_inv_item_name_in_added_po_table_css)
    }

    enterValueToInvoiceItemNameFilter(name){
        commonAction.wait(2)
        this.scrollToElementInAddedPoTable("0%")
        commonAction.clickToElement(invPageLocator.filter_inv_item_name_in_added_po_table_css)
        commonAction.enterValueToTextboxAfterClear(invPageLocator.filter_inv_item_name_in_added_po_table_css, name)
    }

    enterValueToExpectedAmountTextbox(value){
        commonAction.wait(2)
        commonAction.doubleClickToElement(invPageLocator.expected_amount_txb_css)
        commonAction.enterValueToTextboxAfterClear(invPageLocator.expected_amount_txb_css, value)
    }

    selectValueFromTaxCodeDropdown(taxCode) {
        this.scrollToElementInAddedPoTable("30%")
        commonAction.doubleClickToElementByXpath(invPageLocator.tax_code_dropdown_xpath)
        commonAction.doubleClickToElementByXpath(invPageLocator.tax_code_dropdown_xpath)
        commonAction.clickToElementByXpath(printf(invPageLocator.option_item_from_dropdown_xpath, taxCode))
        // commonAction.selectOptionFromDropdownByXpath(invPageLocator.tax_code_dropdown_xpath, printf(invPageLocator.option_item_from_dropdown_xpath, taxCode))
        commonAction.clickToElementByXpath(printf(commonPageLocator.text_xpath, "Tax Code"))
    } 

    selectValueFromInvoiceTypeDropdown(invoiceType){
        commonAction.selectValueFromElement(invPageLocator.inv_type_dropdown_css, invoiceType)
    }

    selectValueFromApprovalRouteDropdown(approvalRoute){
        commonAction.selectValueFromElement(invPageLocator.approval_route_dropdown_css, approvalRoute)
    }

    selectValueFromGlCodeDropdown(glCode){
        this.scrollToInItemTable("100%")
        commonAction.selectOptionFromDropdownByXpath(invPageLocator.gl_code_in_table_xpath, printf(invPageLocator.option_item_from_dropdown_xpath, glCode))
        commonAction.clickToElementByXpath(printf(commonPageLocator.text_xpath, "G/L Account"))
    }

    selectSupplierCodeFromDropdown(supplierCode){
        commonAction.clickToElementByXpath(invPageLocator.supplier_code_dropdown_xpath)
        commonAction.wait(2)
        commonAction.clickToElementByXpath(printf(commonPageLocator.option_result_xpath, supplierCode))
        commonAction.wait(5)
    }

    doubleClickToInvoiceInList(invNumber){
        commonAction.doubleClickToElementByXpath(printf(invPageLocator.inv_number_in_list_xpath, invNumber))
    }

    clickToPlusTaxButton() {
        commonAction.clickToElementByXpath(invPageLocator.tax_plus_btn_xpath)
    }

    clickToItemDeleteButton() {
        this.scrollToElementInAddedPoTable("0%")
        commonAction.clickToElementByXpath(invPageLocator.item_delete_btn_xpath)
    }

    checkToPoNumberCheckbox(poNumber){
        commonAction.checkCheckboxByXpath(printf(invPageLocator.po_number_checkbox_in_select_po_table_xpath, poNumber))
    }

    checkToExpectedAmountCheckbox(){
        commonAction.clickToElementByXpath(invPageLocator.expected_amount_checkbox_xpath)
    }

    verifyValueInCompanyNameTextboxExits(value){
        commonAction.verifyValueInTextboxExist(invPageLocator.company_name_txb_css, value)
    }

    verifyCreateInvoicePageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(invPageLocator.create_inv_page_title_xpath)
    }

    verifyItemDeleteButtonDisplay() {
        this.scrollToElementInAddedPoTable("0%")
        commonAction.verifyElementByXpathVisible(invPageLocator.item_delete_btn_xpath)
    }

    verifyInvoiceListPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(invPageLocator.invoice_list_page_title_xpath)
    }

    verifyPopUpPreviewInvoiceDisplay(){
        commonAction.verifyElementByXpathVisible(invPageLocator.header_preview_invoice_xpath)
    }

    verifyInvoiceApprovalPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(invPageLocator.inv_pending_approval_page_title_xpath)
    }

    verifyInvoicePendingApprovalListPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(invPageLocator.inv_pending_approval_list_xpath)
    }

    verifyPoNumberInAddedPoTableDisplay(poNumber){
        commonAction.verifyElementByXpathVisible(printf(invPageLocator.po_number_in_added_po_table_xpath, poNumber))
    }

    verifyValueInvoiceSubTotalDisplay(value) {
        commonAction.verifyElementByXpathVisible(printf(invPageLocator.sub_total_invoice_value_xpath, value))
    }

    verifyValueInvoiceTotalDisplay(value) {
        commonAction.verifyElementByXpathVisible(printf(invPageLocator.total_invoice_value_xpath, value))
    }

    verifyValueInvoiceTaxDisplay(value) {
        commonAction.verifyElementByXpathVisible(printf(invPageLocator.tax_invoice_value_xpath, value))
    }

    verifyValueInInvoiceNumberTextboxExits(invNumber){
        commonAction.verifyValueInTextboxExist(invPageLocator.inv_number_txb_css, invNumber)
    }

    verifyInvoiceStatusInListDisplay(){
        return commonAction.getTextElement(invPageLocator.inv_status_in_list_css)
    }

    verifyInvoiceTypeInListDisplay(){
        return commonAction.getTextElement(invPageLocator.inv_type_in_list_css)
    }

    verifyMatchingInListDisplay(){
        return commonAction.getTextElement(invPageLocator.matching_in_list_css)
    }

    verifyValidationTextInvoiceTypeDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(invPageLocator.validation_text_invoice_type_xpath, validation))
    }

    verifyValidationTextDueDateDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(invPageLocator.validation_text_due_date_xpath, validation))
    }

    verifyValidationTextSupplierDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(invPageLocator.validation_text_supplier_xpath, validation))
    }

    scrollToInItemTable(position){
        commonAction.scrollToPositionElement(invPageLocator.scroll_bar_in_item_table_xpath, position)
    }

    scrollToElementInAddedPoTable(position){
        commonAction.scrollToPositionElement(invPageLocator.scroll_bar_in_added_po_table_xpath, position)
    }

}export default InvPage