class RaiseRFQPageLocator{
    constructor(){
        // Css - Txb
        this.note_txb_css = '[name="note"]';
        this.reason_txb_css = '[name="reason"]';
        this.tax_code_txb_css = '[name="taxCode"]';
        this.due_date_txb_css = 'input[placeholder="Please select valid Due Date"]';
        this.rfq_title_txb_css = '[name="rfqTitle"]';
        this.rfq_number_txb_css = "[name='rfqNumber']";
        this.contact_number_txb_css = "[name='phoneNumber']";
        this.email_address_txb_css = "[name='emailAddress']";
        this.delivery_date_txb_css = '[name="deliveryDate"]';
        this.validity_end_date_txb_css = '[name="validityEndDate"]';
        this.validity_start_date_txb_css = '[name="validityStartDate"]';
        this.negotiation_comment_txb_css = '[placeholder="Enter Your Comment..."]';
        this.search_item_catalogue_txb_css = '[type="search"]';

        // Css - Dropdown
        this.vendor_dropdown_css = '[name="vendors"]';
        this.tax_code_dropdown_css = '[name="taxCode"]';
        this.rfq_type_dropdown_css = '[name="rfqType"]';
        this.project_code_dropdown_css = '[name="projectCode"]';
        this.currency_code_dropdown_css = '[name="currencyCode"]';
        this.approval_route_dropdown_css = '[name="approvalRouteUuid"]';
        this.delivery_address_dropdown_css = '[name="deliveryAddress"]';
        this.procurement_type_dropdown_css = '[name="procurementType"]';
        this.requisition_type_dropdown_css = '[name="requisitionType"]';
        this.nature_requisition_dropdown_css = '[name="project"]';

        // Css - Filter
        this.filter_rfq_title_css = '[aria-label="RFQ Title Filter Input"]';
        this.filter_uom_in_item_table_css = '[aria-label="UOM Filter Input"]';
        this.filter_size_in_item_table_css = '[aria-label="Size Filter Input"]';
        this.filter_rfq_number_in_list_css = "[aria-label='RFQ No. Filter Input']";
        this.filter_brand_in_item_table_css = '[aria-label="Brand Filter Input"]';

        // Css - Other
        this.file_name_in_negotiation_btn_css = '[col-id="fileLabel"]>.ag-react-container>[type="button"]'

        // Xpath - Dropdown
        this.delivery_contact_person_dropdown_xpath = "//label[text()='Delivery Contact Person']/parent::*/parent::*//*[contains(@class,'css-tlfecz-indicatorContainer')]";

        // Xpath - Button
        this.file_name_btn_xpath = '//button[text()="Upload Attachment"]/following-sibling::*/button[text()="TestImage.png"]';
        this.item_delete_btn_xpath = "(//button[contains(@class,'MuiIconButton')])[1]";
        this.option_btn_in_dialog_box_xpath = '//*[@class="modal-footer"]/button[text()="%s"]';

        // Xpath - Txb
        this.item_code_txb_xpath = "(//*[@col-id='itemCode'])[2]//input";
        this.item_name_txb_xpath = "(//*[@col-id='itemName'])[2]//input";
        this.ppr_number_txb_xpath = "//label[text()='Pre-Purchase Request No.']/parent::*/parent::*//*[text()='%s']"
        this.unit_price_txb_xpath = "(//*[@col-id='itemUnitPrice'])[2]//input";
        this.item_description_txb_xpath = "//textarea[@aria-label='Input Editor']";
        this.awarded_quantity_txb_xpath = "(//*[@col-id='awardedQty0'])[2]//input";
        this.conversation_comment_txb_xpath = "//*[text()='%s']/parent::*/parent::*/following-sibling::*//input[@placeholder='Please enter your comment here...']";
        this.item_awarded_quantity_txb_xpath = "(//*[@col-id='awardedQty0'])[2]";

        // Xpath - Ckb
        this.supplier_ckb_xpath = "(//*[@col-id='selected0'])[2]//*[contains(@class,'p-checkbox')]/parent::*//input[@type='checkbox']";
        this.item_catalogue_ckb_xpath = "//*[contains(text(),'%s')]/parent::*//input[@type='checkbox']";

        // Xpath - Other
        this.vendor_name_xpath = "//label[text()='Selected Vendor(s)']/parent::*/parent::*//*[text()='%s']"
        this.comment_in_table_xpath = "//*[@col-id='comment' and text()='%s']";
        this.option_menu_table_xpath = '//*[@class="nav-item"]//*[text()="%s"]';
        this.rfq_number_in_list_xpath = "//*[@col-id='rfqNumber' and text()='%s']";
        this.rfq_list_page_title_xpath = "//*[text()='Request for Quotations List']";
        this.raise_rfq_page_title_xpath = "//*[text()='Raise a Request for Quotation']";
        this.rfq_detail_page_title_xpath = "//*[text()='Request for Quotation Details']";
        this.rfq_process_radio_btn_xpath = "//label[text()='%s']/preceding-sibling::*//input[@name='rfqProcess']"
        this.rfq_title_in_rfq_list_xpath = "(//*[@role='rowgroup'])[2]//*[@role='row'][1]//*[@col-id='rfqTitle' and text()='%s']";
        this.rfq_status_in_rfq_list_xpath = "//*[@col-id='rfqStatus' and text()='%s']";
        this.scroll_bar_in_item_table_xpath = "(//*[@class='ag-body-horizontal-scroll-viewport'])[1]";
        this.scroll_bar_in_view_quotation_table_xpath = "//*[text()='View Quotations']/parent::*/following-sibling::*[@class='row']//*[@class='ag-body-horizontal-scroll-viewport']";

        this.upload_file_negotiation_xpath = '//button[text()="Upload Attachment"]/preceding-sibling::input[@type="file"]';
        this.upload_file_conversation_xpath = '//button[text()="Choose File"]/preceding-sibling::input[@type="file"]';

        this.uom_xpath = "(//*[@col-id='uom'])[2]";
        this.item_code_xpath = "(//*[@col-id='itemCode'])[2]";
        this.item_name_xpath = "(//*[@col-id='itemName'])[2]";
        this.item_size_xpath = "(//*[@col-id='itemSize'])[2]";
        this.item_brand_xpath = "(//*[@col-id='itemBrand'])[2]";
        this.item_model_xpath = "(//*[@col-id='itemModel'])[2]";
        this.item_tax_code_xpath = "(//*[@col-id='taxCode'])[2]";
        this.item_quantity_xpath = "(//*[@col-id='itemQuantity'])[2]";
        this.item_currency_xpath = "(//*[@col-id='sourceCurrency'])[2]";
        this.item_unit_price_xpath = "(//*[@col-id='itemUnitPrice'])[2]";
        this.item_description_xpath = "(//*[@col-id='itemDescription'])[2]";
        this.item_tax_percentage_xpath = "(//*[@col-id='taxPercentage'])[2]";
        
        // Xpath - Validation
        this.validation_text_vendors_xpath = "//*[@name='vendors']//following-sibling::*[text()='%s']";
        this.validation_text_tax_code_xpath = "//*[@name='taxCode']/following-sibling::*[text()='%s']";
        this.validation_text_rfq_type_xpath = "//*[@name='rfqType']//following-sibling::*[text()='%s']";
        this.validation_text_due_date_xpath = "//*[@name='dueDate' and text()='%s']";
        this.validation_text_rfq_title_xpath = "//*[@name='rfqTitle']//following-sibling::*[text()='%s']";
        this.validation_text_currency_code_xpath = "//*[@name='currencyCode']/following-sibling::*[text()='%s']";
        this.validation_text_delivery_date_xpath = "//*[@name='deliveryDate']/following-sibling::*[text()='%s']";
        this.validation_text_contact_number_xpath = "//input[@name='phoneNumber']/following-sibling::*[text()='%s']";
        this.validation_text_approval_route_xpath = "//*[@name='approvalRouteUuid']/following-sibling::*[text()='%s']"; 
        this.validation_text_delivery_address_xpath = "//*[@name='deliveryAddress']/following-sibling::*[text()='%s']";
        this.validation_text_procurement_type_xpath = "//*[@name='procurementType']/following-sibling::*[text()='%s']";
        this.validation_delivery_contact_person_xpath = "//label[text()='Delivery Contact Person']/parent::*/parent::*//*[contains(@class,'invalid-feedback') and text()='%s']";
    }

}export default RaiseRFQPageLocator