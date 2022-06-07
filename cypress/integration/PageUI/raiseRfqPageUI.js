class RaiseRFQPageLocator{
    constructor(){
        this.raise_rfq_page_title_xpath = "//*[text()='Raise a Request for Quotation']";
        this.rfq_title_in_rfq_list_xpath = "(//*[@role='rowgroup'])[2]//*[@role='row'][1]//*[@col-id='rfqTitle' and text()='%s']";
        this.rfq_status_in_rfq_list_xpath = "//*[@col-id='rfqStatus' and text()='%s']";
        this.scroll_bar_in_item_table_xpath = "(//*[@class='ag-body-horizontal-scroll-viewport'])[1]";

        this.uom_xpath = "(//*[@col-id='uom'])[2]";
        this.item_code_xpath = "(//*[@col-id='itemCode'])[2]";
        this.item_name_xpath = "(//*[@col-id='itemName'])[2]";
        this.item_size_xpath = "(//*[@col-id='itemSize'])[2]";
        this.item_brand_xpath = "(//*[@col-id='itemBrand'])[2]";
        this.item_model_xpath = "(//*[@col-id='itemModel'])[2]";
        this.item_quantity_xpath = "(//*[@col-id='itemQuantity'])[2]";
        this.item_currency_xpath = "(//*[@col-id='sourceCurrency'])[2]";
        this.item_unit_price_xpath = "(//*[@col-id='itemUnitPrice'])[2]";
        this.item_description_xpath = "(//*[@col-id='itemDescription'])[2]";
        this.item_delete_button_xpath = "(//button[contains(@class,'MuiIconButton')])[1]";

        this.validation_text_vendors_xpath = "//*[@name='vendors']//following-sibling::*[text()='%s']";
        this.validation_text_rfq_type_xpath = "//*[@name='rfqType']//following-sibling::*[text()='%s']";
        this.validation_text_due_date_xpath = "//*[@name='dueDate' and text()='%s']";
        this.validation_text_rfq_title_xpath = "//*[@name='rfqTitle']//following-sibling::*[text()='%s']";
        this.validation_text_currency_code_xpath = "//*[@name='currencyCode']/following-sibling::*[text()='%s']";
        this.validation_text_delivery_date_xpath = "//*[@name='deliveryDate']/following-sibling::*[text()='%s']";
        this.validation_text_delivery_address_xpath = "//*[@name='deliveryAddress']/following-sibling::*[text()='%s']";
        this.validation_text_procurement_type_xpath = "//*[@name='procurementType']/following-sibling::*[text()='%s']"; 
    }

}export default RaiseRFQPageLocator