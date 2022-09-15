import CommonAction from '../commons/common_actions'
import UrlPageLocator from '../PageUI/urlPageUI'
import CompanyPageLocator from '../PageUI/companyPageUI'

var printf = require('printf')
var dataEntityAdmin = require('../../../dataEntityAdmin.json');

const commonAction = new CommonAction()
const urlPageLocator = new UrlPageLocator()
const companyPageLocator = new CompanyPageLocator()

class CompanyPage{
    constructor() {
        this.env = 'stag'
    }

    enterValueToSearchEmailTextbox(email){
        commonAction.enterValueToTextbox(companyPageLocator.filter_email_txb_css, email)
    }

    enterValueToSearchCompanyNameTextbox(companyName){
        let token = window.localStorage.getItem("token")
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.company_user_list_url, this.env, dataEntityAdmin.entityCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
            commonAction.clickToElement(companyPageLocator.filter_company_name_txb_css)
            commonAction.enterValueToTextboxAfterClear(companyPageLocator.filter_company_name_txb_css, companyName)
        })
    }

    enterValueToSearchRoleTextbox(roleName){
        commonAction.enterValueToTextboxAfterClear(companyPageLocator.filter_role_txb_css, roleName)
    }

    enterValueToSearchFeatureTextbox(feature){
        commonAction.enterValueToTextboxAfterClear(companyPageLocator.filter_feature_name_txb_css, feature)
    }

    enterValueToUserNameTextbox(username){
        commonAction.enterValueToTextboxAfterClear(companyPageLocator.username_txb_css, username)
    }

    enterValueToEmailTextbox(email){
        commonAction.enterValueToTextboxAfterClear(companyPageLocator.email_txb_css, email)
    }

    enterValueToWorkPhoneTextbox(workPhone){
        commonAction.enterValueToTextboxAfterClear(companyPageLocator.work_number_txb_css, workPhone)
    }

    enterValueToDesignationTextbox(designation){
        commonAction.enterValueToTextboxAfterClear(companyPageLocator.designation_txb_css, designation)
    }

    enterValueToCustomPasswordTextbox(password){
        commonAction.enterValueToTextboxAfterClear(companyPageLocator.custom_password_txb_css, password)
    }

    enterValueToCustomResetPasswordTextbox(password){
        commonAction.enterValueToTextbox(companyPageLocator.custom_reset_pass_txb_css, password)
    }

    enterValueToRemarksTextbox(remark){
        commonAction.enterValueToTextboxAfterClearByXpath(companyPageLocator.remark_txb_xpath, remark)
    }

    selectValueFromDialCodeDropdown(dialCode){
        commonAction.selectOptionFromDropdownByXpath(companyPageLocator.dial_code_dropdown_xpath, printf(companyPageLocator.option_dial_code_xpath, dialCode))
    }

    doubleClickToCompanyNameInList(companyName){
        commonAction.doubleClickToElementByXpath(printf(companyPageLocator.full_name_in_list_css, companyName))
    }

    checkToRoleCheckboxInList(roleName){
        commonAction.checkCheckboxByXpath(printf(companyPageLocator.role_name_ckb_xpath, roleName))
    }

    checkToFeatureReadCheckbox(feature){
        commonAction.checkCheckboxByXpath(printf(companyPageLocator.feature_read_role_ckb_xpath, feature))
    }

    checkToFeatureWriteCheckbox(feature){
        commonAction.checkCheckboxByXpath(printf(companyPageLocator.feature_write_role_ckb_xpath, feature))
    }

    checkToFeatureApproveCheckbox(feature){
        commonAction.checkCheckboxByXpath(printf(companyPageLocator.feature_approve_role_ckb_xpath, feature))
    }

    forceClickToCustomPasswordRadioButton(){
        commonAction.forceClickToElement(companyPageLocator.custom_pass_radio_button_css)
    }

    clickToTabNameInDetailPage(tabName){
        commonAction.clickToElementByXpath(printf(companyPageLocator.nav_tab_in_detail_page_xpath, tabName))
    }

    clickToResetPasswordButton(){
        commonAction.clickToElementByXpath(companyPageLocator.reset_password_button_xpath)
    }

    clickToResetTwoFactorButton(){
        commonAction.clickToElementByXpath(companyPageLocator.reset_two_factor_button_xpath)
    }

    clickToResetNotificationButton(){
        commonAction.clickToElementByXpath(companyPageLocator.reset_notification_pass_button_xpath)
    }

    verifyCreateCompanyUserPageTitleDisplay(){
        commonAction.wait(1)
        commonAction.verifyElementByXpathVisible(companyPageLocator.create_company_user_page_title_xpath)
    }

    verifyCompanyUserListPageTitleDisplay(){
        commonAction.wait(1)
        commonAction.verifyElementByXpathVisible(companyPageLocator.company_user_list_page_title_xpath)
    }

    verifyCompanyDetailPageDisplay(){
        commonAction.verifyElementByXpathVisible(companyPageLocator.company_detail_page_title_xpath)
    }

    verifyFullNameInListDisplay(fullName){
        commonAction.verifyElementByXpathVisible(printf(companyPageLocator.full_name_in_list_css, fullName))
    }

    verifyUserNameInDetailPageDisplay(userName){
        commonAction.verifyElementByXpathVisible(printf(companyPageLocator.user_name_in_detail_xpath, userName))
    }

    verifyValidationTextEmailDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(companyPageLocator.validation_text_email_xpath, validation))
    }

    verifyValidationTextPasswordDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(companyPageLocator.validation_text_password_xpath, validation))
    }

    verifyValidationTextUserNameDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(companyPageLocator.validation_text_user_name_xpath, validation))
    }

    verifyValidationTextWorkPhoneDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(companyPageLocator.validation_text_work_phone_xpath, validation))
    }

    getEmailInCompanyList(){
        return commonAction.getTextElement(companyPageLocator.email_in_list_css)
    }

    getWorkPhoneInCompanyList(){
        return commonAction.getTextElement(companyPageLocator.work_number_in_list_css)
    }

    getDesignationInList(){ 
        return commonAction.getTextElement(companyPageLocator.designation_in_list_css)
    }

    getUserStatusInList(){
        return commonAction.getTextElement(companyPageLocator.status_in_list_css)
    }

}export default CompanyPage