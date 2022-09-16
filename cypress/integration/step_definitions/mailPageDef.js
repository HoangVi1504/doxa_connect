import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import CommonAction from '../commons/common_actions'
import CommonPage from "../PageObject/commonPage"
import MailPage from "../PageObject/mailPage"

const mailPage = new MailPage()
const commonPage = new CommonPage()
const commonAction = new CommonAction()
var dataRfqNoTestGetnada = require('../data/rfqNumber.json')
var dataTest = require('../../../dataTest.json');
const globalVariables = require("../../integration/commons/global_variables");

Given(/^Navigate to Getnada site$/, () => {
    commonPage.navigateTo(globalVariables.mailGetnadaUrl)
})

Given(/^Navigate to Getnada site and get password$/, () => {
    commonPage.navigateTo(globalVariables.mailGetnadaUrl)
    mailPage.clickToAddInboxButton()
    mailPage.enterValueToUserTextbox("auto_ett_2206")
    mailPage.selectValueFromDomainDropdown("getnada.com")
    mailPage.clickToAddNowButton()
    mailPage.clickToOptionLinkGetnada("Doxa Account Setup Completed Success", 60)
    commonAction.getPasswordFromGetnada()
})

When(/^I get link to RFQ from 'Getnada' page$/, () => {
    commonAction.getLinkFromGetnada()
})

When(/^Get password in email$/, () => {
    commonAction.getPasswordFromGetnada()
})

When(/^I input "([^"]*)" to 'User' textbox at 'Getnada' page$/, (userName) => {
    mailPage.enterValueToUserTextbox(userName)
})

When(/^I input entity name just created to 'User' textbox$/, () => {
    mailPage.enterValueToUserTextbox(dataTest.entityName)
})

When(/^I select domain "([^"]*)" from Domain dropdown$/, (domain) => {
    mailPage.selectValueFromDomainDropdown(domain)
})

When(/^I click to 'ADD INBOX' button$/, () => {
    mailPage.clickToAddInboxButton()
})

When(/^I click to 'Add Now' button$/, () => {
    mailPage.clickToAddNowButton()
})

When(/^I click to "([^"]*)" link at 'Getnada' page$/, (linkName) => {
    mailPage.clickToOptionLinkGetnada(linkName, 60)
})

When(/^I click to mail subject RFQ is pending for quotation at 'Getnada' page$/, () => {
    mailPage.clickToOptionLinkGetnada(dataRfqNoTestGetnada.rfqNumber, 60)
})