import CommonAction from '../commons/common_actions'
import UrlPageLocator from '../PageUI/urlPageUI'
import CommonPageLocator from '../PageUI/commonPageUI'
import CreditNotePageLocator from '../PageUI/cnPageUI'

var printf = require('printf')
var dataBuyer = require('../../../dataBuyer.json');

const commonAction = new CommonAction()
const urlPageLocator = new UrlPageLocator()
const cnPageLocator = new CreditNotePageLocator()
const commonPageLocator = new CommonPageLocator()

class CreditNotePage{
    constructor() {
        this.env = 'stag'
    }

    enterValueToFilterInvNumberInList(invNumber){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        let urlRequest
        urlRequest = printf(urlPageLocator.cn_list_url, this.env, buyerCompanyUuid)
        cy.request({
            method: 'GET',
            url: urlRequest,
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
            this.scrollToInItemTable("40%")
            commonAction.wait(1)
            commonAction.enterValueToTextbox(cnPageLocator.filter_inv_number_in_list_css, invNumber)
            this.scrollToInItemTable("0%")
        })
    }

    enterValueToFilterCnNumberInList(cnNumber){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        let urlRequest
        urlRequest = printf(urlPageLocator.cn_list_url, this.env, buyerCompanyUuid)
        cy.request({
            method: 'GET',
            url: urlRequest,
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
            commonAction.enterValueToTextbox(cnPageLocator.filter_cn_number_in_list_css, cnNumber)
        })
    }

    enterValueToItemQuantityTextbox(quantity){
        commonAction.wait(2)
        commonAction.doubleClickToElement(cnPageLocator.cn_quantity_in_table_css)
        commonAction.doubleClickToElement(cnPageLocator.cn_quantity_in_table_css)
        commonAction.enterValueToTextboxAfterClearByXpath(cnPageLocator.quantity_txb_in_table_xpath, quantity)
        commonAction.clickToElementByXpath(printf(commonPageLocator.text_xpath, "Quantity"))
    }

    enterValueToCreditNoteDateTextbox(date){
        commonAction.enterValueToTextbox(cnPageLocator.cn_date_txb_css, date)
    }

    enterValueToReasonTextbox(reason) {
        commonAction.clickToElement(cnPageLocator.cn_reject_reason_txb_css)
        commonAction.enterValueToTextbox(cnPageLocator.cn_reject_reason_txb_css, reason)
    }

    doubleClickToCnInList(cnNumber){
        commonAction.doubleClickToElementByXpath(printf(cnPageLocator.cn_number_in_list_xpath, cnNumber))
    }

    selectValueFromApprovalRouteDropdown(approvalRoute){
        commonAction.selectValueFromElement(cnPageLocator.approval_route_dropdown_css, approvalRoute)
    }

    selectSupplierCodeFromDropdown(supplierCode){
        commonAction.clickToElementByXpath(cnPageLocator.supplier_code_dropdown_xpath)
        commonAction.wait(2)
        commonAction.clickToElementByXpath(printf(commonPageLocator.option_result_xpath, supplierCode))
        commonAction.wait(5)
    }

    selectReferenceInvNoFromDropdown(invNumber){
        commonAction.selectValueFromElement(cnPageLocator.reference_inv_dropdown_css, invNumber)
    }

    selectValueFromGlCodeDropdown(glCode){
        this.scrollToInItemTable("50%")
        commonAction.selectOptionFromDropdownByXpath(cnPageLocator.gl_account_in_table_xpath, printf(commonPageLocator.option_value_in_dropdown_xpath, glCode))
        commonAction.clickToElementByXpath(printf(commonPageLocator.text_xpath, "G/L Account"))
    }

    clickToRejectButton(){
        commonAction.clickToElementByXpath(cnPageLocator.reject_cn_btn_xpath)
    }

    verifyCreditNoteNumberTextboxExits(cnNumber) {
        commonAction.verifyValueInTextboxExist(cnPageLocator.cn_number_txb_css, cnNumber)
    }

    verifyValueInCompanyNameTextboxExits(value){
        commonAction.verifyValueInTextboxExist(cnPageLocator.company_name_txb_css, value)
    }

    verifyCreateCreditNotePageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(cnPageLocator.create_cn_page_title_xpath)
    }

    verifyCreditNoteDetailPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(cnPageLocator.cn_detail_page_title_xpath)
    }

    verifyCreditNoteListPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(cnPageLocator.credit_note_list_page_title_xpath)
    }

    verifyPopUpPreviewCreditNoteDisplay(){
        commonAction.verifyElementByXpathVisible(cnPageLocator.header_preview_cn_xpath)
    }

    getCnStatusInList(){
        return commonAction.getTextElement(cnPageLocator.cn_status_in_list_css)
    }

    scrollToInItemTable(position){
        commonAction.scrollToPositionElement(cnPageLocator.scroll_bar_in_item_table_xpath, position)
    }
}export default CreditNotePage