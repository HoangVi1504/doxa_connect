import CommonAction from '../commons/common_actions'
import CommonPage from "../PageObject/commonPage"
import UrlPageLocator from '../PageUI/urlPageUI'
import UrlPage from '../PageObject/urlPage'

var printf = require('printf')
const urlPage = new UrlPage()
const commonPage = new CommonPage()
const commonAction = new CommonAction()
const urlPageLocator = new UrlPageLocator()

class ApiAction{
    callApiGetValueInPrPage(){
        let token = "Bearer eyJraWQiOiJkb3hhLWNvbm5leDIiLCJ0eXAiOiJqd3QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJiODA5MDQ4ZS1kOTZjLTQ4OTctYjVhNC04MDk5ZjU3YjUzYTEiLCJjdHgiOiJwZXJzb25hbCIsInJvbGVzIjoiRU5USVRZX1VTRVIiLCJpc3MiOiJodHRwOlwvXC9vYXV0aC1zZXJ2aWNlIiwibG9jYWxlIjoiZW4iLCJjbGllbnRfaWQiOiI2YTliNGE1Ni1hMzc1LTQzNDMtYWE2OS1iNzhmYzkzYmQzZmUiLCJhdWQiOiI2YTliNGE1Ni1hMzc1LTQzNDMtYWE2OS1iNzhmYzkzYmQzZmUiLCJjb21wYW5pZXMiOlt7InJvbGVzIjoiRU5USVRZX1VTRVIiLCJ1dWlkIjoiNjg5ZmJhYzUtNzI5MS00Y2FkLWI4NGMtNTJlOTVkNDQ5OWE4IiwiYXV0aG9yaXRpZXMiOm51bGx9XSwibmJmIjoxNjU1MDA2OTE4LCJ1c2VyX2lkIjo4ODcsIm5hbWUiOiJhdXRvIGNyZWF0b3IiLCJkZXNpZ25hdGlvbiI6ImNyZWF0b3IiLCJleHAiOjE2NTUwOTMzMTgsImlhdCI6MTY1NTAwNjkxOCwianRpIjoiMDNiMTc3NTQtZjVhMy00ZGI0LWE3NjAtOWNhYzg4YTQzNjllIn0.Jt-aOyeGHL4gWmfM4DzyKG7H6y0ld7l6t9OkOaTu1OXmKxjuXbIL2e5-uHhdieeLydmmntz-4X3LiXQHM96kyDUQ55UALEoZDMuU3_6ArkR5LhLBluAO_E_f_Ytt_-6m0M8hl6ABKoxcp5iSWouzTxiTftzHF1BvkNF-NcI2EEDWn-rqumtol9nLAoAOrlyTExEJ_sygUbBWNWN_GykXwuCFEJp9QKaXBziXgFed4CPeXq2mNobIqUYyAY0p1z3H9xMxiJzHFepG7f1ySwYcmw5KeYm6b2J_JD5AMz_cLGf0CSU9pcoc7V4VaD-iCHO_eqjjskWa4Wx1acUKj9Zb_Q"
        let uuid = sessionStorage.getItem("uuidPpr")
        cy.request({
            method: 'GET',
            url: `https://api-connex-dev.doxa-holdings.com/purchase/689fbac5-7291-4cad-b84c-52e95d4499a8/prerequisition/get?pprUuid=${uuid}`,
            headers: {
                authorization: token,
            }
       }).then((response)=>{
          expect(response.body).has.property("message", "PPR get details retrieved successfully");
       })
    }

    callApiNavigateToPprPage(pageName, pprTitle){
        let token = window.localStorage.getItem("token")
        cy.request({
            method: 'GET',
            url: urlPageLocator.ppr_list_url,
            headers: {
                authorization: "Bearer " + token,
            }
       }).then((response) => {
            const array = response.body.data;
            return array
        }).then((array)=>{
            const elementRoot = array.find(element => element.pprTitle === pprTitle);
            const uuidRoot = elementRoot.pprUuid;
            urlPage.navigateToPprPage(pageName, uuidRoot)
        })
    }

    callApiNavigateToPrPage(pageName, prNumber){
        let token = window.localStorage.getItem("token")
        cy.request({
            method: 'GET',
            url: urlPageLocator.pr_list_url,
            headers: {
                authorization: "Bearer " + token,
            }
       }).then((response) => {
            const array = response.body.data;
            return array
        }).then((array) =>{
            const elementRoot = array.find(element => element.prNumber === prNumber);
            const uuidRoot = elementRoot.uuid;
            urlPage.navigateToPrPage(pageName, uuidRoot)
        })
    }

