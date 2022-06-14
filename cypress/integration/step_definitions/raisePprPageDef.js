import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import CommonAction from '../commons/common_actions'
import RaisePprPage from "../PageObject/raisePprPage";
import ApiAction from "../commons/call_api"
import { faker } from '@faker-js/faker';

const apiAction = new ApiAction()
const commonAction = new CommonAction()
const raisePprPage = new RaisePprPage()

When(/^Call API approver PPR random$/, () => {
    apiAction.callApiApproverPpr()
})

When(/^Call API Raise PPR random$/, () => {
    let number = faker.random.alphaNumeric(5)
    let pprTitleRandom = "auto PPR " + number
    sessionStorage.setItem("pprTitleRandom", pprTitleRandom)
    apiAction.callApiRaisePpr(sessionStorage.getItem("pprTitleRandom"))
})

When(/^Call API navigate to "([^"]*)" page of PPR random$/, (pageName) => {
    apiAction.callApiNavigateToPprPage(pageName, sessionStorage.getItem("pprTitleRandom"))
})

When(/^I fill data in Raise Requisition tab from "([^"]*)" json file at Raise PPR page$/, (keyWord) => {
    let fileName;
    switch (keyWord) {
        case "ppr_v1":
            fileName = 'ppr_v1.json'
            break;

        case "ppr_v2":
            fileName = 'ppr_v2.json'
            break;

        case "ppr_v3":
            fileName = 'ppr_v3.json'
            break;

        case "ppr_v4":
            fileName = 'ppr_v4.json'
            break;

        case "ppr_v5":
            fileName = 'ppr_v5.json'
            break;

        default:
            break;
    }
    raisePprPage.fillDataInRaiseRequisitionTab(fileName)
})

When(/^I fill data in General Information tab from "([^"]*)" json file at Raise PPR page$/, (keyWord) => {
    let number = commonAction.getDateFormat1(0)
    let fileName;
    switch (keyWord) {
        case "ppr_v1":
            fileName = 'ppr_v1.json'
            break;

        case "ppr_v2":
            fileName = 'ppr_v2.json'
            break;

        case "ppr_v3":
            fileName = 'ppr_v3.json'
            break;

        case "ppr_v4":
            fileName = 'ppr_v4.json'
            break;

        case "ppr_v5":
            fileName = 'ppr_v5.json'
            break;

        default:
            break;
    }
    raisePprPage.fillDataInGeneralInformationTab(fileName, number)
})

When(/^I fill data in Request Terms tab from "([^"]*)" json file at Raise PPR page$/, (keyWord) => {
    let fileName;
    switch (keyWord) {
        case "ppr_v1":
            fileName = 'ppr_v1.json'
            break;

        case "ppr_v2":
            fileName = 'ppr_v2.json'
            break;

        case "ppr_v3":
            fileName = 'ppr_v3.json'
            break;

        case "ppr_v4":
            fileName = 'ppr_v4.json'
            break;

        case "ppr_v5":
            fileName = 'ppr_v5.json'
            break;

        default:
            break;
    }
    raisePprPage.fillDataInRequestTermsTab(fileName)
})

When(/^I add manual item from "([^"]*)" json file at Raise PPR page$/, (keyWord) => {
    let fileName;
    switch (keyWord) {
        case "ppr_v1":
            fileName = 'ppr_v1.json'
            break;

        case "ppr_v2":
            fileName = 'ppr_v2.json'
            break;

        case "ppr_v3":
            fileName = 'ppr_v3.json'
            break;

        case "ppr_v4":
            fileName = 'ppr_v4.json'
            break;

        case "ppr_v5":
            fileName = 'ppr_v5.json'
            break;

        default:
            break;
    }
    raisePprPage.addManualItem(fileName)
})

When(/^I add catalogue item from "([^"]*)" json file at Raise PPR page$/, (keyWord) => {
    let fileName;
    switch (keyWord) {
        case "ppr_v1":
            fileName = 'ppr_v1.json'
            break;

        case "ppr_v2":
            fileName = 'ppr_v2.json'
            break;
        
        case "ppr_v3":
            fileName = 'ppr_v3.json'
            break;

        case "ppr_v4":
            fileName = 'ppr_v4.json'
            break;

        case "ppr_v5":
            fileName = 'ppr_v5.json'
            break;

        default:
            break;
    }
    raisePprPage.addCatalogueItem(fileName)
})

