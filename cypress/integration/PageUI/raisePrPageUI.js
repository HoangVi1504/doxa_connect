class RaisePrPageLocator{
    constructor(){
        this.item_code_xpath = "(//*[@col-id='itemCode'])[2]";
        this.item_name_xpath = "(//*[@col-id='itemName'])[2]";
        this.item_size_xpath = "(//*[@col-id='itemSize'])[2]";
        this.item_brand_xpath = "(//*[@col-id='itemBrand'])[2]";
        this.item_model_xpath = "(//*[@col-id='itemModel'])[2]";
        this.item_uom_code_xpath = "(//*[@col-id='uom'])[2]";
        this.item_category_xpath = "(//*[@col-id='itemCategory'])[2]";
        this.item_quantity_xpath = "(//*[@col-id='itemQuantity'])[2]";
        this.item_currency_xpath = "(//*[@col-id='sourceCurrency'])[2]";
        this.item_description_xpath = "(//*[@col-id='itemDescription'])[2]";
        this.item_delete_button_xpath = "(//button[contains(@class,'MuiIconButton')])[1]";

        this.raise_pr_page_title_xpath = "//h1/*[text()='Raise Requisition']";
        this.pr_title_in_pr_list_xpath = "(//*[@role='rowgroup'])[2]/div[@role='row'][1]//*[@col-id='prTitle' and text()='%s']";
        this.pr_detail_page_title_xpath = "//h1/*[text()='Purchase Request Details']"; 
        this.pr_status_in_pr_list_xpath = "(//*[@role='rowgroup'])[2]/div[@role='row'][1]//*[@col-id='prStatus' and text()='%s']";
        this.requester_in_pr_list_xpath = "(//*[@role='rowgroup'])[2]/div[@role='row'][1]//*[@col-id='requestorName' and text()='%s']";
        this.approval_route_in_pr_list_xpath = "(//*[@role='rowgroup'])[2]/div[@role='row'][1]//*[@col-id='approvalRouteName' and text()='%s']";
        this.procurement_type_in_pr_list_xpath = "(//*[@role='rowgroup'])[2]/div[@role='row'][1]//*[@col-id='procurementType']/*[text()='%s']";
        this.scroll_bar_in_item_table_xpath = "(//*[@class='ag-body-horizontal-scroll-viewport'])[1]";

        this.validation_text_ppr_title_xpath = "//*[@name='prTitle']/following-sibling::*[text()='%s']";
        this.validation_text_approval_route_xpath = "//*[@name='approvalRoute']/following-sibling::*[text()='%s']";
        this.validation_text_delivery_date_xpath = "//*[@name='deliveryDate']/following-sibling::*[text()='%s']";
        this.validation_text_requisition_type_xpath = "//*[@name='requisitionType']/following-sibling::*[text()='%s']";
        this.validation_text_delivery_address_xpath = "//*[@name='deliveryAddress']/following-sibling::*[text()='%s']";
        this.validation_text_procurement_type_xpath = "//*[@name='procurementType']/following-sibling::*[text()='%s']";   
    }

}export default RaisePrPageLocator