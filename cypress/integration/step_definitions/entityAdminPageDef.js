import { faker } from '@faker-js/faker';
import ApiAction from "../commons/call_api"
import EntityAdminPage from "../PageObject/entityAdminPage"
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

const apiAction = new ApiAction()
const entityAdminPage = new EntityAdminPage()
var manageEntity =  require('../data/manageEntity.json');

When(/^Call API navigate to Entities detail just created page$/, () => {
    apiAction.callApiNavigateToEntityDetailPage(manageEntity.companyName)
})

When(/^I input random company name to 'Company Name' textbox at 'Onboard New Entity' page$/, () => {
    entityAdminPage.enterValueToCompanyNameTextbox(manageEntity.companyName)
})

When(/^I input "([^"]*)" to 'Company Registration No' textbox at 'Onboard New Entity' page$/, (companyRegNumber) => {
    entityAdminPage.enterValueToCompanyRegNoTextbox(companyRegNumber)
})

When(/^I input random REG No to 'Company Registration No' textbox at 'Onboard New Entity' page$/, () => {
    entityAdminPage.enterValueToCompanyRegNoTextbox(manageEntity.companyRegNo)
})

When(/^I input random name to 'Name' textbox at 'Entity Representative'$/, () => {
    entityAdminPage.enterValueToEntityRepNameTextbox(manageEntity.entityName)
})

When(/^I input random value to 'Name' textbox at 'Entity Representative'$/, () => {
    let entityNameNumber = faker.random.numeric(5)
    let entityRepName = "auto_entt_".concat(entityNameNumber)
    sessionStorage.setItem("entityRepName", entityRepName)
    entityAdminPage.enterValueToEntityRepNameTextbox(sessionStorage.getItem("entityRepName"))
})

When(/^I input random name to 'Name' textbox at 'Authorized Signatory'$/, () => {
    entityAdminPage.enterValueToAuthorizedSigNameTextbox(manageEntity.entityName)
})

When(/^I input random name to 'Name' textbox at 'Entity Administrator'$/, () => {
    entityAdminPage.enterValueToEntityAdminNameTextbox(manageEntity.entityName)
})

When(/^I input random email to 'Email' textbox at 'Entity Representative'$/, () => {
    entityAdminPage.enterValueToEntityRepEmailTextbox(manageEntity.entityEmail)
})

When(/^I input random email to 'Email' textbox at 'Authorized Signatory'$/, () => {
    entityAdminPage.enterValueToAuthorizedSigEmailTextbox(manageEntity.entityEmail)
})

When(/^I input random email to 'Email' textbox at 'Entity Administrator'$/, () => {
    entityAdminPage.enterValueToEntityAdminEmailTextbox(manageEntity.entityEmail)
})

When(/^I input random phone to 'Work Phone' textbox at 'Entity Representative'$/, () => {
    let workPhone = faker.random.numeric(10)
    sessionStorage.setItem("workPhone", workPhone)
    entityAdminPage.enterValueToEntityRepWorkPhoneTextbox(sessionStorage.getItem("workPhone"))
})

When(/^I input random phone to 'Work Phone' textbox at 'Authorized Signatory'$/, () => {
    entityAdminPage.enterValueToAuthorizedSigWorkPhoneTextbox(sessionStorage.getItem("workPhone"))
})

When(/^I input random phone to 'Work Phone' textbox at 'Entity Administrator'$/, () => {
    entityAdminPage.enterValueToEntityAdminWorkPhoneTextbox(sessionStorage.getItem("workPhone"))
})

When(/^I input "([^"]*)" to 'File title' textbox in 'Document' table$/, (fileTitle) => {
    entityAdminPage.enterValueFileTitleTextboxInDocumentTable(fileTitle)
})

When(/^I input "([^"]*)" to 'Remark' textbox at 'Onboard New Entity' page$/, (remark) => {
    entityAdminPage.enterValueToRemarkTextbox(remark)
})

When(/^I input entity name just created to 'Filter Entity Name' in list$/, () => {
    entityAdminPage.enterValueToFilterEntityName(manageEntity.companyName)
})

When(/^I input company reg number of entity just created to 'Filter Company Reg' in list$/, () => {
    entityAdminPage.enterValueToFilterCompanyReg(manageEntity.companyRegNo)
})

When(/^I upload "([^"]*)" to 'Document' table at 'Onboard New Entity' page$/, (fileName) => {
    entityAdminPage.uploadFileToTable(fileName)
})

