class DoPageLocator{
    constructor(){
        // Css
        this.do_number_txb_css = '[name="deliveryOrderNumber"]';
        this.delivery_date_txb_css = '[name="deliveryDate"]';
        this.do_status_in_list_css = '.ag-row-first>[col-id="status"]';
        this.filter_do_in_list_css = '[aria-label="Delivery Order No. Filter Input"]';
        this.po_number_checkbox_css = '.ag-row-first>[col-id="poNumber"]>div>div>div[ref="eCheckbox"]>div:last-of-type>input[type="checkbox"]';
        this.do_number_checkbox_css = '.ag-row-first>[col-id="doNumber"]>div>div>div[ref="eCheckbox"]>div:last-of-type>input[type="checkbox"]';
        this.quantity_to_convert_txb_css = '.ag-row-first>[col-id="qtyToConvert"]';
        this.do_status_in_create_do_list_css = '.ag-row-first>[col-id="doStatus"]';
        
        // Xpath
        this.do_number_in_do_list_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='deliveryOrderNumber' and text()='%s']";
        this.delivery_order_page_title_xpath = "//h1//*[text()='Delivery Order']";
        this.delivery_order_details_page_title_xpath = "//h1//*[text()='Delivery Order Details']";

        this.validation_text_delivery_date_xpath = "//*[@name='deliveryDate']/following-sibling::*[@class='invalid-feedback' and text()='%s']";
    }

}export default DoPageLocator