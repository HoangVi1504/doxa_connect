import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../PageObject/loginPage"

const loginPage = new LoginPage()

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

Then(/^I see Doxa Connect 2.0 title$/, () => {
    loginPage.verifyDoxaConnectImgDisplay()
})