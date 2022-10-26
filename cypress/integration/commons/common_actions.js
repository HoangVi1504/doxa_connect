import 'cypress-file-upload';
const moment= require('moment')
const fs = require('fs');

class BaseAction {  
    navigateTo(url){
        cy.visit(url)
    }

    reloadPage(){
        cy.reload()
    }

    writeValueToJsonFile(fileName, value){
        cy.writeFile(fileName, value);
    }

    getRfqNumberInRfqList(){
        cy.get('[role="rowgroup"]').find('>div[class*="ag-row-first"]').find('>div[col-id="rfqNumber"]').then(($el) => {
            let text = $el.text()
            sessionStorage.setItem("rfqNumber", text)
            cy.log(sessionStorage.getItem("rfqNumber"))
        });
    }

    getPprNumberInPprList(){
        cy.xpath("//*[@role='rowgroup']//*[contains(@class,'ag-row-first')]//*[@col-id='pprNumber']").then(($el) => {
            let text = $el.text()
            sessionStorage.setItem("pprNumber", text)
            cy.log("pprNumber", sessionStorage.getItem("pprNumber"))
        });
    }

    getPrNumberInPrList(){
        cy.get('[role="rowgroup"]').find('>div[class*="ag-row-first"]').find('>div[col-id="prNumber"]').then(($el) => {
            let text = $el.text()
            sessionStorage.setItem("prNumber", text)
        });
    }

    getPoNumberInPoList(){
        cy.xpath("//*[@role='rowgroup']//*[contains(@class,'ag-row-first')]//*[@col-id='poNumber']").then(($el) => {
            let text = $el.text()
            sessionStorage.setItem("poNumber", text)
        });
    }

    clickToHyperLinkPoNumber(url) {
        cy.get('[role="rowgroup"]').find('>div[class*="ag-row-first"]').find('>div[col-id="poNumber"]').find('a')
        .invoke('attr', 'href')
        .then(href => {
            this.navigateTo(url + href)
        });
    }

    clickToHyperLinkContractNumber(url) {
        cy.get('[role="rowgroup"]').find('>div[class*="ag-row-first"]').find('>div[col-id="contractNumber"]').find('a')
        .invoke('attr', 'href')
        .then(href => {
            this.navigateTo(url + href)
        });
    }

    getPoNumberInRFQList() {
        cy.get('[role="rowgroup"]').find('>div[class*="ag-row-first"]').find('>div[col-id="poNumber"]').find('a').then(($el) => {
            let text = $el.text()
            sessionStorage.setItem("poNumber", text)
        });
    }

    getContractNumberInRFQList() {
        cy.get('[role="rowgroup"]').find('>div[class*="ag-row-first"]').find('>div[col-id="contractNumber"]').find('a').then(($el) => {
            let text = $el.text()
            sessionStorage.setItem("contractNumber", text)
        });
    }

    getGrNumberInGrList(){
        cy.get('[role="rowgroup"]').find('>div[class*="ag-row-first"]').find('>div[col-id="grNumber"]').then(($el) => {
            let text = $el.text()
            sessionStorage.setItem("grNumber", text)
        });
    }

    getDoNumberInDoList(){
        cy.get('[role="rowgroup"]').find('>div[class*="ag-row-first"]').find('>div[col-id="deliveryOrderNumber"]').then(($el) => {
            let text = $el.text()
            sessionStorage.setItem("doNumberDoList", text)
        });
    }

    getInvNoInList(){
        cy.get('[role="rowgroup"]').find('>div[class*="ag-row-first"]').find('>div[col-id="invoiceNo"]').then(($el) => {
            let text = $el.text()
            sessionStorage.setItem("invNumberList", text)
        });
    }

    getPasswordFromGetnada(){
        this.wait(5)
        cy.xpath("//*[@id='the_message_iframe']").then(function($ele){
            cy.wrap($ele.contents().find('body').find('div[class="content"]').find('p').last()).then(($el) => {
                let tmp = $el.text()
                let text = tmp.replace('Login Now','').split(" ").pop()
                cy.writeFile("dataTestGetnada.json", {passNewAccount: text});
            })
        }) 
    }

    getLinkFromGetnada() {
        this.wait(5)
        cy.xpath("//*[@id='the_message_iframe']").then(function ($ele) {
            cy.get($ele.contents().find('body').find('div[class="content"]').find('p').last().find('a')).then(($el) => {
                let link = $el.attr('href')
                cy.writeFile("cypress/integration/data/urlRfq.json", { linkToRFQ: link });
            })
        })
    }

