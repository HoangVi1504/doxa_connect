import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import CommonAction from '../commons/common_actions'
import ApiAction from "../commons/call_api"
import PoPage from "../PageObject/poPage"

const commonAction = new CommonAction()
const apiAction = new ApiAction()
const poPage = new PoPage()

When(/^Get PO number in list$/, () => {
    commonAction.getPoNumberInPoList()
})

When(/^Call API navigate to Convert PR to PO page$/, () => {
    apiAction.callApiNavigateToConvertPrToPoPage(sessionStorage.getItem("prNumber"))
})

When(/^"([^"]*)" call API navigate to PO detail page$/, (roleName) => {
    apiAction.callApiNavigateToPoDetailPage(roleName, sessionStorage.getItem("poNumber"))
})

When(/^"([^"]*)" call API view PO$/, (roleName) => {
    apiAction.callApiViewPo(roleName, sessionStorage.getItem("poNumber"))
})

When(/^Supplier call API Acknowledge PO$/, () => {
    apiAction.callApiAcknowledgePo()
})

When(/^Call API convert PR just created random to PO$/, () => {
    apiAction.callApiConvertPrToPo(sessionStorage.getItem("prTitleRandom"))
})

When(/^I input PO No to filter PO in list$/, () => {
    poPage.enterValueToFilterPoInList(sessionStorage.getItem("poNumber"))
})

When(/^I input reason close PO at 'PO Detail' page is "([^"]*)"$/, (reason) => {
    poPage.enterValueToCancelReasonTextbox(reason)
})

When(/^I input reason reject PO at 'PO Detail' page is "([^"]*)"$/, (reason) => {
    poPage.enterValueToRejectTextbox(reason)
})

When(/^I select approval route "([^"]*)" at 'PO detail' page$/, (value) => {
    poPage.selectValueFromApprovalRouteDropdown(value)
})

When(/^I double click to PR No in 'PR To Be Converted' list$/, () => {
    poPage.doubleClickToPrNumberInList(sessionStorage.getItem("prNumber"))
})

When(/^I double click to PO No in PO list$/, () => {
    poPage.doubleClickToPoNumberInList(sessionStorage.getItem("poNumber"))
})

When(/^I click to Mark Complete button at 'PO Detail' page$/, () => {
    poPage.clickToMarkCompletedButton()
})

When(/^I click to Reject button at 'PO Detail' page$/, () => {
    poPage.clickToRejectButton()
})

Then(/^I see 'PR To Be Converted List' title$/, () => {
    poPage.verifyPrConvertDetailPageTitleDisplay()
})

Then(/^I see 'PR Convert Detail' page$/, () => {
    poPage.verifyPrConvertDetailPageTitleDisplay()
})

Then(/^I see 'PO Detail' page$/, () => {
    poPage.verifyPoDetailPageTitleDisplay()
})

Then(/^I see PR No in 'PR No' textbox at 'PR Convert Detail' page$/, () => {
    poPage.verifyValueInPrNumberTextboxExits(sessionStorage.getItem("prNumber"))
})

Then(/^I see PO No in 'PO No' textbox at 'PO Detail' page$/, () => {
    poPage.verifyValueInPoNumberTextboxExits(sessionStorage.getItem("poNumber"))
})

Then(/^I see PO status in list is "([^"]*)"$/, (status) => {
    poPage.verifyPoStatusInListDisplay(status)
})

Then(/^I see Supplier Ack status is "([^"]*)"$/, (status) => {
    poPage.verifySupplierAckStatusInListDisplay(status)
})

Then(/^I see notification PO "([^"]*)" display at 'PO Detail' page$/, (notification) => {
    poPage.verifyNotificationPoDisplay(notification)
})