import { faker } from '@faker-js/faker';
import CommonAction from '../commons/common_actions'
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import ManageCataloguePage from '../PageObject/manageCataloguePage';

const commonAction = new CommonAction()
const manageCataloguePage = new ManageCataloguePage()

When(/^I input item code of catalogue just created to 'Filter Item Code' in 'Catalogue' list$/, () => {
    manageCataloguePage.enterValueToFilterItemCode(sessionStorage.getItem("itemCode"))
})

When(/^I input item name of catalogue just created to 'Filter Item Name' in 'Catalogue' list$/, () => {
    manageCataloguePage.enterValueToFilterItemName(sessionStorage.getItem("itemName"))
})

When(/^I input "([^"]*)" to 'Item Code' textbox at 'Create Catalogue Item' page$/, (itemCode) => {
    manageCataloguePage.enterValueToItemCodeTextbox(itemCode)
})

When(/^I input random item code to 'Item Code' textbox at 'Create Catalogue Item' page$/, () => {
    sessionStorage.setItem("itemCode", "auto item code " + faker.random.alphaNumeric(5))
    manageCataloguePage.enterValueToItemCodeTextbox(sessionStorage.getItem("itemCode"))
})

When(/^I input random item name to 'Item Name' textbox at 'Create Catalogue Item' page$/, () => {
    sessionStorage.setItem("itemName", "auto item name " + faker.random.alphaNumeric(5))
    manageCataloguePage.enterValueToItemNameTextbox(sessionStorage.getItem("itemName"))
})

When(/^I input valid from date as next "([^"]*)" days to 'Valid From' textbox at 'Create Catalogue Item' page$/, (date) => {
    manageCataloguePage.enterValueToValidFromTextbox(commonAction.getDateFormat4(date))
})

When(/^I input valid to date as next "([^"]*)" days to 'Valid To' textbox at 'Create Catalogue Item' page$/, (date) => {
    manageCataloguePage.enterValueToValidToTextbox(commonAction.getDateFormat4(date))
})

When(/^I input "([^"]*)" to 'Latest Price' textbox at 'Create Catalogue Item' page$/, (price) => {
    manageCataloguePage.enterValueToLatestPriceTextbox(price)
})

When(/^I input "([^"]*)" to 'Description' textbox at 'Create Catalogue Item' page$/, (description) => {
    manageCataloguePage.enterValueToDescriptionTextbox(description)
})

When(/^I input random model to 'Model' textbox at 'Create Catalogue Item' page$/, () => {
    sessionStorage.setItem("model", "CTL " + faker.random.alphaNumeric(5))
    manageCataloguePage.enterValueToModelTextbox(sessionStorage.getItem("model"))
})

When(/^I input "([^"]*)" to 'Size' textbox at 'Create Catalogue Item' page$/, (size) => {
    manageCataloguePage.enterValueToSizeTextbox(size)
})

When(/^I input "([^"]*)" to 'Brand' textbox at 'Create Catalogue Item' page$/, (brand) => {
    manageCataloguePage.enterValueToBrandTextbox(brand)
})

When(/^I input random contract reference to 'Contract Reference No' textbox at 'Create Catalogue' page$/, () => {
    sessionStorage.setItem("contractRefNo", "Contract Ref No " + faker.random.alphaNumeric(5))
    manageCataloguePage.enterValueToContractedReferenceNumberTextbox(sessionStorage.getItem("contractRefNo"))
})

When(/^I input "([^"]*)" to 'Contracted Quantity' textbox at 'Create Catalogue' page$/, (quantity) => {
    manageCataloguePage.enterValueToContractedQuantityTextbox(quantity)
})

When(/^I input "([^"]*)" to 'Contracted Price' textbox at 'Create Catalogue' page$/, (price) => {
    manageCataloguePage.enterValueToContractedPriceTextbox(price)
})

When(/^I select "([^"]*)" from 'Supplier Code' dropdown at 'Create Catalogue Item' page$/, (supplierCode) => {
    manageCataloguePage.selectValueFromSupplierCodeDropdown(supplierCode)
})

When(/^I select "([^"]*)" from 'Currency' dropdown at 'Create Catalogue Item' page$/, (currency) => {
    manageCataloguePage.selectValueFromCurrencyDropdown(currency)
})

When(/^I select "([^"]*)" from 'Category' dropdown at 'Create Catalogue Item' page$/, (category) => {
    manageCataloguePage.selectValueFromCategoryDropdown(category)
})

When(/^I select "([^"]*)" from 'UOM' dropdown at 'Create Catalogue Item' page$/, (uom) => {
    manageCataloguePage.selectValueFromUomDropdown(uom)
})

