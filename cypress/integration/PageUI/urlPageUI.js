class UrlPageLocator{  
    constructor(){
        this.create_uom_url = `https://api-connex-${'%s'}.doxa-holdings.com/entities/${'%s'}/transactional-setting/create-uom-record`;
        this.api_user_me_url = `https://api-connex-${'%s'}.doxa-holdings.com/auth/api/users/me`;
        this.create_address_url = `https://api-connex-${'%s'}.doxa-holdings.com/entities/${'%s'}/address/create`;
        this.catalogue_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/entities/${'%s'}/catalogue/v2/list?page=0&size=10&q=`;
        this.create_category_url = `https://api-connex-${'%s'}.doxa-holdings.com/entities/${'%s'}/category/add`;
        this.create_catalogue_url = `https://api-connex-${'%s'}.doxa-holdings.com/entities/${'%s'}/catalogue/add`;
        this.company_address_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/entities/${'%s'}/address/company`;
        this.approval_matrix_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/entities/${'%s'}/approval-matrix/list`;
        
        // PPR URL 
        this.ppr_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/prerequisition/list/`;
        this.ppr_detail_url = `https://connex-${'%s'}.doxa-holdings.com/pre-requisitions/details?uuid=${'%s'}`;
        this.create_ppr_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/prerequisition/create`;
        this.approval_ppr_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/prerequisition/approve?pprUuid=${'%s'}`;
        this.save_draft_ppr_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/prerequisition/save-draft`;
        this.convert_ppr_to_pr_url = `https://connex-${'%s'}.doxa-holdings.com/purchase-pre-requisitions/convert-to-pr?uuid=${'%s'}`;

        // PR URL
        this.pr_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/purchase-requisition/list`;
        this.pr_detail_url = `https://connex-${'%s'}.doxa-holdings.com/requisition/pr-details?uuid=${'%s'}`;
        this.create_pr_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/purchase-requisition/create`;
        this.approval_pr_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/purchase-requisition/approve`;
        this.edit_draft_pr_url = `https://connex-${'%s'}.doxa-holdings.com/requisition/edit-draft-pr?uuid=${'%s'}`;
        this.buyer_po_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/purchase-order/buyer/list`;
        this.buyer_view_po_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/purchase-order/buyer/pdf/${'%s'}`;
        this.edit_pr_detail_url = `https://connex-${'%s'}.doxa-holdings.com/requisition/edit-pr-details?uuid=${'%s'}`;
        this.convert_pr_to_po_url = `https://connex-${'%s'}.doxa-holdings.com/convert-pr-to-po?uuid=${'%s'}`;
        this.supplier_po_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/purchase-order/supplier/list`;
        this.supplier_view_po_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/purchase-order/supplier/pdf/${'%s'}`;
        this.convert_pr_to_po_api_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/purchase-requisition/${'%s'}/${'%s'}/convert-to-po`;
        this.pr_to_be_converted_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/purchase-requisition/to-be-converted/`;

        // PO URL 
        this.po_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/purchase-order/${'%s'}/list`
        this.po_detail_url = `https://connex-${'%s'}.doxa-holdings.com/po-details?uuid=${'%s'}`;
        this.acknowledge_po_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/purchase-order/supplier/acknowledge/${'%s'}`;

        // DO URL
        this.do_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/delivery-order/list`;
        this.issue_do_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/delivery-order/issue`;
        this.create_do_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/delivery-order/create-do`;

        // GR URL
        this.gr_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/goods-receipt/list`;
        this.gr_detail_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/goods-receipt/details?uuid=${'%s'}&grGlobalNumber=`
        this.approval_gr_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/goods-receipt/approve`;
        this.create_gr_from_do_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/delivery-order/list/for-gr`;
        this.create_gr_from_do_submit_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/goods-receipt/submit`;        
        this.create_gr_from_do_detail_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/delivery-order/details/for-gr`;

        // URL Create Data
        this.create_entity_url = `https://api-connex-${'%s'}.doxa-holdings.com/auth/api/org/create`;
    }   
}export default UrlPageLocator