import CommonAction from '../commons/common_actions'
import UrlPageLocator from '../PageUI/urlPageUI'
import CommonPageLocator from '../PageUI/commonPageUI'
import ManageApprovalGroupPageLocator from '../PageUI/manageApprovalGroupPageUI'

var printf = require('printf')
var dataBuyer = require('../../../dataBuyer.json');

const commonAction = new CommonAction()
const urlPageLocator = new UrlPageLocator()
const commonPageLocator = new CommonPageLocator()
const manageApprovalGroupPageLocator = new ManageApprovalGroupPageLocator()

class ManageApprovalGroupPage{
    constructor() {
        this.env = 'stag'
    }

    enterValueToFilterApprovalGroupName(approvalGroupName){
        let token = window.localStorage.getItem("token")
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.approval_group_list_url, this.env, dataBuyer.buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
            this.scrollToElementInList("0%")
            commonAction.clickToElement(manageApprovalGroupPageLocator.filter_approval_group_name_txb_css)
            commonAction.enterValueToTextboxAfterClear(manageApprovalGroupPageLocator.filter_approval_group_name_txb_css, approvalGroupName)
        })
    }

    enterValueToApprovalGroupNameTextbox(approvalGroupName){
        commonAction.enterValueToTextboxAfterClear(manageApprovalGroupPageLocator.approval_group_name_txb_css, approvalGroupName)
    }

    enterValueToRemarkTextbox(remark){
        commonAction.enterValueToTextboxAfterClear(manageApprovalGroupPageLocator.group_description_txb_css, remark)
    }

    selectValueFromApproverDropdown(approver){
        commonAction.selectOptionFromDropdownByXpath(manageApprovalGroupPageLocator.approver_dropdown_xpath, printf(commonPageLocator.option_value_in_dropdown_xpath, approver))
    }

    doubleClickToApprovalGroupNameInList(approvalGroupName){
        this.scrollToElementInList("0%")
        commonAction.doubleClickToElementByXpath(printf(manageApprovalGroupPageLocator.approval_group_name_in_list_xpath, approvalGroupName))
    }

    checkToApprovalGroupNameInList(approvalGroupName){
        this.scrollToElementInList("0%")
        commonAction.checkCheckboxByXpath(printf(manageApprovalGroupPageLocator.approval_group_name_ckb_xpath, approvalGroupName))
    }

    clickToCloseApproverButton(approver){
        commonAction.clickToElementByXpath(printf(manageApprovalGroupPageLocator.close_approver_button_xpath, approver))
    }

    clickToActivateNotificationButton(){
        commonAction.clickToElementByXpath(manageApprovalGroupPageLocator.activate_notification_button_xpath)
    }

    clickToDeactivateNotificationButton(){
        commonAction.clickToElementByXpath(manageApprovalGroupPageLocator.deactivate_notification_button_xpath)
    }

    clickToActionApprovalGroupInList(action){
        commonAction.clickToElementByXpath(printf(manageApprovalGroupPageLocator.action_approval_group_in_list_xpath, action))
    }

    verifyValueInApprovalGroupNameTextboxExist(approvalGroupName){
        commonAction.verifyValueInTextboxExist(manageApprovalGroupPageLocator.approval_group_name_txb_css, approvalGroupName)
    }

    verifyCreateApprovalGroupPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(manageApprovalGroupPageLocator.create_approval_group_page_title_xpath)
        commonAction.wait(1)
    }

    verifyApprovalGroupDetailsPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(manageApprovalGroupPageLocator.approval_group_details_page_title_xpath)
    }

    verifyListApprovalGroupPageTileDisplay(){
        commonAction.verifyElementByXpathVisible(manageApprovalGroupPageLocator.list_approval_group_page_title_xpath)
        commonAction.wait(1)
    }

    verifyApprovalGroupNameInListDisplay(approvalGroupName){
        commonAction.verifyElementByXpathVisible(printf(manageApprovalGroupPageLocator.approval_group_name_in_list_xpath, approvalGroupName))
    }

    verifyActionApprovalGroupInListDisplay(action){
        commonAction.verifyElementByXpathVisible(printf(manageApprovalGroupPageLocator.action_approval_group_in_list_xpath, action))
    }

    getApproverInList(){
        return commonAction.getTextElement(manageApprovalGroupPageLocator.approver_in_list_css)
    }

    getRemarkInList(){
        return commonAction.getTextElement(manageApprovalGroupPageLocator.group_description_in_list_css)
    }

    getCreatorInList(){
        return commonAction.getTextElement(manageApprovalGroupPageLocator.creator_in_list_css)
    }

    getApprovalGroupActiveStatusInList(){
        this.scrollToElementInList("100%")
        return commonAction.getTextElement(manageApprovalGroupPageLocator.approval_group_active_status_in_list_css)
    }

    getValidationApprovalGroupName(){
        return commonAction.getTextElementByXpath(manageApprovalGroupPageLocator.validation_text_approval_group_name_xpath)
    }

    scrollToElementInList(position){
        commonAction.scrollToPositionElement(manageApprovalGroupPageLocator.scroll_bar_in_approval_group_list_xpath, position)
    }

}export default ManageApprovalGroupPage