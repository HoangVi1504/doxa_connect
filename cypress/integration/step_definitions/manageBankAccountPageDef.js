import { faker } from '@faker-js/faker';
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import ManageBankAccountPage from "../PageObject/manageBankAccountPage"

const manageBankAccountPage = new ManageBankAccountPage()

var dataCommon = require('../data/dataCommon.json');
var manageBankAccount = require('../data/manageBankAccount.json');

When(/^I input bank label just created to 'Filter Bank Label' in 'Bank Account' list$/, () => {
    manageBankAccountPage.enterValueToFilterBankLabel(manageBankAccount.bankLabel)
})

When(/^I input random bank account number to 'Filter Bank Account No' in 'Bank Account' list$/, () => {
    manageBankAccountPage.enterValueToFilterBankAccount(manageBankAccount.bankAccountNumber)
})

When(/^I input random bank label to 'Bank Label' textbox at 'Add New Bank Account' page$/, () => {
    manageBankAccountPage.enterValueToBankLabelTextbox(manageBankAccount.bankLabel)
})

When(/^I input random branch to 'Branch' textbox at 'Add New Bank Account' page$/, () => {
    manageBankAccountPage.enterValueToBranchTextbox(manageBankAccount.bankBranch)
})

When(/^I input random branch code to 'Branch Code' textbox at 'Add New Bank Account' page$/, () => {
    manageBankAccountPage.enterValueToBranchCodeTextbox(manageBankAccount.bankBranchCode)
})

When(/^I input random bank account number to 'Bank Account No' textbox at 'Add New Bank Account' page$/, () => {
    manageBankAccountPage.enterValueToBankAccountNumberTextbox(manageBankAccount.bankAccountNumber)
})

When(/^I input random value to 'Bank Account No' textbox at 'Add New Bank Account' page$/, () => {
    sessionStorage.setItem("bankAccountNumber", faker.random.numeric(5))
    manageBankAccountPage.enterValueToBankAccountNumberTextbox(sessionStorage.getItem("bankAccountNumber"))
})

When(/^I input random value to 'Account Holder Name' textbox at 'Add New Bank Account' page$/, () => {
    sessionStorage.setItem("accountHolderName", "auto holder name " + faker.random.alphaNumeric(5))
    manageBankAccountPage.enterValueToAccountHolderNameTextbox(sessionStorage.getItem("accountHolderName"))
})

When(/^I input random account holder name to 'Account Holder Name' textbox at 'Add New Bank Account' page$/, () => {
    manageBankAccountPage.enterValueToAccountHolderNameTextbox(manageBankAccount.accountHolderName)
})

When(/^I input random address 1 to 'Branch Address Line 1' textbox at 'Add New Bank Account' page$/, () => {
    manageBankAccountPage.enterValueToBranchAddress1Textbox(dataCommon.address1)
})

When(/^I input random address 2 to 'Branch Address Line 2' textbox at 'Add New Bank Account' page$/, () => {
    manageBankAccountPage.enterValueToBranchAddress2Textbox(dataCommon.address2)
})

When(/^I input random postal code to 'Postal Code' textbox at 'Add New Bank Account' page$/, () => {
    manageBankAccountPage.enterValueToPostalCodeTextbox(dataCommon.postalCode)
})

When(/^I input "([^"]*)" to 'State' textbox at 'Add New Bank Account' page$/, (state) => {
    manageBankAccountPage.enterValueToStateTextbox(state)
})

When(/^I input "([^"]*)" to 'Branch City' textbox at 'Add New Bank Account' page$/, (branch) => {
    manageBankAccountPage.enterValueToBranchCityTextbox(branch)
})

When(/^I input "([^"]*)" to 'Comment Conversations' textbox at 'Add New Bank Account' page$/, (comment) => {
    manageBankAccountPage.enterValueToCommentConversationsTextbox(comment)
})

When(/^I input "([^"]*)" to 'Reject Reason' textbox at 'Bank Account Details' page$/, (reason) => {
    manageBankAccountPage.enterValueToRejectReasonTextbox(reason)
})

When(/^I select "([^"]*)" from 'Country' dropdown at 'Add New Bank Account' page$/, (country) => {
    manageBankAccountPage.selectValueFromCountryDropdown(country)
})

