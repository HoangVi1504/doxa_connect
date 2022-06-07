import CommonAction from '../commons/common_actions'

const commonAction = new CommonAction()

class HeaderPage{
    logOut(){
        commonAction.clickToElement('.fa-power-off')
    }

}export default HeaderPage