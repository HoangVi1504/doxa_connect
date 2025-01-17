import { faker } from '@faker-js/faker';
import ApiAction from "../commons/call_api"
import CommonAction from '../commons/common_actions'
import RaisePprPage from "../PageObject/raisePprPage";
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

const apiAction = new ApiAction()
const commonAction = new CommonAction()
const raisePprPage = new RaisePprPage()

When(/^Get PPR number in 'PPR' list$/, () => {
    commonAction.getPprNumberInPprList()
})

When(/^Get PPR number in 'PR' list$/, () => {
    commonAction.getPprNumberInPrList()
})

When(/^Call API approver PPR random$/, () => {
    apiAction.callApiApproverPpr()
})

When(/^Call API convert PPR to PR$/, () => {
    apiAction.callApiConvertPprToPr()
})

When(/^Call API save af draft PPR random$/, () => {
    sessionStorage.setItem("pprTitleRandom", "auto PPR " + faker.random.alphaNumeric(5))
    apiAction.callApiSaveAsDraftPpr(sessionStorage.getItem("pprTitleRandom"))
})

When(/^Call API Raise PPR random$/, () => {
    sessionStorage.setItem("pprTitleRandom", "auto PPR " + faker.random.alphaNumeric(5))
    apiAction.callApiRaisePpr(sessionStorage.getItem("pprTitleRandom"))
})

When(/^Call API Raise PPR random with contract item and unconnected supplier$/, () => {
    sessionStorage.setItem("pprTitleRandom", "auto PPR " + faker.random.alphaNumeric(5))
    apiAction.callApiRaisePprWithContractItemUnconnectedSupplier(sessionStorage.getItem("pprTitleRandom"))
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
    let number = faker.random.alphaNumeric(5)
    sessionStorage.setItem("numberPprTitle", number)
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
    raisePprPage.fillDataInGeneralInformationTab(fileName, sessionStorage.getItem("numberPprTitle"))
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
        raisePprPage.enterValueToSearchPprTitleTextbox(fileName.pprTitle + sessionStorage.getItem("numberPprTitle"))
    })
})

When(/^I input PPR random to 'Search PPR' textbox$/, () => {
    raisePprPage.enterValueToSearchPprTitleTextbox(sessionStorage.getItem("pprTitleRandom"))
})

When(/^I input PPR number just created to 'Filter PPR No' in "([^"]*)" list$/, (listName) => {
    raisePprPage.enterValueToFilterPprNumberInList(sessionStorage.getItem("pprNumber"), listName)
})

When(/^I input PPR random to 'PPR Title' textbox at 'PPR' page$/, () => {
    sessionStorage.setItem("pprTitleRandom", "auto PPR " + faker.random.alphaNumeric(5))
    raisePprPage.enterValueToPprTitleTextbox(sessionStorage.getItem("pprTitleRandom"))
})

When(/^I select "([^"]*)" from 'Procurement Type' dropdown at 'PPR' page$/, (type) => {
    raisePprPage.selectValueFromProcurementTypeDropdown(type)
})

When(/^I select 'auto buyer' from 'Delivery Contact Person' dropdown at Raise PPR page$/, () => {
    raisePprPage.selectValueFromDeliveryContactPersonDropdown()
})

When(/^I double click to PPR title in PPR list from "([^"]*)" json file$/, (keyWord) => {
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
        raisePprPage.doubleClickToPprTitleInPprList(fileName.pprTitle + sessionStorage.getItem("numberPprTitle"))
    })
})

When(/^I double click to PPR title random in PPR list$/, () => {
    raisePprPage.doubleClickToPprTitleInPprList(sessionStorage.getItem("pprTitleRandom"))
})

When(/^I double click to PPR number just created in 'PPR' list$/, () => {
    raisePprPage.doubleClickToPprNumberInPprList(sessionStorage.getItem("pprNumber"))
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

When(/^I input reason send back PPR "([^"]*)" at 'PPR' page$/, (reason) => {
    raisePprPage.enterValueToReasonSendBackTextbox(reason)
})

When(/^I input reason reject PPR "([^"]*)" at 'PPR' page$/, (reason) => {
    raisePprPage.enterValueToReasonRejectTextbox(reason)
})

Then(/^I see 'Approval Route' dropdown at 'PPR' page is disabled$/, () => {
    raisePprPage.verifyApprovalRouteDropdownIsDisable()
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
        raisePprPage.verifyValueInPprTitleTextboxExist(fileName.pprTitle + sessionStorage.getItem("numberPprTitle"))
    })
})

Then(/^I see PPR title random at PPR detail page$/, () => {
    raisePprPage.verifyValueInPprTitleTextboxExist(sessionStorage.getItem("pprTitleRandom"))
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
    raisePprPage.verifyValueInProjectCodeExist(fileName, status)
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

Then(/^I see 'PPR List' page title$/, () => {
    raisePprPage.verifyPprListPageTitleDisplay()
})

When(/^I see email address of contact person at Raise PPR page is "([^"]*)"$/, (email) => {
    raisePprPage.verifyValueInEmailAddressTextboxExist(email)
})

When(/^I see contact number of contact person at Raise PPR page is "([^"]*)"$/, (contactNumber) => {
    raisePprPage.verifyValueInContactNumberTextboxExist(contactNumber)
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

Then(/^I see a validation text of 'Delivery Contact Person' at 'Raise PPR' page "([^"]*)" appears$/, (validation) => {
    raisePprPage.verifyValidationTextDeliveryContactPersonDisplay(validation)
})

Then(/^I see a validation text of 'Contact Number' at 'Raise PPR' page "([^"]*)" appears$/, (validation) => {
    raisePprPage.verifyValidationTextContactNumberDisplay(validation)
})