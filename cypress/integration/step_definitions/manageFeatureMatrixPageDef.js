import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import ManageFeatureMatrixPage from "../PageObject/manageFeatureMatrixPage"

const manageFeatureMatrixPage = new ManageFeatureMatrixPage()

When(/^I input "([^"]*)" to 'Filter Feature Name' at 'Manage Feature Matrix' page$/, (featureName) => {
    manageFeatureMatrixPage.enterValueToFilterFeatureName(featureName)
})

When(/^I select "([^"]*)" from 'Select User' dropdown at 'Manage Feature Matrix' page$/, (user) => {
    manageFeatureMatrixPage.selectValueFromSelectUserDropdown(user)
})

When(/^I select "([^"]*)" from 'Select Module' dropdown at 'Manage Feature Matrix' page$/, (module) => {
    manageFeatureMatrixPage.selectValueFromModuleDropdown(module)
})

When(/^I check to read checkbox of feature "([^"]*)" at 'Manage Feature Matrix' page$/, (featureName) => {
    manageFeatureMatrixPage.checkToReadCheckbox(featureName)
})

When(/^I check to write checkbox of feature "([^"]*)" at 'Manage Feature Matrix' page$/, (featureName) => {
    manageFeatureMatrixPage.checkToWriteCheckbox(featureName)
})

When(/^I check to approve checkbox of feature "([^"]*)" at 'Manage Feature Matrix' page$/, (featureName) => {
    manageFeatureMatrixPage.checkToApproveCheckbox(featureName)
})

When(/^I uncheck to read checkbox of feature "([^"]*)" at 'Manage Feature Matrix' page$/, (featureName) => {
    manageFeatureMatrixPage.unCheckToReadCheckbox(featureName)
})

When(/^I uncheck to write checkbox of feature "([^"]*)" at 'Manage Feature Matrix' page$/, (featureName) => {
    manageFeatureMatrixPage.unCheckToWriteCheckbox(featureName)
})

When(/^I uncheck to approve checkbox of feature "([^"]*)" at 'Manage Feature Matrix' page$/, (featureName) => {
    manageFeatureMatrixPage.unCheckToApproveCheckbox(featureName)
})

Then(/^I see 'Manage Feature Matrix' page$/, () => {
    manageFeatureMatrixPage.verifyManageFeatureMatrixPageTitleDisplay()
})

Then(/^I see user name at 'Manage Feature Matrix' page is "([^"]*)"$/, (userName) => {
    manageFeatureMatrixPage.verifyUserNameDisplay(userName)
})

Then(/^I see email of user at 'Manage Feature Matrix' page is "([^"]*)"$/, (email) => {
    manageFeatureMatrixPage.verifyEmailDisplay(email)
})

Then(/^I see designation of user at 'Manage Feature Matrix' page is "([^"]*)"$/, (designation) => {
    manageFeatureMatrixPage.verifyDesignationDisplay(designation)
})

Then(/^I see read checkbox of feature "([^"]*)" at 'Manage Feature Matrix' page is checked$/, (featureName) => {
    manageFeatureMatrixPage.verifyReadCheckboxIsChecked(featureName)
})

Then(/^I see write checkbox of feature "([^"]*)" at 'Manage Feature Matrix' page is checked$/, (featureName) => {
    manageFeatureMatrixPage.verifyWriteCheckboxIsChecked(featureName)
})

Then(/^I see approve checkbox of feature "([^"]*)" at 'Manage Feature Matrix' page is checked$/, (featureName) => {
    manageFeatureMatrixPage.verifyApproveCheckboxIsChecked(featureName)
})

Then(/^I see read checkbox of feature "([^"]*)" at 'Manage Feature Matrix' page is unchecked$/, (featureName) => {
    manageFeatureMatrixPage.verifyReadCheckboxIsUnchecked(featureName)
})

Then(/^I see write checkbox of feature "([^"]*)" at 'Manage Feature Matrix' page is unchecked$/, (featureName) => {
    manageFeatureMatrixPage.verifyWriteCheckboxIsUnchecked(featureName)
})

Then(/^I see approve checkbox of feature "([^"]*)" at 'Manage Feature Matrix' page is unchecked$/, (featureName) => {
    manageFeatureMatrixPage.verifyApproveCheckboxIsUnchecked(featureName)
})