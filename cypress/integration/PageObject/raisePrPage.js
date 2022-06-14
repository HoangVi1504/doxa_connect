import CommonAction from '../commons/common_actions'
import CommonPageLocator from '../PageUI/commonPageUI'
import RaisePrPageLocator from '../PageUI/raisePrPageUI'

var printf = require('printf')
const commonAction = new CommonAction()
const commonPageLocator = new CommonPageLocator()
const raisePrPageLocator = new RaisePrPageLocator()

class RaisePrPage{
    fillDataInRaiseRequisitionTab(fileName){
        cy.fixture(fileName).then((fileName) =>{
            this.selectValueFromRequisitionTypeDropdown(fileName.requisitionType)
            this.selectValueFromNatureRequisitionDropdown(fileName.natureOfRequisition)
            if(fileName.natureOfRequisition == "Non-Project"){
                // this.verifyProjectCodeFieldNotDisplay()
                this.selectValueFromCurrencyCodeDropdown(fileName.currencyCode)
            }else if(fileName.natureOfRequisition == "Project"){
                this.verifyProjectCodeFieldDisplay()
                this.selectValueFromProjectCodeDropdown(fileName.projectCode)
            }
        })   
    }

    fillDataInGeneralInformationTab(fileName, number){
        cy.fixture(fileName).then((fileName) =>{
            this.enterValueToPrTitleTextbox(fileName.prTitle + number)
            this.selectValueFromProcurementTypeDropdown(fileName.procurementType)
            this.selectValueFromApprovalRouteDropdown(fileName.approvalRoute)
        })
    }

    fillDataInRequestTermsTab(fileName){
        cy.fixture(fileName).then((fileName) =>{
            this.selectValueToDeliveryAddressDropdown(fileName.deliveryAddress)
            this.enterValueToDeliveryDateTextbox(commonAction.getDateFormat4(7))
            this.enterValueToNoteTextbox(fileName.note)
        })
    }

    addCatalogueItem(fileName, natureOfRequisition){
        cy.fixture(fileName).then((fileName) =>{
            commonAction.clickToElementByXpath(printf(commonPageLocator.button_format_2_xpath, "Add Catalogue"))
            this.enterValueToSearchTextboxInItemTable(fileName.itemCode)
            commonAction.checkCheckbox('[ref="eCheckbox"]>div>[type="checkbox"]')
            commonAction.clickToElementByXpath(printf(commonPageLocator.button_format_1_xpath, "Add"))
            this.verifyItemDeleteButtonDisplay()
            commonAction.wait(2)
            this.clickToFilterSizeInItemTable()
            this.clickToFilterBrandInItemTable()
            if(natureOfRequisition == "project"){
                this.clickToFilterTradeInItemTable()
            }
            this.clickToFilterCategoryInItemTable()
            this.clickToFilterSupplierInItemTable()
            this.clickToFilterUomInItemTable()
            this.enterValueToItemQuantityInItemTable(fileName.itemQuantity)
        })
    }
    addManualItem(fileName, natureOfRequisition){
        cy.fixture(fileName).then((fileName) =>{
            commonAction.clickToElementByXpath(printf(commonPageLocator.button_format_2_xpath, "Add Manual"))
            this.verifyItemDeleteButtonDisplay()
            this.enterValueToItemCodeInItemTable(fileName.itemCode)
            this.enterValueToItemNameInItemTable(fileName.itemName)
            this.enterValueToItemDescriptionInItemTable(fileName.itemDescription)
            this.enterValueToItemModelInItemTable(fileName.itemModel)
            this.enterValueToItemSizeInItemTable(fileName.itemSize)
            this.enterValueToItemBrandInItemTable(fileName.itemBrand)
            if(natureOfRequisition == "project"){
                this.clickToFilterTradeInItemTable()
            }
            this.clickToFilterCategoryInItemTable()
            this.selectValueFromItemCategoryDropdown(fileName.itemCategory)
            this.clickToFilterSupplierInItemTable()
            this.selectValueFromItemSupplierDropdown(fileName.supplierName)
            this.clickToFilterUomInItemTable()
            this.selectValueFromItemUomDropdown(fileName.uom)
            this.enterValueToItemQuantityInItemTable(fileName.itemQuantity)
            this.selectValueFromItemCurrencyCodeDropdown(fileName.itemCurrency)
            this.clickToFilterUnitPriceInItemTable()
            this.enterValueToItemUnitPriceInItemTable(fileName.itemUnitPrice)
            this.clickToFilterPriceTypeInItemTable()
            if(natureOfRequisition == "project"){
                this.clickToFilterUomForecastInItemTable()
                this.clickToFilterUnitPriceForecastedInItemTable()
            }
            this.clickToFilterTaxCodeInItemTable()
            this.clickToFilterTaxPercentageInItemTable()
            this.clickToFilterInSourceCurrencyInItemTable()
            this.enterValueToExchangeRateInItemTable(fileName.exchangeRate)
        })
    }

