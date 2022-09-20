class GrPageLocator{
    constructor(){
        // Css
        this.gr_number_txb_css = '[name="grNumber"]';
        this.do_number_txb_css = '[name="deliveryOrderNumber"]';
        this.delivery_date_txb_css = '[name="deliveryDate"]';
        this.gr_status_in_list_css = '.ag-row-first>[col-id="grStatus"]';
        this.delivery_order_txb_css = '[name="deliveryOrderNumber"]';
        this.po_number_checkbox_css = '.ag-row-first>[col-id="poNumber"]>div>div>div[ref="eCheckbox"]>div:last-of-type>input[type="checkbox"]';
        this.approval_route_in_list_css = '.ag-row-first>[col-id="approvalRouteName"]';
        this.approval_route_dropdown_css = '[name="approvalRoute"]';
        this.item_quantity_receiving_css = ".ag-row-first>[col-id='qtyReceiving']";

        this.filter_gr_in_list_css = '[aria-label="Goods Receipt No. Filter Input"]';
        this.filter_order_processed_in_list_css = '[aria-label="Order Processed No. Filter Input"]';
        this.filter_status_in_create_gr_from_do_list_css = "[aria-label='Status Filter Input']";
        
        //Xpath
        this.gr_number_in_list_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='grNumber' and text()='%s']";
        this.gr_list_page_title_xpath = "//h1//*[text()='Receipts List']";
        this.gr_detail_page_title_xpath = "//h1//*[text()='Goods Receipt Details']";
        this.scroll_bar_in_item_table_xpath = "(//*[@class='ag-body-horizontal-scroll-viewport'])[1]";
        this.create_gr_from_po_page_title_xpath = "//h1//*[text()='Create Receipt From PO']";
        this.create_gr_from_do_page_title_xpath = "//h1//*[text()='Create Receipt From DO']";
        this.list_create_gr_from_po_page_title_xpath = "//h1//*[text()='Create Receipt From PO']";

        this.validation_text_delivery_date_xpath = "//*[@name='deliveryDate']/following-sibling::*[@class='invalid-feedback' and text()='%s']";
        this.validation_text_approval_route_xpath = "//*[@name='approvalRoute']/following-sibling::*[@class='invalid-feedback' and text()='%s']";
        this.validation_text_delivery_order_number_xpath = "//*[@name='deliveryOrderNumber']/following-sibling::*[@class='invalid-feedback' and text()='%s']";
    }

}export default GrPageLocator