class ManageCataloguePageLocator{
    constructor(){
        // Css - Txb
        this.size_txb_css = "[name='itemSize']";
        this.brand_txb_css = "[name='itemBrand']";
        this.model_txb_css = "[name='itemModel']";
        this.valid_to_txb_css = "[name='validTo']";
        this.item_name_txb_css = "[name='catalogueItemName']";
        this.item_code_txb_css = "[name='catalogueItemCode']";
        this.valid_from_txb_css = "[name='validFrom']";
        this.description_txb_css = "textarea[name='description']";
        this.latest_price_txb_css = "[name='unitPrice']";
        this.contracted_price_txb_css = "[name='contractedPrice']";
        this.contract_reference_txb_css = "[name='contractedRefNo']";
        this.contracted_quantity_txb_css = "[name='contractedQty']";

        this.filter_item_name_txb_css = "[aria-label='Item Name Filter Input']";
        this.filter_item_code_txb_css = "[aria-label='Item Code Filter Input']";

        // Css - Dropdown
        this.category_dropdown_css = "[name='itemCategory']";
        this.uom_code_dropdown_css = "[name='uomCode']";

        // Css - Other
        this.uom_in_list_css = ".ag-row-first>[col-id='uomCode']";
        this.size_in_list_css = ".ag-row-first>[col-id='itemSize']";
        this.brand_in_list_css = ".ag-row-first>[col-id='itemBrand']";
        this.model_in_list_css = ".ag-row-first>[col-id='itemModel']";
        this.tax_code_in_list_css = ".ag-row-first>[col-id='taxCode']";
        this.category_in_list_css = ".ag-row-first>[col-id='itemCategory']";
        this.unit_price_in_list_css = ".ag-row-first>[col-id='unitPrice']";
        this.project_code_in_list_css = ".ag-row-first>[col-id='projectCodes']";
        this.active_status_in_list_css = ".ag-row-first>[col-id='isActive']";
        this.supplier_code_in_list_css = ".ag-row-first>[col-id='supplierCode']";
        this.supplier_name_in_list_css = ".ag-row-first>[col-id='supplierName']";
        this.item_description_in_list_css = ".ag-row-first>[col-id='description']";
        this.contracted_price_in_list_css = ".ag-row-first>[col-id='contractedPrice']";
        this.contracted_status_in_list_css = ".ag-row-first>[col-id='contracted']";
        this.contracted_quantity_in_list_css = ".ag-row-first>[col-id='contractedQty']";
        this.contract_reference_number_in_list_css = ".ag-row-first>[col-id='contractedRefNo']";

        // Xpath - Checkbox
        this.contracted_ckb_xpath = "//label[contains(text(),'Contracted Item')]/parent::*//input[@type='checkbox']";
        this.item_code_ckb_in_list_xpath = "//*[@col-id='catalogueItemCode']//*[contains(text(),'%s')]/parent::*//input[@type='checkbox']";

        // Xpath - Button
        this.delete_notification_button_xpath = "//*[@class='modal-dialog']//button[text()='Delete']";
        this.activate_notification_button_xpath = "//*[@class='modal-dialog']//button[text()='Activate']";
        this.deactivate_notification_button_xpath = "//*[@class='modal-dialog']//button[text()='Deactivate']";

        // Xpath - Dropdown
        this.project_dropdown_xpath = "//label[text()='Project']/parent::*//*[@class=' css-tlfecz-indicatorContainer']";
        this.currency_dropdown_xpath = "//label[text()='Currency']/parent::*//*[@class=' css-tlfecz-indicatorContainer']";
        this.tax_code_dropdown_xpath = "//label[text()='Tax Code']/parent::*//*[@class=' css-tlfecz-indicatorContainer']";
        this.gl_account_dropdown_xpath = "//label[text()='G/L Account']/parent::*//*[@class=' css-tlfecz-indicatorContainer']";
        this.supplier_code_dropdown_xpath = "//label[text()='Supplier Code']/parent::*//*[@class=' css-tlfecz-indicatorContainer']";

        // Xpath - Other
        this.scroll_bar_xpath = "(//*[@class='ag-body-horizontal-scroll-viewport'])[1]";
        this.item_code_in_list_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='catalogueItemCode']//*[contains(text(),'%s')]";
        this.item_name_in_list_xpath = "(//*[contains(@class,'ag-row-first')]//*[@col-id='catalogueItemName' and contains(text(),'%s')])[1]";
        this.action_catalogue_in_list_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='action']//*[contains(text(),'%s')]";
        this.create_catalogue_page_title_xpath = "//h1//*[text()='Create Catalogue Item']";
        this.list_of_catalogue_page_title_xpath = "//h1//*[text()='List of Catalogue']";
        this.catalogue_details_page_title_xpath = "//h1//*[text()='Catalogue Details']";

        // Xpath - Validation
        this.validation_text_uom_xpath = "//*[@name='uomCode']//following-sibling::*[contains(@class,'invalid-feedback')]";
        this.validation_text_valid_to_xpath = "//*[@name='validTo']//following-sibling::*[contains(@class,'invalid-feedback')]";
        this.validation_text_category_xpath = "//*[@name='itemCategory']//following-sibling::*[contains(@class,'invalid-feedback')]";
        this.validation_text_item_code_xpath = "//*[@name='catalogueItemCode']//following-sibling::*[contains(@class,'invalid-feedback')]";
        this.validation_text_item_name_xpath = "//*[@name='catalogueItemName']//following-sibling::*[contains(@class,'invalid-feedback')]";
        this.validation_text_valid_from_xpath = "//*[@name='validFrom']//following-sibling::*[contains(@class,'invalid-feedback')]";
        this.validation_text_latest_price_xpath = "//*[@name='unitPrice']//following-sibling::*[contains(@class,'invalid-feedback')]";
        this.validation_text_contracted_price_xpath = "//*[@name='contractedPrice']//following-sibling::*[contains(@class,'invalid-feedback')]";
        this.validation_text_contract_reference_number_xpath = "//*[@name='contractedRefNo']//following-sibling::*[contains(@class,'invalid-feedback')]";
    }
}export default ManageCataloguePageLocator