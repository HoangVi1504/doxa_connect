import CommonAction from '../commons/common_actions'
import UrlPageLocator from '../PageUI/urlPageUI'

var printf = require('printf')
var environment = require('../../../environment.json');

const commonAction = new CommonAction()
const urlPageLocator = new UrlPageLocator()

class UrlPage{

    navigateToPprPage(pageName, uuid){
        let url;
        let env = environment.env
        switch (pageName) {
            case "PPR detail":
                url = printf(urlPageLocator.ppr_detail_url, env, uuid)
                break;

            case "Convert to PR":
                url = printf(urlPageLocator.convert_ppr_to_pr_url, env, uuid)
                break; 

            default:
                break;
        }
        commonAction.navigateTo(url)
    }

    navigateToPrPage(pageName, uuid){
        let url;
        let env = environment.env
        switch (pageName) {
            case "PR detail":
                url = printf(urlPageLocator.pr_detail_url, env, uuid)
                break;

            case "Edit PR detail":
                url = printf(urlPageLocator.edit_pr_detail_url, env, uuid)
                break; 

            case "Edit draft PR":
                url = printf(urlPageLocator.edit_draft_pr_url, env, uuid)
                break;

            default:
                break;
        }
        commonAction.navigateTo(url)
    }

    navigateToPoDetailPage(uuid){
        let env = environment.env
        commonAction.navigateTo(printf(urlPageLocator.po_detail_url, env, uuid))
    }

    navigateToConvertPrToPoPage(uuid){
        let env = environment.env
        commonAction.navigateTo(printf(urlPageLocator.convert_pr_to_po_url, env, uuid))
    }
}export default UrlPage