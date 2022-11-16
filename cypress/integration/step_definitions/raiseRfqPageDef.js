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
const globalVariables = require("../commons/global_variables");

var dataRfqNumber = require('../data/rfqNumber.json') 
var dataLinkRFQTestGetnada = require('../data/urlRfq.json')

Given(/^Navigate to 'RFQ Detail' from link in email$/, () => {
    commonPage.navigateTo(dataLinkRFQTestGetnada.linkToRFQ)
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
})

When(/^I get RFQ number in list$/, () => {
    commonAction.getRFQNumberToFile()
})

When(/^I get RFQ No 'Initial Settings' table at 'RFQ Detail' page$/, () => {
    commonAction.getRFQNumberInInitialSettingsTable()
})

When(/^I get random number of RFQ title in 'General Information' table at 'RFQ Detail' page$/, () => {
    commonAction.getNumberRFQTitleInGeneralInformationTable()
})

When(/^I get PO number in RFQ list$/, () => {
    commonAction.getPoNumberInRFQList()
})

When(/^I get Contract number in RFQ list$/, () => {
    commonAction.getContractNumberInRFQList()
})

When(/^I visit 'PO Detail' page by hyperlink in PO No after convert RFQ type 'One-off-quotation'$/, () => {
    commonAction.clickToHyperLinkPoNumber(globalVariables.url)
})

When(/^I visit 'Contract Detail' page by hyperlink in Contract No after convert RFQ type 'Contract'$/, () => {
    commonAction.clickToHyperLinkContractNumber(globalVariables.url)
})

When(/^Call API raise RFQ$/, () => {
    sessionStorage.setItem("rfqTitle", "auto RFQ " + faker.random.alphaNumeric(5))
    apiAction.callApiRaiseRFQ(sessionStorage.getItem("rfqTitle"))
})

When(/^Call API submit RFQ$/, () => {
    //apiAction.callApiSubmitRfq(dataRfqNumber.rfqNumber)
    apiAction.callApiSubmitRfq(sessionStorage.getItem("rfqNumber"))
})

When(/^Call API close RFQ$/, () => {
    apiAction.callApiCloseRfq(sessionStorage.getItem("rfqNumber"))
})

When(/^Call API shortlist RFQ with approval route "([^"]*)"$/, (approvalRoute) => {
    apiAction.callApiShortlistRfq(sessionStorage.getItem("rfqNumber"), approvalRoute)
})

When(/^Call API approval RFQ$/, () => {
    apiAction.callApiApprovalRfq(sessionStorage.getItem("rfqNumber"))
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

When(/^I input RFQ title random to 'RFQ Title' textbox at 'Raise RFQ' page$/, () => {
    sessionStorage.setItem("rfqTitle","auto route to Rfq " + faker.random.numeric(5))
    raiseRfqPage.enterValueToRfqTitleTextbox(sessionStorage.getItem("rfqTitle"))
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
    raiseRfqPage.enterValueToSearchRfqTitleTextbox(sessionStorage.getItem("rfqTitle"))
})

When(/^"([^"]*)" input RFQ number just created to 'Filter RFQ No' in 'RFQ' list$/, (roleName) => {
    raiseRfqPage.enterValueToFilterRfqNumberInList(roleName, sessionStorage.getItem("rfqNumber"))
})

When(/^I input a value is bigger than the required quantity from "([^"]*)" json file to 'Awarded Quantity' textbox$/, (keyWord) => {
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
        raiseRfqPage.enterValueToAwardedQuantityTextbox(fileName.awardQtyBigger)
    })
    commonPage.clickToText("Awarded Qty")
})

When(/^I input a value is smaller than the required quantity from "([^"]*)" json file to 'Awarded Quantity' textbox$/, (keyWord) => {
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
        raiseRfqPage.enterValueToAwardedQuantityTextbox(fileName.awardQtySmaller)
    })
    commonPage.clickToText("Awarded Qty")
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

When(/^I input "([^"]*)" to 'Comment' textbox in "([^"]*)" table at 'RFQ Detail' page$/, (comment, table) => {
    raiseRfqPage.enterValueToCommentInConversations(comment, table)
})

When(/^I input delivery date as previous "([^"]*)" days to 'Delivery Date' textbox at 'Raise RFQ' page$/, (date) => {
    raiseRfqPage.enterValueToDeliveryDateTextbox(commonAction.getDateFormat4(-date))
})

When(/^I input delivery date as next "([^"]*)" days to 'Delivery Date' textbox at 'RFQ Detail' page$/, (date) => {
    raiseRfqPage.enterValueToDeliveryDateTextbox(commonAction.getDateFormat4(date))
})

When(/^I input delivery date as next "([^"]*)" days to 'Delivery Date' textbox at 'Raise RFQ' page$/, (date) => {
    raiseRfqPage.enterValueToDeliveryDateTextbox(commonAction.getDateFormat4(date))
})

