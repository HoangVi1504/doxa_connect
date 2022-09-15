import ApiAction from "../commons/call_api"
import { faker } from '@faker-js/faker';
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import ManageExternalVendorPage from '../PageObject/manageExternalVendorPage';

var dataCommon = require('../data/dataCommon.json');
var manageExternalBuyer = require('../data/manageExternalBuyer.json');
var manageExternalSupplier = require('../data/manageExternalSupplier.json');
let manageExternalVendor

const apiAction = new ApiAction()
const manageExternalVendorPage = new ManageExternalVendorPage()

When(/^Navigate to Vendor Details page of external vendor just created$/, () => {
    apiAction.navigateToVendorDetailsPage(manageExternalVendor.companyNameExternal)
})

When(/^I input random company code to 'Filter Company Code' in 'Manage External Vendor' list$/, () => {
    manageExternalVendorPage.enterValueToFilterCompanyCode(manageExternalVendor.companyCodeExternal)
})

When(/^I input random company name to 'Filter Company Name' in 'Manage External Vendor' list$/, () => {
    manageExternalVendorPage.enterValueToFilterCompanyName(manageExternalVendor.companyNameExternal)
})

When(/^I input random value to 'Filter Company Reg' in 'Manage External Vendor' list$/, () => {
    manageExternalVendorPage.enterValueToFilterCompanyRegNumber(manageExternalVendor.companyRegExternal)
})

When(/^I input random company code of role "([^"]*)" to 'Company Code' textbox at 'Create External Vendor' page$/, (roleName) => {
    if(roleName == "Buyer"){
        manageExternalVendor = manageExternalBuyer
    }
    else if(roleName == "Supplier"){
        manageExternalVendor = manageExternalSupplier
    }
    manageExternalVendorPage.enterValueToCompanyCodeTextbox(manageExternalVendor.companyCodeExternal)
})

When(/^I input random company reg number to 'Company Reg No' textbox at 'Create External Vendor' page$/, () => {
    manageExternalVendorPage.enterValueToCompanyRegNumberTextbox(manageExternalVendor.companyRegExternal)
})

When(/^I input random value to 'Company Reg No' textbox at 'Vendor Details' page$/, () => {
    sessionStorage.setItem("companyRegExternal", "COMPANY_REG_" + faker.random.numeric(5))
    manageExternalVendorPage.enterValueToCompanyRegNumberTextbox(sessionStorage.getItem("companyRegExternal"))
})

When(/^I input random value to 'Company Name' textbox at 'Vendor Details' page$/, () => {
    sessionStorage.setItem("companyNameExternal", "AUTO COMPANY NAME " + faker.random.numeric(5))
    manageExternalVendorPage.enterValueToCompanyNameTextbox(sessionStorage.getItem("companyNameExternal"))
})

When(/^I input random company name to 'Company Name' textbox at 'Create External Vendor' page$/, () => {
    manageExternalVendorPage.enterValueToCompanyNameTextbox(manageExternalVendor.companyNameExternal)
})

When(/^I input random full name to 'Full Name' textbox at 'Create External Vendor' page$/, () => {
    manageExternalVendorPage.enterValueToFullNameTextbox(dataCommon.fullName)
})

When(/^I input random email to 'Email Contact' textbox at 'Create External Vendor' page$/, () => {
    manageExternalVendorPage.enterValueToEmailTextbox(dataCommon.email)
})

When(/^I input random phone number to 'Phone Number' textbox at 'Create External Vendor' page$/, () => {
    manageExternalVendorPage.enterValueToPhoneNumberTextbox(dataCommon.phoneNumber)
})

When(/^I input random address label to 'Address Label' textbox at 'Create External Vendor' page$/, () => {
    manageExternalVendorPage.enterValueToAddressLabelTextbox(dataCommon.addressLabel)
})

When(/^I input random address 1 to 'Address Line 1' textbox at 'Create External Vendor' page$/, () => {
    manageExternalVendorPage.enterValueToAddressLine1Textbox(dataCommon.address1)
})

When(/^I input random address 2 to 'Address Line 2' textbox at 'Create External Vendor' page$/, () => {
    manageExternalVendorPage.enterValueToAddressLine2Textbox(dataCommon.address2)
})

When(/^I input "([^"]*)" to 'Address City' textbox at 'Create External Vendor' page$/, (city) => {
    manageExternalVendorPage.enterValueToAddressCityTextbox(city)
})