When(/^I input PPR title from "([^"]*)" json file to 'Search PPR' textbox$/, (keyWord) => {
    let number = commonAction.getDateFormat1(0)
    let fileName;
    switch (keyWord) {
        case "ppr_v1":
            fileName = 'ppr_v1.json'
            break;

        case "ppr_v2":
            fileName = 'ppr_v2.json'
            break;

        case "ppr_v3":
            fileName = 'ppr_v3.json'
            break;

        case "ppr_v4":
            fileName = 'ppr_v4.json'
            break;

        case "ppr_v5":
            fileName = 'ppr_v5.json'
            break;

        default:
            break;
    }
    cy.fixture(fileName).then((fileName) =>{
        raisePprPage.enterValueToSearchPPRTitleTextbox(fileName.pprTitle + number)
    })
})

When(/^I input PPR random to 'Search PPR' textbox$/, () => {
    raisePprPage.enterValueToSearchPPRTitleTextbox(sessionStorage.getItem("pprTitleRandom"))
})

When(/^I double click to PPR title in PPR list from "([^"]*)" json file$/, (keyWord) => {
    let number = commonAction.getDateFormat1(0)
    let fileName;
    switch (keyWord) {
        case "ppr_v1":
            fileName = 'ppr_v1.json'
            break;

        case "ppr_v2":
            fileName = 'ppr_v2.json'
            break;

        case "ppr_v3":
            fileName = 'ppr_v3.json'
            break;

        case "ppr_v4":
            fileName = 'ppr_v4.json'
            break;

        case "ppr_v5":
            fileName = 'ppr_v5.json'
            break;

        default:
            break;
    }
    raisePprPage.doubleClickToPprTitleInPprList(fileName, number)
})

When(/^I double click to PPR title random in PPR list$/, () => {
    raisePprPage.doubleClickToPprTitleRandomInPprList(sessionStorage.getItem("pprTitleRandom"))
})

When(/^I click to Item delete button at Raise PPR page$/, () => {
    raisePprPage.clickToItemDeleteButton()
})

When(/^I click to PPR title textbox at Raise PPR page$/, () => {
    raisePprPage.clickToPprTitleTextbox()
})

When(/^I input reason cancel PPR "([^"]*)" at Raise PPR page$/, (reason) => {
    raisePprPage.enterValueToReasonCancelTextbox(reason)
})

Then(/^I see Requester name in PPR list from "([^"]*)" json file$/, (keyWord) => {
    let fileName;
    switch (keyWord) {
        case "ppr_v1":
            fileName = 'ppr_v1.json'
            break;

        case "ppr_v2":
            fileName = 'ppr_v2.json'
            break;

        case "ppr_v3":
            fileName = 'ppr_v3.json'
            break;

        case "ppr_v4":
            fileName = 'ppr_v4.json'
            break;

        case "ppr_v5":
            fileName = 'ppr_v5.json'
            break;

        default:
            break;
    }
    raisePprPage.verifyRequesterNameInPprListDisplay(fileName)
})

Then(/^I see Procurement type in PPR list from "([^"]*)" json file$/, (keyWord) => {
    let fileName;
    switch (keyWord) {
        case "ppr_v1":
            fileName = 'ppr_v1.json'
            break;

        case "ppr_v2":
            fileName = 'ppr_v2.json'
            break;

        case "ppr_v3":
            fileName = 'ppr_v3.json'
            break;

        case "ppr_v4":
            fileName = 'ppr_v4.json'
            break;

        case "ppr_v5":
            fileName = 'ppr_v5.json'
            break;

        default:
            break;
    }
    raisePprPage.verifyProcurementTypeInPprListDisplay(fileName)
})

