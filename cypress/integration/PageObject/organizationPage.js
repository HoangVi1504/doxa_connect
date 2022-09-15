import CommonAction from '../commons/common_actions'
import UrlPageLocator from '../PageUI/urlPageUI'
import OrganizationPageLocator from '../PageUI/organizationPageUI'

var printf = require('printf')
var dataEntityAdmin = require('../../../dataEntityAdmin.json');

const commonAction = new CommonAction()
const urlPageLocator = new UrlPageLocator()
const organizationPageLocator = new OrganizationPageLocator()

class OrganizationPage{
    constructor() {
        this.env = 'stag'
    }

    enterValueToSearchEmailTextbox(email){
        commonAction.enterValueToTextboxAfterClear(organizationPageLocator.filter_email_txb_css, email)
    }

    enterValueToSearchRoleTextbox(roleName){
        commonAction.enterValueToTextboxAfterClear(organizationPageLocator.filter_role_txb_css, roleName)
    }

    enterValueToSearchCompanyTextbox(companyName){
        commonAction.enterValueToTextboxAfterClear(organizationPageLocator.filter_company_name_txb_css, companyName)
    }

    enterValueToFilterCompanyNameInList(companyName){
        let token = window.localStorage.getItem("token")
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.organization_list_url, this.env, dataEntityAdmin.entityCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
            commonAction.wait(1)
            commonAction.clickToElement(organizationPageLocator.filter_company_name_in_list_txb_css)
            commonAction.enterValueToTextboxAfterClear(organizationPageLocator.filter_company_name_in_list_txb_css, companyName)
        })
    }

    enterValueToUserNameTextbox(username){
        commonAction.enterValueToTextboxAfterClear(organizationPageLocator.username_txb_css, username)
    }

    enterValueToEmailTextbox(email){
        commonAction.enterValueToTextboxAfterClear(organizationPageLocator.email_txb_css, email)
    }

    enterValueToWorkPhoneTextbox(workPhone){
        commonAction.enterValueToTextboxAfterClear(organizationPageLocator.work_number_txb_css, workPhone)
    }

    enterValueToDesignationTextbox(designation){
        commonAction.enterValueToTextboxAfterClear(organizationPageLocator.designation_txb_css, designation)
    }

    enterValueToSearchRoleTextbox(roleName){
        commonAction.enterValueToTextbox(organizationPageLocator.filter_role_txb_css, roleName)
    }

    enterValueToCustomPasswordTextbox(customPassword){
        commonAction.enterValueToTextbox(organizationPageLocator.custom_password_txb_css, customPassword)
    }

    selectValueFromDialCodeDropdown(dialCode){
        commonAction.selectOptionFromDropdownByXpath(organizationPageLocator.dial_code_dropdown_xpath, printf(organizationPageLocator.option_dial_code_xpath, dialCode))
    }

    doubleClickToFullNameInList(companyName){
        commonAction.doubleClickToElementByXpath(printf(organizationPageLocator.full_name_in_list_xpath, companyName))
    }

    checkToRoleCheckboxInList(roleName){
        commonAction.checkCheckboxByXpath(printf(organizationPageLocator.option_role_name_ckb_xpath, roleName))
    }

    checkToCompanyAdminCheckbox(){
        commonAction.checkCheckbox(organizationPageLocator.company_admin_ckb_css)
    }

    forceClickToCustomPasswordRadioButton(){
        commonAction.forceClickToElement(organizationPageLocator.custom_pass_radio_button_css)
    }

    clickToRoleInList(roleName){
        commonAction.clickToElementByXpath(printf(organizationPageLocator.role_name_ckb_xpath, roleName))
    }

    clickToEntityAdminInList(entityAdmin){
        commonAction.clickToElementByXpath(printf(organizationPageLocator.entity_name_in_list_xpath, entityAdmin))
    }

    clickToDeleteCompanyNameButton(){
        commonAction.clickToElementByXpath(organizationPageLocator.delete_company_name_button_xpath)
    }

    clickToOptionCompanyName(companyName){
        commonAction.clickToElementByXpath(printf(organizationPageLocator.option_company_name_xpath, companyName))
    }

    clickToAddCompanyButton(){
        commonAction.clickToElementByXpath(organizationPageLocator.add_company_button_xpath)
    }

    clickToResetPasswordButton(){
        commonAction.clickToElementByXpath(organizationPageLocator.reset_password_button_xpath)
    }

    clickToResetFactorButton(){
        commonAction.clickToElementByXpath(organizationPageLocator.reset_two_factor_button_xpath)
    }

    clickToResetNotificationButton(){
        commonAction.clickToElementByXpath(organizationPageLocator.reset_notification_pass_button_xpath)
    }

    verifyResetPasswordUserTitleDisplay(){
        commonAction.verifyElementByXpathVisible(organizationPageLocator.reset_password_user_page_title_xpath)
    }

    verifyCreateOrganizationUserPageTitleDisplay(){
        commonAction.wait(1)
        commonAction.verifyElementByXpathVisible(organizationPageLocator.create_organization_user_page_title_xpath)
    }

    verifyOrganizationUserListPageTitleDisplay(){
        commonAction.wait(1)
        commonAction.verifyElementByXpathVisible(organizationPageLocator.organization_user_list_page_title_xpath)
    }

    verifyOrganizationDetailPageDisplay(){
        commonAction.verifyElementByXpathVisible(organizationPageLocator.organization_detail_page_title_xpath)
    }

    verifyCompanyNameInCompaniesListDisplay(companyName){
        commonAction.verifyElementByXpathVisible(printf(organizationPageLocator.company_name_in_list_xpath, companyName))
    }

    verifyFullNameInListDisplay(fullName){
        commonAction.verifyElementByXpathVisible(printf(organizationPageLocator.full_name_in_list_xpath, fullName))
    }

    verifyEntityAdminInCompaniesListDisplay(entityAdmin){
        commonAction.verifyElementByXpathVisible(printf(organizationPageLocator.company_name_xpath, entityAdmin))
    }

    verifyUserNameInDetailPageDisplay(userName){
        commonAction.verifyElementByXpathVisible(printf(organizationPageLocator.user_name_in_detail_xpath, userName))
    }

    verifyValidationTextEmailDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(organizationPageLocator.validation_text_email_xpath, validation))
    }

    verifyValidationTextPasswordDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(organizationPageLocator.validation_text_password_xpath, validation))
    }

    verifyValidationTextUserNameDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(organizationPageLocator.validation_text_user_name_xpath, validation))
    }

    verifyValidationTextWorkPhoneDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(organizationPageLocator.validation_text_work_phone_xpath, validation))
    }

    getEmailInList(){
        return commonAction.getTextElement(organizationPageLocator.email_in_list_css)
    }

    getWorkNumberInList(){
        return commonAction.getTextElement(organizationPageLocator.work_number_in_list_css)
    }

    getDesignationInList(){ 
        return commonAction.getTextElement(organizationPageLocator.designation_in_list_css)
    }

    getUserStatusInList(){
        return commonAction.getTextElement(organizationPageLocator.status_in_list_css)
    }

}export default OrganizationPage