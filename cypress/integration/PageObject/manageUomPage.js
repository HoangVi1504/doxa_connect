import CommonAction from '../commons/common_actions'
import ManageUomPageLocator from '../PageUI/manageUomPageUI'

var printf = require('printf')
const commonAction = new CommonAction()
const manageUomPageLocator = new ManageUomPageLocator()

class ManageUomPage{

    enterValueToFilterUomCodeInList(uomCode){
        commonAction.enterValueToTextbox(manageUomPageLocator.filter_uom_code_in_list_css, uomCode)
    }

    enterValueToFilterUomNameInList(uomName){
        commonAction.enterValueToTextbox(manageUomPageLocator.filter_uom_name_in_list_css, uomName)
    }

    enterValueToUomCodeTextbox(uomCode){
        commonAction.enterValueToTextbox(manageUomPageLocator.uom_code_txb_css, uomCode)
    }

    enterValueToUomNameTextbox(uomName){
        commonAction.enterValueToTextbox(manageUomPageLocator.uom_name_txb_css, uomName)
    }

    enterValueToUomDescriptionTextbox(description){
        commonAction.enterValueToTextbox(manageUomPageLocator.uom_description_css, description)
    }

    doubleClickToUomCodeInList(uomCode){
        commonAction.doubleClickToElementByXpath(printf(manageUomPageLocator.uom_code_in_list_xpath, uomCode))
    }

    checkToUomCodeCheckbox(uomCode){
        commonAction.checkCheckboxByXpath(printf(manageUomPageLocator.uom_code_ckb_xpath, uomCode))
    }

    clearValueInUomNameTextbox(){
        commonAction.clearValueInTextbox(manageUomPageLocator.uom_name_txb_css)
    }

    clickToActivateButtonInNotification(){
        commonAction.clickToElementByXpath(manageUomPageLocator.activate_button_in_notification_xpath)
    }

    clickToDeactivateButtonInNotification(){
        commonAction.clickToElementByXpath(manageUomPageLocator.deactivate_button_in_notification_xpath)
    }

    clickToUomActionInList(action){
        commonAction.clickToElementByXpath(printf(manageUomPageLocator.uom_action_in_list_xpath, action))
    }

    verifyCreateNewUomPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(manageUomPageLocator.create_new_uom_page_title_xpath)
        commonAction.wait(1)
    }

    verifyUomDetailPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(manageUomPageLocator.uom_detail_page_title_xpath)
    }

    verifyListUomPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(manageUomPageLocator.list_uom_page_title_xpath)
        commonAction.wait(1)
    }

    verifyUomCodeInListDisplay(uomCode){
        commonAction.verifyElementByXpathVisible(printf(manageUomPageLocator.uom_code_in_list_xpath, uomCode))
    }

    verifyUomActionInListDisplay(action){
        commonAction.verifyElementByXpathVisible(printf(manageUomPageLocator.uom_action_in_list_xpath, action))
    }

    verifyValueInUomCodeTextboxDisplay(uomCode){
        commonAction.verifyValueInTextboxExist(manageUomPageLocator.uom_code_txb_css, uomCode)
    }

    getUomNameInList(){
        return commonAction.getTextElement(manageUomPageLocator.uom_name_in_list_css)
    }

    getUomDescription(){
        return commonAction.getTextElement(manageUomPageLocator.uom_description_in_list_css)
    }

    getUomActiveStatusInList(){
        return commonAction.getTextElement(manageUomPageLocator.uom_active_status_in_list_css)
    }

    getValidationTextUomCode(){
        return commonAction.getTextElementByXpath(manageUomPageLocator.validation_text_uom_code_xpath)
    }

    getValidationTextUomName(){
        return commonAction.getTextElementByXpath(manageUomPageLocator.validation_text_uom_name_xpath)
    }

}export default ManageUomPage