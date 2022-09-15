import CommonAction from '../commons/common_actions'
import ManageAddressPageLocator from '../PageUI/manageAddressPageUI'

var printf = require('printf')
const commonAction = new CommonAction()
const manageAddressPageLocator = new ManageAddressPageLocator()

class ManageAddressPage{

    enterValueToAddressLabelTextbox(addressLabel){
        commonAction.enterValueToTextbox(manageAddressPageLocator.address_label_txb_css, addressLabel)
    }

    enterValueToAddressFirstLineTextbox(address){
        commonAction.enterValueToTextbox(manageAddressPageLocator.address_first_line_txb_css, address)
    }

    enterValueToAddressSecondLineTextbox(address){
        commonAction.enterValueToTextbox(manageAddressPageLocator.address_second_line_txb_css, address)
    }

    enterValueToStateTextbox(state){
        commonAction.enterValueToTextbox(manageAddressPageLocator.state_txb_css, state)
    }

    enterValueToPostalCodeTextbox(postalCode){
        commonAction.enterValueToTextbox(manageAddressPageLocator.postal_code_txb_css, postalCode)
    }

    enterValueToCityTextbox(city){
        commonAction.enterValueToTextbox(manageAddressPageLocator.city_txb_css, city)
    }

    enterValueToFilterAddressLabel(addressLabel){
        commonAction.enterValueToTextbox(manageAddressPageLocator.filter_address_label_css, addressLabel)
    }

    selectValueFromCountryDropdown(country){
        commonAction.clickToElement('.css-tlfecz-indicatorContainer')
        commonAction.clickToElement('#react-select-3-option-195')
    }

    doubleClickToAddressLabelInList(addressLabel){
        commonAction.doubleClickToElementByXpath(printf(manageAddressPageLocator.address_label_in_list_xpath, addressLabel))
    }

    checkToSetDefaultAddressCheckbox(){
        commonAction.checkCheckboxByXpath(manageAddressPageLocator.set_default_address_checkbox_xpath)
    }

    clearValueInAddressLine1Textbox(){
        commonAction.clearValueInTextbox(manageAddressPageLocator.address_first_line_txb_css)
    }

    clearValueInPostalCodeTextbox(){
        commonAction.clearValueInTextbox(manageAddressPageLocator.postal_code_txb_css)
    }

    verifyCreateAddressPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(manageAddressPageLocator.create_company_address_page_title_xpath)
        commonAction.wait(1)
    }

    verifyCompanyAddressDetailPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(manageAddressPageLocator.company_address_detail_page_title_xpath)
    }

    verifyCompanyAddressListPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(manageAddressPageLocator.company_address_list_page_title_xpath)
        commonAction.wait(1)
    }

    verifyAddressLabelInListDisplay(addressLabel){
        commonAction.verifyElementByXpathVisible(printf(manageAddressPageLocator.address_label_in_list_xpath, addressLabel))
    }

    verifyValueInAddressLabelTextboxExist(addressLabel){
        commonAction.verifyValueInTextboxExist(manageAddressPageLocator.address_label_txb_css, addressLabel)
    }

    verifyValidationAddressLabelDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(manageAddressPageLocator.validation_text_address_label_xpath, validation))
    }

    verifyValidationAddress1Display(validation){
        commonAction.verifyElementByXpathVisible(printf(manageAddressPageLocator.validation_text_address_1_xpath, validation))
    }

    verifyValidationStateDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(manageAddressPageLocator.validation_text_state_xpath, validation))
    }

    verifyValidationPostalCodeDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(manageAddressPageLocator.validation_text_postal_code_xpath, validation))
    }

    verifyValidationCountryDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(manageAddressPageLocator.validation_text_country_xpath, validation))
    }

    getDetailAddressInList(){
        return commonAction.getTextElement(manageAddressPageLocator.detail_address_in_list_css)
    }

    getCityInList(){
        return commonAction.getTextElement(manageAddressPageLocator.city_in_list_css)
    }

    getStateInList(){
        return commonAction.getTextElement(manageAddressPageLocator.state_in_list_css)
    }

    getCountryInList(){
        return commonAction.getTextElement(manageAddressPageLocator.country_in_list_css)
    }

    getPostalCodeInList(){
        return commonAction.getTextElement(manageAddressPageLocator.postal_code_in_list_css)
    }

    getDefaultAddressStatusInList(){
        return commonAction.getTextElement(manageAddressPageLocator.default_address_in_list_css)
    }

    getActiveAddressStatusInList(){
        return commonAction.getTextElement(manageAddressPageLocator.active_address_in_list_css)
    }

}export default ManageAddressPage