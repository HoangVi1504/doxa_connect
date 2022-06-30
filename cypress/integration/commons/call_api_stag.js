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
    callApiConvertPrToPo(prTitle){
        let token = window.localStorage.getItem("token")
        cy.request({
            method: 'GET',
            url: urlPageLocator.pr_to_be_converted_list_url,
            headers: {
                authorization: "Bearer " + token,
            }
       }).then((response)=>{
            const array = response.body.data;
            return array
       }).then((array)=>{
            const elementRoot = array.find(element => element.prTitle === prTitle);
            const uuidRoot = elementRoot.uuid;
            cy.request({
                method: 'POST',
                url: printf(urlPageLocator.convert_pr_to_po_api_url, uuidRoot),
                headers: {
                    authorization: "Bearer " + token,
                }
           }).then((response)=>{
                expect(response.body).has.property("status", "OK")
           })
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

    callApiNavigateToConvertPrToPoPage(prNumber){
        let token = window.localStorage.getItem("token")
        cy.request({
            method: 'GET',
            url: urlPageLocator.pr_to_be_converted_list_url,
            headers: {
                authorization: "Bearer " + token,
            }
       }).then((response) => {
            const array = response.body.data;
            return array
        }).then((array) =>{
            const elementRoot = array.find(element => element.prNumber === prNumber);
            const uuidRoot = elementRoot.uuid;
            urlPage.navigateToConvertPrToPoPage(uuidRoot)
        })
    }

    callApiCreateDO(poNumber){
        let token = window.localStorage.getItem("token")
        cy.request({
            method: 'GET',
            url: urlPageLocator.supplier_po_list_url,
            headers: {
                authorization: "Bearer " + token,
            }
       }).then((response) => {
            const array = response.body.data;
            return array
        }).then((array) =>{
            const elementRoot = array.find(element => element.poNumber === poNumber);
            const uuidRoot = elementRoot.poUuid;
            cy.request({
                method: 'POST',
                url: urlPageLocator.create_do_url,
                headers: {
                    authorization: "Bearer " + token,
                },
                body: {
                    deliveryDate: commonAction.getDateFormat5(0),
                    deliveryOrderNumber: "",
                    documentList: [],
                    itemList: [
                        {
                            itemCode: "auto item code 1",
                            poUuid: uuidRoot,
                            priceType: "",
                            qtyToConvert: "1000"
                        }
                    ]
                }
           }).then((response)=>{
                expect(response.body).has.property("message", "Delivery order has been successfully created")
           })
        })
    }

    callApiIssueDo(poNumber, doNumber){
        let token = window.localStorage.getItem("token")
        cy.request({
            method: 'GET',
            url: urlPageLocator.supplier_po_list_url,
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            const array = response.body.data;
            return array
        }).then((array) =>{
            const elementPO = array.find(element => element.poNumber === poNumber);
            const poUuidList = elementPO.poUuid;
            cy.request({
                method: 'GET',
                url: urlPageLocator.do_list_url,
                headers: {
                    authorization: "Bearer " + token,
                }
            }).then((response) => {
                const array = response.body.data;
                return array
            }).then((array) =>{
                const elementDO = array.find(element => element.deliveryOrderNumber === doNumber);
                const doUuidList = elementDO.doUuid;
                cy.request({
                    method: 'PUT',
                    url: urlPageLocator.issue_do_url,
                    headers: {
                        authorization: "Bearer " + token,
                    },
                    body: {
                        deliveryDate: commonAction.getDateFormat5(0),
                        doUuid: doUuidList,
                        documentList: [],
                        itemList: [
                            {
                                itemCode: "auto item code 1",
                                poUuid: poUuidList
                            }
                        ]    
                    }
                }).then((response)=>{
                    expect(response.body).has.property("status", "OK")
                })
            })
        })
    }

    callApiCreateGrFromDo(doNumber){
        let token = window.localStorage.getItem("token")
        cy.request({
            method: 'GET',
            url: urlPageLocator.create_gr_from_do_list_url,
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            const array = response.body.data;
            return array
        }).then((array) =>{
            const elementDO = array.find(element => element.doNumber === doNumber);
            const doUuidList = elementDO.uuid;
            cy.request({
                method: 'POST',
                url: urlPageLocator.create_gr_from_do_detail_url,
                headers: {
                    authorization: "Bearer " + token,
                },
                body: [doUuidList]
            }).then((response)=>{
                expect(response.body).has.property("status", "OK")
                const itemId = response.body.data.items[0].itemId;
                cy.request({
                    method: 'POST',
                    url: urlPageLocator.create_gr_from_do_submit_url,
                    headers: {
                        authorization: "Bearer " + token,
                    },
                    body: {
                        approvalRouteUuid: "bddfa103-d8d1-44f0-a714-7b43b5ca3b5b",
                        deliveryDate: commonAction.getDateFormat5(0),
                        goodsReceiptDocumentMetadata: [],
                        grNumber: "",
                        grType: "DO",
                        itemNonPoDtos: [],
                        items: [
                            {
                                commentOnDelivery: "",
                                itemId: itemId,
                                qtyReceiving: "1000",
                            }
                        ],
                        procurementType: "Goods",
                        supplierCompanyUuid: "70becfb0-cb73-46b2-b372-8e78714eb507"
                    }
                }).then((response)=>{
                    expect(response.body).has.property("status", "OK")
                })
            })
        })
    }

    callApiApprovalGr(grNumber){
        let token = window.localStorage.getItem("token")
        cy.request({
            method: 'GET',
            url: urlPageLocator.gr_list_url,
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("message", "Retrieval of goods receipt list successful")
            const array = response.body.data;
            return array
        }).then((array) =>{
            const elementGR = array.find(element => element.grNumber === grNumber);
            const grUuidList = elementGR.uuid;
            cy.request({
                method: 'GET',
                url: printf(urlPageLocator.gr_detail_url, grUuidList),
                headers: {
                    authorization: "Bearer " + token,
                }
            }).then((response)=>{
                expect(response.body).has.property("status", "OK")
                const itemId = response.body.data.goodsReceiptItem[0].itemId;
                cy.log(itemId)
                cy.request({
                    method: 'POST',
                    url: urlPageLocator.approval_gr_url,
                    headers: {
                        authorization: "Bearer " + token,
                    },
                    body: {
                        approvalRouteUuid: "bddfa103-d8d1-44f0-a714-7b43b5ca3b5b",
                        deliveryDate: commonAction.getDateFormat5(0),
                        goodsReceiptDocumentMetadata: [],
                        grType: "DO",
                        itemNonPoDtos: [],
                        items: [
                            {
                                commentOnDelivery: "",
                                itemId: itemId,
                                qtyReceiving: 1000,
                            }
                        ],
                        procurementType: "Goods",
                        supplierCompanyUuid: "70becfb0-cb73-46b2-b372-8e78714eb507",
                        uuid: grUuidList
                    }
                }).then((response)=>{
                    expect(response.body).has.property("message", `Goods receipt successfully approved for: ${grNumber}`);
                })
            })
        })
    }

    callApiNavigateToPoDetailPage(roleName, poNumber){
        let token = window.localStorage.getItem("token")
        let url;
        switch (roleName) {
            case "Buyer":
                url = urlPageLocator.buyer_po_list_url
                break;

            case "Supplier":
                url = urlPageLocator.supplier_po_list_url
                break;
        
            default:
                break;
        }
        cy.request({
            method: 'GET',
            url: url,
            headers: {
                authorization: "Bearer " + token,
            }
       }).then((response) => {
            const array = response.body.data;
            return array
        }).then((array) =>{
            const elementRoot = array.find(element => element.poNumber === poNumber);
            const uuidRoot = elementRoot.poUuid;
            sessionStorage.setItem("poUuid", uuidRoot)
            urlPage.navigateToPoDetailPage(uuidRoot)
        })
    }

    callApiViewPo(roleName, poNumber){
        let token = window.localStorage.getItem("token")
        let poListUrl
        switch (roleName) {
            case "Buyer":
                poListUrl = printf(urlPageLocator.po_list_url, "buyer")
                break;

            case "Supplier":
                poListUrl = printf(urlPageLocator.po_list_url, "supplier")
                break;
        
            default:
                break;
        }
        cy.request({
            method: 'GET',
            url: poListUrl,
            headers: {
                authorization: "Bearer " + token,
            }
       }).then((response) => {
            const array = response.body.data;
            return array
        }).then((array) =>{
            const elementRoot = array.find(element => element.poNumber === poNumber);
            const poUuidRoot = elementRoot.poUuid;
            let viewPoUrl;
            switch (roleName) {
                case "Buyer":
                    viewPoUrl = printf(urlPageLocator.buyer_view_po_url, poUuidRoot)
                    break;
    
                case "Supplier":
                    viewPoUrl = printf(urlPageLocator.supplier_view_po_url, poUuidRoot)
                    break;
            
                default:
                    break;
            }
            cy.request({
                method: 'GET',
                url: viewPoUrl,
                headers: {
                    authorization: "Bearer " + token,
                }
            }).then((response) =>{
                expect(response.body).has.property("status", "OK")
            })
        })
    }

    callApiAcknowledgePo(){
        let token = window.localStorage.getItem("token")
        let uuid = sessionStorage.getItem("poUuid")
        cy.request({
            method: 'PUT',
            url: printf(urlPageLocator.acknowledge_po_url, uuid),
            headers: {
                authorization: "Bearer " + token,
            },
            body: {
                "poDocumentDtoList": []
            }
        }).then((response) =>{
            expect(response.body).has.property("message", "Supplier has successfully acknowledge the purchase order")
        })
    }

    callApiRaisePpr(pprTitle){
        let token = window.localStorage.getItem("token")
        cy.request({
            method: 'POST',
            url: urlPageLocator.create_ppr_url,
            headers: {
                authorization: "Bearer " + token,
            }, 
            body: {
                approvalCodeUuid: "b921fa2d-e79f-458d-a7c8-726ac3bae307",
                approvalSequence: "auto.approver [auto.approver@getnada.com]",
                companyUuid: "689fbac5-7291-4cad-b84c-52e95d4499a8",
                currencyCode: "SGD",
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
                        exchangeRate: "0.7190623427051125",
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
                    isActive: true,
                    isEditable: true,
                    itemCategory: "AUTO EQUIPMENT",
                    itemCode: "auto item code 1",
                    itemName: "auto item name 1",
                    quantity: "100",
                    requestDeliveryDate: commonAction.getDateFormat5(1),
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
                status: "SAVED_AS_DRAFT"
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
                        exchangeRate: "0.7190623427051125",
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