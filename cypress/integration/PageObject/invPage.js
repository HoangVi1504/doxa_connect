import CommonAction from '../commons/common_actions'
import InvPageLocator from '../PageUI/inv_pageUI'
import CommonPageLocator from '../PageUI/commonPageUI'

var printf = require('printf')
const commonAction = new CommonAction()
const invPageLocator = new InvPageLocator()
const commonPageLocator = new CommonPageLocator()

class InvPage{

    enterValueToFilterDoInSelectPoTable(doNumber){
        commonAction.enterValueToTextbox(invPageLocator.filter_do_number_in_select_po_table_css, doNumber)
    }

    enterValueToFilterPoInSelectPoTable(poNumber){
        commonAction.enterValueToTextboxByXpath(invPageLocator.filter_po_number_in_select_po_table_xpath, poNumber)
    }

    enterValueToFilterPoInInvoiceApprovalList(poNumber){
        commonAction.enterValueToTextbox(invPageLocator.filter_po_number_in_inv_approval_list_css, poNumber)
    }

    enterValueToFilterInvInList(invNumber){
        commonAction.enterValueToTextbox(invPageLocator.filter_inv_number_in_list_css, invNumber)
    }

    enterValueToInvoiceDateTextbox(date){
        commonAction.enterValueToTextbox(invPageLocator.inv_date_txb_css, date)
    }

    enterValueToInvoiceDueDateTextbox(date){
        commonAction.enterValueToTextbox(invPageLocator.inv_due_date_txb_css, date)
    }

    enterValueToInvoiceQuantityTextbox(quantity){
        commonAction.wait(2)
        commonAction.clickToElement(invPageLocator.filter_inv_quantity_in_added_po_table_css)
        commonAction.doubleClickToElement(invPageLocator.inv_quantity_in_list_css)
        commonAction.doubleClickToElement(invPageLocator.inv_quantity_in_list_css)
        commonAction.enterValueToTextboxAfterClearByXpath(invPageLocator.inv_quantity_txb_in_added_po_table_xpath, quantity)
    }

    selectValueFromTaxCodeDropdown(taxCode){
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

    checkToPoNumberCheckbox(poNumber){
        commonAction.checkCheckboxByXpath(printf(invPageLocator.po_number_checkbox_in_select_po_table_xpath, poNumber))
    }

    verifyValueInCompanyNameTextboxExits(value){
        commonAction.verifyValueInTextboxExist(invPageLocator.company_name_txb_css, value)
    }

    verifyCreateInvoicePageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(invPageLocator.create_inv_page_title_xpath)
    }

    verifyInvoiceApprovalPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(invPageLocator.inv_approval_page_title_xpath)
    }

    verifyPoNumberInAddedPoTableDisplay(poNumber){
        commonAction.verifyElementByXpathVisible(printf(invPageLocator.po_number_in_added_po_table_xpath, poNumber))
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

    scrollToInItemTable(position){
        commonAction.scrollToPositionElement(invPageLocator.scroll_bar_in_item_table_xpath, position)
    }

    scrollToElementInAddedPoTable(position){
        commonAction.scrollToPositionElement(invPageLocator.scroll_bar_in_added_po_table_xpath, position)
    }

}export default InvPage