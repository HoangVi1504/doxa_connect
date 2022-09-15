class ManageDocumentPrefixPageLocator{
    constructor(){
        // Css - Txb
        this.prefix_txb_css = "[name='prefix']";
        this.function_name_txb_css = "[name='functionName']";
        this.filter_function_txb_css = "[aria-label='Function Filter Input']";
        this.start_number_format_txb_css = "[name='startingNumberFormat']";

        // Css - Dropdown
        this.prefix_status_dropdown_css = "[name='type']";
        this.number_of_digits_dropdown_css = "[name='numberOfDigits']";
        this.default_document_number_dropdown_css = "[name='prefixSampleOutput']";

        // Css - Other
        this.type_in_list_css = ".ag-row-first>[col-id='type']";
        this.create_by_in_list_css = ".ag-row-first>[col-id='creator']";
        this.function_name_in_list_css = ".ag-row-first>[col-id='functionName']";

        // Xpath - Other
        this.function_name_xpath = "(//*[@col-id='functionName' and text()='%s'])[1]";
        this.prefix_in_list_xpath = "(//*[@col-id='prefixSampleOutput' and text()='123-%s-456'])[1]";
        this.setup_option_ckb_xpath = "//*[text()='Setup %s (Setup 1 only)']/parent::*//label[text()='%s']/parent::*//*[@type='radio']";
        this.prefix_sample_format_xpath = "//*[text()='Sample Output']/parent::*/parent::*//*[@value='%s']";
        this.default_document_number_xpath = "//*[text()='Default Document Number']/parent::*/parent::*//*[@value='%s']";
        this.document_prefix_details_page_title_xpath = "//h1//*[text()='Document Prefix Details']";
        this.list_of_document_prefix_page_title_xpath = "//h1//*[text()='List of Document Prefix']";
    
        // Xpath - Validation
        this.validation_text_digits_xpath = "//*[text()='Number Of Digits']/parent::*/parent::*//*[@class='invalid-feedback' and text()='%s']";
        this.validation_text_prefix_xpath = "//*[text()='Prefix']/parent::*/parent::*//*[@class='invalid-feedback' and text()='%s']";
    }

}export default ManageDocumentPrefixPageLocator