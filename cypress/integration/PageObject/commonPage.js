import CommonAction from '../commons/common_actions'
import CommonPageLocator from '../PageUI/commonPageUI'

var printf = require('printf')
const commonAction = new CommonAction()
const commonPageLocator = new CommonPageLocator()

class CommonPage{
    navigateTo(url){
        commonAction.navigateTo(url)
    }

    navigateToRequestForQuotation(){
        this.clickToOptionLinkOnHeaderMenu("Request for Quotations")
        this.clickToOptionLinkLeftMenu("Request for Quotation")
    }

    navigateToLinkLeftSubMenu(linkMenu, linkLeftMenu, linkSubLeftMenu){
        this.clickToOptionLinkOnHeaderMenu(linkMenu)
        this.clickToOptionLinkLeftMenu(linkLeftMenu)
        this.clickToOptionLinkSubMenu(linkSubLeftMenu)
    }

    checkToCheckbox(){
        commonAction.checkCheckbox('[ref="eCheckbox"]>div>[type="checkbox"]')
    }

    clickToOptionLinkOnHeaderMenu(optionLink){
        commonAction.clickToElementByXpath(printf(commonPageLocator.option_link_header_menu_xpath, optionLink))
    }

    clickToOptionLinkLeftMenu(optionLink){
        commonAction.clickToElementByXpath(printf(commonPageLocator.option_link_left_menu_xpath, optionLink))
    }

    clickToOptionLinkSubMenu(optionLink){
        commonAction.clickToElementByXpath(printf(commonPageLocator.option_link_left_sub_menu_xpath, optionLink))
    }

    clickToButtonFormat1(buttonName){
        commonAction.clickToElementByXpath(printf(commonPageLocator.button_format_1_xpath, buttonName))
    }

    clickToButtonFormat2(buttonName){
        commonAction.clickToElementByXpath(printf(commonPageLocator.button_format_2_xpath, buttonName))
    }

    clickToExpandCollapseIcon(){
        commonAction.clickToElementByXpath(commonPageLocator.expand_collapse_icon_xpath)
    }

    clickToLabel(labelName){
        commonAction.clickToElementByXpath(commonPageLocator.label_xpath, labelName)
    }

    clickToText(text){
        commonAction.clickToElementByXpath(printf(commonPageLocator.text_xpath, text))
    }

    verifyDashboardTitleDisplay(){
        commonAction.verifyElementByXpathVisible(commonPageLocator.dashboard_title_xpath)
    }

    verifyMediaHeadingMessageDisplay(message){
        commonAction.verifyElementByXpathVisible(printf(commonPageLocator.media_heading_xpath, message))
    }

    verifyMediaHeadingMessageDisappears(message){
        commonAction.waitForElementInvisible(printf(commonPageLocator.media_heading_xpath, message), 10)
    }

    waitTime(seconds){
        commonAction.wait(seconds)
    }

}export default CommonPage