When(/^I input "([^"]*)" to 'State' textbox at 'Create External Vendor' page$/, (state) => {
    manageExternalVendorPage.enterValueToStateTextbox(state)
})

When(/^I input random postal code to 'Postal Code' textbox at 'Create External Vendor' page$/, () => {
    manageExternalVendorPage.enterValueToPostalCodeTextbox(dataCommon.postalCode)
})

When(/^I input random full name to 'Full Name' in 'Contact' list at 'Create External Vendor' page$/, () => {
    sessionStorage.setItem("fullNameContact", "auto full name " + faker.random.alphaNumeric(5))
    manageExternalVendorPage.enterValueToFullNameInContactList(sessionStorage.getItem("fullNameContact"))
})

When(/^I input random contact number to 'Contact Number' in 'Contact' list at 'Create External Vendor' page$/, () => {
    sessionStorage.setItem("contactNumber", faker.random.numeric(10))
    manageExternalVendorPage.enterValueToContactNumberInContactList(sessionStorage.getItem("contactNumber"))
})

When(/^I input random email address to 'Email Address' in 'Contact' list at 'Create External Vendor' page$/, () => {
    sessionStorage.setItem("emailAddressContact", faker.internet.userName() + "@getnada.com")
    manageExternalVendorPage.enterValueToEmailAddressInContactList(sessionStorage.getItem("emailAddressContact"))
})

When(/^I input random tax reg no to 'Tax Reg No' textbox 'Create External Vendor' page$/, () => {
    sessionStorage.setItem("taxRegNo", "auto tax reg no " + faker.random.numeric(4))
    manageExternalVendorPage.enterValueToTaxRegNumberTextbox(sessionStorage.getItem("taxRegNo"))
})

When(/^I select "([^"]*)" from 'Dial Code' dropdown at 'Create External Vendor' page$/, (dialCode) => {
    manageExternalVendorPage.selectValueFromDialCodeDropdown(dialCode)
})

When(/^I select "([^"]*)" from 'Country Origin' dropdown at 'Create External Vendor' page$/, (country) => {
    manageExternalVendorPage.selectValueFromCountryOriginDropdown(country)
})

When(/^I select "([^"]*)" from 'Bank Account' dropdown at 'Create External Vendor' page$/, (bankAccount) => {
    manageExternalVendorPage.selectValueFromBankAccountDropdown(bankAccount)
})

When(/^I select "([^"]*)" from 'Payment Term' dropdown at 'Create External Vendor' page$/, (paymentTerm) => {
    manageExternalVendorPage.selectValueFromPaymentTermDropdown(paymentTerm)
})

When(/^I select "([^"]*)" from 'Country' dropdown at 'Create External Vendor' page$/, (country) => {
    manageExternalVendorPage.selectValueFromAddressCountryDropdown(country)
})

When(/^I select "([^"]*)" from 'Tax Code' dropdown at 'Create External Vendor' page$/, (taxCode) => {
    manageExternalVendorPage.selectValueFromTaxCodeDropdown(taxCode)
})

When(/^I select 'Singapore' from 'Country Code' in 'Contact' list at 'Create External Vendor' page$/, () => {
    manageExternalVendorPage.selectValueFromCountryCodeInContactList()
})

When(/^I check to business role "([^"]*)" checkbox at 'Create External Vendor' page$/, (businessRole) => {
    manageExternalVendorPage.checkToOptionBusinessRoleCheckbox(businessRole)
})

When(/^I uncheck to business role "([^"]*)" checkbox at 'Create External Vendor' page$/, (businessRole) => {
    manageExternalVendorPage.uncheckToOptionBusinessRoleCheckbox(businessRole)
})

When(/^I check to 'Tax-Registered Business' checkbox at 'Create External Vendor' page$/, () => {
    manageExternalVendorPage.checkToTaxRegisteredBusinessCheckbox()
})

When(/^I double click to random company code in 'Manage External Vendor' list$/, () => {
    manageExternalVendorPage.doubleClickToCompanyCodeInList(manageExternalVendor.companyCodeExternal)
})

Then(/^I see business role "([^"]*)" checkbox at 'Create External Vendor' page is uncheck$/, (roleName) => {
    manageExternalVendorPage.verifyOptionBusinessRoleCheckboxIsUnchecked(roleName)
})

