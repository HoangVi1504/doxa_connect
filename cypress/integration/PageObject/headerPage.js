import CommonAction from '../commons/common_actions'
import HeaderPageLocator from '../PageUI/headerPageUI'

const commonAction = new CommonAction()
const headerPageLocator = new HeaderPageLocator()

class HeaderPage{
    logOut(){
        commonAction.clickToElement('.fa-power-off')
    }

}export default HeaderPage