    getRFQNumberInInitialSettingsTable() {
        cy.get('[name="rfqNumber"]').then(($el) => {
            let tpm = $el.attr('value')
            sessionStorage.setItem("rfqNumber", tpm)
        });
    }

    getNumberRFQTitleInGeneralInformationTable() {
        cy.get('[name="rfqTitle"]').then(($el) => {
            let tpm = $el.text().slice(-5)
            sessionStorage.setItem("numberRfqTitle", tpm)
        });
    }

    getRFQNumberToFile() {
        cy.get('[role="rowgroup"]').find('>div[class*="ag-row-first"]').find('>div[col-id="rfqNumber"]').then(($el) => {
            let tpm = $el.text()
            cy.writeFile("cypress/integration/data/rfqNumber.json", { rfqNumber: tpm });
            sessionStorage.setItem("rfqNumber", tpm)
        });
    }

    getTime(){
        let time = new Date().getTime()
        return time
    }

    getSomeDate(day){
        let someDay = new Date();
        someDay.setDate(new Date().getDate()+ Number(day));
        return someDay
    }

    getSomeDateByMonth(day){
        let someDay = new Date();
        someDay.setDate(new Date().getDate()+ Number(day));
        return someDay.getMonth()
    }

    getSomeDateByFullYear(day){
        let someDay = new Date();
        someDay.setDate(new Date().getDate()+ Number(day));
        return someDay.getFullYear()
    }

    getSomeDateByYear(day){
        let someDay = new Date();
        someDay.setDate(new Date().getDate()+ Number(day));
        return someDay.getYear()
    }

    getDate(day){
        return moment(this.getSomeDate(day))
    }

    getDateFormat1(day){
        return this.getDate(day).format('DD/MM/YYYY'); 
    }

    getDateFormat2(day){
        return this.getDate(day).format('MM/DD/YYYY'); 
    }

    getDateFormat3(day){
        return this.getDate(day).format('DD-MM-YYYY'); 
    }

    getDateFormat4(day){
        return this.getDate(day).format('YYYY-MM-DD'); 
    }

    getDateFormat5(day){
        return this.getDate(day).format('YYYY-MM-DD HH:mm:ss'); 
    }

    // CSS Selector
    pasteValueToTextbox(locator, value) {
        this.clickToElement(locator)
        cy.get(locator).invoke('val', value)
        this.wait(1)
    }

    uploadFile(locator, fileName){
        cy.get(locator).attachFile(fileName)
    }

    enterValueToTextboxAfterClear(locator, value){
        cy.get(locator).clear()
        cy.get(locator).type(value)
    }

    enterValueToTextbox(locator, value){
        cy.get(locator).type(value)
    }

    doubleClickToElement(locator){
        cy.get(locator).dblclick({force: true})
    }

    clearValueInTextbox(locator){
        cy.get(locator).clear()
    }

    doubleClickToElement(locator){
        cy.get(locator).dblclick({force: true})
    }

    checkCheckbox(locator){
        cy.get(locator).check({force: true})
    }

    clickToElement(locator){
        cy.get(locator).click()
    }

    forceClickToElement(locator){
        cy.get(locator).click({force: true})
    }

    getTextElement(locator){
        return cy.get(locator)
    }

    verifyCheckBoxIsChecked(locator){
        cy.get(locator).should('be.checked')
    }

    verifyCheckBoxIsNotChecked(locator){
        cy.get(locator).should('not.be.checked')
    }

    verifyElementVisible(locator){
        cy.get(locator).should('be.visible')
    }

    verifyElementNotVisible(locator){
        cy.get(locator).should('not.be.visible')
    }

    verifyElementDisable(locator){
        cy.get(locator).should('be.disabled')
    }

    verifyElementNotExist(locator){
        cy.get(locator).should('not.exist')
    }

    verifyValueInTextboxExist(locator, tmp){
        cy.get(locator).invoke('val').then((value) => {
            if(value == tmp){
                cy.get(locator).invoke('val').should('equal', value)
            }else this.verifyValueInTextboxExist(locator, tmp)
        })
    }

    verifyValueInDropdownExits(locator, value){
        cy.get(locator, { timeout: 10000 })
          .should(($option) =>{
            expect($option).to.contain(value)})
          .invoke('val')
          .should('equal', value)
    }

    selectValueFromElement(locator, value){
        cy.get(locator)
          .should(($option) =>{expect($option).to.contain(value)})
          .select(value)
    }

