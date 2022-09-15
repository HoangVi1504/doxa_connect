class CommonPageLocator{
    constructor(){
        this.text_xpath = "//*[text()='%s']";
        this.label_xpath = "//label[text()='%s']";
        this.modal_message_xpath = "//*[contains(@class,'modal')]//*[text()='%s']";
        this.option_result_xpath = "//*[@role='option' and contains(text(),'%s')]";
        this.media_heading_xpath = "//*[@class='media-heading']//following-sibling::*[contains(text(),'%s')]";
        this.modal_message_xpath = "//*[contains(@class,'modal')]//*[contains(text(),'%s')]";
        this.layout_sidebar_xpath = "//*[@class='layout__sidebar']";
        this.button_format_1_xpath = "//button[text()='%s']";
        this.button_format_2_xpath = "//*[text()='%s']//parent::button";
        this.button_format_3_xpath = "//button[contains(text(),'%s')]";
        this.dashboard_title_xpath = "//*[@class='container']//*[text()='Dashboard']";
        this.user_profile_button_xpath = "(//button[contains(@class,'btn-profile sidebar')])[1]";
        this.expand_collapse_icon_xpath = "//i[@class='fa fa-bars fa-fw']";
        this.option_link_left_menu_xpath = "//*[text()='%s']/parent::a";
        this.option_link_header_menu_xpath = "//*[contains(@class,'doxa-navbar-link') and text()='%s']";
        this.option_value_in_dropdown_xpath = "//*[contains(@class,'MenuList')]//*[contains(@class,'option') and contains(text(),'%s')]";
        this.option_link_left_sub_menu_xpath = "//*[@class='sidebar-submenu']//*[text()='%s']";
    }
}export default CommonPageLocator