    enterValueToItemCodeInItemTable(code){
        commonAction.enterValueToTextboxByXpath(raisePrPageLocator.item_code_xpath, code)
    }

    enterValueToItemNameInItemTable(itemName){
        commonAction.clickToElementByXpath(raisePrPageLocator.item_name_xpath)
        commonAction.enterValueToTextboxByXpath(raisePrPageLocator.item_name_xpath, itemName)
    }

    enterValueToItemDescriptionInItemTable(description){
        commonAction.clickToElementByXpath(raisePrPageLocator.item_description_xpath)
        commonAction.enterValueToTextboxByXpath(raisePrPageLocator.item_description_xpath, description)
        commonAction.clickToElementByXpath(printf(commonPageLocator.text_xpath, "Item Description"))
    }

    enterValueToItemModelInItemTable(model){
        commonAction.clickToElementByXpath(raisePrPageLocator.item_model_xpath)
        commonAction.enterValueToTextboxByXpath(raisePrPageLocator.item_model_xpath, model)
    }

    enterValueToItemBrandInItemTable(brand){
        commonAction.clickToElementByXpath(raisePrPageLocator.item_brand_xpath)
        commonAction.enterValueToTextboxByXpath(raisePrPageLocator.item_brand_xpath, brand)
    }

    enterValueToItemSizeInItemTable(size){
        commonAction.clickToElementByXpath(raisePrPageLocator.item_size_xpath)
        commonAction.enterValueToTextboxByXpath(raisePrPageLocator.item_size_xpath, size)
    }

    enterValueToItemQuantityInItemTable(quantity){
        commonAction.clickToElementByXpath(raisePrPageLocator.item_quantity_xpath)
        commonAction.enterValueToTextboxByXpath(raisePrPageLocator.item_quantity_xpath, quantity)
        commonAction.clickToElementByXpath(printf(commonPageLocator.text_xpath, "Quantity"))
    }

    enterValueToItemUnitPriceInItemTable(unitPrice){
        commonAction.clickToElementByXpath(raisePrPageLocator.item_unit_price_xpath)
        commonAction.enterValueToTextboxByXpath(raisePrPageLocator.item_unit_price_xpath, unitPrice)
    }

    enterValueToExchangeRateInItemTable(exchangeRate){
        commonAction.clickToElementByXpath(raisePrPageLocator.item_exchange_rate_xpath)
        commonAction.enterValueToTextboxByXpath(raisePrPageLocator.item_exchange_rate_xpath, exchangeRate)
    }

    enterValueToSearchTextboxInItemTable(keyWord){
        commonAction.enterValueToTextbox(raisePrPageLocator.search_catalogue_txb_css, keyWord)
    }

    enterValueToPrTitleTextbox(prTitle){
        commonAction.enterValueToTextbox(raisePrPageLocator.pr_title_txb_css, prTitle)
    }

    enterValueToDeliveryDateTextbox(date){
        commonAction.enterValueToTextbox(raisePrPageLocator.delivery_date_txb_css, date)
        commonAction.clickToElementByXpath(printf(commonPageLocator.label_xpath, "Delivery Date"))
    }

    enterValueToNoteTextbox(note){
        commonAction.enterValueToTextbox(raisePrPageLocator.note_txb_css, note)
    }

    enterValueToSearchPrTitleTextbox(prTitle){
        commonAction.enterValueToTextbox(raisePrPageLocator.filter_pr_txb_css, prTitle)
    }

    enterValueToSendBackReasonTextbox(reason){
        commonAction.enterValueToTextbox(raisePrPageLocator.send_back_reason_txb_css, reason)
    }

    selectValueFromItemSupplierDropdown(supplierName){
        commonAction.selectOptionFromDropdownByXpath(raisePrPageLocator.item_supplier_xpath, printf(raisePrPageLocator.option_item_from_dropdown_xpath, supplierName))
    }

