import CommonAction from '../commons/common_actions'
import CommonPageLocator from '../PageUI/commonPageUI'

var printf = require('printf')
const commonAction = new CommonAction()
const commonPageLocator = new CommonPageLocator()

class CommonPage{
    navigateTo(url){
        commonAction.navigateTo(url)
    }

    navigateToLinkLeftMenu(linkMenu, linkLeftMenu){
        this.clickToOptionLinkOnHeaderMenu(linkMenu)
        this.clickToOptionLinkLeftMenu(linkLeftMenu)
    }

    navigateToLinkLeftSubMenu(linkMenu, linkLeftMenu, linkSubLeftMenu){
        this.navigateToLinkLeftMenu(linkMenu, linkLeftMenu)
        this.clickToOptionLinkSubMenu(linkSubLeftMenu)
    }

    checkToCheckbox(){
        commonAction.checkCheckbox('[ref="eCheckbox"]>div>[type="checkbox"]')
    }

    clickToOptionValueInDropdown(value){
        commonAction.clickToElementByXpath(printf(commonPageLocator.option_value_in_dropdown_xpath, value))
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

    clickToButtonFormat3(buttonName){
        commonAction.clickToElementByXpath(printf(commonPageLocator.button_format_3_xpath, buttonName))
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

    clickToUserProfileButton(){
        commonAction.clickToElementByXpath(commonPageLocator.user_profile_button_xpath)
    }

    verifyButtonFormat1Display(buttonName){
        commonAction.verifyElementByXpathVisible(printf(commonPageLocator.button_format_1_xpath, buttonName))
    }

    verifyButtonFormat2Display(buttonName){
        commonAction.verifyElementByXpathVisible(printf(commonPageLocator.button_format_2_xpath, buttonName))
    }

    verifyButtonFormat3Display(buttonName){
        commonAction.verifyElementByXpathVisible(printf(commonPageLocator.button_format_3_xpath, buttonName))
    }

    verifyButtonFormat1Disabled(buttonName){
        commonAction.verifyElementByXpathDisable(printf(commonPageLocator.button_format_1_xpath, buttonName))
    }

    verifyDashboardTitleDisplay(){
        commonAction.verifyElementByXpathVisible(commonPageLocator.dashboard_title_xpath)
    }

    verifyMediaHeadingMessageDisplay(message){
        commonAction.verifyElementByXpathVisible(printf(commonPageLocator.media_heading_xpath, message))
    }

    verifyModalMessageDisplay(message){
        commonAction.verifyElementByXpathVisible(printf(commonPageLocator.modal_message_xpath, message))
    }

    verifyMediaHeadingMessageDisappears(message){
        commonAction.waitForElementInvisible(printf(commonPageLocator.media_heading_xpath, message), 10)
    }

    verifyOptionLinkLeftMenuDisplay(linkName){
        commonAction.verifyElementByXpathVisible(printf(commonPageLocator.option_link_left_menu_xpath, linkName))
    }

    verifyOptionLinkLeftMenuNotVisible(linkName){
        commonAction.verifyElementByXpathNotExist(printf(commonPageLocator.option_link_left_menu_xpath, linkName))
    }

    verifyButtonFormat1NotVisible(buttonName){
        commonAction.verifyElementByXpathNotExist(printf(commonPageLocator.button_format_1_xpath, buttonName))
    }

    verifyValueInDropdownDisplay(value){
        commonAction.verifyElementByXpathVisible(printf(commonPageLocator.option_value_in_dropdown_xpath, value))
    }
    
    verifyValueInDropdownNotExist(value){
        commonAction.verifyElementByXpathNotExist(printf(commonPageLocator.option_value_in_dropdown_xpath, value))
    }

    waitTime(seconds){
        commonAction.wait(seconds)
    }

}export default CommonPage
