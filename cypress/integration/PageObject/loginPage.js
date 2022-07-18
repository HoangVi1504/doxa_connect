import CommonAction from '../commons/common_actions'
import CommonPageLocator from '../PageUI/commonPageUI'

const commonAction = new CommonAction()
const commonPageLocator = new CommonPageLocator()

class LoginPage{

    loginWithEmailPass(authenticationFile){
        cy.fixture(authenticationFile).then((authenticationFile) =>{
            this.fillEmailPasswordLogin(authenticationFile.email, authenticationFile.password)
        })
    }

    fillEmailPasswordLogin(email, password){
        commonAction.enterValueToTextboxAfterClear('#email',email)
        commonAction.enterValueToTextboxAfterClear('#password',password)
        commonAction.wait(1)
        commonAction.submitForm()
        commonAction.wait(3)
        commonAction.verifyElementByXpathVisible(commonPageLocator.dashboard_title_xpath)
    }

    fillEmail(email){
        commonAction.enterValueToTextboxAfterClear('#email',email)
    }

    fillPassword(password){
        commonAction.enterValueToTextboxAfterClear('#password',password)
    }

    verifyDoxaConnectImgDisplay(){
        commonAction.verifyElementVisible('.doxa_connex_image')
    }

    submitForm(){
        commonAction.wait(1)
        commonAction.submitForm()
    }

}export default LoginPage
