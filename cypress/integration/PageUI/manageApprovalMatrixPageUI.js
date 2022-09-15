class ManageApprovalMatrixPageLocator{
    constructor(){
        // Css - Dropdown
        this.approval_level_dropdown_css = "[name='approvalLevel']";

        // Css - Txb
        this.approval_code_txb_css = "[name='approvalCode']";
        this.approval_name_txb_css = "[name='approvalName']";

        this.filter_approval_code_txb_css = "[aria-label='Approval Code Filter Input']";
        this.filter_approval_name_txb_css = "[aria-label='Approval Name Filter Input']";

        // Css- Other
        this.approval_name_in_list_css = ".ag-row-first>[col-id='approvalName']";
        this.approval_status_in_list_css = ".ag-row-first>[col-id='active']";
        this.approval_matrix_in_list_css = ".ag-row-first>[col-id='approvalMatrixFor']";
        this.creator_approval_in_list_css = ".ag-row-first>[col-id='createdByName']";
        this.number_approval_level_in_list_css = ".ag-row-first>[col-id='noOfApprovalLevels']";

        // Xpath - Dropdown
        this.approval_matrix_dropdown_xpath = "//label[text()='Approval Matrix For']//parent::*/parent::*//*[@class=' css-tlfecz-indicatorContainer']";
        this.assigned_approvers_dropdown_xpath = "(//*[text()='Assigned Approvers']/parent::*/parent::*/parent::*//*[@class=' css-tlfecz-indicatorContainer'])[%s]";
        
        // Xpath - Txb
        this.option_range_to_txb_xpath = `//input[@name='approvalRange.${'%s'}.rangeTo']`
        this.option_range_from_txb_xpath = `//input[@name='approvalRange.${'%s'}.rangeFrom']`;
        this.search_assigned_approvers_txb_xpath = "(//*[text()='Assigned Approvers']/parent::*/parent::*/parent::*//*[@class=' css-g1d714-ValueContainer'])[%s]//input";

        // Xpath - Checkbox
        this.approval_code_ckb_in_list_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='approvalCode']//*[contains(text(),'%s')]/parent::*//input[@type='checkbox']";
        this.option_value_criteria_ckb_xpath = `//input[@id='approvalRange.${'%s'}.valueCriteria']`;

        // Xpath - Button
        this.activate_notification_button_xpath = "//*[@class='modal-dialog']//button[text()='Activate']";
        this.deactivate_notification_button_xpath = "//*[@class='modal-dialog']//button[text()='Deactivate']";
        
        // Xpath - Other
        this.option_tab_xpath = "(//*[@class='nav nav nav-tabs']//a[text()='%s'])[%s]";
        this.list_approval_page_title_xpath = "//h1//*[text()='List of Approval']";
        this.create_approval_page_title_xpath = "//h1//*[text()='Create New Approval']";
        this.approval_details_page_title_xpath = "//h1//*[text()='Approval Details']";

        this.approval_code_in_list_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='approvalCode']//*[contains(text(),'%s')]";
        this.approval_action_in_list_xpath = "//*[@col-id='approvalCode']//*[contains(text(),'%s')]/parent::*/parent::*//following-sibling::*[@col-id='action']//*[contains(text(),'%s')]";

        // Xpath - Validation
        this.validation_text_approval_code_xpath = "//*[@name='approvalCode']//following-sibling::*[contains(@class,'invalid-feedback')]";
        this.validation_text_approval_name_xpath = "//*[@name='approvalName']//following-sibling::*[contains(@class,'invalid-feedback')]";
        this.validation_text_approval_level_xpath = "//*[@name='approvalLevel']//following-sibling::*[contains(@class,'invalid-feedback')]";
    }
}export default ManageApprovalMatrixPageLocator