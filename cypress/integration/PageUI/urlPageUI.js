class UrlPageLocator{
    constructor(){
        this.ppr_list_url = "https://api-connex-dev.doxa-holdings.com/purchase/689fbac5-7291-4cad-b84c-52e95d4499a8/prerequisition/list/";
        this.ppr_detail_url = `https://connex-dev.doxa-holdings.com/pre-requisitions/details?uuid=${'%s'}`;
        this.create_ppr_url = "https://api-connex-dev.doxa-holdings.com/purchase/689fbac5-7291-4cad-b84c-52e95d4499a8/prerequisition/create";
        this.approval_ppr_url = `https://api-connex-dev.doxa-holdings.com/purchase/689fbac5-7291-4cad-b84c-52e95d4499a8/prerequisition/approve?pprUuid=${'%s'}`;
        this.save_draft_ppr_url = "https://api-connex-dev.doxa-holdings.com/purchase/689fbac5-7291-4cad-b84c-52e95d4499a8/prerequisition/save-draft";
        this.convert_ppr_to_pr_url = `https://connex-dev.doxa-holdings.com/purchase-pre-requisitions/convert-to-pr?uuid=${'%s'}`;
        
        this.pr_list_url = "https://api-connex-dev.doxa-holdings.com/purchase/689fbac5-7291-4cad-b84c-52e95d4499a8/purchase-requisition/list";
        this.buyer_view_po_url = `https://api-connex-dev.doxa-holdings.com/purchase/689fbac5-7291-4cad-b84c-52e95d4499a8/purchase-order/buyer/pdf/${'%s'}`;
        this.buyer_po_list_url = "https://api-connex-dev.doxa-holdings.com/purchase/689fbac5-7291-4cad-b84c-52e95d4499a8/purchase-order/buyer/list";
        this.supplier_view_po_url = `https://api-connex-dev.doxa-holdings.com/purchase/70becfb0-cb73-46b2-b372-8e78714eb507/purchase-order/supplier/pdf/${'%s'}`;
        this.supplier_po_list_url = "https://api-connex-dev.doxa-holdings.com/purchase/70becfb0-cb73-46b2-b372-8e78714eb507/purchase-order/supplier/list";
        this.pr_to_be_converted_list_url = 'https://api-connex-dev.doxa-holdings.com/purchase/689fbac5-7291-4cad-b84c-52e95d4499a8/purchase-requisition/to-be-converted/';

        this.po_list_url = `https://api-connex-dev.doxa-holdings.com/purchase/70becfb0-cb73-46b2-b372-8e78714eb507/purchase-order/${'%s'}/list`
        this.pr_detail_url = `https://connex-dev.doxa-holdings.com/requisition/pr-details?uuid=${'%s'}`;
        this.create_pr_url = "https://api-connex-dev.doxa-holdings.com/purchase/689fbac5-7291-4cad-b84c-52e95d4499a8/purchase-requisition/create";
        this.po_detail_url = `https://connex-dev.doxa-holdings.com/po-details?uuid=${'%s'}`;
        this.approval_pr_url = "https://api-connex-dev.doxa-holdings.com/purchase/689fbac5-7291-4cad-b84c-52e95d4499a8/purchase-requisition/approve";
        this.edit_draft_pr_url = `https://connex-dev.doxa-holdings.com/requisition/edit-draft-pr?uuid=${'%s'}`;
        this.acknowledge_po_url = `https://api-connex-dev.doxa-holdings.com/purchase/70becfb0-cb73-46b2-b372-8e78714eb507/purchase-order/supplier/acknowledge/${'%s'}`;
        this.edit_pr_detail_url = `https://connex-dev.doxa-holdings.com/requisition/edit-pr-details?uuid=${'%s'}`;
        this.convert_pr_to_po_url = `https://connex-dev.doxa-holdings.com/convert-pr-to-po?uuid=${'%s'}`;
        this.convert_pr_to_po_api_url = `https://api-connex-dev.doxa-holdings.com/purchase/689fbac5-7291-4cad-b84c-52e95d4499a8/purchase-requisition/${'%s'}/3862f5c9-44f3-4f6d-8c4b-918cf086ac2c/convert-to-po`;
    }
}export default UrlPageLocator