import { faker } from '@faker-js/faker';
import ApiAction from "../commons/call_api"
import CommonPage from '../PageObject/commonPage';
import RaiseRFQPage from "../PageObject/raiseRfqPage"
import CommonAction from '../commons/common_actions'
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

const apiAction = new ApiAction()
const commonPage = new CommonPage()
const raiseRfqPage = new RaiseRFQPage()
const commonAction = new CommonAction()

var dataRfqNumber = require('../data/rfqNumber.json') 
var dataLinkRFQTestGetnada = require('../data/urlRfq.json')

Given(/^Navigate to 'RFQ Detail' from link in email$/, () => {
    commonPage.navigateTo(dataLinkRFQTestGetnada.linkToRFQ)
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
})

When(/^I get FRQ number in list$/, () => {
    commonAction.getRFQNumberToFile()
})

When(/^Call API raise RFQ$/, () => {
    sessionStorage.setItem("rfqTitleRandom", "auto RFQ " + faker.random.alphaNumeric(5))
    apiAction.callApiRaiseRFQ(sessionStorage.getItem("rfqTitleRandom"))
})

When(/^Call API submit RFQ$/, () => {
    //apiAction.callApiSubmitRfq(dataRfqNumber.rfqNumber)
    apiAction.callApiSubmitRfq(sessionStorage.getItem("rfqNumber"))
})

When(/^Call API close RFQ$/, () => {
    apiAction.callApiCloseRfq(sessionStorage.getItem("rfqNumber"))
})

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
    sessionStorage.setItem("numberRfqTitle", faker.random.numeric(5))
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
    raiseRfqPage.fillDataInGeneralInformationTab(fileName, sessionStorage.getItem("numberRfqTitle"))
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

When(/^I input RFQ title from "([^"]*)" json file to 'Search RFQ' textbox$/, (keyWord) => {
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
    cy.fixture(fileName).then((fileName) =>{
        raiseRfqPage.enterValueToSearchRfqTitleTextbox(fileName.rfqTitleInList + sessionStorage.getItem("numberRfqTitle"))
    })
})

When(/^I input random RFQ title to 'Search RFQ' textbox in 'RFQ' list$/, () => {
    raiseRfqPage.enterValueToSearchRfqTitleTextbox(sessionStorage.getItem("rfqTitleRandom"))
})

When(/^I input RFQ number just created to 'Filter RFQ No' in 'RFQ' list$/, () => {
    raiseRfqPage.enterValueToFilterRfqNumberInList(sessionStorage.getItem("rfqNumber"))
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

When(/^I input "([^"]*)" to 'Tax Code' textbox in 'Request Terms' at 'RFQ Detail' page$/, (taxCode) => {
    raiseRfqPage.enterValueToTaxCodeInRequestTerms(taxCode)
})

When(/^I input "([^"]*)" to 'Tax Percentage' textbox at 'RFQ Detail' page$/, (per) => {
    raiseRfqPage.enterValueToTaxPercentageInItemTable(per)
})

When(/^I input "([^"]*)" to 'Quoted Unit Price' textbox at 'RFQ Detail' page$/, (price) => {
    raiseRfqPage.enterValueToUnitPriceInItemTable(price)
    commonPage.clickToText("Quoted Unit Price")
})

When(/^I input "([^"]*)" to 'Negotiation Comment' textbox at 'RFQ Detail' page$/, (comment) => {
    raiseRfqPage.enterValueToCommentInNegotiation(comment)
})

When(/^I input "([^"]*)" to 'Conversations Comment' textbox at 'RFQ Detail' page$/, (comment) => {
    raiseRfqPage.enterValueToCommentInConversations(comment)
})

When(/^I input delivery date as previous "([^"]*)" days to 'Delivery Date' textbox at Raise RFQ page$/, (date) => {
    raiseRfqPage.enterValueToDeliveryDateTextbox(commonAction.getDateFormat4(-date))
})

When(/^I input delivery date as next "([^"]*)" days to 'Delivery Date' textbox at 'RFQ Detail' page$/, (date) => {
    raiseRfqPage.enterValueToDeliveryDateTextbox(commonAction.getDateFormat4(date))
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

When(/^I input due date as next "([^"]*)" days to 'Due Date' textbox at 'RFQ Detail' page$/, (date) => {
    raiseRfqPage.enterValueToDueDateTextbox(commonAction.getDateFormat1(date))
})

When(/^I input "([^"]*)" to 'Quantity' textbox in 'Items List' table at 'RFQ Detail' page$/, (quantity) => {
    raiseRfqPage.enterValueToItemQuantityInItemTable(quantity)
})

