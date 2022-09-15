import { relativeTimeThreshold } from "moment";

class ManageGlAccountPageLocator{
    constructor(){
        this.code_txb_css = "[name='code']";
        this.remark_txb_css = "[name='remarks']";
        this.gl_account_txb_css = "[name='accountNumber']";
        this.code_in_cost_list_css = ".ag-row-first>[col-id='code']";
        this.cost_code_in_list_css = ".ag-row-first>[col-id='costCode']";
        this.description_gl_txb_css = "textarea[name='description']";
        this.remark_in_cost_list_css = ".ag-row-first>[col-id='remarks']";
        this.description_in_list_css = ".ag-row-first>[col-id='description']";
        this.filter_gl_account_txb_css = "[aria-label='G/L Account Filter Input']";
        this.department_code_in_list_css = ".ag-row-first>[col-id='departmentCode']";
        this.gl_active_status_in_list_css = ".ag-row-first>[col-id='active']";

        this.option_link_xpath = "//*[text()='%s']/parent::a[@class='nav-link']";
        this.notification_xpath = "//*[@class='modal-body' and contains(text(),'%s')]";
        this.gl_account_ckb_xpath = "//*[@col-id='accountNumber']//*[contains(text(),'%s')]/parent::*//input[@type='checkbox']";
        this.add_code_button_xpath = "//*[text()='Add Code']/parent::*/parent::button";
        this.gl_action_in_list_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='action']//*[contains(text(),'%s')]";
        this.gl_account_in_list_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='accountNumber']//*[contains(text(),'%s')]";
        this.set_active_status_ckb_xpath = "//label[text()='Is Active']/parent::*//input[@type='checkbox']";
        this.list_gl_account_page_title_xpath = "//h1//*[text()='List of G/L Account']";
        this.create_gl_account_page_title_xpath = "//h1//*[text()='Create G/L Account']";
        this.gl_account_details_page_title_xpath = "//h1//*[text()='G/L Account Details']";
        this.activate_button_in_notification_xpath = "(//button[text()='Activate'])[2]";
        this.deactivate_button_in_notification_xpath = "(//button[text()='Deactivate'])[2]";
        
        this.validation_text_code_xpath = "//*[@name='code']//following-sibling::*[@class='invalid-feedback']";
        this.validation_text_gl_account_xpath = "//*[@name='accountNumber']//following-sibling::*[@class='invalid-feedback']";
    }

}export default ManageGlAccountPageLocator