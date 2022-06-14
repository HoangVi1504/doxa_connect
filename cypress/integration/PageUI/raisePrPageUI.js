class RaisePrPageLocator{
    constructor(){
        // CSS
        this.note_txb_css = '[name="note"]';
        this.pr_title_txb_css = '[name="prTitle"]';
        this.filter_pr_txb_css = '[aria-label="Purchase Request Title Filter Input"]';
        this.delivery_date_txb_css = '[name="deliveryDate"]';
        this.search_catalogue_txb_css = '[type="search"]';
        this.send_back_reason_txb_css = '[name="sendBackReason"]';

        this.filter_uom_in_table_css = '[aria-label="UOM Filter Input"]';
        this.filter_size_in_table_css = '[aria-label="Size Filter Input"]';
        this.filter_trade_in_table_css = '[aria-label="Trade Filter Input"]';
        this.filter_branch_in_table_css = '[aria-label="Brand Filter Input"]';
        this.filter_supplier_in_table_css = '[aria-label="Supplier Filter Input"]';
        this.filter_category_in_table_css = '[aria-label="Category Filter Input"]';
        this.filter_unit_price_in_table_css = '[aria-label="Unit Price Filter Input"]';
        this.filter_price_type_in_table_css = '[aria-label="Price Type Filter Input"]';
        this.filter_tax_code_in_table_css = '[aria-label="Tax Code Filter Input"]';
        this.filter_tax_percentage_in_table_css = '[aria-label="Tax Percentage Filter Input"]';
        this.filter_uom_forecasted_in_table_css = '[aria-label="UOM (Forecast) Filter Input"]';
        this.filter_approval_route_in_table_css = '[aria-label="Approval Route Filter Input"]';
        this.filter_source_currency_code_in_table_css = '[aria-label="In Source Currency (Before Tax) Filter Input"]';
        this.filter_unit_price_forecasted_in_table_css = '[aria-label="Unit Price (Forecasted) Filter Input"]';

        this.project_code_dropdown_css = '[name="projectCode"]';
        this.currency_code_dropdown_css = '[name="currencyCode"]';
        this.approval_route_dropdown_css = '[name="approvalRouteUuid"]';
        this.delivery_address_dropdown_css = '[name="deliveryAddress"]';
        this.requisition_type_dropdown_css = '[name="requisitionType"]';
        this.procurement_type_dropdown_css = '[name="procurementType"]';
        this.nature_requisition_dropdown_css = '[name="project"]';
        
        // Xpath
        this.item_code_xpath = "(//*[@col-id='itemCode'])[2]";
        this.item_name_xpath = "(//*[@col-id='itemName'])[2]";
        this.item_size_xpath = "(//*[@col-id='itemSize'])[2]";
        this.item_brand_xpath = "(//*[@col-id='itemBrand'])[2]";
        this.item_model_xpath = "(//*[@col-id='itemModel'])[2]";
        this.item_supplier_xpath = "(//*[@col-id='supplierUuid'])[2]";
        this.item_uom_code_xpath = "(//*[@col-id='uom'])[2]";
        this.item_category_xpath = "(//*[@col-id='itemCategory'])[2]";
        this.item_quantity_xpath = "(//*[@col-id='itemQuantity'])[2]";
        this.item_currency_xpath = "(//*[@col-id='sourceCurrency'])[2]";
        this.item_unit_price_xpath = "(//*[@col-id='itemUnitPrice'])[2]";
        this.item_description_xpath = "(//*[@col-id='itemDescription'])[2]";
        this.item_exchange_rate_xpath = "(//*[@col-id='exchangeRate'])[2]";
        this.item_delete_button_xpath = "(//button[contains(@class,'MuiIconButton')])[1]";
        this.option_item_from_dropdown_xpath = "//*[contains(@class,'MenuList')]//*[contains(@class,'option') and text()='%s']";
        this.item_search_currency_code_txb_xpath = "//input[@aria-autocomplete ='list']";

        this.notification_pr_xpath = "//*[@class='modal-content']//*[text()='%s']";
        this.reject_pr_button_xpath = "(//button[text()='Reject'])[2]";
        this.send_back_button_xpath = "(//button[text()='Send Back'])[2]";
        this.raise_pr_page_title_xpath = "//h1/*[text()='Raise Requisition']";
        this.pr_title_in_pr_list_xpath = "(//*[@role='rowgroup'])[2]/div[@role='row'][1]//*[@col-id='prTitle' and text()='%s']";
        this.pr_detail_page_title_xpath = "//h1/*[text()='Purchase Request Details']"; 
        this.pr_status_in_pr_list_xpath = "(//*[@role='rowgroup'])[2]/div[@role='row'][1]//*[@col-id='prStatus' and text()='%s']";
        this.requester_in_pr_list_xpath = "(//*[@role='rowgroup'])[2]/div[@role='row'][1]//*[@col-id='requestorName' and text()='%s']";
        this.scroll_bar_in_item_table_xpath = "(//*[@class='ag-body-horizontal-scroll-viewport'])[1]";
        this.approval_route_in_pr_list_xpath = "(//*[@role='rowgroup'])[2]/div[@role='row'][1]//*[@col-id='approvalRouteName' and text()='%s']";
        this.procurement_type_in_pr_list_xpath = "(//*[@role='rowgroup'])[2]/div[@role='row'][1]//*[@col-id='procurementType']/*[text()='%s']";

        this.validation_text_pr_title_xpath = "//*[@name='prTitle']/following-sibling::*[text()='%s']";
        this.validation_text_delivery_date_xpath = "//*[@name='deliveryDate']/following-sibling::*[text()='%s']";
        this.validation_text_approval_route_xpath = "//*[@name='approvalRouteUuid']/following-sibling::*[text()='%s']";
        this.validation_text_requisition_type_xpath = "//*[@name='requisitionType']/following-sibling::*[text()='%s']";
        this.validation_text_delivery_address_xpath = "//*[@name='deliveryAddress']/following-sibling::*[text()='%s']";
        this.validation_text_procurement_type_xpath = "//*[@name='procurementType']/following-sibling::*[text()='%s']";   
    }

}export default RaisePrPageLocator