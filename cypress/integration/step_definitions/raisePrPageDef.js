import { faker } from '@faker-js/faker';
import ApiAction from "../commons/call_api"
import RaisePrPage from "../PageObject/raisePrPage"
import CommonAction from '../commons/common_actions'
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

const apiAction = new ApiAction()
const raisePrPage = new RaisePrPage()
const commonAction = new CommonAction()

When(/^Get PR number in PR list$/, () => {
    commonAction.getPrNumberInPrList()
})

When(/^Call API approver PR random$/, () => {
    apiAction.callApiApproverPr()
})

When(/^Call API Raise PR with PR title "([^"]*)"$/, (prTitle) => {
    apiAction.callApiRaisePr(prTitle)
})

When(/^Call API Raise PR random$/, () => {
    let number = faker.random.alphaNumeric(5)
    let prTitleRandom = "auto PR " + number
    sessionStorage.setItem("prTitleRandom", prTitleRandom)
    apiAction.callApiRaisePr(sessionStorage.getItem("prTitleRandom"))
})

When(/^Call API Save draft PR random$/, () => {
    let number = faker.random.alphaNumeric(5)
    let prTitleRandom = "auto save draft PR " + number
    sessionStorage.setItem("prTitleRandom", prTitleRandom)
    apiAction.callApiSaveAsDraftPr(sessionStorage.getItem("prTitleRandom"))
})

When(/^Call API navigate to "([^"]*)" page of PR number "([^"]*)" in PR list$/, (pageName, prNumber) => {
    apiAction.callApiNavigateToPrPage(pageName, prNumber)
})

When(/^Call API navigate to "([^"]*)" page of PR random$/, (pageName) => {
    apiAction.callApiNavigateToPrPage(pageName, sessionStorage.getItem("prNumber"))
})

When(/^I input PR No to filter PR in list$/, () => {
    raisePrPage.enterValueToFilterPRInList(sessionStorage.getItem("prNumber"))
})

When(/^I select delivery address from "([^"]*)" json file at Raise PR page$/, (keyWord) => {
    let fileName;
    switch (keyWord) {
        case "pr_v1":
            fileName = 'pr_v1.json'
            break;

        case "pr_v2":
            fileName = 'pr_v2.json'
            break;

        default:
            break;
    }
    cy.fixture(fileName).then((fileName) =>{
        raisePrPage.selectValueToDeliveryAddressDropdown(fileName.deliveryAddress)
    })
})

When(/^I select approval route from "([^"]*)" json file at Raise PR page$/, (keyWord) => {
    let fileName;
    switch (keyWord) {
        case "pr_v1":
            fileName = 'pr_v1.json'
            break;

        case "pr_v2":
            fileName = 'pr_v2.json'
            break;

        default:
            break;
    }
    cy.fixture(fileName).then((fileName) =>{
        raisePrPage.selectValueFromApprovalRouteDropdown(fileName.approvalRoute)
    })
})

When(/^I fill data in Raise Requisition tab from "([^"]*)" json file at Raise PR page$/, (keyWord) => {
    let fileName;
    switch (keyWord) {
        case "pr_v1":
            fileName = 'pr_v1.json'
            break;

        case "pr_v2":
            fileName = 'pr_v2.json'
            break;

        case "pr_v3":
            fileName = 'pr_v3.json'
            break;

        case "pr_v4":
            fileName = 'pr_v4.json'
            break;

        case "pr_v5":
            fileName = 'pr_v5.json'
            break;

        default:
            break;
    }
    raisePrPage.fillDataInRaiseRequisitionTab(fileName)
})

When(/^I fill data in General Information tab from "([^"]*)" json file at Raise PR page$/, (keyWord) => {
    let number = faker.random.alphaNumeric(5)
    sessionStorage.setItem("numberPrTitle", number)
    let fileName;
    switch (keyWord) {
        case "pr_v1":
            fileName = 'pr_v1.json'
            break;

        case "pr_v2":
            fileName = 'pr_v2.json'
            break;

        case "pr_v3":
            fileName = 'pr_v3.json'
            break;

        case "pr_v4":
            fileName = 'pr_v4.json'
            break;

        case "pr_v5":
            fileName = 'pr_v5.json'
            break;

        default:
            break;
    }
    raisePrPage.fillDataInGeneralInformationTab(fileName, sessionStorage.getItem("numberPrTitle"))
})

