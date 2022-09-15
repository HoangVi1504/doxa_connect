import CommonAction from '../commons/common_actions'
import CommonPageLocator from '../PageUI/commonPageUI'
import ManageCataloguePageLocator from '../PageUI/manageCataloguePageUI'

var printf = require('printf')
const commonAction = new CommonAction()
const commonPageLocator = new CommonPageLocator()
const manageCataloguePageLocator = new ManageCataloguePageLocator()

class ManageCataloguePage{

    enterValueToFilterItemCode(itemCode){
        this.scrollToElementInList("0%")
        commonAction.clickToElement(manageCataloguePageLocator.filter_item_code_txb_css)
        commonAction.enterValueToTextboxAfterClear(manageCataloguePageLocator.filter_item_code_txb_css, itemCode)
    }

    enterValueToFilterItemName(itemName){
        this.scrollToElementInList("0%")
        commonAction.enterValueToTextboxAfterClear(manageCataloguePageLocator.filter_item_name_txb_css, itemName)
    }

    enterValueToContractedReferenceNumberTextbox(number){
        commonAction.enterValueToTextbox(manageCataloguePageLocator.contract_reference_txb_css, number)
    }

    enterValueToItemCodeTextbox(itemCode){
        commonAction.enterValueToTextbox(manageCataloguePageLocator.item_code_txb_css, itemCode)
    }

    enterValueToItemNameTextbox(itemName){
        commonAction.clickToElement(manageCataloguePageLocator.item_name_txb_css)
        commonAction.wait(1)
        commonAction.enterValueToTextbox(manageCataloguePageLocator.item_name_txb_css, itemName)
    }

    enterValueToLatestPriceTextbox(price){
        commonAction.enterValueToTextboxAfterClear(manageCataloguePageLocator.latest_price_txb_css, price)
    }

    enterValueToValidFromTextbox(date){
        commonAction.enterValueToTextboxAfterClear(manageCataloguePageLocator.valid_from_txb_css, date)
    }

    enterValueToValidToTextbox(date){
        commonAction.enterValueToTextboxAfterClear(manageCataloguePageLocator.valid_to_txb_css, date)
    }

    enterValueToDescriptionTextbox(description){
        commonAction.enterValueToTextbox(manageCataloguePageLocator.description_txb_css, description)
    }

    enterValueToModelTextbox(model){
        commonAction.enterValueToTextbox(manageCataloguePageLocator.model_txb_css, model)
    }

    enterValueToSizeTextbox(size){
        commonAction.enterValueToTextbox(manageCataloguePageLocator.size_txb_css, size)
    }

    enterValueToBrandTextbox(brand){
        commonAction.enterValueToTextbox(manageCataloguePageLocator.brand_txb_css, brand)
    }

    enterValueToContractedQuantityTextbox(quantity){
        commonAction.enterValueToTextboxAfterClear(manageCataloguePageLocator.contracted_quantity_txb_css, quantity)
    }

    enterValueToContractedPriceTextbox(price){
        commonAction.enterValueToTextboxAfterClear(manageCataloguePageLocator.contracted_price_txb_css, price)
    }

    selectValueFromCategoryDropdown(category){
        commonAction.selectValueFromElement(manageCataloguePageLocator.category_dropdown_css, category)
    }

    selectValueFromUomDropdown(uom){
        commonAction.selectValueFromElement(manageCataloguePageLocator.uom_code_dropdown_css, uom)
    }

    selectValueFromSupplierCodeDropdown(supplierCode){
        commonAction.selectOptionFromDropdownByXpath(manageCataloguePageLocator.supplier_code_dropdown_xpath, printf(commonPageLocator.option_value_in_dropdown_xpath, supplierCode))
    }

    selectValueFromTaxCodeDropdown(taxCode){
        commonAction.selectOptionFromDropdownByXpath(manageCataloguePageLocator.tax_code_dropdown_xpath, printf(commonPageLocator.option_value_in_dropdown_xpath, taxCode))
    }

