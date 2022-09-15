import { faker } from '@faker-js/faker';
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import ManageApSpecialistPage from '../PageObject/manageApSpecialistPage'

const manageApSpecialistPage = new ManageApSpecialistPage()

When(/^I input group code just created to 'Filter Group Code' in 'Manage AP Specialist' list$/, () => {
    manageApSpecialistPage.enterValueToFilterGroupCode(sessionStorage.getItem("groupCode"))
})

When(/^I input random group code to 'Group Code' textbox at 'Create New AP Specialist Grouping' page$/, () => {
    sessionStorage.setItem("groupCode", "auto group code " + faker.random.alphaNumeric(5))
    manageApSpecialistPage.enterValueToGroupCodeTextbox(sessionStorage.getItem("groupCode"))
})

When(/^I input "([^"]*)" to 'Filter Company Code' in 'External Vendor Tagging' list$/, (companyCode) => {
    manageApSpecialistPage.enterValueToFilterCompanyCode(companyCode)
})

When(/^I input "([^"]*)" to 'Group Code' textbox at 'Create New AP Specialist Grouping' page$/, (groupCode) => {
    manageApSpecialistPage.enterValueToGroupCodeTextbox(groupCode)
})

When(/^I input "([^"]*)" to 'Remarks' textbox at 'Create New AP Specialist Grouping' page$/, (remark) => {
    manageApSpecialistPage.enterValueToRemarksTextbox(remark)
})

When(/^I input "([^"]*)" to 'Search Key Word' textbox at 'Create New AP Specialist Grouping' page$/, (keyWord) => {
    manageApSpecialistPage.enterValueToSearchKeyWordTextbox(keyWord)
})

When(/^I select "([^"]*)" from 'Ap Specialist' dropdown at 'Create New AP Specialist Grouping' page$/, (account) => {
    manageApSpecialistPage.selectValueFromApSpecialistDropdown(account)
})

When(/^I check to "([^"]*)" checkbox at 'Create New AP Specialist Grouping' page$/, (vendor) => {
    manageApSpecialistPage.checkToCompanyCodeCheckbox(vendor)
})

When(/^I double click to group code just created in 'Manage AP Specialist' list$/, () => {
    manageApSpecialistPage.doubleClickToGroupCodeInList(sessionStorage.getItem("groupCode"))
})

When(/^I click to delete icon external vendor at 'AP Specialist Details' page$/, () => {
    manageApSpecialistPage.clickToDeleteIconExternalVendorButton()
})

Then(/^I see 'Create New AP Specialist Grouping' page$/, () => {
    manageApSpecialistPage.verifyCreateApSpecialistPageTitleDisplay()
})

Then(/^I see 'AP Specialist Details' page$/, () => {
    manageApSpecialistPage.verifyApSpecialistDetailPageTitleDisplay()
})

Then(/^I see 'Manage AP Specialist' page title$/, () => {
    manageApSpecialistPage.verifyManageApSpecialistTitleDisplay()
})

Then(/^I see group code just created in 'Group Code' textbox at 'AP Specialist Details' page$/, () => {
    manageApSpecialistPage.verifyValueInGroupCodeTextboxExist(sessionStorage.getItem("groupCode"))
})

Then(/^I see ap specialist group item at 'AP Specialist Details' page is "([^"]*)"$/, (item) => {
    manageApSpecialistPage.verifyApSpecialistGroupItemDisplay(item)
})

Then(/^I see random group code in 'Manage AP Specialist' list$/, () => {
    manageApSpecialistPage.verifyGroupCodeInListDisplay(sessionStorage.getItem("groupCode"))
})

Then(/^I see company code in 'External Vendor Tagging' list at 'Create New AP Specialist Grouping' page is "([^"]*)"$/, (companyCode) => {
    manageApSpecialistPage.getCompanyCodeInVendorList().should('have.text', companyCode)
})

Then(/^I see number of entities in 'Manage AP Specialist' list is "([^"]*)"$/, (number) => {
    manageApSpecialistPage.getNoOfEntitiesInList().should('have.text', number)
})

Then(/^I see creator ap specialist in 'Manage AP Specialist' list is "([^"]*)"$/, (creator) => {
    manageApSpecialistPage.getCreatorInList().should('have.text', creator)
})

Then(/^I see company name in 'External Vendor Tagging' list at 'Create New AP Specialist Grouping' page is "([^"]*)"$/, (companyName) => {
    manageApSpecialistPage.getCompanyNameInVendorList().should('have.text', companyName)
})

Then(/^I see company reg number in 'External Vendor Tagging' list at 'Create New AP Specialist Grouping' page is "([^"]*)"$/, (companyReg) => {
    manageApSpecialistPage.getCompanyRegNumberInVendorList().should('have.text', companyReg)
})

Then(/^I see a validation text of 'Group Code' at 'Create New AP Specialist Grouping' page appears "([^"]*)"$/, (validation) => {
    manageApSpecialistPage.getValidationGroupCode().should('have.text', validation)
})