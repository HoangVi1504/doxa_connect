import CommonAction from '../commons/common_actions'
import GrPageLocator from '../PageUI/grPageUI'
import CommonPageLocator from '../PageUI/commonPageUI'

var printf = require('printf')
const commonAction = new CommonAction()
const grPageLocator = new GrPageLocator()
const commonPageLocator = new CommonPageLocator()

class GrPage{

    enterValueToDoNumberTextbox(doNumber){
        commonAction.enterValueToTextbox(grPageLocator.delivery_order_txb_css, doNumber)
    }

    enterValueToDeliveryDateTextbox(date){
        commonAction.enterValueToTextbox(grPageLocator.delivery_date_txb_css, date)
    }

    enterValueToItemQuantityReceiving(quantity){
        this.scrollToInItemTable("90%")
        commonAction.clickToElement(grPageLocator.item_quantity_receiving_css)
        commonAction.enterValueToTextbox(grPageLocator.item_quantity_receiving_css, quantity)
    }

    enterValueToFilterGrInList(grNumber){
        commonAction.enterValueToTextbox(grPageLocator.filter_gr_in_list_css, grNumber)
    }

    enterValueToFilterDoInList(doNumber){
        commonAction.enterValueToTextbox(grPageLocator.filter_order_processed_in_list_css, doNumber)
    }

    selectValueFromApprovalRouteDropdown(value){
        commonAction.clickToElementByXpath(printf(commonPageLocator.text_xpath, "Approval Route"))
        commonAction.wait(2)
        commonAction.selectValueFromElement(grPageLocator.approval_route_dropdown_css, value)
    }

    doubleClickToGrNumberInList(grNumber){
        commonAction.doubleClickToElementByXpath(printf(grPageLocator.gr_number_in_list_xpath, grNumber))
    }
    
    checkToPoNumberCheckbox(){
        commonAction.checkCheckbox(grPageLocator.po_number_checkbox_css)
    }

    verifyGrStatusInListDisplay(){
        return commonAction.getTextElement(grPageLocator.gr_status_in_list_css)
    }

    verifyApprovalRouteInListDisplay(){
        return commonAction.getTextElement(grPageLocator.approval_route_in_list_css)
    }

    verifyValueInGrNumberTextboxExits(grNumber){
        commonAction.verifyValueInTextboxExist(grPageLocator.gr_number_txb_css, grNumber)
    }

    verifyValueInDoNumberTextboxExits(doNumber){
        commonAction.verifyValueInTextboxExist(grPageLocator.do_number_txb_css, doNumber)
    }

    verifyCreateGrFromPoPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(grPageLocator.create_gr_from_po_page_title_xpath)
    }

    verifyCreateGrFromDoPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(grPageLocator.create_gr_from_do_page_title_xpath)
    }

    verifyGrDetailPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(grPageLocator.gr_detail_page_title_xpath)
    }

    verifyValidationTextDoNumberDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(grPageLocator.validation_text_delivery_order_number_xpath, validation))
    }

    verifyValidationTextDeliveryDateDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(grPageLocator.validation_text_delivery_date_xpath, validation))
    }

    verifyValidationTextApprovalRouteDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(grPageLocator.validation_text_approval_route_xpath, validation))
    }

    scrollToInItemTable(position){
        commonAction.scrollToPositionElement(grPageLocator.scroll_bar_in_item_table_xpath, position)
    }

}export default GrPage