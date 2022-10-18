import CommonAction from '../commons/common_actions'
import UrlPageLocator from '../PageUI/urlPageUI'
import InvPageLocator from '../PageUI/inv_pageUI'
import CommonPageLocator from '../PageUI/commonPageUI'

var printf = require('printf')
var dataBuyer = require('../../../dataBuyer.json');
var dataSupplier = require('../../../dataSupplier.json');

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
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.inv_pending_approval_list_url, this.env, buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
            commonAction.wait(1)
            commonAction.clickToElementByXpath(invPageLocator.filter_po_number_in_inv_approval_list_xpath)
            commonAction.enterValueToTextboxByXpath(invPageLocator.filter_po_number_in_inv_approval_list_xpath, poNumber)
        })
    }

    enterValueToFilterInvNumberInList(invNumber, roleName, listName){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        let supplierCompanyUuid = dataSupplier.supplierCompanyUuid
        let urlRequest
        switch (listName) {
            case "INV Pending Approval":
                urlRequest = printf(urlPageLocator.inv_pending_approval_list_url, this.env, buyerCompanyUuid, roleName)
                break;
        
            case "INV":
                switch (roleName) {
                    case "buyer":
                        urlRequest = printf(urlPageLocator.inv_list_url, this.env, buyerCompanyUuid, roleName)
                        break;
                    
                    case "supplier":
                        urlRequest = printf(urlPageLocator.inv_list_url, this.env, supplierCompanyUuid, roleName)
                        break;
                    
                    default:
                        break;
                }
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
            commonAction.clickToElementByXpath(invPageLocator.filter_inv_number_in_list_xpath)
            commonAction.enterValueToTextboxByXpath(invPageLocator.filter_inv_number_in_list_xpath, invNumber)
        })
    }

    enterValueToInvoiceDateTextbox(date){
        commonAction.enterValueToTextbox(invPageLocator.inv_date_txb_css, date)
    }

    enterValueToInvoiceDueDateTextbox(date){
        commonAction.enterValueToTextbox(invPageLocator.inv_due_date_txb_css, date)
    }

    enterValueToInvoiceQuantityTextbox(quantity, table){
        if (table == "Added PO") {
            commonAction.wait(1)
            this.scrollToElementInAddedPoTable("25%")
        }
        else{
            this.scrollToInItemTable("20%")       
        }
        commonAction.wait(1)
        commonAction.doubleClickToElement(invPageLocator.inv_quantity_in_table_css)
        commonAction.doubleClickToElement(invPageLocator.inv_quantity_in_table_css)
        commonAction.enterValueToTextboxAfterClearByXpath(invPageLocator.inv_quantity_txb_in_table_xpath, quantity)
        commonAction.clickToElement(invPageLocator.filter_inv_unit_price_in_table_css)
    }

    enterValueToInvoiceUnitPriceTextbox(price, table) {
        if (table == "Added PO") {
            this.scrollToElementInAddedPoTable("20%")
        }
        else {
            this.scrollToInItemTable("30%")
        }
        commonAction.wait(1)
        commonAction.doubleClickToElement(invPageLocator.inv_unit_price_in_table_css)
        commonAction.doubleClickToElement(invPageLocator.inv_unit_price_in_table_css)
        commonAction.enterValueToTextboxAfterClearByXpath(invPageLocator.inv_unit_price_txb_in_table_xpath, price)
    }

    enterValueToRejectTextbox(reason) {
        commonAction.clickToElement(invPageLocator.inv_reject_reason_txb_css)
        commonAction.enterValueToTextbox(invPageLocator.inv_reject_reason_txb_css, reason)
    }

    enterValueToInvoiceItemNameTextboxInTable(name, table){
        if (table == "Added PO") {
            commonAction.wait(2)
            commonAction.doubleClickToElementByXpath(invPageLocator.inv_item_name_in_added_po_table_xpath)
        }
        else {
            commonAction.doubleClickToElement(invPageLocator.inv_item_name_in_add_item_table_css)
        }
        commonAction.enterValueToTextboxAfterClearByXpath(invPageLocator.inv_item_name_txb_in_table_xpath, name)
        commonAction.clickToElement(invPageLocator.filter_inv_item_name_in_table_css)
    }

    enterValueToInvoiceItemCodeTextboxInAddItemTable(code){
        commonAction.wait(2)
        commonAction.doubleClickToElement(invPageLocator.inv_item_code_in_add_item_table_css)
        commonAction.doubleClickToElement(invPageLocator.inv_item_code_in_add_item_table_css)
        commonAction.enterValueToTextboxAfterClearByXpath(invPageLocator.inv_item_code_txb_in_add_item_table_xpath, code)
        commonAction.clickToElementByXpath(printf(commonPageLocator.text_xpath, "Item Code"))
    }

    enterValueToInvoiceItemModelTextboxInAddItemTable(model){
        commonAction.doubleClickToElement(invPageLocator.inv_item_model_in_add_item_table_css)
        commonAction.enterValueToTextboxAfterClearByXpath(invPageLocator.inv_item_model_txb_in_add_item_table_xpath, model)
        commonAction.clickToElementByXpath(printf(commonPageLocator.text_xpath, "Model"))
    }

    enterValueToInvoiceItemSizeTextboxInAddItemTable(size){
        commonAction.doubleClickToElement(invPageLocator.inv_item_size_in_add_item_table_css)
        commonAction.enterValueToTextboxAfterClearByXpath(invPageLocator.inv_item_size_txb_in_add_item_table_xpath, size)
        commonAction.clickToElementByXpath(printf(commonPageLocator.text_xpath, "Size"))
    }

    enterValueToInvoiceItemBrandTextboxInAddItemTable(brand){
        commonAction.doubleClickToElement(invPageLocator.inv_item_brand_in_add_item_table_css)
        commonAction.enterValueToTextboxAfterClearByXpath(invPageLocator.inv_item_brand_txb_in_add_item_table_xpath, brand)
        commonAction.clickToElementByXpath(printf(commonPageLocator.text_xpath, "Brand"))
    }

    enterValueToInvoiceItemNameFilterInAddedPoTable(name){
        this.scrollToElementInAddedPoTable("0%")
        commonAction.wait(1)
        commonAction.clickToElement(invPageLocator.filter_inv_item_name_in_table_css)
        commonAction.enterValueToTextboxAfterClear(invPageLocator.filter_inv_item_name_in_table_css, name)
    }

    enterValueToExpectedAmountTextbox(value){
        commonAction.doubleClickToElement(invPageLocator.expected_amount_txb_css)
        commonAction.enterValueToTextboxAfterClear(invPageLocator.expected_amount_txb_css, value)
        commonAction.clickToElementByXpath(printf(commonPageLocator.text_xpath, "Do you have an Expected Amount?"))
    }

    selectValueFromTaxCodeDropdownInTable(taxCode, table) {
        if (table == "Added PO") {
            this.scrollToElementInAddedPoTable("30%")
        }
        else {
            this.scrollToInItemTable("50%")
        }
        commonAction.wait(1)
        commonAction.doubleClickToElementByXpath(invPageLocator.tax_code_dropdown_xpath)
        commonAction.doubleClickToElementByXpath(invPageLocator.tax_code_dropdown_xpath)
        commonAction.clickToElementByXpath(printf(invPageLocator.option_item_from_dropdown_xpath, taxCode))
        commonAction.clickToElement(invPageLocator.filter_inv_item_tax_code_in_table_css)
    }

    selectValueFromUomDropdownInAddItemTable(uom) {
        commonAction.wait(1)
        this.scrollToInItemTable("100%")
        commonAction.doubleClickToElement(invPageLocator.inv_item_uom_dropdown_in_add_item_table_css)
        commonAction.doubleClickToElement(invPageLocator.inv_item_uom_dropdown_in_add_item_table_css)
        commonAction.clickToElementByXpath(printf(invPageLocator.option_item_from_dropdown_xpath, uom))
        commonAction.clickToElementByXpath(printf(commonPageLocator.text_xpath, "UOM"))
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

    selectBuyerCodeFromDropdown(buyerCode){
        commonAction.clickToElementByXpath(invPageLocator.supplier_code_dropdown_xpath)
        commonAction.wait(2)
        commonAction.clickToElementByXpath(printf(commonPageLocator.option_result_xpath, buyerCode))
        commonAction.wait(5)
    }

    doubleClickToInvoiceInList(invNumber){
        commonAction.doubleClickToElementByXpath(printf(invPageLocator.inv_number_in_list_xpath, invNumber))
    }

    clickToRejectButton(){
        commonAction.clickToElementByXpath(invPageLocator.reject_inv_btn_xpath)
    }

    clickToPlusTaxButton() {
        commonAction.clickToElementByXpath(invPageLocator.tax_plus_btn_xpath)
    }

    clickToItemDeleteButtonInTable(table) {
        if (table == "Added PO") {
            this.scrollToElementInAddedPoTable("0%")
        }
        else {
            this.scrollToInItemTable("0%")
        }
        commonAction.clickToElementByXpath(invPageLocator.item_delete_btn_xpath)
    }

    checkToPoNumberCheckbox(poNumber){
        commonAction.checkCheckboxByXpath(printf(invPageLocator.po_number_ckb_in_select_po_table_xpath, poNumber))
    }

    checkToExpectedAmountCheckbox(){
        commonAction.clickToElementByXpath(invPageLocator.expected_amount_ckb_xpath)
    }

    verifyValueInCompanyNameTextboxExits(value){
        commonAction.verifyValueInTextboxExist(invPageLocator.company_name_txb_css, value)
    }

    verifyCreateInvoicePageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(invPageLocator.create_inv_page_title_xpath)
    }

    verifyInvoicePendingApprovalPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(invPageLocator.inv_pending_approval_list_xpath)
    }

    verifyItemDeleteButtonInTableDisplay(table) {
        if (table == "Added PO") {
            this.scrollToElementInAddedPoTable("0%")
        }
        commonAction.verifyElementByXpathVisible(invPageLocator.item_delete_btn_xpath)
    }

    verifyInvoiceListPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(invPageLocator.invoice_list_page_title_xpath)
    }

    verifyInvoiceDetailPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(invPageLocator.invoice_detail_page_title_xpath)
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