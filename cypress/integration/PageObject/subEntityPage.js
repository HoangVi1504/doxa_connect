import { company } from 'faker'
import CommonAction from '../commons/common_actions'
import CommonPageLocator from '../PageUI/commonPageUI'
import SubEntityPageLocator from '../PageUI/subEntityPageUI'

var printf = require('printf')
const commonAction = new CommonAction()
const commonPageLocator = new CommonPageLocator()
const subEntityPageLocator = new SubEntityPageLocator()

class SubEntityPage{

    enterValueToCompanyNameTextbox(companyName){
        commonAction.enterValueToTextbox(subEntityPageLocator.company_name_txb_css, companyName)
    }

    enterValueToCompanyRegNumberTextbox(regNumber){
        commonAction.enterValueToTextbox(subEntityPageLocator.company_reg_number_txb_css, regNumber)
    }

    enterValueFileTitleTextboxInDocumentTable(fileTitle){
        commonAction.enterValueToTextbox(subEntityPageLocator.file_title_in_document_table_css, fileTitle)
        commonAction.clickToElementByXpath(printf(commonPageLocator.text_xpath, "Title"))
    }

    enterValueToRemarkTextbox(remark){
        commonAction.enterValueToTextbox(subEntityPageLocator.remark_txb_css, remark)
    }

    enterValueToFilterCompanyName(companyName){
        commonAction.enterValueToTextbox(subEntityPageLocator.filter_company_name_css, companyName)
    }

    uploadFileToTable(fileName){
        commonAction.setAttribute('[type="file"]', "style", "display: block;")
        commonAction.uploadFile(subEntityPageLocator.add_file_entity_css, fileName)
        commonAction.setAttribute('[type="file"]', "style", "display: none;")
    }

    selectValueFromCountryDropdown(country){
        //commonAction.selectValueFromElement(subEntityPageLocator.country_of_origin_dropdown_css, country)
        commonAction.clickToElementByXpath("(//*[contains(@class,'css-tlfecz-indicatorContainer')])[1]")
        commonAction.clickToElementByXpath("//*[@id='react-select-5-option-195']")
    }

    selectValueFromEntityTypeDropdown(entityType){
        //commonAction.selectValueFromElement(subEntityPageLocator.entity_type_dropdown_css, entityType)
        commonAction.clickToElementByXpath("(//*[contains(@class,'css-tlfecz-indicatorContainer')])[2]")
        commonAction.clickToElementByXpath("//*[@id='react-select-6-option-0']")
    }

    selectValueFromIndustryTypeDropdown(industryType){
        //commonAction.selectValueFromElement(subEntityPageLocator.industry_type_dropdown_css, industryType)
        commonAction.clickToElementByXpath("(//*[contains(@class,'css-tlfecz-indicatorContainer')])[3]")
        commonAction.clickToElementByXpath("//*[@id='react-select-7-option-5']")
    }

    doubleClickToCompanyNameInList(companyName){
        commonAction.doubleClickToElementByXpath(printf(subEntityPageLocator.company_name_in_list_xpath, companyName))
    }

    checkToTransactionSettingsCheckbox(){
        commonAction.checkCheckboxByXpath(subEntityPageLocator.transaction_setting_checkbox_xpath)
    }

    checkToEntitySettingsCheckbox(){
        commonAction.checkCheckboxByXpath(subEntityPageLocator.entity_setting_checkbox_xpath)
    }

    checkToP2PCheckbox(){
        commonAction.checkCheckboxByXpath(subEntityPageLocator.procurement_to_pay_checkbox_xpath)
    }

    checkToManageVendorCheckbox(){
        commonAction.checkCheckboxByXpath(subEntityPageLocator.manage_vendor_checkbox_xpath)
    }

    clickToOptionLink(linkName){
        commonAction.clickToElementByXpath(printf(subEntityPageLocator.option_nav_link_xpath, linkName))
    }

    verifyCreateNewCompanyPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(subEntityPageLocator.create_new_company_page_title_xpath)
        commonAction.wait(1)
    }

    verifyCompanyDetailsPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(subEntityPageLocator.company_details_page_title_xpath)
    }

    verifyListCompaniesPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(subEntityPageLocator.list_company_page_title_xpath)
        commonAction.wait(2)
    }

    verifyCompanyNameInListDisplay(companyName){
        commonAction.verifyElementByXpathVisible(printf(subEntityPageLocator.company_name_in_list_xpath, companyName))
    }

    verifyCompanyNameInDetailDisplay(companyName){
        commonAction.verifyElementByXpathVisible(printf(subEntityPageLocator.company_name_in_detail_xpath, companyName))
    }

    verifyCompanyRegNumberInDetailDisplay(regNumber){
        commonAction.verifyElementByXpathVisible(printf(subEntityPageLocator.company_reg_number_in_detail_xpath, regNumber))
    }

    verifyCountryOriginInDetailDisplay(country){
        commonAction.verifyElementByXpathVisible(printf(subEntityPageLocator.country_origin_in_detail_xpath, country))
    }

    verifyEntityTypeInDetailDisplay(entityType){
        commonAction.verifyElementByXpathVisible(printf(subEntityPageLocator.entity_type_in_detail_xpath, entityType))
    }

    verifyIndustryTypeInDetailDisplay(industryType){
        commonAction.verifyElementByXpathVisible(printf(subEntityPageLocator.industry_type_in_detail_xpath, industryType))
    }

    verifyValidationTextCompanyNameDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(subEntityPageLocator.validation_text_company_name_xpath, validation))
    }

    verifyValidationTextCompanyRegNumberDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(subEntityPageLocator.validation_text_company_reg_number_xpath, validation))
    }

    verifyValidationTextCountryDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(subEntityPageLocator.validation_text_country_of_origin_xpath, validation))
    }

    verifyValidationTextEntityTypeDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(subEntityPageLocator.validation_text_entity_type_xpath, validation))
    }

    verifyValidationTextIndustryTypeDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(subEntityPageLocator.validation_text_industry_type_xpath, validation))
    }

    getFileNameInDocumentTable(){
        return commonAction.getTextElement(subEntityPageLocator.file_name_in_document_table_css)
    }

    getCompanyStatusInList(){
        return commonAction.getTextElement(subEntityPageLocator.company_status_in_list_css)
    }

    getCountryOriginInList(){
        return commonAction.getTextElement(subEntityPageLocator.country_origin_in_list_css)
    }

    getCompanyRegNumberInList(){
        return commonAction.getTextElement(subEntityPageLocator.company_reg_number_in_list_css)
    }

    getCompanyActiveStatusInList(){
        return commonAction.getTextElement(subEntityPageLocator.company_active_status_in_list_css)
    }

    getMainCompanyStatusInList(){
        return commonAction.getTextElement(subEntityPageLocator.main_company_status_in_list_css)
    }

}export default SubEntityPage