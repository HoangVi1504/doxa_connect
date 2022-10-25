class ManageFeatureMatrixPageLocator{
    constructor(){
        // Css- Txb
        this.filter_feature_name_css = "[aria-label='Feature Name Filter Input']";

        // Xpath - Dropdown
        this.select_user_dropdown_xpath = "(//*[@class=' css-tlfecz-indicatorContainer'])[1]";
        this.select_module_dropdown_xpath = "(//*[@class=' css-tlfecz-indicatorContainer'])[2]";

        // Xpath - Checkbox
        this.read_ckb_feature_xpath = "//*[@col-id='feature.featureName' and text()='%s']/parent::*//input[@name='read']";
        this.write_ckb_feature_xpath = "//*[@col-id='feature.featureName' and text()='%s']/parent::*//input[@name='write']";
        this.approve_ckb_feature_xpath = "//*[@col-id='feature.featureName' and text()='%s']/parent::*//input[@name='approve']";

        // Xpath - Other
        this.user_name_xpath = "//label[text()='User Name']/parent::*/parent::*//*[text()='%s']";
        this.email_user_xpath = "//label[text()='Email']/parent::*/parent::*//*[text()='%s']";
        this.designation_user_xpath = "//label[text()='Designation']/parent::*/parent::*//*[text()='%s']";
        this.manage_feature_matrix_page_title_xpath = "//h1//*[text()='Manage Feature Matrix']";
    }

}export default ManageFeatureMatrixPageLocator