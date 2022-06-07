import CommonAction from '../commons/common_actions'
import CommonPageLocator from '../PageUI/commonPageUI'
import RaiseRFQPageLocator from '../PageUI/raiseRfqPageUI'

var printf = require('printf')
const commonAction = new CommonAction()
const commonPageLocator = new CommonPageLocator()
const raiseRFQPageLocator = new RaiseRFQPageLocator()

class RaiseRFQPage{

    fillDataInRaiseRequisitionTab(fileName){
        cy.fixture(fileName).then((fileName) =>{
            this.selectValueFromRequisitionTypeDropdown(fileName.requisitionType)
            this.selectValueFromNatureRequisitionDropdown(fileName.natureOfRequisition)
            if(fileName.natureOfRequisition == "Non-Project"){
                this.verifyProjectCodeFieldNotDisplay()
                this.selectValueFromCurrencyCodeDropdown(fileName.currencyCode)
            }else if(fileName.natureOfRequisition == "Project"){
                this.verifyProjectCodeFieldDisplay()
                this.selectValueFromProjectCodeDropdown(fileName.projectCode)
            }
            this.selectValueFromVendorDropdown(fileName.vendor1)
        })   
    }

    fillDataInGeneralInformationTab(fileName, number){
        cy.fixture(fileName).then((fileName) =>{
            this.enterValueToRfqTitleTextbox(fileName.rfqTitle + number)
            this.selectValueFromProcurementTypeDropdown(fileName.procurementType)
        })
    }

    fillDataInRequestTermsTab(fileName){
        this.selectValueFromRfqTypeDropdown(fileName)
        cy.fixture(fileName).then((fileName) =>{
            if(fileName.rfqType == "Contract"){
                this.enterValueToValidityStartDateTextbox(commonAction.getDateFormat4(3))
                this.enterValueToValidityEndDateTextbox(commonAction.getDateFormat4(5))
            }   
        })
        this.enterValueToDueDateTextbox(commonAction.getDateFormat1(5))
        this.selectValueToDeliveryAddressDropdown(fileName)
        this.enterValueToDeliveryDateTextbox(commonAction.getDateFormat4(7))
        this.enterValueToNoteTextbox(fileName)
    }

    addCatalogueItem(fileName){
        cy.fixture(fileName).then((fileName) =>{
            commonAction.clickToElementByXpath(printf(commonPageLocator.button_format_2_xpath, "Add Catalogue"))
            this.enterValueToSearchTextboxInItemTable(fileName.itemCode)
            commonAction.checkCheckbox('[ref="eCheckbox"]>div>[type="checkbox"]')
            commonAction.clickToElementByXpath(printf(commonPageLocator.button_format_1_xpath, "Add"))
            this.verifyItemDeleteButtonDisplay()
            this.scrollToQuantityItem("50%")
            this.enterValueToItemQuantityInItemTable(fileName.itemQuantity)
        })
    }

    addCatalogueItemWithoutScrollBar(fileName){
        cy.fixture(fileName).then((fileName) =>{
            commonAction.clickToElementByXpath(printf(commonPageLocator.button_format_2_xpath, "Add Catalogue"))
            this.enterValueToSearchTextboxInItemTable(fileName.itemCode)
            commonAction.checkCheckbox('[ref="eCheckbox"]>div>[type="checkbox"]')
            commonAction.clickToElementByXpath(printf(commonPageLocator.button_format_1_xpath, "Add"))
            this.verifyItemDeleteButtonDisplay()
            this.clickToFilterBrandInItemTable()
            this.clickToFilterUomInItemTable()
            this.clickToItemQuantityInItemTable()
            this.enterValueToItemQuantityInItemTable(fileName.itemQuantity)
        })
    }

    addManualItem(fileName){
        cy.fixture(fileName).then((fileName) =>{
            commonAction.clickToElementByXpath(printf(commonPageLocator.button_format_2_xpath, "Add Manual"))
            this.verifyItemDeleteButtonDisplay()
            this.enterValueToItemCodeInItemTable(fileName.itemCode)
            this.enterValueToItemNameInItemTable(fileName.itemName)
            this.enterValueToItemDescriptionInItemTable(fileName.itemDescription)
            this.enterValueToItemModelInItemTable(fileName.itemModel)
            this.enterValueToItemSizeInItemTable(fileName.itemSize)
            this.enterValueToItemBrandInItemTable(fileName.itemBrand)
            this.selectValueFromUom(fileName.uom)
            this.enterValueToItemQuantityInItemTable(fileName.itemQuantity)
            this.enterValueToCurrencyInItemTable(fileName.currencyItem)
            this.enterValueToPriceInItemTable(fileName.price)
        })
    }

