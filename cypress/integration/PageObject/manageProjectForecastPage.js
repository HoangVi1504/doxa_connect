import CommonAction from '../commons/common_actions'
import ManageProjectForeCastPageLocator from '../PageUI/manageProjectForecastPageUI'

var printf = require('printf')
const commonAction = new CommonAction()
const manageProjectForeCastPageLocator = new ManageProjectForeCastPageLocator()

class ManageProjectForeCastPage{

    enterValueToFilterTradeCode(tradeCode){
        commonAction.enterValueToTextbox(manageProjectForeCastPageLocator.filter_trade_code_txb_css, tradeCode)
    }

    enterValueToFilerItemCode(itemCode){
        commonAction.enterValueToTextbox(manageProjectForeCastPageLocator.filter_item_code_txb_css, itemCode)
    }

    checkToTradeCodeCheckbox(tradeCode){
        commonAction.checkCheckboxByXpath(printf(manageProjectForeCastPageLocator.trade_code_ckb_xpath, tradeCode))
    }

    checkToItemCodeCheckbox(itemCode){
        commonAction.checkCheckboxByXpath(printf(manageProjectForeCastPageLocator.item_code_ckb_xpath, itemCode))
    }

    clickToBookIconAddItem(){
        commonAction.clickToElementByXpath(manageProjectForeCastPageLocator.add_item_code_button_xpath)
    }

    verifyForecastTradePageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(manageProjectForeCastPageLocator.forecast_trade_page_title_xpath)
    }

    verifyCodeInListDisplay(code){
        commonAction.verifyElementByXpathVisible(printf(manageProjectForeCastPageLocator.code_in_list_xpath, code))
    }

    verifyValueInProjectCodeTextboxExist(projectCode){
        commonAction.verifyValueInTextboxExist(manageProjectForeCastPageLocator.project_code_txb_css, projectCode)
    }

    verifyValueInProjectTitleTextboxExist(projectTitle){
        commonAction.verifyValueInTextboxExistByXpath(manageProjectForeCastPageLocator.project_title_txb_xpath, projectTitle)
    }

    verifyValueInErpProjectCodeTextboxExist(erp){
        commonAction.verifyValueInTextboxExist(manageProjectForeCastPageLocator.erp_project_code_txb_css, erp)
    }

    verifyValueInStartDateTextboxExist(date){
        commonAction.verifyValueInTextboxExist(manageProjectForeCastPageLocator.start_date_txb_css, date)
    }

    verifyValueInEndDateTextboxExist(date){
        commonAction.verifyValueInTextboxExist(manageProjectForeCastPageLocator.end_date_txb_css, date)
    }

    verifyValueInCurrencyTextboxExist(currency){
        commonAction.verifyValueInTextboxExist(manageProjectForeCastPageLocator.currency_txb_css, currency)
    }

    verifyValueInApprovedPrBudgetTextboxExist(budget){
        commonAction.verifyValueInTextboxExist(manageProjectForeCastPageLocator.approved_pr_budget_txb_css, budget)
    }

    verifyValueInOverallBudgetTextboxExist(budget){
        commonAction.verifyValueInTextboxExist(manageProjectForeCastPageLocator.overall_budget_txb_css, budget)
    }

    verifyValueInIssuedPoBudgetTextboxExist(budget){
        commonAction.verifyValueInTextboxExist(manageProjectForeCastPageLocator.issued_po_budget_txb_css, budget)
    }

    verifyValueInProjectAddressTextboxExist(address){
        commonAction.verifyValueInTextboxExist(manageProjectForeCastPageLocator.project_address_txb_css, address)
    }

    verifyValueInAddressLine1TextboxExist(address){
        commonAction.verifyValueInTextboxExist(manageProjectForeCastPageLocator.address_line_1_txb_css, address)
    }

    verifyValueInAddressLine2TextboxExist(address){
        commonAction.verifyValueInTextboxExist(manageProjectForeCastPageLocator.address_line_2_txb_css, address)
    }

    verifyValueInPostalCodeTextboxExist(postalCode){
        commonAction.verifyValueInTextboxExist(manageProjectForeCastPageLocator.postal_code_txb_css, postalCode)
    }

    verifyValueInCountryTextboxExist(country){
        commonAction.verifyValueInTextboxExist(manageProjectForeCastPageLocator.country_txb_css, country)
    }

    verifyValueInStateTextboxExist(state){
        commonAction.verifyValueInTextboxExist(manageProjectForeCastPageLocator.state_txb_css, state)
    }

    verifyValueInCityTextboxExist(city){
        commonAction.verifyValueInTextboxExist(manageProjectForeCastPageLocator.city_txb_css, city)
    }

}export default ManageProjectForeCastPage