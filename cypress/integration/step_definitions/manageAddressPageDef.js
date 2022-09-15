import { faker } from '@faker-js/faker';
import ManageAddressPage from '../PageObject/manageAddressPage';
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

const manageAddressPage = new ManageAddressPage()

When(/^I input random address label to 'Address Label' textbox at 'Create Address' page$/, () => {
    let addressNumber = faker.random.alphaNumeric(5)
    let addressLabel = "auto adr label ".concat(addressNumber)
    sessionStorage.setItem("addressLabel", addressLabel)
    manageAddressPage.enterValueToAddressLabelTextbox(sessionStorage.getItem("addressLabel"))
})

When(/^I input random address 1 to 'Address Line 1' textbox at 'Create Address' page$/, () => {
    let address1 = faker.address.streetAddress()
    sessionStorage.setItem("address1", address1)
    manageAddressPage.enterValueToAddressFirstLineTextbox(sessionStorage.getItem("address1"))
})

When(/^I input random address 2 to 'Address Line 2' textbox at 'Create Address' page$/, () => {
    let address2 = faker.address.secondaryAddress()
    sessionStorage.setItem("address2", address2)
    manageAddressPage.enterValueToAddressSecondLineTextbox(sessionStorage.getItem("address2"))
})

When(/^I input random state to 'State' textbox at at 'Create Address' page$/, () => {
    let state = faker.address.state()
    sessionStorage.setItem("state", state)
    manageAddressPage.enterValueToStateTextbox(sessionStorage.getItem("state"))
})

When(/^I input random postal code to 'Postal Code' textbox at 'Create Address' page$/, () => {
    let postalCode = faker.random.numeric(5)
    sessionStorage.setItem("postalCode", postalCode)
    manageAddressPage.enterValueToPostalCodeTextbox(sessionStorage.getItem("postalCode"))
})

When(/^I input random city to 'City' textbox at 'Create Address' page$/, () => {
    let city = faker.address.city()
    sessionStorage.setItem("city", city)
    manageAddressPage.enterValueToCityTextbox(sessionStorage.getItem("city"))
})

When(/^I input address label just created to filter 'Address Label' in list$/, () => {
    manageAddressPage.enterValueToFilterAddressLabel(sessionStorage.getItem("addressLabel"))
})

When(/^I select 'Singapore' from 'Country' dropdown at 'Create Address' page$/, () => {
    manageAddressPage.selectValueFromCountryDropdown()
})

When(/^I double click to address label just created in list$/, () => {
    manageAddressPage.doubleClickToAddressLabelInList(sessionStorage.getItem("addressLabel"))
})

When(/^I check 'Set Default Address' checkbox at 'Create Address' page$/, () => {
    manageAddressPage.checkToSetDefaultAddressCheckbox()
})

When(/^I clear value in 'Address Line 1' textbox at 'Company Address Details' page$/, () => {
    manageAddressPage.clearValueInAddressLine1Textbox()
})

When(/^I clear value in 'Postal Code' textbox at 'Company Address Details' page$/, () => {
    manageAddressPage.clearValueInPostalCodeTextbox()
})

Then(/^I see 'Create Company Address' page$/, () => {
    manageAddressPage.verifyCreateAddressPageTitleDisplay()
})

Then(/^I see 'Company Address Details' page$/, () => {
    manageAddressPage.verifyCompanyAddressDetailPageTitleDisplay()
})

Then(/^I see 'Company Address List' page$/, () => {
    manageAddressPage.verifyCompanyAddressListPageTitleDisplay()
})

Then(/^I see random address label at first line in list$/, () => {
    manageAddressPage.verifyAddressLabelInListDisplay(sessionStorage.getItem("addressLabel"))
})

Then(/^I see address label just created in 'Address Label' textbox at 'Company Address Details' page$/, () => {
    manageAddressPage.verifyValueInAddressLabelTextboxExist(sessionStorage.getItem("addressLabel"))
})

Then(/^I see a validation text of 'Address Label' at 'Create Address' page appears "([^"]*)"$/, (validation) => {
    manageAddressPage.verifyValidationAddressLabelDisplay(validation)
});

Then(/^I see a validation text of 'Address 1' at 'Create Address' page appears "([^"]*)"$/, (validation) => {
    manageAddressPage.verifyValidationAddress1Display(validation)
});

Then(/^I see a validation text of 'State' at 'Create Address' page appears "([^"]*)"$/, (validation) => {
    manageAddressPage.verifyValidationStateDisplay(validation)
});

Then(/^I see a validation text of 'Postal Code' at 'Create Address' page appears "([^"]*)"$/, (validation) => {
    manageAddressPage.verifyValidationPostalCodeDisplay(validation)
});

Then(/^I see a validation text of 'Country' at 'Create Address' page appears "([^"]*)"$/, (validation) => {
    manageAddressPage.verifyValidationCountryDisplay(validation)
});

Then(/^I see detail address at first line in list$/, () => {
    manageAddressPage.getDetailAddressInList().should('have.text', sessionStorage.getItem("address1") + "," + sessionStorage.getItem("address2"))
})

Then(/^I see random city at first line in list$/, () => {
    manageAddressPage.getCityInList().should('have.text', sessionStorage.getItem("city"))
})

Then(/^I see random state at first line in list$/, () => {
    manageAddressPage.getStateInList().should('have.text', sessionStorage.getItem("state"))
})

Then(/^I see country at first line in list is "([^"]*)"$/, (country) => {
    manageAddressPage.getCountryInList().should('have.text', country)
})

Then(/^I see random postal code at first line in list$/, () => {
    manageAddressPage.getPostalCodeInList().should('have.text', sessionStorage.getItem("postalCode"))
})

Then(/^I see default address status at first line in list is "([^"]*)"$/, (status) => {
    manageAddressPage.getDefaultAddressStatusInList().should('have.text', status)
})

Then(/^I see active address status at first line in list is "([^"]*)"$/, (status) => {
    manageAddressPage.getActiveAddressStatusInList().should('have.text', status)
})