When(/^I select "([^"]*)" from 'Bank Name' dropdown at 'Add New Bank Account' page$/, (bankName) => {
    manageBankAccountPage.selectValueFromBankNameDropdown(bankName)
})

When(/^I select "([^"]*)" from 'Swift Code' dropdown at 'Add New Bank Account' page$/, (code) => {
    manageBankAccountPage.selectValueFromSwiftCodeDropdown(code)
})

When(/^I select "([^"]*)" from 'Currency' dropdown at 'Add New Bank Account' page$/, (currency) => {
    manageBankAccountPage.selectValueFromCurrencyDropdown(currency)
})

When(/^I double click to bank label just created in 'Bank Account' list$/, () => {
    manageBankAccountPage.doubleClickToBankLabelInList(manageBankAccount.bankLabel)
})

When(/^I click to 'Reject' button in notification at 'Bank Account Details' page$/, () => {
    manageBankAccountPage.clickToRejectBankAccountButton()
})

Then(/^I see 'Add New Bank Account' page$/, () => {
    manageBankAccountPage.verifyAddBankAccountPageTileDisplay()
})

Then(/^I see 'Bank Account Details' page$/, () => {
    manageBankAccountPage.verifyBankAccountDetailsPageTitleDisplay()
})

Then(/^I see 'List of Bank Account' title$/, () => {
    manageBankAccountPage.verifyListBankAccountTitleDisplay()
})

Then(/^I see random bank label in 'Bank Label' textbox at 'Bank Account Details' page$/, () => {
    manageBankAccountPage.verifyValueInBankLabelTextboxExist(manageBankAccount.bankLabel)
})

Then(/^I see country in 'Country' textbox at 'Bank Account Details' page is "([^"]*)"$/, (country) => {
    manageBankAccountPage.verifyValueInCountryTextboxExist(country)
})

Then(/^I see bank name in 'Bank Name' textbox at 'Bank Account Details' page is "([^"]*)"$/, (bankName) => {
    manageBankAccountPage.verifyValueInBankNameTextboxExist(bankName)
})

Then(/^I see swift code in 'Swift Code' textbox at 'Bank Account Details' page is "([^"]*)"$/, (code) => {
    manageBankAccountPage.verifyValueInSwiftCodeTextboxExist(code)
})

Then(/^I see currency in 'Currency' textbox at 'Bank Account Details' page is "([^"]*)"$/, (currency) => {
    manageBankAccountPage.verifyValueInCurrencyTextboxExist(currency)
})

Then(/^I see branch city in 'Branch City' textbox at 'Bank Account Details' page is "([^"]*)"$/, (city) => {
    manageBankAccountPage.verifyValueInCountryTextboxExist(city)
})

Then(/^I see state in 'State' textbox at 'Bank Account Details' page is "([^"]*)"$/, (state) => {
    manageBankAccountPage.verifyValueInStateTextboxExist(state)
})

Then(/^I see random bank account in 'Bank Account No' textbox at 'Bank Account Details' page$/, () => {
    manageBankAccountPage.verifyValueInBankAccountNoTextboxExist(manageBankAccount.bankAccountNumber)
})

Then(/^I see random account holder name in 'Account Holder Name' textbox at 'Bank Account Details' page$/, () => {
    manageBankAccountPage.verifyValueInAccountHolderNameTextboxExist(manageBankAccount.accountHolderName)
})

Then(/^I see random branch in 'Branch' textbox at 'Bank Account Details' page$/, () => {
    manageBankAccountPage.verifyValueInBranchTextboxExist(manageBankAccount.bankBranch)
})

Then(/^I see random branch code in 'Branch Code' textbox at 'Bank Account Details' page$/, () => {
    manageBankAccountPage.verifyValueInBranchCodeTextboxExist(manageBankAccount.bankBranchCode)
})

Then(/^I see random address 1 in 'Branch Address Line 1' textbox at 'Bank Account Details' page$/, () => {
    manageBankAccountPage.verifyValueInBranchAddress1TextboxExist(dataCommon.address1)
})

Then(/^I see random address 2 in 'Branch Address Line 2' textbox at 'Bank Account Details' page$/, () => {
    manageBankAccountPage.verifyValueInBranchAddress2TextboxExist(dataCommon.address2)
})

