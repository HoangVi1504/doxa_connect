import CommonAction from '../commons/common_actions'
import UrlPageLocator from '../PageUI/urlPageUI'
import ManageCurrencyPageLocator from '../PageUI/manageCurrencyPageUI'

var printf = require('printf')
var dataEntityAdmin = require('../../../dataEntityAdmin.json');

const commonAction = new CommonAction()
const urlPageLocator = new UrlPageLocator()
const manageCurrencyPageLocator = new ManageCurrencyPageLocator()

class ManageCurrencyPage{
    constructor() {
        this.env = 'stag'
    }

    enterValueToFilterCurrencyCode(currencyCode){
        let token = window.localStorage.getItem("token")
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.currency_list_url, this.env, dataEntityAdmin.entityCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
            commonAction.wait(1)
            commonAction.clickToElement(manageCurrencyPageLocator.filter_currency_code_txb_css)
            commonAction.enterValueToTextbox(manageCurrencyPageLocator.filter_currency_code_txb_css, currencyCode)
        })
    }

    enterValueToFilterCurrencyName(currencyName){
        let token = window.localStorage.getItem("token")
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.currency_list_url, this.env, dataEntityAdmin.entityCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
            commonAction.wait(1)
            commonAction.clickToElement(manageCurrencyPageLocator.filter_currency_name_txb_css)
            commonAction.enterValueToTextbox(manageCurrencyPageLocator.filter_currency_name_txb_css, currencyName)
        })
    }

    enterValueToExchangeRateTextbox(exchangeRate){
        commonAction.enterValueToTextboxAfterClear(manageCurrencyPageLocator.exchange_rate_txb_css, exchangeRate)
    }

    doubleClickToCurrencyCodeInLIst(currencyCode){
        commonAction.doubleClickToElementByXpath(printf(manageCurrencyPageLocator.currency_code_in_list_xpath, currencyCode))
    }

    checkToDefaultCurrencyCheckbox(){
        commonAction.checkCheckbox(manageCurrencyPageLocator.default_currency_ckb_css)
    }

    checkToCurrencyCodeCheckboxInList(currencyCode){
        this.scrollToElementInList("0%")
        commonAction.checkCheckboxByXpath(printf(manageCurrencyPageLocator.currency_code_ckb_in_list_xpath, currencyCode))
    }

    clickToActivateNotificationButton(){
        commonAction.clickToElementByXpath(manageCurrencyPageLocator.activate_notification_button_xpath)
    }

    clickToDeactivateNotificationButton(){
        commonAction.clickToElementByXpath(manageCurrencyPageLocator.deactivate_notification_button_xpath)
    }

    clickToCurrencyActionInList(action){
        commonAction.clickToElementByXpath(printf(manageCurrencyPageLocator.action_currency_in_list_xpath, action))
    }

    verifyValueInCurrencyCodeTextboxExist(currencyCode){
        commonAction.verifyValueInTextboxExist(manageCurrencyPageLocator.currency_code_txb_css, currencyCode)
    }

    verifyValueInCurrencyNameTextboxExist(currencyName){
        commonAction.verifyValueInTextboxExist(manageCurrencyPageLocator.currency_name_txb_css, currencyName)
    }

    verifyListCurrencyPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(manageCurrencyPageLocator.list_of_currency_page_title_xpath)
    }

    verifyCurrencyDetailsPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(manageCurrencyPageLocator.currency_detail_page_title_xpath)
    }

    verifyCurrencyCodeInListDisplay(currencyCode){
        this.scrollToElementInList("0%")
        commonAction.verifyElementByXpathVisible(printf(manageCurrencyPageLocator.currency_code_in_list_xpath, currencyCode))
    }

    verifyActionCurrencyInListDisplay(action){
        this.scrollToElementInList("100%")
        commonAction.verifyElementByXpathVisible(printf(manageCurrencyPageLocator.action_currency_in_list_xpath, action))
    }

    getCurrencyNameInList(){
        return commonAction.getTextElement(manageCurrencyPageLocator.currency_name_in_list_css)
    }

    getExchangeRateInList(){
        return commonAction.getTextElement(manageCurrencyPageLocator.exchange_rate_in_list_css)
    }

    getDefaultCurrencyStatusInList(){
        return commonAction.getTextElement(manageCurrencyPageLocator.default_currency_status_in_list_css)
    }

    getActiveCurrencyStatusInList(){
        return commonAction.getTextElement(manageCurrencyPageLocator.active_currency_status_in_list_css)
    }

    scrollToElementInList(position){
        commonAction.scrollToPositionElement(manageCurrencyPageLocator.scroll_bar_in_list_xpath, position)
    }

}export default ManageCurrencyPage