import UrlPage from '../PageObject/urlPage'
import CommonPage from "../PageObject/commonPage"
import CommonAction from '../commons/common_actions'
import UrlPageLocator from '../PageUI/urlPageUI'

const urlPage = new UrlPage()
const commonPage = new CommonPage()
const commonAction = new CommonAction()
const urlPageLocator = new UrlPageLocator()

var printf = require('printf')
var vendor1 = require('../data/vendor1.json')
var vendor2 = require('../data/vendor2.json')
var hardUuid = require('../data/hardUuid.json');
var dataBuyer = require('../../../dataBuyer.json');
var dataSupplier = require('../../../dataSupplier.json');
var dataApSpecialist = require('../../../dataApSpecialist.json');
var dataCreatorCompany = require('../data/dataCreatorCompany.json');
var dataApprover1Company = require('../data/dataApprover1Company.json');
var dataApprover2Company = require('../data/dataApprover2Company.json');
var dataApSpecialistCompany = require('../data/dataApSpecialistCompany.json')

class ApiAction{
    constructor() {
        this.env = 'stag'
    }

    callApiNavigateToEntityDetailPage(entityName){
        let token = window.localStorage.getItem("token")
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.list_entities_url, this.env),            
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response)=>{
            expect(response.body).has.property("status", "OK")
            let elementEntity = response.body.data.find(element => element.entityName === entityName);
            urlPage.navigateToEntityDetailPage(elementEntity.uuid)
        })
    }

    callApiGetDataItemCatalogue(){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.item_catalogue_url, this.env, buyerCompanyUuid),            
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response)=>{
            expect(response.body).has.property("status", "OK")
        })
    }

    callApiConvertPrToPo(prTitle){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.wrap(this.callApiGetDataInCatalogueList("auto item code 2")).then((e)=>{
            cy.request({
                method: 'GET',
                url: printf(urlPageLocator.pr_to_be_converted_list_url, this.env, buyerCompanyUuid),            
                headers: {
                    authorization: "Bearer " + token,
                }
            }).then((response)=>{
                let elementPr = response.body.data.find(element => element.prTitle === prTitle);
                let prUuid = elementPr.uuid;
                cy.request({
                    method: 'POST',
                    url: printf(urlPageLocator.convert_pr_to_po_api_url, this.env, buyerCompanyUuid, prUuid, sessionStorage.getItem("supplierUuid")),           //supplierUuid: 3862f5c9-44f3-4f6d-8c4b-918cf086ac2c
                    headers: {
                        authorization: "Bearer " + token,
                    }
                }).then((response)=>{
                    expect(response.body).has.property("status", "OK")
                })
            }) 
        })   
    }

    callApiNavigateToPprPage(pageName, pprTitle){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.ppr_list_url, this.env, buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
            let elementRoot = response.body.data.data.find(element => element.pprTitle === pprTitle);
            let uuidRoot = elementRoot.pprUuid;
            urlPage.navigateToPprPage(pageName, uuidRoot)
        })
    }

    callApiGetPprList(){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.ppr_list_url, this.env, buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
        })
    }

    callApiGetPrList(){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.pr_list_url, this.env, buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
        })
    }

    callApiNavigateToPrPage(pageName, prNumber){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.pr_list_url, this.env, buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
            let elementRoot = response.body.data.data.find(element => element.prNumber === prNumber);
            let uuidRoot = elementRoot.uuid;
            urlPage.navigateToPrPage(pageName, uuidRoot)
        })
    }

    callApiNavigateToConvertPrToPoPage(prNumber){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.pr_to_be_converted_list_url, this.env, buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            let elementRoot = response.body.data.find(element => element.prNumber === prNumber);
            let uuidRoot = elementRoot.uuid;
            urlPage.navigateToConvertPrToPoPage(uuidRoot)
        })
    }

    callApiCreateDO(poNumber){
        let token = window.localStorage.getItem("token")
        let supplierCompanyUuid = dataSupplier.supplierCompanyUuid
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.supplier_po_list_url, this.env, supplierCompanyUuid),                   //"70becfb0-cb73-46b2-b372-8e78714eb507"
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
            let elementRoot = response.body.data.data.find(element => element.poNumber === poNumber);
            let uuidRoot = elementRoot.poUuid;
            cy.request({
                method: 'POST',
                url: printf(urlPageLocator.create_do_url, this.env, supplierCompanyUuid),
                headers: {
                    authorization: "Bearer " + token,
                },
                body: {
                    deliveryDate: commonAction.getDateFormat5(0),
                    deliveryOrderNumber: "",
                    documentList: [],
                    itemList: [
                        {
                            itemCode: "auto item code 2",
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
        let supplierCompanyUuid = dataSupplier.supplierCompanyUuid
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.supplier_po_list_url, this.env, supplierCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            let elementPO = response.body.data.data.find(element => element.poNumber === poNumber);
            let poUuidList = elementPO.poUuid;
            cy.request({
                method: 'GET',
                url: printf(urlPageLocator.do_list_url, this.env, supplierCompanyUuid),
                headers: {
                    authorization: "Bearer " + token,
                }
            }).then((response) => {
                let elementDO = response.body.data.find(element => element.deliveryOrderNumber === doNumber);
                let doUuidList = elementDO.doUuid;
                cy.request({
                    method: 'PUT',
                    url: printf(urlPageLocator.issue_do_url, this.env, supplierCompanyUuid),
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
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.api_user_me_url, this.env),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
            let userName = response.body.data.name
            let userUuid = response.body.data.uuid
            let companyUuid = response.body.data.companies[0].companyUuid;
            sessionStorage.setItem("userName", userName)
            sessionStorage.setItem("userUuid", userUuid)
            sessionStorage.setItem("companyUuid", companyUuid)
        })
    }

    callApiGetDataInApprovalList(approvalName){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.approval_matrix_list_url, this.env, buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
            let elementApproval = response.body.data.find(element => element.approvalName === approvalName);
            let approvalCodeUuid = elementApproval.uuid
            sessionStorage.setItem("approvalCodeUuid", approvalCodeUuid )
        })
    }

    callApiCreateGrFromDo(doNumber){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        let supplierCompanyUuid = dataSupplier.supplierCompanyUuid
        cy.wrap(this.callApiGetDataInApprovalList("auto approval Goods Receipt")).then((e)=>{
            cy.request({
                method: 'GET',
                url: printf(urlPageLocator.create_gr_from_do_list_url, this.env, buyerCompanyUuid),
                headers: {
                    authorization: "Bearer " + token,
                }
            }).then((response) => {
                let elementDO = response.body.data.find(element => element.doNumber === doNumber);
                let doUuidList = elementDO.uuid;
                cy.request({
                    method: 'POST',
                    url: printf(urlPageLocator.create_gr_from_do_detail_url, this.env, buyerCompanyUuid),
                    headers: {
                        authorization: "Bearer " + token,
                    },
                    body: [doUuidList]
                }).then((response)=>{
                    expect(response.body).has.property("status", "OK")
                    let itemId = response.body.data.items[0].itemId;
                    cy.request({
                        method: 'POST',
                        url: printf(urlPageLocator.create_gr_from_do_submit_url, this.env, buyerCompanyUuid),
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
                            supplierCompanyUuid: supplierCompanyUuid,                                       //"70becfb0-cb73-46b2-b372-8e78714eb507"
                        }
                    }).then((response)=>{
                        expect(response.body).has.property("status", "OK")
                    })
                })
            })
        })
        
    }

    callApiApprovalGr(grNumber){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.wrap(this.callApiGetDataInApprovalList("auto approval Goods Receipt")).then((e)=>{
            cy.request({
                method: 'GET',
                url: printf(urlPageLocator.gr_list_url, this.env, buyerCompanyUuid),
                headers: {
                    authorization: "Bearer " + token,
                }
            }).then((response) => {
                expect(response.body).has.property("message", "Retrieval of goods receipt list successful")
                let elementGR = response.body.data.data.find(element => element.grNumber === grNumber);
                let grUuidList = elementGR.uuid;
                cy.request({
                    method: 'GET',
                    url: printf(urlPageLocator.gr_detail_url, this.env, buyerCompanyUuid, grUuidList),
                    headers: {
                        authorization: "Bearer " + token,
                    }
                }).then((response)=>{
                    expect(response.body).has.property("status", "OK")
                    let itemId = response.body.data.goodsReceiptItem[0].itemId;
                    cy.request({
                        method: 'POST',
                        url: printf(urlPageLocator.approval_gr_url, this.env, buyerCompanyUuid),
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
        })
    }

    callApiNavigateToPoDetailPage(roleName, poNumber){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        let supplierCompanyUuid = dataSupplier.supplierCompanyUuid
        let url;
        switch (roleName) {
            case "Buyer":
                url = printf(urlPageLocator.buyer_po_list_url, this.env, buyerCompanyUuid)
                break;

            case "Supplier":
                url = printf(urlPageLocator.supplier_po_list_url, this.env, supplierCompanyUuid)
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
            let elementRoot = response.body.data.data.find(element => element.poNumber === poNumber);
            let uuidRoot = elementRoot.poUuid;
            sessionStorage.setItem("poUuid", uuidRoot)
            urlPage.navigateToPoDetailPage(uuidRoot)
        })
    }

    callApiViewPo(roleName, poNumber){
        let token = window.localStorage.getItem("token")
        let companyUuid;
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        let supplierCompanyUuid = dataSupplier.supplierCompanyUuid
        switch (roleName) {
            case "buyer":
                companyUuid = buyerCompanyUuid
                break;

            case "supplier":
                companyUuid = supplierCompanyUuid
                break;
        
            default:
                break;
        }
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.po_list_url, this.env, companyUuid, roleName),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            let elementRoot = response.body.data.data.find(element => element.poNumber === poNumber);
            let poUuidRoot = elementRoot.poUuid;
            let viewPoUrl;
            switch (roleName) {
                case "buyer":
                    viewPoUrl = printf(urlPageLocator.buyer_view_po_url, this.env, buyerCompanyUuid, poUuidRoot)
                    break;
    
                case "supplier":
                    viewPoUrl = printf(urlPageLocator.supplier_view_po_url, this.env, supplierCompanyUuid, poUuidRoot)
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
        let supplierCompanyUuid = dataSupplier.supplierCompanyUuid
        cy.request({
            method: 'PUT',
            url: printf(urlPageLocator.acknowledge_po_url, this.env, supplierCompanyUuid, poUuid),
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
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.catalogue_list_url, this.env, buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
            let elementCatalogue = response.body.data.catalogues.find(element => element.catalogueItemCode === catalogueItemCode);
            let categoryDtoUuid = elementCatalogue.categoryDto.uuid
            let supplierUuid = elementCatalogue.supplierUuid
            let catalogueUuid = elementCatalogue.uuid
            sessionStorage.setItem("categoryDtoUuid", categoryDtoUuid)
            sessionStorage.setItem("supplierUuid", supplierUuid)
            sessionStorage.setItem("catalogueUuid", catalogueUuid)
        })  
    }

    callApiGetDataInManageAddress(addressLabel){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.company_address_list_url, this.env, buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
            let elementAddress = response.body.data.find(element => element.addressLabel === addressLabel);
            let addressUuid = elementAddress.uuid
            sessionStorage.setItem("addressUuid", addressUuid)
        })
    }

    callApiRaiseRFQ(rfqTitle){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        // open when switch env stag
        //cy.wrap(this.callApiGetDataInManageVendorList("AUTO SUPPLIER 1")).then((e)=>{ 
            cy.request({
                method: 'POST',
                //url: printf(urlPageLocator.raise_rfq_url, this.env, buyerCompanyUuid),
                url: urlPageLocator.raise_rfq_dev_url,
                headers: {
                    authorization: "Bearer " + token,
                },
                body: {
                    currencyCode: "USD",
                    deliveryAddress:
                    {
                        addressFirstLine: "1 XYZ Buildingg",
                        addressLabel: "address auto",
                        addressSecondLine: "12 New Industrial Rd Singapore, Singapore 536197",
                        city: "Singapore",
                        country: "Singapore",
                        postalCode: "4000",
                        state: "Singapore",
                    },
                    deliveryDate: commonAction.getDateFormat5(30),
                    dueDate: commonAction.getDateFormat5(5,),
                    note: "",
                    procurementType: "Goods",
                    project: false,
                    requisitionType: "PR",
                    rfqDocumentMetaDataDtoList: [],
                    rfqItemDtoList: 
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
                                state: "Singapore",
                            },
                            exchangeRate: 1,
                            itemBrand: "Panasonic",
                            itemCode: "auto item code",
                            itemDescription: "auto item description",
                            itemModel: "auto model",
                            itemName: "auto item name",
                            itemQuantity: 1000,
                            itemSize: "100",
                            itemUnitPrice: 3000,
                            manualItem: true,
                            note: "",
                            projectForecastTradeCode: "",
                            requestedDeliveryDate: commonAction.getDateFormat5(30),
                            sourceCurrency: "USD",
                            uom: "CEN",
                        }
                    ],
                    rfqTitle: rfqTitle,
                    rfqType: "One-off",
                    rfqVendorDtoList: 
                    [
                        {
                            contactPersonEmail: "auto.supplier1@getnada.com",
                            contactPersonName: "auto supplier 1",
                            supplierUuid: "3862f5c9-44f3-4f6d-8c4b-918cf086ac2c",
                            //supplierUuid: sessionStorage.getItem("vendorUuid"), 
                        }
                    ],
                    validityEndDate: "",
                    validityStartDate: ""
                }
            }).then((response) => {
                expect(response.body).has.property("status", "OK")
            })
        //})
    }

    callApiGetDataInRfqList(roleName, rfqNumber){
        let urlRequest
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        let supplierCompanyUuid = dataSupplier.supplierCompanyUuid
        switch (roleName) {
            case "buyer":
                //urlRequest = printf(urlPageLocator.rfq_list_url, this.env, buyerCompanyUuid, roleName)
                urlRequest = printf(urlPageLocator.rfq_list_dev_buyer_url)
                break;

            case "supplier":
                //urlRequest = printf(urlPageLocator.rfq_list_url, this.env, supplierCompanyUuid, roleName)
                urlRequest = printf(urlPageLocator.rfq_list_dev_supplier_url)
                break;
        
            default:
                break;
        }
        cy.request({
            method: 'GET',
            url: urlRequest,
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
            let elementRfq = response.body.data.find(element => element.rfqNumber === rfqNumber);
            let rfqUuid = elementRfq.uuid
            sessionStorage.setItem("rfqUuid", rfqUuid)
        })
    }

    callApiGetDataInRfqDetails(roleName, rfqNumber){
        let urlRequest
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        let supplierCompanyUuid = dataSupplier.supplierCompanyUuid
        cy.wrap(this.callApiGetDataInRfqList(roleName, rfqNumber)).then((e)=>{
            switch (roleName) {
                case "buyer":
                    //urlRequest = printf(urlPageLocator.rfq_detail_url, this.env, buyerCompanyUuid, roleName, sessionStorage.getItem("rfqUuid"))
                    urlRequest = printf(urlPageLocator.rfq_detail_buyer_dev_url, roleName, sessionStorage.getItem("rfqUuid"))
                    break;
    
                case "supplier":
                    //urlRequest = printf(urlPageLocator.rfq_detail_url, this.env, supplierCompanyUuid, roleName, sessionStorage.getItem("rfqUuid"))
                    urlRequest = printf(urlPageLocator.rfq_detail_supplier_dev_url, roleName, sessionStorage.getItem("rfqUuid"))
                    break;
            
                default:
                    break;
            }
            cy.request({
                method: 'GET',
                url: urlRequest,
                headers: {
                    authorization: "Bearer " + token,
                }
            }).then((response) => {
                expect(response.body).has.property("status", "OK")
                let rfqItemId = response.body.data.rfqItemList[0].id
                sessionStorage.setItem("rfqItemId", rfqItemId)
            })
        })
    }

    callApiSubmitRfq(rfqNumber){
        let token = window.localStorage.getItem("token")
        let supplierCompanyUuid = dataSupplier.supplierCompanyUuid
        cy.wrap(this.callApiGetDataInRfqDetails("supplier", rfqNumber)).then((e)=>{
            cy.request({
                method: 'POST',
                //url: printf(urlPageLocator.submit_rfq_url, this.env, supplierCompanyUuid),
                url: urlPageLocator.submit_rfq_dev_url,
                headers: {
                    authorization: "Bearer " + token,
                },
                body: {
                    currencyCode: "USD",
                    documentMetaDataDtoList: [],
                    quoteItemDtoList: 
                    [
                        {
                            currencyCode: "USD",
                            quoteItemNote: "",
                            quotedUnitPrice: 3000,
                            rfqItemId: sessionStorage.getItem("rfqItemId"),
                            taxCode: "GST7",
                            taxRate: 7,
                        }
                    ],
                    rfqUuid: sessionStorage.getItem("rfqUuid"),
                    taxCode: "GST7"
                }
            }).then((response)=>{
                expect(response.body).has.property("message", "Quotation Successfully Submitted");
            })
        })
    }

    callApiCloseRfq(rfqNumber){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.wrap(this.callApiGetDataInRfqList("buyer", rfqNumber)).then((e)=>{
            cy.request({
                method: 'PUT',
                //url: printf(urlPageLocator.close_rfq_url, this.env, buyerCompanyUuid),
                url: urlPageLocator.close_rfq_dev_url,
                headers: {
                    authorization: "Bearer " + token,
                },
                body: {
                    newlyAddedDocumentList: [],
                    uuid: sessionStorage.getItem("rfqUuid")
                }
            }).then((response)=>{
                expect(response.body).has.property("message", "RFQ was closed successfully");
            })
        })
    }

    callApiShortlistRfq(rfqNumber, approvalRoute){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.wrap(this.callApiGetDataInApprovalList(approvalRoute)).then((e)=>{
            cy.wrap(this.callApiGetDataInRfqDetails("buyer", rfqNumber)).then((e)=>{
                cy.request({
                    method: 'GET',
                    //url: printf(urlPageLocator.rfq_detail_url, this.env, buyerCompanyUuid, "buyer", sessionStorage.getItem("rfqUuid"))
                    url: printf(urlPageLocator.rfq_detail_buyer_dev_url, "buyer", sessionStorage.getItem("rfqUuid")),
                    headers: {
                        authorization: "Bearer " + token,
                    }
                }).then((response) => {
                    expect(response.body).has.property("status", "OK")
                    let quoteUuid = response.body.data.quoteDtoList[0].uuid
                    sessionStorage.setItem("quoteUuid", quoteUuid)
                    cy.request({
                        method: 'PUT',
                        //url: printf(urlPageLocator.shortlist_rfq_url, this.env, buyerCompanyUuid),
                        url: urlPageLocator.shortlist_rfq_dev_url,
                        headers: {
                            authorization: "Bearer " + token,
                        },
                        body: {
                            approvalRouteUuid: sessionStorage.getItem("approvalCodeUuid"),
                            newlyAddedDocumentList: [],
                            shortListRfqItemDtoList: 
                            [
                                {
                                    awardedQty: 1000,
                                    quoteUuid: sessionStorage.getItem("quoteUuid"),
                                    rfqItemId: sessionStorage.getItem("rfqItemId"),
                                }
                            ],
                            uuid: sessionStorage.getItem("rfqUuid"),
                        }
                    }).then((response)=>{
                        expect(response.body).has.property("message", `RFQ has been successfully shortlisted for: ${rfqNumber}`);
                    })
                })
            })
        })
    }

    callApiApprovalRfq(rfqNumber){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.wrap(this.callApiGetDataInRfqList("buyer", rfqNumber)).then((e)=>{
            cy.request({
                method: 'PUT',
                //url: printf(urlPageLocator.approve_rfq_url, this.env, buyerCompanyUuid),
                url: urlPageLocator.approve_rfq_dev_url,
                headers: {
                    authorization: "Bearer " + token,
                },
                body: {
                    newlyAddedDocumentList: [],
                    uuid: sessionStorage.getItem("rfqUuid"),
                }
            }).then((response)=>{
                expect(response.body).has.property("message", "Approval is successful");
            })
        })
    }

    callApiRaisePprWithContractItemUnconnectedSupplier(pprTitle){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.wrap(this.callApiGetDataAfterLogin()).then((e)=>{
            cy.wrap(this.callApiGetDataInApprovalList("auto approval PPR 1")).then((e)=>{
                cy.wrap(this.callApiGetDataInCatalogueList("auto item code 4")).then((e)=>{
                    cy.wrap(this.callApiGetDataInManageAddress("address auto")).then((e)=>{
                        cy.wrap(this.callApiGetDataInManageVendorList("TEST SUPPLIER 36")).then((e)=>{
                            cy.request({
                                method: 'POST',
                                url: printf(urlPageLocator.create_ppr_url, this.env, buyerCompanyUuid),
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
                                    approvalCodeUuid: sessionStorage.getItem("approvalCodeUuid"),                            
                                    approvalSequence: "auto.approver [auto.approver@getnada.com]",
                                    companyUuid: buyerCompanyUuid,                                                           
                                    currencyCode: "SGD",
                                    documentDtoList: [],
                                    note: "",
                                    pprItemDtoList: 
                                    [
                                        {
                                            accountNumber: "G/L auto 1",
                                            catalogueItemCode: "auto item code 4",
                                            catalogueItemName: "auto item name 4",
                                            categoryDto: 
                                            {
                                                active: true,
                                                categoryDescription: "auto equipment",
                                                categoryName: "AUTO EQUIPMENT",
                                                companyUuid: buyerCompanyUuid,                                                   
                                                uuid: sessionStorage.getItem("categoryDtoUuid"),                                 
                                            },
                                            contractReferenceNumber: "CT-000000002",
                                            contracted: true,
                                            contractedPrice: 10000000,
                                            contractedQty: 2,
                                            currencyCode: "SGD",
                                            deliveryAddress: 
                                            {   
                                                active: true,
                                                addressFirstLine: "1 XYZ Buildingg",
                                                addressLabel: "address auto",
                                                addressSecondLine: "12 New Industrial Rd Singapore, Singapore 536197",
                                                city: "Singapore",  
                                                companyUuid: buyerCompanyUuid,                                                   
                                                country: "Singapore",
                                                postalCode: "4000",
                                                state: "Singapore",
                                                uuid: sessionStorage.getItem("addressUuid"),                                     
                                            },
                                            isActive: true,
                                            isEditable: true,
                                            isManual: false,
                                            itemCategory: "AUTO EQUIPMENT",
                                            itemCode: "auto item code 4",
                                            itemMaterial: null,
                                            itemModel: "auto model 111111",
                                            itemName: "auto item name 4",
                                            itemSize: "100",
                                            quantity: "1000",
                                            requestDeliveryDate: commonAction.getDateFormat5(1),
                                            supplierCode: "TEST_SUPPLIER_36",
                                            supplierName: "TEST_SUPPLIER_36",
                                            supplierUuid: sessionStorage.getItem("vendorUuid"),                                   
                                            taxCode: "11052022",
                                            taxRate: "0.5",
                                            unitPrice: "5000",
                                            uomCode: "IN",
                                            uuid: sessionStorage.getItem("catalogueUuid"),                                  
                                        }
                                    ],
                                    pprTitle: pprTitle,
                                    procurementType: "GOODS",
                                    requestedDeliveryDate: commonAction.getDateFormat5(1),
                                    requesterName: "auto creator",
                                    requesterUuid: sessionStorage.getItem("userUuid"),                                
                                    status: "PENDING_APPROVAL"
                                }
                            }).then((response)=>{
                              expect(response.body).has.property("message", "PPR created successfully");
                              let uuid = response.body.data
                              sessionStorage.setItem("uuidPpr", uuid)
                            })
                        })
                    })
                })
            })
        }) 
    }

    callApiRaisePpr(pprTitle){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.wrap(this.callApiGetDataAfterLogin()).then((e)=>{
            cy.wrap(this.callApiGetDataInApprovalList("auto approval PPR 1")).then((e)=>{
                cy.wrap(this.callApiGetDataInCatalogueList("auto item code 2")).then((e)=>{
                    cy.wrap(this.callApiGetDataInManageAddress("address auto")).then((e)=>{
                        cy.request({
                            method: 'POST',
                            url: printf(urlPageLocator.create_ppr_url, this.env, buyerCompanyUuid),
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
                                approvalCodeUuid: sessionStorage.getItem("approvalCodeUuid"),                            //"b921fa2d-e79f-458d-a7c8-726ac3bae307",
                                approvalSequence: "auto.approver [auto.approver@getnada.com]",
                                companyUuid: buyerCompanyUuid,                                                           //"689fbac5-7291-4cad-b84c-52e95d4499a8",
                                currencyCode: "SGD",
                                documentDtoList: [],
                                note: "",
                                pprItemDtoList: 
                                [
                                    {
                                        accountNumber: "G/L auto 1",
                                        catalogueItemCode: "auto item code 2",
                                        catalogueItemName: "auto item name 2",
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
                                            addressSecondLine: "12 New Industrial Rd Singapore, Singapore 536197",
                                            city: "Singapore",  
                                            companyUuid: buyerCompanyUuid,                                                   //"689fbac5-7291-4cad-b84c-52e95d4499a8",
                                            country: "Singapore",
                                            postalCode: "4000",
                                            state: "Singapore",
                                            uuid: sessionStorage.getItem("addressUuid"),                                     //"f9cdfeca-c150-47ed-8840-f17bdd6ff797"
                                        },
                                        isActive: true,
                                        isEditable: true,
                                        isManual: false,
                                        itemCategory: "AUTO EQUIPMENT",
                                        itemCode: "auto item code 2",
                                        itemName: "auto item name 2",
                                        quantity: "100",
                                        requestDeliveryDate: commonAction.getDateFormat5(1),
                                        supplierCode: "TEST_SUPPLIER_34",
                                        supplierName: "TEST SUPPLIER 34",
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
                                requestedDeliveryDate: commonAction.getDateFormat5(1),
                                requesterName: "auto creator",
                                requesterUuid: sessionStorage.getItem("userUuid"),                                //"b809048e-d96c-4897-b5a4-8099f57b53a1",
                                status: "PENDING_APPROVAL"
                            }
                        }).then((response)=>{
                          expect(response.body).has.property("message", "PPR created successfully");
                          let uuid = response.body.data
                          sessionStorage.setItem("uuidPpr", uuid)
                        })
                    })
                })
            })
        })  
    }

    callApiRaisePr(prTitle){
        let token = window.localStorage.getItem("token")    
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.wrap(this.callApiGetDataInApprovalList("auto approval PR 1")).then((e)=>{
            cy.wrap(this.callApiGetDataInCatalogueList("auto item code 2")).then((e)=>{
                cy.request({
                    method: 'POST',
                    url: printf(urlPageLocator.create_pr_url, this.env, buyerCompanyUuid),
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
                                itemCode: "auto item code 2",
                                itemName: "auto item name 2",
                                itemQuantity: "1000",
                                itemUnitPrice: "5000",
                                requestedDeliveryDate: commonAction.getDateFormat5(1),
                                sourceCurrency: "SGD",
                                supplierName: "TEST SUPPLIER 34",
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
            })   
        }) 
    }

    callApiRaisePrWithQuantityAndUnitPrice(prTitle, quantity, unitPrice){
        let token = window.localStorage.getItem("token")    
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.wrap(this.callApiGetDataInApprovalList("auto approval PR 1")).then((e)=>{
            cy.wrap(this.callApiGetDataInCatalogueList("auto item code 2")).then((e)=>{
                cy.request({
                    method: 'POST',
                    url: printf(urlPageLocator.create_pr_url, this.env, buyerCompanyUuid),
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
                                itemCode: "auto item code 2",
                                itemName: "auto item name 2",
                                itemQuantity: quantity,
                                itemUnitPrice: unitPrice,
                                requestedDeliveryDate: commonAction.getDateFormat5(1),
                                sourceCurrency: "SGD",
                                supplierName: "TEST SUPPLIER 34",
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
            })   
        }) 
    }

    callApiSaveAsDraftPpr(pprTitle){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.wrap(this.callApiGetDataAfterLogin()).then((e)=>{
            cy.wrap(this.callApiGetDataInApprovalList("auto approval PPR 1")).then((e)=>{
                cy.wrap(this.callApiGetDataInCatalogueList("auto item code 2")).then((e)=>{
                    cy.wrap(this.callApiGetDataInManageAddress("address auto")).then((e)=>{
                        cy.request({
                            method: 'POST',
                            url: printf(urlPageLocator.save_draft_ppr_url, this.env, buyerCompanyUuid),
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
                                approvalCodeUuid: sessionStorage.getItem("approvalCodeUuid"),                            //"b921fa2d-e79f-458d-a7c8-726ac3bae307",
                                approvalSequence: "auto.approver [auto.approver@getnada.com]",
                                companyUuid: buyerCompanyUuid,                                                           //"689fbac5-7291-4cad-b84c-52e95d4499a8",
                                currencyCode: "SGD",
                                documentDtoList: [],
                                note: "",
                                pprItemDtoList: 
                                [
                                    {
                                        accountNumber: "G/L auto 1",
                                        catalogueItemCode: "auto item code 2",
                                        catalogueItemName: "auto item name 2",
                                        categoryDto: 
                                        {
                                            active: true,
                                            categoryDescription: "auto equipment",
                                            categoryName: "AUTO EQUIPMENT",
                                            companyUuid: buyerCompanyUuid,                                                   //"689fbac5-7291-4cad-b84c-52e95d4499a8",
                                            uuid: sessionStorage.getItem("categoryDtoUuid"),
                                        },
                                        currencyCode: "SGD",
                                        deliveryAddress: 
                                        {
                                            active: true,
                                            addressFirstLine: "1 XYZ Buildingg",
                                            addressLabel: "address auto",
                                            addressSecondLine: "12 New Industrial Rd Singapore, Singapore 536197",
                                            city: "Singapore",  
                                            companyUuid: buyerCompanyUuid,                                      //"689fbac5-7291-4cad-b84c-52e95d4499a8",
                                            country: "Singapore",
                                            postalCode: "4000",
                                            state: "Singapore",
                                            uuid: sessionStorage.getItem("addressUuid"),
                                        },
                                        isActive: true,
                                        isEditable: true,
                                        isManual: false,
                                        itemCategory: "AUTO EQUIPMENT",
                                        itemCode: "auto item code 2",
                                        itemName: "auto item name 2",
                                        quantity: "100",
                                        requestDeliveryDate: commonAction.getDateFormat5(1),
                                        supplierCode: "TEST_SUPPLIER_34",
                                        supplierName: "TEST SUPPLIER 34",
                                        supplierUuid: sessionStorage.getItem("supplierUuid"),
                                        taxCode: "11052022",
                                        taxRate: "0.5",
                                        unitPrice: "5000",
                                        uomCode: "CEN",      
                                        uuid: sessionStorage.getItem("catalogueUuid"),
                                    }
                                ],
                                pprTitle: pprTitle,
                                procurementType: "GOODS",
                                requestedDeliveryDate: commonAction.getDateFormat5(1),
                                requesterName: "auto creator",
                                requesterUuid: sessionStorage.getItem("userUuid"),
                                status: "SAVED_AS_DRAFT"
                            }
                        }).then((response)=>{
                            expect(response.body).has.property("message", "PPR saved draft successfully");
                        })
                    })
                })
            })
        })
    }

    callApiSaveAsDraftPr(prTitle){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.wrap(this.callApiGetDataInApprovalList("auto approval PR 1")).then((e)=>{
            cy.wrap(this.callApiGetDataInCatalogueList("auto item code 2")).then((e)=>{
                cy.request({
                    method: 'POST',
                    url: printf(urlPageLocator.create_pr_url, this.env, buyerCompanyUuid),
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
                                itemCode: "auto item code 2",
                                itemDescription: "",
                                itemModel: "",
                                itemName: "auto item name 2",
                                itemQuantity: 1000,
                                itemSize: "",
                                itemUnitPrice: 5000,
                                note: "",
                                priceType: "",
                                requestedDeliveryDate: commonAction.getDateFormat5(1),
                                sourceCurrency: "SGD",
                                supplierName: "TEST SUPPLIER 34",
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
            })
        })  
    }

    callApiApproverPpr(){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
            cy.request({
                method: 'POST',
                url: printf(urlPageLocator.approval_ppr_url, this.env, buyerCompanyUuid, sessionStorage.getItem("uuidPpr")),
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
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
            cy.request({
                method: 'POST',
                url: printf(urlPageLocator.approval_pr_url, this.env, buyerCompanyUuid),
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
                    "cpUser", "subEntity", "user", "rbacRole", "paymentTerm", "featureMatrix", "approvalMatrix", "connection", "tax", "address", "facility",
                    "vendor", "supplierBankAccount", "bankAccount", "GR", "MPAYM", "HPAYM", "DO", "PO", "PPR", "INV", "PPO", "RFQF", "PR", "CN", "currency"
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
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'POST',
            url: printf(urlPageLocator.create_uom_url, this.env, buyerCompanyUuid),
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
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'POST',
            url: printf(urlPageLocator.create_category_url, this.env, buyerCompanyUuid),
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
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'POST',
            url: printf(urlPageLocator.create_address_url, this.env, buyerCompanyUuid),
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

    callApiCreateTax(taxCode){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'POST',
            url: printf(urlPageLocator.create_tax_url, this.env, buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            },
            body: {
                active: true,
                companyUuid: buyerCompanyUuid,
                default: true,
                description: "auto tax code",
                taxCode: taxCode,
                taxRate: 0.5
            }
        }).then((response)=>{
           expect(response.body).has.property("status", "OK")
        })
    }

    callApiCreateGL(glAccount){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'POST',
            url: printf(urlPageLocator.create_gl_account_url, this.env, buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            },
            body: {
                accountNumber: glAccount,
                active: true,
                companyUuid: buyerCompanyUuid,
                costCodeDtoList: [],
                departmentCodeDtoList: [],
                description: ""
            }
        }).then((response)=>{
           expect(response.body).has.property("status", "OK")
        })
    }

    callApiGetDataInPaymentTermList(paymentTerm){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.payment_term_list_url, this.env, buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response)=>{
            expect(response.body).has.property("status", "OK")
            let elementPaymentTerm = response.body.data.find(element => element.ptName === paymentTerm);
            let ptUuid = elementPaymentTerm.ptUuid
            sessionStorage.setItem("ptUuid", ptUuid)
        })
    }

    callApiGetDataInTaxList(taxCode){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.tax_list_url, this.env, buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response)=>{
            expect(response.body).has.property("status", "OK")
            let elementTax = response.body.data.find(element => element.taxCode === taxCode);
            let taxUuid = elementTax.uuid
            sessionStorage.setItem("taxUuid", taxUuid)
        })
    }

    callApiCreateExternalVendor(companyName){
        let vendorInfo
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        switch (companyName) {
            case "AUTO SUPPLIER 1":
                vendorInfo = vendor1
                break;

            case "AUTO COMPANY 1":
                vendorInfo = vendor2
                break;
        
            default:
                break;
        }
        cy.wrap(this.callApiGetDataInPaymentTermList(vendorInfo.paymentTerm)).then((e)=>{
            cy.wrap(this.callApiGetDataInTaxList(vendorInfo.taxCode)).then((e)=>{
                cy.request({
                    method: 'POST',
                    url: printf(urlPageLocator.create_external_vendor_url, this.env, buyerCompanyUuid),
                    headers: {
                        authorization: "Bearer " + token,
                    },
                    body: {
                        addressDto:
                        [
                            {
                                addressFirstLine: vendorInfo.address1,
                                addressLabel: vendorInfo.addressLabel,
                                addressSecondLine: vendorInfo.address2,
                                city: "",
                                country: vendorInfo.country,
                                default: true,
                                postalCode: vendorInfo.postalCode,
                                state: vendorInfo.country
                            }
                        ],
                        addressesDto:
                        [
                            {
                                addressFirstLine: vendorInfo.address1,
                                addressLabel: vendorInfo.addressLabel,
                                addressSecondLine: vendorInfo.address2,
                                city: "",
                                country: vendorInfo.country,
                                default: true,
                                postalCode: vendorInfo.postalCode,
                                state: vendorInfo.country,
                                uuid: ""
                            }
                        ],
                        buyer: false,
                        companyCode: vendorInfo.companyCode,
                        companyName: companyName,
                        countryCode: "65",
                        countryOfOrigin: vendorInfo.country,
                        emailAddress: vendorInfo.email,
                        fullName: companyName,
                        gstRegBusiness: "Registered",
                        gstRegNo: vendorInfo.taxRegNo,
                        paymentTerm:
                        {
                            ptUuid: sessionStorage.getItem("ptUuid")
                        },
                        seller: true,
                        supplierUserList:
                        [
                            {
                                countryCode: "65",
                                default: true,
                                emailAddress: vendorInfo.email,
                                fullName: vendorInfo.fullName,
                                workNumber: vendorInfo.workNumber
                            }
                        ],
                        tax:{
                            uuid: sessionStorage.getItem("taxUuid"),                            //"47bc6361-be9e-475c-a5dc-90ad17aaf5ff",
                        },
                        taxPercentage: 0.5,
                        taxUuid: sessionStorage.getItem("taxUuid"),                             //"47bc6361-be9e-475c-a5dc-90ad17aaf5ff",
                        uen: vendorInfo.companyRegNo,
                        workNumber: vendorInfo.workNumber
                    }
                }).then((response) =>{
                   expect(response.body).has.property("message", "Create is successful")
                })
            })
        })   
    }

    callApiGetDataInCategoryList(categoryName){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.category_list_url, this.env, buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response)=>{
            expect(response.body).has.property("status", "OK")
            let elementCategory = response.body.data.find(element => element.categoryName === categoryName);
            let categoryUuid = elementCategory.uuid
            sessionStorage.setItem("categoryUuid", categoryUuid)
        })
    }

    callApiGetDataInManageVendorList(vendorName){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.manage_vendor_list_url, this.env, buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response)=>{
            expect(response.body).has.property("status", "OK")
            let elementVendor = response.body.data.find(element => element.companyName === vendorName);
            let vendorUuid = elementVendor.uuid
            sessionStorage.setItem("vendorUuid", vendorUuid)
        })
    }

    navigateToVendorDetailsPage(vendorName){
        cy.wrap(this.callApiGetDataInManageVendorList(vendorName)).then((e)=>{
            commonAction.navigateTo(printf(urlPageLocator.vendor_detail_url, this.env, sessionStorage.getItem("vendorUuid")))
        })
    }

    callApiCreateCatalogue(catalogueItemCode, catalogueItemName){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.wrap(this.callApiGetDataInCategoryList("AUTO EQUIPMENT")).then((e)=>{
            cy.wrap(this.callApiGetDataInManageVendorList("AUTO SUPPLIER 1")).then((e)=>{
                cy.request({
                    method: 'POST',
                    url: printf(urlPageLocator.create_catalogue_url, this.env, buyerCompanyUuid),
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
                            companyUuid: buyerCompanyUuid,                              
                            createdBy: "AUTO BUYER",
                            createdOn: commonAction.getDateFormat5(1),
                            updatedBy: null,
                            updatedOn: commonAction.getDateFormat5(1),
                            uuid: sessionStorage.getItem("categoryUuid"),                   
                        },
                        companyUuid: buyerCompanyUuid,                                  
                        contracted: false,
                        contractedPrice: 0,
                        contractedQty: 0,
                        currencyCode: "SGD",
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
                        supplierUuid: sessionStorage.getItem("vendorUuid"),                                
                        taxCode: "11052022",
                        taxRate: "0.5",
                        unitPrice: 5000,
                        uomCode: "CEN",
                        validFrom: commonAction.getDateFormat1(0),                                    
                        validTo: commonAction.getDateFormat1(30),                                                       
                    }
                }).then((response) =>{
                   expect(response.body).has.property("message", `Catalogue added: ${catalogueItemCode}`)
                })
            })
        })
    }

    callAPiCreateProject(projectCode, projectTitle){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.wrap(this.callApiGetDataInManageAddress("address auto")).then((e)=>{
            cy.request({
                method: 'POST',
                url: printf(urlPageLocator.create_project_url, this.env, buyerCompanyUuid),
                headers: {
                    authorization: "Bearer " + token,
                },
                body: {
                    addressUuid: sessionStorage.getItem("addressUuid"),
                    companyUuid: buyerCompanyUuid,
                    currency: "USD",
                    draftStatus: false,
                    endDate: commonAction.getDateFormat1(365),
                    erpProjectCode: "",
                    overallBudget: "1000000",
                    projectAdminRemarks: "",
                    projectCode: projectCode,
                    projectCodeDescription: "",
                    projectDescription: "auto test project description",
                    projectInChargeRemarks: "",
                    projectTeamMemberRemarks: "",
                    projectTitle: projectTitle,
                    projectUserDtoList:
                    [
                        {
                            projectUserRole: "PROJECT_ADMIN",
                            remarks: "",
                            userName: "AUTO BUYER",
                            userUuid: dataBuyer.buyerUuid
                        },
                        {
                            projectUserRole: "PROJECT_IN_CHARGE",
                            remarks: "",
                            userName: "AUTO BUYER",
                            userUuid: dataBuyer.buyerUuid
                        }
                    ],
                    startDate: commonAction.getDateFormat1(0)
                }
            }).then((response)=>{
               expect(response.body).has.property("message", `Project created for: ${projectTitle}`)
            })
        })
    }

    callApiCreateCompanyUser(designation){
        let token = window.localStorage.getItem("token")
        let companyInfo, array
        let buyerCompanyName = dataBuyer.buyerName
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        switch (designation) {
            case "creator":
                companyInfo = dataCreatorCompany
                array = [
                            hardUuid.prCreatorUuid, 
                            hardUuid.poCreatorUuid,
                            hardUuid.doCreatorUuid,
                            hardUuid.cnCreatorUuid,
                            hardUuid.pprCreatorUuid,
                            hardUuid.rfqCreatorUuid,
                            hardUuid.invCreatorUuid,
                            hardUuid.ppoCreatorUuid,
                            hardUuid.paymentCreatorUuid
                        ]
                break;
            
            case "approver 1":
                companyInfo = dataApprover1Company
                array = [
                            hardUuid.prApproverUuid, 
                            hardUuid.grApproverUuid,
                            hardUuid.wrApproverUuid,
                            hardUuid.cnApproverUuid,
                            hardUuid.poApproverUuid,
                            hardUuid.rfqApproverUuid,
                            hardUuid.pprApproverUuid,
                            hardUuid.ppoApproverUuid,
                            hardUuid.invApproverUuid,
                            hardUuid.paymentApproverUuid
                        ]
                break;

            case "approver 2":
                companyInfo = dataApprover2Company
                array = [
                            hardUuid.prApproverUuid, 
                            hardUuid.grApproverUuid,
                            hardUuid.wrApproverUuid,
                            hardUuid.cnApproverUuid,
                            hardUuid.poApproverUuid,
                            hardUuid.rfqApproverUuid,
                            hardUuid.pprApproverUuid,
                            hardUuid.ppoApproverUuid,
                            hardUuid.invApproverUuid,
                            hardUuid.paymentApproverUuid
                        ]
                break;

            case "ap specialist":
                companyInfo = dataApSpecialistCompany
                array = [hardUuid.invApproverUuid]
                break;
        
            default:
                break;
        }
        cy.request({
            method: 'POST',
            url: printf(urlPageLocator.create_company_user_url, this.env),
            headers: {
                authorization: "Bearer " + token,
            },
            body: {
                companiesRoles:
                [
                    {
                        companyName: buyerCompanyName,
                        companyUuid: buyerCompanyUuid,
                        role: ["ENTITY_USER"],
                    }
                ],
                countryCode: companyInfo.countryCode,
                designation: companyInfo.designation,
                email: companyInfo.email,
                name: companyInfo.name,
                password: companyInfo.password,
                remarks: "",
                workNumber: companyInfo.workNumber
            }
        }).then((response)=>{
            expect(response.body).has.property("status", "OK")
            let uuid = response.body.data
            cy.request({
                method: 'POST',
                url: printf(urlPageLocator.update_user_role_url, this.env, buyerCompanyUuid, uuid),
                headers: {
                    authorization: "Bearer " + token,
                },
                body: array
            }).then((response)=>{
               expect(response.body).has.property("message", "Updated successfully")
            })
        })
    }

    callApiCreateApSpecialistGrouping(groupCode){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.wrap(this.callApiGetDataInManageVendorList("AUTO SUPPLIER 1")).then((e)=>{
            cy.request({
                method: 'POST',
                url: printf(urlPageLocator.create_ap_specialist_url, this.env, buyerCompanyUuid),
                headers: {
                    authorization: "Bearer " + token,
                },
                body: {
                    apSpecialistUsers: 
                    [
                        {
                            userName: dataApSpecialist.apSpecialistName,                  //"auto ap_specialist",
                            userUuid: dataApSpecialist.apSpecialistUuid                   //"3a92edbf-2f0a-47dd-b258-499301737963"
                        }
                    ],
                    groupCode: groupCode,
                    remarks: "auto remark",
                    vendorUuid: [sessionStorage.getItem("vendorUuid")]                      //"016cbc2c-45a3-4e93-898f-60115b710cae"
                },
            }).then((response)=>{
               expect(response.body).has.property("message", "AP Specialist successfully created")
            })
        })
    }

    callApiGetDataInApprovalConfiguration(featureName){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.approval_configuration_url, this.env, buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            },
        }).then((response)=>{
            expect(response.body).has.property("status", "OK")
            let elementFeature = response.body.data.find(element => element.featureName === featureName);
            let featureCode = elementFeature.featureCode
            let featureUuid = elementFeature.featureUuid
            sessionStorage.setItem("featureCode", featureCode)
            sessionStorage.setItem("featureUuid", featureUuid)
        })
    }

    callApiCreateApprovalMatrix(featureCode, approvalLevel){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        var pr = require('../data/dataPr.json')
        var po = require('../data/dataPo.json')
        var gr = require('../data/dataGr.json')
        var cn = require('../data/dataCn.json')
        var rfq = require('../data/dataRfq.json')
        var ppr = require('../data/dataPpr.json')
        var inv = require('../data/dataInv.json')
        var pr2 = require('../data/dataPr2.json')
        var ppr2 = require('../data/dataPpr2.json')
        var mpaym = require('../data/dataMpaym.json')
        var hpaym = require('../data/dataHpaym.json')
        var tmp = require(`../data/data${featureCode}.json`)
        let approvalRange
        switch (approvalLevel) {
            case "1":
                approvalRange = [
                                    {
                                        rangeFrom: 0,
                                        rangeTo: 0,
                                        valueCriteria: false,
                                        approvalGroups:
                                        [
                                            {
                                                group:
                                                {
                                                    uuid: hardUuid.groupUuidLv1                  //"d5c57a8f-a629-4f81-859b-b8d8f4261bd4"
                                                },
                                                numberApprovers: 1,
                                                sequence: 1,
                                            }
                                        ],
                                    }
                                ]
                break;

            case "2":
                approvalRange = [
                                    {
                                        rangeFrom: 0,
                                        rangeTo: 0,
                                        valueCriteria: false,
                                        approvalGroups:
                                        [
                                            {
                                                group:
                                                {
                                                    uuid: hardUuid.groupUuidLv1
                                                },
                                                numberApprovers: 1,
                                                sequence: 1,
                                            }
                                        ],
                                    },
                                
                                    {
                                        rangeFrom: 0,
                                        rangeTo: 0,
                                        valueCriteria: false,
                                        approvalGroups:
                                        [
                                            {
                                                group:
                                                {
                                                    uuid: hardUuid.groupUuidLv2
                                                },
                                                numberApprovers: 1,
                                                sequence: 2,
                                            }
                                        ],
                                    }
                                ]
                break;
        
            default:
                break;
        }
        cy.request({
            method: 'POST',
            url: printf(urlPageLocator.create_approval_matrix_url, this.env, buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            },
            body: {
                approvalCode: tmp.approvalCode,                              //"approval code 4545446",
                approvalName: tmp.approvalName,                              //"approval name 4546",
                approvalRange: approvalRange,
                featureCode: tmp.featureCode,                               //sessionStorage.getItem("featureCode"),
                featureName: tmp.featureName,                               //"Pre Purchase Requisition",
                featureUuid: tmp.featureUuid,                               //sessionStorage.getItem("featureUuid"),
                goodReceivers: []
            }
        }).then((response)=>{
            expect(response.body).has.property("message", "Create is successful")
        })
    }

    callApiGetDataInDocumentPrefixList(functionName) {
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.document_prefix_list_url, this.env, buyerCompanyUuid),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
            let elementFunction = response.body.data.supplierPortalList.find(element => element.functionName === functionName);
            let docPrefixUuid = elementFunction.prefixUuid;
            sessionStorage.setItem("docPrefixUuid", docPrefixUuid)
        })
    }

    callAPIConfigDocumentPrefix(functionName, prefixType) {
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        let buyerName = dataBuyer.buyerName
        let buyerUuid = dataBuyer.buyerUuid
        cy.wrap(this.callApiGetDataInDocumentPrefixList(functionName)).then((e) => {
            cy.request({
                method: 'PUT',
                url: printf(urlPageLocator.update_document_prefix_url, this.env, buyerCompanyUuid),
                headers: {
                authorization: "Bearer " + token,
                },
                body: {
                    creator: buyerName,
                    creatorDesignation: "",
                    creatorUuid: buyerUuid,
                    dateDynamic: false,
                    dateDynamicPrefix: "",
                    defaultCurrentNumber: "",
                    defaultNumberOfDigits: "",
                    editStartingNumber: false,
                    functionName: functionName,
                    isDateDynamic: false,
                    isProjectCode: false,
                    numberOfDigits: -1,
                    prefix: "",
                    prefixSampleFormat: "",
                    prefixSampleOutput: "",
                    prefixUuid: sessionStorage.getItem("docPrefixUuid"),
                    projectCode: false,
                    startingNumber: 1,
                    startingNumberFormat: "",
                    type: prefixType
                }
            }).then((response) => {
                expect(response.body).has.property("status", "OK")
            })
        })
    }
}export default ApiAction