Then(/^I see 'Create External Vendor' page$/, () => {
    manageExternalVendorPage.verifyCreateExternalVendorPageTitleDisplay()
})

Then(/^I see 'Vendor Details' page$/, () => {
    manageExternalVendorPage.verifyVendorDetailsPageTitleDisplay()
})

Then(/^I see 'Manage External Vendor' title$/, () => {
    manageExternalVendorPage.verifyManageExternalVendorListTitleDisplay()
})

Then(/^I see random company code in 'Company Code' textbox at 'Vendor Details' page$/, () => {
    manageExternalVendorPage.verifyValueInCompanyCodeTextboxExist(manageExternalVendor.companyCodeExternal)
})

Then(/^I see random company reg in 'Company Reg Number' textbox at 'Vendor Details' page$/, () => {
    manageExternalVendorPage.verifyValueInCompanyRegNumberTextboxExist(manageExternalVendor.companyRegExternal)
})

Then(/^I see random company name in 'Company Name' textbox at 'Vendor Details' page$/, () => {
    manageExternalVendorPage.verifyValueInCompanyNameTextboxExist(manageExternalVendor.companyNameExternal)
})

Then(/^I see payment term in 'Payment Term' dropdown at 'Vendor Details' page is "([^"]*)"$/, (paymentTerm) => {
    manageExternalVendorPage.verifyValueInPaymentTermDropdownExits(paymentTerm)
})

Then(/^I see bank account in 'Bank Account' dropdown at 'Vendor Details' page is "([^"]*)"$/, (bankAccount) => {
    manageExternalVendorPage.verifyValueInBankAccountTextboxExist(bankAccount)
})

Then(/^I see tax code in 'Tax Code' textbox at 'Vendor Details' page is "([^"]*)"$/, (taxCode) => {
    manageExternalVendorPage.verifyValueInTaxCodeTextboxExist(taxCode)
})

Then(/^I see random tax reg no in 'Tax Reg Number' textbox at 'Vendor Details' page$/, () => {
    manageExternalVendorPage.verifyValueInTaxRegNumberTextboxExist(sessionStorage.getItem("taxRegNo"))
})

Then(/^I see tax percentage in 'Tax Percentage' textbox at 'Vendor Details' page is "([^"]*)"$/, (value) => {
    manageExternalVendorPage.verifyValueInTaxPercentageTextboxExist(value)
})

Then(/^I see random full name in 'Full Name' textbox at 'Vendor Details' page$/, () => {
    manageExternalVendorPage.verifyValueInFullNameInTextboxExist(dataCommon.fullName)
})

Then(/^I see random email in 'Email' textbox at 'Vendor Details' page$/, () => {
    manageExternalVendorPage.verifyValueInEmailTextboxExist(dataCommon.email)
})

Then(/^I see random phone number in 'Phone Number' textbox at 'Vendor Details' page$/, () => {
    manageExternalVendorPage.verifyValueInPhoneNumberTextboxExist(dataCommon.phoneNumber)
})

Then(/^I see random address label in 'Address Label' textbox at 'Vendor Details' page$/, () => {
    manageExternalVendorPage.verifyValueInAddressLabelTextboxExist(dataCommon.addressLabel)
})

Then(/^I see random address line 1 in 'Address Line 1' textbox at 'Vendor Details' page$/, () => {
    manageExternalVendorPage.verifyValueInAddressLine1TextboxExist(dataCommon.address1)
})

Then(/^I see random address line 2 in 'Address Line 2' textbox at 'Vendor Details' page$/, () => {
    manageExternalVendorPage.verifyValueInAddressLine2TextboxExist(dataCommon.address2)
})

Then(/^I see address city in 'Address City' textbox at 'Vendor Details' page is "([^"]*)"$/, (city) => {
    manageExternalVendorPage.verifyValueInAddressCityTextboxExist(city)
})

Then(/^I see state in 'State' textbox at 'Vendor Details' page is "([^"]*)"$/, (state) => {
    manageExternalVendorPage.verifyValueInStateTextboxExist(state)
})

Then(/^I see random postal code in 'Postal Code' textbox at 'Vendor Details' page$/, (postalCode) => {
    manageExternalVendorPage.verifyValueInPostalCodeTextboxExist(postalCode)
})

Then(/^I see random company code in 'Manage External Vendor' list$/, () => {
    manageExternalVendorPage.verifyCompanyCodeInListDisplay(manageExternalVendor.companyCodeExternal)
})