    selectValueFromDropdownElement(locator, option){
        cy.get(locator).select(option).should('have.value', option)
    }

    setAttribute(locator, attributeName, attributeValue){
        cy.get(locator).invoke('attr', attributeName, attributeValue)
    }

    submitForm(){
        cy.get('form').submit()
    }

    // Xpath:
    isElementVisible(xpath){
        return cy.xpath(`count(${xpath})`).then(count => {
            return count > 0;
        });
    }

    pasteValueToTextboxByXpath(xpath, value){
        cy.xpath(xpath).invoke('val', value)
    }

    enterValueToTextboxAfterClearByXpath(xpath, value){
        cy.xpath(xpath).clear()
        cy.xpath(xpath).type(value)
    }

    enterValueToTextboxByXpath(xpath, value){
        cy.xpath(xpath).type(value)
    }

    setAttributeByXpath(xpath, attributeName, attributeValue){
        cy.xpath(xpath).invoke('attr', attributeName, attributeValue)
    }

    selectValueFromDropdownElementByXpath(dropdownXpath, option){
        cy.xpath(dropdownXpath).select(option).should('have.value', option)
    }

    selectOptionFromDropdownByXpath(dropdownXpath, optionXpath){
        this.clickToElementByXpath(dropdownXpath)
        this.clickToElementByXpath(optionXpath)
    }

    selectOptionFromDropdownWithSearch(dropdownXpath, searchXpath, optionXpath, option){
        this.clickToElementByXpath(dropdownXpath)
        this.enterValueToTextboxByXpath(searchXpath, option)
        this.clickToElementByXpath(optionXpath)
    }

    uploadFileByXpath(xpath, fileName){
        cy.xpath(xpath).attachFile(fileName)
    }

    doubleClickToElementByXpath(xpath){
        cy.xpath(xpath).dblclick({force: true})
    }

    checkCheckboxByXpath(xpath){
        cy.xpath(xpath).check({force: true})
    }

    clickToElementByXpath(xpath){
        cy.xpath(xpath).click()
    }

    uncheckCheckboxByXpath(xpath){
        cy.xpath(xpath).uncheck({force: true})
    }

    clearValueInTextboxByXpath(xpath){
        cy.xpath(xpath).clear()
    }

    forceClickToElementByXpath(xpath){
        cy.xpath(xpath).click({force: true})
    }

    clickToElementByXpath(xpath){
        cy.xpath(xpath).click()
    }

    clickToElementWithTimeOutByXpath(xpath, time){
        cy.xpath(xpath,{ timeout: time*1000 }).click()
    }

    clickToElementWithCoordinatesByXpath(xpath){
        cy.xpath(xpath).click(0, 10)
    }

    clickToBottomElementByXpath(xpath){
        cy.xpath(xpath).click('bottom', {force: true})
    }

    verifyCheckBoxIsCheckedByXpath(xpath){
        cy.xpath(xpath).should('be.checked')
    }

    verifyCheckBoxIsNotCheckedByXpath(xpath){
        cy.xpath(xpath).should('not.be.checked')
    }

    verifyElementByXpathExist(xpath){
        cy.xpath(xpath).should('exist')
    }

    verifyElementByXpathVisible(xpath){
        cy.xpath(xpath).should('be.visible')
    }

    verifyElementByXpathNotVisible(xpath){
        cy.xpath(xpath).should('not.be.visible')
    }

    verifyElementByXpathNotExist(xpath){
        cy.xpath(xpath).should('not.exist')
    }

    verifyElementByXpathDisable(xpath){
        cy.xpath(xpath).should(('be.disabled'))
    }

    verifyCheckBoxIsCheckedByXpath(xpath){
        cy.xpath(xpath).should('be.checked')
    }

    verifyValueInTextboxExistByXpath(xpath, tmp){
        cy.xpath(xpath).invoke('val').then((value) => {
            if(value == tmp){
                cy.xpath(xpath).invoke('val').should('equal', value)
            }else this.verifyValueInTextboxExistByXpath(xpath, tmp)
        })
    }

    getTextElementByXpath(xpath){
        return cy.xpath(xpath)
    }

    waitForElementInvisibleByXpath(xpath,time){
        cy.xpath(xpath, {timeout:time*1000}).should('not.exist')
    }

    scrollToPositionElement(xpath, position){
        cy.xpath(xpath).scrollTo(position)
    }

    wait(second){
        cy.wait(second*1000)
    }
}
export default BaseAction