import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import CommonAction from '../commons/common_actions'
import RaisePrPage from "../PageObject/raisePrPage"
import ApiAction from "../commons/call_api"
import { faker } from '@faker-js/faker';

const commonAction = new CommonAction()
const raisePrPage = new RaisePrPage()
const apiAction = new ApiAction()

When(/^Get PR number in PR list$/, () => {
    commonAction.getPrNumberInPrList()
})

When(/^Call API double click to PR title "([^"]*)" in PR list$/, (prNumber) => {
    apiAction.callApiNavigateToPrDetailPage(prNumber)
})

When(/^Call API navigate to PR detail page of PR just created$/, () => {
    apiAction.callApiNavigateToPrDetailPage(sessionStorage.getItem("prNumber"), sessionStorage.getItem("numberPrTitle"))
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
    raisePrPage.addManualItem(fileName)
})

When(/^I add catalogue item from "([^"]*)" json file at Raise PR page$/, (keyWord) => {
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
    raisePrPage.addCatalogueItem(fileName)
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
    raisePrPage.enterValueToSearchPrTitleTextbox(fileName, sessionStorage.getItem("numberPrTitle"))
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
    raisePrPage.doubleClickToPrTitleInPrList(fileName, sessionStorage.getItem("numberPrTitle"))
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
        case "pr_":
            fileName = 'pr_.json'
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