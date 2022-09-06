import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import CommonAction from '../commons/common_actions'
import ApiAction from "../commons/call_api"
import DoPage from "../PageObject/doPage"

const commonAction = new CommonAction()
const apiAction = new ApiAction()
const doPage = new DoPage()

When(/^Get DO number in list$/, () => {
    commonAction.getDoNumberInDoList()
})

When(/^Call API create DO from PO No just created$/, () => {
    apiAction.callApiCreateDO(sessionStorage.getItem("poNumber"))
})

When(/^Call API Issue DO just created$/, () => {
    apiAction.callApiIssueDo(sessionStorage.getItem("poNumber"), sessionStorage.getItem("doNumberDoList"))
})

When(/^I input delivery date as next "([^"]*)" days to 'Delivery Date' textbox at 'Create DO' page$/, (date) => {
    doPage.enterValueToDeliveryDateTextbox(commonAction.getDateFormat4(date))
})

When(/^I input quantity "([^"]*)" to 'To Convert' textbox in DO detail table$/, (quantity) => {
    doPage.enterValueToQuantityConvertTextbox(quantity)
})

When(/^I input DO No to filter DO in "([^"]*)" list$/, (listName) => {
    doPage.enterValueToFilterDoNumberInList(sessionStorage.getItem("doNumberDoList"), listName)
})

When(/^I double click to Do No in DO list$/, () => {
    doPage.doubleClickToDoNumberInList(sessionStorage.getItem("doNumberDoList"))
})

When(/^I check to PO No checkbox at 'Create DO' page$/, () => {
    doPage.checkToPoNumberCheckbox()
})

When(/^I check to DO No checkbox at 'Create GR' page$/, () => {
    doPage.checkToDoNumberCheckbox()
})

Then(/^I see 'DO' page$/, () => {
    doPage.verifyDoPageTitleDisplay()
})

Then(/^I see 'DO Detail' page$/, () => {
    doPage.verifyDoDetailsPageTitleDisplay()
})

Then(/^I see 'Create DO' page$/, () => {
    doPage.verifyCreateDoPageTitleDisplay()
})

Then(/^I see 'DO List' page$/, () => {
    doPage.verifyDoListPageTitleDisplay()
})

Then(/^I see DO No in 'DO No' textbox at 'DO Detail' page$/, () => {
    doPage.verifyValueInDoNumberTextboxExits(sessionStorage.getItem("doNumberDoList"))
})

Then(/^I see DO status in Create DO list is "([^"]*)"$/, (doStatus) => {
    doPage.verifyDoStatusInCreateDoList().should('have.text', doStatus)
})

Then(/^I see DO status in list is "([^"]*)"$/, (doStatus) => {
    doPage.verifyDoStatusInListDisplay().should('have.text', doStatus)
})

Then(/^I see a validation text of 'Delivery date' at 'Create DO' page "([^"]*)" appears$/, (validation) => {
    doPage.verifyValidationTextDeliveryDateDisplay(validation)
})