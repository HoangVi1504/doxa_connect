import CommonAction from '../commons/common_actions'
import ManageTradeCodePageLocator from '../PageUI/manageTradeCodePageUI'

var printf = require('printf')
const commonAction = new CommonAction()
const manageTradeCodePageLocator = new ManageTradeCodePageLocator()

class ManageTradeCodePage{

    enterValueToFilterTradeCode(tradeCode){
        commonAction.enterValueToTextbox(manageTradeCodePageLocator.filter_trade_code_in_list_css, tradeCode)
    }

    enterValueToFilterTradeTitle(tradeTitle){
        commonAction.enterValueToTextbox(manageTradeCodePageLocator.filter_trade_title_in_list_css, tradeTitle)
    }

    enterValueToTradeCodeTextbox(tradeCode){
        commonAction.enterValueToTextbox(manageTradeCodePageLocator.trade_code_txb_css, tradeCode)
    }

    enterValueToTradeTitleTextbox(tradeTitle){
        commonAction.enterValueToTextbox(manageTradeCodePageLocator.trade_title_txb_css, tradeTitle)
    }

    enterValueToTradeDescriptionTextbox(description){
        commonAction.enterValueToTextbox(manageTradeCodePageLocator.trade_description_txb_css, description)
    }

    doubleClickToTradeCodeInList(tradeCode){
        commonAction.doubleClickToElementByXpath(printf(manageTradeCodePageLocator.trade_code_in_list_xpath, tradeCode))
    }

    checkToTradeCodeCheckbox(tradeCode){
        commonAction.checkCheckboxByXpath(printf(manageTradeCodePageLocator.trade_code_ckb_xpath, tradeCode))
    }

    clearValueInTradeTitleTextbox(){
        commonAction.clearValueInTextbox(manageTradeCodePageLocator.trade_title_txb_css)
    }

    clickToTradeCodeActionInList(action){
        commonAction.clickToElementByXpath(printf(manageTradeCodePageLocator.trade_code_action_in_list_xpath, action))
    }

    clickToActivateButtonInNotification(){
        commonAction.clickToElementByXpath(manageTradeCodePageLocator.activate_button_in_notification_xpath)
    }

    clickToDeactivateButtonInNotification(){
        commonAction.clickToElementByXpath(manageTradeCodePageLocator.deactivate_button_in_notification_xpath)
    }

    verifyCreateTradeCodePageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(manageTradeCodePageLocator.create_trade_code_page_title_xpath)
    }

    verifyTradeCodeDetailsPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(manageTradeCodePageLocator.trade_code_details_page_title_xpath)
    }

    verifyListTradeCodePageTitleDisplay(){
        commonAction.wait(1)
        commonAction.verifyElementByXpathVisible(manageTradeCodePageLocator.list_trade_code_page_title_xpath)
    }

    verifyValueInTradeCodeTextboxExist(tradeCode){
        commonAction.verifyValueInTextboxExist(manageTradeCodePageLocator.trade_code_txb_css, tradeCode)
    }

    verifyValueInTradeTitleTextboxExist(tradeTitle){
        commonAction.verifyValueInTextboxExist(manageTradeCodePageLocator.trade_title_txb_css, tradeTitle)
    }

    verifyTradeCodeInListDisplay(tradeCode){
        commonAction.verifyElementByXpathVisible(printf(manageTradeCodePageLocator.trade_code_in_list_xpath, tradeCode))
    }

    verifyTradeCodeActionInListDisplay(action){
        //commonAction.scrollToPositionElement(manageTradeCodePageLocator.scroll_bar_in_trade_code_list_xpath, "100%")
        commonAction.verifyElementByXpathExist(printf(manageTradeCodePageLocator.trade_code_action_in_list_xpath, action))
    }

    getTradeTitleInList(){
        return commonAction.getTextElement(manageTradeCodePageLocator.trade_title_in_list_css)
    }

    getTradeDescriptionInList(){
        return commonAction.getTextElement(manageTradeCodePageLocator.trade_description_in_list_css)
    }

    getCreatorTradeCodeInList(){
        return commonAction.getTextElement(manageTradeCodePageLocator.creator_trade_code_in_list_css)
    }

    getTradeCodeActiveStatusInList(){
        commonAction.clickToElement(manageTradeCodePageLocator.filter_created_on_in_list_css)
        commonAction.clickToElement(manageTradeCodePageLocator.filter_trade_code_active_in_list_css)
        return commonAction.getTextElement(manageTradeCodePageLocator.trade_code_active_status_in_list_css)
    }

    getValidationTextTradeCode(){
        return commonAction.getTextElementByXpath(manageTradeCodePageLocator.validation_text_trade_code_xpath)
    }

    getValidationTextTradeTitle(){
        return commonAction.getTextElementByXpath(manageTradeCodePageLocator.validation_text_trade_title_xpath)
    }

}export default ManageTradeCodePage