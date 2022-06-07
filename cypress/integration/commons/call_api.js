import CommonAction from '../commons/common_actions'
const commonAction = new CommonAction()

class ApiAction {
    callApiDoubleClickToPprInPprList(pprTitle){
        let token = window.localStorage.getItem("token")
        cy.request({
            method: 'GET',
            url: 'https://api-connex-dev.doxa-holdings.com/purchase/689fbac5-7291-4cad-b84c-52e95d4499a8/prerequisition/list/',
            headers: {
                authorization: "Bearer " + token,
            }
       }).its('body').then((body) => {
            const array = body.data;
            const elementRoot = array.find(element => element.pprTitle === pprTitle);
            const uuidRoot = elementRoot.pprUuid;
            commonAction.navigateTo(`https://connex-dev.doxa-holdings.com/pre-requisitions/details?uuid=${uuidRoot}`)
        })
    }

    callApiNavigateToPrDetailPage(prNumber){
        let token = window.localStorage.getItem("token")
        cy.request({
            method: 'GET',
            url: 'https://api-connex-dev.doxa-holdings.com/purchase/689fbac5-7291-4cad-b84c-52e95d4499a8/purchase-requisition/list',
            headers: {
                authorization: "Bearer " + token,
            }
       }).its('body').then((body) => {
            const array = body.data;
            const elementRoot = array.find(element => element.prNumber === prNumber);
            const uuidRoot = elementRoot.uuid;
            commonAction.navigateTo(`https://connex-dev.doxa-holdings.com/requisition/pr-details?uuid=${uuidRoot}`)
        })
    }

