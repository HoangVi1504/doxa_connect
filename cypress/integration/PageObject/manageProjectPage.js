import CommonAction from '../commons/common_actions'
import CommonPageLocator from '../PageUI/commonPageUI'
import ManageProjectPageLocator from '../PageUI/manageProjectPageUI'

var printf = require('printf')
const commonAction = new CommonAction()
const commonPageLocator = new CommonPageLocator()
const manageProjectPageLocator = new ManageProjectPageLocator()

class ManageProjectPage{

    enterValueToFilterProjectCode(projectCode){
        commonAction.enterValueToTextbox(manageProjectPageLocator.filter_project_code_txb_css, projectCode)
    }

    enterValueToFilterProjectTitle(projectTitle){
        commonAction.enterValueToTextbox(manageProjectPageLocator.filter_project_title_txb_css, projectTitle)
    }

    enterValueToProjectCodeTextbox(projectCode){
        commonAction.enterValueToTextbox(manageProjectPageLocator.project_code_txb_css, projectCode)
    }

    enterValueToProjectCodeDescriptionTextbox(description){
        commonAction.enterValueToTextbox(manageProjectPageLocator.project_code_description_txb_css, description)       
    }

    enterValueToErpProjectCodeTextbox(erp){
        commonAction.enterValueToTextbox(manageProjectPageLocator.erp_project_code_txb_css, erp)
    }

    enterValueToProjectTitleTextbox(projectTitle){
        commonAction.enterValueToTextbox(manageProjectPageLocator.project_title_txb_css, projectTitle)
    }

    enterValueToStartDateTextbox(date){
        commonAction.enterValueToTextbox(manageProjectPageLocator.start_date_txb_css, date)
    }

    enterValueToEndDateTextbox(date){
        commonAction.enterValueToTextbox(manageProjectPageLocator.end_date_txb_css, date)
    }

    enterValueToOverallBudgetTextbox(budget){
        commonAction.enterValueToTextbox(manageProjectPageLocator.overall_budget_txb_css, budget)
    }

    enterValueToProjectDescriptionTextbox(description){
        commonAction.enterValueToTextbox(manageProjectPageLocator.project_description_txb_css, description)
    }

    enterValueToProjectInChargeRemarkTextbox(remark){
        commonAction.enterValueToTextbox(manageProjectPageLocator.project_in_charge_remark_txb_css, remark)
    }

    enterValueProjectAdminRemarkTextbox(remark){
        commonAction.enterValueToTextbox(manageProjectPageLocator.project_admin_remark_txb_css, remark)
    }

    enterValueToProjectTeamMemberRemarkTextbox(remark){
        commonAction.enterValueToTextbox(manageProjectPageLocator.project_team_member_remark_txb_css, remark)
    }

    selectValueFromCurrencyDropdown(currency){
        commonAction.selectOptionFromDropdownByXpath(manageProjectPageLocator.currency_dropdown_xpath, printf(manageProjectPageLocator.option_value_in_dropdown_xpath, currency))
    }

    selectValueFromProjectAddressDropdown(address){
        commonAction.clickToElementByXpath(manageProjectPageLocator.project_address_dropdown_xpath)
        commonAction.wait(1)
        commonAction.clickToElementByXpath(printf(commonPageLocator.option_value_in_dropdown_xpath, address))
        // commonAction.selectOptionFromDropdownByXpath(manageProjectPageLocator.project_address_dropdown_xpath, printf(commonPageLocator.option_value_in_dropdown_xpath, address))
    }

    selectValueFromProjectInChargeDropdown(value){
        commonAction.selectOptionFromDropdownWithSearch(manageProjectPageLocator.overall_project_in_charge_dropdown_xpath, manageProjectPageLocator.search_overall_project_in_charge_txb_xpath, printf(manageProjectPageLocator.option_value_in_dropdown_xpath, value), value)
    }

    selectValueFromProjectAdminDropdown(value){
        commonAction.selectOptionFromDropdownWithSearch(manageProjectPageLocator.project_admin_dropdown_xpath, manageProjectPageLocator.search_project_admin_txb_xpath, printf(manageProjectPageLocator.option_value_in_dropdown_xpath, value), value)
    }

    selectValueFromProjectTeamMemberDropdown(value){
        commonAction.selectOptionFromDropdownWithSearch(manageProjectPageLocator.project_team_member_dropdown_xpath, manageProjectPageLocator.search_project_team_member_txb_xpath, printf(manageProjectPageLocator.option_value_in_dropdown_xpath, value), value)
    }

    doubleClickToProjectCodeInList(projectCode){
        commonAction.doubleClickToElementByXpath(printf(manageProjectPageLocator.project_code_in_list_xpath, projectCode))
    }

    clearValueInProjectTitleTextbox(){
        commonAction.clearValueInTextbox(manageProjectPageLocator.project_title_txb_css)
    }

    clearValueInProjectDescriptionTextbox(){
        commonAction.clearValueInTextbox(manageProjectPageLocator.project_description_txb_css)
    }

    verifyCreateProjectPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(manageProjectPageLocator.create_project_page_title_xpath)
    }

    verifyProjectDetailsPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(manageProjectPageLocator.project_detail_page_title_xpath)
    }

    verifyProjectListPageTitleDisplay(){
        commonAction.wait(1)
        commonAction.verifyElementByXpathVisible(manageProjectPageLocator.list_project_title_xpath)
    }

    verifyProjectForecastListPageTitleDisplay(){
        commonAction.wait(1)
        commonAction.verifyElementByXpathVisible(manageProjectPageLocator.list_project_forecast_title_xpath)
    }

    verifyValueInProjectCodeTextboxExist(projectCode){
        commonAction.verifyValueInTextboxExist(manageProjectPageLocator.project_code_txb_css, projectCode)
    }

    verifyValueInProjectTitleTextboxExist(projectTitle){
        commonAction.verifyValueInTextboxExist(manageProjectPageLocator.project_title_txb_css, projectTitle)
    }

    verifyValueInCurrencyTextboxExist(currency){
        commonAction.verifyValueInTextboxExist(manageProjectPageLocator.currency_txb_css, currency)
    }

    verifyValueInApprovedPrBudgetTextboxExist(value){
        commonAction.verifyValueInTextboxExist(manageProjectPageLocator.approved_pr_budget_txb_css, value)
    }

    verifyValueInOverallBudgetTextboxExist(value){
        commonAction.verifyValueInTextboxExist(manageProjectPageLocator.overall_budget_txb_css, value)
    }

    verifyValueInIssuedPoBudgetTextboxExist(value){
        commonAction.verifyValueInTextboxExist(manageProjectPageLocator.issued_po_budget_txb_css, value)
    }

    verifyValueInAddressLine1TextboxExist(address){
        commonAction.verifyValueInTextboxExist(manageProjectPageLocator.address_line_1_txb_css, address)
    }

    verifyValueInAddressLine2TextboxExist(address){
        commonAction.verifyValueInTextboxExist(manageProjectPageLocator.address_line_2_txb_css, address)
    }

    verifyValueInPostalCodeTextboxExist(postalCode){
        commonAction.verifyValueInTextboxExist(manageProjectPageLocator.postal_code_txb_css, postalCode)
    }

    verifyValueInCountryTextboxExist(country){
        commonAction.verifyValueInTextboxExist(manageProjectPageLocator.country_txb_css, country)
    }

    verifyValueInStateTextboxExist(state){
        commonAction.verifyValueInTextboxExist(manageProjectPageLocator.state_txb_css, state)
    }

    verifyValueInCityTextboxExist(city){
        commonAction.verifyValueInTextboxExist(manageProjectPageLocator.city_txb_css, city)
    }

    verifyProjectCodeInListDisplay(projectCode){
        commonAction.verifyElementByXpathVisible(printf(manageProjectPageLocator.project_code_in_list_xpath, projectCode))
    }

    getProjectTitleInList(){
        return commonAction.getTextElement(manageProjectPageLocator.project_title_in_list_css)
    }

    getProjectStatusInList(){
        return commonAction.getTextElement(manageProjectPageLocator.project_status_in_list_css)
    }

    getProjectDescriptionInList(){
        return commonAction.getTextElement(manageProjectPageLocator.project_description_in_list_css)
    }

    getProjectAdminInList(){
        return commonAction.getTextElement(manageProjectPageLocator.project_admin_in_list_css)
    }

    getStartDateInList(){
        return commonAction.getTextElement(manageProjectPageLocator.start_date_in_list_css)
    }

    getEndDateInList(){
        return commonAction.getTextElement(manageProjectPageLocator.end_date_in_list_css)
    }

    getCurrencyInList(){
        commonAction.clickToElement(manageProjectPageLocator.filter_currency_txb_css)
        return commonAction.getTextElement(manageProjectPageLocator.currency_in_list_css)
    }

    getOverallBudgetInList(){
        commonAction.clickToElement(manageProjectPageLocator.filter_overall_budget_txb_css)
        return commonAction.getTextElement(manageProjectPageLocator.overall_budget_in_list_css)
    }

    getValidationProjectCode(){
        return commonAction.getTextElementByXpath(manageProjectPageLocator.validation_text_project_code_xpath)
    }

    getValidationProjectTitle(){
        return commonAction.getTextElementByXpath(manageProjectPageLocator.validation_text_project_title_xpath)
    }

    getValidationStartDate(){
        return commonAction.getTextElementByXpath(manageProjectPageLocator.validation_text_start_date_xpath)
    }

    getValidationEndDate(){
        return commonAction.getTextElementByXpath(manageProjectPageLocator.validation_text_end_date_xpath)
    }

    getValidationOverallBudget(){
        return commonAction.getTextElementByXpath(manageProjectPageLocator.validation_text_overall_budge_xpath)
    }

    getValidationProjectDescription(){
        return commonAction.getTextElementByXpath(manageProjectPageLocator.validation_text_project_description_xpath)
    }

}export default ManageProjectPage