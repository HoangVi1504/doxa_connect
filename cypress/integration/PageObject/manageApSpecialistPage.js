import CommonAction from '../commons/common_actions'
import CommonPageLocator from '../PageUI/commonPageUI'
import ManageApSpecialistPageLocator from '../PageUI/manageApSpecialistPageUI'

var printf = require('printf')
const commonAction = new CommonAction()
const commonPageLocator = new CommonPageLocator()
const manageApSpecialistPageLocator = new ManageApSpecialistPageLocator()

class ManageApSpecialistPage{

    enterValueToFilterGroupCode(groupCode){
        commonAction.enterValueToTextbox(manageApSpecialistPageLocator.filter_group_code_tab_css, groupCode)
    }

    enterValueToFilterCompanyCode(companyCode){
        commonAction.enterValueToTextbox(manageApSpecialistPageLocator.filter_company_code_txb_css, companyCode)
    }

    enterValueToGroupCodeTextbox(groupCode){
        commonAction.enterValueToTextboxAfterClear(manageApSpecialistPageLocator.group_code_txb_css, groupCode)
    }

    enterValueToRemarksTextbox(remark){
        commonAction.enterValueToTextbox(manageApSpecialistPageLocator.remark_txb_css, remark)
    }

    enterValueToSearchKeyWordTextbox(keyWord){
        commonAction.enterValueToTextbox(manageApSpecialistPageLocator.search_key_word_txb_css, keyWord)
    }

    selectValueFromApSpecialistDropdown(account){
        commonAction.selectOptionFromDropdownByXpath(manageApSpecialistPageLocator.ap_specialist_group_dropdown_xpath, printf(commonPageLocator.option_value_in_dropdown_xpath, account))
    }

    checkToCompanyCodeCheckbox(companyCode){
        commonAction.checkCheckboxByXpath(printf(manageApSpecialistPageLocator.company_ckb_xpath, companyCode))
    }

    doubleClickToGroupCodeInList(groupCode){
        commonAction.doubleClickToElementByXpath(printf(manageApSpecialistPageLocator.group_code_in_list_xpath, groupCode))
    }

    clickToDeleteIconExternalVendorButton(){
        commonAction.clickToElementByXpath(manageApSpecialistPageLocator.delete_icon_vendor_button_xpath)
    }

    verifyValueInGroupCodeTextboxExist(groupCode){
        commonAction.verifyValueInTextboxExist(manageApSpecialistPageLocator.group_code_txb_css, groupCode)
    }

    verifyApSpecialistGroupItemDisplay(item){
        commonAction.verifyElementByXpathVisible(printf(manageApSpecialistPageLocator.ap_specialist_group_item_xpath, item))
    }

    verifyCreateApSpecialistPageTitleDisplay(){
        commonAction.wait(1)
        commonAction.verifyElementByXpathVisible(manageApSpecialistPageLocator.create_ap_specialist_page_title_xpath)
    }

    verifyApSpecialistDetailPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(manageApSpecialistPageLocator.ap_specialist_details_page_title_xpath)
    }

    verifyManageApSpecialistTitleDisplay(){
        commonAction.wait(1)
        commonAction.verifyElementByXpathVisible(manageApSpecialistPageLocator.manage_ap_specialist_page_title_xpath)
    }

    verifyGroupCodeInListDisplay(groupCode){
        commonAction.verifyElementByXpathVisible(printf(manageApSpecialistPageLocator.group_code_in_list_xpath, groupCode))
    }

    getNoOfEntitiesInList(){
        return commonAction.getTextElement(manageApSpecialistPageLocator.no_of_entities_in_list_css)
    }

    getCreatorInList(){
        return commonAction.getTextElement(manageApSpecialistPageLocator.creator_ap_specialist_in_list_css)
    }

    getCompanyCodeInVendorList(){
        return commonAction.getTextElement(manageApSpecialistPageLocator.company_code_in_vendor_list_css)
    }

    getCompanyNameInVendorList(){
        return commonAction.getTextElement(manageApSpecialistPageLocator.company_name_in_vendor_list_css)
    }

    getCompanyRegNumberInVendorList(){
        return commonAction.getTextElement(manageApSpecialistPageLocator.company_reg_number_in_vendor_list_css)
    }

    getValidationGroupCode(){
        return commonAction.getTextElementByXpath(manageApSpecialistPageLocator.validation_text_group_code_xpath)
    }

}export default ManageApSpecialistPage