When(/^I input due date as previous "([^"]*)" days to 'Due Date' textbox at 'Raise RFQ' page$/, (date) => {
    raiseRfqPage.enterValueToDueDateTextbox(commonAction.getDateFormat1(-date))
})

When(/^I input due date as next "([^"]*)" days to 'Due Date' textbox at 'Raise RFQ' page$/, (date) => {
    raiseRfqPage.enterValueToDueDateTextbox(commonAction.getDateFormat1(date))
})

When(/^I input validity start date as next "([^"]*)" days to 'Validity Start Date' textbox at 'Raise RFQ' page$/, (date) => {
    raiseRfqPage.enterValueToValidityStartDateTextbox(commonAction.getDateFormat4(date))
})

When(/^I input validity end date as next "([^"]*)" days to 'Validity End Date' textbox at 'Raise RFQ' page$/, (date) => {
    raiseRfqPage.enterValueToValidityEndDateTextbox(commonAction.getDateFormat4(date))
})

When(/^I input due date as next "([^"]*)" days to 'Due Date' textbox at 'RFQ Detail' page$/, (date) => {
    raiseRfqPage.enterValueToDueDateTextbox(commonAction.getDateFormat1(date))
})

When(/^I input "([^"]*)" to 'Quantity' textbox in 'Items List' table at 'RFQ Detail' page$/, (quantity) => {
    raiseRfqPage.enterValueToItemQuantityInItemTable(quantity)
})

When(/^I input "([^"]*)" to 'Reason' textbox at 'RFQ Detail' page$/, (reason) => {
    raiseRfqPage.enterValueToReasonTextbox(reason)
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

When(/^I check "([^"]*)" radio button to choose 'Do you want to go for RFQ Process' option at 'PR Detail' page$/, (option) => {
    raiseRfqPage.checkToChooseForRfqProcess(option)
})

When(/^I select 'auto buyer' from 'Delivery Contact Person' dropdown at Raise RFQ page$/, () => {
    raiseRfqPage.selectValueFromDeliveryContactPersonDropdown()
})

When(/^I select 'auto buyer' from 'Delivery Contact Person' dropdown at Raise RFQ page after redirect from PPR page$/, () => {
    raiseRfqPage.selectValueFromContactPersonDropdown()
})

When(/^I select "([^"]*)" from 'Delivery Address' dropdown at 'Raise RFQ' page$/, (deliveryAddress) => {
    raiseRfqPage.selectValueFromDeliveryAddressDropdown(deliveryAddress)
})

When(/^I select "([^"]*)" from 'Vendor' dropdown at 'Raise RFQ' page$/, (vendor) => {
    raiseRfqPage.selectValueFromVendorDropdown(vendor)
})

When(/^I select "([^"]*)" from 'RFQ Type' dropdown at 'Raise RFQ' page$/, (type) => {
    raiseRfqPage.selectValueFromRfqTypeDropdown(type)
})

When(/^I select "([^"]*)" from RFQ type dropdown at Raise RFQ page$/, (rfqType) => {
    raiseRfqPage.selectValueFromRfqTypeDropdown(rfqType)
})

When(/^I select "([^"]*)" from 'Delivery Address' dropdown at Raise RFQ page$/, (deliveryAddress) => {
    raiseRfqPage.selectValueToDeliveryAddressDropdown(deliveryAddress)
})

When(/^I select "([^"]*)" from 'Currency' dropdown at 'RFQ Detail' page$/, (currency) => {
    raiseRfqPage.selectValueFromCurrencyCodeDropdown(currency)
})

When(/^I select "([^"]*)" from 'Approval Route' dropdown at 'RFQ Detail' page$/, (approvalRoute) => {
    raiseRfqPage.selectValueFromApprovalRouteDropdown(approvalRoute)
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

When(/^I click to "([^"]*)" button in 'Reason Dialog Box' at 'RFQ Detail' page$/, (btnName) => {
    raiseRfqPage.clickToOptionButtonInReasonDialogBox(btnName)
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

When(/^I check to supplier checkbox at 'RFQ Detail' page$/, () => {
    raiseRfqPage.checkToSupplierCheckbox()
})

When(/^I uncheck to supplier checkbox at 'RFQ Detail' page$/, () => {
    raiseRfqPage.uncheckToSupplierCheckbox()
})

When(/^I see email address of contact person at Raise RFQ page is "([^"]*)"$/, (email) => {
    raiseRfqPage.verifyValueInEmailAddressTextboxExist(email)
})

When(/^I see contact number of contact person at Raise RFQ page is "([^"]*)"$/, (contactNumber) => {
    raiseRfqPage.verifyValueInContactNumberTextboxExist(contactNumber)
})

When(/^I see attachment file "([^"]*)" in 'Negotiation' table at 'RFQ Detail' page$/, (fileName) => {
    raiseRfqPage.verifyFileNameInNegotiationExist(fileName)
})

