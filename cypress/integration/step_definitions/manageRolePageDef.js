import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import ManageRolePage from "../PageObject/manageRolePage"
import CommonAction from '../commons/common_actions'
import CommonPage from "../PageObject/commonPage"
import { faker } from '@faker-js/faker';

const commonPage = new CommonPage()
const commonAction = new CommonAction()
const manageRolePage = new ManageRolePage()

When(/^I input random role name to 'Role' textbox at 'Create New Role' page$/, () => {
    let roleNumber = faker.random.numeric(5)
    let roleName = "auto role ".concat(roleNumber)
    sessionStorage.setItem("roleName", roleName)
    manageRolePage.enterValueToRoleNameTextbox(sessionStorage.getItem("roleName"))
})

When(/^I input "([^"]*)" to filter 'Feature Name' at 'Assign default features'$/, (featureName) => {
    manageRolePage.enterValueToFilterFeatureName(featureName)
})

When(/^I input role name just created to filer 'Role name' in list$/, () => {
    manageRolePage.enterValueToFilterRole(sessionStorage.getItem("roleName"))
})

When(/^I double click to role name just created in list$/, () => {
    manageRolePage.doubleClickToRoleName(sessionStorage.getItem("roleName"))
})

When(/^I check to read checkbox of feature "([^"]*)"$/, (featureName) => {
    manageRolePage.checkToReadCheckbox(featureName)
})

When(/^I check to write checkbox of feature "([^"]*)"$/, (featureName) => {
    manageRolePage.checkToWriteCheckbox(featureName)
})

When(/^I check to approver checkbox of feature "([^"]*)"$/, (featureName) => {
    manageRolePage.checkToApproverCheckbox(featureName)
})

When(/^I clear value in filter 'Feature Name' at 'Assign default features'$/, () => {
    manageRolePage.clearValueInFilterFeatureName()
})

When(/^I clear value in 'Role' textbox at 'Create New Role' page$/, () => {
    manageRolePage.clearValueInRoleNameTextbox()
})

When(/^I clear value in filter 'Role Name' in list$/, () => {
    manageRolePage.clearValueInFilterRoleName()
})

When(/^I click to clone role just created$/, () => {
    manageRolePage.clickToCloneRoleIcon(sessionStorage.getItem("roleName"))
})

Then(/^I see 'Create New Role' page$/, () => {
    manageRolePage.verifyCreateNewRolePageTitleDisplay()
})

Then(/^I see 'Role Details' page$/, () => {
    manageRolePage.verifyRoleDetailsPageTitleDisplay()
})

Then(/^I see 'List of Role' page$/, () => {
    manageRolePage.verifyListRolePageTitleDisplay()
})

Then(/^I see read checkbox of feature "([^"]*)" is checked$/, (featureName) => {
    manageRolePage.verifyReadCheckboxIsChecked(featureName)
})

Then(/^I see write checkbox of feature "([^"]*)" is checked$/, (featureName) => {
    manageRolePage.verifyWriteCheckboxIsChecked(featureName)
})

Then(/^I see approver checkbox of feature "([^"]*)" is checked$/, (featureName) => {
    manageRolePage.verifyApproverCheckboxIsChecked(featureName)
})

Then(/^I see role name just created in 'Role' textbox at 'Role Details' page$/, () => {
    manageRolePage.verifyValueInRoleTextboxExist(sessionStorage.getItem("roleName"))
})

Then(/^I see role name just created at first row in list$/, () => {
    manageRolePage.verifyRoleNameInListDisplay(sessionStorage.getItem("roleName"))
})

Then(/^I see role status in list is "([^"]*)"$/, (roleStatus) => {
    manageRolePage.getRoleStatusInList().should('have.text', roleStatus)
})

Then(/^I see role creator in list is "([^"]*)"$/, (creator) => {
    manageRolePage.getRoleCreatorInList().should('have.text', creator)
})