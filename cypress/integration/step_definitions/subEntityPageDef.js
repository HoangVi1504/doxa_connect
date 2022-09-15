import { faker } from '@faker-js/faker';
import SubEntityPage from "../PageObject/subEntityPage";
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

const subEntityPage = new SubEntityPage()

When(/^I input random company name to 'Company Name' textbox at 'Create New Company' page$/, () => {
    let companyNameNumber = faker.random.numeric(5)
    let companyName = "AUTO COMPANY ".concat(companyNameNumber)
    sessionStorage.setItem("companyName", companyName)
    subEntityPage.enterValueToCompanyNameTextbox(sessionStorage.getItem("companyName"))
})

When(/^I input random company REG No to 'Company Registration No' textbox at 'Create New Company' page$/, () => {
    let companyRegNumber = "AUTO REG ".concat(faker.random.numeric(5))
    sessionStorage.setItem("companyRegNumber", companyRegNumber)
    subEntityPage.enterValueToCompanyRegNumberTextbox(sessionStorage.getItem("companyRegNumber"))
})

When(/^I input "([^"]*)" to 'File title' textbox in 'Document' table at 'Create New Company' page$/, (fileTitle) => {
    subEntityPage.enterValueFileTitleTextboxInDocumentTable(fileTitle)
})

When(/^I input "([^"]*)" to 'Remark' textbox at 'Create New Company' page$/, (remark) => {
    subEntityPage.enterValueToRemarkTextbox(remark)
})

When(/^I input company name just created to filter 'Company Name' in list$/, () => {
    subEntityPage.enterValueToFilterCompanyName(sessionStorage.getItem("companyName"))
})

When(/^I upload "([^"]*)" to 'Document' table at 'Create New Company' page$/, (fileName) => {
    subEntityPage.uploadFileToTable(fileName)
})

When(/^I upload "([^"]*)" to 'Company Logo' table at 'Create New Company' page$/, (fileName) => {
    subEntityPage.uploadFileToTable(fileName)
})

When(/^I select "([^"]*)" from 'Country' dropdown at 'Create New Company' page$/, (country) => {
    subEntityPage.selectValueFromCountryDropdown(country)
})

When(/^I select Singapore from 'Country' dropdown at 'Create New Company' page$/, () => {
    subEntityPage.selectValueFromCountryDropdown()
})

When(/^I select "([^"]*)" from 'Entity Type' dropdown at 'Create New Company' page$/, (entityType) => {
    subEntityPage.selectValueFromEntityTypeDropdown(entityType)
})

When(/^I select GENERAL PARTNERSHIP from 'Entity Type' dropdown at 'Create New Company' page$/, () => {
    subEntityPage.selectValueFromEntityTypeDropdown()
})

When(/^I select "([^"]*)" from 'Industry Type' dropdown at 'Create New Company' page$/, (industryType) => {
    subEntityPage.selectValueFromIndustryTypeDropdown(industryType)
})

When(/^I select CONSTRUCTION from 'Industry Type' dropdown at 'Create New Company' page$/, () => {
    subEntityPage.selectValueFromIndustryTypeDropdown()
})

When(/^I double click to company name just created in list of Companies$/, () => {
    subEntityPage.doubleClickToCompanyNameInList(sessionStorage.getItem("companyName"))
})

When(/^I check 'Transaction Settings' checkbox at 'Create New Company' page$/, () => {
    subEntityPage.checkToTransactionSettingsCheckbox()
})

When(/^I check 'Entity Settings' checkbox at 'Create New Company' page$/, () => {
    subEntityPage.checkToEntitySettingsCheckbox()
})

When(/^I check 'Procurement To Pay' checkbox at 'Create New Company' page$/, () => {
    subEntityPage.checkToP2PCheckbox()
})

When(/^I check to 'Manage Vendor' checkbox at 'Create New Company' page$/, () => {
    subEntityPage.checkToManageVendorCheckbox()
})

When(/^I click to "([^"]*)" link at 'Create New Company' page$/, (linkName) => {
    subEntityPage.clickToOptionLink(linkName)
})

Then(/^I see 'Create New Company' page$/, () => {
    subEntityPage.verifyCreateNewCompanyPageTitleDisplay()
})

Then(/^I see 'Company Details' page$/, () => {
    subEntityPage.verifyCompanyDetailsPageTitleDisplay()
})

Then(/^I see 'List of Companies' page$/, () => {
    subEntityPage.verifyListCompaniesPageTitleDisplay()
})

Then(/^I see company name just created at 'Company Details' page$/, () => {
    subEntityPage.verifyCompanyNameInDetailDisplay(sessionStorage.getItem("companyName"))
})

Then(/^I see random company REG No at 'Company Details' page$/, () => {
    subEntityPage.verifyCompanyRegNumberInDetailDisplay(sessionStorage.getItem("companyRegNumber"))
})

Then(/^I see country of origin at 'Company Details' page is "([^"]*)"$/, (country) => {
    subEntityPage.verifyCountryOriginInDetailDisplay(country)
})

Then(/^I see entity type at 'Company Details' page is "([^"]*)"$/, (entityType) => {
    subEntityPage.verifyEntityTypeInDetailDisplay(entityType)
})

Then(/^I see industry type at 'Company Details' page is "([^"]*)"$/, (industryType) => {
    subEntityPage.verifyIndustryTypeInDetailDisplay(industryType)
})

Then(/^I see company name just created in list$/, () => {
    subEntityPage.verifyCompanyNameInListDisplay(sessionStorage.getItem("companyName"))
})

Then(/^I see a validation text of 'Company Name' at 'Create New Company' page appears "([^"]*)"$/, (validation) => {
    subEntityPage.verifyValidationTextCompanyNameDisplay(validation)
})

Then(/^I see a validation text of 'Company Registration No.' at 'Create New Company' page appears "([^"]*)"$/, (validation) => {
    subEntityPage.verifyValidationTextCompanyRegNumberDisplay(validation)
})

Then(/^I see a validation text of 'Country' at 'Create New Company' page appears "([^"]*)"$/, (validation) => {
    subEntityPage.verifyValidationTextCountryDisplay(validation)
})

Then(/^I see a validation text of 'Entity Type' at 'Create New Company' page appears "([^"]*)"$/, (validation) => {
    subEntityPage.verifyValidationTextEntityTypeDisplay(validation)
})

Then(/^I see a validation text of 'Industry Type' at 'Create New Company' page appears "([^"]*)"$/, (validation) => {
    subEntityPage.verifyValidationTextIndustryTypeDisplay(validation)
})

Then(/^I see file name in 'Document' table at 'Create New Company' page is "([^"]*)"$/, (fileName) => {
    subEntityPage.getFileNameInDocumentTable().should('have.text', fileName)
})

Then(/^I see company status in list is "([^"]*)"$/, (status) => {
    subEntityPage.getCompanyStatusInList().should('have.text', status)
})

Then(/^I see country of origin in list is "([^"]*)"$/, (country) => {
    subEntityPage.getCountryOriginInList().should('have.text', country)
})

Then(/^I see company REG No in list$/, () => {
    subEntityPage.getCompanyRegNumberInList().should('have.text', sessionStorage.getItem("companyRegNumber"))
})

Then(/^I see company active status in list is "([^"]*)"$/, (status) => {
    subEntityPage.getCompanyActiveStatusInList().should('have.text', status)
})

Then(/^I see main company status in list is "([^"]*)"$/, (status) => {
    subEntityPage.getMainCompanyStatusInList().should('have.text', status)
})