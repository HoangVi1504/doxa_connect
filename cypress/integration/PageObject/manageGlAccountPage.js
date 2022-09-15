import CommonAction from '../commons/common_actions'
import ManageGlAccountPageLocator from '../PageUI/manageGlAccountPageUI'

var printf = require('printf')
const commonAction = new CommonAction()
const manageGlAccountPageLocator = new ManageGlAccountPageLocator()

class ManageGlAccountPage{

    enterValueToFilterGlAccountTextbox(glAccount){
        commonAction.enterValueToTextbox(manageGlAccountPageLocator.filter_gl_account_txb_css, glAccount)
    }

    enterValueToGlAccountTextbox(glAccount){
        commonAction.enterValueToTextbox(manageGlAccountPageLocator.gl_account_txb_css, glAccount)
    }

    enterValueToDescriptionGlTextbox(description){
        commonAction.enterValueToTextboxAfterClear(manageGlAccountPageLocator.description_gl_txb_css, description)
    }

    enterValueToCodeTextbox(code){
        commonAction.enterValueToTextbox(manageGlAccountPageLocator.code_txb_css, code)
    }

    enterValueToRemarksTextbox(remark){
        commonAction.enterValueToTextbox(manageGlAccountPageLocator.remark_txb_css, remark)
    }

    doubleClickToGlAccountInList(glAccount){
        commonAction.doubleClickToElementByXpath(printf(manageGlAccountPageLocator.gl_account_in_list_xpath, glAccount))
    }

    checkToGlAccountCheckbox(glAccount){
        commonAction.checkCheckboxByXpath(printf(manageGlAccountPageLocator.gl_account_ckb_xpath, glAccount))
    }

    checkToSetActiveStatusCheckbox(){
        commonAction.checkCheckboxByXpath(manageGlAccountPageLocator.set_active_status_ckb_xpath)
    }

    forceClickToActivateButtonInNotification(){
        commonAction.forceClickToElementByXpath(manageGlAccountPageLocator.activate_button_in_notification_xpath)
    }

    forceClickToDeactivateButtonInNotification(){
        commonAction.forceClickToElementByXpath(manageGlAccountPageLocator.deactivate_button_in_notification_xpath)
    }

    clickToOptionLink(linkName){
        commonAction.clickToElementByXpath(printf(manageGlAccountPageLocator.option_link_xpath, linkName))
    }

    clickToGlAction(action){
        commonAction.clickToElementByXpath(printf(manageGlAccountPageLocator.gl_action_in_list_xpath, action))
    }

    clickToAddCodeButton(){
        commonAction.clickToElementByXpath(manageGlAccountPageLocator.add_code_button_xpath)
    }

    verifyNotificationDisplay(notification){
        commonAction.verifyElementByXpathVisible(printf(manageGlAccountPageLocator.notification_xpath, notification))
    }

    verifyCreateGlAccountPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(manageGlAccountPageLocator.create_gl_account_page_title_xpath)
    }

    verifyGlAccountDetailPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(manageGlAccountPageLocator.gl_account_details_page_title_xpath)
    }

    verifyListGlAccountTitleDisplay(){
        commonAction.verifyElementByXpathVisible(manageGlAccountPageLocator.list_gl_account_page_title_xpath)
        commonAction.wait(2)
    }

    verifyValueInGlAccountTextboxExist(glAccount){
        commonAction.verifyValueInTextboxExist(manageGlAccountPageLocator.gl_account_txb_css, glAccount)
    }

    verifyGlAccountInListDisplay(glAccount){
        commonAction.verifyElementByXpathVisible(printf(manageGlAccountPageLocator.gl_account_in_list_xpath, glAccount))
    }

    verifyGlActionInListDisplay(action){
        commonAction.verifyElementByXpathVisible(printf(manageGlAccountPageLocator.gl_action_in_list_xpath, action))
    }

    getDescriptionGlAccountInList(){
        return commonAction.getTextElement(manageGlAccountPageLocator.description_in_list_css)
    }

    getCostCodeInList(){
        return commonAction.getTextElement(manageGlAccountPageLocator.cost_code_in_list_css)
    }

    getDepartmentCodeInList(){
        return commonAction.getTextElement(manageGlAccountPageLocator.department_code_in_list_css)
    }

    getGlActiveStatusInList(){
        return commonAction.getTextElement(manageGlAccountPageLocator.gl_active_status_in_list_css)
    }

    getCodeInCostList(){
        return commonAction.getTextElement(manageGlAccountPageLocator.code_in_cost_list_css)
    }

    getRemarkInCostList(){
        return commonAction.getTextElement(manageGlAccountPageLocator.remark_in_cost_list_css)
    }

    getValidationTextGlAccount(){
        return commonAction.getTextElementByXpath(manageGlAccountPageLocator.validation_text_gl_account_xpath)
    }
    
    getValidationTextCode(){
        return commonAction.getTextElementByXpath(manageGlAccountPageLocator.validation_text_code_xpath)
    }

}export default ManageGlAccountPage