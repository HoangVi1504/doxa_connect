import CommonAction from '../commons/common_actions'
import UrlPageLocator from '../PageUI/urlPageUI'
import CommonPageLocator from '../PageUI/commonPageUI'
import RaisePprPageLocator from '../PageUI/raisePprPageUI'

var printf = require('printf')
var dataBuyer = require('../../../dataBuyer.json');

const commonAction = new CommonAction()
const urlPageLocator = new UrlPageLocator()
const commonPageLocator = new CommonPageLocator()
const raisePprPageLocator = new RaisePprPageLocator()

class RaisePprPage{
    constructor() {
        this.env = 'stag'
    }

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
            commonAction.checkCheckboxByXpath(printf(raisePprPageLocator.item_catalogue_checkbox_xpath, fileName.itemCode))
            commonAction.clickToElementByXpath(printf(commonPageLocator.button_format_1_xpath, "Add"))
            this.verifyItemDeleteButtonDisplay()
            this.clickToFilterBrandInItemTable()
            this.clickToFilterUomInItemTable()
            this.clickToFilterQuantityInItemTable()
            commonAction.wait(1)
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
        commonAction.doubleClickToElementByXpath(raisePprPageLocator.item_code_xpath)
        commonAction.wait(1)
        commonAction.enterValueToTextboxByXpath(raisePprPageLocator.item_code_txb_in_item_list_xpath, code)
    }

    enterValueToItemNameInItemTable(itemName){
        commonAction.clickToElementByXpath(raisePprPageLocator.item_name_xpath)
        commonAction.enterValueToTextboxByXpath(raisePprPageLocator.item_name_txb_in_item_list_xpath, itemName)
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
        this.scrollToElementInItemTable("100%")
        commonAction.doubleClickToElementByXpath(raisePprPageLocator.item_quantity_xpath)
        commonAction.enterValueToTextboxByXpath(raisePprPageLocator.item_quantity_txb_in_item_list_xpath, quantity)
    }

    enterValueToCurrencyInItemTable(currency){
        commonAction.enterValueToTextboxByXpath(raisePprPageLocator.item_currency_xpath, currency)
    }

    enterValueToSearchTextboxInItemTable(keyWord){
        commonAction.enterValueToTextbox(raisePprPageLocator.search_catalogue_item_txb_css, keyWord)
    }

    // Raise PPR
    enterValueToSearchPprTitleTextbox(pprTitle){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.ppr_list_url, this.env, buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
            cy.request({
                method: 'GET',
                url: printf(urlPageLocator.ppr_list_url, this.env, buyerCompanyUuid),
                headers: {
                    authorization: "Bearer " + token,
                }
            }).then((response) => {
                expect(response.body).has.property("status", "OK")
                commonAction.enterValueToTextbox(raisePprPageLocator.filter_ppr_title_in_list_css, pprTitle)
            })
        })
    }

    enterValueToFilterPprNumberInList(pprNumber, listName){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        let urlRequest
        let method
        switch (listName) {
            case "PPR":
                urlRequest = printf(urlPageLocator.ppr_list_url, this.env, buyerCompanyUuid)
                method = 'GET'
                break;

            case "PR":
                urlRequest = printf(urlPageLocator.pr_list_url, this.env, buyerCompanyUuid)
                method = 'GET'
                break;

            case "PO":
                urlRequest = printf(urlPageLocator.po_list_url, this.env, buyerCompanyUuid, "buyer")
                method = 'GET'
                break;

            case "PPRs To Be Converted":
                urlRequest = printf(urlPageLocator.ppr_to_be_converted_list_url, this.env, buyerCompanyUuid)
                method = 'POST'
                break;
        
            default:
                break;
        }
        cy.request({
            method: method,
            url: urlRequest,
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
            cy.request({
                method: method,
                url: urlRequest,
                headers: {
                    authorization: "Bearer " + token,
                }
            }).then((response) => {
                expect(response.body).has.property("status", "OK")
                commonAction.enterValueToTextbox(raisePprPageLocator.filter_ppr_number_in_list_css, pprNumber)
            }) 
        })
    }

    enterValueToPprTitleTextbox(pprTitle){
        commonAction.enterValueToTextbox(raisePprPageLocator.ppr_title_txb_css, pprTitle)
    }

    enterValueToDeliveryDateTextbox(date){
        commonAction.enterValueToTextbox(raisePprPageLocator.delivery_date_txb_css, date)
        commonAction.clickToElementByXpath(printf(commonPageLocator.label_xpath, "Delivery Date"))
    }

    enterValueToNoteTextbox(fileName){
        cy.fixture(fileName).then((fileName) =>{
            commonAction.enterValueToTextbox(raisePprPageLocator.note_txb_css, fileName.note)
        })
    }

    enterValueToReasonCancelTextbox(reason){
        commonAction.enterValueToTextbox(raisePprPageLocator.reason_cancel_txb_css, reason)
    }

    enterValueToReasonSendBackTextbox(reason){
        commonAction.enterValueToTextbox(raisePprPageLocator.reason_send_back_txb_css, reason)
    }

    enterValueToReasonRejectTextbox(reason){
        commonAction.enterValueToTextbox(raisePprPageLocator.reason_reject_txb_css, reason)
    }

    selectValueFromDeliveryContactPersonDropdown(){
        commonAction.clickToElementByXpath(raisePprPageLocator.delivery_contact_person_dropdown_xpath)
        commonAction.clickToElement("#react-select-4-option-0")
    }

    selectValueFromRequisitionTypeDropdown(value){
        commonAction.selectValueFromElement(raisePprPageLocator.requisition_type_dropdown_css, value)
    }

    selectValueFromNatureRequisitionDropdown(value){
        commonAction.selectValueFromElement(raisePprPageLocator.nature_requisition_dropdown_css, value)
    }

    selectValueFromProjectCodeDropdown(value){
        commonAction.selectValueFromElement(raisePprPageLocator.project_code_dropdown_css, value)
    }

    selectValueFromCurrencyCodeDropdown(value){
        commonAction.selectValueFromElement(raisePprPageLocator.currency_code_dropdown_css, value)
    }

    selectValueFromProcurementTypeDropdown(value){
        commonAction.selectValueFromElement(raisePprPageLocator.procurement_type_dropdown_css, value)
    }

    selectValueFromApprovalRouteDropdown(value){
        commonAction.selectValueFromElement(raisePprPageLocator.approval_route_dropdown_css, value)
    }

    selectValueToDeliveryAddressDropdown(address){
        commonAction.selectValueFromElement(raisePprPageLocator.delivery_address_dropdown_css, address)
    }

    selectValueFromItemCategoryDropdown(category){
        commonAction.selectOptionFromDropdownByXpath(raisePprPageLocator.item_category_xpath, printf(commonPageLocator.text_xpath, category))
    }

    selectValueFromItemUomDropdown(uom){
        commonAction.selectOptionFromDropdownByXpath(raisePprPageLocator.item_uom_code_xpath, printf(commonPageLocator.text_xpath, uom))
    }

    doubleClickToPprTitleInPprList(pprTitle){
        commonAction.doubleClickToElementByXpath(printf(raisePprPageLocator.ppr_title_in_ppr_list_xpath, pprTitle))
    }

    doubleClickToPprNumberInPprList(pprNumber){
        commonAction.doubleClickToElementByXpath(printf(raisePprPageLocator.ppr_number_in_ppr_list_xpath, pprNumber))
    }

    clickToFilterBrandInItemTable(){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.item_catalogue_ppr_url, this.env, buyerCompanyUuid),            
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response)=>{
            expect(response.body).has.property("status", "OK")
            commonAction.clickToElement(raisePprPageLocator.filter_brand_in_item_table_css)
        })
    }

    clickToFilterUomInItemTable(){
        commonAction.clickToElement(raisePprPageLocator.filter_uom_in_item_table_css)
    }

    clickToFilterQuantityInItemTable(){
        commonAction.clickToElement(raisePprPageLocator.filter_quantity_in_item_table_css)
    }

    clickToItemQuantityInItemTable(){
        commonAction.clickToElementByXpath(raisePprPageLocator.item_quantity_xpath)
    }

    clickToItemDeleteButton(){
        commonAction.clickToElementByXpath(raisePprPageLocator.item_delete_button_xpath)
    }

    clickToPprTitleTextbox(){
        commonAction.clickToElement(raisePprPageLocator.ppr_title_txb_css)
    }

    verifyProjectCodeFieldNotDisplay(){
        commonAction.verifyElementNotExist(raisePprPageLocator.project_code_dropdown_css)
    }

    verifyProjectCodeFieldDisplay(){
        commonAction.verifyElementVisible(raisePprPageLocator.project_code_dropdown_css)
    }

    verifyValueInPprTitleTextboxExist(pprTitle){
        commonAction.verifyValueInTextboxExist(raisePprPageLocator.ppr_title_txb_css, pprTitle)
    }

    verifyValueInEmailAddressTextboxExist(email){
        commonAction.verifyValueInTextboxExist(raisePprPageLocator.email_address_txb_css, email)
    }

    verifyValueInContactNumberTextboxExist(contactNumber){
        commonAction.verifyValueInTextboxExist(raisePprPageLocator.contact_number_txb_css, contactNumber)
    }

    verifyApprovalRouteDropdownIsDisable(){
        commonAction.verifyElementDisable(raisePprPageLocator.approval_route_dropdown_css)
    }

    verifyValueInProjectCodeExist(fileName, status){
        cy.fixture(fileName).then((fileName) =>{
            switch (status) {
                case "PENDING SUBMISSION":
                    commonAction.verifyValueInDropdownExits(raisePprPageLocator.project_code_dropdown_css, fileName.projectCode)
                    break;
    
                case "PENDING APPROVAL":
                    commonAction.verifyValueInTextboxExist(raisePprPageLocator.project_code_dropdown_css, fileName.projectCode)
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

    verifyPprListPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(raisePprPageLocator.ppr_list_page_title_xpath)
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
        commonAction.scrollToPositionElement(raisePprPageLocator.scroll_bar_in_ppr_list_xpath, "100%")
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

    verifyValidationTextDeliveryContactPersonDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(raisePprPageLocator.validation_delivery_contact_person_xpath, validation))
    }

    verifyValidationTextContactNumberDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(raisePprPageLocator.validation_text_contact_number_xpath, validation))
    }

    scrollToElementInItemTable(position){
        commonAction.scrollToPositionElement(raisePprPageLocator.scroll_bar_in_item_table_xpath, position)
    }

}export default RaisePprPage