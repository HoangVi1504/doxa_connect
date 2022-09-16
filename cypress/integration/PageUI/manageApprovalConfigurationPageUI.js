class ManageApprovalConfigurationPageLocator{
    constructor(){
        // Xpath - Ckb
        this.option_checkbox_xpath = "//*[text()='%s']/parent::*//input[@type='checkbox']";

        // Xpath - Other
        this.approval_configuration_title_xpath = "//h1//*[text()='Approval Configuration']";
    }
}export default ManageApprovalConfigurationPageLocator