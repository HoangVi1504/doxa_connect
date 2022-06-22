import CommonAction from '../commons/common_actions'
import DoPageLocator from '../PageUI/doPageUI'

var printf = require('printf')
const commonAction = new CommonAction()
const doPageLocator = new DoPageLocator()

class DoPage{

    enterValueToFilterDoInDoList(doNumber){
        commonAction.enterValueToTextbox(doPageLocator.filter_do_in_list_css, doNumber)
    }

    enterValueToDeliveryDateTextbox(date){
        commonAction.enterValueToTextbox(doPageLocator.delivery_date_txb_css, date)
    }

    enterValueToQuantityConvertTextbox(quantity){
        commonAction.clickToElement(doPageLocator.quantity_to_convert_txb_css)
        commonAction.enterValueToTextbox(doPageLocator.quantity_to_convert_txb_css, quantity)
    }

    doubleClickToDoNumberInList(doNumber){
        commonAction.doubleClickToElementByXpath(printf(doPageLocator.do_number_in_do_list_xpath, doNumber))
    }

    checkToPoNumberCheckbox(){
        commonAction.checkCheckbox(doPageLocator.po_number_checkbox_css)
    }

    checkToDoNumberCheckbox(){
        commonAction.checkCheckbox(doPageLocator.do_number_checkbox_css)
    }

    verifyDoStatusInCreateDoList(){
        return commonAction.getTextElement(doPageLocator.do_status_in_create_do_list_css)
    }

    verifyDoStatusInListDisplay(){
        return commonAction.getTextElement(doPageLocator.do_status_in_list_css)
    }

    verifyCreateDoPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(doPageLocator.delivery_order_page_title_xpath)
    }

    verifyDoDetailsPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(doPageLocator.delivery_order_details_page_title_xpath)
    }

    verifyValueInDoNumberTextboxExits(doNumber){
        commonAction.verifyValueInTextboxExist(doPageLocator.do_number_txb_css, doNumber)
    }

    verifyValidationTextDeliveryDateDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(doPageLocator.validation_text_delivery_date_xpath, validation))
    }

}export default DoPage