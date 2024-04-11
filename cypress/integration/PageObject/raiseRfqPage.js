import CommonAction from '../commons/common_actions'
import UrlPageLocator from '../PageUI/urlPageUI'
import CommonPageLocator from '../PageUI/commonPageUI'
import RaiseRFQPageLocator from '../PageUI/raiseRfqPageUI'

var printf = require('printf')
const commonAction = new CommonAction()
const urlPageLocator = new UrlPageLocator()
const commonPageLocator = new CommonPageLocator()
const raiseRFQPageLocator = new RaiseRFQPageLocator()

var dataBuyer = require('../../../dataBuyer.json');
var dataSupplier1 = require('../../../dataSupplier1.json');
class RaiseRFQPage{
    constructor() {
        this.env = 'stag'
    }

    fillDataInRaiseRequisitionTab(fileName){
        cy.fixture(fileName).then((fileName) =>{
            this.selectValueFromRequisitionTypeDropdown(fileName.requisitionType)
            this.selectValueFromNatureRequisitionDropdown(fileName.natureOfRequisition)
            if(fileName.natureOfRequisition == "Non-Project"){
                this.verifyProjectCodeFieldNotDisplay()
                //this.selectValueFromCurrencyCodeDropdown(fileName.currencyCode)
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
        cy.fixture(fileName).then((fileName) =>{
            this.selectValueFromRfqTypeDropdown(fileName.rfqType)
            if(fileName.rfqType == "Contract"){
                this.enterValueToValidityStartDateTextbox(commonAction.getDateFormat4(3))
                this.enterValueToValidityEndDateTextbox(commonAction.getDateFormat4(5))
            }   
            this.selectValueToDeliveryAddressDropdown(fileName.deliveryAddress)
        })
        this.enterValueToDueDateTextbox(commonAction.getDateFormat1(5))
        this.enterValueToDeliveryDateTextbox(commonAction.getDateFormat4(7))
        this.enterValueToNoteTextbox(fileName)
    }

    addCatalogueItem(fileName){
        cy.fixture(fileName).then((fileName) =>{
            commonAction.clickToElementByXpath(printf(commonPageLocator.button_format_2_xpath, "Add Catalogue"))
            this.enterValueToSearchTextboxInItemTable(fileName.itemCode)
            commonAction.checkCheckboxByXpath(printf(raiseRFQPageLocator.item_catalogue_ckb_xpath, fileName.itemCode))
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
            commonAction.checkCheckboxByXpath(printf(raiseRFQPageLocator.item_catalogue_ckb_xpath, fileName.itemCode))
            commonAction.clickToElementByXpath(printf(commonPageLocator.button_format_1_xpath, "Add"))
            this.verifyItemDeleteButtonDisplay()
            this.clickToFilterSizeInItemTable()
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
            commonAction.wait(1)
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

    enterValueToSearchRfqTitleTextbox(rfqTitle) {
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.rfq_list_url, this.env, buyerCompanyUuid, "buyer"),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
            cy.request({
                method: 'GET',
                url: printf(urlPageLocator.rfq_list_url, this.env, buyerCompanyUuid, "buyer"),
                headers: {
                    authorization: "Bearer " + token,
                }
            }).then((response) => {
                expect(response.body).has.property("status", "OK")
                commonAction.clickToElement(raiseRFQPageLocator.filter_rfq_title_css)
                commonAction.enterValueToTextbox(raiseRFQPageLocator.filter_rfq_title_css, rfqTitle)
            })
        })       
    }

    enterValueToFilterRfqNumberInList(roleName, rfqNumber){
        let token = window.localStorage.getItem("token")
        let companyUuid;
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        let supplierCompanyUuid = dataSupplier1.supplierCompanyUuid
        switch (roleName) {
            case "buyer":
                companyUuid = buyerCompanyUuid
                break;

            case "supplier":
                companyUuid = supplierCompanyUuid
                break;

            default:
                break;
        }
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.rfq_list_url, this.env, companyUuid, roleName),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
            cy.request({
                method: 'GET',
                url: printf(urlPageLocator.rfq_list_url, this.env, companyUuid, roleName),
                headers: {
                    authorization: "Bearer " + token,
                }
            }).then((response) => {
                expect(response.body).has.property("status", "OK")
                commonAction.clickToElement(raiseRFQPageLocator.filter_rfq_number_in_list_css)
                commonAction.enterValueToTextbox(raiseRFQPageLocator.filter_rfq_number_in_list_css, rfqNumber)
            })
        })
    }

    enterValueToRfqTitleTextbox(rfqTitle){
        commonAction.enterValueToTextboxAfterClear(raiseRFQPageLocator.rfq_title_txb_css, rfqTitle)
    }

