import CommonAction from '../commons/common_actions'
import CommonPageLocator from '../PageUI/commonPageUI'
import ManageExternalVendorPageLocator from '../PageUI/manageExternalVendorPageUI'

var printf = require('printf')
const commonAction = new CommonAction()
const commonPageLocator = new CommonPageLocator()
const manageExternalVendorPageLocator = new ManageExternalVendorPageLocator()

class ManageExternalVendorPage{

    enterValueToFilterCompanyCode(companyCode){
        commonAction.enterValueToTextbox(manageExternalVendorPageLocator.filter_company_code_txb_css, companyCode)
    }

    enterValueToFilterCompanyName(companyName){
        commonAction.enterValueToTextbox(manageExternalVendorPageLocator.filter_company_name_txb_css, companyName)
    }

    enterValueToFilterCompanyRegNumber(companyRegNo){
        commonAction.enterValueToTextbox(manageExternalVendorPageLocator.filter_company_reg_number_txb_css, companyRegNo)
    }

    enterValueToTaxRegNumberTextbox(taxRegNo){
        commonAction.enterValueToTextbox(manageExternalVendorPageLocator.tax_reg_number_txb_css, taxRegNo)
    }

    enterValueToCompanyCodeTextbox(companyCode){
        commonAction.enterValueToTextbox(manageExternalVendorPageLocator.company_code_txb_css, companyCode)
    }

    enterValueToCompanyRegNumberTextbox(regNo){
        commonAction.enterValueToTextboxAfterClear(manageExternalVendorPageLocator.company_reg_txb_css, regNo)
    }

    enterValueToCompanyNameTextbox(companyName){
        commonAction.enterValueToTextboxAfterClear(manageExternalVendorPageLocator.company_name_txb_css, companyName)
    }

    enterValueToFullNameTextbox(fullName){
        commonAction.enterValueToTextbox(manageExternalVendorPageLocator.full_name_txb_css, fullName)
    }

    enterValueToEmailTextbox(email){
        commonAction.enterValueToTextbox(manageExternalVendorPageLocator.email_txb_css, email)
    }

    enterValueToPhoneNumberTextbox(phone){
        commonAction.enterValueToTextbox(manageExternalVendorPageLocator.phone_number_txb_css, phone)
    }

    enterValueToAddressLabelTextbox(addressLabel){
        commonAction.enterValueToTextbox(manageExternalVendorPageLocator.address_label_txb_css, addressLabel)
    }

    enterValueToAddressLine1Textbox(address1){
        commonAction.enterValueToTextbox(manageExternalVendorPageLocator.address_line_1_txb_css, address1)
    }

    enterValueToAddressLine2Textbox(address2){
        commonAction.enterValueToTextbox(manageExternalVendorPageLocator.address_line_2_txb_css, address2)
    }

    enterValueToAddressCityTextbox(city){
        commonAction.enterValueToTextbox(manageExternalVendorPageLocator.address_city_txb_css, city)
    }

    enterValueToStateTextbox(state){
        commonAction.enterValueToTextbox(manageExternalVendorPageLocator.address_state_txb_css, state)
    }

    enterValueToPostalCodeTextbox(postalCode){
        commonAction.enterValueToTextbox(manageExternalVendorPageLocator.address_postal_code_txb_css, postalCode)
    }

    enterValueToFullNameInContactList(fullName){
        commonAction.wait(2)
        commonAction.clickToElement(manageExternalVendorPageLocator.full_name_in_contact_list_css)
        commonAction.clickToElement(manageExternalVendorPageLocator.full_name_in_contact_list_css)
        commonAction.enterValueToTextboxByXpath(manageExternalVendorPageLocator.full_name_txb_in_contact_list_xpath, fullName)
    }

    enterValueToContactNumberInContactList(number){
        commonAction.doubleClickToElement(manageExternalVendorPageLocator.contact_number_in_contact_list_css)
        commonAction.enterValueToTextboxByXpath(manageExternalVendorPageLocator.contact_number_txb_in_contact_list_xpath, number)
    }

    enterValueToEmailAddressInContactList(email){
        commonAction.doubleClickToElement(manageExternalVendorPageLocator.email_address_in_contact_list_css)
        commonAction.enterValueToTextboxByXpath(manageExternalVendorPageLocator.email_address_txb_in_contact_list_xpath, email)
    }

    selectValueFromPaymentTermDropdown(value){
        commonAction.selectOptionFromDropdownByXpath(manageExternalVendorPageLocator.payment_term_dropdown_xpath, printf(commonPageLocator.option_value_in_dropdown_xpath, value))
    }

    selectValueFromCountryOriginDropdown(country){
        commonAction.selectOptionFromDropdownByXpath(manageExternalVendorPageLocator.country_origin_dropdown_xpath, printf(commonPageLocator.option_value_in_dropdown_xpath, country))
    }

