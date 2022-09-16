import { faker } from '@faker-js/faker';
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import ManageApprovalMatrixPage from '../PageObject/manageApprovalMatrixPage'

const manageApprovalMatrixPage = new ManageApprovalMatrixPage()

When(/^I input approval code "([^"]*)" to 'Filter Approval Code' in 'Approval' list$/, (approvalCode) => {
    manageApprovalMatrixPage.enterValueToFilterApprovalCodeTextbox(approvalCode)
})

When(/^I input random approval code of approval just created to 'Filter Approval Code' in 'Approval' list$/, () => {
    manageApprovalMatrixPage.enterValueToFilterApprovalCodeTextbox(sessionStorage.getItem("approvalCode"))
})

When(/^I input random approval name of approval just created to 'Filter Approval Name' in 'Approval' list$/, () => {
    manageApprovalMatrixPage.enterValueToFilterApprovalNameTextbox(sessionStorage.getItem("approvalName"))
})

When(/^I input "([^"]*)" to 'Search Approval Matrix' textbox at 'Create New Approval' page$/, (approvalName) => {
    manageApprovalMatrixPage.enterValueToSearchApprovalMatrixTextbox(approvalName)
})

When(/^I input "([^"]*)" to 'Approval Code' textbox at 'Create New Approval' page$/, (approvalCode) => {
    manageApprovalMatrixPage.enterValueToApprovalCodeTextbox(approvalCode)
})

When(/^I input random approval code to 'Approval Code' textbox at 'Create New Approval' page$/, () => {
    sessionStorage.setItem("approvalCode", "appr code " + faker.random.alphaNumeric(5))
    manageApprovalMatrixPage.enterValueToApprovalCodeTextbox(sessionStorage.getItem("approvalCode"))
})

When(/^I input random approval name to 'Approval Name' textbox at 'Create New Approval' page$/, () => {
    sessionStorage.setItem("approvalName", "approval name " + faker.random.alphaNumeric(5))
    manageApprovalMatrixPage.enterValueToApprovalNameTextbox(sessionStorage.getItem("approvalName"))
})

When(/^I input random value approval name to 'Approval Name' textbox at 'Approval Details' page$/, () => {
    sessionStorage.setItem("apprName", "appr name " + faker.random.alphaNumeric(5))
    manageApprovalMatrixPage.enterValueToApprovalNameTextbox(sessionStorage.getItem("apprName"))
})

When(/^I input "([^"]*)" to 'Approval Name' textbox at 'Create New Approval' page$/, (approvalName) => {
    manageApprovalMatrixPage.enterValueToApprovalNameTextbox(approvalName)
})

When(/^I input "([^"]*)" to 'Approval Range From' textbox at position "([^"]*)" at 'Create New Approval' page$/, (value, position) => {
    manageApprovalMatrixPage.enterValueToApprovalRangeFromTextbox(value, position)
})

When(/^I input "([^"]*)" to 'Approval Range To' textbox at position "([^"]*)" at 'Create New Approval' page$/, (value, position) => {
    manageApprovalMatrixPage.enterValueToApprovalRangeToTextbox(value, position)
})

When(/^I select "([^"]*)" from 'Approval Matrix' dropdown at 'Create New Approval' page$/, (approvalMatrixFor) => {
    manageApprovalMatrixPage.selectValueFromApprovalMatrixDropdown(approvalMatrixFor)
})

When(/^I select "([^"]*)" from 'Number of Approval Level' dropdown at 'Create New Approval' page$/, (number) => {
    manageApprovalMatrixPage.selectValueFromNumberApprovalLevelDropdown(number)
})

When(/^I select "([^"]*)" from 'Assigned Approvers' dropdown at position "([^"]*)" at 'Create New Approval' page$/, (approver, position) => {
    manageApprovalMatrixPage.selectValueFromAssignedApproversDropdown(approver, position)
})

When(/^I double click to random approval code of approval just created in 'Approval' list$/, () => {
    manageApprovalMatrixPage.doubleClickToApprovalCodeInList(sessionStorage.getItem("approvalCode"))
})

When(/^I double click to approval code "([^"]*)" in 'Approval' list$/, (approvalCode) => {
    manageApprovalMatrixPage.doubleClickToApprovalCodeInList(approvalCode)
})

When(/^I check to random approval code of approval just created in 'Approval' list$/, () => {
    manageApprovalMatrixPage.checkToApprovalCodeInList(sessionStorage.getItem("approvalCode"))
})