When(/^I upload "([^"]*)" to 'Negotiation' table at 'RFQ Detail' page$/, (file) => {
    raiseRfqPage.uploadFileNegotiation(file)
})

When(/^I upload "([^"]*)" to 'Conversation' table at 'RFQ Detail' page$/, (file) => {
    raiseRfqPage.uploadFileConversation(file)
})

When(/^I double click to RFQ title in RFQ list from "([^"]*)" json file$/, (keyWord) => {
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
    cy.fixture(fileName).then((fileName) =>{
        raiseRfqPage.doubleClickToRFQTitleInRFQList(fileName.rfqTitleInList + sessionStorage.getItem("numberRfqTitle"))
    })
})

When(/^I double click to RFQ number just created in 'RFQ' list$/, () => {
    raiseRfqPage.doubleClickToRfqNumberInRfqList(sessionStorage.getItem("rfqNumber"))
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

When(/^I select "([^"]*)" from 'Currency' dropdown at 'RFQ Detail' page$/, (currency) => {
    raiseRfqPage.selectValueFromCurrencyCodeDropdown(currency)
})

When(/^I select "([^"]*)" from 'Tax Code' dropdown at 'Request Terms' table on 'RFQ Detail' page$/, (taxCode) => {
    raiseRfqPage.selectValueFromTaxCodeDropdown(taxCode)
})

When(/^I select "([^"]*)" from 'Vendor' dropdown at 'RFQ Detail' page$/, (vendor) => {
    raiseRfqPage.selectValueFromVendorDropdown(vendor)
})

When(/^I select "([^"]*)" from 'Delivery Address' dropdown at 'RFQ Detail' page$/, (address) => {
    raiseRfqPage.selectValueFromDeliveryAddressDropdown(address)
})

When(/^I clear value in 'Delivery date' textbox at Raise RFQ page$/, () => {
    raiseRfqPage.clearValueInDeliveryDateTextbox()
})

When(/^I clear value in 'Due date' textbox at Raise RFQ page$/, () => {
    raiseRfqPage.clearValueInDueDateTextbox()
})

When(/^I click to RFQ title textbox$/, () => {
    raiseRfqPage.clickToRfqTitleTextbox()
})

When(/^I click to 'Note' textbox at Raise RFQ page$/, () => {
    raiseRfqPage.clickToNoteTextbox()
})

When(/^I click to "([^"]*)" link on the table menu at 'RFQ Detail' page$/, (option) => {
    raiseRfqPage.clickToLinkOnTable(option)
})

When(/^I see attachment file "([^"]*)" in 'Negotiation' table at 'RFQ Detail' page$/, (fileName) => {
    raiseRfqPage.verifyFileNameInNegotiationExist(fileName)
})

When(/^I see RFQ title at RFQ detail page from "([^"]*)" json file$/, (keyWord) => {
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
    cy.fixture(fileName).then((fileName) =>{
        raiseRfqPage.verifyValueInRFQTitleTextboxExist(fileName.rfqTitle + sessionStorage.getItem("numberRfqTitle"))
    })
})

Then(/^I see RFQ title from "([^"]*)" json file at the first row in RFQ list$/, (keyWord) => {
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
    raiseRfqPage.verifyRfqTitleInRfqListDisplay(fileName.rfqTitleInList + sessionStorage.getItem("numberRfqTitle"))
})

Then(/^I see RFQ status in RFQ list is "([^"]*)"$/, (rfqStatus) => {
    raiseRfqPage.verifyRfqStatusInRfqListDisplay(rfqStatus)
})

Then(/^I see comment "([^"]*)" in 'Conversation' table at 'RFQ Detail' page$/, (comment) => {
    raiseRfqPage.verifyCommentDisplay(comment)
})

Then(/^I see comment "([^"]*)" in 'Negotiation' table at 'RFQ Detail' page$/, (comment) => {
    raiseRfqPage.verifyCommentDisplay(comment)
})

Then(/^I see 'Raise RFQ' page title$/, () => {
    raiseRfqPage.verifyRaiseRFQPageTitleDisplay()
})

Then(/^I see 'RFQ List' page title$/, () => {
    raiseRfqPage.verifyRFQListPageTitleDisplay()
})

Then(/^I see 'RFQ Detail' page title$/, () => {
    raiseRfqPage.verifyRFQDetailPageTitleDisplay()
})

Then(/^I see 'Approval Route' dropdown at 'RFQ' page is disabled$/, () => {
    raiseRfqPage.verifyApprovalRouteDropdownIsDisable()
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

Then(/^I see a validation text of 'Tax Code' "([^"]*)" appears$/, (validation) => {
    raiseRfqPage.verifyValidationTextTaxCodeDisplay(validation)
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