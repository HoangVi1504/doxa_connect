class ManageCategoryPageLocator{
    constructor(){
        // Css - Txb
        this.category_name_txb_css = "[name='categoryName']";
        this.category_description_txb_css = "[name='categoryDescription']";
        this.filter_category_name_txb_css = "[aria-label='Category Name Filter Input']";
        
        // Css - Other
        this.category_description_in_list_css = ".ag-row-first>[col-id='categoryDescription']";
        this.active_category_status_in_list_css = ".ag-row-first>[col-id='active']";

        // Xpath - Txb
        this.delete_notification_button_xpath = "//*[@class='modal-dialog']//button[text()='Delete']";
        this.activate_notification_button_xpath = "//*[@class='modal-dialog']//button[text()='Activate']";
        this.deactivate_notification_button_xpath = "//*[@class='modal-dialog']//button[text()='Deactivate']";

        // Xpath - Ckb
        this.category_name_ckb_xpath = "//*[@col-id='categoryName']//*[contains(text(),'%s')]/parent::*//input[@type='checkbox']";
        this.all_category_name_ckb_in_list_xpath = "(//*[@col-id='categoryName']//input[@type='checkbox'])[1]";

        // Xpath - Other
        this.category_name_in_list_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='categoryName']//*[contains(text(),'%s')]";
        this.action_category_in_list_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='action']//*[contains(text(),'%s')]";
        this.list_category_page_title_xpath = "//h1//*[text()='List of Category']";
        this.create_category_page_title_xpath = "//h1//*[text()='Create New Category']";
        this.category_details_page_title_xpath = "//h1//*[text()='Category Details']";

        // Xpath - Validation
        this.validation_text_category_name_xpath = "//*[@name='categoryName']//following-sibling::*[contains(@class,'invalid-feedback')]";
    }

}export default ManageCategoryPageLocator