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
            this.scrollToQuantityItem("60%")
            this.enterValueToItemQuantityInItemTable(fileName.itemQuantity)
        })
    }

    addManualItem(fileName){
        cy.fixture(fileName).then((fileName) =>{
            commonAction.clickToElementByXpath(printf(commonPageLocator.button_format_2_xpath, "Add Manual"))
            this.verifyItemDeleteButtonDisplay()
            this.enterValueToItemCodeInItemTable(fileName.itemCode)
            this.enterValueToItemNameInItemTable(fileName.itemName)
            // this.selectValueFromItemCategoryDropdown(fileName.itemCategory)
            this.enterValueToItemDescriptionInItemTable(fileName.itemDescription)
            this.enterValueToItemModelInItemTable(fileName.itemModel)
            this.enterValueToItemSizeInItemTable(fileName.itemSize)
            this.enterValueToItemBrandInItemTable(fileName.itemBrand)
            // this.selectValueFromItemUomDropdown(fileName.uom)
            this.enterValueToItemQuantityInItemTable(fileName.itemQuantity)
        })
    }

    enterValueToItemCodeInItemTable(code){
        commonAction.enterValueToTextboxByXpath(raisePrPageLocator.item_code_xpath, code)
    }

    enterValueToItemNameInItemTable(itemName){
        commonAction.enterValueToTextboxByXpath(raisePrPageLocator.item_name_xpath, itemName)
    }

    enterValueToItemDescriptionInItemTable(description){
        commonAction.enterValueToTextboxByXpath(raisePrPageLocator.item_description_xpath, description)
        commonAction.clickToElementByXpath(printf(commonPageLocator.text_xpath, "Item Description"))
    }

    enterValueToItemModelInItemTable(model){
        commonAction.enterValueToTextboxByXpath(raisePrPageLocator.item_model_xpath, model)
    }

    enterValueToItemBrandInItemTable(brand){
        commonAction.enterValueToTextboxByXpath(raisePrPageLocator.item_brand_xpath, brand)
    }

    enterValueToItemSizeInItemTable(size){
        commonAction.enterValueToTextboxByXpath(raisePrPageLocator.item_size_xpath, size)
    }

    enterValueToItemQuantityInItemTable(quantity){
        commonAction.enterValueToTextboxByXpath(raisePrPageLocator.item_quantity_xpath, quantity)
    }

    enterValueToSearchTextboxInItemTable(keyWord){
        commonAction.enterValueToTextbox('[type="search"]', keyWord)
    }

    // Raise PR
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

    verifyProjectCodeFieldNotDisplay(){
        commonAction.verifyElementNotExist('[name="projectCode"]')
    }

    verifyProjectCodeFieldDisplay(){
        commonAction.verifyElementVisible('[name="projectCode"]')
    }

    verifyItemDeleteButtonDisplay(){
        commonAction.verifyElementByXpathVisible(raisePrPageLocator.item_delete_button_xpath)
    }
///////////
    enterValueToSearchPrTitleTextbox(prTitle){
        commonAction.enterValueToTextbox('[aria-label="Purchase Request Title Filter Input"]', prTitle)
    }

    enterValueToPrTitleTextbox(prTitle){
        commonAction.enterValueToTextbox('[name="prTitle"]', prTitle)
    }

    selectValueFromPrApprovalRouteDropdown(value){
        commonAction.selectValueFromElement('[name="approvalRouteUuid"]', value)
    }

    doubleClickToPrTitleInPrList(prTitle){
        commonAction.doubleClickToElementByXpath(printf(raisePrPageLocator.pr_title_in_pr_list_xpath, prTitle))
    }

    verifyPrStatusInPrListDisplay(prStatus){
        commonAction.verifyElementByXpathExist(printf(raisePrPageLocator.pr_status_in_pr_list_xpath, prStatus))
    }

    verifyPrTitleInPrListDisplay(prTitle){
        commonAction.verifyElementByXpathExist(printf(raisePrPageLocator.pr_title_in_pr_list_xpath, prTitle))
    }

    verifyRaisePrPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(raisePrPageLocator.raise_pr_page_title_xpath)
    }

    verifyPrDetailPageDisplay(){
        commonAction.verifyElementByXpathVisible(raisePrPageLocator.pr_detail_page_title_xpath)
    }

    verifyRequesterNameInPrListDisplay(requesterName){
        commonAction.verifyElementByXpathExist(printf(raisePrPageLocator.requester_in_pr_list_xpath, requesterName))
    }

    verifyProcurementTypeInPrListDisplay(procurementType){
        commonAction.verifyElementByXpathExist(printf(raisePrPageLocator.procurement_type_in_pr_list_xpath, procurementType))
    }

    verifyApprovalRouteInPrListDisplay(approvalName){
        commonAction.verifyElementByXpathExist(printf(raisePrPageLocator.approval_route_in_pr_list_xpath, approvalName))
    }

    verifyValueInPrTitleTextboxExits(prTitle){
        commonAction.verifyValueInTextboxExist('[name="prTitle"]', prTitle)
    }

    scrollToQuantityItem(position){
        commonAction.scrollToPositionElement(raisePrPageLocator.scroll_bar_in_item_table_xpath, position)
    }

}export default RaisePrPage