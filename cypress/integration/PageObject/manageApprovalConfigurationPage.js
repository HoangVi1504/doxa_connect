import CommonPage from './commonPage'
import CommonAction from '../commons/common_actions'
import ManageApprovalConfigurationPageLocator from '../PageUI/manageApprovalConfigurationPageUI'

var printf = require('printf')
const commonPage = new CommonPage()
const commonAction = new CommonAction()
const manageApprovalConfigurationPageLocator = new ManageApprovalConfigurationPageLocator()

class ManageApprovalConfigurationPage{

    checkOptionCheckbox(checkboxName){
        commonAction.checkCheckboxByXpath(printf(manageApprovalConfigurationPageLocator.option_checkbox_xpath, checkboxName))
    }

    uncheckApprovalCheckbox(){
        let count = 0
        var arrCheckbox = ["Pre Purchase Requisition", "Purchase Requisition", "Good Receipts", "Invoice", "RFQ Pricing", "Purchase Order", "Maincon Variation Request"]
        arrCheckbox.map(async(val)=>{ 
            cy.xpath(`//*[text()='${val}']/parent::*//input[@type='checkbox']`).invoke('prop', 'checked').then(state => {
                if(state == true){
                    commonAction.uncheckCheckboxByXpath(`//*[text()='${val}']/parent::*//input[@type='checkbox']`)
                    count++
                }
            })
        });
        cy.wrap(count).then((e)=>{
            if(count>0){
                commonPage.clickToButtonFormat1("Save")
                commonPage.verifyMediaHeadingMessageDisplay("Update is successful")
                commonPage.clickToButtonFormat1("I Understand")
            } 
        }) 
    }

    verifyApprovalConfigurationTitleDisplay(){
        commonAction.verifyElementByXpathVisible(manageApprovalConfigurationPageLocator.approval_configuration_title_xpath)
    }

    verifyOptionCheckboxIsChecked(checkboxName){
        commonAction.verifyCheckBoxIsCheckedByXpath(printf(manageApprovalConfigurationPageLocator.option_checkbox_xpath, checkboxName))
    }

}export default ManageApprovalConfigurationPage