import CommonAction from '../commons/common_actions'
import ManageProjectPage from '../PageObject/manageProjectPage';
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

const commonAction = new CommonAction()
const manageProjectPage = new ManageProjectPage()
var manageProject = require('../data/manageProject.json');

When(/^I input project code just created to 'Filter Project Code' in 'Project' list$/, () => {
    manageProjectPage.enterValueToFilterProjectCode(manageProject.projectCode)
})

When(/^I input project title just created to 'Filter Project Title' in 'Project' list$/, () => {
    manageProjectPage.enterValueToFilterProjectTitle(manageProject.projectTitle)
})

When(/^I input random project code to 'Project Code' textbox at 'Create New Project' page$/, () => {
    manageProjectPage.enterValueToProjectCodeTextbox(manageProject.projectCode)
})

When(/^I input random erp project code to 'ERP Project Code' textbox at 'Create New Project' page$/, () => {
    manageProjectPage.enterValueToErpProjectCodeTextbox(manageProject.erpProject)
})

When(/^I input "([^"]*)" to 'Project Code Description' textbox at 'Create New Project' page$/, (description) => {
    manageProjectPage.enterValueToProjectCodeDescriptionTextbox(description)
})

When(/^I input random project title to 'Project Title' textbox at 'Create New Project' page$/, () => {
    manageProjectPage.enterValueToProjectTitleTextbox(manageProject.projectTitle)
})

When(/^I input start date as next "([^"]*)" days to 'Start Date' textbox at 'Create New Project' page$/, (date) => {
    manageProjectPage.enterValueToStartDateTextbox(commonAction.getDateFormat4(date))
})

When(/^I input end date as next "([^"]*)" days to 'End Date' textbox at 'Create New Project' page$/, (date) => {
    manageProjectPage.enterValueToEndDateTextbox(commonAction.getDateFormat4(date))
})

When(/^I input "([^"]*)" to 'Overall Budget' textbox at 'Create New Project' page$/, (budget) => {
    manageProjectPage.enterValueToOverallBudgetTextbox(budget)
})

When(/^I input "([^"]*)" to 'Project Description' textbox at 'Create New Project' page$/, (description) => {
    manageProjectPage.enterValueToProjectDescriptionTextbox(description)
})

When(/^I input "([^"]*)" to 'Remark Overall Project In-Charge' textbox at 'Create New Project' page$/, (remark) => {
    manageProjectPage.enterValueToProjectInChargeRemarkTextbox(remark)
})

When(/^I input "([^"]*)" to 'Remark Project Admin' textbox at 'Create New Project' page$/, (remark) => {
    manageProjectPage.enterValueProjectAdminRemarkTextbox(remark)
})

When(/^I input "([^"]*)" to 'Remark Project Team Members' textbox at 'Create New Project' page$/, (remark) => {
    manageProjectPage.enterValueToProjectTeamMemberRemarkTextbox(remark)
})

When(/^I select "([^"]*)" from 'Project Currency' dropdown at 'Create New Project' page$/, (currency) => {
    manageProjectPage.selectValueFromCurrencyDropdown(currency)
})

When(/^I select "([^"]*)" from 'Project Address' dropdown at 'Create New Project' page$/, (address) => {
    manageProjectPage.selectValueFromProjectAddressDropdown(address)
})

When(/^I select "([^"]*)" from 'Overall Project In-Charge' dropdown at 'Create New Project' page$/, (account) => {
    manageProjectPage.selectValueFromProjectInChargeDropdown(account)
})

When(/^I select "([^"]*)" from 'Project Admin' dropdown at 'Create New Project' page$/, (account) => {
    manageProjectPage.selectValueFromProjectAdminDropdown(account)
})

When(/^I select "([^"]*)" from 'Project Team Members' dropdown at 'Create New Project' page$/, (account) => {
    manageProjectPage.selectValueFromProjectTeamMemberDropdown(account)
})

When(/^I double click to project code just created in 'Project' list$/, () => {
    manageProjectPage.doubleClickToProjectCodeInList(manageProject.projectCode)
})

When(/^I clear value in 'Project Title' textbox at 'Project Details' page$/, () => {
    manageProjectPage.clearValueInProjectTitleTextbox()
})

When(/^I clear value in 'Project Description' textbox 'Project Details' page$/, () => {
    manageProjectPage.clearValueInProjectDescriptionTextbox()
})

Then(/^I see 'Create New Project' page$/, () => {
    manageProjectPage.verifyCreateProjectPageTitleDisplay()
})

Then(/^I see 'Project Details' page$/, () => {
    manageProjectPage.verifyProjectDetailsPageTitleDisplay()
})

Then(/^I see 'List of Project' title$/, () => {
    manageProjectPage.verifyProjectListPageTitleDisplay()
})

Then(/^I see 'List of Project Forecast' title$/, () => {
    manageProjectPage.verifyProjectForecastListPageTitleDisplay()
})

Then(/^I see project code just created in 'Project Code' textbox at 'Project Details' page$/, () => {
    manageProjectPage.verifyValueInProjectCodeTextboxExist(manageProject.projectCode)
})

