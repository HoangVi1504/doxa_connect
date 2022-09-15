class ManageSupplierBankAccountPageLocator{
    constructor(){
        // Css - Txb
        this.state_txb_css = "[name='state']";
        this.branch_txb_css = "[name='branch']";
        this.country_txb_css = "[name='country']";
        this.currency_txb_css = "[name='currency']";
        this.bank_name_txb_css = "[name='bankName']";
        this.swift_code_txb_css = "[name='swiftCode']";
        this.bank_label_txb_css = "[name='bankLabel']";
        this.branch_code_txb_css = "[name='branchCode']";
        this.branch_city_txb_css = "[name='branchCity']";
        this.postal_code_txb_css = "[name='postalCode']";
        this.company_code_txb_css = "[name='companyCode']";
        this.reject_reason_txb_css = "[name='rejectReason']";
        this.branch_address_1_txb_css = "[name='branchAddressLine1']";
        this.branch_address_2_txb_css = "[name='branchAddressLine2']";
        this.bank_account_number_txb_css = "[name='bankAccountNo']";
        this.account_holder_name_txb_css = "[name='accountHolderName']";
        this.comment_conversation_txb_css = "[placeholder='Please enter your comment here...']";

        this.filter_bank_label_txb_css = "[aria-label='Bank Label Filter Input']";
        this.filter_bank_account_number_txb_css = "[aria-label='Bank Account No. Filter Input']";
        this.filter_account_holder_name_txb_css = "[aria-label='Account Holder Name Filter Input']";

        // Css - Other
        this.comment_in_list_css = ".ag-row-first>[col-id='comment']";
        this.comment_in_list_css = ".ag-row-first>[col-id='comment']";
        this.currency_in_list_css = ".ag-row-first>[col-id='currency']";
        this.bank_name_in_list_css = ".ag-row-first>[col-id='bankName']";
        this.bank_status_in_list_css = ".ag-row-first>[col-id='status']";
        this.company_name_in_list_css = ".ag-row-first>[col-id='companyname']";
        this.company_code_in_list_css = ".ag-row-first>[col-id='companyCode']";
        this.bank_account_number_in_list_css = ".ag-row-first>[col-id='bankAccountNo']";
        this.account_holder_name_in_list_css = ".ag-row-first>[col-id='accountHolderName']";

        // Xpath - Button
        this.reject_bank_account_button_xpath = "//*[@name='rejectReason']/parent::*/parent::*//button[text()='Reject']";

        // Xpath - Ckb
        this.default_bank_account_ckb_xpath = "//label[text()='Default bank account']/parent::*//input[@type='checkbox']";

        // Xpath - Dropdown
        this.country_dropdown_xpath = "//label[text()='Country']/parent::*/parent::*//*[@class=' css-tlfecz-indicatorContainer']";
        this.currency_dropdown_xpath = "//label[text()='Currency']/parent::*/parent::*//*[@class=' css-tlfecz-indicatorContainer']";
        this.bank_name_dropdown_xpath = "//label[text()='Bank Name']/parent::*/parent::*//*[@class=' css-tlfecz-indicatorContainer']";
        this.swift_code_dropdown_xpath = "//label[text()='Swift Code']/parent::*/parent::*//*[@class=' css-tlfecz-indicatorContainer']";
        this.company_code_dropdown_xpath = "//label[text()='Company Code']/parent::*/parent::*//*[@class=' css-tlfecz-indicatorContainer']";

        // Xpath - Other
        this.bank_label_in_list_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='bankLabel' and contains(text(),'%s')]";
        this.action_in_audit_trail_list_xpath = "//*[@col-id='action']//*[text()='%s']";
        this.add_supplier_bank_page_title_xpath = "//h1//*[text()='Add New Supplier Bank Account']";
        this.supplier_bank_account_list_page_title_xpath = "//h1//*[text()='List of Supplier Bank Account']";
        this.supplier_bank_account_detail_page_title_xpath = "//h1//*[text()='Supplier Bank Account Details']";

        //Xpath - Validation
        this.validation_text_branch_xpath = "//*[@name='branch']//following-sibling::*[contains(@class,'invalid-feedback')]";
        this.validation_text_country_xpath = "//label[text()='Country']/parent::*/parent::*//*[contains(@class,'invalid-feedback')]";
        this.validation_text_currency_xpath = "//label[text()='Currency']/parent::*/parent::*//*[contains(@class,'invalid-feedback')]";
        this.validation_text_bank_name_xpath = "//label[text()='Bank Name']/parent::*/parent::*//*[contains(@class,'invalid-feedback')]";
        this.validation_text_bank_label_xpath = "//*[@name='bankLabel']//following-sibling::*[contains(@class,'invalid-feedback')]";
        this.validation_text_swift_code_xpath = "//label[text()='Swift Code']/parent::*/parent::*//*[contains(@class,'invalid-feedback')]";
        this.validation_text_company_code_xpath = "//label[text()='Company Code']/parent::*/parent::*//*[contains(@class,'invalid-feedback')]";
        this.validation_text_branch_address_1_xpath = "//*[@name='branchAddressLine1']//following-sibling::*[contains(@class,'invalid-feedback')]";
        this.validation_text_branch_address_2_xpath = "//*[@name='branchAddressLine2']//following-sibling::*[contains(@class,'invalid-feedback')]";
        this.validation_text_bank_account_number_xpath = "//*[@name='bankAccountNo']//following-sibling::*[contains(@class,'invalid-feedback')]";
        this.validation_text_account_holder_name_xpath = "//*[@name='accountHolderName']//following-sibling::*[contains(@class,'invalid-feedback')]";
    }

}export default ManageSupplierBankAccountPageLocator