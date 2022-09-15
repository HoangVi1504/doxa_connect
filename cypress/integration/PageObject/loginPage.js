import CommonAction from '../commons/common_actions'
import LoginPageLocator from '../PageUI/loginPageUI'
import CommonPageLocator from '../PageUI/commonPageUI'

const commonAction = new CommonAction()
const loginPageLocator = new LoginPageLocator
const commonPageLocator = new CommonPageLocator()

class LoginPage{

    loginWithEmailPass(authenticationFile){
        cy.fixture(authenticationFile).then((authenticationFile) =>{
            this.fillEmailPasswordLogin(authenticationFile.email, authenticationFile.password)
        })
    }

    fillEmailPasswordLogin(email, password){
        commonAction.enterValueToTextboxAfterClear(loginPageLocator.email_txb_css, email)
        commonAction.enterValueToTextboxAfterClear(loginPageLocator.password_txb_css, password)
        commonAction.submitForm()
        commonAction.wait(4)
        commonAction.verifyElementByXpathVisible(commonPageLocator.dashboard_title_xpath)
    }

    fillEmail(email){
        commonAction.enterValueToTextboxAfterClear(loginPageLocator.email_txb_css, email)
    }

    fillPassword(password){
        commonAction.enterValueToTextboxAfterClear(loginPageLocator.password_txb_css, password)
    }

    clickToLoginButton(){
        commonAction.clickToElement(loginPageLocator.login_button_css)
        commonAction.wait(10)
    }

    verifyDoxaConnectImgDisplay(){
        commonAction.verifyElementVisible(loginPageLocator.doxa_connect_img_css)
    }

    submitForm(){
        commonAction.wait(1)
        commonAction.submitForm()
    }

}export default LoginPage
