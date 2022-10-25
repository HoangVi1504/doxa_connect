import CommonAction from '../commons/common_actions'
import CommonPageLocator from '../PageUI/commonPageUI'
import ManageFeatureMatrixPageLocator from '../PageUI/manageFeatureMatrixPageUI'

var printf = require('printf')
const commonAction = new CommonAction()
const commonPageLocator = new CommonPageLocator()
const manageFeatureMatrixPageLocator = new ManageFeatureMatrixPageLocator()

class ManageFeatureMatrixPage{

    enterValueToFilterFeatureName(featureName){
        commonAction.enterValueToTextbox(manageFeatureMatrixPageLocator.filter_feature_name_css, featureName)
    }

    selectValueFromSelectUserDropdown(user){
        commonAction.selectOptionFromDropdownByXpath(manageFeatureMatrixPageLocator.select_user_dropdown_xpath, printf(commonPageLocator.option_value_in_dropdown_xpath, user))
    }

    selectValueFromModuleDropdown(module){
        commonAction.selectOptionFromDropdownByXpath(manageFeatureMatrixPageLocator.select_module_dropdown_xpath, printf(commonPageLocator.option_value_in_dropdown_xpath, module))
    }

    checkToReadCheckbox(featureName){
        commonAction.checkCheckboxByXpath(printf(manageFeatureMatrixPageLocator.read_ckb_feature_xpath, featureName))
    }

    checkToWriteCheckbox(featureName){
        commonAction.checkCheckboxByXpath(printf(manageFeatureMatrixPageLocator.write_ckb_feature_xpath, featureName))
    }

    checkToApproveCheckbox(featureName){
        commonAction.checkCheckboxByXpath(printf(manageFeatureMatrixPageLocator.approve_ckb_feature_xpath, featureName))
    }

    unCheckToReadCheckbox(featureName){
        commonAction.uncheckCheckboxByXpath(printf(manageFeatureMatrixPageLocator.read_ckb_feature_xpath, featureName))
    }

    unCheckToWriteCheckbox(featureName){
        commonAction.uncheckCheckboxByXpath(printf(manageFeatureMatrixPageLocator.write_ckb_feature_xpath, featureName))
    }

    unCheckToApproveCheckbox(featureName){
        commonAction.uncheckCheckboxByXpath(printf(manageFeatureMatrixPageLocator.approve_ckb_feature_xpath, featureName))
    }

    verifyManageFeatureMatrixPageTitleDisplay(){
        commonAction.wait(1)
        commonAction.verifyElementByXpathVisible(manageFeatureMatrixPageLocator.manage_feature_matrix_page_title_xpath)
    }

    verifyUserNameDisplay(userName){
        commonAction.verifyElementByXpathVisible(printf(manageFeatureMatrixPageLocator.user_name_xpath, userName))
    }

    verifyEmailDisplay(email){
        commonAction.verifyElementByXpathVisible(printf(manageFeatureMatrixPageLocator.email_user_xpath, email))
    }

    verifyDesignationDisplay(designation){
        commonAction.verifyElementByXpathVisible(printf(manageFeatureMatrixPageLocator.designation_user_xpath, designation))
    }

    verifyReadCheckboxIsChecked(featureName){
        commonAction.verifyCheckBoxIsCheckedByXpath(printf(manageFeatureMatrixPageLocator.read_ckb_feature_xpath, featureName))
    }

    verifyWriteCheckboxIsChecked(featureName){
        commonAction.verifyCheckBoxIsCheckedByXpath(printf(manageFeatureMatrixPageLocator.write_ckb_feature_xpath, featureName))
    }

    verifyApproveCheckboxIsChecked(featureName){
        commonAction.verifyCheckBoxIsCheckedByXpath(printf(manageFeatureMatrixPageLocator.approve_ckb_feature_xpath, featureName))
    }

    verifyReadCheckboxIsUnchecked(featureName){
        commonAction.verifyCheckBoxIsNotCheckedByXpath(printf(manageFeatureMatrixPageLocator.read_ckb_feature_xpath, featureName))
    }

    verifyWriteCheckboxIsUnchecked(featureName){
        commonAction.verifyCheckBoxIsNotCheckedByXpath(printf(manageFeatureMatrixPageLocator.write_ckb_feature_xpath, featureName))
    }

    verifyApproveCheckboxIsUnchecked(featureName){
        commonAction.verifyCheckBoxIsNotCheckedByXpath(printf(manageFeatureMatrixPageLocator.approve_ckb_feature_xpath, featureName))
    }

}export default ManageFeatureMatrixPage