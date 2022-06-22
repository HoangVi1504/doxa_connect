class InvPageLocator{
    constructor(){
        this.inv_date_txb_css = '[name="invoiceDate"]';
        this.inv_number_txb_css = '[name="invoiceNo"]';
        this.company_name_txb_css = '[name="companyName"]';
        this.inv_quantity_txb_css = '.ag-row-first>div[col-id="invoiceQty"]';
        this.inv_due_date_txb_css = '[name="invoiceDueDate"]';
        this.inv_type_in_list_css = '.ag-row-first>div[col-id="invoiceType"]';
        this.matching_in_list_css = '.ag-row-first>div[col-id="matching"]';
        this.inv_type_dropdown_css = '[name="invoiceType"]';
        this.inv_status_in_list_css = '.ag-row-first>div[col-id="invoiceStatus"]';
        this.approval_route_dropdown_css = '[name="approvalRoute"]';
        this.filter_inv_number_in_list_css = '[aria-label="Invoice No. Filter Input"]';
        this.filter_do_number_in_select_po_table_css = '[aria-label="DO No. Filter Input"]';
        this.filter_po_number_in_inv_approval_list_css = '[aria-label="Purchase Order No. Filter Input"]';

        this.gl_code_in_table_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='glCode']";
        this.inv_number_in_list_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='invoiceNo' and text()='%s']";
        this.create_inv_page_title_xpath = "//h1//*[text()='Create Invoice']";
        this.supplier_code_dropdown_xpath = "//*[@id='mui-component-select-supplierCode']";
        this.inv_approval_page_title_xpath = "//h1//*[text()='Invoice Pending Approval']";
        this.scroll_bar_in_item_table_xpath = "(//*[@class='ag-body-horizontal-scroll-viewport'])[1]";
        this.option_item_from_dropdown_xpath = "//*[contains(@class,'MenuList')]//*[contains(@class,'option') and contains(text(),'%s')]";
        this.po_number_in_added_po_table_xpath = "(//*[contains(@class,'ag-row-first')]//*[@col-id='poNumber'])[2]//*[text()='%s']";
        this.filter_po_number_in_select_po_table_xpath = "(//*[@aria-label='PO No. Filter Input'])[1]";
        this.po_number_checkbox_in_select_po_table_xpath = "//*[contains(text(),'%s')]/parent::*//input[@type='checkbox']";
    }
}export default InvPageLocator