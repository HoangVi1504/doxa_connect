import CommonAction from '../commons/common_actions'
import ManageDocumentPrefixPageLocator from '../PageUI/manageDocumentPrefixPageUI'

var printf = require('printf')
const commonAction = new CommonAction()
const manageDocumentPrefixPageLocator = new ManageDocumentPrefixPageLocator()

class ManageDocumentPrefixPage{

    enterValueToFilterFunction(functionName){
        commonAction.wait(1)
        commonAction.enterValueToTextboxAfterClear(manageDocumentPrefixPageLocator.filter_function_txb_css, functionName)
    }

    enterValueToPrefixTextbox(prefix){
        commonAction.enterValueToTextboxAfterClear(manageDocumentPrefixPageLocator.prefix_txb_css, prefix)
    }

    enterValueToStartNumberFormatTextbox(startNumberFormat){
        commonAction.enterValueToTextboxAfterClear(manageDocumentPrefixPageLocator.start_number_format_txb_css, startNumberFormat)
    }

    selectValueFromPrefixDropdown(prefix){
        commonAction.selectValueFromElement(manageDocumentPrefixPageLocator.prefix_status_dropdown_css, prefix)
    }

    selectValueFromDigitsDropdown(digits){
        commonAction.selectValueFromElement(manageDocumentPrefixPageLocator.number_of_digits_dropdown_css, digits)
    }

    doubleClickToFunctionInList(functionName){
        commonAction.doubleClickToElementByXpath(printf(manageDocumentPrefixPageLocator.function_name_xpath, functionName))
    }

    forceClickToSetupOptionCheckbox(setupName, checkboxName){
        commonAction.forceClickToElementByXpath(printf(manageDocumentPrefixPageLocator.setup_option_ckb_xpath, setupName, checkboxName))
    }

    clearValueInPrefixTextbox(){
        commonAction.clearValueInTextbox(manageDocumentPrefixPageLocator.prefix_txb_css)
    }

    clearValueInStartNumberFormatTextbox(){
        commonAction.clearValueInTextbox(manageDocumentPrefixPageLocator.start_number_format_txb_css)
    }

    verifyListDocumentPrefixTitleDisplay(){
        commonAction.verifyElementByXpathVisible(manageDocumentPrefixPageLocator.list_of_document_prefix_page_title_xpath)
    }

    verifyPrefixInListDisplay(prefix){
        commonAction.verifyElementByXpathVisible(printf(manageDocumentPrefixPageLocator.prefix_in_list_xpath, prefix))
    }

    verifyDocumentPrefixDetailsPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(manageDocumentPrefixPageLocator.document_prefix_details_page_title_xpath)
    }

    verifyValueInFunctionNameTextboxExist(functionName){
        commonAction.verifyValueInTextboxExist(manageDocumentPrefixPageLocator.function_name_txb_css, functionName)
    }

    verifyValueInPrefixStatusTextboxExist(prefix){
        commonAction.verifyValueInTextboxExist(manageDocumentPrefixPageLocator.prefix_status_dropdown_css, prefix)
    }

    verifyValueInDefaultDocumentNumberTextboxExist(defaultDocumentNumber){
        commonAction.verifyValueInTextboxExist(manageDocumentPrefixPageLocator.default_document_number_dropdown_css, defaultDocumentNumber)
    }

    verifySampleOutputDisplay(sampleOutput){
        commonAction.verifyElementByXpathVisible(printf(manageDocumentPrefixPageLocator.prefix_sample_format_xpath, sampleOutput))
    }

    verifyPrefixStatusDropdownDisabled(){
        commonAction.verifyElementDisable(manageDocumentPrefixPageLocator.prefix_status_dropdown_css)
    }

    verifyDefaultDocumentDropdownNumberDisabled(){
        commonAction.verifyElementDisable(manageDocumentPrefixPageLocator.default_document_number_dropdown_css)
        commonAction.wait(1)
    }

    verifyValidationTextPrefixDisplay(validationPrefix){
        commonAction.verifyElementByXpathVisible(printf(manageDocumentPrefixPageLocator.validation_text_prefix_xpath, validationPrefix))
    }

    verifyValidationTextDigitsDisplay(validationDigits){
        commonAction.verifyElementByXpathVisible(printf(manageDocumentPrefixPageLocator.validation_text_digits_xpath, validationDigits))
    }

    getFunctionNameInList(){
        return commonAction.getTextElement(manageDocumentPrefixPageLocator.function_name_in_list_css)
    }

    getTypeInList(){
        return commonAction.getTextElement(manageDocumentPrefixPageLocator.type_in_list_css)
    }

    getCreatorInList(){
        return commonAction.getTextElement(manageDocumentPrefixPageLocator.create_by_in_list_css)
    }
}
export default ManageDocumentPrefixPage