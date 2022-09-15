class MailPageLocator{
    constructor(){
        // Xpath
        this.user_txb_xpath = "//input[@placeholder='user name']";
        this.add_now_button_xpath = "//button[contains(text(),'Add now')]";
        this.domain_dropdown_xpath = "//label[contains(text(),'Domain')]/following-sibling::select";
        this.add_inbox_button_xpath = "//button[contains(text(),'Add inboxe')]";
        this.option_link_getnada_xpath = "(//a[contains(text(),'%s')])[1]";
    }

}export default MailPageLocator