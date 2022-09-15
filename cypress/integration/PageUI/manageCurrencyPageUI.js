class ManageCurrencyPageLocator{
    constructor(){
        // Css - Ckb
        this.default_currency_ckb_css = "[name='defaultCurrency']";

        // Css - Txb
        this.currency_code_txb_css = "[name='currencyCode']";
        this.currency_name_txb_css = "[name='currencyName']";
        this.exchange_rate_txb_css = "[name='exchangeRate']";
        this.filter_currency_name_txb_css = "[aria-label='Currency Name Filter Input']";
        this.filter_currency_code_txb_css = "[aria-label='Currency Code Filter Input']";

        // Css - Other
        this.currency_name_in_list_css = ".ag-row-first>[col-id='currencyName']";
        this.exchange_rate_in_list_css = ".ag-row-first>[col-id='exchangeRate']";
        this.active_currency_status_in_list_css = ".ag-row-first>[col-id='active']";
        this.default_currency_status_in_list_css = ".ag-row-first>[col-id='defaultCurrency']";

        // Xpath - Ckb
        this.currency_code_ckb_in_list_xpath = "//*[@col-id='currencyCode']//*[contains(text(),'%s')]/parent::*//input[@type='checkbox']";

        // Xpath - Button
        this.activate_notification_button_xpath = "//*[@class='modal-dialog']//button[text()='Activate']";
        this.deactivate_notification_button_xpath = "//*[@class='modal-dialog']//button[text()='Deactivate']";

        // Xpath - Other
        this.scroll_bar_in_list_xpath = "//*[@class='ag-body-horizontal-scroll-viewport']";
        this.currency_code_in_list_xpath = "//*[@col-id='currencyCode']//*[contains(text(),'%s')]";
        this.action_currency_in_list_xpath = "//*[@col-id='action']//*[contains(text(),'%s')]";
        this.currency_detail_page_title_xpath = "//h1//*[contains(text(),'Currency Details')]";
        this.list_of_currency_page_title_xpath = "//h1//*[text()='List of Currency']";
    }

}export default ManageCurrencyPageLocator