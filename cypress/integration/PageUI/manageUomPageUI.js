class ManageUomPageLocator{
    constructor(){
        this.uom_code_txb_css = "[name='uomCode']";
        this.uom_name_txb_css = "[name='uomName']";
        this.uom_description_css = "textarea[name='description']";
        this.uom_name_in_list_css = ".ag-row-first>[col-id='uomName']";
        this.uom_description_in_list_css = ".ag-row-first>[col-id='description']";
        this.filter_uom_code_in_list_css = "[aria-label='UOM Code Filter Input']";
        this.filter_uom_name_in_list_css = "[aria-label='UOM Name Filter Input']";
        this.uom_active_status_in_list_css = ".ag-row-first>[col-id='active']";

        this.uom_code_ckb_xpath = "//*[@col-id='uomCode']//*[contains(text(),'%s')]/parent::*//input[@type='checkbox']";
        this.uom_code_in_list_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='uomCode']//*[contains(text(),'%s')]";
        this.uom_action_in_list_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='action']//*[contains(text(),'%s')]";
        this.list_uom_page_title_xpath = "//h1//*[text()='List of UOM']";
        this.uom_detail_page_title_xpath = "//h1//*[text()='UOM Details']";
        this.create_new_uom_page_title_xpath = "//h1//*[text()='Create New UOM']";
        this.activate_button_in_notification_xpath = "(//button[text()='Activate'])[3]";
        this.deactivate_button_in_notification_xpath = "(//button[text()='Deactivate'])[3]";

        this.validation_text_uom_code_xpath = "//*[@name='uomCode']//following-sibling::*[@class='invalid-feedback']";
        this.validation_text_uom_name_xpath = "//*[@name='uomName']//following-sibling::*[@class='invalid-feedback']";
    }
}export default ManageUomPageLocator