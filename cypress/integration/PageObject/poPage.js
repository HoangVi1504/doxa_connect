import CommonAction from '../commons/common_actions'
import PoPageLocator from '../PageUI/poPageUI'
import UrlPageLocator from '../PageUI/urlPageUI'

var printf = require('printf')
var dataBuyer = require('../../../dataBuyer.json');
var dataSupplier = require('../../../dataSupplier.json');
var dataUnconnectedSupplier = require('../../../dataUnconnectedSupplier.json');

const commonAction = new CommonAction()
const poPageLocator = new PoPageLocator()
const urlPageLocator = new UrlPageLocator()
class PoPage{
    constructor() {
        this.env = 'stag'
    }
    
    enterValueToFilterPoNumberInList(roleName, poNumber, listName){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        let supplierCompanyUuid = dataSupplier.supplierCompanyUuid
        let unconnectedSupplierUuid = dataUnconnectedSupplier.supplierCompanyUuid
        let urlRequest
        switch (listName) {
            case "PO":
                switch (roleName) {
                    case "buyer":
                        urlRequest = printf(urlPageLocator.po_list_url, this.env, buyerCompanyUuid, roleName)
                        break;

                    case "supplier":
                        urlRequest = printf(urlPageLocator.po_list_url, this.env, supplierCompanyUuid, roleName)
                        break;

                    case "Unconnected Supplier":
                        urlRequest = printf(urlPageLocator.po_list_url, this.env, unconnectedSupplierUuid, "supplier")
                        break;
                
                    default:
                        break;
                }
                break;

            case "Create GR From PO":
                urlRequest = printf(urlPageLocator.create_gr_from_po_list_url, this.env, buyerCompanyUuid, roleName)
                break;

            case "Create DO":
                urlRequest = printf(urlPageLocator.create_do_list_url, this.env, supplierCompanyUuid)
                break;

            case "DO":
                urlRequest = printf(urlPageLocator.do_list_url, this.env, supplierCompanyUuid)
                break;

            case "INV Pending Approval":
                urlRequest = printf(urlPageLocator.inv_pending_approval_list_url, this.env, buyerCompanyUuid)
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
            commonAction.enterValueToTextbox(poPageLocator.filter_po_number_in_list_css, poNumber)
        })
    }

    enterValueToFilterRfqNoInPoList(rfqNumber){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.po_list_url, this.env, buyerCompanyUuid, "buyer"),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
            commonAction.wait(1)
            commonAction.clickToElement(poPageLocator.filter_rfq_number_in_list_css)
            commonAction.enterValueToTextbox(poPageLocator.filter_rfq_number_in_list_css, rfqNumber)
        })
    }

    enterValueToCancelReasonTextbox(reason){
        commonAction.enterValueToTextbox(poPageLocator.cancel_po_reason_txb_css, reason)
    }

    enterValueToRejectTextbox(reason){
        commonAction.enterValueToTextbox(poPageLocator.reject_po_reason_txb_css, reason)
    }

    enterValueToUnitPriceInPoItem(price){
        commonAction.clickToElement(poPageLocator.filter_item_code_in_po_item_css)
        this.scrollToElementInPoItem("40%")
        commonAction.clickToElementByXpath(poPageLocator.item_unit_price_xpath)
        commonAction.enterValueToTextboxAfterClearByXpath(poPageLocator.item_unit_price_xpath, price)
    }

    enterValueToItemQuantityInPoItem(quantity){
        commonAction.clickToElement(poPageLocator.filter_item_code_in_po_item_css)
        this.scrollToElementInPoItem("60%")
        commonAction.clickToElementByXpath(poPageLocator.item_quantity_xpath)
        commonAction.enterValueToTextboxAfterClearByXpath(poPageLocator.item_quantity_xpath, quantity)
    }

    selectValueFromApprovalRouteDropdown(value){
        commonAction.selectValueFromElement(poPageLocator.approval_route_dropdown_css, value)
    }

    doubleClickToPrNumberInList(prNumber){
        commonAction.doubleClickToElementByXpath(printf(poPageLocator.pr_number_in_list_xpath, prNumber))
    }

    doubleClickToPoNumberInList(poNumber){
        this.scrollToElementInPoList("0%")
        commonAction.doubleClickToElementByXpath(printf(poPageLocator.po_number_in_list_xpath, poNumber))
    }

    clickToMarkCompletedButton(){
        commonAction.clickToElementByXpath(poPageLocator.mark_completed_po_button_xpath)
    }

    clickToRejectButton(){
        commonAction.clickToElementByXpath(poPageLocator.reject_po_button_xpath)
    }

    clickToClosePreviewPoButton(){
        commonAction.clickToElementByXpath(poPageLocator.close_preview_po_button_xpath)
    }

    verifyApprovalRouteDropdownIsDisable(){
        commonAction.verifyElementDisable(poPageLocator.approval_route_dropdown_css)
    }

    verifyValueInPrNumberTextboxExits(prNumber){
        commonAction.verifyValueInTextboxExist(poPageLocator.pr_number_txb_css, prNumber)
    }

    verifyValueInPoNumberTextboxExits(poNumber){
        commonAction.verifyValueInTextboxExist(poPageLocator.po_number_txb_css, poNumber)
    }

    verifyPrConvertDetailPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(poPageLocator.pr_convert_detail_page_title_xpath)
    }

    verifyPprConvertListPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(poPageLocator.ppr_convert_list_page_title_xpath)
    }

    verifyPprConvertDetailPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(poPageLocator.ppr_convert_detail_page_title_xpath)
    }

    verifyPoDetailPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(poPageLocator.po_detail_page_title_xpath)
    }

    verifyPoListPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(poPageLocator.po_list_page_title_xpath)
    }

    verifyPoStatusInListDisplay(status){
        commonAction.verifyElementByXpathVisible(printf(poPageLocator.po_status_in_list_xpath, status))
    }

    verifySupplierAckStatusInListDisplay(status){
        this.scrollToElementInPoList("20%")
        commonAction.verifyElementByXpathVisible(printf(poPageLocator.supplier_ack_status_in_list_xpath, status))
    }

    verifyNotificationPoDisplay(notification){
        commonAction.verifyElementByXpathVisible(printf(poPageLocator.notification_po_xpath, notification))
    }

    verifyPoNumberInPreviewPoDisplay(poNumber){
        commonAction.verifyElementByXpathVisible(printf(poPageLocator.po_number_in_preview_po_xpath, poNumber))
    }

    scrollToElementInPoList(position){
        commonAction.scrollToPositionElement(poPageLocator.scroll_bar_in_po_list_xpath, position)
    }

    scrollToElementInPoItem(position){
        commonAction.scrollToPositionElement(poPageLocator.scroll_bar_in_po_item_table_xpath, position)
    }

}export default PoPage