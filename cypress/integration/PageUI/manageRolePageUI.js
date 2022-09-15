class ManageRolePageLocator{
    constructor(){
        // Css
        this.role_txb_css = '[name="role"]';
        this.role_status_in_list_css = '.ag-row-first>[col-id="status"]';
        this.filter_role_in_list_css = '[aria-label="Role Filter Input"]';
        this.filter_feature_name_css = '[aria-label="Feature Name Filter Input"]';
        this.role_creator_in_list_css = '.ag-row-first>[col-id="createdBy"]';

        // Xpath
        this.read_checkbox_xpath = "//*[@col-id='featureName' and text()='%s']/following-sibling::div//input[@name='read']";
        this.write_checkbox_xpath = "//*[@col-id='featureName' and text()='%s']/following-sibling::div//input[@name='write']";
        this.clone_role_icon_xpath = "//*[@col-id='name' and text()='%s']//following-sibling::*[@col-id='action']//a[contains(@href,'manage-roles/create-role?')]";
        this.delete_role_icon_xpath = "(//button[@style='color: red;'])[1]";
        this.role_name_in_list_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='name' and text()='%s']";
        this.approver_checkbox_xpath = "//*[@col-id='featureName' and text()='%s']/following-sibling::div//input[@name='approve']";
        this.list_role_page_title_xpath = "//h1//*[text()='List of Role']";
        this.role_detail_page_title_xpath = "//h1//*[text()='Role Details']";
        this.create_new_role_page_title_xpath = "//h1//*[text()='Create New Role']";
    }
}export default ManageRolePageLocator