When(/^I select "([^"]*)" from 'Tax Code' dropdown at 'Create Catalogue Item' page$/, (taxCode) => {
    manageCataloguePage.selectValueFromTaxCodeDropdown(taxCode)
})

When(/^I select "([^"]*)" from 'GL Account' dropdown at 'Create Catalogue Item' page$/, (glAccount) => {
    manageCataloguePage.selectValueFromGlAccountDropdown(glAccount)
})

When(/^I select 'auto Prj 1' from 'Project' dropdown at 'Create Catalogue' page$/, () => {
    manageCataloguePage.selectValueFromProjectDropdown()
})

When(/^I double click to item code of catalogue just created in 'Catalogue' list$/, () => {
    manageCataloguePage.doubleClickToItemCodeInList(sessionStorage.getItem("itemCode"))
})

When(/^I check to 'Item Code' checkbox of of catalogue just created in 'Catalogue' list$/, () => {
    manageCataloguePage.checkToItemCodeCheckboxInList(sessionStorage.getItem("itemCode"))
})

When(/^I check to 'Contracted Item' checkbox at 'Create Catalogue' page$/, () => {
    manageCataloguePage.checkToContractedItemCheckbox()
})

When(/^I clear value in 'Filter Item Code' in 'Catalogue' list$/, () => {
    manageCataloguePage.clearValueInFilterItemCode()
})

When(/^I click to 'Activate' button in notification at 'Catalogue' list$/, () => {
    manageCataloguePage.clickToActivateNotificationButton()
})

When(/^I click to 'Deactivate' button in notification at 'Catalogue' list$/, () => {
    manageCataloguePage.clickToDeactivateNotificationButton()
})

When(/^I click to 'Delete' button in notification at 'Catalogue' list$/, () => {
    manageCataloguePage.clickToDeleteNotificationButton()
})

When(/^I click to action "([^"]*)" of catalogue just created in 'Catalogue' list$/, (action) => {
    manageCataloguePage.clickToActionCatalogueInList(action)
})

Then(/^I see 'Create Catalogue Item' page$/, () => {
    manageCataloguePage.verifyCreateCataloguePageTitleDisplay()
})

Then(/^I see 'List of Catalogue' page$/, () => {
    manageCataloguePage.verifyListCataloguePageTitleDisplay()
})

Then(/^I see item code of catalogue just created in 'Item Code' textbox at 'Catalogue Details' page$/, () => {
    manageCataloguePage.verifyValueInItemCodeTextboxExist(sessionStorage.getItem("itemCode"))
})

Then(/^I see item name of catalogue just created in 'Item Name' textbox at 'Catalogue Details' page$/, () => {
    manageCataloguePage.verifyValueInItemNameTextboxExist(sessionStorage.getItem("itemName"))
})

Then(/^I see latest price in 'Latest Price' textbox at 'Catalogue Details' page is "([^"]*)"$/, (price) => {
    manageCataloguePage.verifyValueInLatestPriceTextboxExist(price)
})

Then(/^I see random contract reference number in 'Contract Reference No' textbox at 'Catalogue Details' page$/, () => {
    manageCataloguePage.verifyValueInContractReferenceNumberTextboxExist(sessionStorage.getItem("contractRefNo"))
})

Then(/^I see contracted quantity in 'Contracted Quantity' textbox at 'Catalogue Details' page is "([^"]*)"$/, (quantity) => {
    manageCataloguePage.verifyValueInContractedQuantityTextboxExist(quantity)
})

Then(/^I see contracted price in 'Contracted Price' textbox at 'Catalogue Details' page is "([^"]*)"$/, (price) => {
    manageCataloguePage.verifyValueInContractedPriceTextboxExist(price)
})

Then(/^I see random item code of catalogue just created in 'Catalogue' list$/, () => {
    manageCataloguePage.verifyItemCodeInListDisplay(sessionStorage.getItem("itemCode"))
})

Then(/^I see random item name of catalogue just created in 'Catalogue' list$/, () => {
    manageCataloguePage.verifyItemNameInListDisplay(sessionStorage.getItem("itemName"))
})

Then(/^I see action of catalogue just created in 'Catalogue' list is "([^"]*)"$/, (action) => {
    manageCataloguePage.verifyActionCatalogueInListDisplay(action)
})

Then(/^I see item description of catalogue just created in 'Catalogue' list is "([^"]*)"$/, (description) => {
    manageCataloguePage.getItemDescriptionInList().should('have.text', description)
})

Then(/^I see supplier code of catalogue just created in 'Catalogue' list is "([^"]*)"$/, (supplierCode) => {
    manageCataloguePage.getSupplierCodeInList().should('have.text', supplierCode)
})

