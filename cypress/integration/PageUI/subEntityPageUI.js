class SubEntityPageLocator{
    constructor(){
        // Css - Other
        this.add_file_entity_css = '[type="file"]';
        this.filter_company_name_css = '[aria-label="Company Name Filter Input"]';
        
        this.file_name_in_document_table_css = '.ag-row-first>[col-id="fileName"]';
        this.file_title_in_document_table_css = '.ag-row-first>[col-id="title"]';

        this.country_origin_in_list_css = '.ag-row-first>[col-id="country"]';
        this.company_status_in_list_css = '.ag-row-first>[col-id="onboardingStatus"]';
        this.company_reg_number_in_list_css = '.ag-row-first>[col-id="companyRegistrationNumber"]';
        this.main_company_status_in_list_css = '.ag-row-first>[col-id="1"]';
        this.company_active_status_in_list_css = '.ag-row-first>[col-id="active"]';
        
        // Css - Txb
        this.remark_txb_css = '[placeholder="Enter Remarks"]';
        this.company_name_txb_css = '[name="companyName"]';
        this.company_reg_number_txb_css = '[name="comRegNo"]';
        
        // Css - Dropdown
        this.entity_type_dropdown_css = '';
        this.industry_type_dropdown_css = '';
        this.country_of_origin_dropdown_css = '';
        
        // Xpath - Other
        this.option_nav_link_xpath = "//*[@class='nav-link']//*[text()='%s']";
        this.company_name_in_list_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='entityName' and text()='%s']";
        this.list_company_page_title_xpath = "//h1//*[text()='List of Companies']";
        this.company_details_page_title_xpath = "//h1//*[text()='Company Details']";
        this.create_new_company_page_title_xpath = "//h1//*[text()='Create New Company']";
        
        this.entity_type_in_detail_xpath = "//label[text()='Entity Type:']/parent::*/parent::*//*[text()='%s']";
        this.company_name_in_detail_xpath = "//label[text()='Company Name:']/parent::*/parent::*//*[text()='%s']";
        this.industry_type_in_detail_xpath = "//label[text()='Industry Type:']/parent::*/parent::*//*[text()='%s']";
        this.country_origin_in_detail_xpath = "//label[text()='Country of Origin:']/parent::*/parent::*//*[text()='%s']";
        this.company_reg_number_in_detail_xpath = "//label[text()='Company Registration No.:']/parent::*/parent::*//*[text()='%s']";

        // Xpath - Checkbox
        this.manage_vendor_checkbox_xpath = "//*[@id='Manage Vendor']";
        this.entity_setting_checkbox_xpath = "//*[@id='Entity Settings']";
        this.procurement_to_pay_checkbox_xpath = "//*[@id='Procurement To Pay']";
        this.transaction_setting_checkbox_xpath = "//*[@id='Transaction Settings']";

        // Xpath - validation
        this.validation_text_entity_type_xpath = "//label[text()='Entity Type']/parent::*/parent::*//*[@class='invalid-feedback' and text()='%s']";
        this.validation_text_company_name_xpath = "//label[text()='Company Name']/parent::*//*[@class='invalid-feedback' and text()='%s']";
        this.validation_text_industry_type_xpath = "//label[text()='Industry Type']/parent::*/parent::*//*[@class='invalid-feedback' and text()='%s']";
        this.validation_text_country_of_origin_xpath = "//label[text()='Country of Origin']/parent::*/parent::*//*[@class='invalid-feedback' and text()='%s']";
        this.validation_text_company_reg_number_xpath = "//label[text()='Company Registration No.']/parent::*//*[@class='invalid-feedback' and text()='%s']";
    }

}export default SubEntityPageLocator