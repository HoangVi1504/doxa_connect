class ManageApprovalGroupPageLocator{
    constructor(){
        // Css - Txb
        this.group_description_txb_css = "[name='groupDescription']";
        this.approval_group_name_txb_css = "[name='groupName']";

        this.filter_approval_group_name_txb_css = "[aria-label='Approval Group Name Filter Input']";

        // Css - Other
        this.creator_in_list_css = ".ag-row-first>[col-id='createdByName']";
        this.approver_in_list_css = ".ag-row-first>[col-id='groupUserList']>*";
        this.group_description_in_list_css = ".ag-row-first>[col-id='groupDescription']";
        this.approval_group_active_status_in_list_css = ".ag-row-first>[col-id='active']";
        
        // Xpath - Button
        this.close_approver_button_xpath = "//*[contains(@class,'list-group-item') and text()='%s']//*[contains(@class,'close-button')]";
        this.activate_notification_button_xpath = "//*[@class='modal-dialog']//button[text()='Activate']";
        this.deactivate_notification_button_xpath = "//*[@class='modal-dialog']//button[text()='Deactivate']";

        // Xpath - Dropdown
        this.approver_dropdown_xpath = "//label[text()='Approvers']/parent::*//*[@class=' css-tlfecz-indicatorContainer']";

        // Xpath - Checkbox
        this.approval_group_name_ckb_xpath = "//*[@col-id='groupName']//*[contains(text(),'%s')]/parent::*//input[@type='checkbox']";

        // Xpath - Other
        this.approval_group_name_in_list_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='groupName']//*[contains(text(),'%s')]";
        this.action_approval_group_in_list_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='action']//*[contains(text(),'%s')]";
        this.list_approval_group_page_title_xpath = "//h1//*[text()='List of Approval Group']";
        this.create_approval_group_page_title_xpath = "//h1//*[text()='Create New Approval Group']";
        this.approval_group_details_page_title_xpath = "//h1//*[text()='Approval Group Details']";
        this.scroll_bar_in_approval_group_list_xpath = "//*[@class='ag-body-horizontal-scroll-viewport']";

        // Xpath - Validation
        this.validation_text_approval_group_name_xpath = "//*[@name='groupName']//following-sibling::*[contains(@class,'invalid-feedback')]";
    }
}export default ManageApprovalGroupPageLocator