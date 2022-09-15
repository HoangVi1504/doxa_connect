class ManageProjectForeCastPageLocator{
    constructor(){
        // Css - Txb
        this.city_txb_css = "#city";
        this.state_txb_css = "#state";
        this.country_txb_css = "#country";
        this.currency_txb_css = "#currency";
        this.end_date_txb_css = "#end-date";
        this.start_date_txb_css = "#start-date";
        this.postal_code_txb_css = "#postal-cde";
        this.project_code_txb_css = "#project-code";
        this.overall_budget_txb_css = "#overall-budget";
        this.address_line_1_txb_css = "#address-first-line";
        this.address_line_2_txb_css = "#address-second-line"
        this.project_address_txb_css = "#address";
        this.erp_project_code_txb_css = "#erp";
        this.issued_po_budget_txb_css = "#issued-budget";
        this.approved_pr_budget_txb_css = "#approved-budget";

        this.filter_item_code_txb_css = "[aria-label='Item Code Filter Input']";
        this.filter_trade_code_txb_css = "[aria-label='Trade Code Filter Input']";

        // Xpath - Button
        this.add_item_code_button_xpath = "//i[@class='fa fa-book']/parent::*/parent::button";

        // Xpath - Txb
        this.project_title_txb_xpath = "//label[text()='Project Title']/following-sibling::input";
        this.project_description_txb_xpath = "//label[text()='Project Description']/following-sibling::textarea";
        this.project_code_description_txb_xpath = "//label[text()='Project Code Description']/following-sibling::textarea";

        // Xpath - Checkbox
        this.item_code_ckb_xpath = "//*[@col-id='catalogueItemCode']//*[contains(text(),'%s')]/parent::*//input[@type='checkbox']";
        this.trade_code_ckb_xpath = "//*[@col-id='tradeCode']//*[contains(text(),'%s')]/parent::*//input[@type='checkbox']";

        // Xpath - Other
        this.code_in_list_xpath = "//*[@col-id='code' and contains(text(),'%s')]";
        this.forecast_trade_page_title_xpath = "//h1//*[text()='Forecast Trade']";
    }

}export default ManageProjectForeCastPageLocator