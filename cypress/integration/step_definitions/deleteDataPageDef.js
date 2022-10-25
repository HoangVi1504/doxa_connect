import { faker } from '@faker-js/faker';
import CommonPage from "../PageObject/commonPage"
import CommonAction from '../commons/common_actions'
import ManageRolePage from "../PageObject/manageRolePage"
import ManageCategoryPage from '../PageObject/manageCategoryPage';
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

const commonPage = new CommonPage()
const commonAction = new CommonAction()
const manageRolePage = new ManageRolePage()
const manageCategoryPage = new ManageCategoryPage()

When(/^Delete all role created by entity admin$/, () => {
    manageRolePage.clearValueInFilterRoleName()
    manageRolePage.enterValueToFilterRole("entity admin", "auto role")
    commonAction.wait(3)
    cy.xpath(`count(${"//button[@style='color: red;']"})`).then(count =>{
        while(count>0){
            manageRolePage.clickToDeleteRole()
            commonPage.clickToButtonFormat1("Delete")
            commonPage.clickToButtonFormat1("I Understand")
            commonAction.wait(2)
            count--
        }
    })
})

When(/^Delete all category are created by automation$/, () => {
    manageCategoryPage.enterValueToFilterCategoryName("auto category")
    commonAction.wait(2)
    cy.xpath(`count(${"//*[@col-id='categoryName']//*[@ref='eCheckbox']//input[@type='checkbox']"})`).then(count =>{
        if(count>0){
            manageCategoryPage.checkToAllCategoryNameCheckboxInList()
            commonPage.clickToButtonFormat1("Delete")
            commonPage.verifyModalMessageDisplay("Are you sure you want to delete")
            manageCategoryPage.clickToDeleteNotificationButton()
            commonPage.verifyMediaHeadingMessageDisplay("Category Deleted")
            commonPage.clickToButtonFormat1("I Understand")
        }
    })
})