When(/^I check to value criteria checkbox at position "([^"]*)" at 'Create New Approval' page$/, (position) => {
    manageApprovalMatrixPage.checkToValueCriteriaCheckbox(position)
})

When(/^I click to 'Deactivate' button in notification at 'Approval' list$/, () => {
    manageApprovalMatrixPage.clickToDeactivateNotificationButton()
})

When(/^I click to 'Activate' button in notification at 'Approval' list$/, () => {
    manageApprovalMatrixPage.clickToActivateNotificationButton()
})

When(/^I click to action "([^"]*)" of approval just created in 'Approval' list$/, (action) => {
    manageApprovalMatrixPage.clickToApprovalActionInList(action, sessionStorage.getItem("approvalCode"))
})

When(/^I click to action "([^"]*)" of approval code "([^"]*)" in 'Approval' list$/, (action, approvalCode) => {
    manageApprovalMatrixPage.clickToApprovalActionInList(action, approvalCode)
})

When(/^I click to 'Approval Matrix' dropdown at 'Create New Approval' page$/, () => {
    manageApprovalMatrixPage.clickToApprovalMatrixDropdown()
})

Then(/^I see 'Create New Approval' page$/, () => {
    manageApprovalMatrixPage.verifyCreateApprovalPageTitleDIsplay()
})

Then(/^I see 'Approval Details' page$/, () => {
    manageApprovalMatrixPage.verifyApprovalDetailsPageTitleDIsplay()
})

Then(/^I see 'List of Approval' page$/, () => {
    manageApprovalMatrixPage.verifyListApprovalPageTitleDisplay()
})

Then(/^I see approval code of approval just created in 'Approval Code' textbox at 'Approval Details' page$/, () => {
    manageApprovalMatrixPage.verifyValueInApprovalCodeTextboxExist(sessionStorage.getItem("approvalCode"))
})

Then(/^I see approval name of approval just created in 'Approval Name' textbox at 'Approval Details' page$/, () => {
    manageApprovalMatrixPage.verifyValueInApprovalNameTextboxExist(sessionStorage.getItem("approvalName"))
})

Then(/^I see random approval code of approval just created in 'Approval' list$/, () => {
    manageApprovalMatrixPage.verifyApprovalCodeInListDisplay(sessionStorage.getItem("approvalCode"))
})

Then(/^I see action of approval just created in 'Approval' list is "([^"]*)"$/, (action) => {
    manageApprovalMatrixPage.verifyApprovalActionInListDisplay(sessionStorage.getItem("approvalCode"), action)
})

Then(/^I see random approval name of approval just created in 'Approval' list$/, () => {
    manageApprovalMatrixPage.getApprovalNameInList().should('have.text', sessionStorage.getItem("approvalName"))
})

Then(/^I see random value approval name of approval just created in 'Approval' list$/, () => {
    manageApprovalMatrixPage.getApprovalNameInList().should('have.text', sessionStorage.getItem("apprName"))
})

Then(/^I see number of approval level of approval just created in 'Approval' list is "([^"]*)"$/, (number) => {
    manageApprovalMatrixPage.getNumberOfApprovalLevelInList().should('have.text', number)
})

Then(/^I see approval matrix of approval just created in 'Approval' list is "([^"]*)"$/, (approvalMatrixFor) => {
    manageApprovalMatrixPage.getApprovalMatrixInList().should('have.text', approvalMatrixFor)
})

Then(/^I see creator approval in 'Approval' list is "([^"]*)"$/, (creator) => {
    manageApprovalMatrixPage.getCreatorApprovalInList().should('have.text', creator)
})

Then(/^I see active approval status of approval just created in 'Approval' list is "([^"]*)"$/, (status) => {
    manageApprovalMatrixPage.getApprovalStatusInList().should('have.text', status)
})

Then(/^I see validation text of 'Approval Code' at 'Create New Approval' page appears "([^"]*)"$/, (validation) => {
    manageApprovalMatrixPage.getValidationApprovalCode().should('have.text', validation)
})

Then(/^I see validation text of 'Approval Name' at 'Create New Approval' page appears "([^"]*)"$/, (validation) => {
    manageApprovalMatrixPage.getValidationApprovalName().should('have.text', validation)
})

Then(/^I see validation text of 'Number of Approval Level' at 'Create New Approval' page appears "([^"]*)"$/, (validation) => {
    manageApprovalMatrixPage.getValidationApprovalLevel().should('have.text', validation)
})