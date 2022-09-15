import CommonAction from '../commons/common_actions'
import ManageTaxPageLocator from '../PageUI/manageTaxPageUI'

var printf = require('printf')
const commonAction = new CommonAction()
const manageTaxPageLocator = new ManageTaxPageLocator()

class ManageTaxPage{

    enterValueToFilterTaxCodeInList(taxCode){
        commonAction.enterValueToTextboxAfterClear(manageTaxPageLocator.filter_tax_code_in_list_css, taxCode)
    }

    enterValueToTaxCodeTextbox(taxCode){
        commonAction.enterValueToTextboxAfterClear(manageTaxPageLocator.tax_code_txb_css, taxCode)
    }

    enterValueToTaxRateTextbox(taxRate){
        commonAction.enterValueToTextboxAfterClear(manageTaxPageLocator.tax_rate_txb_css, taxRate)
    }

    enterValueToDescriptionTaxTextbox(description){
        commonAction.enterValueToTextboxAfterClear(manageTaxPageLocator.tax_description_css, description)
    }

    doubleClickToTaxCodeInList(taxCode){
        commonAction.doubleClickToElementByXpath(printf(manageTaxPageLocator.tax_code_in_list_xpath, taxCode))
    }

    checkToTaxCodeCheckbox(taxCode){
        commonAction.checkCheckboxByXpath(printf(manageTaxPageLocator.tax_code_ckb_xpath, taxCode))
    }

    checkToSetDefaultTaxCheckbox(){
        commonAction.checkCheckboxByXpath(manageTaxPageLocator.set_default_tax_ckb_xpath)
    }

    checkToSetActiveStatusCheckbox(){
        commonAction.checkCheckboxByXpath(manageTaxPageLocator.set_active_status_ckb_xpath)
    }

    clearValueInTaxRateTextbox(){
        commonAction.clearValueInTextbox(manageTaxPageLocator.tax_rate_txb_css)
    }

    clickToTaxActionInList(action){
        commonAction.clickToElementByXpath(printf(manageTaxPageLocator.tax_action_in_list_xpath, action))
    }

    clickToActivateButtonInNotification(){
        commonAction.clickToElementByXpath(manageTaxPageLocator.activate_button_in_notification_xpath)
    }

    clickToDeactivateButtonInNotification(){
        commonAction.clickToElementByXpath(manageTaxPageLocator.deactivate_button_in_notification_xpath)
    }

    verifyCreateTaxPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(manageTaxPageLocator.create_tax_record_page_title_xpath)
        commonAction.wait(1)
    }

    verifyTaxDetailPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(manageTaxPageLocator.tax_detail_page_title_xpath)
    }

    verifyListTaxTitleDisplay(){
        commonAction.verifyElementByXpathVisible(manageTaxPageLocator.list_tax_page_title_xpath)
        commonAction.wait(1)
    }

    verifyValueInTaxCodeExist(taxCode){
        commonAction.verifyValueInTextboxExist(manageTaxPageLocator.tax_code_txb_css, taxCode)
    }

    verifyTaxCodeInListDisplay(taxCode){
        commonAction.verifyElementByXpathVisible(printf(manageTaxPageLocator.tax_code_in_list_xpath, taxCode))
    }

    verifyTaxActionInListDisplay(action){
        commonAction.verifyElementByXpathVisible(printf(manageTaxPageLocator.tax_action_in_list_xpath, action))
    }

    getTaxRateInList(){
        return commonAction.getTextElement(manageTaxPageLocator.tax_rate_in_list_css)
    }

    getDescriptionTaxInList(){
        return commonAction.getTextElement(manageTaxPageLocator.description_tax_in_list_css)
    }

    getTaxDefaultStatusInList(){
        return commonAction.getTextElement(manageTaxPageLocator.tax_default_status_in_list_css)
    }

    getTaxActiveStatusInList(){
        return commonAction.getTextElement(manageTaxPageLocator.tax_active_status_in_list_css)
    }

    getValidationTextTaxCode(){
        return commonAction.getTextElementByXpath(manageTaxPageLocator.validation_text_tax_code_xpath)
    }

    getValidationTextTaxRate(){
        return commonAction.getTextElementByXpath(manageTaxPageLocator.validation_text_tax_rate_xpath)
    }

}export default ManageTaxPage