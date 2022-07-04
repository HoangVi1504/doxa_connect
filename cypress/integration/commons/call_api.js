import UrlPage from '../PageObject/urlPage'
import CommonPage from "../PageObject/commonPage"
import CommonAction from '../commons/common_actions'
import UrlPageLocator from '../PageUI/urlPageUI'

const urlPage = new UrlPage()
const commonPage = new CommonPage()
const commonAction = new CommonAction()
const urlPageLocator = new UrlPageLocator()

var printf = require('printf')
var dataBuyer = require('../../../dataBuyer.json');
var environment = require('../../../environment.json');
var dataSupplier = require('../../../dataSupplier.json');

class ApiAction{
    callApiConvertPrToPo(prTitle){
        this.callApiGetDataInCatalogueList("auto item code 1")
        let token = window.localStorage.getItem("token")
        let env = environment.env
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.pr_to_be_converted_list_url, env, buyerCompanyUuid),            
            headers: {
                authorization: "Bearer " + token,
            }
       }).then((response)=>{
            let array = response.body.data;
            return array
       }).then((array)=>{
            let elementPr = array.find(element => element.prTitle === prTitle);
            let prUuid = elementPr.uuid;
            cy.request({
                method: 'POST',
                url: printf(urlPageLocator.convert_pr_to_po_api_url, env, buyerCompanyUuid, prUuid, sessionStorage.getItem("supplierUuid")),           //supplierUuid: 3862f5c9-44f3-4f6d-8c4b-918cf086ac2c
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
        let env = environment.env
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.ppr_list_url, env, buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }
       }).then((response) => {
            let array = response.body.data;
            return array
        }).then((array)=>{
            let elementRoot = array.find(element => element.pprTitle === pprTitle);
            let uuidRoot = elementRoot.pprUuid;
            urlPage.navigateToPprPage(pageName, uuidRoot)
        })
    }

    callApiNavigateToPrPage(pageName, prNumber){
        let token = window.localStorage.getItem("token")
        let env = environment.env
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.pr_list_url, env, buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }
       }).then((response) => {
            let array = response.body.data;
            return array
        }).then((array) =>{
            let elementRoot = array.find(element => element.prNumber === prNumber);
            let uuidRoot = elementRoot.uuid;
            urlPage.navigateToPrPage(pageName, uuidRoot)
        })
    }

    callApiNavigateToConvertPrToPoPage(prNumber){
        let token = window.localStorage.getItem("token")
        let env = environment.env
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.pr_to_be_converted_list_url, env, buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }
       }).then((response) => {
            let array = response.body.data;
            return array
        }).then((array) =>{
            let elementRoot = array.find(element => element.prNumber === prNumber);
            let uuidRoot = elementRoot.uuid;
            urlPage.navigateToConvertPrToPoPage(uuidRoot)
        })
    }

    callApiCreateDO(poNumber){
        let token = window.localStorage.getItem("token")
        let env = environment.env
        let supplierCompanyUuid = dataSupplier.supplierCompanyUuid
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.supplier_po_list_url, env, supplierCompanyUuid),                   //"70becfb0-cb73-46b2-b372-8e78714eb507"
            headers: {
                authorization: "Bearer " + token,
            }
       }).then((response) => {
            let array = response.body.data;
            return array
        }).then((array) =>{
            let elementRoot = array.find(element => element.poNumber === poNumber);
            let uuidRoot = elementRoot.poUuid;
            cy.request({
                method: 'POST',
                url: printf(urlPageLocator.create_do_url, env, supplierCompanyUuid),
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
        let env = environment.env
        let supplierCompanyUuid = dataSupplier.supplierCompanyUuid
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.supplier_po_list_url, env, supplierCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            let array = response.body.data;
            return array
        }).then((array) =>{
            let elementPO = array.find(element => element.poNumber === poNumber);
            let poUuidList = elementPO.poUuid;
            cy.request({
                method: 'GET',
                url: printf(urlPageLocator.do_list_url, env, supplierCompanyUuid),
                headers: {
                    authorization: "Bearer " + token,
                }
            }).then((response) => {
                let array = response.body.data;
                return array
            }).then((array) =>{
                let elementDO = array.find(element => element.deliveryOrderNumber === doNumber);
                let doUuidList = elementDO.doUuid;
                cy.request({
                    method: 'PUT',
                    url: printf(urlPageLocator.issue_do_url, env, supplierCompanyUuid),
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

    callApiGetDataAfterLogin(){
        let token = window.localStorage.getItem("token")
        let env = environment.env
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.api_user_me_url, env),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
            let entityUuid = response.body.data.uuid
            let companyUuid = response.body.data.companies[0].companyUuid;
            sessionStorage.setItem("entityUuid", entityUuid)
            sessionStorage.setItem("companyUuid", companyUuid)
            cy.log(sessionStorage.getItem("entityUuid"))
            cy.log(sessionStorage.getItem("companyUuid"))
        })
    }

    callApiGetDataInApprovalList(approvalName){
        let token = window.localStorage.getItem("token")
        let env = environment.env
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.approval_matrix_list_url, env, buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
            let array = response.body.data;
            return array
        }).then((array) =>{
            let elementApproval = array.find(element => element.approvalName === approvalName);
            let approvalCodeUuid = elementApproval.uuid
            sessionStorage.setItem("approvalCodeUuid", approvalCodeUuid )
            cy.log(sessionStorage.getItem("approvalCodeUuid"))
        })  
    }

    callApiCreateGrFromDo(doNumber){
        let token = window.localStorage.getItem("token")
        let env = environment.env
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        this.callApiGetDataInApprovalList("auto approval Goods Receipt")
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.create_gr_from_do_list_url, env, buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            let array = response.body.data;
            return array
        }).then((array) =>{
            let elementDO = array.find(element => element.doNumber === doNumber);
            let doUuidList = elementDO.uuid;
            cy.request({
                method: 'POST',
                url: printf(urlPageLocator.create_gr_from_do_detail_url, env, buyerCompanyUuid),
                headers: {
                    authorization: "Bearer " + token,
                },
                body: [doUuidList]
            }).then((response)=>{
                expect(response.body).has.property("status", "OK")
                let itemId = response.body.data.items[0].itemId;
                cy.request({
                    method: 'POST',
                    url: printf(urlPageLocator.create_gr_from_do_submit_url, env, buyerCompanyUuid),
                    headers: {
                        authorization: "Bearer " + token,
                    },
                    body: {
                        approvalRouteUuid: sessionStorage.getItem("approvalCodeUuid"),                  //"bddfa103-d8d1-44f0-a714-7b43b5ca3b5b",
                        deliveryDate: commonAction.getDateFormat5(0),
                        goodsReceiptDocumentMetadata: [],
                        grNumber: "",
                        grType: "DO",
                        itemNonPoDtos: [],
                        items: 
                        [
                            {
                                commentOnDelivery: "",
                                itemId: itemId,
                                qtyReceiving: "1000",
                            }
                        ],
                        procurementType: "Goods",
                        supplierCompanyUuid: sessionStorage.getItem("companyUuid"),                  //"70becfb0-cb73-46b2-b372-8e78714eb507"
                    }
                }).then((response)=>{
                    expect(response.body).has.property("status", "OK")
                })
            })
        })
    }

    callApiApprovalGr(grNumber){
        this.callApiGetDataInApprovalList("auto approval Goods Receipt")
        let token = window.localStorage.getItem("token")
        let env = environment.env
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.gr_list_url, env, buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("message", "Retrieval of goods receipt list successful")
            let array = response.body.data;
            return array
        }).then((array) =>{
            let elementGR = array.find(element => element.grNumber === grNumber);
            let grUuidList = elementGR.uuid;
            cy.request({
                method: 'GET',
                url: printf(urlPageLocator.gr_detail_url, env, buyerCompanyUuid, grUuidList),
                headers: {
                    authorization: "Bearer " + token,
                }
            }).then((response)=>{
                expect(response.body).has.property("status", "OK")
                let itemId = response.body.data.goodsReceiptItem[0].itemId;
                cy.log(itemId)
                cy.request({
                    method: 'POST',
                    url: printf(urlPageLocator.approval_gr_url, env, buyerCompanyUuid),
                    headers: {
                        authorization: "Bearer " + token,
                    },
                    body: {
                        approvalRouteUuid: sessionStorage.getItem("approvalCodeUuid"),                 //"bddfa103-d8d1-44f0-a714-7b43b5ca3b5b",
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
                        supplierCompanyUuid: sessionStorage.getItem("companyUuid"),                 //"70becfb0-cb73-46b2-b372-8e78714eb507",
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
        let env = environment.env
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        let supplierCompanyUuid = dataSupplier.supplierCompanyUuid
        let url;
        switch (roleName) {
            case "Buyer":
                url = printf(urlPageLocator.buyer_po_list_url, env, buyerCompanyUuid)
                break;

            case "Supplier":
                url = printf(urlPageLocator.supplier_po_list_url, env, supplierCompanyUuid)
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
            let array = response.body.data;
            return array
        }).then((array) =>{
            let elementRoot = array.find(element => element.poNumber === poNumber);
            let uuidRoot = elementRoot.poUuid;
            sessionStorage.setItem("poUuid", uuidRoot)
            urlPage.navigateToPoDetailPage(uuidRoot)
        })
    }

    callApiViewPo(roleName, poNumber){
        let token = window.localStorage.getItem("token")
        let env = environment.env
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        let supplierCompanyUuid = dataSupplier.supplierCompanyUuid
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.po_list_url, env, supplierCompanyUuid, roleName),
            headers: {
                authorization: "Bearer " + token,
            }
       }).then((response) => {
            let array = response.body.data;
            return array
        }).then((array) =>{
            let elementRoot = array.find(element => element.poNumber === poNumber);
            let poUuidRoot = elementRoot.poUuid;
            let viewPoUrl;
            switch (roleName) {
                case "buyer":
                    viewPoUrl = printf(urlPageLocator.buyer_view_po_url, env, buyerCompanyUuid, poUuidRoot)
                    break;
    
                case "supplier":
                    viewPoUrl = printf(urlPageLocator.supplier_view_po_url, env, supplierCompanyUuid, poUuidRoot)
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
        let poUuid = sessionStorage.getItem("poUuid")
        let env = environment.env
        let supplierCompanyUuid = dataSupplier.supplierCompanyUuid
        cy.request({
            method: 'PUT',
            url: printf(urlPageLocator.acknowledge_po_url, env, supplierCompanyUuid, poUuid),
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

    callApiGetDataInCatalogueList(catalogueItemCode){
        let token = window.localStorage.getItem("token")
        let env = environment.env
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.catalogue_list_url, env, buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
            let array = response.body.data.catalogues;
            return array
        }).then((array) =>{
            let elementCatalogue = array.find(element => element.catalogueItemCode === catalogueItemCode);
            let categoryDtoUuid = elementCatalogue.categoryDto.uuid
            let supplierUuid = elementCatalogue.supplierUuid
            let catalogueUuid = elementCatalogue.uuid
            sessionStorage.setItem("categoryDtoUuid", categoryDtoUuid)
            sessionStorage.setItem("supplierUuid", supplierUuid)
            sessionStorage.setItem("catalogueUuid", catalogueUuid)
            cy.log(sessionStorage.getItem("categoryDtoUuid"))
            cy.log(sessionStorage.getItem("supplierUuid"))
            cy.log(sessionStorage.getItem("catalogueUuid"))
        })  
    }

    callApiGetDataInManageAddress(addressLabel){
        let token = window.localStorage.getItem("token")
        let env = environment.env
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.company_address_list_url, env, buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
            let array = response.body.data;
            return array
        }).then((array)=>{
            let elementAddress = array.find(element => element.addressLabel === addressLabel)
            let addressUuid = elementAddress.uuid
            sessionStorage.setItem("addressUuid", addressUuid)
            cy.log(sessionStorage.getItem("addressUuid"))
        })
    }

    callApiRaisePpr(pprTitle){
        let token = window.localStorage.getItem("token")
        let env = environment.env
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        this.callApiGetDataAfterLogin()
        this.callApiGetDataInApprovalList("auto approval PPR 1")
        this.callApiGetDataInCatalogueList("auto item code 1")
        this.callApiGetDataInManageAddress("address auto")
        cy.request({
            method: 'POST',
            url: printf(urlPageLocator.create_ppr_url, env, buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }, 
            body: {
                approvalCodeUuid: sessionStorage.getItem("approvalCodeUuid"),                            //"b921fa2d-e79f-458d-a7c8-726ac3bae307",
                approvalSequence: "auto.approver [auto.approver@getnada.com]",
                companyUuid: buyerCompanyUuid,                                                           //"689fbac5-7291-4cad-b84c-52e95d4499a8",
                currencyCode: "SGD",
                pprItemDtoList: [
                    {
                    categoryDto: 
                    {
                        active: true,
                        categoryDescription: "auto equipment",
                        categoryName: "AUTO EQUIPMENT",
                        companyUuid: buyerCompanyUuid,                                                   //"689fbac5-7291-4cad-b84c-52e95d4499a8",
                        uuid: sessionStorage.getItem("categoryDtoUuid"),                                 //"3f0fb768-f68c-4895-9b8b-a9805528c56d"
                    },
                    currencyCode: "SGD",
                    deliveryAddress: 
                    {   
                        active: true,
                        addressFirstLine: "1 XYZ Buildingg",
                        addressLabel: "address auto",
                        companyUuid: buyerCompanyUuid,                                                   //"689fbac5-7291-4cad-b84c-52e95d4499a8",
                        country: "Singapore",
                        postalCode: "4000",
                        state: "Singapore",
                        uuid: sessionStorage.getItem("addressUuid"),                                     //"f9cdfeca-c150-47ed-8840-f17bdd6ff797"
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
                    supplierUuid: sessionStorage.getItem("supplierUuid"),                           //"3862f5c9-44f3-4f6d-8c4b-918cf086ac2c",         
                    taxCode: "11052022",
                    taxRate: "0.5",
                    unitPrice: "5000",
                    uomCode: "CEN",
                    uuid: sessionStorage.getItem("catalogueUuid"),                                  //"ac4e3ff8-1ee4-4596-ad0f-f63981ea5d61"
                    }
                ],
                pprTitle: pprTitle,
                procurementType: "GOODS",
                requesterName: "auto creator",
                requesterUuid: sessionStorage.getItem("entityUuid"),                                //"b809048e-d96c-4897-b5a4-8099f57b53a1",
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
        let env = environment.env
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        this.callApiGetDataInApprovalList("auto approval PR 1")
        this.callApiGetDataInCatalogueList("auto item code 1")
        cy.request({
            method: 'POST',
            url: printf(urlPageLocator.create_pr_url, env, buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }, 
            body: {
                address:
                {
                    addressFirstLine: "1 XYZ Buildingg",
                    addressLabel: "address auto",
                    addressSecondLine: "12 New Industrial Rd Singapore, Singapore 536197",
                    city: "Singapore",
                    country: "Singapore",
                    postalCode: "4000",
                    state: "Singapore"
                },
                approvalRouteUuid: sessionStorage.getItem("approvalCodeUuid"),                      //"873bcd64-e460-45b3-8246-390280c81a1b",
                currencyCode: "USD",
                prTitle: prTitle,
                procurementType: "Goods",
                project: false,
                purchaseReqConversation: [],
                purchaseReqDocumentMetadata: [],
                purchaseReqItem: 
                [
                    {
                        address: 
                        {
                            addressFirstLine: "1 XYZ Buildingg",
                            addressLabel: "address auto",
                            addressSecondLine: "12 New Industrial Rd Singapore, Singapore 536197",
                            city: "Singapore",
                            country: "Singapore",
                            postalCode: "4000",
                            state: "Singapore"
                        },
                        editableCurrency: false,
                        editableExchangeRate: false,
                        editableUnitPrice: false,
                        exchangeRate: "0.7190623427051125",
                        itemCategory: "AUTO EQUIPMENT",
                        itemCode: "auto item code 1",
                        itemName: "auto item name 1",
                        itemQuantity: "1000",
                        itemUnitPrice: "5000",
                        requestedDeliveryDate: commonAction.getDateFormat5(1),
                        sourceCurrency: "SGD",
                        supplierName: "AUTO SUPPLIER 1",
                        supplierUuid: sessionStorage.getItem("supplierUuid"),                       //"3862f5c9-44f3-4f6d-8c4b-918cf086ac2c",
                        taxCode: "11052022",
                        taxRate: 0.5,
                        uom: "CEN"
                    }
                ],
                requestedDeliveryDate: commonAction.getDateFormat5(1),
                rfqProcess: false,
                rfqTreshold: 0,
                saveAsDraft: false,
                totalAmount: 3613288.27
            }
        }).then((response) =>{
           expect(response.body).has.property("message", `Purchase requisition successfully submitted for: ${prTitle}`);  
           let uuid = response.body.data
           sessionStorage.setItem("uuidPr", uuid)
       })  
    }

    callApiSaveAsDraftPpr(pprTitle){
        let token = window.localStorage.getItem("token")
        let env = environment.env
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'POST',
            url: printf(urlPageLocator.save_draft_ppr_url, env, buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }, 
            body: {
                approvalCodeUuid: "b921fa2d-e79f-458d-a7c8-726ac3bae307",
                approvalSequence: "auto.approver [auto.approver@getnada.com]",
                companyUuid: buyerCompanyUuid,                                              //"689fbac5-7291-4cad-b84c-52e95d4499a8",
                currencyCode: "AOA",
                pprItemDtoList: [
                    {
                    categoryDto: 
                    {
                        companyUuid: buyerCompanyUuid,                                      //"689fbac5-7291-4cad-b84c-52e95d4499a8",
                        uuid: "3f0fb768-f68c-4895-9b8b-a9805528c56d"
                    },
                    currencyCode: "SGD",
                    deliveryAddress: 
                    {
                        addressFirstLine: "1 XYZ Buildingg",
                        addressLabel: "address auto",
                        companyUuid: buyerCompanyUuid,                                      //"689fbac5-7291-4cad-b84c-52e95d4499a8",
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
        let env = environment.env
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        this.callApiGetDataInApprovalList("auto approval PR 1")
        this.callApiGetDataInCatalogueList("auto item code 1")
        cy.request({
            method: 'POST',
            url: printf(urlPageLocator.create_pr_url, env, buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }, 
            body: {
                address: 
                {
                    addressFirstLine: "1 XYZ Buildingg",
                    addressLabel: "address auto",
                    addressSecondLine: "12 New Industrial Rd Singapore, Singapore 536197",
                    city: "Singapore",
                    country: "Singapore",
                    postalCode: "4000",
                    state: "Singapore"
                },
                approvalRouteUuid: sessionStorage.getItem("approvalCodeUuid"),                              //"873bcd64-e460-45b3-8246-390280c81a1b",
                currencyCode: "USD",
                prTitle: prTitle,
                procurementType: "Goods",
                project: false,
                purchaseReqConversation: [],
                purchaseReqDocumentMetadata: [],
                purchaseReqItem: [
                    {
                        address: 
                        {
                            addressFirstLine: "1 XYZ Buildingg",
                            addressLabel: "address auto",
                            addressSecondLine: "12 New Industrial Rd Singapore, Singapore 536197",
                            city: "Singapore",
                            country: "Singapore",
                            postalCode: "4000",
                            state: "Singapore"
                        },
                        editableCurrency: false,
                        editableExchangeRate: false,
                        editableUnitPrice: false,
                        exchangeRate: 0.7190623427051125,
                        itemBrand: "",
                        itemCategory: "AUTO EQUIPMENT",
                        itemCode: "auto item code 1",
                        itemDescription: "",
                        itemModel: "",
                        itemName: "auto item name 1",
                        itemQuantity: 1000,
                        itemSize: "",
                        itemUnitPrice: 5000,
                        note: "",
                        priceType: "",
                        requestedDeliveryDate: commonAction.getDateFormat5(1),
                        sourceCurrency: "SGD",
                        supplierName: "AUTO SUPPLIER 1",
                        supplierUuid: sessionStorage.getItem("supplierUuid"),                               //"3862f5c9-44f3-4f6d-8c4b-918cf086ac2c",
                        taxCode: "11052022",
                        taxRate: 0.5,
                        uom: "CEN",
                    }
                ],
                requestedDeliveryDate: commonAction.getDateFormat5(1),
                rfqProcess: false,
                rfqTreshold: 0,
                saveAsDraft: true,
                totalAmount: 3613288.27
            }
        }).then((response) =>{
           expect(response.body).has.property("message", `Purchase requisition successfully saved for: ${prTitle}`);  
           let uuid = response.body.data
           sessionStorage.setItem("uuidPr", uuid)
       })  
    }

    callApiApproverPpr(){
        let token = window.localStorage.getItem("token")
        let env = environment.env
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
            cy.request({
                method: 'POST',
                url: printf(urlPageLocator.approval_ppr_url, env, buyerCompanyUuid, sessionStorage.getItem("uuidPpr")),
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
        let env = environment.env
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
            cy.request({
                method: 'POST',
                url: printf(urlPageLocator.approval_pr_url, env, buyerCompanyUuid),
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
    
    callApiCreateBuyer(entityName, entityReg, taxReg, email, workNumber){
        let token = window.localStorage.getItem("token")
        let env = environment.env
        cy.request({
            method: 'POST',
            url: printf(urlPageLocator.create_entity_url, env),
            headers: {
                authorization: "Bearer " + token,
            },
            body:{
                buyer: true,
                companyRegistrationNumber: entityReg,                           //"REG NO 987"
                country: "Singapore",                   
                documentsMetaDataList: [],                  
                entityName: entityName,                                         //"AUTO BUYER"
                entityRepresentativeList:
                [
                    {
                        countryCode: "65",
                        email: email,                                           //"auto.buyer@getnada.com",
                        name: entityName,                                       //"AUTO BUYER",
                        userRole: "Entity Representitive",                  
                        workNumber: workNumber,                                 //"987987987"
                    },                  
                    {                   
                        countryCode: "65",                  
                        email: email,                                           //"auto.buyer@getnada.com",
                        name: entityName,                                       //"AUTO BUYER",
                        userRole: "Authorized Signatory",                   
                        workNumber: workNumber,                                 //"987987987"
                    },                  
                    {                   
                        countryCode: "65",          
                        email: email,                                           //"auto.buyer@getnada.com",
                        name: entityName,                                       //"AUTO BUYER",
                        userRole: "Entity Administrator",                   
                        workNumber: workNumber,                                 //"987987987"
                    }
                ],
                entityType: "GENERAL PARTNERSHIP",
                features: 
                [
                    "INVF", "DEVF", "cpUser", "subEntity", "user", "featureMatrix", "approvalMatrix", "rbacRole", "approvalConfiguration", 
                    "paymentTerm", "paymentCycle", "pms", "gl", "currency", "trade", "project", "projectForeCast", "vendor", "connection",
                    "apSpecialist", "uom", "catalogue", "tax", "managePrefix", "category", "WO", "BC", "WR", "dwr", "dwo", "dpc", "contract",
                    "address", "supplierBankAccount", "bankAccount", "GR", "MPAYM", "HPAYM", "DO", "PO", "PPR", "INV", "PPO", "RFQF", "PR", "CN"
                ],
                gstApplicable: true,
                gstNo: taxReg,                                                  //Tax Reg No 01
                industryType: "CONSTRUCTION",
                remarks: "",
                supplier: false
            }
        }).then((response) =>{
           expect(response.body).has.property("status", "OK")
        })
    }

    callApiCreateSupplier(entityName, entityReg, email, name, workNumber){
        let token = window.localStorage.getItem("token")
        let env = environment.env 
        cy.request({
            method: 'POST',
            url: printf(urlPageLocator.create_entity_url, env),
            headers: {
                authorization: "Bearer " + token,
            },
            body:{
                buyer: false,
                companyRegistrationNumber: entityReg,                           //"AUTO REG 1"
                country: "Singapore",                   
                documentsMetaDataList: [],                  
                entityName: entityName,                                         //"AUTO SUPPLIER 2",
                entityRepresentativeList:                   
                [                   
                    {                   
                        countryCode: "65",                  
                        email: email,                                           //"auto.supplier2@getnada.com",
                        name: name,                                             //"auto supplier 2",
                        userRole: "Entity Representitive",                  
                        workNumber: workNumber,                                 //"676786765"
                    },                  
                    {                   
                        countryCode: "65",                  
                        email: email,                                           //"auto.supplier2@getnada.com",
                        name: name,                                             //"auto supplier 2",
                        userRole: "Authorized Signatory",                   
                        workNumber: workNumber,                                 //"676786765"
                    },                  
                    {                   
                        countryCode: "65",
                        email: email,                                           //"auto.supplier2@getnada.com",
                        name: name,                                             //"auto supplier 2",
                        userRole: "Entity Administrator",                   
                        workNumber: workNumber,                                 //"676786765"
                    }
                ],
                entityType: "GENERAL PARTNERSHIP",
                features: 
                [
                    "cpUser", "subEntity", "user", "rbacRole", "paymentTerm", "featureMatrix", "approvalMatrix", "connection", "tax", "address", "facility", "vendor", "supplierBankAccount", "bankAccount", "GR", "MPAYM", "HPAYM", "DO", "PO", "PPR", "INV", "PPO", "RFQF", "PR", "CN"
                ],
                gstApplicable: false,
                gstNo: "N/A",
                industryType: "CONSTRUCTION",
                remarks: "",
                supplier: true,
            }
        }).then((response) =>{
           expect(response.body).has.property("status", "OK")
        })
    }

    callApiCreateUom(uomCode, uomName){
        let token = window.localStorage.getItem("token")
        let env = environment.env
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'POST',
            url: printf(urlPageLocator.create_uom_url, env, buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            },
            body: {
                active: true,
                description: "",
                uomCode: uomCode,
                uomName: uomName,
            }
        }).then((response) =>{
            expect(response.body).has.property("status", "OK")
        })
    }

    callApiCreateCategory(categoryName, categoryDescription){
        let token = window.localStorage.getItem("token")
        let env = environment.env
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'POST',
            url: printf(urlPageLocator.create_category_url, env, buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            },
            body: {
                categoryDescription: categoryDescription,
                categoryName: categoryName,
                companyUuid: buyerCompanyUuid,                                     //"689fbac5-7291-4cad-b84c-52e95d4499a8"
            }
        }).then((response) =>{
            expect(response.body).has.property("status", "OK")
        })
    }

    callApiCreateAddress(addressLabel){
        let token = window.localStorage.getItem("token")
        let env = environment.env
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'POST',
            url: printf(urlPageLocator.create_address_url, env, buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            },
            body: {
                active: true,
                addressFirstLine: "1 XYZ Buildingg",
                addressLabel: addressLabel,
                addressSecondLine: "12 New Industrial Rd Singapore, Singapore 536197",
                city: "Singapore",
                companyUuid: buyerCompanyUuid,                                                    //"689fbac5-7291-4cad-b84c-52e95d4499a8",
                country: "Singapore",
                default: false,
                postalCode: "4000",
                state: "Singapore"                        
            }
        }).then((response) =>{
           expect(response.body).has.property("message", "Create is successful")
        })
    }

    callApiCreateCatalogue(catalogueItemCode, catalogueItemName){
        let token = window.localStorage.getItem("token")
        let env = environment.env
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        this.callApiGetDataAfterLogin()
        this.callApiGetDataInCatalogueList("auto item code 1")
        cy.request({
            method: 'POST',
            url: printf(urlPageLocator.create_catalogue_url, env, buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            },
            body: {
                catalogueItemCode: catalogueItemCode,
                catalogueItemName: catalogueItemName,
                categoryDto:
                {
                    action: null,
                    active: true,
                    categoryDescription: "auto equipment",
                    categoryName: "AUTO EQUIPMENT",
                    companyUuid: buyerCompanyUuid,                                       //"689fbac5-7291-4cad-b84c-52e95d4499a8",
                    createdBy: "AUTO BUYER",
                    createdOn: commonAction.getDateFormat5(1),
                    updatedBy: null,
                    updatedOn: commonAction.getDateFormat5(1),
                    uuid: sessionStorage.getItem("categoryDtoUuid"),                     //"3f0fb768-f68c-4895-9b8b-a9805528c56d",
                },
                companyUuid: buyerCompanyUuid,                                           //"689fbac5-7291-4cad-b84c-52e95d4499a8",
                contracted: false,
                contractedPrice: 0,
                contractedQty: 0,
                currencyCode: "USD",
                description: "",
                glAccountNumber: "",
                isActive: true,
                isManual: false,
                itemBrand: "",
                itemCategory: "AUTO EQUIPMENT",
                itemModel: "",
                itemSize: "",
                lockItemName: false,
                projects: [],
                supplierCode: "1105",
                supplierName: "AUTO SUPPLIER 1",
                supplierUuid: sessionStorage.getItem("supplierUuid"),                              //"3862f5c9-44f3-4f6d-8c4b-918cf086ac2c",
                taxCode: "11052022",
                taxRate: "0.5",
                unitPrice: 5000,
                uomCode: "CEN",
                validFrom: commonAction.getDateFormat1(0),                                         //"05/07/2022",
                validTo: commonAction.getDateFormat1(3),                                           //"08/07/2022",                   
            }
        }).then((response) =>{
           expect(response.body).has.property("message", `Catalogue added: ${catalogueItemCode}`)
        })
    }

}export default ApiAction