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

    getPrNumberInPrList(){
        cy.get('[role="rowgroup"]').find('>div[class*="ag-row-first"]').find('>div[col-id="prNumber"]').then(($el) => {
            let text = $el.text()
            sessionStorage.setItem("prNumber", text)
        });
    }

    getPoNumberInPoList(){
        cy.get('[role="rowgroup"]').find('>div[class*="ag-row-first"]').find('>div[col-id="poNumber"]').then(($el) => {
            let text = $el.text()
            sessionStorage.setItem("poNumber", text)
        });
    }

    getPoNumberInGrList(){
        cy.get('[role="rowgroup"]').find('>div[class*="ag-row-first"]').find('>div[col-id="grNumber"]').then(($el) => {
            let text = $el.text()
            sessionStorage.setItem("grNumber", text)
        });
    }

    getDoNumberInDoList(){
        cy.get('[role="rowgroup"]').find('>div[class*="ag-row-first"]').find('>div[col-id="deliveryOrderNumber"]').then(($el) => {
            let text = $el.text()
            sessionStorage.setItem("doNumberDoList", text)
            cy.log(sessionStorage.getItem("doNumberDoList"))
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
    enterValueToTextboxAfterClear(locator, value){
        cy.get(locator).clear()
        cy.get(locator).type(value)
    }

    enterValueToTextbox(locator, value){
        cy.get(locator).type(value)
    }

    clearValueInTextbox(locator){
        cy.get(locator).clear()
    }

    checkCheckbox(locator){
        cy.get(locator).check({force: true})
    }

    clickToElement(locator){
        cy.get(locator).click()
    }

    getTextElement(locator){
        return cy.get(locator)
    }

    verifyElementVisible(locator){
        cy.get(locator).should('be.visible')
    }

    verifyElementNotVisible(locator){
        cy.get(locator).should('not.be.visible')
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

    selectValueFromElement1(locator, option){
        cy.get(locator).select(option).should('have.value', option)
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

    enterValueToTextboxAfterClearByXpath(xpath, value){
        cy.xpath(xpath).clear()
        cy.xpath(xpath).type(value)
    }

    enterValueToTextboxByXpath(xpath, value){
        cy.xpath(xpath).type(value)
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

    doubleClickToElementByXpath(xpath){
        cy.xpath(xpath).dblclick({force: true})
    }

    clickToElementByXpath(xpath){
        cy.xpath(xpath).click()
    }

    clickToElementWithCoordinatesByXpath(xpath){
        cy.xpath(xpath).click(0, 10)
    }

    clickToBottomElement(xpath){
        cy.xpath(xpath).click('bottom', {force: true})
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

    waitForElementInvisible(xpath,time){
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