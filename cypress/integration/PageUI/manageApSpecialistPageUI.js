class ManageApSpecialistPageLocator{
    constructor(){

        // Css - Txb
        this.remark_txb_css = "[name='remarks']";
        this.group_code_txb_css = "[name='groupCode']";
        this.search_key_word_txb_css = "[type='search']";
        this.filter_group_code_tab_css = "[aria-label='Group Code Filter Input']";
        this.filter_company_code_txb_css = "[aria-label='Company Code Filter Input']";

        // Css - Other
        this.no_of_entities_in_list_css = ".ag-row-first>[col-id='noOfEntities']";
        this.company_code_in_vendor_list_css = ".ag-row-first>[col-id='companyCode']";
        this.company_name_in_vendor_list_css = ".ag-row-first>[col-id='companyName']";
        this.creator_ap_specialist_in_list_css = ".ag-row-first>[col-id='createdByName']";
        this.company_reg_number_in_vendor_list_css = ".ag-row-first>[col-id='uen']";

        // Xpath - Other
        this.group_code_in_list_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='groupCode' and contains(text(),'%s')]";
        this.ap_specialist_group_item_xpath = "//*[@class='list-group selected-items']//*[text()='%s']";
        this.delete_icon_vendor_button_xpath = "(//button[contains(@class,'MuiIconButton-sizeSmall')])[1]";
        this.manage_ap_specialist_page_title_xpath = "//h1//*[text()='Manage AP Specialist']";
        this.create_ap_specialist_page_title_xpath = "//h1//*[text()='Create New AP Specialist Grouping']";
        this.ap_specialist_details_page_title_xpath = "//h1//*[text()='AP Specialist Detail']";

        // Xpath - Ckb
        this.company_ckb_xpath = "//*[@col-id='companyCode']//*[contains(text(),'%s')]/parent::*//input[@type='checkbox']";
        
        // Xpath - Dropdown
        this.ap_specialist_group_dropdown_xpath = "//label[text()='AP Specialist Group']/parent::*/parent::*//*[@class=' css-tlfecz-indicatorContainer']";

        // Xpath - Validation
        this.validation_text_group_code_xpath = "//*[@name='groupCode']//following-sibling::*[contains(@class,'invalid-feedback')]";
    }

}export default ManageApSpecialistPageLocator