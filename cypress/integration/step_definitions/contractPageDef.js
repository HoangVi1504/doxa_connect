import ContractPage from '../PageObject/contractPage';
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

const contractPage = new ContractPage()

Then(/^I see 'Contract Detail' page title$/, () => {
    contractPage.verifyContractDetailPageTitleDisplay()
})

Then(/^I see contract number in 'Contract No' textbox at 'Contract Detail' page$/, () => {
    contractPage.verifyValueInContractNumberTextboxExits(sessionStorage.getItem("contractNumber"))
})