    selectValueFromItemCurrencyCodeDropdown(currencyCode){
        commonAction.selectOptionFromDropdownByXpath(raisePrPageLocator.item_currency_xpath, printf(raisePrPageLocator.option_item_from_dropdown_xpath, currencyCode))
        commonAction.clickToElementByXpath(printf(commonPageLocator.text_xpath, "Unit Price"))
    }

    selectValueFromItemCategoryDropdown(category){
        // commonAction.clickToElementByXpath(raisePrPageLocator.item_category_xpath)
        commonAction.selectOptionFromDropdownByXpath(raisePrPageLocator.item_category_xpath, printf(raisePrPageLocator.option_item_from_dropdown_xpath, category))
        commonAction.clickToElementByXpath(printf(commonPageLocator.text_xpath, "Category"))
    }

    selectValueFromItemUomDropdown(uom){
        commonAction.wait(1)
        commonAction.selectOptionFromDropdownByXpath(raisePrPageLocator.item_uom_code_xpath, printf(raisePrPageLocator.option_item_from_dropdown_xpath, uom))
        commonAction.clickToElementByXpath(printf(commonPageLocator.text_xpath, "UOM"))
    }

    selectValueFromProcurementTypeDropdown(value){
        commonAction.selectValueFromElement(raisePrPageLocator.procurement_type_dropdown_css, value)
    }

    selectValueFromApprovalRouteDropdown(value){
        commonAction.selectValueFromElement(raisePrPageLocator.approval_route_dropdown_css, value)
    }

    selectValueFromProjectCodeDropdown(value){
        commonAction.selectValueFromElement(raisePrPageLocator.project_code_dropdown_css, value)
    }

    selectValueFromCurrencyCodeDropdown(value){
        commonAction.selectValueFromElement(raisePrPageLocator.currency_code_dropdown_css, value)
    }

    selectValueFromRequisitionTypeDropdown(value){
        commonAction.selectValueFromElement(raisePrPageLocator.requisition_type_dropdown_css, value)
    }

    selectValueFromNatureRequisitionDropdown(value){
        commonAction.selectValueFromElement(raisePrPageLocator.nature_requisition_dropdown_css, value)
    }

    selectValueToDeliveryAddressDropdown(address){
        commonAction.selectValueFromElement(raisePrPageLocator.delivery_address_dropdown_css, address)
    }

    doubleClickToPrTitleInPrList(prTitle){
        commonAction.doubleClickToElementByXpath(printf(raisePrPageLocator.pr_title_in_pr_list_xpath, prTitle))
    }

    clickToRejectPrButton(){
        commonAction.clickToElementByXpath(raisePrPageLocator.reject_pr_button_xpath)
    }

    clickToSendBackPrButton(){
        commonAction.clickToElementByXpath(raisePrPageLocator.send_back_button_xpath)
    }

    clickToPrTitleTextbox(){
        commonAction.clickToElement(raisePrPageLocator.pr_title_txb_css)
    }

    clickToFilterSizeInItemTable(){
        commonAction.clickToElement(raisePrPageLocator.filter_size_in_table_css)
    }

    clickToFilterBrandInItemTable(){
        commonAction.clickToElement(raisePrPageLocator.filter_branch_in_table_css)
    }

    clickToFilterTradeInItemTable(){
        commonAction.clickToElement(raisePrPageLocator.filter_trade_in_table_css)
    }

    clickToFilterCategoryInItemTable(){
        commonAction.clickToElement(raisePrPageLocator.filter_category_in_table_css)
    }

    clickToFilterUomInItemTable(){
        commonAction.clickToElement(raisePrPageLocator.filter_uom_in_table_css)
    }

    clickToFilterSupplierInItemTable(){
        commonAction.clickToElement(raisePrPageLocator.filter_supplier_in_table_css)
    }

    clickToFilterUnitPriceInItemTable(){
        commonAction.clickToElement(raisePrPageLocator.filter_unit_price_in_table_css)
    }

    clickToFilterPriceTypeInItemTable(){
        commonAction.clickToElement(raisePrPageLocator.filter_price_type_in_table_css)
    }

    clickToFilterUomForecastInItemTable(){
        commonAction.clickToElement(raisePrPageLocator.filter_uom_forecasted_in_table_css)
    }

