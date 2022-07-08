import RaiseRFQPage from "../PageObject/raiseRfqPage"
import CommonAction from '../commons/common_actions'
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

const raiseRfqPage = new RaiseRFQPage()
const commonAction = new CommonAction()

When(/^I fill data in Raise Requisition tab from "([^"]*)" json file at Raise RFQ page$/, (keyWord) => {
    let fileName;
    switch (keyWord) {
        case "rfq_v1":
            fileName = 'rfq_v1.json'
            break;

        case "rfq_v2":
            fileName = 'rfq_v2.json'
            break;

        case "rfq_v3":
            fileName = 'rfq_v3.json'
            break;

        case "rfq_v4":
            fileName = 'rfq_v4.json'
            break;

        case "rfq_v5":
            fileName = 'rfq_v5.json'
            break;
        
        case "rfq_v6":
            fileName = 'rfq_v6.json'
            break;

        case "rfq_v7":
            fileName = 'rfq_v7.json'
            break;

        case "rfq_v8":
            fileName = 'rfq_v8.json'
            break;

        case "rfq_v9":
            fileName = 'rfq_v9.json'
            break;

        default:
            break;
    }
    raiseRfqPage.fillDataInRaiseRequisitionTab(fileName)
})

When(/^I fill data in General Information tab from "([^"]*)" json file at Raise RFQ page$/, (keyWord) => {
    let number = commonAction.getDateFormat1(0)
    let fileName;
    switch (keyWord) {
        case "rfq_v1":
            fileName = 'rfq_v1.json'
            break;

        case "rfq_v2":
            fileName = 'rfq_v2.json'
            break;

        case "rfq_v3":
            fileName = 'rfq_v3.json'
            break;

        case "rfq_v4":
            fileName = 'rfq_v4.json'
            break;

        case "rfq_v5":
            fileName = 'rfq_v5.json'
            break;
        
        case "rfq_v6":
            fileName = 'rfq_v6.json'
            break;

        case "rfq_v7":
            fileName = 'rfq_v7.json'
            break;

        case "rfq_v8":
            fileName = 'rfq_v8.json'
            break;

        case "rfq_v9":
            fileName = 'rfq_v9.json'
            break;

        default:
            break;
    }
    raiseRfqPage.fillDataInGeneralInformationTab(fileName, number)
})

When(/^I fill data in Request Terms tab from "([^"]*)" json file at Raise RFQ page$/, (keyWord) => {
    let fileName;
    switch (keyWord) {
        case "rfq_v1":
            fileName = 'rfq_v1.json'
            break;

        case "rfq_v2":
            fileName = 'rfq_v2.json'
            break;

        case "rfq_v3":
            fileName = 'rfq_v3.json'
            break;

        case "rfq_v4":
            fileName = 'rfq_v4.json'
            break;

        case "rfq_v5":
            fileName = 'rfq_v5.json'
            break;
        
        case "rfq_v6":
            fileName = 'rfq_v6.json'
            break;

        case "rfq_v7":
            fileName = 'rfq_v7.json'
            break;

        case "rfq_v8":
            fileName = 'rfq_v8.json'
            break;

        case "rfq_v9":
            fileName = 'rfq_v9.json'
            break;

        default:
            break;
    }
    raiseRfqPage.fillDataInRequestTermsTab(fileName)
})

When(/^I add manual item from "([^"]*)" json file at Raise RFQ page$/, (keyWord) => {
    let fileName;
    switch (keyWord) {
        case "rfq_v1":
            fileName = 'rfq_v1.json'
            break;

        case "rfq_v3":
            fileName = 'rfq_v3.json'
            break;

        case "rfq_v5":
            fileName = 'rfq_v5.json'
            break;

        case "rfq_v7":
            fileName = 'rfq_v7.json'
            break;

        case "rfq_v9":
            fileName = 'rfq_v9.json'
            break;

        default:
            break;
    }
    raiseRfqPage.addManualItem(fileName)
})

