class ManageTradeCodePageLocator{
    constructor(){
        this.trade_code_txb_css = "[name='tradeCode']";
        this.trade_title_txb_css = "[name='tradeTitle']";
        this.trade_title_in_list_css = ".ag-row-first>[col-id='tradeTitle']";
        this.trade_description_txb_css = "textarea[name='tradeDescription']";
        this.trade_description_in_list_css = ".ag-row-first>[col-id='description']";
        this.filter_trade_code_in_list_css = "[aria-label='Trade Code Filter Input']";
        this.filter_created_on_in_list_css = "[aria-label='Created On Filter Input']";
        this.creator_trade_code_in_list_css = ".ag-row-first>[col-id='createdBy']";
        this.filter_trade_title_in_list_css = "[aria-label='Trade Title Filter Input']";
        this.trade_code_active_status_in_list_css = ".ag-row-first>[col-id='active']";
        this.filter_trade_code_active_in_list_css = "[aria-label='Is Active Filter Input']";
        
        this.trade_code_ckb_xpath = "//*[@col-id='tradeCode']//*[contains(text(),'%s')]/parent::*//input[@type='checkbox']";
        this.trade_code_in_list_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='tradeCode']//*[contains(text(),'%s')]";
        this.trade_code_action_in_list_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='action']//*[contains(text(),'%s')]";
        this.list_trade_code_page_title_xpath = "//h1//*[text()='List of Trade Code']";
        this.create_trade_code_page_title_xpath = "//h1//*[text()='Create New Trade Code']";
        this.scroll_bar_in_trade_code_list_xpath = "//*[@class='ag-body-horizontal-scroll-viewport']";
        this.trade_code_details_page_title_xpath = "//h1//*[text()='Trade Code Details']";
        this.activate_button_in_notification_xpath = "(//button[text()='Activate'])[2]";
        this.deactivate_button_in_notification_xpath = "(//button[text()='Deactivate'])[2]";

        this.validation_text_trade_code_xpath = "//*[@name='tradeCode']//following-sibling::*[@class='invalid-feedback']";
        this.validation_text_trade_title_xpath = "//*[@name='tradeTitle']//following-sibling::*[@class='invalid-feedback']";
    }

}export default ManageTradeCodePageLocator