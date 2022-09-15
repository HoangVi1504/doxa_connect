import MailPageLocator from "../PageUI/mailPageUI";
import CommonAction from '../commons/common_actions'

const mailPageLocator = new MailPageLocator()
const commonAction = new CommonAction()
var printf = require('printf')

class MailPage{

    enterValueToUserTextbox(user){
        commonAction.clearValueInTextboxByXpath(mailPageLocator.user_txb_xpath)
        commonAction.enterValueToTextboxByXpath(mailPageLocator.user_txb_xpath, user)
    }

    selectValueFromDomainDropdown(domain){
        commonAction.selectValueFromDropdownElementByXpath(mailPageLocator.domain_dropdown_xpath, domain)
    }

    clickToAddInboxButton(){
        commonAction.clickToElementByXpath(mailPageLocator.add_inbox_button_xpath)
    }

    clickToAddNowButton(){
        commonAction.clickToElementByXpath(mailPageLocator.add_now_button_xpath)
    }

    clickToOptionLinkGetnada(linkName, time){
        commonAction.clickToElementWithTimeOutByXpath(printf(mailPageLocator.option_link_getnada_xpath, linkName), time)
    }

}export default MailPage