When(/^I add catalogue item from "([^"]*)" json file at Raise RFQ page$/, (keyWord) => {
    let fileName;
    switch (keyWord) {
        case "rfq_v2":
            fileName = 'rfq_v2.json'
            break;

        case "rfq_v4":
            fileName = 'rfq_v4.json'
            break;
        
        case "rfq_v6":
            fileName = 'rfq_v6.json'
            break;

        case "rfq_v8":
            fileName = 'rfq_v8.json'
            break;

        default:
            break;
    }
    raiseRfqPage.addCatalogueItem(fileName)
})

When(/^I add catalogue item without scroll bar from "([^"]*)" json file at Raise RFQ page$/, (keyWord) => {
    let fileName;
    switch (keyWord) {
        case "rfq_v2":
            fileName = 'rfq_v2.json'
            break;

        case "rfq_v4":
            fileName = 'rfq_v4.json'
            break;
        
        case "rfq_v6":
            fileName = 'rfq_v6.json'
            break;

        case "rfq_v8":
            fileName = 'rfq_v8.json'
            break;

        default:
            break;
    }
    raiseRfqPage.addCatalogueItemWithoutScrollBar(fileName)
})

When(/^I select RFQ type from "([^"]*)" json file at Raise RFQ page$/, (keyWord) => {
    let fileName;
    switch (keyWord) {
        case "rfq_v1":
            fileName = 'rfq_v1.json'
            break;

        case "rfq_v3":
            fileName = 'rfq_v3.json'
            break;

        case "rfq_v5":
            fileName = 'rfq_v5.json'
            break;

        case "rfq_v7":
            fileName = 'rfq_v7.json'
            break;

        case "rfq_v9":
            fileName = 'rfq_v9.json'
            break;

        default:
            break;
    }
    raiseRfqPage.selectValueFromRfqTypeDropdown(fileName)
})

When(/^I select delivery address from "([^"]*)" json file at Raise RFQ page$/, (keyWord) => {
    let fileName;
    switch (keyWord) {
        case "rfq_v1":
            fileName = 'rfq_v1.json'
            break;

        case "rfq_v3":
            fileName = 'rfq_v3.json'
            break;

        case "rfq_v5":
            fileName = 'rfq_v5.json'
            break;

        case "rfq_v7":
            fileName = 'rfq_v7.json'
            break;

        case "rfq_v9":
            fileName = 'rfq_v9.json'
            break;

        default:
            break;
    }
    raiseRfqPage.selectValueToDeliveryAddressDropdown(fileName)
})

When(/^I input RFQ title from "([^"]*)" json file to 'Search RFQ' textbox$/, (keyWord) => {
    let number = commonAction.getDateFormat1(0)
    let fileName;
    switch (keyWord) {
        case "rfq_v1":
            fileName = 'rfq_v1.json'
            break;

        case "rfq_v2":
            fileName = 'rfq_v2.json'
            break;

        case "rfq_v3":
            fileName = 'rfq_v3.json'
            break;

        case "rfq_v4":
            fileName = 'rfq_v4.json'
            break;

        case "rfq_v5":
            fileName = 'rfq_v5.json'
            break;
        
        case "rfq_v6":
            fileName = 'rfq_v6.json'
            break;

        case "rfq_v7":
            fileName = 'rfq_v7.json'
            break;

        case "rfq_v8":
            fileName = 'rfq_v8.json'
            break;

        case "rfq_v9":
            fileName = 'rfq_v9.json'
            break;

        default:
            break;
    }
    raiseRfqPage.enterValueToSearchRfqTitleTextbox(fileName, number)
})

When(/^I input note to from "([^"]*)" json file at Raise RFQ page$/, (keyWord) => {
    let fileName;
    switch (keyWord) {
        case "rfq_v8":
            fileName = 'rfq_v8.json'
            break;

        case "rfq_v9":
            fileName = 'rfq_v9.json'
            break;

        default:
            break;
    }
    raiseRfqPage.enterValueToNoteTextbox(fileName)
})

When(/^I click to RFQ title textbox$/, () => {
    raiseRfqPage.clickToRfqTitleTextbox()
})

When(/^I click to 'Note' textbox at Raise RFQ page$/, () => {
    raiseRfqPage.clickToNoteTextbox()
})