When(/^I fill data in Request Terms tab from "([^"]*)" json file at Raise PR page$/, (keyWord) => {
    let fileName;
    switch (keyWord) {
        case "pr_v1":
            fileName = 'pr_v1.json'
            break;

        case "pr_v2":
            fileName = 'pr_v2.json'
            break;

        case "pr_v3":
            fileName = 'pr_v3.json'
            break;

        case "pr_v4":
            fileName = 'pr_v4.json'
            break;

        case "pr_v5":
            fileName = 'pr_v5.json'
            break;

        default:
            break;
    }
    raisePrPage.fillDataInRequestTermsTab(fileName)
})

When(/^I add manual item from "([^"]*)" json file at Raise PR page$/, (keyWord) => {
    let fileName;
    let natureOfRequisition;
    switch (keyWord) {
        case "pr_v1":
            fileName = 'pr_v1.json'
            natureOfRequisition = "non-project"
            break;

        case "pr_v3":
            fileName = 'pr_v3.json'
            natureOfRequisition = "project"
            break;

        default:
            break;
    }
    raisePrPage.addManualItem(fileName, natureOfRequisition)
})

When(/^I add catalogue item from "([^"]*)" json file at Raise PR page$/, (keyWord) => {
    let fileName;
    let natureOfRequisition;
    switch (keyWord) {
        case "pr_v2":
            fileName = 'pr_v2.json'
            natureOfRequisition = "non-project"
            break;
        
        case "pr_v4":
            fileName = 'pr_v4.json'
            natureOfRequisition = "project"
            break;

        case "pr_v5":
            fileName = 'pr_v5.json'
            natureOfRequisition = "non-project"
            break;

        default:
            break;
    }
    raisePrPage.addCatalogueItem(fileName, natureOfRequisition)
})

When(/^I input PR title from "([^"]*)" json file to 'Search PR' textbox$/, (keyWord) => {
    let fileName;
    switch (keyWord) {
        case "pr_v1":
            fileName = 'pr_v1.json'
            break;

        case "pr_v2":
            fileName = 'pr_v2.json'
            break;

        case "pr_v3":
            fileName = 'pr_v3.json'
            break;

        case "pr_v4":
            fileName = 'pr_v4.json'
            break;

        case "pr_v5":
            fileName = 'pr_v5.json'
            break;

        default:
            break;
    }
    cy.fixture(fileName).then((fileName) =>{
        raisePrPage.enterValueToSearchPrTitleTextbox(fileName.prTitle + sessionStorage.getItem("numberPrTitle"))
    })
})

When(/^I input PR title random to 'Search PR' textbox$/, () => {
    raisePrPage.enterValueToSearchPrTitleTextbox(sessionStorage.getItem("prTitleRandom"))
})

When(/^I input PPR title random to 'Search PR' textbox$/, () => {
    raisePrPage.enterValueToSearchPrTitleTextbox(sessionStorage.getItem("pprTitleRandom"))
})

When(/^I double click to PR title in PR list from "([^"]*)" json file$/, (keyWord) => {
    let fileName;
    switch (keyWord) {
        case "pr_v1":
            fileName = 'pr_v1.json'
            break;

        case "pr_v2":
            fileName = 'pr_v2.json'
            break;

        case "pr_v3":
            fileName = 'pr_v3.json'
            break;

        case "pr_v4":
            fileName = 'pr_v4.json'
            break;

        case "pr_v5":
            fileName = 'pr_v5.json'
            break;

        default:
            break;
    }
    cy.fixture(fileName).then((fileName) =>{
        raisePrPage.doubleClickToPrTitleInPrList(fileName.prTitle + sessionStorage.getItem("numberPrTitle"))
    })
})

When(/^I input reason send back or reject "([^"]*)" at Raise PR page$/, (reason) => {
    raisePrPage.enterValueToSendBackReasonTextbox(reason)
})

When(/^I click to PR title textbox at Raise PR page$/, () => {
    raisePrPage.clickToPrTitleTextbox()
})

When(/^I click to Item delete button at Raise PR page$/, () => {
    raisePrPage.clickToItemDeleteButton()
})

When(/^I click to Reject PR button at Raise PR page$/, () => {
    raisePrPage.clickToRejectPrButton()
})

When(/^I click to Send Back PR button at Raise PR page$/, () => {
    raisePrPage.clickToSendBackPrButton()
})

Then(/^I see notification PR "([^"]*)" display at PR detail page$/, (notification) => {
    raisePrPage.verifyNotificationPrDisplay(notification)
})

Then(/^I see Item delete button at Raise PR page$/, () => {
    raisePrPage.verifyItemDeleteButtonDisplay()
})