When(/^I select "([^"]*)" from 'Country' dropdown at 'Onboard New Entity' page$/, (country) => {
    entityAdminPage.selectValueFromCountryDropdown(country)
})

When(/^I select "([^"]*)" from 'Entity Type' dropdown at 'Onboard New Entity' page$/, (entityType) => {
    entityAdminPage.selectValueFromEntityTypeDropdown(entityType)
})

When(/^I select "([^"]*)" from 'Industry Type' dropdown at 'Onboard New Entity' page$/, (industryType) => {
    entityAdminPage.selectValueFromIndustryTypeDropdown(industryType)
})

When(/^I select "([^"]*)" from 'Dia Code' dropdown at 'Entity Representative'$/, (dialCode) => {
    entityAdminPage.selectValueFromEntityRepDialCodeDropdown(dialCode)
})

When(/^I select "([^"]*)" from 'Dia Code' dropdown at 'Authorized Signatory'$/, (dialCode) => {
    entityAdminPage.selectValueFromAuthorizedSigDialCodeDropdown(dialCode)
})

When(/^I select "([^"]*)" from 'Dia Code' dropdown at 'Entity Administrator'$/, (dialCode) => {
    entityAdminPage.selectValueFromEntityAdminDialCodeDropdown(dialCode)
})

When(/^I double click to company name just created in list of entities$/, () => {
    entityAdminPage.doubleClickToEntityName(manageEntity.companyName)
})

When(/^I check Buyer Role checkbox$/, () => {
    entityAdminPage.checkToBuyerCheckbox()
})

When(/^I uncheck Buyer Role checkbox$/, () => {
    entityAdminPage.checkToBuyerCheckbox()
})

When(/^I check 'Transaction Settings' checkbox at 'Onboard New Entity' page$/, () => {
    entityAdminPage.checkToTransactionSettingsCheckbox()
})

When(/^I check 'Entity Settings' checkbox at 'Onboard New Entity' page$/, () => {
    entityAdminPage.checkToEntitySettingsCheckbox()
})

When(/^I check 'Procurement To Pay' checkbox at 'Onboard New Entity' page$/, () => {
    entityAdminPage.checkToP2PCheckbox()
})

When(/^I clear value in 'Company Registration No' textbox at 'Onboard New Entity' page$/, () => {
    entityAdminPage.clearValueInCompanyRegNoTextbox()
})

When(/^I clear value in 'Name' textbox at 'Entity Representative'$/, () => {
    entityAdminPage.clearValueInEntityRepNameTextbox()
})

When(/^I click to "([^"]*)" link at 'Onboard New Entity' page$/, (linkName) => {
    entityAdminPage.clickToOptionLink(linkName)
})

Then(/^I see entity name just created in list of entities$/, () => {
    entityAdminPage.verifyEntityNameInListDisplay(manageEntity.companyName)
})

Then(/^I see 'Onboard New Entity' page$/, () => {
    entityAdminPage.verifyNewEntityPageTitleDisplay()
})

Then(/^I see 'Entity Details' page$/, () => {
    entityAdminPage.verifyEntityDetailsPageTitleDisplay()
})

Then(/^I see 'List of Entities' page$/, () => {
    entityAdminPage.verifyListEntitiesPageTitleDisplay()
})

Then(/^I see Buyer Role checkbox is checked$/, () => {
    entityAdminPage.verifyBuyerCheckboxIsChecked()
})

Then(/^I see Buyer Role checkbox is unchecked$/, () => {
    entityAdminPage.verifyBuyerCheckboxIsUnChecked()
})

Then(/^I see company name just created in 'Company Name' textbox at 'Entity Details' page$/, () => {
    entityAdminPage.verifyValueInCompanyNameTextboxExist(manageEntity.companyName)
})

Then(/^I see company reg number in 'Company Reg No' textbox at 'Entity Details' page$/, () => {
    entityAdminPage.verifyValueInCompanyRegTextboxExist(manageEntity.companyRegNo)
})

Then(/^I see entity type in 'Entity Type' dropdown at 'Entity Details' page is "([^"]*)"$/, (entityType) => {
    entityAdminPage.verifyValueInEntityTypeDropdownExist(entityType)
})

Then(/^I see industry type in 'Industry Type' dropdown at 'Entity Details' page is "([^"]*)"$/, (industryType) => {
    entityAdminPage.verifyValueInIndustryTypeDropdownExist(industryType)
})

Then(/^I see random email in 'Email' textbox at 'Entity Representative'$/, () => {
    entityAdminPage.verifyValueInEntityRepEmailTextboxExist(manageEntity.entityEmail)
})