    enterValueToSearchRfqTitleTextbox(fileName, number){
        cy.fixture(fileName).then((fileName) =>{
            commonAction.enterValueToTextbox('[aria-label="RFQ Title Filter Input"]', fileName.rfqTitleInList + number)
        })
    }

    enterValueToRfqTitleTextbox(rfqTitle){
        commonAction.enterValueToTextbox('[name="rfqTitle"]', rfqTitle)
    }

    enterValueToValidityStartDateTextbox(date){
        commonAction.enterValueToTextbox('[name="validityStartDate"]', date)
    }

    enterValueToValidityEndDateTextbox(date){
        commonAction.enterValueToTextbox('[name="validityEndDate"]', date)
    }

    enterValueToDueDateTextbox(date){
        commonAction.enterValueToTextbox('input[placeholder="Please select valid Due Date"]', date)
        commonAction.clickToElementByXpath(printf(commonPageLocator.label_xpath, "Due Date"))
    }

    enterValueToDeliveryDateTextbox(date){
        commonAction.enterValueToTextbox('[name="deliveryDate"]', date)
        commonAction.clickToElementByXpath(printf(commonPageLocator.label_xpath, "Delivery Date"))
    }

    enterValueToNoteTextbox(fileName){
        cy.fixture(fileName).then((fileName) =>{
            commonAction.enterValueToTextbox('[name="note"]', fileName.note)
        }) 
    }

    enterValueToSearchTextboxInItemTable(keyWord){
        commonAction.enterValueToTextbox('[type="search"]', keyWord)
    }

    enterValueToItemCodeInItemTable(code){
        commonAction.enterValueToTextboxByXpath(raiseRFQPageLocator.item_code_xpath, code)
    }

    enterValueToItemNameInItemTable(itemName){
        commonAction.enterValueToTextboxByXpath(raiseRFQPageLocator.item_name_xpath, itemName)
    }

    enterValueToItemDescriptionInItemTable(description){
        commonAction.enterValueToTextboxByXpath(raiseRFQPageLocator.item_description_xpath, description)
        commonAction.clickToElementByXpath(printf(commonPageLocator.text_xpath, "Item Description"))
    }

    enterValueToItemModelInItemTable(model){
        commonAction.enterValueToTextboxByXpath(raiseRFQPageLocator.item_model_xpath, model)
    }

    enterValueToItemSizeInItemTable(size){
        commonAction.enterValueToTextboxByXpath(raiseRFQPageLocator.item_size_xpath, size)
    }

    enterValueToItemBrandInItemTable(brand){
        commonAction.enterValueToTextboxByXpath(raiseRFQPageLocator.item_brand_xpath, brand)
    }

    enterValueToItemQuantityInItemTable(quantity){
        commonAction.enterValueToTextboxByXpath(raiseRFQPageLocator.item_quantity_xpath, quantity)
    }

    enterValueToCurrencyInItemTable(currency){
        commonAction.enterValueToTextboxByXpath(raiseRFQPageLocator.item_currency_xpath, currency)
    }

    enterValueToPriceInItemTable(price){
        commonAction.enterValueToTextboxByXpath(raiseRFQPageLocator.item_unit_price_xpath, price)
    }

    selectValueFromRequisitionTypeDropdown(value){
        commonAction.selectValueFromElement('[name="requisitionType"]', value)
    }

    selectValueFromNatureRequisitionDropdown(value){
        commonAction.selectValueFromElement('[name="project"]', value)
    }

    selectValueFromProjectCodeDropdown(value){
        commonAction.selectValueFromElement('[name="projectCode"]', value)
    }

    selectValueFromCurrencyCodeDropdown(value){
        commonAction.selectValueFromElement('[name="currencyCode"]', value)
    }

