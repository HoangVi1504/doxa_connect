class ManageAddressPageLocator{
    constructor(){
        // Css
        this.city_in_list_css = '.ag-row-first>[col-id="city"]';
        this.state_in_list_css = '.ag-row-first>[col-id="state"]';
        this.country_in_list_css = '.ag-row-first>[col-id="country"]';
        this.postal_code_in_list_css = '.ag-row-first>[col-id="postalCode"]';
        this.filter_address_label_css = '[aria-label="Address Label Filter Input"]';
        this.active_address_in_list_css = '.ag-row-first>[col-id="active"]';
        this.detail_address_in_list_css = '.ag-row-first>[col-id="detailAddress"]';
        this.default_address_in_list_css = '.ag-row-first>[col-id="default"]';

        this.city_txb_css = '[name="city"]';
        this.state_txb_css = '[name="state"]';
        this.postal_code_txb_css = '[name="postalCode"]';
        this.address_label_txb_css = '[name="addressLabel"]';
        this.address_first_line_txb_css = '[name="addressFirstLine"]';
        this.address_second_line_txb_css = '[name="addressSecondLine"]';
        
        // Xpath
        this.city_dropdown_xpath = "";
        this.address_label_in_list_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='addressLabel']//*[contains(text(),'%s')]";
        this.set_default_address_checkbox_xpath = "//label[text()='Set Default Address']/parent::*//input[@type='checkbox']";
        this.company_address_list_page_title_xpath = "//h1//*[text()='Company Address List']";
        this.create_company_address_page_title_xpath = "//h1//*[text()='Create Company Address']";
        this.company_address_detail_page_title_xpath = "//h1//*[text()='Company Address Details']";

        this.validation_text_state_xpath = "//*[@name='state']/following-sibling::*[@class='invalid-feedback' and text()='%s']";
        this.validation_text_country_xpath = "//label[text()='Country']/parent::*/parent::*//*[@class='invalid-feedback' and text()='%s']";
        this.validation_text_address_1_xpath = "//*[@name='addressFirstLine']/following-sibling::*[@class='invalid-feedback' and text()='%s']";
        this.validation_text_postal_code_xpath = "//*[@name='postalCode']/following-sibling::*[@class='invalid-feedback' and text()='%s']";
        this.validation_text_address_label_xpath = "//*[@name='addressLabel']/following-sibling::*[@class='invalid-feedback' and text()='%s']";
    }
}export default ManageAddressPageLocator