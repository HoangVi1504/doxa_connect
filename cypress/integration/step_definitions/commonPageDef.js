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

Given(/^Navigate to Invoice Module of Doxa Connect 2.0 site$/, () => {
    commonPage.navigateTo(globalVariables.invUrl)
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
})

When(/^Call Api get data after "([^"]*)" login$/, (account) => {
    apiAction.callApiGetDataAfterLogin(account)
})

When(/^Write data to 'dataBuyer.json' file$/, () => {
    commonAction.writeValueToJsonFile("dataBuyer.json", 
    {   
        buyerName: sessionStorage.getItem("userName"),
        buyerUuid: sessionStorage.getItem("userUuid"),
        buyerCompanyUuid: sessionStorage.getItem("companyUuid")
    })
})

When(/^Write data to 'dataEntityAdmin.json' file$/, () => {
    commonAction.writeValueToJsonFile("dataEntityAdmin.json", 
    {   
        entityName: sessionStorage.getItem("userName"),
        entityUuid: sessionStorage.getItem("userUuid"),
        entityCompanyUuid: sessionStorage.getItem("companyUuid")
    })
})

When(/^Write data to 'dataApSpecialist.json' file$/, () => {
    commonAction.writeValueToJsonFile("dataApSpecialist.json", 
    {   
        apSpecialistName: sessionStorage.getItem("userName"),
        apSpecialistUuid: sessionStorage.getItem("userUuid"),
    })
})

When(/^Write data to 'dataSupplier1.json' file$/, () => {
    commonAction.writeValueToJsonFile("dataSupplier1.json", 
    {   
        supplierName: sessionStorage.getItem("userName"),
        supplierUuid: sessionStorage.getItem("userUuid"),
        supplierCompanyUuid: sessionStorage.getItem("companyUuid")
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

When(/^Write data to 'dataUnConnectSupplier.json' file$/, () => {
    commonAction.writeValueToJsonFile("dataUnConnectSupplier.json", 
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

Given(/^Navigate to Getnada site$/, () => {
    commonPage.navigateTo(globalVariables.mailGetnadaUrl)
})

Given(/^Create Random data for project$/, () => {
    let addressLabel = "auto address label " + faker.random.alphaNumeric(5)
    let address1 = faker.address.street()
    let address2 = faker.address.secondaryAddress()
    let postalCode = faker.address.zipCode()
    let fullName = faker.internet.userName()
    let email = fullName + "@getnada.com"
    let phoneNumber = faker.random.numeric(10)

    let companyName = "AUTO ENTITY " + faker.random.numeric(5)
    let companyRegNo = "AUTO REG " + faker.random.numeric(5)
    let entityName = "auto_entt_" + faker.random.numeric(5)
    let entityEmail = entityName + "@getnada.com"

    let projectCode = "prj"+ faker.random.numeric(5)
    let erpProject = "ERP "+ faker.random.numeric(5)
    let projectTitle = "auto project "+ faker.random.numeric(5)

    let bankLabel = "auto bank label " + faker.random.alphaNumeric(5)
    let bankBranch = "auto branch " + faker.random.alphaNumeric(5)
    let bankBranchCode = "auto branch code " + faker.random.alphaNumeric(5)
    let accountHolderName = "auto holder name " + faker.random.alphaNumeric(5)
    let bankAccountNumber = faker.random.numeric(5)

    let companyCodeExternalBuyer = "AUTO COMPANY CODE " + faker.random.numeric(5)
    let companyNameExternalBuyer = "AUTO COMPANY NAME " + faker.random.numeric(5)
    let companyRegExternalBuyer = "COMPANY_REG_" + faker.random.numeric(5)

    let companyCodeExternalSupplier = "AUTO COMPANY CODE " + faker.random.numeric(5)
    let companyNameExternalSupplier = "AUTO COMPANY NAME " + faker.random.numeric(5)
    let companyRegExternalSupplier = "COMPANY_REG_" + faker.random.numeric(5)

    commonAction.writeValueToJsonFile("cypress/integration/data/dataCommon.json",
    {
        email: email,
        fullName: fullName,
        address1: address1,
        address2: address2,
        postalCode: postalCode,
        phoneNumber: phoneNumber,
        addressLabel: addressLabel,
    })

    commonAction.writeValueToJsonFile("cypress/integration/data/manageProject.json",
    {
        projectCode: projectCode,
        erpProject: erpProject,
        projectTitle: projectTitle
    })

    commonAction.writeValueToJsonFile("cypress/integration/data/manageEntity.json",
    { 
        companyName: companyName,
        companyRegNo: companyRegNo,
        entityName: entityName,
        entityEmail: entityEmail
    })

    commonAction.writeValueToJsonFile("cypress/integration/data/manageBankAccount.json",
    {
        bankLabel: bankLabel,
        bankBranch: bankBranch,
        bankBranchCode: bankBranchCode,
        accountHolderName: accountHolderName,
        bankAccountNumber: bankAccountNumber
    })

    commonAction.writeValueToJsonFile("cypress/integration/data/manageExternalBuyer.json",
    {
        companyCodeExternal: companyCodeExternalBuyer,
        companyNameExternal: companyNameExternalBuyer,
        companyRegExternal: companyRegExternalBuyer
    })

    commonAction.writeValueToJsonFile("cypress/integration/data/manageExternalSupplier.json",
    {
        companyCodeExternal: companyCodeExternalSupplier,
        companyNameExternal: companyNameExternalSupplier,
        companyRegExternal: companyRegExternalSupplier
    })
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

When(/^I click to "([^"]*)" button format_3$/, (buttonName) => {
    commonPage.clickToButtonFormat3(buttonName)
});

When(/^I click to text "([^"]*)"$/, (text) => {
    commonPage.clickToText(text)
});

When(/^I click to 'User Profile' button$/, () => {
    commonPage.clickToUserProfileButton()
});

When(/^I expand layout sidebar menu if it open$/, () => {
    commonAction.isElementVisible(commonPageLocator.layout_sidebar_xpath).then((isVisible) =>{
        if(isVisible){
            commonPage.clickToExpandCollapseIcon()
        }
    }) 
});

When(/^I click to 'Dashboard' link on Header menu if it not be selected$/, () => {
    commonAction.wait(1)
    commonAction.isElementVisible(printf(commonPageLocator.option_link_header_menu_xpath, "Dashboard")).then((isVisible) =>{
        if(isVisible){
            commonPage.clickToOptionLinkOnHeaderMenu("Dashboard")
        }
    }) 
})

When(/^I click to Expand Collapse icon$/, () => {
    commonPage.clickToExpandCollapseIcon()
})

When(/^I click to hamburger menu$/, () => {
    commonPage.clickToHamburgerMenu()
})

When(/^Wait for "([^"]*)" seconds$/, (time) => {
    commonPage.waitTime(time)
})

