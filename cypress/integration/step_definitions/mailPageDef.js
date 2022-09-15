import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import CommonAction from '../commons/common_actions'
import CommonPage from "../PageObject/commonPage"
import MailPage from "../PageObject/mailPage"

const mailPage = new MailPage()
const commonPage = new CommonPage()
const commonAction = new CommonAction()
var dataTest = require('../../../dataTest.json');
const globalVariables = require("../../integration/commons/global_variables");

Given(/^Navigate to Getnada site and get password$/, () => {
    commonPage.navigateTo(globalVariables.mailGetnadaUrl)
    mailPage.clickToAddInboxButton()
    mailPage.enterValueToUserTextbox("auto_ett_2206")
    mailPage.selectValueFromDomainDropdown("getnada.com")
    mailPage.clickToAddNowButton()
    mailPage.clickToOptionLinkGetnada("Doxa Account Setup Completed Success", 60)
    commonAction.getPasswordFromGetnada()
})

When(/^Get password in email$/, () => {
    commonAction.getPasswordFromGetnada()
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
    mailPage.clickToOptionLinkGetnada(linkName)
})