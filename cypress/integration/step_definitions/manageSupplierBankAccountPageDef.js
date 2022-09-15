import { faker } from '@faker-js/faker';
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import ManageSupplierBankAccountPage from '../PageObject/manageSupplierBankAccountPage';

const manageSupplierBankAccountPage = new ManageSupplierBankAccountPage()

var dataCommon = require('../data/dataCommon.json');
var manageBankAccount = require('../data/manageBankAccount.json');

When(/^I input bank label just created to 'Filter Bank Label' in 'Supplier Bank Account' list$/, () => {
    manageSupplierBankAccountPage.enterValueToFilterBankLabel(manageBankAccount.bankLabel)
})

When(/^I input bank account number just created to 'Filter Bank Account No' in 'Supplier Bank Account' list$/, () => {
    manageSupplierBankAccountPage.enterValueToFilterBankAccount(manageBankAccount.bankAccountNumber)
})

When(/^I input random bank label to 'Bank Label' textbox at 'Add New Supplier Bank Account' page$/, () => {
    manageSupplierBankAccountPage.enterValueToBankLabelTextbox(manageBankAccount.bankLabel)
})

When(/^I input random bank account number to 'Bank Account No' textbox at 'Add New Supplier Bank Account' page$/, () => {
    manageSupplierBankAccountPage.enterValueToBankAccountNumberTextbox(manageBankAccount.bankAccountNumber)
})

When(/^I input random value to 'Bank Account No' textbox at 'Add New Supplier Bank Account' page$/, () => {
    sessionStorage.setItem("bankAccountNo", faker.random.numeric(5))
    manageSupplierBankAccountPage.enterValueToBankAccountNumberTextbox(sessionStorage.getItem("bankAccountNo"))
})

When(/^I input random value to 'Account Holder Name' textbox at 'Add New Supplier Bank Account' page$/, () => {
    sessionStorage.setItem("accountHolderName", "auto holder name " + faker.random.alphaNumeric(5))
    manageSupplierBankAccountPage.enterValueToAccountHolderNameTextbox(sessionStorage.getItem("accountHolderName"))
})

When(/^I input random account holder name to 'Account Holder Name' textbox at 'Add New Supplier Bank Account' page$/, () => {
    manageSupplierBankAccountPage.enterValueToAccountHolderNameTextbox(manageBankAccount.accountHolderName)
})

When(/^I input random branch to 'Branch' textbox at 'Add New Supplier Bank Account' page$/, () => {
    manageSupplierBankAccountPage.enterValueToBranchTextbox(manageBankAccount.bankBranch)
})

When(/^I input random branch code to 'Branch Code' textbox at 'Add New Supplier Bank Account' page$/, () => {
    manageSupplierBankAccountPage.enterValueToBranchCodeTextbox(manageBankAccount.bankBranchCode)
})

When(/^I input "([^"]*)" to 'Branch City' textbox at 'Add New Supplier Bank Account' page$/, (city) => {
    manageSupplierBankAccountPage.enterValueToBranchCityTextbox(city)
})

When(/^I input random address 1 to 'Branch Address Line 1' textbox at 'Add New Supplier Bank Account' page$/, () => {
    manageSupplierBankAccountPage.enterValueToBranchAddress1Textbox(dataCommon.address1)
})

When(/^I input random address 2 to 'Branch Address Line 2' textbox at 'Add New Supplier Bank Account' page$/, () => {
    manageSupplierBankAccountPage.enterValueToBranchAddress2Textbox(dataCommon.address2)
})

When(/^I input random postal code to 'Postal Code' textbox at 'Add New Supplier Bank Account' page$/, () => {
    manageSupplierBankAccountPage.enterValueToPostalCodeTextbox(dataCommon.postalCode)
})

When(/^I input "([^"]*)" to 'State' textbox at 'Add New Supplier Bank Account' page$/, (state) => {
    manageSupplierBankAccountPage.enterValueToStateTextbox(state)
})

When(/^I input "([^"]*)" to 'Comment Conversations' textbox at 'Add New Supplier Bank Account' page$/, (comment) => {
    manageSupplierBankAccountPage.enterValueToCommentConversationsTextbox(comment)
})

When(/^I input "([^"]*)" to 'Reject Reason' textbox at 'Supplier Bank Account Details' page$/, (reason) => {
    manageSupplierBankAccountPage.enterValueToRejectReasonTextbox(reason)
})

When(/^I select "([^"]*)" from 'Company Code' dropdown at 'Add New Supplier Bank Account' page$/, (companyCode) => {
    manageSupplierBankAccountPage.selectValueFromCompanyCodeDropdown(companyCode)
})

When(/^I select "([^"]*)" from 'Country' dropdown at 'Add New Supplier Bank Account' page$/, (country) => {
    manageSupplierBankAccountPage.selectValueFromCountryDropdown(country)
})

When(/^I select "([^"]*)" from 'Bank Name' dropdown at 'Add New Supplier Bank Account' page$/, (bankName) => {
    manageSupplierBankAccountPage.selectValueFromBankNameDropdown(bankName)
})

