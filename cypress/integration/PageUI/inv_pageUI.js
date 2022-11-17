class InvPageLocator{
    constructor() {
        // Css - Textbox
        this.inv_date_txb_css = '[name="invoiceDate"]';
        this.inv_number_txb_css = '[name="invoiceNo"]';
        this.company_name_txb_css = '[name="companyName"]';
        this.inv_due_date_txb_css = '[name="invoiceDueDate"]';
        this.expected_amount_txb_css = '[name="expectedAmount"][type="text"]';
        this.inv_reject_reason_txb_css = '[name="rejectReason"]';

        // Css - Dropdown
        this.inv_type_dropdown_css = '[name="invoiceType"]';
        this.approval_route_dropdown_css = '[name="approvalRoute"]';
        this.inv_item_uom_dropdown_in_add_item_table_css = '.ag-row-first>div[col-id="uom"]';

        // Css - Other
        this.inv_type_in_list_css = '.ag-row-first>div[col-id="invoiceType"]';
        this.matching_in_list_css = '.ag-row-first>div[col-id="matching"]';
        this.inv_status_in_list_css = '.ag-row-first>div[col-id="invoiceStatus"]';
        this.inv_number_in_list_css = '.ag-row-first>div[col-id="invoiceNo"]'
        
        this.inv_quantity_in_table_css = '.ag-row-first>div[col-id="invoiceQty"]';
        this.inv_unit_price_in_table_css ='.ag-row-first>div[col-id="invoiceUnitPrice"]';
        this.inv_item_name_in_add_item_table_css = '.ag-row-first>div[col-id="itemName"]';
        this.inv_item_size_in_add_item_table_css = '.ag-row-first>div[col-id="size"]';
        this.inv_item_code_in_add_item_table_css = '.ag-row-first>div[col-id="itemCode"]';
        this.inv_item_model_in_add_item_table_css = '.ag-row-first>div[col-id="model"]';
        this.inv_item_brand_in_add_item_table_css = '.ag-row-first>div[col-id="brand"]';

        // Css - Filter
        this.filter_inv_quantity_in_table_css = '[aria-label="Qty Filter Input"]';
        this.filter_inv_item_name_in_table_css = '[aria-label="Item Name Filter Input"]';
        this.filter_inv_unit_price_in_table_css = '[aria-label="Unit Price Filter Input"]'
        this.filter_inv_item_tax_code_in_table_css = '[aria-label="Tax Code Filter Input"]';
        this.filter_do_number_in_select_po_table_css = '[aria-label="DO No. Filter Input"]';
        
        // Xpath - Textbox
        this.inv_quantity_txb_in_table_xpath = "//*[@col-id='invoiceQty']//input[@aria-label='Input Editor']";
        this.inv_item_name_txb_in_table_xpath = "//*[@col-id='itemName']//input[@aria-label='Input Editor']";
        this.inv_unit_price_txb_in_table_xpath = "//*[@col-id='invoiceUnitPrice']//input[@aria-label='Input Editor']";
        this.inv_item_code_txb_in_add_item_table_xpath = "//*[@col-id='itemCode']//input[@aria-label='Input Editor']";
        this.inv_item_size_txb_in_add_item_table_xpath = "//*[@col-id='size']//input[@aria-label='Input Editor']";
        this.inv_item_model_txb_in_add_item_table_xpath = "//*[@col-id='model']//input[@aria-label='Input Editor']";
        this.inv_item_brand_txb_in_add_item_table_xpath = "//*[@col-id='brand']//input[@aria-label='Input Editor']";
        
        // Xpath - Button
        this.tax_plus_btn_xpath = "//*[text()='Tax:']/parent::*/following-sibling::*//*[text()='+']";
        this.reject_inv_btn_xpath = "(//button[text()='Reject'])[2]";
        this.item_delete_btn_xpath = "(//button[contains(@class,'MuiIconButton')])[2]";
        
        // Xpath - Checkbox
        this.expected_amount_ckb_xpath = "//*[@for='expectedAmountGiven']/preceding-sibling::*/*[contains(@class,'checkbox')]";
        this.po_number_ckb_in_select_po_table_xpath = "//*[contains(text(),'%s')]/parent::*/parent::*[@col-id='poNumber']//input[@type='checkbox']";
        this.do_number_ckb_in_select_do_table_xpath = "//*[contains(text(),'%s')]/parent::*/parent::*[@col-id='deliveryOrderNumber']//input[@type='checkbox']";
        
        // Xpath Dropdown
        this.tax_code_dropdown_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='invoiceTaxCode']";
        this.supplier_code_dropdown_xpath = "//*[@id='mui-component-select-supplierCode']";
        this.option_item_from_dropdown_xpath = "//*[contains(@class,'MenuList')]//*[contains(@class,'option') and contains(text(),'%s')]";
        
        // Xpath - Other
        this.gl_code_in_table_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='glCode']";
        this.inv_number_in_list_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='invoiceNo' and text()='%s']";
        this.header_preview_invoice_xpath = "//*[@class='modal-header' and text() = 'Preview Invoice']";
        this.do_number_in_added_do_table_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='doNumber']//*[text()='%s']";
        this.po_number_in_added_po_table_xpath = "(//*[contains(@class,'ag-row-first')]//*[@col-id='poNumber'])[2]//*[text()='%s']";
        this.inv_item_name_in_added_po_table_xpath = "(//button[contains(@class,'MuiIconButton')])[2]//parent::*/parent::*[@col-id='poNumber']/parent::*/*[@col-id='itemName']";

        this.tax_invoice_value_xpath = "//*[text()='Tax:']/parent::*/following-sibling::*[2]//*[text()='%s']"
        this.total_invoice_value_xpath = "//*[text()='Total:']/parent::*/following-sibling::*[2]/*[text()='%s']"
        this.sub_total_invoice_value_xpath = "//*[text()='Sub Total:']/parent::*/following-sibling::*[2]/*[text()='%s']"
        
        this.scroll_bar_in_item_table_xpath = "(//*[@class='ag-body-horizontal-scroll-viewport'])[1]";
        this.scroll_bar_in_added_po_table_xpath = "(//*[@class='ag-body-horizontal-scroll-viewport'])[2]";
        
        this.item_table_title_xpath = "//h3[text()='%s']";
        this.create_inv_page_title_xpath = "//h1//*[text()='Create Invoice']";
        this.invoice_list_page_title_xpath = "//h1//*[text()='Invoices List']";
        this.invoice_detail_page_title_xpath = "//h1//*[text()='Invoice Details']";
        this.inv_pending_approval_list_xpath = "//h1//*[text()='Invoices Pending Approval List']";
        this.inv_pending_approval_page_title_xpath = "//h1//*[text()='Invoice Pending Approval']";

        // Xpath - Filter
        this.filter_inv_number_in_list_xpath = "(//*[@aria-label='Invoice No. Filter Input'])[1]";
        this.filter_do_number_in_select_do_table_xpath = "(//*[@aria-label='DO No. Filter Input'])[1]";
        this.filter_po_number_in_select_po_table_xpath = "(//*[@aria-label='PO No. Filter Input'])[1]";
        this.filter_po_number_in_inv_approval_list_xpath = "(//*[@aria-label='Purchase Order No. Filter Input'])[1]";

        // Xpath - Validation
        this.validation_text_supplier_xpath = "//*[@name='supplierCode']/parent::*/following-sibling::*[text()='%s']";
        this.validation_text_due_date_xpath = "//*[@name='invoiceDueDate']//following-sibling::*[text()='%s']";
        this.validation_text_invoice_type_xpath = "//*[@name='invoiceType']//following-sibling::*[text()='%s']";
    }
}export default InvPageLocator