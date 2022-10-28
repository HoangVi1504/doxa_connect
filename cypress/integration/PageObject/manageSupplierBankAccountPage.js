import CommonAction from '../commons/common_actions'
import UrlPageLocator from '../PageUI/urlPageUI'
import CommonPageLocator from '../PageUI/commonPageUI'
import ManageSupplierBankAccountPageLocator from '../PageUI/manageSupplierBankAccountPageUI'

var printf = require('printf')
var dataBuyer = require('../../../dataBuyer.json');

const commonAction = new CommonAction()
const urlPageLocator = new UrlPageLocator()
const commonPageLocator = new CommonPageLocator()
const manageSupplierBankAccountPageLocator = new ManageSupplierBankAccountPageLocator()

class ManageSupplierBankAccountPage{
    constructor() {
        this.env = 'stag'
    }

    enterValueToFilterBankLabel(bankLabel){
        let token = window.localStorage.getItem("token")
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.supplier_bank_account_list_url, this.env, dataBuyer.buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
            commonAction.wait(1)
            commonAction.clickToElement(manageSupplierBankAccountPageLocator.filter_bank_label_txb_css)
            commonAction.enterValueToTextbox(manageSupplierBankAccountPageLocator.filter_bank_label_txb_css, bankLabel)
        })
    }

    enterValueToFilterBankAccount(number) {
        let token = window.localStorage.getItem("token")
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.supplier_bank_account_list_url, this.env, dataBuyer.buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
            commonAction.wait(1)
            commonAction.clickToElement(manageSupplierBankAccountPageLocator.filter_bank_account_number_txb_css)
            commonAction.enterValueToTextbox(manageSupplierBankAccountPageLocator.filter_bank_account_number_txb_css, number)
        })
    }

    enterValueToBankLabelTextbox(bankLabel){
        commonAction.clickToElement(manageSupplierBankAccountPageLocator.bank_label_txb_css)
        commonAction.wait(1)
        commonAction.enterValueToTextbox(manageSupplierBankAccountPageLocator.bank_label_txb_css, bankLabel)
    }

    enterValueToBranchTextbox(branch){
        commonAction.enterValueToTextbox(manageSupplierBankAccountPageLocator.branch_txb_css, branch)
    }

    enterValueToBranchCodeTextbox(branchCode){
        commonAction.enterValueToTextbox(manageSupplierBankAccountPageLocator.branch_code_txb_css, branchCode)
    }

    enterValueToBranchCityTextbox(branchCity){
        commonAction.enterValueToTextbox(manageSupplierBankAccountPageLocator.branch_city_txb_css, branchCity)
    }

    enterValueToBranchAddress1Textbox(address1){
        commonAction.enterValueToTextbox(manageSupplierBankAccountPageLocator.branch_address_1_txb_css, address1)
    }

    enterValueToBranchAddress2Textbox(address1){
        commonAction.enterValueToTextbox(manageSupplierBankAccountPageLocator.branch_address_2_txb_css, address1)
    }

    enterValueToBankAccountNumberTextbox(number){
        commonAction.enterValueToTextboxAfterClear(manageSupplierBankAccountPageLocator.bank_account_number_txb_css, number)
    }

    enterValueToAccountHolderNameTextbox(name){
        commonAction.enterValueToTextboxAfterClear(manageSupplierBankAccountPageLocator.account_holder_name_txb_css, name)
    }

    enterValueToCurrencyTextbox(currency){
        commonAction.enterValueToTextbox(manageSupplierBankAccountPageLocator.currency_txb_css, currency)
    }

    enterValueToPostalCodeTextbox(postalCode){
        commonAction.enterValueToTextbox(manageSupplierBankAccountPageLocator.postal_code_txb_css, postalCode)
    }

    enterValueToStateTextbox(state){
        commonAction.enterValueToTextbox(manageSupplierBankAccountPageLocator.state_txb_css, state)
    }

    enterValueToCommentConversationsTextbox(comment){
        commonAction.enterValueToTextbox(manageSupplierBankAccountPageLocator.comment_conversation_txb_css, comment)
    }

    enterValueToRejectReasonTextbox(reason){
        commonAction.enterValueToTextbox(manageSupplierBankAccountPageLocator.reject_reason_txb_css, reason)
    }

    selectValueFromCompanyCodeDropdown(companyCode){
        commonAction.selectOptionFromDropdownByXpath(printf(manageSupplierBankAccountPageLocator.company_code_dropdown_xpath), printf(commonPageLocator.option_value_in_dropdown_xpath, companyCode))
    }

    selectValueFromCountryDropdown(country){
        commonAction.selectOptionFromDropdownByXpath(manageSupplierBankAccountPageLocator.country_dropdown_xpath, printf(commonPageLocator.option_value_in_dropdown_xpath, country))
    }

    selectValueFromBankNameDropdown(bankName){
        commonAction.selectOptionFromDropdownByXpath(manageSupplierBankAccountPageLocator.bank_name_dropdown_xpath, printf(commonPageLocator.option_value_in_dropdown_xpath, bankName))
    }

    selectValueFromSwiftCodeDropdown(code){
        commonAction.selectOptionFromDropdownByXpath(manageSupplierBankAccountPageLocator.swift_code_dropdown_xpath, printf(commonPageLocator.option_value_in_dropdown_xpath, code))
    }

    selectValueFromCurrencyDropdown(currency){
        commonAction.selectOptionFromDropdownByXpath(manageSupplierBankAccountPageLocator.currency_dropdown_xpath, printf(commonPageLocator.option_value_in_dropdown_xpath, currency))
    }

    checkToDefaultBankAccountCheckbox(){
        commonAction.checkCheckboxByXpath(manageSupplierBankAccountPageLocator.default_bank_account_ckb_xpath)
    }

    doubleClickToBankLabelInList(bankLabel){
        commonAction.doubleClickToElementByXpath(printf(manageSupplierBankAccountPageLocator.bank_label_in_list_xpath, bankLabel))
    }

    clickToRejectBankAccountButton(){
        commonAction.clickToElementByXpath(manageSupplierBankAccountPageLocator.reject_bank_account_button_xpath)
    }

    verifyActionInAuditTrailListDisplay(action){
        commonAction.verifyElementByXpathVisible(printf(manageSupplierBankAccountPageLocator.action_in_audit_trail_list_xpath, action))
    }

    verifyValueInCompanyCodeTextboxExist(companyCode){
        commonAction.verifyValueInTextboxExist(manageSupplierBankAccountPageLocator.company_code_txb_css, companyCode)
    }

    verifyValueInBankLabelTextboxExist(bankLabel){
        commonAction.verifyValueInTextboxExist(manageSupplierBankAccountPageLocator.bank_label_txb_css, bankLabel)
    }

    verifyValueInCountryTextboxExist(country){
        commonAction.verifyValueInTextboxExist(manageSupplierBankAccountPageLocator.country_txb_css, country)
    }

    verifyValueInBankNameTextboxExist(bankName){
        commonAction.verifyValueInTextboxExist(manageSupplierBankAccountPageLocator.bank_name_txb_css, bankName)
    }

    verifyValueInSwiftCodeTextboxExist(code){
        commonAction.verifyValueInTextboxExist(manageSupplierBankAccountPageLocator.swift_code_txb_css, code)
    }

    verifyValueInBankAccountNumberTextboxExist(accountNumber){
        commonAction.verifyValueInTextboxExist(manageSupplierBankAccountPageLocator.bank_account_number_txb_css, accountNumber)
    }

    verifyValueInAccountHolderNameTextboxExist(accountName){
        commonAction.verifyValueInTextboxExist(manageSupplierBankAccountPageLocator.account_holder_name_txb_css, accountName)
    }

    verifyValueInCurrencyTextboxExist(currency){
        commonAction.verifyValueInTextboxExist(manageSupplierBankAccountPageLocator.currency_txb_css, currency)
    }

    verifyValueInBranchTextboxExist(branchName){
        commonAction.verifyValueInTextboxExist(manageSupplierBankAccountPageLocator.branch_txb_css, branchName)
    }

    verifyValueInBranchCodeTextboxExist(branchCode){
        commonAction.verifyValueInTextboxExist(manageSupplierBankAccountPageLocator.branch_code_txb_css, branchCode)
    }

    verifyValueInBranchCityTextboxExist(branchCity){
        commonAction.verifyValueInTextboxExist(manageSupplierBankAccountPageLocator.branch_city_txb_css, branchCity)
    }

    verifyValueInBranchAddress1TextboxExist(address1){
        commonAction.verifyValueInTextboxExist(manageSupplierBankAccountPageLocator.branch_address_1_txb_css, address1)
    }

    verifyValueInBranchAddress2TextboxExist(address1){
        commonAction.verifyValueInTextboxExist(manageSupplierBankAccountPageLocator.branch_address_2_txb_css, address1)
    }

    verifyValueInPostalCodeTextboxExist(postalCode){
        commonAction.verifyValueInTextboxExist(manageSupplierBankAccountPageLocator.postal_code_txb_css, postalCode)
    }

    verifyValueInStateTextboxExist(state){
        commonAction.verifyValueInTextboxExist(manageSupplierBankAccountPageLocator.state_txb_css, state)
    }

    verifyAddSupplierBankAccountPageTitleDisplay(){
        commonAction.wait(1)
        commonAction.verifyElementByXpathVisible(manageSupplierBankAccountPageLocator.add_supplier_bank_page_title_xpath)
    }

    verifySupplierBankAccountDetailsPageTitleDisplay(){
        commonAction.wait(1)
        commonAction.verifyElementByXpathVisible(manageSupplierBankAccountPageLocator.supplier_bank_account_detail_page_title_xpath)
    }

    verifyListSupplierBanKAccountTitleDisplay(){
        commonAction.wait(1)
        commonAction.verifyElementByXpathVisible(manageSupplierBankAccountPageLocator.supplier_bank_account_list_page_title_xpath)
    }

    verifyBankLabelInListDisplay(bankLabel){
        commonAction.verifyElementByXpathVisible(printf(manageSupplierBankAccountPageLocator.bank_label_in_list_xpath, bankLabel))
    }

    getCompanyCodeInList(){
        return commonAction.getTextElement(manageSupplierBankAccountPageLocator.company_code_in_list_css)
    }

    getCompanyNameInList(){
        return commonAction.getTextElement(manageSupplierBankAccountPageLocator.company_name_in_list_css)
    }

    getBankStatusInList(){
        return commonAction.getTextElement(manageSupplierBankAccountPageLocator.bank_status_in_list_css)
    }

    getBankNameInList(){
        return commonAction.getTextElement(manageSupplierBankAccountPageLocator.bank_name_in_list_css)
    }

    getBankAccountNumberInList(){
        return commonAction.getTextElement(manageSupplierBankAccountPageLocator.bank_account_number_in_list_css)
    }

    getAccountHolderNameInList(){
        return commonAction.getTextElement(manageSupplierBankAccountPageLocator.account_holder_name_in_list_css)
    }

    getCommentInList(){
        return commonAction.getTextElement(manageSupplierBankAccountPageLocator.comment_in_list_css)
    }

    getValidationCompanyCode(){
        return commonAction.getTextElementByXpath(manageSupplierBankAccountPageLocator.validation_text_company_code_xpath)
    }

    getValidationBankLabel(){
        return commonAction.getTextElementByXpath(manageSupplierBankAccountPageLocator.validation_text_bank_label_xpath)
    }

    getValidationBranch(){
        return commonAction.getTextElementByXpath(manageSupplierBankAccountPageLocator.validation_text_branch_xpath)
    }

    getValidationCountry(){
        return commonAction.getTextElementByXpath(manageSupplierBankAccountPageLocator.validation_text_country_xpath)
    }

    getValidationBankName(){
        return commonAction.getTextElementByXpath(manageSupplierBankAccountPageLocator.validation_text_bank_name_xpath)
    }

    getValidationSwiftCode(){
        return commonAction.getTextElementByXpath(manageSupplierBankAccountPageLocator.validation_text_swift_code_xpath)
    }

    getValidationBankAccountNumber(){
        return commonAction.getTextElementByXpath(manageSupplierBankAccountPageLocator.validation_text_bank_account_number_xpath)
    }

    getValidationAccountHolderName(){
        return commonAction.getTextElementByXpath(manageSupplierBankAccountPageLocator.validation_text_account_holder_name_xpath)
    }

    getValidationCurrency(){
        return commonAction.getTextElementByXpath(manageSupplierBankAccountPageLocator.validation_text_currency_xpath)
    }

    getValidationBranchAddressLine1(){
        return commonAction.getTextElementByXpath(manageSupplierBankAccountPageLocator.validation_text_branch_address_1_xpath)
    }

    getValidationBranchAddressLine2(){
        return commonAction.getTextElementByXpath(manageSupplierBankAccountPageLocator.validation_text_branch_address_2_xpath)
    }

}export default ManageSupplierBankAccountPage