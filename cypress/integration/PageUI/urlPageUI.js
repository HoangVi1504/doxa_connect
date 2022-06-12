class UrlPageLocator{
    constructor(){
        this.ppr_list_url = "https://api-connex-dev.doxa-holdings.com/purchase/689fbac5-7291-4cad-b84c-52e95d4499a8/prerequisition/list/"
        this.ppr_detail_url = `https://connex-dev.doxa-holdings.com/pre-requisitions/details?uuid=${'%s'}`;
        this.create_ppr_url = "https://api-connex-dev.doxa-holdings.com/purchase/689fbac5-7291-4cad-b84c-52e95d4499a8/prerequisition/create";
        this.approval_ppr_url = `https://api-connex-dev.doxa-holdings.com/purchase/689fbac5-7291-4cad-b84c-52e95d4499a8/prerequisition/approve?pprUuid=${'%s'}`;
        this.save_draft_ppr_url = "https://api-connex-dev.doxa-holdings.com/purchase/689fbac5-7291-4cad-b84c-52e95d4499a8/prerequisition/save-draft";
        this.convert_ppr_to_pr_url = `https://connex-dev.doxa-holdings.com/purchase-pre-requisitions/convert-to-pr?uuid=${'%s'}`;

        this.pr_list_url = "https://api-connex-dev.doxa-holdings.com/purchase/689fbac5-7291-4cad-b84c-52e95d4499a8/purchase-requisition/list";
        this.pr_detail_url = `https://connex-dev.doxa-holdings.com/requisition/pr-details?uuid=${'%s'}`;
        this.create_pr_url = "https://api-connex-dev.doxa-holdings.com/purchase/689fbac5-7291-4cad-b84c-52e95d4499a8/purchase-requisition/create";
        this.approval_pr_url = "https://api-connex-dev.doxa-holdings.com/purchase/689fbac5-7291-4cad-b84c-52e95d4499a8/purchase-requisition/approve";
        this.edit_draft_pr_url = `https://connex-dev.doxa-holdings.com/requisition/edit-draft-pr?uuid=${'%s'}`;
        this.edit_pr_detail_url = `https://connex-dev.doxa-holdings.com/requisition/edit-pr-details?uuid=${'%s'}`;
    }
}export default UrlPageLocator