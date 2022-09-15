import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../PageObject/loginPage"
import ApiAction from "../commons/call_api"

const loginPage = new LoginPage()
var dataTest = require('../../../dataTest.json');
var dataTestGetnada = require('../../../dataTestGetnada.json');

When(/^I login with role "([^"]*)"$/, (role) => {
    let fileName
    switch (role) {
        case "creator":
            fileName = 'credentials.json'
            break;
    
        case "approver 1":
            fileName = 'approver_1.json'
            break;

        case "approver 2":
            fileName = 'approver_2.json'
            break;

        case "supplier 1":
            fileName = 'supplier_1.json'
            break;

        case "supplier 2":
            fileName = 'supplier_2.json'
            break;

        case "supplier 34":
            fileName = 'supplier_34.json'
            break;

        case "ap specialist":
            fileName = 'ap_specialist.json'
            break;

        case "doxa admin":
            fileName = 'doxa_admin.json'
            break;

        case "doxa admin stag":
            fileName = 'doxa_admin_stag.json'
            break;

        case "entity admin":
            fileName = 'entity_admin.json'
            break;

        case "buyer":
            fileName = 'buyer.json'
            break;
            
        default:
            break;
    }
    loginPage.loginWithEmailPass(fileName)
});

When(/^I input email of entity just created to 'Email' textbox$/, () => {
    loginPage.fillEmail(dataTest.entityEmail)
})

When(/^I input temporary password of entity just created to 'Password' textbox$/, () => {
    loginPage.fillPassword(dataTestGetnada.passNewAccount)
})

When(/^I click to Login button at 'Login' page$/, () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    loginPage.clickToLoginButton()
})

Then(/^I see 'Doxa Connect' image appears$/, () => {
    loginPage.verifyDoxaConnectImgDisplay()
})

Then(/^I see Doxa Connect 2.0 title$/, () => {
    loginPage.verifyDoxaConnectImgDisplay()
})