Then(/^I see project title just created in 'Project Title' textbox at 'Project Details' page$/, () => {
    manageProjectPage.verifyValueInProjectTitleTextboxExist(manageProject.projectTitle)
})

Then(/^I see value in 'Project Currency' textbox at 'Project Details' page is "([^"]*)"$/, (currency) => {
    manageProjectPage.verifyValueInCurrencyTextboxExist(currency)
})

Then(/^I see value in 'Approved PR Budget' textbox at 'Project Details' page is "([^"]*)"$/, (budget) => {
    manageProjectPage.verifyValueInApprovedPrBudgetTextboxExist(budget)
})

Then(/^I see value in 'Overall Budget' textbox at 'Project Details' page is "([^"]*)"$/, (value) => {
    manageProjectPage.verifyValueInOverallBudgetTextboxExist(value)
})

Then(/^I see value in 'Issued PO Budget' textbox at 'Project Details' page is "([^"]*)"$/, (value) => {
    manageProjectPage.verifyValueInIssuedPoBudgetTextboxExist(value)
})

Then(/^I see value in 'Address Line 1' textbox at 'Create New Project' page is "([^"]*)"$/, (address1) => {
    manageProjectPage.verifyValueInAddressLine1TextboxExist(address1)
})

Then(/^I see value in 'Address Line 2' textbox at 'Create New Project' page is "([^"]*)"$/, (address1) => {
    manageProjectPage.verifyValueInAddressLine2TextboxExist(address1)
})

Then(/^I see value in 'Postal Code' textbox at 'Create New Project' page is "([^"]*)"$/, (postalCode) => {
    manageProjectPage.verifyValueInPostalCodeTextboxExist(postalCode)
})

Then(/^I see value in 'Country' textbox at 'Create New Project' page is "([^"]*)"$/, (country) => {
    manageProjectPage.verifyValueInCountryTextboxExist(country)
})

Then(/^I see value in 'State' textbox at 'Create New Project' page is "([^"]*)"$/, (state) => {
    manageProjectPage.verifyValueInStateTextboxExist(state)
})

Then(/^I see value in 'City' textbox at 'Create New Project' page is "([^"]*)"$/, (city) => {
    manageProjectPage.verifyValueInCityTextboxExist(city)
})

Then(/^I see random project code in 'Project' list$/, () => {
    manageProjectPage.verifyProjectCodeInListDisplay(manageProject.projectCode)
})

Then(/^I see random project title in 'Project' list$/, () => {
    manageProjectPage.getProjectTitleInList().should('have.text', manageProject.projectTitle) 
})

Then(/^I see project status in 'Project' list is "([^"]*)"$/, (status) => {
    manageProjectPage.getProjectStatusInList().should('have.text', status) 
})

Then(/^I see project description in 'Project' list is "([^"]*)"$/, (description) => {
    manageProjectPage.getProjectDescriptionInList().should('have.text', description) 
})

Then(/^I see project admin in 'Project' list is "([^"]*)"$/, (entityAdmin) => {
    manageProjectPage.getProjectAdminInList().should('have.text', entityAdmin) 
})

Then(/^I see start date in 'Project' list as next "([^"]*)" days$/, (date) => {
    manageProjectPage.getStartDateInList().should('have.text', commonAction.getDateFormat1(date)) 
})

Then(/^I see end date in 'Project' list as next "([^"]*)" days$/, (date) => {
    manageProjectPage.getEndDateInList().should('have.text', commonAction.getDateFormat1(date)) 
})

Then(/^I see project currency in 'Project' list is "([^"]*)"$/, (currency) => {
    manageProjectPage.getCurrencyInList().should('have.text', currency) 
})

Then(/^I see overall budget in 'Project' list is "([^"]*)"$/, (budget) => {
    manageProjectPage.getOverallBudgetInList().should('have.text', budget) 
})

Then(/^I see a validation text of 'Project Code' at 'Create New Project' page appears "([^"]*)"$/, (validation) => {
    manageProjectPage.getValidationProjectCode().should('have.text', validation)
})

Then(/^I see a validation text of 'Project Title' at 'Create New Project' page appears "([^"]*)"$/, (validation) => {
    manageProjectPage.getValidationProjectTitle().should('have.text', validation)
})

Then(/^I see a validation text of 'Start Date' at 'Create New Project' page appears "([^"]*)"$/, (validation) => {
    manageProjectPage.getValidationStartDate().should('have.text', validation)
})

Then(/^I see a validation text of 'End Date' at 'Create New Project' page appears "([^"]*)"$/, (validation) => {
    manageProjectPage.getValidationEndDate().should('have.text', validation)
})

Then(/^I see a validation text of 'Overall Budget' at 'Create New Project' page appears "([^"]*)"$/, (validation) => {
    manageProjectPage.getValidationOverallBudget().should('have.text', validation)
})

Then(/^I see a validation text of 'Project Description' at 'Create New Project' page appears "([^"]*)"$/, (validation) => {
    manageProjectPage.getValidationProjectDescription().should('have.text', validation)
})