class UrlPageLocator{  
    constructor() {
        this.tax_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/entities/${'%s'}/transactional-setting/list-tax-record`;
        this.role_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/auth/api/${'%s'}/rbac/role`
        this.module_list_url = `https://api-connex-${"%s"}.doxa-holdings.com/auth/api/${'%s'}/${'%s'}`;
        this.entities_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/auth/api/org/list`;
        this.category_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/entities/${'%s'}/category/list`;
        this.currency_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/entities/${'%s'}/currencies/list/`;
        this.catalogue_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/entities/${'%s'}/catalogue/v2/list?page=0&size=50&q=`;
        this.organization_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/auth/api/users/${'%s'}/entity/list`;
        this.company_user_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/auth/api/users/company/list/${'%s'}`;
        this.payment_term_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/entities/${'%s'}/payment-term/list`;
        this.manage_vendor_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/entities/${'%s'}/suppliers/list`;
        this.approval_group_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/entities/${'%s'}/group/list?singleUserGroup=false`;
        this.company_address_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/entities/${'%s'}/address/company`;
        this.create_ap_specialist_url = `https://api-connex-${'%s'}.doxa-holdings.com/entities/${'%s'}/ap-specialist/create`;
        this.approval_matrix_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/entities/${'%s'}/approval-matrix/list`;
        this.document_prefix_list_url =`https://api-connex-${'%s'}.doxa-holdings.com/entities/${'%s'}/prefix/list`
        this.supplier_bank_account_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/entities/${'%s'}/supplier-bank-account/list`;
        
        this.create_tax_url = `https://api-connex-${'%s'}.doxa-holdings.com/entities/${'%s'}/transactional-setting/create-tax-record`;
        this.create_uom_url = `https://api-connex-${'%s'}.doxa-holdings.com/entities/${'%s'}/transactional-setting/create-uom-record`;
        this.api_user_me_url = `https://api-connex-${'%s'}.doxa-holdings.com/auth/api/users/me`;
        this.create_address_url = `https://api-connex-${'%s'}.doxa-holdings.com/entities/${'%s'}/address/create`;
        this.create_project_url = `https://api-connex-${'%s'}.doxa-holdings.com/entities/${'%s'}/projects/create`;
        this.create_category_url = `https://api-connex-${'%s'}.doxa-holdings.com/entities/${'%s'}/category/add`;
        this.create_catalogue_url = `https://api-connex-${'%s'}.doxa-holdings.com/entities/${'%s'}/catalogue/add`;
        this.update_user_role_url = `https://api-connex-${'%s'}.doxa-holdings.com/auth/api/${'%s'}/rbac/user/${'%s'}`;
        this.catalogue_detail_url = `https://api-connex-${'%s'}.doxa-holdings.com/entities/${'%s'}/catalogue/get-catalogue-details/${'%s'}`;
        this.create_gl_account_url = `https://api-connex-${'%s'}.doxa-holdings.com/entities/${'%s'}/transactional-setting/create-gl-account`;
        this.item_catalogue_pr_url = `https://api-connex-${'%s'}.doxa-holdings.com/entities/${'%s'}/catalogue/v2/list/feature?page=0&size=10&q=item+code+1`;
        this.entity_detail_page_url = `https://connex-${'%s'}.doxa-holdings.com/entity-details?uuid=${'%s'}`;
        this.item_catalogue_ppr_url = `https://api-connex-${'%s'}.doxa-holdings.com/entities/${'%s'}/catalogue/v2/list/feature?page=0&size=10&q=&project=auto+item+code+1`;
        this.create_company_user_url = `https://api-connex-${'%s'}.doxa-holdings.com/auth/api/users/create`;
        this.create_external_vendor_url = `https://api-connex-${'%s'}.doxa-holdings.com/entities/${'%s'}/suppliers/create`;
        this.create_approval_matrix_url = `https://api-connex-${'%s'}.doxa-holdings.com/entities/${'%s'}/approval-matrix/create`;
        this.approval_configuration_url = `https://api-connex-${'%s'}.doxa-holdings.com/entities/${'%s'}/approval-configuration/get`;
        this.update_document_prefix_url =`https://api-connex-${'%s'}.doxa-holdings.com/entities/${'%s'}/prefix/update`
        this.update_approval_configuration_url = `https://api-connex-${'%s'}.doxa-holdings.com/entities/${'%s'}/approval-configuration/update`;

        // PPR URL 
        this.ppr_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/prerequisition/list-pagination/?page=0&size=50&q=&orderBy=pprNumber:desc`;
        this.ppr_detail_url = `https://connex-${'%s'}.doxa-holdings.com/pre-requisitions/details?uuid=${'%s'}`;
        this.create_ppr_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/prerequisition/create`;
        this.approval_ppr_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/prerequisition/approve?pprUuid=${'%s'}`;
        this.save_draft_ppr_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/prerequisition/save-draft`;
        this.convert_ppr_to_pr_url = `https://connex-${'%s'}.doxa-holdings.com/purchase-pre-requisitions/convert-to-pr?uuid=${'%s'}`;
        this.ppr_to_be_converted_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/prerequisition/pending-to-po`;

        // PR URL
        this.pr_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/purchase-requisition/list-pagination?page=0&size=50&q=&orderBy=prNumber:desc`;
        this.create_pr_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/purchase-requisition/create`;
        this.pr_detail_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/purchase-requisition/details?uuid=${'%s'}`;
        this.approval_pr_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/purchase-requisition/approve`;
        this.pr_over_view_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/purchase-requisition/overview?uuid=${'%s'}`
        this.edit_draft_pr_url = `https://connex-${'%s'}.doxa-holdings.com/requisition/edit-draft-pr?uuid=${'%s'}`;
        this.pr_detail_web_url = `https://connex-${'%s'}.doxa-holdings.com/requisition/pr-details?uuid=${'%s'}`;
        this.buyer_view_po_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/purchase-order/buyer/pdf/${'%s'}`;
        this.edit_pr_detail_url = `https://connex-${'%s'}.doxa-holdings.com/requisition/edit-pr-details?uuid=${'%s'}`;
        this.convert_pr_to_po_url = `https://connex-${'%s'}.doxa-holdings.com/convert-pr-to-po?uuid=${'%s'}`;
        this.supplier_view_po_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/purchase-order/supplier/pdf/${'%s'}`;
        this.convert_pr_to_po_api_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/purchase-requisition/${'%s'}/${'%s'}/convert-to-po`;
        this.pr_to_be_converted_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/purchase-requisition/to-be-converted/`;
        
        // PO URL 
        this.po_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/purchase-order/${'%s'}/list-pagination?page=0&size=50&q=&orderBy=poNumber:desc`
        this.po_detail_url = `https://connex-${'%s'}.doxa-holdings.com/po-details?uuid=${'%s'}`;
        this.buyer_po_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/purchase-order/buyer/list-pagination?page=0&size=50&q=&orderBy=poNumber:desc`;
        this.acknowledge_po_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/purchase-order/supplier/acknowledge/${'%s'}`;
        this.supplier_po_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/purchase-order/supplier/list-pagination?page=0&size=50&q=&orderBy=poNumber:desc`;

        // DO URL
        this.do_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/delivery-order/list`;
        this.issue_do_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/delivery-order/issue`;
        this.create_do_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/delivery-order/create-do`;
        this.create_do_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/delivery-order/po/list`

        // GR URL
        this.gr_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/goods-receipt/list-pagination?page=0&size=50&q=&orderBy=grNumber:desc`;
        this.gr_detail_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/goods-receipt/details?uuid=${'%s'}&grGlobalNumber=`
        this.approval_gr_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/goods-receipt/approve`;
        this.create_gr_from_do_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/delivery-order/list/for-gr`;
        this.create_gr_from_po_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/purchase-order/${'%s'}/list/for-gr`
        this.create_gr_from_do_submit_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/goods-receipt/submit`;        
        this.create_gr_from_do_detail_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/delivery-order/details/for-gr`;

        // INV
        this.cn_list_url =`https://api-connex-${'%s'}.doxa-holdings.com/invoice/${'%s'}/credit-note/${'%s'}/list-pagination?page=0&size=50&q=&orderBy=submissionDate:desc`    
        this.inv_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/invoice/${'%s'}/invoice/buyer/list-pagination?page=0&size=50&q=&orderBy=invoiceNo:desc`;
        this.inv_pending_approval_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/invoice/${'%s'}/invoice/buyer/list-pagination/pending?page=0&size=50&q=&orderBy=invoiceNo:desc`

        // RFQ
        this.rfq_list_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/request-for-quotation/${'%s'}/list`;
        this.close_rfq_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/request-for-quotation/close`;
        this.raise_rfq_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/request-for-quotation/submit`;
        this.rfq_detail_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/request-for-quotation/${'%s'}/details/${'%s'}`;
        this.submit_rfq_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/request-for-quotation/supplier/submit/quotations`;
        this.approve_rfq_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/request-for-quotation/approve`;
        this.shortlist_rfq_url = `https://api-connex-${'%s'}.doxa-holdings.com/purchase/${'%s'}/request-for-quotation/shortlist`;
        
        this.close_rfq_dev_url = `https://api-connex-dev.doxa-holdings.com/purchase/689fbac5-7291-4cad-b84c-52e95d4499a8/request-for-quotation/close`;
        this.raise_rfq_dev_url = `https://api-connex-dev.doxa-holdings.com/purchase/689fbac5-7291-4cad-b84c-52e95d4499a8/request-for-quotation/submit`;
        this.submit_rfq_dev_url = `https://api-connex-dev.doxa-holdings.com/purchase/70becfb0-cb73-46b2-b372-8e78714eb507/request-for-quotation/supplier/submit/quotations`;
        this.approve_rfq_dev_url = 'https://api-connex-dev.doxa-holdings.com/purchase/689fbac5-7291-4cad-b84c-52e95d4499a8/request-for-quotation/approve';
        this.shortlist_rfq_dev_url = 'https://api-connex-dev.doxa-holdings.com/purchase/689fbac5-7291-4cad-b84c-52e95d4499a8/request-for-quotation/shortlist';
        this.rfq_list_dev_buyer_url = `https://api-connex-dev.doxa-holdings.com/purchase/689fbac5-7291-4cad-b84c-52e95d4499a8/request-for-quotation/buyer/list`;
        this.rfq_detail_buyer_dev_url = `https://api-connex-dev.doxa-holdings.com/purchase/689fbac5-7291-4cad-b84c-52e95d4499a8/request-for-quotation/${'%s'}/details/${'%s'}`;
        this.rfq_list_dev_supplier_url = `https://api-connex-dev.doxa-holdings.com/purchase/70becfb0-cb73-46b2-b372-8e78714eb507/request-for-quotation/supplier/list`;
        this.rfq_detail_supplier_dev_url = `https://api-connex-dev.doxa-holdings.com/purchase/70becfb0-cb73-46b2-b372-8e78714eb507/request-for-quotation/${'%s'}/details/${'%s'}`;

        // URL Create Data
        this.create_entity_url = `https://api-connex-${'%s'}.doxa-holdings.com/auth/api/org/create`;
    }   
}export default UrlPageLocator