    selectValueFromVendorDropdown(value){
        commonAction.selectValueFromElement('[name="vendors"]', value)
    }

    selectValueFromProcurementTypeDropdown(value){
        commonAction.selectValueFromElement('[name="procurementType"]', value)
    }

    selectValueFromRfqTypeDropdown(fileName){
        cy.fixture(fileName).then((fileName) =>{
            commonAction.selectValueFromElement('[name="rfqType"]', fileName.rfqType)
        })
    }

    selectValueToDeliveryAddressDropdown(fileName){
        cy.fixture(fileName).then((fileName) =>{
            commonAction.selectValueFromElement('[name="deliveryAddress"]', fileName.deliveryAddress)
        })
    }

    selectValueFromUom(uom){
        commonAction.selectOptionFromDropdownByXpath(raiseRFQPageLocator.uom_xpath, printf(commonPageLocator.text_xpath, uom))
    }

    clearValueInDueDateTextbox(){
        commonAction.clearValueInTextbox('input[placeholder="Please select valid Due Date"]')
    }

    clearValueInDeliveryDateTextbox(){
        commonAction.clearValueInTextbox('[name="deliveryDate"]')
    }

    clickToNoteTextbox(){
        commonAction.clickToElement('[name="note"]')
    }

    clickToRfqTitleTextbox(){
        commonAction.clickToElement('[name="rfqTitle"]')
    }

    clickToFilterBrandInItemTable(){
        commonAction.clickToElement('[aria-label="Brand Filter Input"]')
    }

    clickToFilterUomInItemTable(){
        commonAction.clickToElement('[aria-label="UOM Filter Input"]')
    }

    clickToItemQuantityInItemTable(){
        commonAction.clickToElementByXpath(raiseRFQPageLocator.item_quantity_xpath)
    }

    clickToItemDeleteButton(){
        commonAction.clickToElementByXpath(raiseRFQPageLocator.item_delete_button_xpath)
    }

    verifyProjectCodeFieldNotDisplay(){
        commonAction.verifyElementNotExist('[name="projectCode"]')
    }

    verifyProjectCodeFieldDisplay(){
        commonAction.verifyElementVisible('[name="projectCode"]')
    }

    verifyRaiseRFQPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(raiseRFQPageLocator.raise_rfq_page_title_xpath)
    }

    verifyRfqTitleInRfqListDisplay(fileName, number){
        cy.fixture(fileName).then((fileName) =>{
            commonAction.verifyElementByXpathVisible(printf(raiseRFQPageLocator.rfq_title_in_rfq_list_xpath, fileName.rfqTitleInList + number))
        })
    }

    verifyItemDeleteButtonDisplay(){
        commonAction.verifyElementByXpathVisible(raiseRFQPageLocator.item_delete_button_xpath)
    }

    verifyRfqStatusInRfqListDisplay(rfqStatus){
        commonAction.verifyElementByXpathVisible(printf(raiseRFQPageLocator.rfq_status_in_rfq_list_xpath, rfqStatus))
    }

    verifyValidationTextRfqTitleDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(raiseRFQPageLocator.validation_text_rfq_title_xpath, validation))
    }

    verifyValidationProcurementTypeDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(raiseRFQPageLocator.validation_text_procurement_type_xpath, validation))
    }

    verifyValidationTextCurrencyCodeDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(raiseRFQPageLocator.validation_text_currency_code_xpath, validation))
    }

    verifyValidationTextVendorsDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(raiseRFQPageLocator.validation_text_vendors_xpath, validation))
    }

    verifyValidationTextRfqTypeDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(raiseRFQPageLocator.validation_text_rfq_type_xpath, validation))
    }

    verifyValidationTextDueDateDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(raiseRFQPageLocator.validation_text_due_date_xpath, validation))
    }

    verifyValidationTextDeliveryAddressDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(raiseRFQPageLocator.validation_text_delivery_address_xpath, validation))
    }

    verifyValidationTextDeliveryDateDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(raiseRFQPageLocator.validation_text_delivery_date_xpath, validation))
    }

    scrollToQuantityItem(position){
        commonAction.scrollToPositionElement(raiseRFQPageLocator.scroll_bar_in_item_table_xpath, position)
    }

}export default RaiseRFQPage