When(/^I input delivery date as previous "([^"]*)" days to 'Delivery Date' textbox at Raise RFQ page$/, (date) => {
    raiseRfqPage.enterValueToDeliveryDateTextbox(commonAction.getDateFormat4(-date))
})

When(/^I input delivery date as next "([^"]*)" days to 'Delivery Date' textbox at Raise RFQ page$/, (date) => {
    raiseRfqPage.enterValueToDeliveryDateTextbox(commonAction.getDateFormat4(date))
})

When(/^I input due date as previous "([^"]*)" days to 'Due Date' textbox at Raise RFQ page$/, (date) => {
    raiseRfqPage.enterValueToDueDateTextbox(commonAction.getDateFormat1(-date))
})

When(/^I input due date as next "([^"]*)" days to 'Due Date' textbox at Raise RFQ page$/, (date) => {
    raiseRfqPage.enterValueToDueDateTextbox(commonAction.getDateFormat1(date))
})

When(/^I clear value in 'Delivery date' textbox at Raise RFQ page$/, () => {
    raiseRfqPage.clearValueInDeliveryDateTextbox()
})

When(/^I clear value in 'Due date' textbox at Raise RFQ page$/, () => {
    raiseRfqPage.clearValueInDueDateTextbox()
})

Then(/^I see RFQ title from "([^"]*)" json file at the first row in RFQ list$/, (keyWord) => {
    let number = commonAction.getDateFormat1(0)
    let fileName;
    switch (keyWord) {
        case "rfq_v1":
            fileName = 'rfq_v1.json'
            break;

        case "rfq_v2":
            fileName = 'rfq_v2.json'
            break;

        case "rfq_v3":
            fileName = 'rfq_v3.json'
            break;

        case "rfq_v4":
            fileName = 'rfq_v4.json'
            break;

        case "rfq_v5":
            fileName = 'rfq_v5.json'
            break;
        
        case "rfq_v6":
            fileName = 'rfq_v6.json'
            break;

        case "rfq_v7":
            fileName = 'rfq_v7.json'
            break;

        case "rfq_v8":
            fileName = 'rfq_v8.json'
            break;

        case "rfq_v9":
            fileName = 'rfq_v9.json'
            break;

        default:
            break;
    }
    raiseRfqPage.verifyRfqTitleInRfqListDisplay(fileName, number)
})

Then(/^I see RFQ status in RFQ list is "([^"]*)"$/, (rfqStatus) => {
    raiseRfqPage.verifyRfqStatusInRfqListDisplay(rfqStatus)
})

Then(/^I see 'Raise RFQ' page title$/, () => {
    raiseRfqPage.verifyRaiseRFQPageTitleDisplay()
})

Then(/^I see a validation text of 'RFQ title' "([^"]*)" appears$/, (validation) => {
    raiseRfqPage.verifyValidationTextRfqTitleDisplay(validation)
})

Then(/^I see a validation text of 'Procurement Type' "([^"]*)" appears$/, (validation) => {
    raiseRfqPage.verifyValidationProcurementTypeDisplay(validation)
})

Then(/^I see a validation text of 'Currency Code' "([^"]*)" appears$/, (validation) => {
    raiseRfqPage.verifyValidationTextCurrencyCodeDisplay(validation)
})

Then(/^I see a validation text of 'Vendor' "([^"]*)" appears$/, (validation) => {
    raiseRfqPage.verifyValidationTextVendorsDisplay(validation)
})

Then(/^I see a validation text of 'RFQ Type' "([^"]*)" appears$/, (validation) => {
    raiseRfqPage.verifyValidationTextRfqTypeDisplay(validation)
})

Then(/^I see a validation text of 'Due Date' "([^"]*)" appears$/, (validation) => {
    raiseRfqPage.verifyValidationTextDueDateDisplay(validation)
})

Then(/^I see a validation text of 'Delivery Address' "([^"]*)" appears$/, (validation) => {
    raiseRfqPage.verifyValidationTextDeliveryAddressDisplay(validation)
})

Then(/^I see a validation text of 'Delivery Date' "([^"]*)" appears$/, (validation) => {
    raiseRfqPage.verifyValidationTextDeliveryDateDisplay(validation)
})