    callApiRaisePpr(pprTitle){
        let token = window.localStorage.getItem("token")
        cy.request({
            method: 'POST',
            url: urlPageLocator.create_ppr_url,
            headers: {
                authorization:  "Bearer " + token,
            }, 
            body: {
                approvalCodeUuid: "b921fa2d-e79f-458d-a7c8-726ac3bae307",
                approvalSequence: "auto.approver [auto.approver@getnada.com]",
                companyUuid: "689fbac5-7291-4cad-b84c-52e95d4499a8",
                currencyCode: "AOA",
                pprItemDtoList: [
                    {
                    categoryDto: 
                    {
                        active: true,
                        categoryDescription: "auto equipment",
                        categoryName: "AUTO EQUIPMENT",
                        companyUuid: "689fbac5-7291-4cad-b84c-52e95d4499a8",
                        uuid: "3f0fb768-f68c-4895-9b8b-a9805528c56d"
                    },
                    currencyCode: "SGD",
                    deliveryAddress: 
                    {   
                        active: true,
                        addressFirstLine: "1 XYZ Buildingg",
                        addressLabel: "address auto",
                        companyUuid: "689fbac5-7291-4cad-b84c-52e95d4499a8",
                        country: "Singapore",
                        postalCode: "4000",
                        state: "Singapore",
                        uuid: "f9cdfeca-c150-47ed-8840-f17bdd6ff797"
                    },
                    isActive: true,
                    isEditable: true,
                    itemCategory: "AUTO EQUIPMENT",
                    itemCode: "auto item code 1",
                    itemName: "auto item name 1",
                    quantity: "100",
                    requestDeliveryDate: commonAction.getDateFormat5(1),
                    supplierCode: "1105",
                    supplierName: "AUTO SUPPLIER 1",
                    supplierUuid: "3862f5c9-44f3-4f6d-8c4b-918cf086ac2c",         
                    taxCode: "11052022",
                    taxRate: "0.5",
                    unitPrice: "5000",
                    uomCode: "CEN",
                    uuid: "ac4e3ff8-1ee4-4596-ad0f-f63981ea5d61"
                    }
                ],
                pprTitle: pprTitle,
                procurementType: "GOODS",
                requesterName: "auto creator",
                requesterUuid: "b809048e-d96c-4897-b5a4-8099f57b53a1",
                status: "PENDING_APPROVAL"
            }
       }).then((response)=>{
          expect(response.body).has.property("message", "PPR created successfully");
          let uuid = response.body.data
          sessionStorage.setItem("uuidPpr", uuid)
       })
    }

    callApiRaisePr(prTitle){
        let token = window.localStorage.getItem("token")
        cy.request({
            method: 'POST',
            url: urlPageLocator.create_pr_url,
            headers: {
                authorization: "Bearer " + token,
            }, 
            body: {
                approvalRouteUuid: "873bcd64-e460-45b3-8246-390280c81a1b",
                currencyCode: "USD",
                prTitle: prTitle,
                procurementType: "Goods",
                purchaseReqConversation: [],
                purchaseReqDocumentMetadata: [],
                purchaseReqItem: [
                    {
                        address: 
                        {
                            addressFirstLine: "1 XYZ Buildingg",
                            addressLabel: "address auto",
                            country: "Singapore",
                            postalCode: "4000",
                            state: "Singapore"
                        },
                        itemCategory: "AUTO EQUIPMENT",
                        itemCode: "auto item code 1",
                        itemName: "auto item name 1",
                        itemQuantity: "1000",
                        itemUnitPrice: "5000",
                        requestedDeliveryDate: commonAction.getDateFormat5(1),
                        sourceCurrency: "SGD",
                        supplierName: "AUTO SUPPLIER 1",
                        supplierUuid: "3862f5c9-44f3-4f6d-8c4b-918cf086ac2c",
                        taxCode: "11052022",
                        taxRate: 0.5,
                        uom: "CEN"
                    }
                ],
                totalAmount: "5025000"
            }
        }).then((response) =>{
           expect(response.body).has.property("message", `Purchase requisition successfully submitted for: ${prTitle}`);  
           let uuid = response.body.data
           sessionStorage.setItem("uuidPr", uuid)
       })  
    }

