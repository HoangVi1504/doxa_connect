import CommonAction from '../commons/common_actions'
import ContractPageLocator from '../PageUI/contractPageUI'

const commonAction = new CommonAction()
const contractPageLocator = new ContractPageLocator()

class ContractPage {
    verifyValueInContractNumberTextboxExits(contractNumber){
        commonAction.verifyValueInTextboxExist(contractPageLocator.contract_number_txb_css, contractNumber)
    }
    verifyContractDetailPageTitleDisplay(){
        commonAction.verifyElementByXpathVisible(contractPageLocator.contract_detail_page_title_xpath)
    }
}export default ContractPage