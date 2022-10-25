class EntityAdminPageLocator{
    constructor(){
        // Css - Other
        this.add_file_entity_css = '[type="file"]';
        this.entity_status_in_list_css = '.ag-row-first>[col-id="onboardingStatus"]';
        this.country_origin_in_list_css = ".ag-row-first>[col-id='country']";
        this.company_reg_number_in_list = '.ag-row-first>[col-id="companyRegistrationNumber"]';
        this.file_name_in_document_table_css = '.ag-row-first>[col-id="fileName"]';
        this.entity_active_status_in_list_css = '.ag-row-first>[col-id="1"]';
        this.file_title_in_document_table_css = '.ag-row-first>[col-id="title"]';
        
        // Css - Checkbox
        this.buyer_checkbox_css = '#buyer';
        this.supplier_checkbox_css = '#supplier';
        
        // Css - Txb
        this.remark_txb_css = '[name="remarks"]';
        this.company_name_txb_css = '#companyName';
        this.company_reg_number_txb_css = '#comRegNo';
        this.filter_entity_name_txb_css = '[aria-label="Entity Name Filter Input"]';
        this.filter_company_reg_txb_css = "[aria-label='Company Registration No. Filter Input']";

        this.entity_rep_name_txb_css = '#entityRepName';
        this.entity_rep_email_txb_css = '#entityRepEmail';
        this.entity_rep_phone_txb_css = '#entityRepPhone';

        this.authorized_sig_name_txb_css = '#authorizedSigName';
        this.authorized_sig_email_txb_css = '#authorizedSigEmail';
        this.authorized_sig_phone_txb_css = '#authorizedSigPhone';

        this.entity_admin_name_txb_css = '#entAdminName';
        this.entity_admin_email_txb_css = '#entAdminEmail';
        this.entity_admin_phone_txb_css = '#entAdminPhone';

        // Css - Dropdown
        this.country_dropdown_css = '#country';
        this.entity_type_dropdown_css = '#entityType1';
        this.industry_type_dropdown_css = '#entityIndustry1';
        this.entity_rep_dial_code_dropdown_css = '#entityRepDialog';
        this.entity_admin_dial_code_dropdown_css = '#entityAdmDialog';
        this.authorized_sig_dial_code_dropdown_css = '#authorizedSigDialog';

        // Xpath - Other
        this.new_entity_page_xpath = "//h1//*[text()='Onboard New Entity']";
        this.option_nav_link_xpath = "//*[@class='nav-link']//*[text()='%s']";
        this.list_entities_page_xpath = "//h1//*[text()='List of Entities']";
        this.entity_details_page_xpath = "//h1//*[text()='Entity Details']";
        this.entity_name_in_list_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='entityName' and text()='%s']";

        // Xpath - Checkbox
        this.purchase_checkbox_xpath = "//*[@id='Purchase']";
        this.invoices_checkbox_xpath = "//*[@id='Invoices']";
        this.setting_checkbox_xpath = "//*[@id='Settings']";

        // Xpath - Validation text
        this.validation_text_country_xpath = "//*[@id='country']//following-sibling::*[@class='invalid-feedback' and text()='%s']";
        this.validation_text_company_reg_xpath = "//*[@id='comRegNo']//following-sibling::*[@class='invalid-feedback' and text()='%s']";
        this.validation_text_entity_type_xpath = "//*[@id='entityType1']//following-sibling::*[@class='invalid-feedback' and text()='%s']";
        this.validation_text_company_name_xpath = "//*[@id='companyName']//following-sibling::*[@class='invalid-feedback' and text()='%s']";
        this.validation_text_industry_type_xpath = "//*[@id='entityIndustry1']//following-sibling::*[@class='invalid-feedback' and text()='%s']";
        
        this.validation_text_ent_rep_name_xpath = "//*[@id='entityRepName']//following-sibling::*[@class='invalid-feedback' and text()='%s']";
        this.validation_text_ent_rep_email_xpath = "//*[@id='entityRepEmail']//following-sibling::*[@class='invalid-feedback' and text()='%s']";
        this.validation_text_ent_rep_dial_code_xpath = "//*[@id='entityRepDialog']//following-sibling::*[@class='invalid-feedback' and text()='%s']";
        this.validation_text_ent_rep_work_phone_xpath = "//*[@id='entityRepPhone']//following-sibling::*[@class='invalid-feedback' and text()='%s']";

        this.validation_text_authorized_email_xpath = "//*[@id='authorizedSigEmail']//following-sibling::*[@class='invalid-feedback' and text()='%s']";
        this.validation_text_authorized_dial_code_xpath = "//*[@id='authorizedSigDialog']//following-sibling::*[@class='invalid-feedback' and text()='%s']";
        this.validation_text_authorized_work_phone_xpath = "//*[@id='authorizedSigPhone']//following-sibling::*[@class='invalid-feedback' and text()='%s']";

        this.validation_text_ent_admin_email_xpath = "//*[@id='entAdminEmail']//following-sibling::*[@class='invalid-feedback' and text()='%s']";
        this.validation_text_ent_admin_dial_code_xpath = "//*[@id='entityAdmDialog']//following-sibling::*[@class='invalid-feedback' and text()='%s']";
        this.validation_text_ent_admin_work_phone_xpath = "//*[@id='entAdminPhone']//following-sibling::*[@class='invalid-feedback' and text()='%s']";
    }

}export default EntityAdminPageLocator