    callApiSaveAsDraftPpr(pprTitle){
        let token = window.localStorage.getItem("token")
        cy.request({
            method: 'POST',
            url: urlPageLocator.save_draft_ppr_url,
            headers: {
                authorization: "Bearer " + token,
            }, 
            body: {
                approvalCodeUuid: "b921fa2d-e79f-458d-a7c8-726ac3bae307",
                approvalSequence: "auto.approver [auto.approver@getnada.com]",
                companyUuid: "689fbac5-7291-4cad-b84c-52e95d4499a8",
                currencyCode: "AOA",
                pprItemDtoList: [
                    {
                    categoryDto: 
                    {
                        companyUuid: "689fbac5-7291-4cad-b84c-52e95d4499a8",
                        uuid: "3f0fb768-f68c-4895-9b8b-a9805528c56d"
                    },
                    currencyCode: "SGD",
                    deliveryAddress: 
                    {
                        addressFirstLine: "1 XYZ Buildingg",
                        addressLabel: "address auto",
                        companyUuid: "689fbac5-7291-4cad-b84c-52e95d4499a8",
                        country: "Singapore",
                        postalCode: "4000",
                        state: "Singapore",
                        uuid: "f9cdfeca-c150-47ed-8840-f17bdd6ff797"
                    },
                    quantity: "100",
                    requestDeliveryDate: commonAction.getDateFormat5(1),
                    supplierName: "AUTO SUPPLIER 1",
                    supplierUuid: "3862f5c9-44f3-4f6d-8c4b-918cf086ac2c",         
                    uuid: "ac4e3ff8-1ee4-4596-ad0f-f63981ea5d61"
                    }
                ],
                pprTitle: pprTitle,
                procurementType: "GOODS"
            }
       })
    }

    callApiSaveAsDraftPr(prTitle){
        let token = window.localStorage.getItem("token")
        cy.request({
            method: 'POST',
            url: urlPageLocator.create_pr_url,
            headers: {
                authorization: "Bearer " + token,
            }, 
            body: {
                approvalRouteUuid: "873bcd64-e460-45b3-8246-390280c81a1b",
                currencyCode: "USD",
                prTitle: prTitle,
                procurementType: "Goods",
                purchaseReqConversation: [],
                purchaseReqDocumentMetadata: [],
                purchaseReqItem: [
                    {
                        address: 
                        {
                            addressFirstLine: "1 XYZ Buildingg",
                            addressLabel: "address auto",
                            country: "Singapore",
                            postalCode: "4000",
                            state: "Singapore"
                        },
                        itemCategory: "AUTO EQUIPMENT",
                        itemCode: "auto item code 1",
                        itemName: "auto item name 1",
                        itemQuantity: "1000",
                        itemUnitPrice: "5000",
                        requestedDeliveryDate: commonAction.getDateFormat5(1),
                        sourceCurrency: "SGD",
                        supplierName: "AUTO SUPPLIER 1",
                        supplierUuid: "3862f5c9-44f3-4f6d-8c4b-918cf086ac2c",
                    supplierUuid: "3862f5c9-44f3-4f6d-8c4b-918cf086ac2c",         
                        supplierUuid: "3862f5c9-44f3-4f6d-8c4b-918cf086ac2c",
                        taxCode: "11052022",
                        taxRate: 0.5,
                        uom: "CEN"
                    }
                ],
                saveAsDraft: true,
                totalAmount: "5025000"
            }
        }).then((response) =>{
           expect(response.body).has.property("message", `Purchase requisition successfully saved for: ${prTitle}`);  
           let uuid = response.body.data
           sessionStorage.setItem("uuidPr", uuid)
       })  
    }

    callApiApproverPpr(){
        let token = window.localStorage.getItem("token")
            cy.request({
                method: 'POST',
                url: printf(urlPageLocator.approval_ppr_url, sessionStorage.getItem("uuidPpr")),
                headers: {
                    authorization: "Bearer " + token,
                },
                body:{
                    "newlyAddedPurchaseReqDocuments": []
                }
            }).then((response) =>{
               expect(response.body).has.property("message", "PPR approved successfully")
        })
    }

    callApiApproverPr(){
        let token = window.localStorage.getItem("token")
            cy.request({
                method: 'POST',
                url: urlPageLocator.approval_pr_url,
                headers: {
                    authorization: "Bearer " + token,
                },
                body:{
                    "addedPurchaseReqConversation": [],
                    "newlyAddedPurchaseReqDocuments": [],
                    "uuid": sessionStorage.getItem("uuidPr")
                }
            }).then((response) =>{
               expect(response.body).has.property("status", "OK")
        })
    }    
}export default ApiAction