Then(/^I see Approval Route in PPR list from "([^"]*)" json file$/, (keyWord) => {
    let fileName;
    switch (keyWord) {
        case "ppr_v1":
            fileName = 'ppr_v1.json'
            break;

        case "ppr_v2":
            fileName = 'ppr_v2.json'
            break;

        case "ppr_v3":
            fileName = 'ppr_v3.json'
            break;

        case "ppr_v4":
            fileName = 'ppr_v4.json'
            break;

        case "ppr_v5":
            fileName = 'ppr_v5.json'
            break;

        default:
            break;
    }
    raisePprPage.verifyApprovalRouteInPprListDisplay(fileName)
})

Then(/^I see PPR title at PPR detail page from "([^"]*)" json file$/, (keyWord) => {
    let number = commonAction.getDateFormat1(0)
    let fileName;
    switch (keyWord) {
        case "ppr_v1":
            fileName = 'ppr_v1.json'
            break;

        case "ppr_v2":
            fileName = 'ppr_v2.json'
            break;

        case "ppr_v3":
            fileName = 'ppr_v3.json'
            break;

        case "ppr_v4":
            fileName = 'ppr_v4.json'
            break;

        case "ppr_v5":
            fileName = 'ppr_v5.json'
            break;

        default:
            break;
    }
    cy.fixture(fileName).then((fileName) =>{
        raisePprPage.verifyValueInPprTitleTextboxExits(fileName.pprTitle + number)
    })
})

Then(/^I see PPR title random at PPR detail page$/, () => {
    raisePprPage.verifyValueInPprTitleTextboxExits(sessionStorage.getItem("pprTitleRandom"))
})

Then(/^I see Project code with status "([^"]*)" at PPR detail page from "([^"]*)" json file$/, (status, keyWord) => {
    let fileName;
    switch (keyWord) {
        case "ppr_v4":
            fileName = 'ppr_v4.json'
            break;

        case "ppr_v5":
            fileName = 'ppr_v5.json'
            break;

        default:
            break;
    }
    raisePprPage.verifyValueInProjectCodeExits(fileName, status)
})

Then(/^I see Item delete button at Raise PPR page$/, () => {
    raisePprPage.verifyItemDeleteButtonDisplay()
})

Then(/^I see PPR status in PPR list is "([^"]*)"$/, (pprStatus) => {
    raisePprPage.verifyPprStatusInPprListDisplay(pprStatus)
})

Then(/^I see 'Raise Pre Requisition' page title$/, () => {
    raisePprPage.verifyRaisePprPageTitleDisplay()
})

Then(/^I see 'PPR detail' page title$/, () => {
    raisePprPage.verifyPprDetailPageDisplay()
})

Then(/^I see a validation text of 'Requisition Type' at 'Raise PPR' page "([^"]*)" appears$/, (validation) => {
    raisePprPage.verifyValidationTextRequisitionTypeDisplay(validation)
})

Then(/^I see a validation text of 'PPR title' at 'Raise PPR' page "([^"]*)" appears$/, (validation) => {
    raisePprPage.verifyValidationTextPprTitleDisplay(validation)
})

Then(/^I see a validation text of 'Procurement Type' at 'Raise PPR' page "([^"]*)" appears$/, (validation) => {
    raisePprPage.verifyValidationTextProcurementTypeDisplay(validation)
})

Then(/^I see a validation text of 'Approval Route' at 'Raise PPR' page "([^"]*)" appears$/, (validation) => {
    raisePprPage.verifyValidationTextApprovalRouteDisplay(validation)
})

Then(/^I see a validation text of 'Currency Code' at 'Raise PPR' page "([^"]*)" appears$/, (validation) => {
    raisePprPage.verifyValidationTextCurrencyCodeDisplay(validation)
})

Then(/^I see a validation text of 'Delivery Address' at 'Raise PPR' page "([^"]*)" appears$/, (validation) => {
    raisePprPage.verifyValidationTextDeliveryAddressDisplay(validation)
})

Then(/^I see a validation text of 'Delivery Date' at 'Raise PPR' page "([^"]*)" appears$/, (validation) => {
    raisePprPage.verifyValidationTextDeliveryDateDisplay(validation)
})