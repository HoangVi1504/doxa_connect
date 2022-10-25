import ApiAction from "../commons/call_api"
import {When, Then} from "cypress-cucumber-preprocessor/steps"
import ManageApprovalConfigurationPage from "../PageObject/manageApprovalConfigurationPage"

const apiAction = new ApiAction()
const manageApprovalConfigurationPage = new ManageApprovalConfigurationPage()

When(/^Call API uncheck all function in Approval Configuration$/, () => {
    apiAction.callApiUncheckApprovalConfiguration()
})

When(/^I uncheck the checkbox 'Approval Configuration' page if it is checked$/, () => {
    manageApprovalConfigurationPage.uncheckApprovalCheckbox()
})

When(/^I check to "([^"]*)" checkbox at 'Approval Configuration' page$/, (checkboxName) => {
    manageApprovalConfigurationPage.checkOptionCheckbox(checkboxName)
})

Then(/^I see "([^"]*)" checkbox at 'Approval Configuration' page is checked$/, (checkboxName) => {
    manageApprovalConfigurationPage.verifyOptionCheckboxIsChecked(checkboxName)
})

Then(/^I see 'Approval Configuration' page$/, () => {
    manageApprovalConfigurationPage.verifyApprovalConfigurationTitleDisplay()
})