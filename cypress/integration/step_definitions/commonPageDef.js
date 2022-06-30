import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import CommonPageLocator from '../PageUI/commonPageUI'
import CommonAction from '../commons/common_actions'
import CommonPage from "../PageObject/commonPage"
import LoginPage from "../PageObject/loginPage";
import ApiAction from "../commons/call_api"
import { faker } from '@faker-js/faker';

var printf = require('printf')
const loginPage = new LoginPage()
const apiAction = new ApiAction()
const commonPage = new CommonPage()
const commonAction = new CommonAction()
const commonPageLocator = new CommonPageLocator()
const globalVariables = require("../commons/global_variables");

Given(/^Navigate to Doxa Connect 2.0 site$/, () => {
    commonPage.navigateTo(globalVariables.url)
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
})

When(/^Call Api get data in catalogue list "([^"]*)"$/, (catalogueItemCode) => {
    apiAction.callApiGetDataInCatalogueList(catalogueItemCode)
})

When(/^Call Api get data in manage address list "([^"]*)"$/, (addressLabel) => {
    apiAction.callApiGetDataInManageAddress(addressLabel)
})

When(/^Call Api create random supplier on environment "([^"]*)"$/, (env) => {
    let nameNumber = faker.random.alphaNumeric(5)
    let entityName = "AUTO SUPPLIER ".concat(nameNumber)
    let entityReg = "AUTO REG ".concat(faker.random.numeric(5))
    let email = "auto.supplier.".concat(faker.random.alphaNumeric(5)).concat("@getnada.com")
    let name = "auto supplier ".concat(nameNumber)
    let workNumber = faker.random.numeric(10)
    apiAction.callApiCreateSupplier(env, entityName, entityReg, email, name, workNumber)
});

When(/^Call Api create supplier on environment "([^"]*)", with entity name "([^"]*)", entity reg "([^"]*)", email "([^"]*)", name "([^"]*)", work number "([^"]*)"$/, (env, entityName, entityReg, email, name, workNumber) => {
    apiAction.callApiCreateSupplier(env, entityName, entityReg, email, name, workNumber)
})

When(/^Call Api create random buyer on environment "([^"]*)"$/, (env) => {
    let nameNumber = faker.random.alphaNumeric(5)
    let entityName = "AUTO BUYER ".concat(nameNumber)
    let entityReg = "AUTO REG ".concat(faker.random.numeric(5))
    let email = "auto.buyer.".concat(faker.random.alphaNumeric(5)).concat("@getnada.com")
    let workNumber = faker.random.numeric(10)
    let taxReg = "Tax Reg No ".concat(nameNumber)
    apiAction.callApiCreateBuyer(env, entityName, entityReg, taxReg, email, workNumber)
});

When(/^Call Api create buyer on environment "([^"]*)", with entity name, "([^"]*)", entity reg "([^"]*)", tax reg "([^"]*)", email "([^"]*)", work number "([^"]*)"$/, (env, entityName, entityReg, taxReg, email, workNumber) => {
    apiAction.callApiCreateBuyer(env, entityName, entityReg, taxReg, email, workNumber)
})

When(/^I click to "([^"]*)" link on header menu$/, (linkName) => {
    commonPage.clickToOptionLinkOnHeaderMenu(linkName)
});

When(/^I click to "([^"]*)" link on the left menu$/, (linkName) => {
    commonPage.clickToOptionLinkLeftMenu(linkName)
});

When(/^I click to "([^"]*)" link on the left sub menu$/, (linkName) => {
    commonPage.clickToOptionLinkSubMenu(linkName)
});

When(/^I click to "([^"]*)" button format_1$/, (buttonName) => {
    commonPage.clickToButtonFormat1(buttonName)
});

When(/^I click to "([^"]*)" button format_2$/, (buttonName) => {
    commonPage.clickToButtonFormat2(buttonName)
});

When(/^I expand layout sidebar menu if it open$/, () => {
    commonAction.isElementVisible(commonPageLocator.layout_sidebar_xpath).then((isVisible) =>{
        if(isVisible){
            commonPage.clickToExpandCollapseIcon()
        }
    }) 
});

When(/^I click to 'Dashboard' link on Header menu if it not be selected$/, () => {
    commonAction.isElementVisible(printf(commonPageLocator.option_link_header_menu_xpath, "Dashboard")).then((isVisible) =>{
        if(isVisible){
            commonPage.clickToOptionLinkOnHeaderMenu("Dashboard")
        }
    }) 
})

When(/^Wait for "([^"]*)" seconds$/, (time) => {
    commonPage.waitTime(time)
})

Then(/^I see a message "([^"]*)" appears$/, (message) => {
    commonPage.verifyMediaHeadingMessageDisplay(message)
});