When(/^I select "([^"]*)" from 'Swift Code' dropdown at 'Add New Supplier Bank Account' page$/, (code) => {
    manageSupplierBankAccountPage.selectValueFromSwiftCodeDropdown(code)
})

When(/^I select "([^"]*)" from 'Currency' dropdown at 'Add New Supplier Bank Account' page$/, (currency) => {
    manageSupplierBankAccountPage.selectValueFromCurrencyDropdown(currency)
})

When(/^I check to 'Default bank account' checkbox at 'Add New Supplier Bank Account' page$/, () => {
    manageSupplierBankAccountPage.checkToDefaultBankAccountCheckbox()
})

When(/^I double click to bank label just created in 'Supplier Bank Account' list$/, () => {
    manageSupplierBankAccountPage.doubleClickToBankLabelInList(manageBankAccount.bankLabel)
})

When(/^I click to 'Reject' button in notification at 'Supplier Bank Account Details' page$/, () => {
    manageSupplierBankAccountPage.clickToRejectBankAccountButton()
})

Then(/^I see company code in 'Company Code' textbox at 'Supplier Bank Account Details' page is "([^"]*)"$/, (companyCode) => {
    manageSupplierBankAccountPage.verifyValueInCompanyCodeTextboxExist(companyCode)
})

Then(/^I see random bank label in 'Bank Label' textbox at 'Supplier Bank Account Details' page$/, () => {
    manageSupplierBankAccountPage.verifyValueInBankLabelTextboxExist(manageBankAccount.bankLabel)
})

Then(/^I see country in 'Country' textbox at 'Supplier Bank Account Details' page is "([^"]*)"$/, (country) => {
    manageSupplierBankAccountPage.verifyValueInCountryTextboxExist(country)
})

Then(/^I see bank name in 'Bank Name' textbox at 'Supplier Bank Account Details' page is "([^"]*)"$/, (bankName) => {
    manageSupplierBankAccountPage.verifyValueInBankNameTextboxExist(bankName)
})

Then(/^I see swift code in 'Swift Code' textbox at 'Supplier Bank Account Details' page is "([^"]*)"$/, (code) => {
    manageSupplierBankAccountPage.verifyValueInSwiftCodeTextboxExist(code)
})

Then(/^I see random bank account in 'Bank Account No' textbox at 'Supplier Bank Account Details' page$/, () => {
    manageSupplierBankAccountPage.verifyValueInBankAccountNumberTextboxExist(manageBankAccount.bankAccountNumber)
})

Then(/^I see random account holder name in 'Account Holder Name' textbox at 'Supplier Bank Account Details' page$/, () => {
    manageSupplierBankAccountPage.verifyValueInAccountHolderNameTextboxExist(manageBankAccount.accountHolderName)
})

Then(/^I see currency in 'Currency' textbox at 'Supplier Bank Account Details' page is "([^"]*)"$/, (currency) => {
    manageSupplierBankAccountPage.verifyValueInCurrencyTextboxExist(currency)
})

Then(/^I see random branch in 'Branch' textbox at 'Supplier Bank Account Details' page$/, () => {
    manageSupplierBankAccountPage.verifyValueInBranchTextboxExist(manageBankAccount.bankBranch)
})

Then(/^I see random branch code in 'Branch Code' textbox at 'Supplier Bank Account Details' page$/, () => {
    manageSupplierBankAccountPage.verifyValueInBranchCodeTextboxExist(manageBankAccount.bankBranchCode)
})

Then(/^I see branch city in 'Branch City' textbox at 'Supplier Bank Account Details' page is "([^"]*)"$/, (city) => {
    manageSupplierBankAccountPage.verifyValueInBranchCityTextboxExist(city)
})

Then(/^I see random address 1 in 'Branch Address Line 1' textbox at 'Supplier Bank Account Details' page$/, () => {
    manageSupplierBankAccountPage.verifyValueInBranchAddress1TextboxExist(dataCommon.address1)
})

Then(/^I see random address 2 in 'Branch Address Line 2' textbox at 'Supplier Bank Account Details' page$/, () => {
    manageSupplierBankAccountPage.verifyValueInBranchAddress2TextboxExist(dataCommon.address2)
})

Then(/^I see random postal code in 'Postal Code' textbox at 'Supplier Bank Account Details' page$/, () => {
    manageSupplierBankAccountPage.verifyValueInPostalCodeTextboxExist(dataCommon.postalCode)
})

Then(/^I see state in 'State' textbox at 'Supplier Bank Account Details' page is "([^"]*)"$/, (state) => {
    manageSupplierBankAccountPage.verifyValueInStateTextboxExist(state)
})

Then(/^I see action of bank account in 'Audit Trail' list is "([^"]*)"$/, (action) => {
    manageSupplierBankAccountPage.verifyActionInAuditTrailListDisplay(action)
})

Then(/^I see 'Add New Supplier Bank Account' page$/, () => {
    manageSupplierBankAccountPage.verifyAddSupplierBankAccountPageTitleDisplay()
})