    enterValueToValidityStartDateTextbox(date){
        commonAction.enterValueToTextbox(raiseRFQPageLocator.validity_start_date_txb_css, date)
        commonAction.clickToElementByXpath(printf(commonPageLocator.label_xpath, "Validity Start Date"))
    }

    enterValueToValidityEndDateTextbox(date){
        commonAction.enterValueToTextbox(raiseRFQPageLocator.validity_end_date_txb_css, date)
        commonAction.clickToElementByXpath(printf(commonPageLocator.label_xpath, "Validity End Date"))
    }

    enterValueToDueDateTextbox(date){
        commonAction.enterValueToTextboxAfterClear(raiseRFQPageLocator.due_date_txb_css, date)
        commonAction.clickToElementByXpath(printf(commonPageLocator.label_xpath, "Due Date"))
    }

    enterValueToDeliveryDateTextbox(date){
        commonAction.enterValueToTextbox(raiseRFQPageLocator.delivery_date_txb_css, date)
        commonAction.clickToElementByXpath(printf(commonPageLocator.label_xpath, "Delivery Date"))
    }

    enterValueToNoteTextbox(fileName){
        cy.fixture(fileName).then((fileName) =>{
            commonAction.enterValueToTextbox(raiseRFQPageLocator.note_txb_css, fileName.note)
        }) 
    }

    enterValueToAwardedQuantityTextbox(value) {
        this.scrollToAwardedQuantityItem("75%")
        commonAction.doubleClickToElementByXpath(raiseRFQPageLocator.item_awarded_quantity_txb_xpath)
        commonAction.enterValueToTextboxByXpath(raiseRFQPageLocator.awarded_quantity_txb_xpath, value)
    }

    enterValueToReasonTextbox(reason){
        commonAction.enterValueToTextbox(raiseRFQPageLocator.reason_txb_css, reason)
    }

    enterValueToSearchTextboxInItemTable(keyWord){
        commonAction.enterValueToTextbox(raiseRFQPageLocator.search_item_catalogue_txb_css, keyWord)
    }

    enterValueToItemCodeInItemTable(code){
        commonAction.doubleClickToElementByXpath(raiseRFQPageLocator.item_code_xpath)
        commonAction.enterValueToTextboxByXpath(raiseRFQPageLocator.item_code_txb_xpath, code)
    }

    enterValueToItemNameInItemTable(itemName){
        commonAction.doubleClickToElementByXpath(raiseRFQPageLocator.item_name_xpath)
        commonAction.enterValueToTextboxByXpath(raiseRFQPageLocator.item_name_txb_xpath, itemName)
    }

