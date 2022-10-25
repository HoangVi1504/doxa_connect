class ManageExternalVendorPageLocator{
    constructor(){
        // Css - Txb
        this.email_txb_css = "[name='emailAddress']";
        this.full_name_txb_css = "[name='fullName']";
        this.company_reg_txb_css = "[name='uen']";
        this.company_code_txb_css = "[name='companyCode']";
        this.company_name_txb_css = "[name='companyName']";
        this.phone_number_txb_css = "[name='workNumber']";
        this.address_city_txb_css = "[name='addressesDto.0.city']";
        this.address_state_txb_css = "[name='addressesDto.0.state']";
        this.address_label_txb_css = "[name='addressesDto.0.addressLabel']";
        this.tax_reg_number_txb_css = "[name='gstRegNo']";
        this.tax_percentage_txb_css = "[name='taxPercentage']";
        this.address_line_1_txb_css = "[name='addressesDto.0.addressFirstLine']";
        this.address_line_2_txb_css = "[name='addressesDto.0.addressSecondLine']";
        this.address_postal_code_txb_css = "[name='addressesDto.0.postalCode']";

        this.filter_company_code_txb_css = "[aria-label='Company Code Filter Input']";
        this.filter_company_name_txb_css = "[aria-label='Company Name Filter Input']";
        this.filter_company_reg_number_txb_css = "[aria-label='Company Reg. No. Filter Input']";

        // Css - Other
        this.full_name_in_contact_list_css = ".ag-row-first>[col-id='fullName']";
        this.country_code_in_contact_list_css = ".ag-row-first>[col-id='countryCode']";
        this.contact_number_in_contact_list_css = ".ag-row-first>[col-id='workNumber']";
        this.email_address_in_contact_list_css = ".ag-row-first>[col-id='emailAddress']";

        this.email_in_list_css = ".ag-row-first>[col-id='defaultSupplierUser.emailAddress']";
        this.company_name_in_list_css = ".ag-row-first>[col-id='companyName']";
        this.system_status_in_list_css = ".ag-row-first>[col-id='systemStatus']>span";
        this.company_reg_no_in_list_css = ".ag-row-first>[col-id='uen']";
        this.contact_person_in_list_css = ".ag-row-first>[col-id='defaultSupplierUser.fullName']";
        this.connection_status_in_list_css = ".ag-row-first>[col-id='connectionStatus']>span>div";
        this.tax_registered_status_in_list_css = ".ag-row-first>[col-id='gstRegBusiness']>span";

        // Xpath - Txb
        this.tax_code_txb_xpath = "//label[text()='Tax Code']/parent::*/parent::*//input";
        this.bank_account_txb_xpath = "//label[text()='Bank Account To Receive Payment']/parent::*/parent::*//input"
        this.full_name_txb_in_contact_list_xpath = "(//*[@col-id='fullName'])[2]//input";
        this.country_code_txb_in_contact_list_xpath = "(//*[@col-id='countryCode'])[2]//input"
        this.email_address_txb_in_contact_list_xpath = "(//*[@col-id='emailAddress'])[2]//input";
        this.contact_number_txb_in_contact_list_xpath = "(//*[@col-id='workNumber'])[2]//input";

        // Xpath - Checkbox
        this.option_business_role_ckb_xpath = "//label[text()='%s']/parent::*//input[@type='checkbox']";
        this.tax_registered_business_ckb_xpath = "//label[text()='Tax-Registered Business']/parent::*//input[@type='checkbox']";

        // Xpath - Dropdown
        this.tax_code_dropdown_xpath = "//label[text()='Tax Code']/parent::*/parent::*//*[@class=' css-tlfecz-indicatorContainer']";
        this.dial_code_dropdown_xpath = "//label[text()='Contact Number']/parent::*/parent::*//*[@class=' css-tlfecz-indicatorContainer']";
        this.payment_term_dropdown_xpath = "//label[text()='Payment Term']/parent::*/parent::*//*[@class=' css-tlfecz-indicatorContainer']";
        this.bank_account_dropdown_xpath = "//label[text()='Bank Account To Receive Payment']/parent::*/parent::*//*[@class=' css-tlfecz-indicatorContainer']";
        this.country_origin_dropdown_xpath = "//label[text()='Country Of Origin']/parent::*/parent::*//*[@class=' css-tlfecz-indicatorContainer']";
        this.address_country_dropdown_xpath = "//label[text()='Country']/parent::*/parent::*//*[@class=' css-tlfecz-indicatorContainer']";

        // Xpath - Other
        this.company_code_in_list_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='companyCode' and contains(text(),'%s')]";
        this.payment_term_in_dropdown_xpath = "//label[text()='Payment Term']/parent::*/parent::*//*[text()='%s']";
        this.vendor_details_page_title_xpath = "//h1//*[text()='Vendor Details']";
        this.create_external_vendor_page_title_xpath = "//h1//*[text()='Create External Vendor']";
        this.manage_external_vendor_list_page_title_xpath = "//h1//*[text()='Manage External Vendor']";

        // Xpath - Validation
        this.validation_text_email_xpath = "//*[@name='emailAddress']//following-sibling::*[contains(@class,'invalid-feedback')]";
        this.validation_text_state_xpath = "//*[@name='addressesDto.0.state']//following-sibling::div";
        this.validation_text_reg_no_xpath = "//*[@name='gstRegNo']//following-sibling::*[contains(@class,'invalid-feedback')]";
        this.validation_text_country_xpath = "//*[text()='Country']/parent::*/parent::*//*[@class='invalid-feedback']";
        this.validation_text_full_name_xpath = "//*[@name='fullName']//following-sibling::*[contains(@class,'invalid-feedback')]";
        this.validation_text_company_reg_xpath = "//*[@name='uen']//following-sibling::*[contains(@class,'invalid-feedback')]";
        this.validation_text_postal_code_xpath = "//*[@name='addressesDto.0.postalCode']//following-sibling::div";
        this.validation_text_phone_number_xpath = "//*[@name='workNumber']//following-sibling::div";
        this.validation_text_country_code_xpath = "//*[@name='countryCode']/parent::*/following-sibling::div";
        this.validation_text_payment_term_xpath = "//*[text()='Payment Term']/parent::*/parent::*//*[@class='invalid-feedback']";
        this.validation_text_company_name_xpath = "//*[@name='companyName']//following-sibling::*[contains(@class,'invalid-feedback')]";
        this.validation_text_company_code_xpath = "//*[@name='companyCode']//following-sibling::*[contains(@class,'invalid-feedback')]";
        this.validation_text_address_label_xpath = "//*[@name='addressesDto.0.addressLabel']//following-sibling::div";
        this.validation_text_tax_percentage_xpath = "//*[@name='taxPercentage']//following-sibling::*[contains(@class,'invalid-feedback')]";
        this.validation_text_address_line_1_xpath = "//*[@name='addressesDto.0.addressFirstLine']//following-sibling::div";
        this.validation_text_country_of_origin_xpath = "//*[text()='Country Of Origin']/parent::*/parent::*//*[@class='invalid-feedback']";
    }

}export default ManageExternalVendorPageLocator