    clickToFilterUnitPriceForecastedInItemTable(){
        commonAction.clickToElement(raisePrPageLocator.filter_unit_price_forecasted_in_table_css)
    }

    clickToFilterTaxCodeInItemTable(){
        commonAction.clickToElement(raisePrPageLocator.filter_tax_code_in_table_css)
    }

    clickToFilterTaxPercentageInItemTable(){
        commonAction.clickToElement(raisePrPageLocator.filter_tax_percentage_in_table_css)
    }

    clickToFilterInSourceCurrencyInItemTable(){
        commonAction.clickToElement(raisePrPageLocator.filter_source_currency_code_in_table_css)
    }

    clickToItemDeleteButton(){
        commonAction.clickToElementByXpath(raisePrPageLocator.item_delete_button_xpath)
    }

    verifyNotificationPrDisplay(notification){
        commonAction.verifyElementByXpathVisible(printf(raisePrPageLocator.notification_pr_xpath, notification))
    }

    verifyProjectCodeFieldNotDisplay(){
        commonAction.verifyElementNotExist(raisePrPageLocator.project_code_dropdown_css)
    }

    verifyProjectCodeFieldDisplay(){
        commonAction.verifyElementVisible(raisePrPageLocator.project_code_dropdown_css)
    }

    verifyItemDeleteButtonDisplay(){
        commonAction.verifyElementByXpathVisible(raisePrPageLocator.item_delete_button_xpath)
    }
    
    verifyPrStatusInPrListDisplay(prStatus){
        commonAction.verifyElementByXpathExist(printf(raisePrPageLocator.pr_status_in_pr_list_xpath, prStatus))
    }

    verifyPrTitleInPrListDisplay(fileName, number){
        cy.fixture(fileName).then((fileName) =>{
            commonAction.verifyElementByXpathExist(printf(raisePrPageLocator.pr_title_in_pr_list_xpath, fileName.prTitle + number))
        })
    }

    verifyRaisePrPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(raisePrPageLocator.raise_pr_page_title_xpath)
    }

    verifyPrDetailPageDisplay(){
        commonAction.verifyElementByXpathVisible(raisePrPageLocator.pr_detail_page_title_xpath)
    }

    verifyRequesterNameInPrListDisplay(fileName){
        cy.fixture(fileName).then((fileName) =>{
            commonAction.verifyElementByXpathExist(printf(raisePrPageLocator.requester_in_pr_list_xpath, fileName.requesterName))
        })
    }

    verifyProcurementTypeInPrListDisplay(fileName){
        cy.fixture(fileName).then((fileName) =>{
            commonAction.verifyElementByXpathExist(printf(raisePrPageLocator.procurement_type_in_pr_list_xpath, fileName.procurementTypePRList))
        })
    }

    verifyApprovalRouteInPrListDisplay(fileName){
        cy.fixture(fileName).then((fileName) =>{
            commonAction.clickToElement(raisePrPageLocator.filter_approval_route_in_table_css)
            commonAction.verifyElementByXpathExist(printf(raisePrPageLocator.approval_route_in_pr_list_xpath, fileName.approvalRoute))
        })
    }

    verifyValueInPrTitleTextboxExits(fileName, numberPrTitle){
        cy.fixture(fileName).then((fileName) =>{
            commonAction.verifyValueInTextboxExist(raisePrPageLocator.pr_title_txb_css, fileName.prTitle + numberPrTitle)
        })
    }

    verifyValidationTextRequisitionTypeDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(raisePrPageLocator.validation_text_requisition_type_xpath, validation))
    }

    verifyValidationTextPrTitleDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(raisePrPageLocator.validation_text_pr_title_xpath, validation))
    }

    verifyValidationTextProcurementTypeDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(raisePrPageLocator.validation_text_procurement_type_xpath, validation))
    }

    verifyValidationTextApprovalRouteDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(raisePrPageLocator.validation_text_approval_route_xpath, validation))
    }

    verifyValidationTextDeliveryAddressDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(raisePrPageLocator.validation_text_delivery_address_xpath, validation))
    }

    verifyValidationTextDeliveryDateDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(raisePrPageLocator.validation_text_delivery_date_xpath, validation))
    }

    scrollToElement(position){
        commonAction.scrollToPositionElement(raisePrPageLocator.scroll_bar_in_item_table_xpath, position)
    }

}export default RaisePrPage