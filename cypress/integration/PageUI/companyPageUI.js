class companyPageLocator{
    constructor(){ 
        // CSS - Txb - Radio
        this.email_txb_css = "[name='email']";
        this.username_txb_css = "[name='userName']";
        this.work_number_txb_css = "[name='workNumber']";
        this.designation_txb_css = "[name='designation']"; 
        this.filter_role_txb_css = "[aria-label='Role Filter Input']";    
        this.filter_email_txb_css = "[aria-label='Email Filter Input']";
        this.custom_password_txb_css = "[name='password']";
        this.custom_reset_pass_txb_css = "[type='password']";
        this.filter_company_name_txb_css = "[aria-label='Full Name Filter Input']";   
        this.filter_feature_name_txb_css = "[aria-label='Feature Name Filter Input']";  

        this.custom_pass_radio_button_css = "#customPassword";

        // Css - Other
        this.email_in_list_css = ".ag-row-first>[col-id='email']";
        this.status_in_list_css = ".ag-row-first>[col-id='status']";
        this.work_number_in_list_css = ".ag-row-first>[col-id='workNumber']";
        this.designation_in_list_css = ".ag-row-first>[col-id='designation']";

        // Xpath - Dropdown - Button
        this.dial_code_dropdown_xpath = "//*[text()='Dial Code']/parent::*/parent::*//*[@class=' css-tlfecz-indicatorContainer']";
        this.reset_password_button_xpath = "//*[@name='resetPassword']/parent::*/parent::*/parent::*//button[text()='Reset']";
        this.reset_two_factor_button_xpath = "//*[@name='twoFactor']/parent::*/parent::*/parent::*//button[text()='Reset']";
        this.reset_notification_pass_button_xpath = "//*[@class='modal-content']//button[text()='Reset']";

        // Xpath - Txb - Ckb
        this.remark_txb_xpath = "//*[text()='Remarks']/parent::*/parent::*/parent::*/parent::*//textarea";
        this.role_name_ckb_xpath = "//*[text()='%s']/parent::*/parent::*/preceding-sibling::*//input[@type='checkbox']";
        this.feature_read_role_ckb_xpath = "//*[@col-id='featureName' and text()='%s']/parent::*//input[@name='read']";
        this.feature_write_role_ckb_xpath = "//*[@col-id='featureName' and text()='%s']/parent::*//input[@name='write']";
        this.feature_approve_role_ckb_xpath = "//*[@col-id='featureName' and text()='%s']/parent::*//input[@name='approve']";

        // Xpath - Other
        this.full_name_in_list_css = "//*[@col-id='name' and text()='%s']";
        this.option_dial_code_xpath = "//*[text()='Dial Code']/parent::*/parent::*/parent::*//*[contains(@class,'menu')]//*[contains(@class,'option') and contains(text(),'%s')]";
        this.user_name_in_detail_xpath = "//label[@for='userName']/parent::*/parent::*//*[text()='%s']";
        
        this.nav_tab_in_detail_page_xpath = "//*[contains(@class,'nav-tabs')]//*[text()='%s']";
        this.company_detail_page_title_xpath = "//h1/*[text()='Company User Details']";
        this.company_user_list_page_title_xpath = "//h1/*[text()='Company Users List']";         
        this.create_company_user_page_title_xpath = "//h1/*[text()='Create New Company User']";
        
        // Xpath - Validation
        this.validation_text_email_xpath = "//*[@name='email']/following-sibling::*[@class='invalid-feedback' and text()='%s']";
        this.validation_text_password_xpath = "//*[@name='password']/following-sibling::*[@class='invalid-feedback' and text()='%s']";
        this.validation_text_user_name_xpath = "//*[@name='userName']/following-sibling::*[@class='invalid-feedback' and text()='%s']";
        this.validation_text_work_phone_xpath = "//*[@name='workNumber']/following-sibling::*[@class='invalid-feedback' and text()='%s']";

    }
}export default companyPageLocator