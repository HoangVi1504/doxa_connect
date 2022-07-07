import { faker } from '@faker-js/faker';
import ApiAction from "../commons/call_api"
import LoginPage from "../PageObject/loginPage";
import CommonPage from "../PageObject/commonPage"
import CommonAction from '../commons/common_actions'
import CommonPageLocator from '../PageUI/commonPageUI'
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

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

When(/^Call Api get data after login$/, () => {
    apiAction.callApiGetDataAfterLogin()
})

When(/^Write data to 'dataBuyer.json' file$/, () => {
    commonAction.writeValueToJsonFile("dataBuyer.json", 
    {   
        buyerName: sessionStorage.getItem("userName"),
        buyerUuid: sessionStorage.getItem("userUuid"),
        buyerCompanyUuid: sessionStorage.getItem("companyUuid")
    })
})

When(/^Write data to 'dataApSpecialist.json' file$/, () => {
    commonAction.writeValueToJsonFile("dataApSpecialist.json", 
    {   
        apSpecialistName: sessionStorage.getItem("userName"),
        apSpecialistUuid: sessionStorage.getItem("userUuid"),
    })
})

When(/^Write data to 'dataSupplier.json' file$/, () => {
    commonAction.writeValueToJsonFile("dataSupplier.json", 
    {   
        supplierName: sessionStorage.getItem("userName"),
        supplierUuid: sessionStorage.getItem("userUuid"),
        supplierCompanyUuid: sessionStorage.getItem("companyUuid")
    })
})

When(/^Call Api get data in catalogue list have catalogue item code is "([^"]*)"$/, (catalogueItemCode) => {
    apiAction.callApiGetDataInCatalogueList(catalogueItemCode)
})

When(/^Call Api get data in manage address list have address label "([^"]*)"$/, (addressLabel) => {
    apiAction.callApiGetDataInManageAddress(addressLabel)
})

When(/^Call Api create random supplier$/, () => {
    let nameNumber = faker.random.alphaNumeric(5)
    let entityName = "AUTO RANDOM SUPPLIER ".concat(nameNumber)
    let entityReg = "AUTO RANDOM REG ".concat(faker.random.numeric(5))
    let email = "auto.supplier.".concat(faker.random.alphaNumeric(5)).concat("@getnada.com")
    let name = "auto supplier ".concat(nameNumber)
    let workNumber = faker.random.numeric(10)
    apiAction.callApiCreateSupplier(entityName, entityReg, email, name, workNumber)
});

When(/^Call Api create supplier with entity name "([^"]*)", entity reg "([^"]*)", email "([^"]*)", name "([^"]*)", work number "([^"]*)"$/, (entityName, entityReg, email, name, workNumber) => {
    apiAction.callApiCreateSupplier(entityName, entityReg, email, name, workNumber)
})

When(/^Call Api create random buyer$/, () => {
    let nameNumber = faker.random.alphaNumeric(5)
    let entityName = "AUTO RANDOM BUYER ".concat(nameNumber)
    let entityReg = "AUTO RANDOM REG ".concat(faker.random.numeric(5))
    let email = "auto.buyer.".concat(faker.random.alphaNumeric(5)).concat("@getnada.com")
    let workNumber = faker.random.numeric(10)
    let taxReg = "Tax Reg No ".concat(nameNumber)
    apiAction.callApiCreateBuyer(entityName, entityReg, taxReg, email, workNumber)
});

When(/^Call Api create buyer on with entity name, "([^"]*)", entity reg "([^"]*)", tax reg "([^"]*)", email "([^"]*)", work number "([^"]*)"$/, (entityName, entityReg, taxReg, email, workNumber) => {
    apiAction.callApiCreateBuyer(entityName, entityReg, taxReg, email, workNumber)
})

When(/^Call Api create random UOM$/, () => {
    let number = faker.random.alphaNumeric(5)
    let uomCode = "AUTO UOM CODE ".concat(number)
    let uomName = "AUTO UOM NAME ".concat(number)
    apiAction.callApiCreateUom(uomCode, uomName)
});

When(/^Call Api create UOM with uom code "([^"]*)", uom name "([^"]*)"$/, (uomCode, uomName) => {
    apiAction.callApiCreateUom(uomCode, uomName)
})

When(/^Call Api create random Category$/, () => {
    let number = faker.random.alphaNumeric(5)
    let categoryName = "AUTO RANDOM CATEGORY ".concat(number)
    let categoryDescription = "Auto description ".concat(number)
    apiAction.callApiCreateCategory(categoryName, categoryDescription)
});

When(/^Call Api create Category with category name "([^"]*)", category description "([^"]*)"$/, (categoryName, categoryDescription) => {
    apiAction.callApiCreateCategory(categoryName, categoryDescription)
});

When(/^Call Api create random company address$/, () => {
    let number = faker.random.alphaNumeric(5)
    let addressLabel = "auto random address ".concat(number)
    apiAction.callApiCreateAddress(addressLabel)
});

When(/^Call Api create company address with address label "([^"]*)"$/, (addressLabel) => {
    apiAction.callApiCreateAddress(addressLabel)
})

When(/^Call Api create random catalogue$/, () => {
    let number = faker.random.alphaNumeric(5)
    let catalogueItemCode = "auto code ".concat(number)
    let catalogueItemName = "auto name ".concat(number)
    apiAction.callApiCreateCatalogue(catalogueItemCode, catalogueItemName)
});

When(/^Call Api create catalogue with catalogue code "([^"]*)", catalogue name "([^"]*)"$/, (catalogueItemCode, catalogueItemName) => {
    apiAction.callApiCreateCatalogue(catalogueItemCode, catalogueItemName)
});

When(/^Call Api create random tax$/, () => {
    let number = faker.random.alphaNumeric(5)
    let taxCode = "auto tax code ".concat(number)
    apiAction.callApiCreateTax(taxCode)
})

When(/^Call Api create tax with tax code "([^"]*)"$/, (taxCode) => {
    apiAction.callApiCreateTax(taxCode)
})

When(/^Call Api create random GL account$/, () => {
    let number = faker.random.alphaNumeric(5)
    let glAccount = "auto G/L ".concat(number)
    apiAction.callApiCreateGL(glAccount)
})

When(/^Call Api create GL account "([^"]*)"$/, (glAccount) => {
    apiAction.callApiCreateGL(glAccount)
})

When(/^Call Api create external vendor company name "([^"]*)"$/, (companyName) => {
    apiAction.callApiCreateExternalVendor(companyName)
})

When(/^Call Api create project with project code "([^"]*)" and project title "([^"]*)"$/, (projectCode, projectTitle) => {
    apiAction.callAPiCreateProject(projectCode, projectTitle)
})

When(/^Call Api create "([^"]*)" company$/, (designation) => {
    apiAction.callApiCreateCompanyUser(designation)
})

When(/^Call Api create AP Specialist Grouping "([^"]*)"$/, (groupCode) => {
    apiAction.callApiCreateApSpecialistGrouping(groupCode)
})

When(/^Call Api create approval matrix of feature "([^"]*)", approval level "([^"]*)"$/, (featureCode, approvalLevel) => {
    apiAction.callApiCreateApprovalMatrix(featureCode, approvalLevel)
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