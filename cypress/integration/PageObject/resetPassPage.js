import CommonAction from '../commons/common_actions'
import ResetPassPageLocator from '../PageUI/resetPassPageUI'

const commonAction = new CommonAction()
const resetPassPageLocator = new ResetPassPageLocator()

class ResetPassPage{
    enterValueToNewPasswordTextbox(password){
        commonAction.enterValueToTextbox(resetPassPageLocator.new_password_txb_css, password)
    }

    enterValueToRepeatPasswordTextbox(password){
        commonAction.enterValueToTextbox(resetPassPageLocator.repeat_password_txb_css, password)
    }

    clickToSubmitButton(){
        commonAction.clickToElement(resetPassPageLocator.submit_button_css)
    }

    clickToLoginNowButton(){
        commonAction.clickToElement(resetPassPageLocator.login_now_button_css)
    }

    verifyResetPasswordTitleDisplay(){
        commonAction.verifyElementVisible(resetPassPageLocator.reset_password_title_css)
    }

    verifyResetPassMessageDisplay(){
        return commonAction.getTextElement(resetPassPageLocator.reset_pass_message_css)
    }

}export default ResetPassPage