    selectValueFromBankAccountDropdown(bankAccount){
        commonAction.selectOptionFromDropdownByXpath(manageExternalVendorPageLocator.bank_account_dropdown_xpath, printf(commonPageLocator.option_value_in_dropdown_xpath, bankAccount))
    }

    selectValueFromDialCodeDropdown(dialCode){
        commonAction.selectOptionFromDropdownByXpath(manageExternalVendorPageLocator.dial_code_dropdown_xpath, printf(commonPageLocator.option_value_in_dropdown_xpath, dialCode))
    }

    selectValueFromAddressCountryDropdown(country){
        commonAction.selectOptionFromDropdownByXpath(manageExternalVendorPageLocator.address_country_dropdown_xpath, printf(commonPageLocator.option_value_in_dropdown_xpath, country))
    }

    selectValueFromTaxCodeDropdown(taxCode){
        commonAction.selectOptionFromDropdownByXpath(manageExternalVendorPageLocator.tax_code_dropdown_xpath, printf(commonPageLocator.option_value_in_dropdown_xpath, taxCode))
    }

    selectValueFromCountryCodeInContactList(){
        commonAction.clickToElement(manageExternalVendorPageLocator.country_code_in_contact_list_css)
        commonAction.clickToElementByXpath("(//*[@class=' css-tlfecz-indicatorContainer'])[6]")
        commonAction.clickToElement("#react-select-12-option-199")
    }

    uncheckToOptionBusinessRoleCheckbox(roleName){
        commonAction.forceClickToElementByXpath(printf(manageExternalVendorPageLocator.option_business_role_ckb_xpath, roleName))
    }

    checkToOptionBusinessRoleCheckbox(roleName){
        commonAction.checkCheckboxByXpath(printf(manageExternalVendorPageLocator.option_business_role_ckb_xpath, roleName))
    }

    checkToTaxRegisteredBusinessCheckbox(){
        commonAction.checkCheckboxByXpath(manageExternalVendorPageLocator.tax_registered_business_ckb_xpath)
    }

    doubleClickToCompanyCodeInList(companyCode){
        commonAction.doubleClickToElementByXpath(printf(manageExternalVendorPageLocator.company_code_in_list_xpath, companyCode))
    }

    verifyOptionBusinessRoleCheckboxIsUnchecked(roleName){
        commonAction.verifyCheckBoxIsNotCheckedByXpath(printf(manageExternalVendorPageLocator.option_business_role_ckb_xpath, roleName))
    }

    verifyCreateExternalVendorPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(manageExternalVendorPageLocator.create_external_vendor_page_title_xpath)
        commonAction.wait(1)
    }

    verifyVendorDetailsPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(manageExternalVendorPageLocator.vendor_details_page_title_xpath)
    }

    verifyManageExternalVendorListTitleDisplay(){
        commonAction.verifyElementByXpathVisible(manageExternalVendorPageLocator.manage_external_vendor_list_page_title_xpath)
        commonAction.wait(2)
    }

    verifyValueInCompanyCodeTextboxExist(companyCode){
        commonAction.verifyValueInTextboxExist(manageExternalVendorPageLocator.company_code_txb_css, companyCode)
    }

    verifyValueInCompanyRegNumberTextboxExist(regNo){
        commonAction.verifyValueInTextboxExist(manageExternalVendorPageLocator.company_reg_txb_css, regNo)
    }

    verifyValueInCompanyNameTextboxExist(companyName){
        commonAction.verifyValueInTextboxExist(manageExternalVendorPageLocator.company_name_txb_css, companyName)
    }

    verifyValueInPaymentTermDropdownExits(value){
        commonAction.verifyElementByXpathVisible(printf(manageExternalVendorPageLocator.payment_term_in_dropdown_xpath, value))
    }

    verifyValueInBankAccountTextboxExist(bankAccount){
        commonAction.verifyValueInTextboxExistByXpath(manageExternalVendorPageLocator.bank_account_txb_xpath, bankAccount)
    }

    verifyValueInTaxCodeTextboxExist(taxCode){
        commonAction.verifyValueInTextboxExistByXpath(manageExternalVendorPageLocator.tax_code_txb_xpath, taxCode)
    }

    verifyValueInTaxRegNumberTextboxExist(taxReg){
        commonAction.wait(1)
        commonAction.verifyValueInTextboxExist(manageExternalVendorPageLocator.tax_reg_number_txb_css, taxReg)
    }

    verifyValueInTaxPercentageTextboxExist(value){
        commonAction.verifyValueInTextboxExist(manageExternalVendorPageLocator.tax_percentage_txb_css, value)
    }

    verifyValueInFullNameInTextboxExist(fullName){
        commonAction.verifyValueInTextboxExist(manageExternalVendorPageLocator.full_name_txb_css, fullName)
    }

    verifyValueInEmailTextboxExist(email){
        commonAction.verifyValueInTextboxExist(manageExternalVendorPageLocator.email_txb_css, email)
    }

    verifyValueInPhoneNumberTextboxExist(phoneNumber){
        commonAction.verifyValueInTextboxExist(manageExternalVendorPageLocator.phone_number_txb_css, phoneNumber)
    }

    verifyValueInAddressLabelTextboxExist(addressLabel){
        commonAction.verifyValueInTextboxExist(manageExternalVendorPageLocator.address_label_txb_css, addressLabel)
    }

    verifyValueInAddressLine1TextboxExist(address1){
        commonAction.verifyValueInTextboxExist(manageExternalVendorPageLocator.address_line_1_txb_css, address1)
    }

    verifyValueInAddressLine2TextboxExist(address2){
        commonAction.verifyValueInTextboxExist(manageExternalVendorPageLocator.address_line_2_txb_css, address2)
    }

    verifyValueInAddressCityTextboxExist(city){
        commonAction.verifyValueInTextboxExist(manageExternalVendorPageLocator.address_city_txb_css, city)
    }

    verifyValueInStateTextboxExist(state){
        commonAction.verifyValueInTextboxExist(manageExternalVendorPageLocator.address_state_txb_css, state)
    }

    verifyValueInPostalCodeTextboxExist(postalCode){
        commonAction.verifyValueInTextboxExist(manageExternalVendorPageLocator.address_postal_code_txb_css, postalCode)
    }

    verifyCompanyCodeInListDisplay(companyCode){
        commonAction.verifyElementByXpathVisible(printf(manageExternalVendorPageLocator.company_code_in_list_xpath, companyCode))
    }

    getConnectionStatusInList(){
        return commonAction.getTextElement(manageExternalVendorPageLocator.connection_status_in_list_css)
    }

    getCompanyNameInList(){
        return commonAction.getTextElement(manageExternalVendorPageLocator.company_name_in_list_css)
    }

    getCompanyRegNoInList(){
        return commonAction.getTextElement(manageExternalVendorPageLocator.company_reg_no_in_list_css)
    }

    getTaxRegisteredStatusInList(){
        return commonAction.getTextElement(manageExternalVendorPageLocator.tax_registered_status_in_list_css)
    }

    getContactPersonInList(){
        return commonAction.getTextElement(manageExternalVendorPageLocator.contact_person_in_list_css)
    }

    getEmailInList(){
        return commonAction.getTextElement(manageExternalVendorPageLocator.email_in_list_css)
    }

    getSystemStatusInList(){
        return commonAction.getTextElement(manageExternalVendorPageLocator.system_status_in_list_css)
    }

    getValidationCompanyCode(){
        return commonAction.getTextElementByXpath(manageExternalVendorPageLocator.validation_text_company_code_xpath)
    }

    getValidationCompanyRegNo(){
        return commonAction.getTextElementByXpath(manageExternalVendorPageLocator.validation_text_company_reg_xpath)
    }

    getValidationPaymentTerm(){
        return commonAction.getTextElementByXpath(manageExternalVendorPageLocator.validation_text_payment_term_xpath)
    }

    getValidationCompanyName(){
        return commonAction.getTextElementByXpath(manageExternalVendorPageLocator.validation_text_company_name_xpath)
    }

    getValidationCountryOfOrigin(){
        return commonAction.getTextElementByXpath(manageExternalVendorPageLocator.validation_text_country_of_origin_xpath)
    }

    getValidationFullName(){
        return commonAction.getTextElementByXpath(manageExternalVendorPageLocator.validation_text_full_name_xpath)
    }

    getValidationEmail(){
        return commonAction.getTextElementByXpath(manageExternalVendorPageLocator.validation_text_email_xpath)
    }

    getValidationCountryCode(){
        return commonAction.getTextElementByXpath(manageExternalVendorPageLocator.validation_text_country_code_xpath)
    }

    getValidationPhoneNumber(){
        return commonAction.getTextElementByXpath(manageExternalVendorPageLocator.validation_text_phone_number_xpath)
    }

    getValidationAddressLabel(){
        return commonAction.getTextElementByXpath(manageExternalVendorPageLocator.validation_text_address_label_xpath)
    }

    getValidationAddressLine1(){
        return commonAction.getTextElementByXpath(manageExternalVendorPageLocator.validation_text_address_line_1_xpath)
    }

    getValidationState(){
        return commonAction.getTextElementByXpath(manageExternalVendorPageLocator.validation_text_state_xpath)
    }

    getValidationPostalCode(){
        return commonAction.getTextElementByXpath(manageExternalVendorPageLocator.validation_text_postal_code_xpath)
    }

    getValidationCountry(){
        return commonAction.getTextElementByXpath(manageExternalVendorPageLocator.validation_text_country_xpath)
    }

    getValidationTaxRegNo(){
        return commonAction.getTextElementByXpath(manageExternalVendorPageLocator.validation_text_reg_no_xpath)
    }

    getValidationTaxPercentage(){
        return commonAction.getTextElementByXpath(manageExternalVendorPageLocator.validation_text_tax_percentage_xpath)
    }

}export default ManageExternalVendorPage