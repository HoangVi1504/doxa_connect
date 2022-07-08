class PoPageLocator{
    constructor(){
        // CSS
        this.pr_number_txb_css = '[name="prNumber"]';
        this.po_number_txb_css = '[name="poNumber"]';
        this.filter_po_in_list_css = '[aria-label="Purchase Order No. Filter Input"]';
        this.cancel_po_reason_txb_css = '[name="cancelReason"]';
        this.reject_po_reason_txb_css = '[name="rejectReason"]';
        this.approval_route_dropdown_css = '[name="approvalRouteUuid"]';

        // Xpath
        this.notification_po_xpath = "//*[@class='modal-content']//*[text()='%s']";
        this.reject_po_button_xpath = "(//button[text()='Reject'])[2]";
        this.po_number_in_list_xpath = "//*[@col-id='poNumber' and text()='%s']";
        this.pr_number_in_list_xpath = "//*[@col-id='prNumber' and text()='%s']";
        this.po_status_in_list_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='status' and text()='%s']";
        this.po_detail_page_title_xpath = "//h1//*[text()='Purchase Order Details']";
        this.mark_completed_po_button_xpath = "(//button[text()='Mark Completed'])[2]";
        this.supplier_ack_status_in_list_xpath = "//*[contains(@class,'ag-row-first')]//*[@col-id='supplierAck' and text()='%s']";
        this.pr_convert_detail_page_title_xpath = "//h1//*[text()='Purchase Requisition To Convert Details']";
        this.pr_to_be_converted_page_title_xpath = "//h1//*[text()='Purchase Requisitions To Be Converted List']";
    }

}export default PoPageLocator