Then(/^I see 'Supplier Bank Account Details' page$/, () => {
    manageSupplierBankAccountPage.verifySupplierBankAccountDetailsPageTitleDisplay()
})

Then(/^I see 'List of Supplier Bank Account' title$/, () => {
    manageSupplierBankAccountPage.verifyListSupplierBanKAccountTitleDisplay()
})

Then(/^I see random bank label in 'Supplier Bank Account' list$/, () => {
    manageSupplierBankAccountPage.verifyBankLabelInListDisplay(manageBankAccount.bankLabel)
})

Then(/^I see company code in 'Supplier Bank Account' list is "([^"]*)"$/, (companyCode) => {
    manageSupplierBankAccountPage.getCompanyCodeInList().should('have.text', companyCode)
})

Then(/^I see company name in 'Supplier Bank Account' list is "([^"]*)"$/, (companyName) => {
    manageSupplierBankAccountPage.getCompanyNameInList().should('have.text', companyName)
})

Then(/^I see bank account status in 'Supplier Bank Account' list is "([^"]*)"$/, (status) => {
    manageSupplierBankAccountPage.getBankStatusInList().should('have.text', status)
})

Then(/^I see bank name in 'Supplier Bank Account' list is "([^"]*)"$/, (bankName) => {
    manageSupplierBankAccountPage.getBankNameInList().should('have.text', bankName)
})

Then(/^I see random bank account number in 'Supplier Bank Account' list$/, () => {
    manageSupplierBankAccountPage.getBankAccountNumberInList().should('have.text', manageBankAccount.bankAccountNumber)
})

Then(/^I see random value bank account number in 'Supplier Bank Account' list$/, () => {
    manageSupplierBankAccountPage.getBankAccountNumberInList().should('have.text', sessionStorage.getItem("bankAccountNo"))
})

Then(/^I see random value account holder name in 'Supplier Bank Account' list$/, () => {
    manageSupplierBankAccountPage.getAccountHolderNameInList().should('have.text', sessionStorage.getItem("accountHolderName"))
})

Then(/^I see random account holder name in 'Supplier Bank Account' list$/, () => {
    manageSupplierBankAccountPage.getAccountHolderNameInList().should('have.text', manageBankAccount.accountHolderName)
})

Then(/^I see comment in 'Conversations' list at 'Add New Supplier Bank Account' page is "([^"]*)"$/, (comment) => {
    manageSupplierBankAccountPage.getCommentInList().should('have.text', comment)
})

Then(/^I see a validation text of 'Company Code' at 'Add New Supplier Bank Account' page appears "([^"]*)"$/, (validation) => {
    manageSupplierBankAccountPage.getValidationCompanyCode().should('have.text', validation)
})

Then(/^I see a validation text of 'Bank Label' at 'Add New Supplier Bank Account' page appears "([^"]*)"$/, (validation) => {
    manageSupplierBankAccountPage.getValidationBankLabel().should('have.text', validation)
})

Then(/^I see a validation text of 'Country' at 'Add New Supplier Bank Account' page appears "([^"]*)"$/, (validation) => {
    manageSupplierBankAccountPage.getValidationCountry().should('have.text', validation)
})

Then(/^I see a validation text of 'Bank Name' at 'Add New Supplier Bank Account' page appears "([^"]*)"$/, (validation) => {
    manageSupplierBankAccountPage.getValidationBankName().should('have.text', validation)
})

Then(/^I see a validation text of 'Swift Code' at 'Add New Supplier Bank Account' page appears "([^"]*)"$/, (validation) => {
    manageSupplierBankAccountPage.getValidationSwiftCode().should('have.text', validation)
})

Then(/^I see a validation text of 'Bank Account No' at 'Add New Supplier Bank Account' page appears "([^"]*)"$/, (validation) => {
    manageSupplierBankAccountPage.getValidationBankAccountNumber().should('have.text', validation)
})

Then(/^I see a validation text of 'Account Holder Name' at 'Add New Supplier Bank Account' page appears "([^"]*)"$/, (validation) => {
    manageSupplierBankAccountPage.getValidationAccountHolderName().should('have.text', validation)
})

Then(/^I see a validation text of 'Currency' at 'Add New Supplier Bank Account' page appears "([^"]*)"$/, (validation) => {
    manageSupplierBankAccountPage.getValidationCurrency().should('have.text', validation)
})

Then(/^I see a validation text of 'Branch' at 'Add New Supplier Bank Account' page appears "([^"]*)"$/, (validation) => {
    manageSupplierBankAccountPage.getValidationBranch().should('have.text', validation)
})

Then(/^I see a validation text of 'Branch Address Line 1' at 'Add New Supplier Bank Account' page appears "([^"]*)"$/, (validation) => {
    manageSupplierBankAccountPage.getValidationBranchAddressLine1().should('have.text', validation)
})

Then(/^I see a validation text of 'Branch Address Line 2' at 'Add New Supplier Bank Account' page appears "([^"]*)"$/, (validation) => {
    manageSupplierBankAccountPage.getValidationBranchAddressLine2().should('have.text', validation)
})