    callApiRaisePpr(pprTitle){
        let token = "Bearer eyJraWQiOiJkb3hhLWNvbm5leDIiLCJ0eXAiOiJqd3QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJiODA5MDQ4ZS1kOTZjLTQ4OTctYjVhNC04MDk5ZjU3YjUzYTEiLCJjdHgiOiJwZXJzb25hbCIsInJvbGVzIjoiRU5USVRZX1VTRVIiLCJpc3MiOiJodHRwOlwvXC9vYXV0aC1zZXJ2aWNlIiwibG9jYWxlIjoiZW4iLCJjbGllbnRfaWQiOiI2YTliNGE1Ni1hMzc1LTQzNDMtYWE2OS1iNzhmYzkzYmQzZmUiLCJhdWQiOiI2YTliNGE1Ni1hMzc1LTQzNDMtYWE2OS1iNzhmYzkzYmQzZmUiLCJjb21wYW5pZXMiOlt7InJvbGVzIjoiRU5USVRZX1VTRVIiLCJ1dWlkIjoiNjg5ZmJhYzUtNzI5MS00Y2FkLWI4NGMtNTJlOTVkNDQ5OWE4IiwiYXV0aG9yaXRpZXMiOm51bGx9XSwibmJmIjoxNjUzNjMwNzE1LCJ1c2VyX2lkIjo4ODcsIm5hbWUiOiJhdXRvIGNyZWF0b3IiLCJkZXNpZ25hdGlvbiI6ImNyZWF0b3IiLCJleHAiOjE2NTM3MTcxMTUsImlhdCI6MTY1MzYzMDcxNSwianRpIjoiMjE4MGZkZmEtMzhhNS00YzZmLTg4OGYtZGNlMWJiMzU3ZTcyIn0.G7fV2tSSOZ0bvGgTB02cU0PlFIzlVzSp6bBSSjhHhyaeKt5G3lcXx6fcqKN_97NQRrqpSaFMlmY8EQA-q63jkdpiHbabulKpqI-77JOeJP0XKu32UjieXiwZqITGRIU_gcYfHQbmKtkRDhAHZXjPypSdhPJQCO09h1Ms6nzluP886M52Ia9pNAj20Qd4EmD4gfKG8rtbHAi6x6NhdHJxx0yzfUYLMleWJ_BCQ972vpf4Awlt0LzStwXHyYzHVLyqSpzNv6_O4AapoDwBRdMDTBgYVZG2zXfAd044vNvkOY4NpkOBc5rAu9Ig3ziDBAIY4iWmWy7c-GK47QDfootRrA";
        cy.request({
            method: 'POST',
            url: 'https://api-connex-dev.doxa-holdings.com/purchase/689fbac5-7291-4cad-b84c-52e95d4499a8/prerequisition/create',
            headers: {
                authorization: token,
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

    callApiSaveAsDraftPpr(pprTitle){
        let token = "Bearer eyJraWQiOiJkb3hhLWNvbm5leDIiLCJ0eXAiOiJqd3QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJiODA5MDQ4ZS1kOTZjLTQ4OTctYjVhNC04MDk5ZjU3YjUzYTEiLCJjdHgiOiJwZXJzb25hbCIsInJvbGVzIjoiRU5USVRZX1VTRVIiLCJpc3MiOiJodHRwOlwvXC9vYXV0aC1zZXJ2aWNlIiwibG9jYWxlIjoiZW4iLCJjbGllbnRfaWQiOiI2YTliNGE1Ni1hMzc1LTQzNDMtYWE2OS1iNzhmYzkzYmQzZmUiLCJhdWQiOiI2YTliNGE1Ni1hMzc1LTQzNDMtYWE2OS1iNzhmYzkzYmQzZmUiLCJjb21wYW5pZXMiOlt7InJvbGVzIjoiRU5USVRZX1VTRVIiLCJ1dWlkIjoiNjg5ZmJhYzUtNzI5MS00Y2FkLWI4NGMtNTJlOTVkNDQ5OWE4IiwiYXV0aG9yaXRpZXMiOm51bGx9XSwibmJmIjoxNjUzNzI4MzM4LCJ1c2VyX2lkIjo4ODcsIm5hbWUiOiJhdXRvIGNyZWF0b3IiLCJkZXNpZ25hdGlvbiI6ImNyZWF0b3IiLCJleHAiOjE2NTM4MTQ3MzgsImlhdCI6MTY1MzcyODMzOCwianRpIjoiNzczM2EyN2EtNGM2Yy00NjFlLTk4YjEtY2VjY2M4MzUwMzk0In0.aY5VKBTZhy0e10VChr7TJpLZyvj4sfevCp12SVwUqjtDDFGBXziWpoXBNR9ZBCPBPlkZHedgRQiAbPBH-c7U-nXCwVjhgJmj8SZBMv4ehxY0XK3v_Te50vdIEBZiQS2S_Ha7jLnqWgkhEPvA6ZKXTgBSM9qY0RnZP3VuzSKO-BFkTt9Cg2lxlDmnBHVrlXKACd18E8AkRmWLVWMb16EB9nJrUHc9-K9pdK0Q-Sfc5htj1H3cykjtMlxFD8oxgM-6oRNjawbaT7H5zD1G-dKFAwQ3GYrF-t3_PIYWj6mf6Uws-IKfYxuwZqG5LQBqtIof_9HLaWEjEw7qHavFLTAnig";
        cy.request({
            method: 'POST',
            url: 'https://api-connex-dev.doxa-holdings.com/purchase/689fbac5-7291-4cad-b84c-52e95d4499a8/prerequisition/save-draft',
            headers: {
                authorization: token,
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

    callApiRaisePr(prTitle){
        let token = "Bearer eyJraWQiOiJkb3hhLWNvbm5leDIiLCJ0eXAiOiJqd3QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJiODA5MDQ4ZS1kOTZjLTQ4OTctYjVhNC04MDk5ZjU3YjUzYTEiLCJjdHgiOiJwZXJzb25hbCIsInJvbGVzIjoiRU5USVRZX1VTRVIiLCJpc3MiOiJodHRwOlwvXC9vYXV0aC1zZXJ2aWNlIiwibG9jYWxlIjoiZW4iLCJjbGllbnRfaWQiOiI2YTliNGE1Ni1hMzc1LTQzNDMtYWE2OS1iNzhmYzkzYmQzZmUiLCJhdWQiOiI2YTliNGE1Ni1hMzc1LTQzNDMtYWE2OS1iNzhmYzkzYmQzZmUiLCJjb21wYW5pZXMiOlt7InJvbGVzIjoiRU5USVRZX1VTRVIiLCJ1dWlkIjoiNjg5ZmJhYzUtNzI5MS00Y2FkLWI4NGMtNTJlOTVkNDQ5OWE4IiwiYXV0aG9yaXRpZXMiOm51bGx9XSwibmJmIjoxNjUzNjMwNzE1LCJ1c2VyX2lkIjo4ODcsIm5hbWUiOiJhdXRvIGNyZWF0b3IiLCJkZXNpZ25hdGlvbiI6ImNyZWF0b3IiLCJleHAiOjE2NTM3MTcxMTUsImlhdCI6MTY1MzYzMDcxNSwianRpIjoiMjE4MGZkZmEtMzhhNS00YzZmLTg4OGYtZGNlMWJiMzU3ZTcyIn0.G7fV2tSSOZ0bvGgTB02cU0PlFIzlVzSp6bBSSjhHhyaeKt5G3lcXx6fcqKN_97NQRrqpSaFMlmY8EQA-q63jkdpiHbabulKpqI-77JOeJP0XKu32UjieXiwZqITGRIU_gcYfHQbmKtkRDhAHZXjPypSdhPJQCO09h1Ms6nzluP886M52Ia9pNAj20Qd4EmD4gfKG8rtbHAi6x6NhdHJxx0yzfUYLMleWJ_BCQ972vpf4Awlt0LzStwXHyYzHVLyqSpzNv6_O4AapoDwBRdMDTBgYVZG2zXfAd044vNvkOY4NpkOBc5rAu9Ig3ziDBAIY4iWmWy7c-GK47QDfootRrA";
        cy.request({
            method: 'POST',
            url: 'https://api-connex-dev.doxa-holdings.com/purchase/689fbac5-7291-4cad-b84c-52e95d4499a8/prerequisition/create',
            headers: {
                authorization: token,
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
}export default ApiAction
