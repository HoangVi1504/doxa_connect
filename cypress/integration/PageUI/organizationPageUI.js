class organizationPageLocator{
    constructor(){ 
        // Css - Txb
        this.email_txb_css = "[name='email']";
        this.username_txb_css = "[name='userName']";
        this.work_number_txb_css = "[name='workNumber']";
        this.designation_txb_css = "[name='designation']";    
        this.custom_password_txb_css = "[type=password]";

        this.filter_role_txb_css = "[aria-label='Role Filter Input']";    
        this.filter_email_txb_css = "[aria-label='Email Filter Input']";
        this.filter_company_name_txb_css = "[aria-label='Company Name Filter Input']";
        this.filter_company_name_in_list_txb_css = "[aria-label='Full Name Filter Input']";
        
        // Css - Ckb - Radio button
        this.company_admin_ckb_css = "input[name='companyAdmin']";
        this.custom_pass_radio_button_css = "#customPassword";

        // Css - Other
        this.email_in_list_css = ".ag-row-first>[col-id='email']";
        this.status_in_list_css = ".ag-row-first>[col-id='status']";
        this.work_number_in_list_css = ".ag-row-first>[col-id='workNumber']";
        this.designation_in_list_css = ".ag-row-first>[col-id='designation']";

        // Xpath - Button
        this.add_company_button_xpath = "(//button[text()='Add'])[2]";
        this.reset_password_button_xpath = "//*[@name='resetPassword']/parent::*/parent::*/parent::*//button[text()='Reset']";
        this.reset_two_factor_button_xpath = "//*[@name='twoFactor']/parent::*/parent::*/parent::*//button[text()='Reset']";
        this.delete_company_name_button_xpath = "//*[@name='companyList']//*[text()='%s']/parent::*/following-sibling::*//button/*[contains(@class,'trash')]";
        this.reset_notification_pass_button_xpath = "//*[@class='modal-content']//button[text()='Reset']";

        // Xpath - Ckb - Dropdown
        this.dial_code_dropdown_xpath = "//*[text()='Dial Code']/parent::*/parent::*//*[@class=' css-tlfecz-indicatorContainer']";
        this.option_role_name_ckb_xpath = "//*[text()='%s']/parent::*/parent::*/preceding-sibling::*//input[@type='checkbox']";

        // Xpath - Other
        this.company_name_xpath = "//*[@name='companyList']//label[text()='%s']";     
        this.option_dial_code_xpath = "//*[text()='Dial Code']/parent::*/parent::*/parent::*//*[contains(@class,'menu')]//*[contains(@class,'option') and contains(text(),'%s')]";
        this.full_name_in_list_xpath = "//*[@col-id='name' and text()='%s']";
        this.option_company_name_xpath = "//*[@col-id='entityName'and text()='%s']";
        this.user_name_in_detail_xpath = "//label[@for='userName']/parent::*/parent::*//*[text()='%s']";
        this.company_name_in_list_xpath = "//*[@name='companyList']//*[text()='%s']";
        
        this.reset_password_user_page_title_xpath = "//h1/*[text()='Reset Password']";
        this.organization_detail_page_title_xpath = "//h1/*[text()='Organization User Details']"; 
        this.organization_user_list_page_title_xpath = "//h1/*[text()='Organization Users List']";
        this.create_organization_user_page_title_xpath = "//h1/*[text()='Create New Organization User']";

        // Xpath - validation
        this.validation_text_email_xpath = "//*[@name='email']/following-sibling::*[@class='invalid-feedback' and text()='%s']";
        this.validation_text_password_xpath = "//*[@name='password']/following-sibling::*[@class='invalid-feedback' and text()='%s']";
        this.validation_text_user_name_xpath = "//*[@name='userName']/following-sibling::*[@class='invalid-feedback' and text()='%s']";
        this.validation_text_work_phone_xpath = "//*[@name='workNumber']/following-sibling::*[@class='invalid-feedback' and text()='%s']";

    }
}export default organizationPageLocator