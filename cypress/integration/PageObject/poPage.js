import CommonAction from '../commons/common_actions'
import PoPageLocator from '../PageUI/poPageUI'

var printf = require('printf')
const commonAction = new CommonAction()
const poPageLocator = new PoPageLocator()

class PoPage{

    enterValueToFilterPoInList(poNumber){
        commonAction.enterValueToTextbox(poPageLocator.filter_po_in_list_css, poNumber)
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

    verifyPrToBeConvertedPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(poPageLocator.pr_to_be_converted_page_title_xpath)
    }

    verifyPrConvertDetailPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(poPageLocator.pr_convert_detail_page_title_xpath)
    }

    verifyPoDetailPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(poPageLocator.po_detail_page_title_xpath)
    }

    verifyPoStatusInListDisplay(status){
        commonAction.verifyElementByXpathVisible(printf(poPageLocator.po_status_in_list_xpath, status))
    }

    verifySupplierAckStatusInListDisplay(status){
        commonAction.verifyElementByXpathVisible(printf(poPageLocator.supplier_ack_status_in_list_xpath, status))
    }

    verifyNotificationPoDisplay(notification){
        commonAction.verifyElementByXpathVisible(printf(poPageLocator.notification_po_xpath, notification))
    }

}export default PoPage