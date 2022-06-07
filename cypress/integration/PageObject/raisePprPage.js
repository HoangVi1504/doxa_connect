import CommonAction from '../commons/common_actions'
import CommonPageLocator from '../PageUI/commonPageUI'
import RaisePprPageLocator from '../PageUI/raisePprPageUI'

var printf = require('printf')
const commonAction = new CommonAction()
const commonPageLocator = new CommonPageLocator()
const raisePprPageLocator = new RaisePprPageLocator()

class RaisePprPage{

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
        })   
    }

    fillDataInGeneralInformationTab(fileName, number){
        cy.fixture(fileName).then((fileName) =>{
            this.enterValueToPprTitleTextbox(fileName.pprTitle + number)
            this.selectValueFromProcurementTypeDropdown(fileName.procurementType)
            this.selectValueFromApprovalRouteDropdown(fileName.approvalRoute)
        })
    }

    fillDataInRequestTermsTab(fileName){
        cy.fixture(fileName).then((fileName) =>{
            this.selectValueToDeliveryAddressDropdown(fileName.deliveryAddress)
            this.enterValueToDeliveryDateTextbox(commonAction.getDateFormat4(7))
        })
        this.enterValueToNoteTextbox(fileName)
    }

    addCatalogueItem(fileName){
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
            this.selectValueFromItemCategoryDropdown(fileName.itemCategory)
            this.enterValueToItemDescriptionInItemTable(fileName.itemDescription)
            this.enterValueToItemModelInItemTable(fileName.itemModel)
            this.enterValueToItemSizeInItemTable(fileName.itemSize)
            this.enterValueToItemBrandInItemTable(fileName.itemBrand)
            this.selectValueFromItemUomDropdown(fileName.uom)
            this.enterValueToItemQuantityInItemTable(fileName.itemQuantity)
        })
    }

    // Adding of Items
    enterValueToItemCodeInItemTable(code){
        commonAction.enterValueToTextboxByXpath(raisePprPageLocator.item_code_xpath, code)
    }

    enterValueToItemNameInItemTable(itemName){
        commonAction.enterValueToTextboxByXpath(raisePprPageLocator.item_name_xpath, itemName)
    }

    enterValueToItemDescriptionInItemTable(description){
        commonAction.enterValueToTextboxByXpath(raisePprPageLocator.item_description_xpath, description)
        commonAction.clickToElementByXpath(printf(commonPageLocator.text_xpath, "Item Description"))
    }

    enterValueToItemModelInItemTable(model){
        commonAction.enterValueToTextboxByXpath(raisePprPageLocator.item_model_xpath, model)
    }

    enterValueToItemBrandInItemTable(brand){
        commonAction.enterValueToTextboxByXpath(raisePprPageLocator.item_brand_xpath, brand)
    }

    enterValueToItemSizeInItemTable(size){
        commonAction.enterValueToTextboxByXpath(raisePprPageLocator.item_size_xpath, size)
    }

    enterValueToItemQuantityInItemTable(quantity){
        commonAction.enterValueToTextboxByXpath(raisePprPageLocator.item_quantity_xpath, quantity)
    }

    enterValueToCurrencyInItemTable(currency){
        commonAction.enterValueToTextboxByXpath(raisePprPageLocator.item_currency_xpath, currency)
    }

    enterValueToItemCategoryInItemTable(category){
        commonAction.enterValueToTextbox('#react-select-4-input', category)
    }

    enterValueToUomInItemTable(uom){
        commonAction.enterValueToTextbox('#react-select-9-input', uom)
    }

    enterValueToSearchTextboxInItemTable(keyWord){
        commonAction.enterValueToTextbox('[type="search"]', keyWord)
    }

    // Raise PPR
    enterValueToSearchPPRTitleTextbox(fileName, number){
        cy.fixture(fileName).then((fileName) =>{
            commonAction.enterValueToTextbox('[aria-label="Purchase Pre-requisition Title Filter Input"]', fileName.pprTitle + number)
        })
    }

    enterValueToPprTitleTextbox(pprTitle){
        commonAction.enterValueToTextbox('[name="pprTitle"]', pprTitle)
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

    enterValueToReasonCancelTextbox(reason){
        commonAction.enterValueToTextbox('[name="reasonCancel"]', reason)
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

    selectValueFromProcurementTypeDropdown(value){
        commonAction.selectValueFromElement('[name="procurementType"]', value)
    }

    selectValueFromApprovalRouteDropdown(value){
        commonAction.selectValueFromElement('[name="approvalRoute"]', value)
    }

    selectValueToDeliveryAddressDropdown(address){
        commonAction.selectValueFromElement('[name="deliveryAddress"]', address)
    }

    selectValueFromItemCategoryDropdown(category){
        commonAction.selectOptionFromDropdownByXpath(raisePprPageLocator.item_category_xpath, printf(commonPageLocator.text_xpath, category))
    }

    selectValueFromItemUomDropdown(uom){
        commonAction.selectOptionFromDropdownByXpath(raisePprPageLocator.item_uom_code_xpath, printf(commonPageLocator.text_xpath, uom))
    }

    doubleClickToPprTitleInPprList(fileName, number){
        cy.fixture(fileName).then((fileName) =>{
            commonAction.doubleClickToElementByXpath(printf(raisePprPageLocator.ppr_title_in_ppr_list_xpath, fileName.pprTitle + number))
        })
    }

    clickToFilterBrandInItemTable(){
        commonAction.clickToElement('[aria-label="Brand Filter Input"]')
    }

    clickToFilterUomInItemTable(){
        commonAction.clickToElement('[aria-label="UOM Filter Input"]')
    }

    clickToItemQuantityInItemTable(){
        commonAction.clickToElementByXpath(raisePprPageLocator.item_quantity_xpath)
    }

    clickToItemDeleteButton(){
        commonAction.clickToElementByXpath(raisePprPageLocator.item_delete_button_xpath)
    }

    clickToPprTitleTextbox(){
        commonAction.clickToElement('[name="pprTitle"]')
    }

    clickToValueFromItemCategory(value){
        commonAction.clickToElementByXpath(raisePprPageLocator.item_category_xpath)
        commonAction.clickToElementByXpath('(//div[@class=" css-tlfecz-indicatorContainer"])[2]')
        commonAction.clickToElementWithCoordinatesByXpath(raisePprPageLocator.item_category_xpath)
    }

    verifyProjectCodeFieldNotDisplay(){
        commonAction.verifyElementNotExist('[name="projectCode"]')
    }

    verifyProjectCodeFieldDisplay(){
        commonAction.verifyElementVisible('[name="projectCode"]')
    }

    verifyValueInPprTitleTextboxExits(fileName, number){
        cy.fixture(fileName).then((fileName) =>{
            commonAction.verifyValueInTextboxExist('[name="pprTitle"]', fileName.pprTitle + number)
        })
    }

    verifyValueInProjectCodeExits(fileName, status){
        cy.fixture(fileName).then((fileName) =>{
            switch (status) {
                case "PENDING SUBMISSION":
                    commonAction.verifyValueInDropdownExits('[name="projectCode"]', fileName.projectCode)
                    break;
    
                case "PENDING APPROVAL":
                    commonAction.verifyValueInTextboxExist('[name="projectCode"]', fileName.projectCode)
                    break;
            
                default:
                    break;
            } 
        })
    }

    verifyRaisePprPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(raisePprPageLocator.raise_ppr_page_title_xpath)
    }

    verifyPprDetailPageDisplay(){
        commonAction.verifyElementByXpathVisible(raisePprPageLocator.ppr_detail_page_title_xpath)
    }

    verifyItemDeleteButtonDisplay(){
        commonAction.verifyElementByXpathVisible(raisePprPageLocator.item_delete_button_xpath)
    }

    verifyPprStatusInPprListDisplay(pprStatus){
        commonAction.verifyElementByXpathVisible(printf(raisePprPageLocator.ppr_status_in_ppr_list_xpath, pprStatus))
    }

    verifyRequesterNameInPprListDisplay(fileName){
        cy.fixture(fileName).then((fileName) =>{
            commonAction.verifyElementByXpathVisible(printf(raisePprPageLocator.requester_in_ppr_list_xpath, fileName.requesterName))
        })
    }

    verifyProcurementTypeInPprListDisplay(fileName){
        cy.fixture(fileName).then((fileName) =>{
            commonAction.verifyElementByXpathVisible(printf(raisePprPageLocator.procurement_type_in_ppr_list_xpath, fileName.procurementTypePPRList))
        })
    }

    verifyApprovalRouteInPprListDisplay(fileName){
        cy.fixture(fileName).then((fileName) =>{
            commonAction.verifyElementByXpathVisible(printf(raisePprPageLocator.approval_route_in_ppr_list_xpath, fileName.approvalRoute))
        })
    }

    verifyValidationTextRequisitionTypeDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(raisePprPageLocator.validation_text_requisition_type_xpath, validation))
    }

    verifyValidationTextCurrencyCodeDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(raisePprPageLocator.validation_text_currency_code_xpath, validation))
    }

    verifyValidationTextPprTitleDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(raisePprPageLocator.validation_text_ppr_title_xpath, validation))
    }

    verifyValidationTextProcurementTypeDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(raisePprPageLocator.validation_text_procurement_type_xpath, validation))
    }

    verifyValidationTextApprovalRouteDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(raisePprPageLocator.validation_text_approval_route_xpath, validation))
    }

    verifyValidationTextDeliveryAddressDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(raisePprPageLocator.validation_text_delivery_address_xpath, validation))
    }

    verifyValidationTextDeliveryDateDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(raisePprPageLocator.validation_text_delivery_date_xpath, validation))
    }

    scrollToQuantityItem(position){
        commonAction.scrollToPositionElement(raisePprPageLocator.scroll_bar_in_item_table_xpath, position)
    }

}export default RaisePprPage