    enterValueToItemDescriptionInItemTable(description){
        commonAction.doubleClickToElementByXpath(raiseRFQPageLocator.item_description_xpath)
        commonAction.enterValueToTextboxByXpath(raiseRFQPageLocator.item_description_txb_xpath, description)
        commonAction.clickToElementByXpath(printf(commonPageLocator.text_xpath, "Item Name"))
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

    enterValueToItemQuantityInItemTable(quantity) {
        this.scrollToQuantityItem("50%")
        commonAction.enterValueToTextboxByXpath(raiseRFQPageLocator.item_quantity_xpath, quantity)
    }

    enterValueToCurrencyInItemTable(currency){
        commonAction.enterValueToTextboxByXpath(raiseRFQPageLocator.item_currency_xpath, currency)
    }

    enterValueToPriceInItemTable(price){
        commonAction.enterValueToTextboxByXpath(raiseRFQPageLocator.item_unit_price_xpath, price)
    }

    enterValueToUnitPriceInItemTable(price) {
        this.scrollToQuantityItem("55%")
        commonAction.wait(1)
        commonAction.enterValueToTextboxByXpath(raiseRFQPageLocator.item_unit_price_xpath, price)
    }

    enterValueToTaxPercentageInItemTable(per) {
        commonAction.enterValueToTextboxByXpath(raiseRFQPageLocator.item_tax_percentage_xpath, per)
    }

    enterValueToTaxCodeInRequestTerms(taxCode) {
        commonAction.enterValueToTextboxAfterClear(raiseRFQPageLocator.tax_code_txb_css, taxCode)
    }

    enterValueToCommentInNegotiation(comment){
        commonAction.enterValueToTextboxAfterClear(raiseRFQPageLocator.negotiation_comment_txb_css, comment)
    }

    enterValueToCommentInConversations(comment, table){
        commonAction.enterValueToTextboxAfterClearByXpath(printf(raiseRFQPageLocator.conversation_comment_txb_xpath, table), comment)
    }

    uploadFileNegotiation(file) {
        commonAction.setAttributeByXpath(raiseRFQPageLocator.upload_file_negotiation_xpath, "style", "display: block;")
        commonAction.uploadFileByXpath(raiseRFQPageLocator.upload_file_negotiation_xpath, file)
        commonAction.setAttributeByXpath(raiseRFQPageLocator.upload_file_negotiation_xpath, "style", "display: none;")
    }

    uploadFileConversation(file) {
        commonAction.setAttributeByXpath(raiseRFQPageLocator.upload_file_conversation_xpath, "style", "display: block;")
        commonAction.uploadFileByXpath(raiseRFQPageLocator.upload_file_conversation_xpath, file)
        commonAction.setAttributeByXpath(raiseRFQPageLocator.upload_file_conversation_xpath, "style", "display: none;")
    } 

    selectValueFromDeliveryContactPersonDropdown(){
        commonAction.clickToElementByXpath(raiseRFQPageLocator.delivery_contact_person_dropdown_xpath)
        commonAction.clickToElement("#react-select-4-option-4")
    }

    selectValueFromContactPersonDropdown(){
        commonAction.clickToElementByXpath(raiseRFQPageLocator.delivery_contact_person_dropdown_xpath)
        commonAction.clickToElement("#react-select-8-option-4")
    }

    selectValueFromRequisitionTypeDropdown(value){
        commonAction.selectValueFromElement(raiseRFQPageLocator.requisition_type_dropdown_css, value)
    }

    selectValueFromNatureRequisitionDropdown(value){
        commonAction.selectValueFromElement(raiseRFQPageLocator.nature_requisition_dropdown_css, value)
    }

    selectValueFromProjectCodeDropdown(value){
        commonAction.selectValueFromElement(raiseRFQPageLocator.project_code_dropdown_css, value)
    }

    selectValueFromCurrencyCodeDropdown(value){
        commonAction.selectValueFromElement(raiseRFQPageLocator.currency_code_dropdown_css, value)
    }

    selectValueFromApprovalRouteDropdown(value){
        commonAction.selectValueFromElement(raiseRFQPageLocator.approval_route_dropdown_css, value)
    }

    selectValueFromTaxCodeDropdown(value){
        commonAction.selectValueFromElement(raiseRFQPageLocator.tax_code_dropdown_css, value)
    }

    selectValueFromDeliveryAddressDropdown(value){
        commonAction.selectValueFromElement(raiseRFQPageLocator.delivery_address_dropdown_css, value)
    }

    selectValueFromVendorDropdown(value){
        commonAction.selectValueFromElement(raiseRFQPageLocator.vendor_dropdown_css, value)
    }

    selectValueFromProcurementTypeDropdown(value){
        commonAction.selectValueFromElement(raiseRFQPageLocator.procurement_type_dropdown_css, value)
    }

    selectValueFromRfqTypeDropdown(type){
        commonAction.selectValueFromElement(raiseRFQPageLocator.rfq_type_dropdown_css, type)
    }

    selectValueToDeliveryAddressDropdown(deliveryAddress){
        commonAction.selectValueFromElement(raiseRFQPageLocator.delivery_address_dropdown_css, deliveryAddress)
    }

    selectValueFromUom(uom){
        commonAction.selectOptionFromDropdownByXpath(raiseRFQPageLocator.uom_xpath, printf(commonPageLocator.text_xpath, uom))
    }

    doubleClickToRFQTitleInRFQList(rfqTitle){
        commonAction.doubleClickToElementByXpath(printf(raiseRFQPageLocator.rfq_title_in_rfq_list_xpath, rfqTitle))
    }

    doubleClickToRfqNumberInRfqList(rfqNumber){
        commonAction.doubleClickToElementByXpath(printf(raiseRFQPageLocator.rfq_number_in_list_xpath, rfqNumber))
    }

    checkToChooseForRfqProcess(option) {
        commonAction.checkCheckboxByXpath(printf(raiseRFQPageLocator.rfq_process_radio_btn_xpath, option))
    }

    clearValueInDueDateTextbox(){
        commonAction.clearValueInTextbox(raiseRFQPageLocator.due_date_txb_css)
    }

    clearValueInDeliveryDateTextbox(){
        commonAction.clearValueInTextbox(raiseRFQPageLocator.delivery_date_txb_css)
    }

    clickToLinkOnTable(option) {
        commonAction.clickToElementByXpath(printf(raiseRFQPageLocator.option_menu_table_xpath, option))
    }

    clickToNoteTextbox(){
        commonAction.clickToElement(raiseRFQPageLocator.note_txb_css)
    }

    clickToRfqTitleTextbox(){
        commonAction.clickToElement(raiseRFQPageLocator.rfq_title_txb_css)
    }

    clickToOptionButtonInReasonDialogBox(btnName){
        commonAction.clickToElementByXpath(printf(raiseRFQPageLocator.option_btn_in_dialog_box_xpath, btnName))
    }

    clickToFilterSizeInItemTable(){
        commonAction.wait(3)
        commonAction.clickToElement(raiseRFQPageLocator.filter_size_in_item_table_css)
    }

    clickToFilterBrandInItemTable(){
        commonAction.clickToElement(raiseRFQPageLocator.filter_brand_in_item_table_css)
    }

    clickToFilterUomInItemTable(){
        commonAction.clickToElement(raiseRFQPageLocator.filter_uom_in_item_table_css)
    }

    clickToItemQuantityInItemTable(){
        commonAction.clickToElementByXpath(raiseRFQPageLocator.item_quantity_xpath)
    }

    clickToItemDeleteButton(){
        commonAction.clickToElementByXpath(raiseRFQPageLocator.item_delete_btn_xpath)
    }

    checkToSupplierCheckbox() {
        this.scrollToAwardedQuantityItem("75%")
        commonAction.checkCheckboxByXpath(raiseRFQPageLocator.supplier_ckb_xpath)
    }

    uncheckToSupplierCheckbox() {
        this.scrollToAwardedQuantityItem("75%")
        commonAction.uncheckCheckboxByXpath(raiseRFQPageLocator.supplier_ckb_xpath)
    }

    verifyPprNumberDisplay(pprNumber) {
        commonAction.verifyElementByXpathVisible(printf(raiseRFQPageLocator.ppr_number_txb_xpath, pprNumber))
    }

    verifyCommentDisplay(comment){
        commonAction.verifyElementByXpathVisible(printf(raiseRFQPageLocator.comment_in_table_xpath, comment))
    }

    verifyRFQListPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(raiseRFQPageLocator.rfq_list_page_title_xpath)
    }

    verifyRFQDetailPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(raiseRFQPageLocator.rfq_detail_page_title_xpath)
    }

    verifyVendorNameDisplay(vendorName){
        commonAction.verifyElementByXpathVisible(printf(raiseRFQPageLocator.vendor_name_xpath, vendorName))
    }

    verifyApprovalRouteDropdownIsDisable(){
        commonAction.verifyElementDisable(raiseRFQPageLocator.approval_route_dropdown_css)
    }

    verifyValueInRFQTitleTextboxExist(rfqTitle) {
        commonAction.verifyValueInTextboxExist(raiseRFQPageLocator.rfq_title_txb_css, rfqTitle)
    }

    verifyValueInRfqNumberTextboxExist(rfqNumber){
        commonAction.verifyValueInTextboxExist(raiseRFQPageLocator.rfq_number_txb_css, rfqNumber)
    }

    verifyFileNameInNegotiationExist(fileName) {
        commonAction.verifyValueInTextboxExist(raiseRFQPageLocator.file_name_in_negotiation_btn_css,fileName)
    }

    verifyValueInEmailAddressTextboxExist(email){
        commonAction.verifyValueInTextboxExist(raiseRFQPageLocator.email_address_txb_css, email)
    }

    verifyValueInContactNumberTextboxExist(contactNumber){
        commonAction.verifyValueInTextboxExist(raiseRFQPageLocator.contact_number_txb_css, contactNumber)
    }

    verifyProjectCodeFieldNotDisplay(){
        commonAction.verifyElementNotExist(raiseRFQPageLocator.project_code_dropdown_css)
    }

    verifyProjectCodeFieldDisplay(){
        commonAction.verifyElementVisible(raiseRFQPageLocator.project_code_dropdown_css)
    }

    verifyRaiseRFQPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(raiseRFQPageLocator.raise_rfq_page_title_xpath)
    }

    verifyRfqTitleInRfqListDisplay(rfqTitle){
        commonAction.verifyElementByXpathVisible(printf(raiseRFQPageLocator.rfq_title_in_rfq_list_xpath, rfqTitle))
    }

    verifyItemDeleteButtonDisplay(){
        commonAction.verifyElementByXpathVisible(raiseRFQPageLocator.item_delete_btn_xpath)
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

    verifyValidationTextTaxCodeDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(raiseRFQPageLocator.validation_text_tax_code_xpath, validation))
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

    verifyValidationTextApprovalRouteDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(raiseRFQPageLocator.validation_text_approval_route_xpath, validation))
    }

    verifyValidationTextDeliveryContactPersonDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(raiseRFQPageLocator.validation_delivery_contact_person_xpath, validation))
    }

    verifyValidationTextContactNumberDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(raiseRFQPageLocator.validation_text_contact_number_xpath, validation))
    }

    scrollToQuantityItem(position){
        commonAction.scrollToPositionElement(raiseRFQPageLocator.scroll_bar_in_item_table_xpath, position)
    }

    scrollToAwardedQuantityItem(position){
        commonAction.scrollToPositionElement(raiseRFQPageLocator.scroll_bar_in_view_quotation_table_xpath, position)
    }

}export default RaiseRFQPage