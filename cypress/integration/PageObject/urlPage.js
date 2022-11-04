import CommonAction from '../commons/common_actions'
import UrlPageLocator from '../PageUI/urlPageUI'

var printf = require('printf')
const commonAction = new CommonAction()
const urlPageLocator = new UrlPageLocator()

class UrlPage{
    constructor() {
        this.env = 'stag'
    }

    navigateToPprPage(pageName, uuid){
        let url;
        switch (pageName) {
            case "PPR detail":
                url = printf(urlPageLocator.ppr_detail_url, this.env, uuid)
                break;

            case "Convert to PR":
                url = printf(urlPageLocator.convert_ppr_to_pr_url, this.env, uuid)
                break; 

            default:
                break;
        }
        commonAction.navigateTo(url)
    }

    navigateToPrPage(pageName, uuid){
        let url;
        switch (pageName) {
            case "PR detail":
                url = printf(urlPageLocator.pr_detail_web_url, this.env, uuid)
                break;

            case "Edit PR detail":
                url = printf(urlPageLocator.edit_pr_detail_url, this.env, uuid)
                break; 

            case "Edit draft PR":
                url = printf(urlPageLocator.edit_draft_pr_url, this.env, uuid)
                break;

            default:
                break;
        }
        commonAction.navigateTo(url)
    }

    navigateToPoDetailPage(uuid){
        commonAction.navigateTo(printf(urlPageLocator.po_detail_web_url, this.env, uuid))
    }

    navigateToConvertPrToPoPage(uuid){
        commonAction.navigateTo(printf(urlPageLocator.convert_pr_to_po_url, this.env, uuid))
    }

    navigateToEntityDetailPage(uuidEntity){
        commonAction.navigateTo(printf(urlPageLocator.entity_detail_page_url, this.env, uuidEntity))
    }
}export default UrlPage