    selectValueFromCurrencyDropdown(currency){
        commonAction.selectOptionFromDropdownByXpath(manageCataloguePageLocator.currency_dropdown_xpath, printf(commonPageLocator.option_value_in_dropdown_xpath, currency))
    }

    selectValueFromGlAccountDropdown(glAccount){
        commonAction.selectOptionFromDropdownByXpath(manageCataloguePageLocator.gl_account_dropdown_xpath, printf(commonPageLocator.option_value_in_dropdown_xpath, glAccount))
    }

    selectValueFromProjectDropdown(){
        commonAction.clickToElementByXpath(manageCataloguePageLocator.project_dropdown_xpath)
        commonAction.wait(1)
        commonAction.clickToElement("#react-select-10-option-3")
    }

    doubleClickToItemCodeInList(itemCode){
        commonAction.doubleClickToElementByXpath(printf(manageCataloguePageLocator.item_code_in_list_xpath, itemCode))
    }

    checkToContractedItemCheckbox(){
        commonAction.checkCheckboxByXpath(manageCataloguePageLocator.contracted_ckb_xpath)
    }

    checkToItemCodeCheckboxInList(itemCode){
        commonAction.checkCheckboxByXpath(printf(manageCataloguePageLocator.item_code_ckb_in_list_xpath, itemCode))
    }

    clearValueInFilterItemCode(){
        this.scrollToElementInList("0%")
        commonAction.clearValueInTextbox(manageCataloguePageLocator.filter_item_code_txb_css)
    }

    clickToActivateNotificationButton(){
        commonAction.clickToElementByXpath(manageCataloguePageLocator.activate_notification_button_xpath)
    }

    clickToDeactivateNotificationButton(){
        commonAction.clickToElementByXpath(manageCataloguePageLocator.deactivate_notification_button_xpath)
    }

    clickToDeleteNotificationButton(){
        commonAction.clickToElementByXpath(manageCataloguePageLocator.delete_notification_button_xpath)
    }

    clickToActionCatalogueInList(action){
        commonAction.wait(1)
        commonAction.clickToElementByXpath(printf(manageCataloguePageLocator.action_catalogue_in_list_xpath, action))
    }

    verifyValueInItemCodeTextboxExist(itemCode){
        commonAction.verifyValueInTextboxExist(manageCataloguePageLocator.item_code_txb_css, itemCode)
    }

    verifyValueInItemNameTextboxExist(itemName){
        commonAction.verifyValueInTextboxExist(manageCataloguePageLocator.item_name_txb_css, itemName)
    }

    verifyValueInContractReferenceNumberTextboxExist(number){
        commonAction.verifyValueInTextboxExist(manageCataloguePageLocator.contract_reference_txb_css, number)
    }

    verifyValueInLatestPriceTextboxExist(price){
        commonAction.verifyValueInTextboxExist(manageCataloguePageLocator.latest_price_txb_css, price)
    }

    verifyValueInContractedQuantityTextboxExist(quantity){
        commonAction.verifyValueInTextboxExist(manageCataloguePageLocator.contracted_quantity_txb_css, quantity)
    }

    verifyValueInContractedPriceTextboxExist(price){
        commonAction.verifyValueInTextboxExist(manageCataloguePageLocator.contracted_price_txb_css, price)
    }

    verifyCreateCataloguePageTitleDisplay(){
        commonAction.wait(1)
        commonAction.verifyElementByXpathVisible(manageCataloguePageLocator.create_catalogue_page_title_xpath)
    }

    verifyCatalogueDetailsPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(manageCataloguePageLocator.catalogue_details_page_title_xpath)
    }

    verifyListCataloguePageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(manageCataloguePageLocator.list_of_catalogue_page_title_xpath)
        commonAction.wait(2)
    }

    verifyItemCodeInListDisplay(itemCode){
        commonAction.verifyElementByXpathVisible(printf(manageCataloguePageLocator.item_code_in_list_xpath, itemCode))
    }

    verifyItemNameInListDisplay(itemName){
        commonAction.verifyElementByXpathVisible(printf(manageCataloguePageLocator.item_name_in_list_xpath, itemName))
    }

    verifyActionCatalogueInListDisplay(action){
        commonAction.verifyElementByXpathVisible(printf(manageCataloguePageLocator.action_catalogue_in_list_xpath, action))
    }

    getItemDescriptionInList(){
        return commonAction.getTextElement(manageCataloguePageLocator.item_description_in_list_css)
    }

    getSupplierCodeInList(){
        return commonAction.getTextElement(manageCataloguePageLocator.supplier_code_in_list_css)
    }

    getSupplierNameInList(){
        return commonAction.getTextElement(manageCataloguePageLocator.supplier_name_in_list_css)
    }

    getUomInList(){
        return commonAction.getTextElement(manageCataloguePageLocator.uom_in_list_css)
    }

    getCategoryInList(){
        this.scrollToElementInList("10%")
        return commonAction.getTextElement(manageCataloguePageLocator.category_in_list_css)
    }

    getModelInList(){
        this.scrollToElementInList("20%")
        return commonAction.getTextElement(manageCataloguePageLocator.model_in_list_css)
    }

    getSizeInList(){
        return commonAction.getTextElement(manageCataloguePageLocator.size_in_list_css)
    }

    getBrandInList(){
        return commonAction.getTextElement(manageCataloguePageLocator.brand_in_list_css)
    }

    getContractedStatusInList(){
        this.scrollToElementInList("30%")
        return commonAction.getTextElement(manageCataloguePageLocator.contracted_status_in_list_css)
    }

    getContractReferenceNumberInList(){
        return commonAction.getTextElement(manageCataloguePageLocator.contract_reference_number_in_list_css)
    }

    getContractedQuantityInList(){
        return commonAction.getTextElement(manageCataloguePageLocator.contracted_quantity_in_list_css)
    }

    getProjectCodeInList(){
        this.scrollToElementInList("50%")
        return commonAction.getTextElement(manageCataloguePageLocator.project_code_in_list_css)
    }

    getContractedPriceInList(){
        return commonAction.getTextElement(manageCataloguePageLocator.contracted_price_in_list_css)
    }

    getUnitPriceInList(){
        this.scrollToElementInList("80%")
        return commonAction.getTextElement(manageCataloguePageLocator.unit_price_in_list_css)
    }

    getTaxCodeInList(){
        return commonAction.getTextElement(manageCataloguePageLocator.tax_code_in_list_css)
    }

    getActiveStatusInList(){
        this.scrollToElementInList("100%")
        return commonAction.getTextElement(manageCataloguePageLocator.active_status_in_list_css)
    }

    getValidationContractReferenceNumber(){
        return commonAction.getTextElementByXpath(manageCataloguePageLocator.validation_text_contract_reference_number_xpath)
    }

    getValidationItemCode(){
        return commonAction.getTextElementByXpath(manageCataloguePageLocator.validation_text_item_code_xpath)
    }

    getValidationItemName(){
        return commonAction.getTextElementByXpath(manageCataloguePageLocator.validation_text_item_name_xpath)
    }

    getValidationCategory(){
        return commonAction.getTextElementByXpath(manageCataloguePageLocator.validation_text_category_xpath)
    }

    getValidationUom(){
        return commonAction.getTextElementByXpath(manageCataloguePageLocator.validation_text_uom_xpath)
    }

    getValidationLatestPrice(){
        return commonAction.getTextElementByXpath(manageCataloguePageLocator.validation_text_latest_price_xpath)
    }

    getValidationValidFrom(){
        return commonAction.getTextElementByXpath(manageCataloguePageLocator.validation_text_valid_from_xpath)
    }

    getValidationValidTo(){
        return commonAction.getTextElementByXpath(manageCataloguePageLocator.validation_text_valid_to_xpath)
    }

    getValidationContractedPrice(){
        return commonAction.getTextElementByXpath(manageCataloguePageLocator.validation_text_contracted_price_xpath)
    }

    scrollToElementInList(position){
        commonAction.scrollToPositionElement(manageCataloguePageLocator.scroll_bar_xpath, position)
    }

}export default ManageCataloguePage