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

    addCatalogueItem(fileName){
        cy.fixture(fileName).then((fileName) =>{
            commonAction.clickToElementByXpath(printf(commonPageLocator.button_format_2_xpath, "Add Catalogue"))
            this.enterValueToSearchTextboxInItemTable(fileName.itemCode)
            commonAction.checkCheckbox('[ref="eCheckbox"]>div>[type="checkbox"]')
            commonAction.clickToElementByXpath(printf(commonPageLocator.button_format_1_xpath, "Add"))
            this.verifyItemDeleteButtonDisplay()
            this.clickToFilterSizeInItemTable()
            this.clickToFilterBrandInItemTable()
            this.scrollToElement("50%")
            this.clickToFilterCategoryInItemTable()
            this.clickToFilterSupplierTextbox()
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
            this.selectValueFromItemCategoryDropdown(fileName.itemCategory)
            this.clickToFilterSupplierTextbox()
            // this.selectValueFromSupplierDropdown()
            this.clickToFilterUomInItemTable()
            this.selectValueFromItemUomDropdown(fileName.uom)
            this.enterValueToItemQuantityInItemTable(fileName.itemQuantity)
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

    enterValueToSearchTextboxInItemTable(keyWord){
        commonAction.enterValueToTextbox('[type="search"]', keyWord)
    }

    enterValueToPprTitleTextbox(pprTitle){
        commonAction.enterValueToTextbox('[name="prTitle"]', pprTitle)
    }

    enterValueToDeliveryDateTextbox(date){
        commonAction.enterValueToTextbox('[name="deliveryDate"]', date)
        commonAction.clickToElementByXpath(printf(commonPageLocator.label_xpath, "Delivery Date"))
    }

    enterValueToNoteTextbox(note){
        commonAction.enterValueToTextbox('[name="note"]', note)
    }

    enterValueToSearchPrTitleTextbox(fileName, number){
        cy.fixture(fileName).then((fileName) =>{
            commonAction.enterValueToTextbox('[aria-label="Purchase Request Title Filter Input"]', fileName.prTitle + number)
        })
    }

    enterValueToPrTitleTextbox(prTitle){
        commonAction.enterValueToTextbox('[name="prTitle"]', prTitle)
    }

    selectValueFromItemCategoryDropdown(category){
        commonAction.clickToElementByXpath(raisePrPageLocator.item_category_xpath)
        commonAction.selectOptionFromDropdownByXpath(raisePrPageLocator.item_category_xpath, printf(commonPageLocator.text_xpath, category))
        commonAction.clickToElementByXpath(printf(commonPageLocator.text_xpath, "Category"))
    }

    selectValueFromItemUomDropdown(uom){
        commonAction.selectOptionFromDropdownByXpath(raisePrPageLocator.item_uom_code_xpath, printf(commonPageLocator.text_xpath, uom))
        commonAction.clickToElementByXpath(printf(commonPageLocator.text_xpath, "UOM"))
    }

    selectValueFromProcurementTypeDropdown(value){
        commonAction.selectValueFromElement('[name="procurementType"]', value)
    }

    selectValueFromApprovalRouteDropdown(value){
        commonAction.selectValueFromElement('[name="approvalRouteUuid"]', value)
    }

    selectValueFromProjectCodeDropdown(value){
        commonAction.selectValueFromElement('[name="projectCode"]', value)
    }

    selectValueFromCurrencyCodeDropdown(value){
        commonAction.selectValueFromElement('[name="currencyCode"]', value)
    }

    selectValueFromRequisitionTypeDropdown(value){
        commonAction.selectValueFromElement('[name="requisitionType"]', value)
    }

    selectValueFromNatureRequisitionDropdown(value){
        commonAction.selectValueFromElement('[name="project"]', value)
    }

    selectValueToDeliveryAddressDropdown(address){
        commonAction.selectValueFromElement('[name="deliveryAddress"]', address)
    }

    selectValueFromPrApprovalRouteDropdown(value){
        commonAction.selectValueFromElement('[name="approvalRouteUuid"]', value)
    }

    doubleClickToPrTitleInPrList(fileName, numberPrTitle){
        cy.fixture(fileName).then((fileName) =>{
            commonAction.doubleClickToElementByXpath(printf(raisePrPageLocator.pr_title_in_pr_list_xpath, fileName.prTitle + numberPrTitle))
        })
    }

    clickToFilterSizeInItemTable(){
        commonAction.clickToElement('[aria-label="Size Filter Input"]')
    }

    clickToFilterBrandInItemTable(){
        commonAction.clickToElement('[aria-label="Brand Filter Input"]')
    }

    clickToFilterCategoryInItemTable(){
        commonAction.clickToElement('[aria-label="Category Filter Input"]')
    }

    clickToFilterUomInItemTable(){
        commonAction.clickToElement('[aria-label="UOM Filter Input"]')
    }

    clickToFilterSupplierTextbox(){
        commonAction.clickToElement('[aria-label="Supplier Filter Input"]')
    }

    clickToItemQuantityInItemTable(){
        commonAction.clickToElementByXpath(raisePrPageLocator.item_quantity_xpath)
    }

    clickToItemDeleteButton(){
        commonAction.clickToElementByXpath(raisePrPageLocator.item_delete_button_xpath)
    }

    verifyProjectCodeFieldNotDisplay(){
        commonAction.verifyElementNotExist('[name="projectCode"]')
    }

    verifyProjectCodeFieldDisplay(){
        commonAction.verifyElementVisible('[name="projectCode"]')
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
            commonAction.clickToElement('[aria-label="Approval Route Filter Input"]')
            commonAction.verifyElementByXpathExist(printf(raisePrPageLocator.approval_route_in_pr_list_xpath, fileName.approvalRoute))
        })
    }

    verifyValueInPrTitleTextboxExits(fileName, numberPrTitle){
        cy.fixture(fileName).then((fileName) =>{
            commonAction.verifyValueInTextboxExist('[name="prTitle"]', fileName.prTitle + numberPrTitle)
        })
    }

    scrollToElement(position){
        commonAction.scrollToPositionElement(raisePrPageLocator.scroll_bar_in_item_table_xpath, position)
    }

}export default RaisePrPage