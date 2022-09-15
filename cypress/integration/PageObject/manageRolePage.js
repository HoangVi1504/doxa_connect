import CommonAction from '../commons/common_actions'
import UrlPageLocator from '../PageUI/urlPageUI'
import ManageRolePageLocator from '../PageUI/manageRolePageUI'

var printf = require('printf')
const commonAction = new CommonAction()
const urlPageLocator = new UrlPageLocator()
const manageRolePageLocator = new ManageRolePageLocator()

class ManageRolePage{
    constructor() {
        this.env = 'stag'
    }

    enterValueToRoleNameTextbox(roleName){
        commonAction.clickToElement(manageRolePageLocator.role_txb_css)
        commonAction.enterValueToTextbox(manageRolePageLocator.role_txb_css, roleName)
    }

    enterValueToFilterFeatureName(featureName){
        commonAction.clickToElement(manageRolePageLocator.filter_feature_name_css)
        commonAction.enterValueToTextbox(manageRolePageLocator.filter_feature_name_css, featureName)
    }

    enterValueToFilterRole(roleName){
        let token = window.localStorage.getItem("token")
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.role_list_url, this.env),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
            commonAction.clickToElement(manageRolePageLocator.filter_role_in_list_css)
            commonAction.enterValueToTextbox(manageRolePageLocator.filter_role_in_list_css, roleName)
        })
    }

    doubleClickToRoleName(roleName){
        commonAction.doubleClickToElementByXpath(printf(manageRolePageLocator.role_name_in_list_xpath, roleName))
    }

    checkToReadCheckbox(featureName){
        commonAction.checkCheckboxByXpath(printf(manageRolePageLocator.read_checkbox_xpath, featureName))
    }

    checkToWriteCheckbox(featureName){
        commonAction.checkCheckboxByXpath(printf(manageRolePageLocator.write_checkbox_xpath, featureName))
    }

    checkToApproverCheckbox(featureName){
        commonAction.checkCheckboxByXpath(printf(manageRolePageLocator.approver_checkbox_xpath, featureName))
    }

    clearValueInFilterFeatureName(){
        commonAction.clearValueInTextbox(manageRolePageLocator.filter_feature_name_css)
    }

    clearValueInRoleNameTextbox(){
        commonAction.clearValueInTextbox(manageRolePageLocator.role_txb_css)
    }

    clearValueInFilterRoleName(){
        commonAction.clearValueInTextbox(manageRolePageLocator.filter_role_in_list_css)
    }

    clickToCloneRoleIcon(roleName){
        commonAction.clickToElementByXpath(printf(manageRolePageLocator.clone_role_icon_xpath, roleName))
    }

    clickToDeleteRole(){
        commonAction.clickToElementByXpath(manageRolePageLocator.delete_role_icon_xpath)
    }

    verifyReadCheckboxIsChecked(featureName){
        commonAction.verifyCheckBoxIsCheckedByXpath(printf(manageRolePageLocator.read_checkbox_xpath, featureName))
    }

    verifyWriteCheckboxIsChecked(featureName){
        commonAction.verifyCheckBoxIsCheckedByXpath(printf(manageRolePageLocator.write_checkbox_xpath, featureName))
    }

    verifyApproverCheckboxIsChecked(featureName){
        commonAction.verifyCheckBoxIsCheckedByXpath(printf(manageRolePageLocator.approver_checkbox_xpath, featureName))
    }

    verifyCreateNewRolePageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(manageRolePageLocator.create_new_role_page_title_xpath)
    }

    verifyRoleDetailsPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(manageRolePageLocator.role_detail_page_title_xpath)
    }

    verifyListRolePageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(manageRolePageLocator.list_role_page_title_xpath)
        commonAction.wait(3)
    }

    verifyRoleNameInListDisplay(roleName){
        commonAction.verifyElementByXpathVisible(printf(manageRolePageLocator.role_name_in_list_xpath, roleName))
    }

    verifyValueInRoleTextboxExist(roleName){
        commonAction.verifyValueInTextboxExist(manageRolePageLocator.role_txb_css, roleName)
    }

    getRoleStatusInList(){
        return commonAction.getTextElement(manageRolePageLocator.role_status_in_list_css)
    }

    getRoleCreatorInList(){
        return commonAction.getTextElement(manageRolePageLocator.role_creator_in_list_css)
    }

}export default ManageRolePage