When(/^I see RFQ title random in 'RFQ Title' textbox at 'RFQ Detail' page$/, () => {
    raiseRfqPage.verifyValueInRFQTitleTextboxExist(sessionStorage.getItem("rfqTitle"))
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

Then(/^I see PPR No in 'Pre-Purchase Request No' textbox at 'RFQ' page$/, () => {
    raiseRfqPage.verifyPprNumberDisplay(sessionStorage.getItem("pprNumber"))
})

Then(/^I see RFQ number just created in 'RFQ No' textbox at 'RFQ Detail' page$/, () => {
    raiseRfqPage.verifyValueInRfqNumberTextboxExist(sessionStorage.getItem("rfqNumber"))
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
    cy.fixture(fileName).then((fileName) =>{
        raiseRfqPage.verifyRfqTitleInRfqListDisplay(fileName.rfqTitleInList + sessionStorage.getItem("numberRfqTitle"))
    })
})

Then(/^I see RFQ status in RFQ list is "([^"]*)"$/, (rfqStatus) => {
    raiseRfqPage.verifyRfqStatusInRfqListDisplay(rfqStatus)
})

Then(/^I see comment "([^"]*)" in 'Internal Conversations' table at 'RFQ Detail' page$/, (comment) => {
    raiseRfqPage.verifyCommentDisplay(comment)
})

Then(/^I see comment "([^"]*)" in 'External Conversations' table at 'RFQ Detail' page$/, (comment) => {
    raiseRfqPage.verifyCommentDisplay(comment)
})

Then(/^I see reason send back RFQ "([^"]*)" in 'Internal Conversation' table at 'RFQ Detail' page$/, (comment) => {
    raiseRfqPage.verifyCommentDisplay(comment)
})

Then(/^I see reason recall RFQ "([^"]*)" in 'Internal Conversation' table at 'RFQ Detail' page$/, (comment) => {
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

Then(/^I see "([^"]*)" in 'Vendor Information' at 'Raise RFQ' page$/, (vendorName) => {
    raiseRfqPage.verifyVendorNameDisplay(vendorName)
})

Then(/^I see 'Approval Route' dropdown at 'RFQ' page is disabled$/, () => {
    raiseRfqPage.verifyApprovalRouteDropdownIsDisable()
})

Then(/^I see a validation text of 'RFQ title' at 'Raise RFQ' page "([^"]*)" appears$/, (validation) => {
    raiseRfqPage.verifyValidationTextRfqTitleDisplay(validation)
})

Then(/^I see a validation text of 'Procurement Type' at 'Raise RFQ' page "([^"]*)" appears$/, (validation) => {
    raiseRfqPage.verifyValidationProcurementTypeDisplay(validation)
})

Then(/^I see a validation text of 'Currency Code' at 'Raise RFQ' page "([^"]*)" appears$/, (validation) => {
    raiseRfqPage.verifyValidationTextCurrencyCodeDisplay(validation)
})

Then(/^I see a validation text of 'Tax Code' at 'Raise RFQ' page "([^"]*)" appears$/, (validation) => {
    raiseRfqPage.verifyValidationTextTaxCodeDisplay(validation)
})

Then(/^I see a validation text of 'Vendor' at 'Raise RFQ' page "([^"]*)" appears$/, (validation) => {
    raiseRfqPage.verifyValidationTextVendorsDisplay(validation)
})

Then(/^I see a validation text of 'RFQ Type' at 'Raise RFQ' page "([^"]*)" appears$/, (validation) => {
    raiseRfqPage.verifyValidationTextRfqTypeDisplay(validation)
})

Then(/^I see a validation text of 'Due Date' at 'Raise RFQ' page "([^"]*)" appears$/, (validation) => {
    raiseRfqPage.verifyValidationTextDueDateDisplay(validation)
})

Then(/^I see a validation text of 'Delivery Address' at 'Raise RFQ' page "([^"]*)" appears$/, (validation) => {
    raiseRfqPage.verifyValidationTextDeliveryAddressDisplay(validation)
})

Then(/^I see a validation text of 'Delivery Date' at 'Raise RFQ' page "([^"]*)" appears$/, (validation) => {
    raiseRfqPage.verifyValidationTextDeliveryDateDisplay(validation)
})

Then(/^I see a validation text of 'Approval Route' at 'RFQ Detail' page "([^"]*)" appears$/, (validation) => {
    raiseRfqPage.verifyValidationTextApprovalRouteDisplay(validation)
})

Then(/^I see a validation text of 'Delivery Contact Person' at 'Raise RFQ' page "([^"]*)" appears$/, (validation) => {
    raiseRfqPage.verifyValidationTextDeliveryContactPersonDisplay(validation)
})

Then(/^I see a validation text of 'Contact Number' at 'Raise RFQ' page "([^"]*)" appears$/, (validation) => {
    raiseRfqPage.verifyValidationTextContactNumberDisplay(validation)
})