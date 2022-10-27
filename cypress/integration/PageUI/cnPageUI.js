class CreditNotePageLocator{
    constructor() {
        // Css - Textbox
        this.cn_date_txb_css = '[name="creditNoteDate"]';
        this.cn_number_txb_css = '[name="creditNoteNumber"]';
        this.company_name_txb_css = '[name="companyName"]';
        this.cn_reject_reason_txb_css = '[name="rejectReason"]';
        
        // Css - Dropdown
        this.reference_inv_dropdown_css = '[name="invoiceUuid"]';
        this.approval_route_dropdown_css = '[name="approvalRouteUuid"]';

        // Css - Other
        this.cn_number_in_list_css = '.ag-row-first>div[col-id="creditNoteNumber"]';
        this.cn_status_in_list_css = '.ag-row-first>div[col-id="status"]';
        this.cn_quantity_in_table_css = '.ag-row-first>div[col-id="itemQuantity"]';
        this.cn_unit_price_in_table_css = '.ag-row-first>div[col-id="unitPrice"]';
        this.cn_exchange_rate_in_table_css = '.ag-row-first>div[col-id="exchangeRate"]';

        // Css - Filter
        this.filter_cn_number_in_list_css='[aria-label="Credit Note No. Filter Input"]'
        this.filter_inv_number_in_list_css = '[aria-label="Invoice No. Filter Input"]';

        // Xpath - Textbox
        this.quantity_txb_in_table_xpath = "//*[@col-id='itemQuantity']//input[@aria-label='Input Editor']";
        this.unit_price_txb_in_table_xpath = "//*[@col-id='unitPrice']//input[@aria-label='Input Editor']";
        this.exchange_rate_txb_in_table_xpath = "//*[@col-id='exchangeRate']//input[@aria-label='Input Editor']";

        // Xpath - Button
        this.tax_plus_btn_xpath = "//*[text()='Tax:']/parent::*/following-sibling::*//*[text()='+']";
        this.reject_cn_btn_xpath = "(//button[text()='Reject'])[2]";
        this.item_delete_btn_xpath = "//*[@col-id='action']//button[contains(@class,'MuiIconButton')]";

        // Xpath - Dropdown
        this.supplier_code_dropdown_xpath = "//*[@id='mui-component-select-supplierCode']";

        // Xpath - Other
        this.cn_number_in_list_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='creditNoteNumber' and text()='%s']";
        this.header_preview_cn_xpath = "//*[@class='modal-header' and text() = 'Preview Credit Note']";
        this.gl_account_in_table_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='glAccount']";
        this.create_cn_page_title_xpath = "//h1//*[text()='Create Credit Note']";
        this.cn_detail_page_title_xpath = "//h1//*[text()='Credit Note Details']";
        this.scroll_bar_in_item_table_xpath = "(//*[@class='ag-body-horizontal-scroll-viewport'])[1]";
        this.credit_note_list_page_title_xpath = "//h1//*[text()='Credit Notes List']";

        this.cn_tax_value_xpath = "//*[text()='Tax:']/parent::*/following-sibling::*[2]//*[text()='%s']"
        this.cn_total_value_xpath = "//*[text()='Total:']/parent::*/following-sibling::*[2]/*[text()='%s']"
        this.cn_sub_total_value_xpath = "//*[text()='Sub Total:']/parent::*/following-sibling::*[2]/*[text()='%s']"

        // Xpath - Validation
        this.validation_text_supplier_xpath = "//*[@name='supplierCode']/parent::*/following-sibling::*[text()='%s']";
    }
} export default CreditNotePageLocator