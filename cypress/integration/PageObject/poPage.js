import CommonAction from '../commons/common_actions'
import PoPageLocator from '../PageUI/poPageUI'
import UrlPageLocator from '../PageUI/urlPageUI'

var printf = require('printf')
var dataBuyer = require('../../../dataBuyer.json');
var dataSupplier = require('../../../dataSupplier.json');

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

    enterValueToCancelReasonTextbox(reason){
        commonAction.enterValueToTextbox(poPageLocator.cancel_po_reason_txb_css, reason)
    }

    enterValueToRejectTextbox(reason){
        commonAction.enterValueToTextbox(poPageLocator.reject_po_reason_txb_css, reason)
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

    verifyValueInPrNumberTextboxExits(prNumber){
        commonAction.verifyValueInTextboxExist(poPageLocator.pr_number_txb_css, prNumber)
    }

    verifyValueInPoNumberTextboxExits(poNumber){
        commonAction.verifyValueInTextboxExist(poPageLocator.po_number_txb_css, poNumber)
    }

    verifyPrConvertDetailPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(poPageLocator.pr_convert_detail_page_title_xpath)
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

    scrollToElementInPoList(position){
        commonAction.scrollToPositionElement(poPageLocator.scroll_bar_in_po_list_xpath, position)
    }

}export default PoPage