Then(/^I see PR title in PR list from "([^"]*)" json file$/, (keyWord) => {
    let fileName;
    switch (keyWord) {
        case "pr_v1":
            fileName = 'pr_v1.json'
            break;

        case "pr_v2":
            fileName = 'pr_v2.json'
            break;

        case "pr_v3":
            fileName = 'pr_v3.json'
            break;

        case "pr_v4":
            fileName = 'pr_v4.json'
            break;

        case "pr_v5":
            fileName = 'pr_v5.json'
            break;

        default:
            break;
    }
    raisePrPage.verifyPrTitleInPrListDisplay(fileName, sessionStorage.getItem("numberPrTitle"))
})

Then(/^I see Requester name in PR list from "([^"]*)" json file$/, (keyWord) => {
    let fileName;
    switch (keyWord) {
        case "pr_v1":
            fileName = 'pr_v1.json'
            break;

        case "pr_v2":
            fileName = 'pr_v2.json'
            break;

        case "pr_v3":
            fileName = 'pr_v3.json'
            break;

        case "pr_v4":
            fileName = 'pr_v4.json'
            break;

        case "pr_v5":
            fileName = 'pr_v5.json'
            break;

        default:
            break;
    }
    raisePrPage.verifyRequesterNameInPrListDisplay(fileName)
})

Then(/^I see Procurement type in PR list from "([^"]*)" json file$/, (keyWord) => {
    let fileName;
    switch (keyWord) {
        case "pr_v1":
            fileName = 'pr_v1.json'
            break;

        case "pr_v2":
            fileName = 'pr_v2.json'
            break;

        case "pr_v3":
            fileName = 'pr_v3.json'
            break;

        case "pr_v4":
            fileName = 'pr_v4.json'
            break;

        case "pr_v5":
            fileName = 'pr_v5.json'
            break;

        default:
            break;
    }
    raisePrPage.verifyProcurementTypeInPrListDisplay(fileName)
})

Then(/^I see Approval Route in PR list from "([^"]*)" json file$/, (keyWord) => {
    let fileName;
    switch (keyWord) {
        case "pr_v1":
            fileName = 'pr_v1.json'
            break;

        case "pr_v2":
            fileName = 'pr_v2.json'
            break;

        case "pr_v3":
            fileName = 'pr_v3.json'
            break;

        case "pr_v4":
            fileName = 'pr_v4.json'
            break;

        case "pr_v5":
            fileName = 'pr_v5.json'
            break;

        default:
            break;
    }
    raisePrPage.verifyApprovalRouteInPrListDisplay(fileName)
})

Then(/^I see PR title at PR detail page from "([^"]*)" json file$/, (keyWord) => {
    let fileName;
    switch (keyWord) {
        case "pr_v1":
            fileName = 'pr_v1.json'
            break;

        case "pr_v2":
            fileName = 'pr_v2.json'
            break;

        case "pr_v3":
            fileName = 'pr_v3.json'
            break;

        case "pr_v4":
            fileName = 'pr_v4.json'
            break;

        case "pr_v5":
            fileName = 'pr_v5.json'
            break;

        default:
            break;
    }
    raisePrPage.verifyValueInPrTitleTextboxExits(fileName, sessionStorage.getItem("numberPrTitle"))
})

Then(/^I see PR status in PR list is "([^"]*)"$/, (prStatus) => {
    raisePrPage.verifyPrStatusInPrListDisplay(prStatus)
})

Then(/^I see 'Raise Requisition' page title$/, () => {
    raisePrPage.verifyRaisePrPageTitleDisplay()
})

Then(/^I see 'PR detail' page title$/, () => {
    raisePrPage.verifyPrDetailPageDisplay()
})

Then(/^I see a validation text of 'Requisition Type' at 'Raise PR' page "([^"]*)" appears$/, (validation) => {
    raisePrPage.verifyValidationTextRequisitionTypeDisplay(validation)
})

Then(/^I see a validation text of 'PR title' at 'Raise PR' page "([^"]*)" appears$/, (validation) => {
    raisePrPage.verifyValidationTextPrTitleDisplay(validation)
})

Then(/^I see a validation text of 'Procurement Type' at 'Raise PR' page "([^"]*)" appears$/, (validation) => {
    raisePrPage.verifyValidationTextProcurementTypeDisplay(validation)
})

Then(/^I see a validation text of 'Approval Route' at 'Raise PR' page "([^"]*)" appears$/, (validation) => {
    raisePrPage.verifyValidationTextApprovalRouteDisplay(validation)
})

Then(/^I see a validation text of 'Delivery Address' at 'Raise PR' page "([^"]*)" appears$/, (validation) => {
    raisePrPage.verifyValidationTextDeliveryAddressDisplay(validation)
})

Then(/^I see a validation text of 'Delivery Date' at 'Raise PR' page "([^"]*)" appears$/, (validation) => {
    raisePrPage.verifyValidationTextDeliveryDateDisplay(validation)
})