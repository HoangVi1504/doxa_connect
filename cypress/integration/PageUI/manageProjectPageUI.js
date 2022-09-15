class ManageProjectPageLocator{
    constructor(){
        // Css - Txb
        this.city_txb_css = "[name='city']";
        this.state_txb_css = "[name='state']";
        this.country_txb_css = "[name='country']";
        this.end_date_txb_css = "[name='endDate']";
        this.currency_txb_css = "[name='currency']";
        this.start_date_txb_css = "[name='startDate']";
        this.postal_code_txb_css = "[name='postalCode']";
        this.project_code_txb_css = "[name='projectCode']";
        this.project_title_txb_css = "[name='projectTitle']";
        this.overall_budget_txb_css = "[name='overallBudget']";
        this.address_line_1_txb_css = "[name='addressFirstLine']";
        this.address_line_2_txb_css = "[name='addressSecondLine']";
        this.issued_po_budget_txb_css = "[name='issuedPoBudget']";
        this.erp_project_code_txb_css = "[name='erpProjectCode']";
        this.approved_pr_budget_txb_css = "[name='approvedPrBudget']";
        this.project_description_txb_css = "[name='projectDescription']";
        this.project_admin_remark_txb_css = "[name='projectAdminRemarks']";
        this.project_code_description_txb_css = "[name='projectCodeDescription']";
        this.project_in_charge_remark_txb_css = "[name='projectInChargeRemarks']";
        this.project_team_member_remark_txb_css = "[name='projectTeamMemberRemarks']";
        
        this.filter_currency_txb_css = "[aria-label='Currency Filter Input']";
        this.filter_project_code_txb_css = "[aria-label='Project Code Filter Input']";
        this.filter_project_title_txb_css = "[aria-label='Project Title Filter Input']";
        this.filter_overall_budget_txb_css = "[aria-label='Overall Budget Filter Input']";

        // Css - Other
        this.end_date_in_list_css = ".ag-row-first>[col-id='endDate']";
        this.currency_in_list_css = ".ag-row-first>[col-id='currency']";
        this.start_date_in_list_css = ".ag-row-first>[col-id='startDate']";
        this.project_title_in_list_css = ".ag-row-first>[col-id='projectTitle']";
        this.project_admin_in_list_css = ".ag-row-first>[col-id='projectAdmin']";
        this.overall_budget_in_list_css = ".ag-row-first>[col-id='overallBudget']";
        this.project_status_in_list_css = ".ag-row-first>[col-id='projectStatus']";
        this.creator_project_in_list_css = ".ag-row-first>[col-id='createdBy']";
        this.project_description_in_list_css = ".ag-row-first>[col-id='projectDescription']";

        // Xpath - Dropdown
        this.currency_dropdown_xpath = "//label[text()='Currency']/parent::*/following-sibling::*//*[@class=' css-tlfecz-indicatorContainer']";
        this.project_admin_dropdown_xpath = "//*[text()='Project Admin']/parent::*/parent::*//*[@class=' css-tlfecz-indicatorContainer']";
        this.project_address_dropdown_xpath = "//label[text()='Project Address']/parent::*/following-sibling::*//*[@class=' css-tlfecz-indicatorContainer']";
        this.project_team_member_dropdown_xpath = "//*[text()='Project Team Members']/parent::*/parent::*//*[@class=' css-tlfecz-indicatorContainer']";
        this.overall_project_in_charge_dropdown_xpath = "//*[text()='Overall Project In-Charge']/parent::*/parent::*//*[@class=' css-tlfecz-indicatorContainer']";

        // Xpath - Txb
        this.search_project_admin_txb_xpath = "//*[text()='Project Admin']/parent::*/parent::*//input";
        this.search_project_team_member_txb_xpath = "//*[text()='Project Team Members']/parent::*/parent::*//input";
        this.search_overall_project_in_charge_txb_xpath = "//*[text()='Overall Project In-Charge']/parent::*/parent::*//input";

        // Xpath - Other
        this.list_project_title_xpath = "//h1//*[text()='List of Project']";
        this.project_code_in_list_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='projectCode' and contains(text(),'%s')]";
        this.option_value_in_dropdown_xpath = "//*[contains(@class,'MenuList')]//*[text()='%s']";
        this.project_detail_page_title_xpath = "//h1//*[text()='Project Details']";
        this.create_project_page_title_xpath = "//h1//*[text()='Create New Project']";
        this.list_project_forecast_title_xpath = "//h1//*[text()='List of Project Forecast']";

        // Xpath -validation
        this.validation_text_end_date_xpath = "//*[@name='endDate']//following-sibling::*[contains(@class,'invalid-feedback')]";
        this.validation_text_start_date_xpath = "//*[@name='startDate']//following-sibling::*[contains(@class,'invalid-feedback')]";
        this.validation_text_project_code_xpath = "//*[@name='projectCode']//following-sibling::*[@class='invalid-feedback']";
        this.validation_text_overall_budge_xpath = "//*[@name='overallBudget']//following-sibling::*[contains(@class,'invalid-feedback')]";
        this.validation_text_project_title_xpath = "//*[@name='projectTitle']//following-sibling::*[contains(@class,'invalid-feedback')]";
        this.validation_text_project_description_xpath = "//*[@name='projectDescription']//following-sibling::*[contains(@class,'invalid-feedback')]";

    }

}export default ManageProjectPageLocator