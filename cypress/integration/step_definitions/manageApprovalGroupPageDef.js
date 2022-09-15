import { faker } from '@faker-js/faker';
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import ManageApprovalGroupPage from '../PageObject/manageApprovalGroupPage';

const manageApprovalGroupPage = new ManageApprovalGroupPage()

When(/^I input random name of approval group just created to 'Filter Approval Group Name' in 'Approval Group' list$/, () => {
    manageApprovalGroupPage.enterValueToFilterApprovalGroupName(sessionStorage.getItem("approvalGroupName"))
})

When(/^I input name of approval group just updated to 'Filter Approval Group Name' in 'Approval Group' list$/, () => {
    manageApprovalGroupPage.enterValueToFilterApprovalGroupName(sessionStorage.getItem("approvalGrName"))
})

When(/^I input random approval group name to 'Approval Group Name' textbox at 'Create Approval Group' page$/, () => {
    sessionStorage.setItem("approvalGroupName", "approval group " + faker.random.alphaNumeric(5))
    manageApprovalGroupPage.enterValueToApprovalGroupNameTextbox(sessionStorage.getItem("approvalGroupName"))
})

When(/^I input random value to 'Approval Group Name' textbox at 'Approval Group Details' page$/, () => {
    sessionStorage.setItem("approvalGrName", "auto approval gr " + faker.random.alphaNumeric(5))
    manageApprovalGroupPage.enterValueToApprovalGroupNameTextbox(sessionStorage.getItem("approvalGrName"))
})

When(/^I input "([^"]*)" to 'Approval Group Name' textbox at 'Create Approval Group' page$/, (approvalGroupName) => {
    manageApprovalGroupPage.enterValueToApprovalGroupNameTextbox(approvalGroupName)
})

When(/^I input "([^"]*)" to 'Remark' textbox at 'Create Approval Group' page$/, (remark) => {
    manageApprovalGroupPage.enterValueToRemarkTextbox(remark)
})

When(/^I select "([^"]*)" from 'Approver' dropdown at 'Create Approval Group' page$/, (approver) => {
    manageApprovalGroupPage.selectValueFromApproverDropdown(approver)
})

When(/^I double click to name of approval group just created in 'Approval Group' list$/, () => {
    manageApprovalGroupPage.doubleClickToApprovalGroupNameInList(sessionStorage.getItem("approvalGroupName"))
})

When(/^I check to approval group just created in 'Approval Group' list$/, () => {
    manageApprovalGroupPage.checkToApprovalGroupNameInList(sessionStorage.getItem("approvalGroupName"))
})

When(/^I click to 'Deactivate' button in notification at 'Approval Group' list$/, () => {
    manageApprovalGroupPage.clickToDeactivateNotificationButton()
})

When(/^I click to 'Activate' button in notification at 'Approval Group' list$/, () => {
    manageApprovalGroupPage.clickToActivateNotificationButton()
})

When(/^I click to close button of approver "([^"]*)" at 'Approval Group Details' page$/, (approver) => {
    manageApprovalGroupPage.clickToCloseApproverButton(approver)
})

When(/^I click to action "([^"]*)" of approval group just updated$/, (action) => {
    manageApprovalGroupPage.clickToActionApprovalGroupInList(action)
})

Then(/^I see 'Create Approval Group' page$/, () => {
    manageApprovalGroupPage.verifyCreateApprovalGroupPageTitleDisplay()
})

Then(/^I see 'Approval Group Details' page$/, () => {
    manageApprovalGroupPage.verifyApprovalGroupDetailsPageTitleDisplay()
})

Then(/^I see 'List Approval Group' page$/, () => {
    manageApprovalGroupPage.verifyListApprovalGroupPageTileDisplay()
})

Then(/^I see name of approval group just created in 'Approval Group Name' textbox at 'Approval Group Details' page$/, () => {
    manageApprovalGroupPage.verifyValueInApprovalGroupNameTextboxExist(sessionStorage.getItem("approvalGroupName"))
})

Then(/^I see name of approval group just created in 'Approval Group' list$/, () => {
    manageApprovalGroupPage.verifyApprovalGroupNameInListDisplay(sessionStorage.getItem("approvalGroupName"))
})

Then(/^I see name of approval group just updated in 'Approval Group' list$/, () => {
    manageApprovalGroupPage.verifyApprovalGroupNameInListDisplay(sessionStorage.getItem("approvalGrName"))
})

Then(/^I see action of approval group just created in 'Approval Group' list is "([^"]*)"$/, (action) => {
    manageApprovalGroupPage.verifyActionApprovalGroupInListDisplay(action)
})

Then(/^I see approver of approval group just created in 'Approval Group' list is "([^"]*)"$/, (approver) => {
    manageApprovalGroupPage.getApproverInList().should('have.text', approver)
})

Then(/^I see remark of approval group just created in 'Approval Group' list is "([^"]*)"$/, (remark) => {
    manageApprovalGroupPage.getRemarkInList().should('have.text', remark)
})

Then(/^I see creator approval group just created in 'Approval Group' list is "([^"]*)"$/, (creator) => {
    manageApprovalGroupPage.getCreatorInList().should('have.text', creator)
})

Then(/^I see active status of approval group just created in 'Approval Group' list is "([^"]*)"$/, (status) => {
    manageApprovalGroupPage.getApprovalGroupActiveStatusInList().should('have.text', status)
})

Then(/^I see validation text of 'Approval Group Name' at 'Crete Approval Group' page appears "([^"]*)"$/, (validation) => {
    manageApprovalGroupPage.getValidationApprovalGroupName().should('have.text', validation)
})