Then(/^I see "([^"]*)" button format_1 is displayed$/, (buttonName) => {
    commonPage.verifyButtonFormat1Display(buttonName)
});

Then(/^I see "([^"]*)" button format_1 is disabled$/, (buttonName) => {
    commonPage.verifyButtonFormat1Disabled(buttonName)
});

Then(/^I see "([^"]*)" button format_1 disappear$/, (buttonName) => {
    commonPage.verifyButtonFormat1Disappear(buttonName)
});

Then(/^I see 'Dashboard' title$/, () => {
    commonPage.verifyDashboardTitleDisplay()
});

Then(/^I see a message "([^"]*)" appears$/, (message) => {
    commonPage.verifyMediaHeadingMessageDisplay(message)
});

Then(/^I see a notification appears "([^"]*)"$/, (message) => {
    commonPage.verifyModalMessageDisplay(message)
});

Then(/^I see "([^"]*)" link on the left menu is displayed$/, (linkName) => {
    commonPage.verifyOptionLinkLeftMenuDisplay(linkName)
});

Then(/^I do not see "([^"]*)" link on the left menu$/, (linkName) => {
    commonPage.verifyOptionLinkLeftMenuNotVisible(linkName)
});

Then(/^I do not see "([^"]*)" button format_1 visible$/, (buttonName) => {
    commonPage.verifyButtonFormat1NotVisible(buttonName)
});

Then(/^I see "([^"]*)" in dropdown visible$/, (value) => {
    commonPage.verifyValueInDropdownDisplay(value)
});

Then(/^I do not see "([^"]*)" in dropdown visible$/, (value) => {
    commonPage.verifyValueInDropdownNotExist(value)
});