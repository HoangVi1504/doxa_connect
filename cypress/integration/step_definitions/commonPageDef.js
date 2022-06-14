import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import CommonAction from '../commons/common_actions'
import CommonPage from "../PageObject/commonPage"
import LoginPage from "../PageObject/loginPage";
import CommonPageLocator from '../PageUI/commonPageUI'
import { faker } from '@faker-js/faker';

var printf = require('printf')
const loginPage = new LoginPage()
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