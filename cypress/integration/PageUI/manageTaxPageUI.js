class ManageTaxPageLocator{
    constructor(){
        this.tax_code_txb_css = "[name='taxCode']";
        this.tax_rate_txb_css = "[name='taxRate']";
        this.tax_description_css = "textarea[name='description']";
        this.tax_rate_in_list_css = ".ag-row-first>[col-id='taxRate']";
        this.filter_tax_code_in_list_css = "[aria-label='Tax Code Filter Input']";
        this.description_tax_in_list_css = ".ag-row-first>[col-id='description']";
        this.tax_active_status_in_list_css = ".ag-row-first>[col-id='active']";
        this.tax_default_status_in_list_css = ".ag-row-first>[col-id='default']";
        
        this.tax_code_ckb_xpath = "//*[@col-id='taxCode']//*[contains(text(),'%s')]/parent::*//input[@type='checkbox']";
        this.tax_code_in_list_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='taxCode']//*[contains(text(),'%s')]";
        this.tax_action_in_list_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='action']//*[contains(text(),'%s')]";
        this.list_tax_page_title_xpath = "//h1//*[text()='List of Tax Record']";
        this.set_default_tax_ckb_xpath = "//label[text()='Set Default Tax']/parent::*//input[@type='checkbox']";
        this.set_active_status_ckb_xpath = "//label[text()='Set Active Status']/parent::*//input[@type='checkbox']";
        this.tax_detail_page_title_xpath = "//h1//*[text()='Tax Record Details']";
        this.create_tax_record_page_title_xpath = "//h1//*[text()='Create Tax Record']";
        this.activate_button_in_notification_xpath = "(//button[text()='Activate'])[2]";
        this.deactivate_button_in_notification_xpath = "(//button[text()='Deactivate'])[2]";

        this.validation_text_tax_code_xpath = "//*[@name='taxCode']//following-sibling::*[@class='invalid-feedback']";
        this.validation_text_tax_rate_xpath = "//*[@name='taxRate']//following-sibling::*[@class='invalid-feedback']";
    }

}export default ManageTaxPageLocator