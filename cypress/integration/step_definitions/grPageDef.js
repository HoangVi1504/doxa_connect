import GrPage from "../PageObject/grPage"
import ApiAction from "../commons/call_api"
import CommonPage from "../PageObject/commonPage"
import CommonAction from '../commons/common_actions'
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

const grPage = new GrPage()
const apiAction = new ApiAction()
const commonPage = new CommonPage()
const commonAction = new CommonAction()

When(/^Get GR number in list$/, () => {
    commonAction.getPoNumberInGrList()
})

When(/^Call API create GR from DO number "([^"]*)"$/, (doNumber) => {
    apiAction.callApiCreateGrFromDo(doNumber)
})

When(/^Call API create GR from DO$/, () => {
    apiAction.callApiCreateGrFromDo(sessionStorage.getItem("doNumberDoList"))
})

When(/^Call API approval GR$/, () => {
    apiAction.callApiApprovalGr(sessionStorage.getItem("grNumber"))
})

When(/^I input random DO No to DO textbox at 'Create GR' page$/, () => {
    let number = commonAction.getTime()
    let doNumber = "DO "+ number
    sessionStorage.setItem("doNumber", doNumber)
    grPage.enterValueToDoNumberTextbox(sessionStorage.getItem("doNumber"))
})

When(/^I input delivery date as next "([^"]*)" days to 'Delivery Date' textbox at 'Create GR' page$/, (date) => {
    grPage.enterValueToDeliveryDateTextbox(commonAction.getDateFormat4(date))
})

When(/^I input "([^"]*)" to 'Quantity Receiving' textbox at table$/, (quantity) => {
    grPage.enterValueToItemQuantityReceiving(quantity)
    commonPage.clickToText("Qty Receiving")
})

When(/^I input GR No to filter GR in list$/, () => {
    grPage.enterValueToFilterGrInList(sessionStorage.getItem("grNumber"))
})

When(/^I input DO No to filter DO in GR list$/, () => {
    grPage.enterValueToFilterDoInList(sessionStorage.getItem("doNumber"))
})

When(/^I input DO No created from PO to filter DO in GR list$/, () => {
    grPage.enterValueToFilterDoInList(sessionStorage.getItem("doNumberDoList"))
})

When(/^I select approval route "([^"]*)" at 'Create GR' page$/, (value) => {
    grPage.selectValueFromApprovalRouteDropdown(value)
})

When(/^I double click to GR No in list$/, () => {
    grPage.doubleClickToGrNumberInList(sessionStorage.getItem("grNumber"))
})

When(/^I check to PO No checkbox at 'Create GR' page$/, () => {
    grPage.checkToPoNumberCheckbox()
})

Then(/^I see 'Create GR From PO' page$/, () => {
    grPage.verifyCreateGrFromPoPageTitleDisplay()
})

Then(/^I see 'Create GR From DO' page$/, () => {
    grPage.verifyCreateGrFromDoPageTitleDisplay()
})

Then(/^I see 'GR Detail' page$/, () => {
    grPage.verifyGrDetailPageTitleDisplay()
})

Then(/^I see GR No at 'GR Detail' page$/, () => {
    grPage.verifyValueInGrNumberTextboxExits(sessionStorage.getItem("grNumber"))
})

Then(/^I see Do No at Create GR From DO page$/, () => {
    grPage.verifyValueInDoNumberTextboxExits(sessionStorage.getItem("doNumberDoList"))
})

Then(/^I see GR status in GR list is "([^"]*)"$/, (status) => {
    grPage.verifyGrStatusInListDisplay().should('have.text', status)
})

Then(/^I see approval route in GR list is "([^"]*)"$/, (approvalRoute) => {
    grPage.verifyApprovalRouteInListDisplay().should('have.text', approvalRoute)
})

Then(/^I see a validation text of 'Delivery Order No' at 'Create GR' page "([^"]*)" appears$/, (validation) => {
    grPage.verifyValidationTextDoNumberDisplay(validation)
})

Then(/^I see a validation text of 'Delivery Date' at 'Create GR' page "([^"]*)" appears$/, (validation) => {
    grPage.verifyValidationTextDeliveryDateDisplay(validation)
})

Then(/^I see a validation text of 'Approval Route' at 'Create GR' page "([^"]*)" appears$/, (validation) => {
    grPage.verifyValidationTextApprovalRouteDisplay(validation)
})