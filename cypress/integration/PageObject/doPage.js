import CommonAction from '../commons/common_actions'
import DoPageLocator from '../PageUI/doPageUI'
import UrlPageLocator from '../PageUI/urlPageUI'

var printf = require('printf')
var dataBuyer = require('../../../dataBuyer.json');
var dataSupplier = require('../../../dataSupplier.json');

const commonAction = new CommonAction()
const doPageLocator = new DoPageLocator()
const urlPageLocator = new UrlPageLocator()

class DoPage{
    constructor() {
        this.env = 'stag'
    }

    enterValueToFilterDoNumberInList(doNumber, listName){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        let supplierCompanyUuid = dataSupplier.supplierCompanyUuid
        let urlRequest
        switch (listName) {
            case "DO":
                urlRequest = printf(urlPageLocator.do_list_url, this.env, supplierCompanyUuid)
                break;

            case "Create GR From DO":
                urlRequest = printf(urlPageLocator.create_gr_from_do_list_url, this.env, buyerCompanyUuid)
                break;
        
            default:
                break;
        }
        cy.request({
            method: 'GET',
            url: urlRequest,
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
            commonAction.wait(1)
            commonAction.enterValueToTextbox(doPageLocator.filter_do_in_list_css, doNumber)
        })
    }

    enterValueToDeliveryDateTextbox(date){
        commonAction.enterValueToTextbox(doPageLocator.delivery_date_txb_css, date)
    }

    enterValueToQuantityConvertTextbox(quantity){
        commonAction.wait(2)
        commonAction.clickToElement(doPageLocator.filter_convert_do_in_do_detail_list_css)
        commonAction.doubleClickToElement(doPageLocator.quantity_to_convert_do_detail_list_css)
        commonAction.doubleClickToElement(doPageLocator.quantity_to_convert_do_detail_list_css)
        commonAction.enterValueToTextboxByXpath(doPageLocator.quantity_to_convert_txb_xpath, quantity)
    }

    doubleClickToDoNumberInList(doNumber){
        commonAction.doubleClickToElementByXpath(printf(doPageLocator.do_number_in_do_list_xpath, doNumber))
    }

    checkToPoNumberCheckbox(){
        commonAction.checkCheckbox(doPageLocator.po_number_checkbox_css)
    }

    checkToDoNumberCheckbox(){
        commonAction.checkCheckbox(doPageLocator.do_number_checkbox_css)
    }

    verifyDoStatusInCreateDoList(){
        return commonAction.getTextElement(doPageLocator.do_status_in_create_do_list_css)
    }

    verifyDoStatusInListDisplay(){
        return commonAction.getTextElement(doPageLocator.do_status_in_list_css)
    }

    verifyDoPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(doPageLocator.do_page_title_xpath)
        commonAction.wait(2)
    }

    verifyDoDetailsPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(doPageLocator.do_details_page_title_xpath)
    }

    verifyCreateDoPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(doPageLocator.create_do_page_title_xpath)
    }

    verifyDoListPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(doPageLocator.do_list_page_title_xpath)
    }

    verifyValueInDoNumberTextboxExits(doNumber){
        commonAction.verifyValueInTextboxExist(doPageLocator.do_number_txb_css, doNumber)
    }

    verifyValidationTextDeliveryDateDisplay(validation){
        commonAction.verifyElementByXpathVisible(printf(doPageLocator.validation_text_delivery_date_xpath, validation))
    }

}export default DoPage