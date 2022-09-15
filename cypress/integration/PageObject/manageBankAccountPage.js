import CommonAction from '../commons/common_actions'
import CommonPageLocator from '../PageUI/commonPageUI'
import ManageBankAccountPageLocator from '../PageUI/manageBankAccountPageUI'

var printf = require('printf')
const commonAction = new CommonAction()
const commonPageLocator = new CommonPageLocator()
const manageBankAccountPageLocator = new ManageBankAccountPageLocator()

class ManageBankAccountPage{

    enterValueToFilterBankLabel(bankLabel){
        commonAction.enterValueToTextbox(manageBankAccountPageLocator.filter_bank_label_txb_css, bankLabel)
    }

    enterValueToFilterBankAccount(number){
        commonAction.enterValueToTextbox(manageBankAccountPageLocator.filter_bank_account_number_txb_css, number)
    }
    
    enterValueToBankLabelTextbox(bankLabel){
        commonAction.enterValueToTextbox(manageBankAccountPageLocator.bank_label_txb_css, bankLabel)
    }

    enterValueToBranchTextbox(branch){
        commonAction.enterValueToTextbox(manageBankAccountPageLocator.branch_txb_css, branch)
    }

    enterValueToBranchCodeTextbox(branchCode){
        commonAction.enterValueToTextbox(manageBankAccountPageLocator.branch_code_txb_css, branchCode)
    }

    enterValueToBranchCityTextbox(branchCity){
        commonAction.enterValueToTextbox(manageBankAccountPageLocator.branch_city_txb_css, branchCity)
    }

    enterValueToBranchAddress1Textbox(address1){
        commonAction.enterValueToTextbox(manageBankAccountPageLocator.branch_address_1_txb_css, address1)
    }

    enterValueToBranchAddress2Textbox(address1){
        commonAction.enterValueToTextbox(manageBankAccountPageLocator.branch_address_2_txb_css, address1)
    }

    enterValueToBankAccountNumberTextbox(number){
        commonAction.enterValueToTextboxAfterClear(manageBankAccountPageLocator.bank_account_number_txb_css, number)
    }

    enterValueToAccountHolderNameTextbox(name){
        commonAction.enterValueToTextboxAfterClear(manageBankAccountPageLocator.account_holder_name_txb_css, name)
    }

    enterValueToCurrencyTextbox(currency){
        commonAction.enterValueToTextbox(manageBankAccountPageLocator.currency_txb_css, currency)
    }

    enterValueToPostalCodeTextbox(postalCode){
        commonAction.enterValueToTextbox(manageBankAccountPageLocator.postal_code_txb_css, postalCode)
    }

    enterValueToStateTextbox(state){
        commonAction.enterValueToTextbox(manageBankAccountPageLocator.state_txb_css, state)
    }

    enterValueToCommentConversationsTextbox(comment){
        commonAction.enterValueToTextbox(manageBankAccountPageLocator.comment_conversation_txb_css, comment)
    }

    enterValueToRejectReasonTextbox(reason){
        commonAction.enterValueToTextbox(manageBankAccountPageLocator.reject_reason_txb_css, reason)
    }

    selectValueFromCountryDropdown(country){
        commonAction.selectOptionFromDropdownByXpath(manageBankAccountPageLocator.country_dropdown_xpath, printf(commonPageLocator.option_value_in_dropdown_xpath, country))
    }

    selectValueFromBankNameDropdown(bankName){
        commonAction.selectOptionFromDropdownByXpath(manageBankAccountPageLocator.bank_name_dropdown_xpath, printf(commonPageLocator.option_value_in_dropdown_xpath, bankName))
    }

    selectValueFromSwiftCodeDropdown(code){
        commonAction.selectOptionFromDropdownByXpath(manageBankAccountPageLocator.swift_code_dropdown_xpath, printf(commonPageLocator.option_value_in_dropdown_xpath, code))
    }

    selectValueFromCurrencyDropdown(currency){
        commonAction.selectOptionFromDropdownByXpath(manageBankAccountPageLocator.currency_dropdown_xpath, printf(commonPageLocator.option_value_in_dropdown_xpath, currency))
    }

    doubleClickToBankLabelInList(bankLabel){
        commonAction.doubleClickToElementByXpath(printf(manageBankAccountPageLocator.bank_label_in_list_xpath, bankLabel))
    }

    clickToRejectBankAccountButton(){
        commonAction.clickToElementByXpath(manageBankAccountPageLocator.reject_bank_account_button_xpath)
    }

    verifyActionInAuditTrailListDisplay(action){
        commonAction.verifyElementByXpathVisible(printf(manageBankAccountPageLocator.action_in_audit_trail_list_xpath, action))
    }

    verifyAddBankAccountPageTileDisplay(){
        commonAction.wait(1)
        commonAction.verifyElementByXpathVisible(manageBankAccountPageLocator.add_bank_account_page_title_xpath)
    }

    verifyBankAccountDetailsPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(manageBankAccountPageLocator.bank_account_details_page_title_xpath)
    }

    verifyListBankAccountTitleDisplay(){
        commonAction.wait(1)
        commonAction.verifyElementByXpathVisible(manageBankAccountPageLocator.bank_account_list_page_title_xpath)
    }

    verifyValueInBankLabelTextboxExist(bankLabel){
        commonAction.verifyValueInTextboxExist(manageBankAccountPageLocator.bank_label_txb_css, bankLabel)
    }

    verifyValueInCountryTextboxExist(country){
        commonAction.verifyValueInTextboxExist(manageBankAccountPageLocator.country_txb_css, country)
    }

    verifyValueInBankNameTextboxExist(bankName){
        commonAction.verifyValueInTextboxExist(manageBankAccountPageLocator.bank_name_txb_css, bankName)
    }

    verifyValueInSwiftCodeTextboxExist(code){
        commonAction.verifyValueInTextboxExist(manageBankAccountPageLocator.swift_code_txb_css, code)
    }

    verifyValueInBankAccountNoTextboxExist(number){
        commonAction.verifyValueInTextboxExist(manageBankAccountPageLocator.bank_account_number_txb_css, number)
    }

    verifyValueInAccountHolderNameTextboxExist(accountName){
        commonAction.verifyValueInTextboxExist(manageBankAccountPageLocator.account_holder_name_txb_css, accountName)
    }

    verifyValueInCurrencyTextboxExist(currency){
        commonAction.verifyValueInTextboxExist(manageBankAccountPageLocator.currency_txb_css, currency)
    }

    verifyValueInBranchTextboxExist(branchName){
        commonAction.verifyValueInTextboxExist(manageBankAccountPageLocator.branch_txb_css, branchName)
    }

    verifyValueInBranchCodeTextboxExist(branchCode){
        commonAction.verifyValueInTextboxExist(manageBankAccountPageLocator.branch_code_txb_css, branchCode)
    }

    verifyValueInBranchCityTextboxExist(branchCity){
        commonAction.verifyValueInTextboxExist(manageBankAccountPageLocator.branch_city_txb_css, branchCity)
    }

    verifyValueInBranchAddress1TextboxExist(address1){
        commonAction.verifyValueInTextboxExist(manageBankAccountPageLocator.branch_address_1_txb_css, address1)
    }

    verifyValueInBranchAddress2TextboxExist(address1){
        commonAction.verifyValueInTextboxExist(manageBankAccountPageLocator.branch_address_2_txb_css, address1)
    }

    verifyValueInPostalCodeTextboxExist(postalCode){
        commonAction.verifyValueInTextboxExist(manageBankAccountPageLocator.postal_code_txb_css, postalCode)
    }

    verifyValueInStateTextboxExist(state){
        commonAction.verifyValueInTextboxExist(manageBankAccountPageLocator.state_txb_css, state)
    }

    verifyBankLabelInListDisplay(bankLabel){
        commonAction.verifyElementByXpathVisible(printf(manageBankAccountPageLocator.bank_label_in_list_xpath, bankLabel))
    }

    getBankStatusInList(){
        return commonAction.getTextElement(manageBankAccountPageLocator.bank_status_in_list_css)
    }

    getBankNameInList(){
        return commonAction.getTextElement(manageBankAccountPageLocator.bank_name_in_list_css)
    }

    getBankAccountNumberInList(){
        return commonAction.getTextElement(manageBankAccountPageLocator.bank_account_number_in_list_css)
    }

    getAccountHolderNameInList(){
        return commonAction.getTextElement(manageBankAccountPageLocator.account_holder_name_in_list_css)
    }

    getCurrencyInList(){
        return commonAction.getTextElement(manageBankAccountPageLocator.currency_in_list_css)
    }

    getRequesterBankAccountInList(){
        return commonAction.getTextElement(manageBankAccountPageLocator.requester_bank_account_in_list_css)
    }

    getApproverBankAccountInList(){
        return commonAction.getTextElement(manageBankAccountPageLocator.approver_bank_account_in_list_css)
    }

    getCommentInList(){
        return commonAction.getTextElement(manageBankAccountPageLocator.comment_in_list_css)
    }

    getValidationBankLabel(){
        return commonAction.getTextElementByXpath(manageBankAccountPageLocator.validation_text_bank_label_xpath)
    }

    getValidationBranch(){
        return commonAction.getTextElementByXpath(manageBankAccountPageLocator.validation_text_branch_xpath)
    }

    getValidationCountry(){
        return commonAction.getTextElementByXpath(manageBankAccountPageLocator.validation_text_country_xpath)
    }

    getValidationBankName(){
        return commonAction.getTextElementByXpath(manageBankAccountPageLocator.validation_text_bank_name_xpath)
    }

    getValidationSwiftCode(){
        return commonAction.getTextElementByXpath(manageBankAccountPageLocator.validation_text_swift_code_xpath)
    }

    getValidationBankAccountNumber(){
        return commonAction.getTextElementByXpath(manageBankAccountPageLocator.validation_text_bank_account_number_xpath)
    }

    getValidationAccountHolderName(){
        return commonAction.getTextElementByXpath(manageBankAccountPageLocator.validation_text_account_holder_name_xpath)
    }

    getValidationCurrency(){
        return commonAction.getTextElementByXpath(manageBankAccountPageLocator.validation_text_currency_xpath)
    }

    getValidationBranchAddressLine1(){
        return commonAction.getTextElementByXpath(manageBankAccountPageLocator.validation_text_branch_address_1_xpath)
    }

    getValidationBranchAddressLine2(){
        return commonAction.getTextElementByXpath(manageBankAccountPageLocator.validation_text_branch_address_2_xpath)
    }

}export default ManageBankAccountPage