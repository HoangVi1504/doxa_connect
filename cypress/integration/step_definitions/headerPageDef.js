import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import HeaderPage from "../PageObject/headerPage"

const headerPage = new HeaderPage()

When(/^I logout account$/, () => {
    headerPage.logOut()
})

When(/^I click to "Orders" link on header menu$/, () => {
    headerPage.clickToOrdersLink()
})