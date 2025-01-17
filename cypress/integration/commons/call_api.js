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
var dataSupplier1 = require('../../../dataSupplier1.json');
var dataApSpecialist = require('../../../dataApSpecialist.json');
var dataCreatorCompany = require('../data/dataCreatorCompany.json');
var dataApprover1Company = require('../data/dataApprover1Company.json');
var dataApprover2Company = require('../data/dataApprover2Company.json');
var dataUnconnectedSupplier = require('../../../dataUnConnectSupplier.json');
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

    callApiGetCatalogueDetail(itemCode){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.wrap(this.callApiGetDataInCatalogueList(itemCode)).then((e) => {
            cy.request({
                method: 'GET',
                url: printf(urlPageLocator.catalogue_detail_url, this.env, buyerCompanyUuid, sessionStorage.getItem("catalogueUuid")),         
                headers: {
                    authorization: "Bearer " + token,
                }
            }).then((response)=>{
                expect(response.body).has.property("status", "OK")
            })
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
                let prNumber = elementPr.prNumber;
                sessionStorage.setItem("prNumber", prNumber)
                cy.request({
                    method: 'POST',
                    url: printf(urlPageLocator.convert_pr_to_po_api_url, this.env, buyerCompanyUuid, prUuid, sessionStorage.getItem("supplierUuid")),
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

    callApiGetDataInPrList(prNumber){
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
            sessionStorage.setItem("prUuid", uuidRoot)
        })
    }
    
    callApiGetPrDetail(prNumber){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.wrap(this.callApiGetDataInPrList(prNumber)).then((e) => {
            cy.request({
                method: 'GET',
                url: printf(urlPageLocator.pr_detail_url, this.env, buyerCompanyUuid, sessionStorage.getItem("prUuid")),         
                headers: {
                    authorization: "Bearer " + token,
                }
            }).then((response)=>{
                expect(response.body).has.property("status", "OK")
                cy.request({
                    method: 'GET',
                    url: printf(urlPageLocator.pr_over_view_url, this.env, buyerCompanyUuid, sessionStorage.getItem("prUuid")),
                    headers: {
                        authorization: "Bearer " + token,
                    }
                }).then((response) => {
                    expect(response.body).has.property("status", "OK")
                })
            })
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
            url: printf(urlPageLocator.supplier_po_list_url, this.env, supplierCompanyUuid),
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

    callApiGetDataAfterLogin(account){
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
            let elementCompany = response.body.data.companies.find(element => element.role.find(el => el === account));
            let companyUuid = elementCompany.companyUuid
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
                            approvalRouteUuid: sessionStorage.getItem("approvalCodeUuid"),
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
                            supplierCompanyUuid: supplierCompanyUuid,
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
                            approvalRouteUuid: sessionStorage.getItem("approvalCodeUuid"),
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
                            supplierCompanyUuid: sessionStorage.getItem("companyUuid"),
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

    callApiGetDataInPoList(roleName, poNumber) {
        let token = window.localStorage.getItem("token")
        let companyUuid, role;
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        let supplierCompanyUuid = dataSupplier.supplierCompanyUuid
        let unconnectedSupplierUuid = dataUnconnectedSupplier.supplierCompanyUuid
        switch (roleName) {
            case "buyer":
                companyUuid = buyerCompanyUuid
                role = "buyer"
                break;

            case "supplier":
                companyUuid = supplierCompanyUuid
                role = "supplier"
                break;
            
            case "unconnected supplier":
                companyUuid = unconnectedSupplierUuid
                role = "supplier"
                break;
        
            default:
                break;
        }
        cy.request({
            method: 'GET',
            url: printf(urlPageLocator.po_list_url, this.env, companyUuid, role),
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            expect(response.body).has.property("status", "OK")
            let elementRoot = response.body.data.data.find(element => element.poNumber === poNumber);
            let poUuidRoot = elementRoot.poUuid;
            sessionStorage.setItem("poUuid", poUuidRoot)
        })
    }

    callApiGetPoDetail(roleName, poNumber) {
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        let supplierCompanyUuid = dataSupplier.supplierCompanyUuid
        let unconnectedSupplierUuid = dataUnconnectedSupplier.supplierCompanyUuid
        let companyUuid, role
        switch (roleName) {
            case "buyer":
                companyUuid = buyerCompanyUuid
                role = "buyer"
                break;

            case "supplier":
                companyUuid = supplierCompanyUuid
                role = "supplier"
                break;
            
            case "unconnected supplier":
                companyUuid = unconnectedSupplierUuid
                role = "supplier"
                break;
        
            default:
                break;
        }
        cy.wrap(this.callApiGetDataInPoList(roleName, poNumber)).then((e) => {
            cy.request({
                method: 'GET',
                url: printf(urlPageLocator.po_detail_url, this.env, companyUuid, role, sessionStorage.getItem("poUuid")),
                headers: {
                    authorization: "Bearer " + token,
                }
            }).then((response) =>{
                expect(response.body).has.property("status", "OK")
                cy.request({
                    method: 'GET',
                    url: printf(urlPageLocator.po_detail_url, this.env, companyUuid, role, sessionStorage.getItem("poUuid")),
                    headers: {
                        authorization: "Bearer " + token,
                    }
                }).then((response) =>{
                    expect(response.body).has.property("status", "OK")
                })
            })
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

    callApiSubmitPo(prNumber, prTitle) {
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.wrap(this.callApiGetDataInVendorDetail("TEST SUPPLIER 34", "buyer")).then((e) => {
            cy.request({
                method: 'GET',
                url: printf(urlPageLocator.po_list_url, this.env, buyerCompanyUuid, "buyer"),
                headers: {
                    authorization: "Bearer " + token,
                }
            }).then((response) => {
                expect(response.body).has.property("status", "OK")
                let elementPO = response.body.data.data.find(element => element.prNumber === prNumber);
                let poUuidList = elementPO.poUuid;
                let poNumber = elementPO.poNumber;
                sessionStorage.setItem("poNumber", poNumber)
                sessionStorage.setItem("poUuid", poUuidList)
                cy.request({
                    method: 'PUT',
                    url: printf(urlPageLocator.submit_po_url, this.env, buyerCompanyUuid, poUuidList),
                    headers: {
                        authorization: "Bearer " + token,
                    },
                    body: {
                        approvalRoute: "",
                        notes: "auto test note",
                        poDocumentDtoList: [],
                        poItems: [
                            {
                                currency: "USD",
                                deliveryAddress: {
                                    addressFirstLine: "1 XYZ Buildingg",
                                    addressLabel: "address auto",
                                    addressSecondLine: "12 New Industrial Rd Singapore, Singapore 536197",
                                    city: "Singapore",
                                    country: "Singapore",
                                    postalCode: "4000",
                                    state: "Singapore"
                                },
                                exchangeRate: 1,
                                gl_account: "G/L auto 1",
                                invoiceQty: 0,
                                itemBrand: "",
                                itemCategory: "AUTO EQUIPMENT",
                                itemCode: "auto item code 2",
                                itemDescription: "",
                                itemModel: "",
                                itemName: "auto item name 2",
                                itemSize: "",
                                itemUnitPrice: 5000,
                                manualEntry: false,
                                note: "",
                                pendingDeliveryQty: 0,
                                pendingInvoiceQty: 0,
                                priceType: "",
                                qtyConverted: 0,
                                qtyReceived: 0,
                                qtyRejected: 0,
                                quantity: 1000,
                                requestedDeliveryDate: commonAction.getDateFormat4(1) + "T00:00:00.000Z",
                                supplierName: "TEST SUPPLIER 34",
                                supplierUuid: sessionStorage.getItem("vendorUuid"),
                                taxCode: "11052022",
                                taxRate: 0.5,
                                uomCode: "CEN"
                            }
                        ],
                        poTitle: prTitle,
                        poUuid: poUuidList,
                        supplierBillingAddress: {
                            addressFirstLine: "ad1",
                            addressLabel: "ad label",
                            addressSecondLine: "ad2",
                            city: "Singapore",
                            country: "Singapore",
                            postalCode: "6000",
                            state: "Singapore",
                            uuid: sessionStorage.getItem("vendorAddressUuid")
                        },
                        termsConditions: null
                    }
                }).then((response) => {
                    expect(response.body).has.property("message", "PO has been issued to supplier")
                })
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
        cy.wrap(this.callApiGetDataInManageVendorList("AUTO SUPPLIER 1", "buyer")).then((e)=>{ 
            cy.request({
                method: 'POST',
                url: printf(urlPageLocator.raise_rfq_url, this.env, buyerCompanyUuid),
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
                    deliveryContactPerson:
                    {
                        countryCode: "65",
                        email: "auto.buyer@getnada.com",
                        name: "AUTO BUYER",
                        phoneNumber: "987987987"
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
                            supplierUuid: sessionStorage.getItem("vendorUuid"), 
                        }
                    ],
                    validityEndDate: "",
                    validityStartDate: ""
                }
            }).then((response) => {
                expect(response.body).has.property("status", "OK")
            })
        })
    }

    callApiGetDataInRfqList(roleName, rfqNumber){
        let urlRequest
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        let supplierCompanyUuid = dataSupplier1.supplierCompanyUuid
        switch (roleName) {
            case "buyer":
                urlRequest = printf(urlPageLocator.rfq_list_url, this.env, buyerCompanyUuid, roleName)
                break;

            case "supplier":
                urlRequest = printf(urlPageLocator.rfq_list_url, this.env, supplierCompanyUuid, roleName)
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
        let supplierCompanyUuid = dataSupplier1.supplierCompanyUuid
        cy.wrap(this.callApiGetDataInRfqList(roleName, rfqNumber)).then((e)=>{
            switch (roleName) {
                case "buyer":
                    urlRequest = printf(urlPageLocator.rfq_detail_url, this.env, buyerCompanyUuid, roleName, sessionStorage.getItem("rfqUuid"))
                    break;
    
                case "supplier":
                    urlRequest = printf(urlPageLocator.rfq_detail_url, this.env, supplierCompanyUuid, roleName, sessionStorage.getItem("rfqUuid"))
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
        let supplierCompanyUuid = dataSupplier1.supplierCompanyUuid
        cy.wrap(this.callApiGetDataInRfqDetails("supplier", rfqNumber)).then((e)=>{
            cy.request({
                method: 'POST',
                url: printf(urlPageLocator.submit_rfq_url, this.env, supplierCompanyUuid),
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
                url: printf(urlPageLocator.close_rfq_url, this.env, buyerCompanyUuid),
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
                    url: printf(urlPageLocator.rfq_detail_url, this.env, buyerCompanyUuid, "buyer", sessionStorage.getItem("rfqUuid")),
                    headers: {
                        authorization: "Bearer " + token,
                    }
                }).then((response) => {
                    expect(response.body).has.property("status", "OK")
                    let quoteUuid = response.body.data.quoteDtoList[0].uuid
                    sessionStorage.setItem("quoteUuid", quoteUuid)
                    cy.request({
                        method: 'PUT',
                        url: printf(urlPageLocator.shortlist_rfq_url, this.env, buyerCompanyUuid),
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
                url: printf(urlPageLocator.approve_rfq_url, this.env, buyerCompanyUuid),
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
        cy.wrap(this.callApiGetDataAfterLogin("ENTITY_USER")).then((e)=>{
            cy.wrap(this.callApiGetDataInApprovalList("auto approval PPR 1")).then((e)=>{
                cy.wrap(this.callApiGetDataInCatalogueList("auto item code 4")).then((e)=>{
                    cy.wrap(this.callApiGetDataInManageAddress("address auto")).then((e)=>{
                        cy.wrap(this.callApiGetDataInManageVendorList("TEST SUPPLIER 36", "buyer")).then((e)=>{
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
                                    deliveryContactPerson:
                                    {
                                        countryCode: "65",
                                        email: "auto.buyer@getnada.com",
                                        name: "AUTO BUYER",
                                        phoneNumber: "987987987"
                                    },
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
        cy.wrap(this.callApiGetDataAfterLogin("ENTITY_USER")).then((e)=>{
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
                                approvalCodeUuid: sessionStorage.getItem("approvalCodeUuid"),
                                approvalSequence: "auto.approver [auto.approver@getnada.com]",
                                companyUuid: buyerCompanyUuid,
                                currencyCode: "SGD",
                                deliveryContactPerson:
                                {
                                    countryCode: "65",
                                    email: "auto.buyer@getnada.com",
                                    name: "AUTO BUYER",
                                    phoneNumber: "987987987"
                                },
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
                                            companyUuid: buyerCompanyUuid,
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
                        approvalRouteUuid: sessionStorage.getItem("approvalCodeUuid"),
                        currencyCode: "USD",
                        deliveryContactPerson:
                        {
                            countryCode: "65",
                            email: "auto.buyer@getnada.com",
                            name: "AUTO BUYER",
                            phoneNumber: "987987987"
                        },
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
                                supplierUuid: sessionStorage.getItem("supplierUuid"),
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
                        approvalRouteUuid: sessionStorage.getItem("approvalCodeUuid"),
                        currencyCode: "USD",
                        deliveryContactPerson:
                        {
                            countryCode: "65",
                            email: "auto.buyer@getnada.com",
                            name: "AUTO BUYER",
                            phoneNumber: "987987987"
                        },
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
                                supplierUuid: sessionStorage.getItem("supplierUuid"),
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
        cy.wrap(this.callApiGetDataAfterLogin("ENTITY_USER")).then((e)=>{
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
                                approvalCodeUuid: sessionStorage.getItem("approvalCodeUuid"),
                                approvalSequence: "auto.approver [auto.approver@getnada.com]",
                                companyUuid: buyerCompanyUuid,
                                currencyCode: "SGD",
                                deliveryContactPerson:
                                {
                                    countryCode: "65",
                                    email: "auto.buyer@getnada.com",
                                    name: "AUTO BUYER",
                                    phoneNumber: "987987987"
                                },
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
                                            companyUuid: buyerCompanyUuid,
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
                        approvalRouteUuid: sessionStorage.getItem("approvalCodeUuid"),
                        currencyCode: "USD",
                        deliveryContactPerson:
                        {
                            countryCode: "65",
                            email: "auto.buyer@getnada.com",
                            name: "AUTO BUYER",
                            phoneNumber: "987987987"
                        },
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
                                supplierUuid: sessionStorage.getItem("supplierUuid"),
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

    callApiConvertPprToPr(){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
            cy.request({
                method: 'POST',
                url: printf(urlPageLocator.convert_ppr_to_pr_url, this.env, buyerCompanyUuid, sessionStorage.getItem("uuidPpr")),
                headers: {
                    authorization: "Bearer " + token,
                }
            }).then((response) =>{
               expect(response.body).has.property("message", "Converted to PR successfully")
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
                companyRegistrationNumber: entityReg,
                country: "Singapore",                   
                documentsMetaDataList: [],                  
                entityName: entityName,
                entityRepresentativeList:
                [
                    {
                        countryCode: "65",
                        email: email,
                        name: entityName,
                        userRole: "Entity Representitive",                  
                        workNumber: workNumber,
                    },                  
                    {                   
                        countryCode: "65",                  
                        email: email,
                        name: entityName,
                        userRole: "Authorized Signatory",                   
                        workNumber: workNumber,
                    },                  
                    {                   
                        countryCode: "65",          
                        email: email,
                        name: entityName,
                        userRole: "Entity Administrator",                   
                        workNumber: workNumber,
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
                gstNo: taxReg,
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
                companyRegistrationNumber: entityReg,
                country: "Singapore",                   
                documentsMetaDataList: [],                  
                entityName: entityName,
                entityRepresentativeList:                   
                [                   
                    {                   
                        countryCode: "65",                  
                        email: email,
                        name: name,
                        userRole: "Entity Representitive",                  
                        workNumber: workNumber,
                    },                  
                    {                   
                        countryCode: "65",                  
                        email: email,
                        name: name,
                        userRole: "Authorized Signatory",                   
                        workNumber: workNumber,
                    },                  
                    {                   
                        countryCode: "65",
                        email: email,
                        name: name,
                        userRole: "Entity Administrator",                   
                        workNumber: workNumber,
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
                companyUuid: buyerCompanyUuid,
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
                companyUuid: buyerCompanyUuid,
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
                            uuid: sessionStorage.getItem("taxUuid"),
                        },
                        taxPercentage: 0.5,
                        taxUuid: sessionStorage.getItem("taxUuid"),
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

    callApiGetDataInManageVendorList(vendorName, vendorRole){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        let supplierCompanyUuid = dataSupplier.supplierCompanyUuid
        let companyUuid
        switch (vendorRole) {
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
            url: printf(urlPageLocator.manage_vendor_list_url, this.env, companyUuid),
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

    callApiGetDataInVendorDetail(vendorName, vendorRole) {
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        let supplierCompanyUuid = dataSupplier.supplierCompanyUuid
        let companyUuid
        switch (vendorRole) {
            case "buyer":
                companyUuid = buyerCompanyUuid
                break;

            case "supplier":
                companyUuid = supplierCompanyUuid
                break;
        
            default:
                break;
        }
        cy.wrap(this.callApiGetDataInManageVendorList(vendorName, vendorRole)).then((e) => {
            cy.request({
                method: 'GET',
                url: printf(urlPageLocator.vendor_detail_url, this.env, companyUuid, sessionStorage.getItem("vendorUuid")),
                headers: {
                    authorization: "Bearer " + token,
                }
            }).then((response)=>{
                expect(response.body).has.property("status", "OK")
                let vendorAddressUuid = response.body.data.addressesDto[0].uuid
                sessionStorage.setItem("vendorAddressUuid", vendorAddressUuid)
            })
        })
    }

    navigateToVendorDetailsPage(vendorName){
        cy.wrap(this.callApiGetDataInManageVendorList(vendorName, "buyer")).then((e)=>{
            commonAction.navigateTo(printf(urlPageLocator.vendor_detail_url, this.env, sessionStorage.getItem("vendorUuid")))
        })
    }

    callApiCreateCatalogue(catalogueItemCode, catalogueItemName){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.wrap(this.callApiGetDataInCategoryList("AUTO EQUIPMENT")).then((e)=>{
            cy.wrap(this.callApiGetDataInManageVendorList("AUTO SUPPLIER 1", "buyer")).then((e)=>{
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
        cy.wrap(this.callApiGetDataInManageVendorList("AUTO SUPPLIER 1", "buyer")).then((e)=>{
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
                            userName: dataApSpecialist.apSpecialistName,
                            userUuid: dataApSpecialist.apSpecialistUuid
                        }
                    ],
                    groupCode: groupCode,
                    remarks: "auto remark",
                    vendorUuid: [sessionStorage.getItem("vendorUuid")]
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
                                                    uuid: hardUuid.groupUuidLv1
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
                approvalCode: tmp.approvalCode,
                approvalName: tmp.approvalName,
                approvalRange: approvalRange,
                featureCode: tmp.featureCode,
                featureName: tmp.featureName,
                featureUuid: tmp.featureUuid,
                goodReceivers: []
            }
        }).then((response)=>{
            expect(response.body).has.property("message", "Create is successful")
        })
    }

    callApiGetDataInDocumentPrefixList(roleName, functionName) {
        let token = window.localStorage.getItem("token")
        let urlRequest
        if(roleName == "buyer"){
            urlRequest = printf(urlPageLocator.document_prefix_list_url, this.env, dataBuyer.buyerCompanyUuid)
        }else if(roleName == "supplier"){
            urlRequest = printf(urlPageLocator.document_prefix_list_url, this.env, dataSupplier.supplierCompanyUuid)
        }
        cy.request({
            method: 'GET',
            url: urlRequest,
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

    callApiConfigDocumentPrefix(roleName, functionName, prefixType) {
        let token = window.localStorage.getItem("token")
        let urlRequest
        let creator
        let creatorUuid
        cy.wrap(this.callApiGetDataInDocumentPrefixList(roleName, functionName)).then((e) => {
            if(roleName == "buyer"){
                urlRequest = printf(urlPageLocator.update_document_prefix_url, this.env, dataBuyer.buyerCompanyUuid)
                creator = dataBuyer.buyerName
                creatorUuid = dataBuyer.buyerUuid
            }else if(roleName == "supplier"){
                urlRequest = printf(urlPageLocator.update_document_prefix_url, this.env, dataSupplier.supplierCompanyUuid)
                creator = dataSupplier.supplierName
                creatorUuid = dataSupplier.supplierUuid
            }
            cy.request({
                method: 'PUT',
                url: urlRequest,
                headers: {
                authorization: "Bearer " + token,
                },
                body: {
                    creator: creator,
                    creatorDesignation: "",
                    creatorUuid: creatorUuid,
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
                expect(response.body).has.property("message", "Update is successful")
            })
        })
    }

    callApiUncheckApprovalConfiguration(){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.request({
            method: 'POST',
            url: printf(urlPageLocator.update_approval_configuration_url, this.env, buyerCompanyUuid),
            headers: {
            authorization: "Bearer " + token,
            },
            body: []
        }).then((response) => {
            expect(response.body).has.property("message", "Update is successful")
        })
    }

    callApiOptOutApprovalConfiguration(featureName){
        let token = window.localStorage.getItem("token")
        let buyerCompanyUuid = dataBuyer.buyerCompanyUuid
        cy.wrap(this.callApiGetDataInApprovalConfiguration(featureName)).then((e) => {
            cy.request({
                method: 'POST',
                url: printf(urlPageLocator.update_approval_configuration_url, this.env, buyerCompanyUuid),
                headers: {
                authorization: "Bearer " + token,
                },
                body: [
                    {
                        featureCode: sessionStorage.getItem("featureCode"),
                        featureName: featureName,
                        featureUuid: sessionStorage.getItem("featureUuid")
                    }
                ]
            }).then((response) => {
                expect(response.body).has.property("message", "Update is successful")
            })
        })
    }
}export default ApiAction