Then(/^I see supplier name of catalogue just created in 'Catalogue' list is "([^"]*)"$/, (supplierName) => {
    manageCataloguePage.getSupplierNameInList().should('have.text', supplierName)
})

Then(/^I see uom of catalogue just created in 'Catalogue' list is "([^"]*)"$/, (uom) => {
    manageCataloguePage.getUomInList().should('have.text', uom)
})

Then(/^I see category of catalogue just created in 'Catalogue' list is "([^"]*)"$/, (category) => {
    manageCataloguePage.getCategoryInList().should('have.text', category)
})

Then(/^I see random item model of catalogue just created in 'Catalogue' list$/, () => {
    manageCataloguePage.getModelInList().should('have.text', sessionStorage.getItem("model"))
})

Then(/^I see item size of catalogue just created in 'Catalogue' list is "([^"]*)"$/, (size) => {
    manageCataloguePage.getSizeInList().should('have.text', size)
})

Then(/^I see item brand of catalogue just created in 'Catalogue' list is "([^"]*)"$/, (brand) => {
    manageCataloguePage.getBrandInList().should('have.text', brand)
})

Then(/^I see contracted status of catalogue just created in 'Catalogue' list is "([^"]*)"$/, (status) => {
    manageCataloguePage.getContractedStatusInList().should('have.text', status)
})

Then(/^I see random contracted reference number of catalogue just created in 'Catalogue' list$/, () => {
    manageCataloguePage.getContractReferenceNumberInList().should('have.text', sessionStorage.getItem("contractRefNo"))
})

Then(/^I see contracted quantity of catalogue just created in 'Catalogue' list is "([^"]*)"$/, (quantity) => {
    manageCataloguePage.getContractedQuantityInList().should('have.text', quantity)
})

Then(/^I see project of catalogue just created in 'Catalogue' list is "([^"]*)"$/, (project) => {
    manageCataloguePage.getProjectCodeInList().should('have.text', project)
})

Then(/^I see unit price of catalogue just created in 'Catalogue' list is "([^"]*)"$/, (price) => {
    manageCataloguePage.getUnitPriceInList().should('have.text', price)
})

Then(/^I see contracted price of catalogue just created in 'Catalogue' list is "([^"]*)"$/, (price) => {
    manageCataloguePage.getContractedPriceInList().should('have.text', price)
})

Then(/^I see tax code of catalogue just created in 'Catalogue' list is "([^"]*)"$/, (taxCode) => {
    manageCataloguePage.getTaxCodeInList().should('have.text', taxCode)
})

Then(/^I see active status of catalogue just created in 'Catalogue' list is "([^"]*)"$/, (status) => {
    manageCataloguePage.getActiveStatusInList().should('have.text', status)
})

Then(/^I see a validation text of 'Contract Reference No' at 'Create Catalogue Item' page appears "([^"]*)"$/, (validation) => {
    manageCataloguePage.getValidationContractReferenceNumber().should('have.text', validation)
})

Then(/^I see a validation text of 'Item Code' at 'Create Catalogue Item' page appears "([^"]*)"$/, (validation) => {
    manageCataloguePage.getValidationItemCode().should('have.text', validation)
})

Then(/^I see a validation text of 'Item Name' at 'Create Catalogue Item' page appears "([^"]*)"$/, (validation) => {
    manageCataloguePage.getValidationItemName().should('have.text', validation)
})

Then(/^I see a validation text of 'Category' at 'Create Catalogue Item' page appears "([^"]*)"$/, (validation) => {
    manageCataloguePage.getValidationCategory().should('have.text', validation)
})

Then(/^I see a validation text of 'UOM' at 'Create Catalogue Item' page appears "([^"]*)"$/, (validation) => {
    manageCataloguePage.getValidationUom().should('have.text', validation)
})

Then(/^I see a validation text of 'Latest Price' at 'Create Catalogue Item' page appears "([^"]*)"$/, (validation) => {
    manageCataloguePage.getValidationLatestPrice().should('have.text', validation)
})

Then(/^I see a validation text of 'Valid From' at 'Create Catalogue Item' page appears "([^"]*)"$/, (validation) => {
    manageCataloguePage.getValidationValidFrom().should('have.text', validation)
})

Then(/^I see a validation text of 'Valid To' at 'Create Catalogue Item' page appears "([^"]*)"$/, (validation) => {
    manageCataloguePage.getValidationValidTo().should('have.text', validation)
})

Then(/^I see a validation text of 'Contracted Price' at 'Create Catalogue Item' page appears "([^"]*)"$/, (validation) => {
    manageCataloguePage.getValidationContractedPrice().should('have.text', validation)
})