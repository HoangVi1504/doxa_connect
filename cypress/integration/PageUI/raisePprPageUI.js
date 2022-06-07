class RaisePprPageLocator{
    constructor(){
        this.raise_ppr_page_title_xpath = "//h1[text()='Raise Pre-Requisition']";
        this.ppr_detail_page_title_xpath = "//h1[text()='Pre-Requisition Details']";  
        this.scroll_bar_in_item_table_xpath = "(//*[@class='ag-body-horizontal-scroll-viewport'])[1]";

        this.item_code_xpath = "(//*[@col-id='itemCode'])[2]";
        this.item_name_xpath = "(//*[@col-id='itemName'])[2]";
        this.item_size_xpath = "(//*[@col-id='itemSize'])[2]";
        this.item_brand_xpath = "(//*[@col-id='itemBrand'])[2]";
        this.item_model_xpath = "(//*[@col-id='itemModel'])[2]";
        this.item_uom_code_xpath = "(//*[@col-id='uomCode'])[2]";
        this.item_category_xpath = "(//*[@col-id='itemCategory'])[2]";
        this.item_category_xpath = "(//*[@col-id='itemCategory'])[2]";
        this.item_quantity_xpath = "(//*[@col-id='quantity'])[2]";
        this.item_currency_xpath = "(//*[@col-id='sourceCurrency'])[2]";
        this.item_description_xpath = "(//*[@col-id='itemDescription'])[2]";
        this.item_delete_button_xpath = "(//button[contains(@class,'MuiIconButton')])[1]";

        this.ppr_title_in_ppr_list_xpath = "//*[@col-id='pprTitle' and text()='%s']";
        this.requester_in_ppr_list_xpath = "//*[@col-id='requesterName' and text()='%s']";
        this.ppr_status_in_ppr_list_xpath = "//*[@col-id='status' and text()='%s']";
        this.approval_route_in_ppr_list_xpath = "//*[@col-id='approvalCode' and text()='%s']";
        this.procurement_type_in_ppr_list_xpath = "//*[@col-id='procurementType' and text()='%s']";

        this.validation_text_ppr_title_xpath = "//*[@name='pprTitle']/following-sibling::*[text()='%s']";
        this.validation_text_currency_code_xpath = "//*[@name='currencyCode']/following-sibling::*[text()='%s']";
        this.validation_text_delivery_date_xpath = "//*[@name='deliveryDate']/following-sibling::*[text()='%s']";
        this.validation_text_approval_route_xpath = "//*[@name='approvalRoute']/following-sibling::*[text()='%s']";
        this.validation_text_requisition_type_xpath = "//*[@name='requisitionType']/following-sibling::*[text()='%s']";
        this.validation_text_delivery_address_xpath = "//*[@name='deliveryAddress']/following-sibling::*[text()='%s']";
        this.validation_text_procurement_type_xpath = "//*[@name='procurementType']/following-sibling::*[text()='%s']";   
    }

}export default RaisePprPageLocator