import CommonAction from '../commons/common_actions'
import UrlPageLocator from '../PageUI/urlPageUI'
import CommonPageLocator from '../PageUI/commonPageUI'
import EntityAdminPageLocator from '../PageUI/entityAdminPageUI'

var printf = require('printf')
const commonAction = new CommonAction()
const urlPageLocator = new UrlPageLocator()
const commonPageLocator = new CommonPageLocator()
const entityAdminPageLocator = new EntityAdminPageLocator()

class EntityAdminPage{
    constructor() {
        this.env = 'stag'
    }

    enterValueToFilterEntityName(entityName){
        let token = window.localStorage.getItem("token")
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.entities_list_url, this.env),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
            commonAction.clickToElement(entityAdminPageLocator.filter_entity_name_txb_css)
            commonAction.enterValueToTextbox(entityAdminPageLocator.filter_entity_name_txb_css, entityName)
        })
    }

    enterValueToFilterCompanyReg(companyReg){
        let token = window.localStorage.getItem("token")
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.entities_list_url, this.env),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
            commonAction.clickToElement(entityAdminPageLocator.filter_company_reg_txb_css)
            commonAction.enterValueToTextbox(entityAdminPageLocator.filter_company_reg_txb_css, companyReg)
        })
    }

    enterValueToCompanyNameTextbox(companyName){
        commonAction.enterValueToTextbox(entityAdminPageLocator.company_name_txb_css, companyName)
    }

    enterValueToCompanyRegNoTextbox(companyReg){
        commonAction.enterValueToTextbox(entityAdminPageLocator.company_reg_number_txb_css, companyReg)
    }

    enterValueToEntityRepNameTextbox(name){
        commonAction.enterValueToTextbox(entityAdminPageLocator.entity_rep_name_txb_css, name)
    }

    enterValueToEntityRepEmailTextbox(email){
        commonAction.enterValueToTextbox(entityAdminPageLocator.entity_rep_email_txb_css, email)
    }

    enterValueToEntityRepWorkPhoneTextbox(phone){
        commonAction.enterValueToTextbox(entityAdminPageLocator.entity_rep_phone_txb_css, phone)
    }

    enterValueToAuthorizedSigNameTextbox(name){
        commonAction.enterValueToTextbox(entityAdminPageLocator.authorized_sig_name_txb_css, name)
    }

    enterValueToAuthorizedSigEmailTextbox(email){
        commonAction.enterValueToTextbox(entityAdminPageLocator.authorized_sig_email_txb_css, email)
    }

    enterValueToAuthorizedSigWorkPhoneTextbox(phone){
        commonAction.enterValueToTextbox(entityAdminPageLocator.authorized_sig_phone_txb_css, phone)
    }

    enterValueToEntityAdminNameTextbox(name){
        commonAction.enterValueToTextbox(entityAdminPageLocator.entity_admin_name_txb_css, name)
    }

    enterValueToEntityAdminEmailTextbox(email){
        commonAction.enterValueToTextbox(entityAdminPageLocator.entity_admin_email_txb_css, email)
    }

    enterValueToEntityAdminWorkPhoneTextbox(phone){
        commonAction.enterValueToTextbox(entityAdminPageLocator.entity_admin_phone_txb_css, phone)
    }

    enterValueToRemarkTextbox(remark){
        commonAction.enterValueToTextbox(entityAdminPageLocator.remark_txb_css, remark)
    }

    enterValueFileTitleTextboxInDocumentTable(fileTitle){
        commonAction.enterValueToTextbox(entityAdminPageLocator.file_title_in_document_table_css, fileTitle)
        commonAction.clickToElementByXpath(printf(commonPageLocator.text_xpath, "Title"))
    }
    
    uploadFileToTable(fileName){
        commonAction.setAttribute('[type="file"]', "style", "display: block;")
        commonAction.uploadFile(entityAdminPageLocator.add_file_entity_css, fileName)
        commonAction.setAttribute('[type="file"]', "style", "display: none;")
    }

    selectValueFromCountryDropdown(country){
        commonAction.selectValueFromElement(entityAdminPageLocator.country_dropdown_css, country)
    }

    selectValueFromEntityTypeDropdown(entityType){
        commonAction.selectValueFromElement(entityAdminPageLocator.entity_type_dropdown_css, entityType)
    }

    selectValueFromIndustryTypeDropdown(industryType){
        commonAction.selectValueFromElement(entityAdminPageLocator.industry_type_dropdown_css, industryType)
    }

    selectValueFromEntityRepDialCodeDropdown(dialCode){
        commonAction.selectValueFromDropdownElement(entityAdminPageLocator.entity_rep_dial_code_dropdown_css, dialCode)
    }

    selectValueFromAuthorizedSigDialCodeDropdown(dialCode){
        commonAction.selectValueFromDropdownElement(entityAdminPageLocator.authorized_sig_dial_code_dropdown_css, dialCode)
    }

    selectValueFromEntityAdminDialCodeDropdown(dialCode){
        commonAction.selectValueFromDropdownElement(entityAdminPageLocator.entity_admin_dial_code_dropdown_css, dialCode)
    }

    doubleClickToEntityName(entityName){
        commonAction.doubleClickToElementByXpath(printf(entityAdminPageLocator.entity_name_in_list_xpath, entityName))
    }

    checkToBuyerCheckbox(){
        commonAction.checkCheckbox(entityAdminPageLocator.buyer_checkbox_css)
    }

    checkToSupplierCheckbox(){
        commonAction.checkCheckbox(entityAdminPageLocator.supplier_checkbox_css)
    }

    checkToSettingsCheckbox(){
        commonAction.checkCheckboxByXpath(entityAdminPageLocator.setting_checkbox_xpath)
    }

    checkToPurchaseCheckbox(){
        commonAction.checkCheckboxByXpath(entityAdminPageLocator.purchase_checkbox_xpath)
    }

    checkToInvoicesCheckbox(){
        commonAction.checkCheckboxByXpath(entityAdminPageLocator.invoices_checkbox_xpath)
    }

    clearValueInCompanyRegNoTextbox(){
        commonAction.clearValueInTextbox(entityAdminPageLocator.company_reg_number_txb_css)
    }

    clearValueInEntityRepNameTextbox(){
        commonAction.clearValueInTextbox(entityAdminPageLocator.entity_rep_name_txb_css)
    }

    clickToOptionLink(linkName){
        commonAction.clickToElementByXpath(printf(entityAdminPageLocator.option_nav_link_xpath, linkName))
    }

    verifyEntityNameInListDisplay(entityName){
        commonAction.verifyElementByXpathVisible(printf(entityAdminPageLocator.entity_name_in_list_xpath, entityName))
    }

    verifyBuyerCheckboxIsChecked(){
        commonAction.verifyCheckBoxIsChecked(entityAdminPageLocator.buyer_checkbox_css)
    }

    verifyBuyerCheckboxIsUnChecked(){
        commonAction.verifyCheckBoxIsNotChecked(entityAdminPageLocator.buyer_checkbox_css)
    }

    verifySupplierCheckboxIsChecked(){
        commonAction.verifyCheckBoxIsChecked(entityAdminPageLocator.supplier_checkbox_css)
    }

    verifySupplierCheckboxIsUnChecked(){
        commonAction.verifyCheckBoxIsNotChecked(entityAdminPageLocator.supplier_checkbox_css)
    }

    verifyNewEntityPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(entityAdminPageLocator.new_entity_page_xpath)
    }

    verifyEntityDetailsPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(entityAdminPageLocator.entity_details_page_xpath)
    }

    verifyListEntitiesPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(entityAdminPageLocator.list_entities_page_xpath)
    }

    verifyValueInCompanyNameTextboxExist(companyName){
        commonAction.verifyValueInTextboxExist(entityAdminPageLocator.company_name_txb_css, companyName)
    }

    verifyValueInCompanyRegTextboxExist(companyReg){
        commonAction.verifyValueInTextboxExist(entityAdminPageLocator.company_reg_number_txb_css, companyReg)
    }

    verifyValueInEntityTypeDropdownExist(entityType){
        commonAction.verifyValueInDropdownExits(entityAdminPageLocator.entity_type_dropdown_css, entityType)
    }

    verifyValueInIndustryTypeDropdownExist(industryType){
        commonAction.verifyValueInDropdownExits(entityAdminPageLocator.industry_type_dropdown_css, industryType)
    }

    verifyValueInEntityRepEmailTextboxExist(email){
        commonAction.verifyValueInTextboxExist(entityAdminPageLocator.entity_rep_email_txb_css, email)
    }

    verifyValueInEntityRepNameTextboxExist(name){
        commonAction.verifyValueInTextboxExist(entityAdminPageLocator.entity_rep_name_txb_css, name)
    }

    verifyValidationTextCompanyNameDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(entityAdminPageLocator.validation_text_company_name_xpath, validation))
    }

    verifyValidationTextCompanyRegDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(entityAdminPageLocator.validation_text_company_reg_xpath, validation))
    }

    verifyValidationTextCountryDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(entityAdminPageLocator.validation_text_country_xpath, validation))
    }

    verifyValidationTextEntityTypeDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(entityAdminPageLocator.validation_text_entity_type_xpath, validation))
    }

    verifyValidationTextIndustryTypeDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(entityAdminPageLocator.validation_text_industry_type_xpath, validation))
    }

    verifyValidationTextEntityRepresentativeNameDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(entityAdminPageLocator.validation_text_ent_rep_name_xpath, validation))
    }

    verifyValidationTextEntityRepresentativeEmailDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(entityAdminPageLocator.validation_text_ent_rep_email_xpath, validation))
    }

    verifyValidationTextEntityRepresentativeDialCodeDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(entityAdminPageLocator.validation_text_ent_rep_dial_code_xpath, validation))
    }

    verifyValidationTextEntityRepresentativeWorkPhoneDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(entityAdminPageLocator.validation_text_ent_rep_work_phone_xpath, validation))
    }

    verifyValidationTextAuthorizedEmailDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(entityAdminPageLocator.validation_text_authorized_email_xpath, validation))
    }

    verifyValidationTextAuthorizedDialCodeDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(entityAdminPageLocator.validation_text_authorized_dial_code_xpath, validation))
    }

    verifyValidationTextAuthorizedWorkPhoneDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(entityAdminPageLocator.validation_text_authorized_work_phone_xpath, validation))
    }

    verifyValidationTextEntityAdminEmailDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(entityAdminPageLocator.validation_text_ent_admin_email_xpath, validation))
    }

    verifyValidationTextEntityAdminDiaCodeDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(entityAdminPageLocator.validation_text_ent_admin_dial_code_xpath, validation))
    }

    verifyValidationTextEntityAdminWorkPhoneDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(entityAdminPageLocator.validation_text_ent_admin_work_phone_xpath, validation))
    }

    getEntityStatusInList(){
        return commonAction.getTextElement(entityAdminPageLocator.entity_status_in_list_css)
    }

    getCountryOriginInList(){
        return commonAction.getTextElement(entityAdminPageLocator.country_origin_in_list_css)
    }

    getCompanyRegNumberInList(){
        return commonAction.getTextElement(entityAdminPageLocator.company_reg_number_in_list)
    }

    getEntityActiveStatusInList(){
        return commonAction.getTextElement(entityAdminPageLocator.entity_active_status_in_list_css)
    }

    getFileNameInDocumentTable(){
        return commonAction.getTextElement(entityAdminPageLocator.file_name_in_document_table_css)
    }

}export default EntityAdminPage