Then(/^I see random postal code in 'Postal Code' textbox at 'Bank Account Details' page$/, () => {
    manageBankAccountPage.verifyValueInPostalCodeTextboxExist(dataCommon.postalCode)
})

Then(/^I see action of bank account in 'Audit Trail' list is "([^"]*)"$/, (action) => {
    manageBankAccountPage.verifyActionInAuditTrailListDisplay(action)
})

Then(/^I see random bank label in 'Bank Account' list$/, () => {
    manageBankAccountPage.verifyBankLabelInListDisplay(manageBankAccount.bankLabel)
})

Then(/^I see bank account status in 'Bank Account' list is "([^"]*)"$/, (status) => {
    manageBankAccountPage.getBankStatusInList().should('have.text', status)
})

Then(/^I see bank name in 'Bank Account' list is "([^"]*)"$/, (bankName) => {
    manageBankAccountPage.getBankNameInList().should('have.text', bankName)
})

Then(/^I see random bank account number in 'Bank Account' list$/, () => {
    manageBankAccountPage.getBankAccountNumberInList().should('have.text', manageBankAccount.bankAccountNumber)
})

Then(/^I see random value bank account number in 'Bank Account' list$/, () => {
    manageBankAccountPage.getBankAccountNumberInList().should('have.text', sessionStorage.getItem("bankAccountNumber"))
})

Then(/^I see random value account holder name in 'Bank Account' list$/, () => {
    manageBankAccountPage.getAccountHolderNameInList().should('have.text', sessionStorage.getItem("accountHolderName"))
})

Then(/^I see random account holder name in 'Bank Account' list$/, () => {
    manageBankAccountPage.getAccountHolderNameInList().should('have.text', manageBankAccount.accountHolderName)
})

Then(/^I see currency in 'Bank Account' list is "([^"]*)"$/, (currency) => {
    manageBankAccountPage.getCurrencyInList().should('have.text', currency)
})

Then(/^I see comment in 'Conversations' list at 'Add New Bank Account' page is "([^"]*)"$/, (comment) => {
    manageBankAccountPage.getCommentInList().should('have.text', comment)
})

Then(/^I see a validation text of 'Bank Label' at 'Add New Bank Account' page appears "([^"]*)"$/, (validation) => {
    manageBankAccountPage.getValidationBankLabel().should('have.text', validation)
})

Then(/^I see a validation text of 'Country' at 'Add New Bank Account' page appears "([^"]*)"$/, (validation) => {
    manageBankAccountPage.getValidationCountry().should('have.text', validation)
})

Then(/^I see a validation text of 'Bank Name' at 'Add New Bank Account' page appears "([^"]*)"$/, (validation) => {
    manageBankAccountPage.getValidationBankName().should('have.text', validation)
})

Then(/^I see a validation text of 'Swift Code' at 'Add New Bank Account' page appears "([^"]*)"$/, (validation) => {
    manageBankAccountPage.getValidationSwiftCode().should('have.text', validation)
})

Then(/^I see a validation text of 'Bank Account No' at 'Add New Bank Account' page appears "([^"]*)"$/, (validation) => {
    manageBankAccountPage.getValidationBankAccountNumber().should('have.text', validation)
})

Then(/^I see a validation text of 'Account Holder Name' at 'Add New Bank Account' page appears "([^"]*)"$/, (validation) => {
    manageBankAccountPage.getValidationAccountHolderName().should('have.text', validation)
})

Then(/^I see a validation text of 'Currency' at 'Add New Bank Account' page appears "([^"]*)"$/, (validation) => {
    manageBankAccountPage.getValidationCurrency().should('have.text', validation)
})

Then(/^I see a validation text of 'Branch' at 'Add New Bank Account' page appears "([^"]*)"$/, (validation) => {
    manageBankAccountPage.getValidationBranch().should('have.text', validation)
})

Then(/^I see a validation text of 'Branch Address Line 1' at 'Add New Bank Account' page appears "([^"]*)"$/, (validation) => {
    manageBankAccountPage.getValidationBranchAddressLine1().should('have.text', validation)
})

Then(/^I see a validation text of 'Branch Address Line 2' at 'Add New Bank Account' page appears "([^"]*)"$/, (validation) => {
    manageBankAccountPage.getValidationBranchAddressLine2().should('have.text', validation)
})