Then(/^I see connection in 'Manage External Vendor' list is "([^"]*)"$/, (connectionStatus) => {
    manageExternalVendorPage.getConnectionStatusInList().should('have.text', connectionStatus)
})

Then(/^I see random company name in 'Manage External Vendor' list$/, () => {
    manageExternalVendorPage.getCompanyNameInList().should('have.text', manageExternalVendor.companyNameExternal)
})

Then(/^I see random value company name in 'Manage External Vendor' list$/, () => {
    manageExternalVendorPage.getCompanyNameInList().should('have.text', sessionStorage.getItem("companyNameExternal"))
})

Then(/^I see random value company reg no in 'Manage External Vendor' list$/, () => {
    manageExternalVendorPage.getCompanyRegNoInList().should('have.text', sessionStorage.getItem("companyRegExternal"))
})

Then(/^I see random company reg number in 'Manage External Vendor' list$/, () => {
    manageExternalVendorPage.getCompanyRegNoInList().should('have.text', manageExternalVendor.companyRegExternal)
})

Then(/^I see tax registered company status in 'Manage External Vendor' list is "([^"]*)"$/, (taxStatus) => {
    manageExternalVendorPage.getTaxRegisteredStatusInList().should('have.text', taxStatus)
})

Then(/^I see random contact person in 'Manage External Vendor' list$/, () => {
    manageExternalVendorPage.getContactPersonInList().should('have.text', dataCommon.fullName)
})

Then(/^I see random email in 'Manage External Vendor' list$/, () => {
    manageExternalVendorPage.getEmailInList().should('have.text', dataCommon.email)
})

Then(/^I see system status in 'Manage External Vendor' list is "([^"]*)"$/, (systemStatus) => {
    manageExternalVendorPage.getSystemStatusInList().should('have.text', systemStatus)
})

Then(/^I see a validation text of 'Company Code' at 'Create External Vendor' page appears "([^"]*)"$/, (validation) => {
    manageExternalVendorPage.getValidationCompanyCode().should('have.text', validation)
})

Then(/^I see a validation text of 'Company Reg No' at 'Create External Vendor' page appears "([^"]*)"$/, (validation) => {
    manageExternalVendorPage.getValidationCompanyRegNo().should('have.text', validation)
})

Then(/^I see a validation text of 'Company Name' at 'Create External Vendor' page appears "([^"]*)"$/, (validation) => {
    manageExternalVendorPage.getValidationCompanyName().should('have.text', validation)
})

Then(/^I see a validation text of 'Full Name' at 'Create External Vendor' page appears "([^"]*)"$/, (validation) => {
    manageExternalVendorPage.getValidationFullName().should('have.text', validation)
})

Then(/^I see a validation text of 'Email' at 'Create External Vendor' page appears "([^"]*)"$/, (validation) => {
    manageExternalVendorPage.getValidationEmail().should('have.text', validation)
})

Then(/^I see a validation text of 'Phone Number' at 'Create External Vendor' page appears "([^"]*)"$/, (validation) => {
    manageExternalVendorPage.getValidationPhoneNumber().should('have.text', validation)
})

Then(/^I see a validation text of 'Address Label' at 'Create External Vendor' page appears "([^"]*)"$/, (validation) => {
    manageExternalVendorPage.getValidationAddressLabel().should('have.text', validation)
})

Then(/^I see a validation text of 'Address Line 1' at 'Create External Vendor' page appears "([^"]*)"$/, (validation) => {
    manageExternalVendorPage.getValidationAddressLine1().should('have.text', validation)
})

Then(/^I see a validation text of 'State' at 'Create External Vendor' page appears "([^"]*)"$/, (validation) => {
    manageExternalVendorPage.getValidationState().should('have.text', validation)
})

Then(/^I see a validation text of 'Postal Code' at 'Create External Vendor' page appears "([^"]*)"$/, (validation) => {
    manageExternalVendorPage.getValidationPostalCode().should('have.text', validation)
})

Then(/^I see a validation text of 'Tax Reg.No' at 'Create External Vendor' page appears "([^"]*)"$/, (validation) => {
    manageExternalVendorPage.getValidationTaxRegNo().should('have.text', validation)
})

Then(/^I see a validation text of 'Tax Percentage' at 'Create External Vendor' page appears "([^"]*)"$/, (validation) => {
    manageExternalVendorPage.getValidationTaxPercentage().should('have.text', validation)
})