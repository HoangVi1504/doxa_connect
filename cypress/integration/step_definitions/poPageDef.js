import PoPage from "../PageObject/poPage"
import ApiAction from "../commons/call_api"
import CommonPage from "../PageObject/commonPage"
import CommonAction from '../commons/common_actions'
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

const poPage = new PoPage()
const apiAction = new ApiAction()
const commonPage = new CommonPage()
const commonAction = new CommonAction()

When(/^Get PO number in list$/, () => {
    poPage.scrollToElementInPoList("0%")
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

When(/^"([^"]*)" input PO No to filter PO in "([^"]*)" list$/, (roleName, listName) => {
    poPage.enterValueToFilterPoNumberInList(roleName, sessionStorage.getItem("poNumber"), listName)
})

When(/^I input RFQ No to filter RFQ in 'PO' list$/, () => {
    poPage.enterValueToFilterRfqNoInPoList(sessionStorage.getItem("rfqNumber"))
})

When(/^I input reason close PO at 'PO Detail' page is "([^"]*)"$/, (reason) => {
    poPage.enterValueToCancelReasonTextbox(reason)
})

When(/^I input reason reject PO at 'PO Detail' page is "([^"]*)"$/, (reason) => {
    poPage.enterValueToRejectTextbox(reason)
})

When(/^I input "([^"]*)" to 'Item Unit Price' textbox at 'PO Detail' page$/, (price) => {
    poPage.enterValueToUnitPriceInPoItem(price)
    commonPage.clickToText("Unit Price")
})

When(/^I input "([^"]*)" to 'Item Quantity' textbox at 'PO Detail' page$/, (quantity) => {
    poPage.enterValueToItemQuantityInPoItem(quantity)
    commonPage.clickToText("Quantity")
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

When(/^I click to close preview PO button at 'PO Detail' page$/, () => {
    poPage.clickToClosePreviewPoButton()
})

Then(/^I see 'PR Convert Detail' page$/, () => {
    poPage.verifyPrConvertDetailPageTitleDisplay()
})

Then(/^I see 'PPR Convert List' page$/, () => {
    poPage.verifyPprConvertListPageTitleDisplay()
})

Then(/^I see 'PPR Convert Detail' page$/, () => {
    poPage.verifyPprConvertDetailPageTitleDisplay()
})

Then(/^I see 'PO Detail' page$/, () => {
    poPage.verifyPoDetailPageTitleDisplay()
})

Then(/^I see 'PO List' page$/, () => {
    poPage.verifyPoListPageTitleDisplay()
})

Then(/^I see 'Approval Route' dropdown at 'PO' page is disabled$/, () => {
    poPage.verifyApprovalRouteDropdownIsDisable()
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

Then(/^I see PO number in Preview PO at 'PO Detail' page$/, () => {
    poPage.verifyPoNumberInPreviewPoDisplay(sessionStorage.getItem("poNumber"))
})