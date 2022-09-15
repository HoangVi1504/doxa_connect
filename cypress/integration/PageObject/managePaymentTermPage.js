import CommonAction from '../commons/common_actions'
import UrlPageLocator from '../PageUI/urlPageUI'
import ManagePaymentTermPageLocator from '../PageUI/managePaymentTermPageUI'

var printf = require('printf')
var dataEntityAdmin = require('../../../dataEntityAdmin.json');

const commonAction = new CommonAction()
const urlPageLocator = new UrlPageLocator()
const managePaymentTermPageLocator = new ManagePaymentTermPageLocator()

class ManagePaymentTermPage{
    constructor() {
        this.env = 'stag'
    }

    enterValueToFilterPaymentTermName(name){
        let token = window.localStorage.getItem("token")
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.payment_term_list_url, this.env, dataEntityAdmin.entityCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
            commonAction.clickToElement(managePaymentTermPageLocator.filter_payment_term_name_txb_css)
            commonAction.enterValueToTextboxAfterClear(managePaymentTermPageLocator.filter_payment_term_name_txb_css, name)
        })
    }

    enterValueToFIlterPayIn(days){
        let token = window.localStorage.getItem("token")
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.payment_term_list_url, this.env, dataEntityAdmin.entityCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
            commonAction.clickToElement(managePaymentTermPageLocator.filter_pay_in_txb_css)
            commonAction.enterValueToTextboxAfterClear(managePaymentTermPageLocator.filter_pay_in_txb_css, days)
        })
    }

    enterValueToPaymentTermNameTextbox(name){
        commonAction.enterValueToTextboxAfterClear(managePaymentTermPageLocator.payment_term_name_txb_css, name)
    }

    enterValueToPayInTextbox(days){
        commonAction.enterValueToTextboxAfterClear(managePaymentTermPageLocator.pay_in_txb_css, days)
    }

    enterValueToRemarkTextbox(remark){
        commonAction.enterValueToTextboxAfterClear(managePaymentTermPageLocator.remark_txb_css, remark)
    }

    doubleClickToPaymentTermNameInList(name){
        commonAction.doubleClickToElementByXpath(printf(managePaymentTermPageLocator.payment_term_name_in_list_xpath, name))
    }

    verifyValueInPaymentTermNameTextboxExist(name){
        commonAction.verifyValueInTextboxExist(managePaymentTermPageLocator.payment_term_name_txb_css, name)
    }

    verifyValueInPayInTextboxExist(days){
        commonAction.verifyValueInTextboxExist(managePaymentTermPageLocator.pay_in_txb_css, days)
    }

    verifyValueInRemarkTextboxExist(remark){
        commonAction.verifyValueInTextboxExist(managePaymentTermPageLocator.remark_txb_css, remark)
    }

    verifyCreatePaymentTermPageTitleDisplay(){
        commonAction.wait(1)
        commonAction.verifyElementByXpathVisible(managePaymentTermPageLocator.create_new_payment_term_page_title_xpath)
    }

    verifyPaymentTermDetailsPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(managePaymentTermPageLocator.payment_term_details_page_title_xpath)
    }

    verifyListPaymentTermPageTitleDisplay(){
        commonAction.wait(1)
        commonAction.verifyElementByXpathVisible(managePaymentTermPageLocator.list_payment_term_page_title_xpath)
    }

    verifyPaymentTermNameInListDisplay(name){
        commonAction.verifyElementByXpathVisible(printf(managePaymentTermPageLocator.payment_term_name_in_list_xpath, name))
    }

    getPayInInList(){
        return commonAction.getTextElement(managePaymentTermPageLocator.pay_in_in_list_css)
    }

    getRemarkInList(){
        return commonAction.getTextElement(managePaymentTermPageLocator.remark_in_list_css)
    }

    getUpdaterInList(){
        return commonAction.getTextElement(managePaymentTermPageLocator.updater_in_list_css)
    }

    getValidationPaymentTermName(){
        return commonAction.getTextElementByXpath(managePaymentTermPageLocator.validation_text_payment_term_name_xpath)
    }

    getValidationPayIn(){
        return commonAction.getTextElementByXpath(managePaymentTermPageLocator.validation_text_pay_in_xpath)
    }

}export default ManagePaymentTermPage