import CommonAction from '../commons/common_actions'
import ManageCategoryPageLocator from '../PageUI/manageCategoryPageUI'

var printf = require('printf')
const commonAction = new CommonAction()
const manageCategoryPageLocator = new ManageCategoryPageLocator()

class ManageCategoryPage{

    enterValueToFilterCategoryName(categoryName){
        commonAction.enterValueToTextboxAfterClear(manageCategoryPageLocator.filter_category_name_txb_css, categoryName)
    }

    enterValueToCategoryNameTextbox(categoryName){
        commonAction.enterValueToTextboxAfterClear(manageCategoryPageLocator.category_name_txb_css, categoryName)
    }

    enterValueToCategoryDescriptionTextbox(description){
        commonAction.enterValueToTextboxAfterClear(manageCategoryPageLocator.category_description_txb_css, description)
    }

    doubleClickToCategoryNameInList(categoryName){
        commonAction.doubleClickToElementByXpath(printf(manageCategoryPageLocator.category_name_in_list_xpath, categoryName))
    }

    checkToCategoryNameCheckboxInList(categoryName){
        commonAction.checkCheckboxByXpath(printf(manageCategoryPageLocator.category_name_ckb_xpath, categoryName))
    }

    checkToAllCategoryNameCheckboxInList(){
        commonAction.checkCheckboxByXpath(manageCategoryPageLocator.all_category_name_ckb_in_list_xpath)
    }

    clickToActionCategoryInList(action){
        commonAction.clickToElementByXpath(printf(manageCategoryPageLocator.action_category_in_list_xpath, action))
    }

    clickToActivateNotificationButton(){
        commonAction.clickToElementByXpath(manageCategoryPageLocator.activate_notification_button_xpath)
    }

    clickToDeactivateNotificationButton(){
        commonAction.clickToElementByXpath(manageCategoryPageLocator.deactivate_notification_button_xpath)
    }

    clickToDeleteNotificationButton(){
        commonAction.clickToElementByXpath(manageCategoryPageLocator.delete_notification_button_xpath)
    }

    verifyCreateCategoryPageTitleDisplay(){
        commonAction.wait(1)
        commonAction.verifyElementByXpathVisible(manageCategoryPageLocator.create_category_page_title_xpath)
    }

    verifyCategoryDetailPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(manageCategoryPageLocator.category_details_page_title_xpath)
    }

    verifyListCategoryPageTitleDisplay(){
        commonAction.wait(1)
        commonAction.verifyElementByXpathVisible(manageCategoryPageLocator.list_category_page_title_xpath)
    }

    verifyValueInCategoryNameTextboxExist(categoryName){
        commonAction.verifyValueInTextboxExist(manageCategoryPageLocator.category_name_txb_css, categoryName)
    }

    verifyValueInCategoryDescriptionTextboxExist(description){
        commonAction.verifyValueInTextboxExist(manageCategoryPageLocator.category_description_txb_css, description)
    }

    verifyCategoryNameInList(categoryName){
        commonAction.verifyElementByXpathVisible(printf(manageCategoryPageLocator.category_name_in_list_xpath, categoryName))
    }

    verifyActionCatalogueInList(action){
        commonAction.verifyElementByXpathVisible(printf(manageCategoryPageLocator.action_category_in_list_xpath, action))
    }

    getCategoryDescriptionInList(){
        return commonAction.getTextElement(manageCategoryPageLocator.category_description_in_list_css)
    }

    getActiveCategoryStatusInList(){
        return commonAction.getTextElement(manageCategoryPageLocator.active_category_status_in_list_css)
    }

    getValidationCategoryName(){
        return commonAction.getTextElementByXpath(manageCategoryPageLocator.validation_text_category_name_xpath)
    }

}export default ManageCategoryPage