class ManagePaymentTermPageLocator{
    constructor(){
        // Css - Txb
        this.pay_in_txb_css = "[name='ptDays']";
        this.remark_txb_css = "[name='ptRemarks']";
        this.payment_term_name_txb_css = "[name='ptName']";

        this.filter_pay_in_txb_css = "[aria-label='Pay In Filter Input']";
        this.filter_payment_term_name_txb_css = "[aria-label='Payment Term Filter Input']";

        // Css - Other
        this.pay_in_in_list_css = ".ag-row-first>[col-id='ptDays']";
        this.remark_in_list_css = ".ag-row-first>[col-id='ptRemarks']";
        this.updater_in_list_css = ".ag-row-first>[col-id='updatedByName']";

        // Xpath - Other
        this.payment_term_name_in_list_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='ptName' and contains(text(),'%s')]";
        this.list_payment_term_page_title_xpath = "//h1//*[text()='List of Payment Term']";
        this.payment_term_details_page_title_xpath = "//h1//*[text()='Payment Term Details']";
        this.create_new_payment_term_page_title_xpath = "//h1//*[text()='Create New Payment Term']";

        // Xpath - Validation
        this.validation_text_pay_in_xpath = "//*[@name='ptDays']//following-sibling::*[contains(@class,'invalid-feedback')]";
        this.validation_text_payment_term_name_xpath = "//*[@name='ptName']//following-sibling::*[contains(@class,'invalid-feedback')]";
    }

}export default ManagePaymentTermPageLocator