Then(/^I see random entity name in 'Name' textbox at 'Entity Representative'$/, () => {
    entityAdminPage.verifyValueInEntityRepNameTextboxExist(manageEntity.entityName)
})

Then(/^I see random value in 'Name' textbox at 'Entity Representative'$/, () => {
    entityAdminPage.verifyValueInEntityRepNameTextboxExist(sessionStorage.getItem("entityRepName"))
})

Then(/^I see a validation text of 'Company Name' appears "([^"]*)"$/, (validation) => {
    entityAdminPage.verifyValidationTextCompanyNameDisplay(validation)
})

Then(/^I see a validation text of 'Company Registration No.' appears "([^"]*)"$/, (validation) => {
    entityAdminPage.verifyValidationTextCompanyRegDisplay(validation)
})

Then(/^I see a validation text of 'Country' appears "([^"]*)"$/, (validation) => {
    entityAdminPage.verifyValidationTextCountryDisplay(validation)
})

Then(/^I see a validation text of 'Entity Type' appears "([^"]*)"$/, (validation) => {
    entityAdminPage.verifyValidationTextEntityTypeDisplay(validation)
})

Then(/^I see a validation text of 'Industry Type' appears "([^"]*)"$/, (validation) => {
    entityAdminPage.verifyValidationTextIndustryTypeDisplay(validation)
})

Then(/^I see a validation text of 'Name' in 'Entity Representative' appears "([^"]*)"$/, (validation) => {
    entityAdminPage.verifyValidationTextEntityRepresentativeNameDisplay(validation)
})

Then(/^I see a validation text of 'Email' in 'Entity Representative' appears "([^"]*)"$/, (validation) => {
    entityAdminPage.verifyValidationTextEntityRepresentativeEmailDisplay(validation)
})

Then(/^I see a validation text of 'Dial Code' in 'Entity Representative' appears "([^"]*)"$/, (validation) => {
    entityAdminPage.verifyValidationTextEntityRepresentativeDialCodeDisplay(validation)
})

Then(/^I see a validation text of 'Work Number' in 'Entity Representative' appears "([^"]*)"$/, (validation) => {
    entityAdminPage.verifyValidationTextEntityRepresentativeWorkPhoneDisplay(validation)
})

Then(/^I see a validation text of 'Email' in 'Authorized Signatory' appears "([^"]*)"$/, (validation) => {
    entityAdminPage.verifyValidationTextAuthorizedEmailDisplay(validation)
})

Then(/^I see a validation text of 'Dial Code' in 'Authorized Signatory' appears "([^"]*)"$/, (validation) => {
    entityAdminPage.verifyValidationTextAuthorizedDialCodeDisplay(validation)
})

Then(/^I see a validation text of 'Work Number' in 'Authorized Signatory' appears "([^"]*)"$/, (validation) => {
    entityAdminPage.verifyValidationTextAuthorizedWorkPhoneDisplay(validation)
})

Then(/^I see a validation text of 'Email' in 'Entity Administrator' appears "([^"]*)"$/, (validation) => {
    entityAdminPage.verifyValidationTextEntityAdminEmailDisplay(validation)
})

Then(/^I see a validation text of 'Dial Code' in 'Entity Administrator' appears "([^"]*)"$/, (validation) => {
    entityAdminPage.verifyValidationTextEntityAdminDiaCodeDisplay(validation)
})

Then(/^I see a validation text of 'Work Number' in 'Entity Administrator' appears "([^"]*)"$/, (validation) => {
    entityAdminPage.verifyValidationTextEntityAdminWorkPhoneDisplay(validation)
})

Then(/^I see file name in 'Document' table is "([^"]*)"$/, (fileName) => {
    entityAdminPage.getFileNameInDocumentTable().should('have.text', fileName)
})

Then(/^I see entity status in list of entities is "([^"]*)"$/, (status) => {
    entityAdminPage.getEntityStatusInList().should('have.text', status)
})

Then(/^I see country of entity in list of entities is "([^"]*)"$/, (country) => {
    entityAdminPage.getCountryOriginInList().should('have.text', country)
})

Then(/^I see random company reg number in list of entities$/, () => {
    entityAdminPage.getCompanyRegNumberInList().should('have.text', manageEntity.companyRegNo)
})

Then(/^I see entity active status in list of entities is "([^"]*)"$/, (activeStatus) => {
    entityAdminPage.getEntityActiveStatusInList().should('have.text', activeStatus)
})