import CommonAction from '../commons/common_actions'
import UrlPageLocator from '../PageUI/urlPageUI'

var printf = require('printf')
const commonAction = new CommonAction()
const urlPageLocator = new UrlPageLocator()

class UrlPage{

    navigateToPprPage(pageName, uuid){
        let url;
        switch (pageName) {
            case "PPR detail":
                url = printf(urlPageLocator.ppr_detail_url, uuid)
                break;

            case "Convert to PR":
                url = printf(urlPageLocator.convert_ppr_to_pr_url, uuid)
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
                url = printf(urlPageLocator.pr_detail_url, uuid)
                break;

            case "Edit PR detail":
                url = printf(urlPageLocator.edit_pr_detail_url, uuid)
                break; 

            case "Edit draft PR":
                url = printf(urlPageLocator.edit_draft_pr_url, uuid)
                break;

            default:
                break;
        }
        commonAction.navigateTo(url)
    }

}export default UrlPage