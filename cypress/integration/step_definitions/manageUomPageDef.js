import { faker } from '@faker-js/faker';
import ManageUomPage  from "../PageObject/manageUomPage"
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

const manageUomPage = new ManageUomPage()

When(/^I input random uom code to 'Uom Code' textbox at 'Create Uom' page$/, () => {
    sessionStorage.setItem("uomCode", "AUTO UOM CODE "+ faker.random.numeric(5))
    manageUomPage.enterValueToUomCodeTextbox(sessionStorage.getItem("uomCode"))
})

When(/^I input random uom name to 'Uom Name' textbox at 'Create Uom' page$/, () => {
    sessionStorage.setItem("uomName", "AUTO UOM NAME "+ faker.random.numeric(5))
    manageUomPage.enterValueToUomNameTextbox(sessionStorage.getItem("uomName"))
})

When(/^I input "([^"]*)" to 'Uom Description' textbox at 'Create Uom' page$/, (description) => {
    manageUomPage.enterValueToUomDescriptionTextbox(description)
})

When(/^I input uom code just created to 'Filter Uom Code' in UOM list$/, () => {
    manageUomPage.enterValueToFilterUomCodeInList(sessionStorage.getItem("uomCode"))
})

When(/^I input uom name just created to 'Filter Uom Name' in UOM list$/, () => {
    manageUomPage.enterValueToFilterUomNameInList(sessionStorage.getItem("uomName"))
})

When(/^I double click to uom code just created in UOM list$/, () => {
    manageUomPage.doubleClickToUomCodeInList(sessionStorage.getItem("uomCode"))
})

When(/^I check to uom code just created in UOM list$/, () => {
    manageUomPage.checkToUomCodeCheckbox(sessionStorage.getItem("uomCode"))
})

When(/^I clear value in 'UOM Name' textbox at 'UOM detail' page$/, () => {
    manageUomPage.clearValueInUomNameTextbox()
})

When(/^I click to uom action "([^"]*)" in UOM list$/, (action) => {
    manageUomPage.clickToUomActionInList(action)
})

When(/^I click to 'Deactivate' button in notification$/, () => {
    manageUomPage.clickToDeactivateButtonInNotification()
})

When(/^I click to 'Activate' button in notification$/, () => {
    manageUomPage.clickToActivateButtonInNotification()
})

Then(/^I see 'Create New UOM' page$/, () => {
    manageUomPage.verifyCreateNewUomPageTitleDisplay()
})

Then(/^I see 'UOM Detail' page$/, () => {
    manageUomPage.verifyUomDetailPageTitleDisplay()
})

Then(/^I see 'List of UOM' title$/, () => {
    manageUomPage.verifyListUomPageTitleDisplay()
})

Then(/^I see random uom code in UOM list$/, () => {
    manageUomPage.verifyUomCodeInListDisplay(sessionStorage.getItem("uomCode"))
})

Then(/^I see uom action in UOM list is "([^"]*)"$/, (action) => {
    manageUomPage.verifyUomActionInListDisplay(action)
})

Then(/^I see uom code just created in 'UOM Code' textbox at 'UOM Detail' page$/, () => {
    manageUomPage.verifyValueInUomCodeTextboxDisplay(sessionStorage.getItem("uomCode"))
})

Then(/^I see random uom name in UOM list$/, () => {
    manageUomPage.getUomNameInList().should('have.text', sessionStorage.getItem("uomName"))
})

Then(/^I see description in UOM list is "([^"]*)"$/, (description) => {
    manageUomPage.getUomDescription().should('have.text', description)
})

Then(/^I see uom status in UOM list is "([^"]*)"$/, (status) => {
    manageUomPage.getUomActiveStatusInList().should('have.text', status)
})

Then(/^I see a validation text of 'uom code' at 'Create Uom' page appears "([^"]*)"$/, (validation) => {
    manageUomPage.getValidationTextUomCode().should('have.text', validation)
})

Then(/^I see a validation text of 'uom name' at 'Create Uom' page appears "([^"]*)"$/, (validation) => {
    manageUomPage.getValidationTextUomName().should('have.text', validation)
})