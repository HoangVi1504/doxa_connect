import CommonAction from '../commons/common_actions'
import CommonPageLocator from '../PageUI/commonPageUI'
import ManageApprovalMatrixPageLocator from '../PageUI/manageApprovalMatrixPageUI'

var printf = require('printf')
const commonAction = new CommonAction()
const commonPageLocator = new CommonPageLocator()
const manageApprovalMatrixPageLocator = new ManageApprovalMatrixPageLocator()

class ManageApprovalMatrixPage{

    enterValueToFilterApprovalCodeTextbox(approvalCode){
        commonAction.enterValueToTextboxAfterClear(manageApprovalMatrixPageLocator.filter_approval_code_txb_css, approvalCode)
    }

    enterValueToFilterApprovalNameTextbox(approvalName){
        commonAction.enterValueToTextboxAfterClear(manageApprovalMatrixPageLocator.filter_approval_name_txb_css, approvalName)
    }

    enterValueToSearchApprovalMatrixTextbox(approvalName){
        commonAction.enterValueToTextboxAfterClearByXpath(manageApprovalMatrixPageLocator.search_approval_matrix_for_txb_xpath, approvalName)
    }

    enterValueToApprovalCodeTextbox(approvalCode){
        commonAction.enterValueToTextboxAfterClear(manageApprovalMatrixPageLocator.approval_code_txb_css, approvalCode)
    }

    enterValueToApprovalNameTextbox(approvalName){
        commonAction.enterValueToTextboxAfterClear(manageApprovalMatrixPageLocator.approval_name_txb_css, approvalName)
    }

    enterValueToApprovalRangeFromTextbox(value, position){
        commonAction.enterValueToTextboxAfterClearByXpath(printf(manageApprovalMatrixPageLocator.option_range_from_txb_xpath, position), value)
    }

    enterValueToApprovalRangeToTextbox(value, position){
        commonAction.enterValueToTextboxAfterClearByXpath(printf(manageApprovalMatrixPageLocator.option_range_to_txb_xpath, position), value)
    }

    selectValueFromApprovalMatrixDropdown(value){
        commonAction.selectOptionFromDropdownByXpath(manageApprovalMatrixPageLocator.approval_matrix_dropdown_xpath, printf(commonPageLocator.option_value_in_dropdown_xpath, value))
    }

    selectValueFromNumberApprovalLevelDropdown(number){
        commonAction.selectValueFromElement(manageApprovalMatrixPageLocator.approval_level_dropdown_css, number)
    }

    selectValueFromAssignedApproversDropdown(approver, position){
        commonAction.selectOptionFromDropdownWithSearch(printf(manageApprovalMatrixPageLocator.assigned_approvers_dropdown_xpath, position), printf(manageApprovalMatrixPageLocator.search_assigned_approvers_txb_xpath, position), printf(commonPageLocator.option_value_in_dropdown_xpath, approver), approver)
    }

    doubleClickToApprovalCodeInList(approvalCode){
        commonAction.doubleClickToElementByXpath(printf(manageApprovalMatrixPageLocator.approval_code_in_list_xpath, approvalCode))
    }

    checkToValueCriteriaCheckbox(position){
        commonAction.checkCheckboxByXpath(printf(manageApprovalMatrixPageLocator.option_value_criteria_ckb_xpath, position))
    }

    checkToApprovalCodeInList(approvalCode){
        commonAction.checkCheckboxByXpath(printf(manageApprovalMatrixPageLocator.approval_code_ckb_in_list_xpath, approvalCode))
    }

    clickToActivateNotificationButton(){
        commonAction.clickToElementByXpath(manageApprovalMatrixPageLocator.activate_notification_button_xpath)
    }

    clickToDeactivateNotificationButton(){
        commonAction.clickToElementByXpath(manageApprovalMatrixPageLocator.deactivate_notification_button_xpath)
    }

    clickToApprovalActionInList(action, approvalCode){
        commonAction.clickToElementByXpath(printf(manageApprovalMatrixPageLocator.approval_action_in_list_xpath, approvalCode, action))
    }

    clickToApprovalMatrixDropdown(){
        commonAction.clickToElementByXpath(manageApprovalMatrixPageLocator.approval_matrix_dropdown_xpath)
    }

    verifyValueInApprovalCodeTextboxExist(approvalCode){
        commonAction.verifyValueInTextboxExist(manageApprovalMatrixPageLocator.approval_code_txb_css, approvalCode)
    }

    verifyValueInApprovalNameTextboxExist(approvalName){
        commonAction.verifyValueInTextboxExist(manageApprovalMatrixPageLocator.approval_name_txb_css, approvalName)
    }

    verifyCreateApprovalPageTitleDIsplay(){
        commonAction.verifyElementByXpathVisible(manageApprovalMatrixPageLocator.create_approval_page_title_xpath)
        commonAction.wait(1)
    }

    verifyApprovalDetailsPageTitleDIsplay(){
        commonAction.verifyElementByXpathVisible(manageApprovalMatrixPageLocator.approval_details_page_title_xpath)
    }

    verifyListApprovalPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(manageApprovalMatrixPageLocator.list_approval_page_title_xpath)
        commonAction.wait(2)
    }

    verifyApprovalCodeInListDisplay(approvalCode){
        commonAction.verifyElementByXpathVisible(printf(manageApprovalMatrixPageLocator.approval_code_in_list_xpath, approvalCode))
    }

    verifyApprovalActionInListDisplay(approvalCode, action){
        commonAction.verifyElementByXpathVisible(printf(manageApprovalMatrixPageLocator.approval_action_in_list_xpath, approvalCode, action))
    }

    getApprovalNameInList(){
        return commonAction.getTextElement(manageApprovalMatrixPageLocator.approval_name_in_list_css)
    }

    getNumberOfApprovalLevelInList(){
        return commonAction.getTextElement(manageApprovalMatrixPageLocator.number_approval_level_in_list_css)
    }

    getApprovalMatrixInList(){
        return commonAction.getTextElement(manageApprovalMatrixPageLocator.approval_matrix_in_list_css)
    }

    getCreatorApprovalInList(){
        return commonAction.getTextElement(manageApprovalMatrixPageLocator.creator_approval_in_list_css)
    }

    getApprovalStatusInList(){
        return commonAction.getTextElement(manageApprovalMatrixPageLocator.approval_status_in_list_css)
    }

    getValidationApprovalCode(){
        return commonAction.getTextElementByXpath(manageApprovalMatrixPageLocator.validation_text_approval_code_xpath)
    }

    getValidationApprovalName(){
        return commonAction.getTextElementByXpath(manageApprovalMatrixPageLocator.validation_text_approval_name_xpath)
    }

    getValidationApprovalLevel(){
        return commonAction.getTextElementByXpath(manageApprovalMatrixPageLocator.validation_text_approval_level_xpath)
    }

}export default ManageApprovalMatrixPage