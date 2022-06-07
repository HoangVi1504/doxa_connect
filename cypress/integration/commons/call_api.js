import CommonAction from './common_action'
const commonAction = new CommonAction()

class ApiAction {
    callApiDoubleClickToPprInPprList(approverName, pprTitle){
        let token
        if(approverName == "auto approver"){
        token = "Bearer eyJraWQiOiJkb3hhLWNvbm5leDIiLCJ0eXAiOiJqd3QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI0OGYzODg5My1jNDVjLTQxMDQtOTgxMS00MjZiMTg1ODI4YjYiLCJjdHgiOiJwZXJzb25hbCIsInJvbGVzIjoiRU5USVRZX1VTRVIiLCJpc3MiOiJodHRwOlwvXC9vYXV0aC1zZXJ2aWNlIiwibG9jYWxlIjoiZW4iLCJjbGllbnRfaWQiOiI2YTliNGE1Ni1hMzc1LTQzNDMtYWE2OS1iNzhmYzkzYmQzZmUiLCJhdWQiOiI2YTliNGE1Ni1hMzc1LTQzNDMtYWE2OS1iNzhmYzkzYmQzZmUiLCJjb21wYW5pZXMiOlt7InJvbGVzIjoiRU5USVRZX1VTRVIiLCJ1dWlkIjoiNjg5ZmJhYzUtNzI5MS00Y2FkLWI4NGMtNTJlOTVkNDQ5OWE4IiwiYXV0aG9yaXRpZXMiOm51bGx9XSwibmJmIjoxNjUzNTU0NjAyLCJ1c2VyX2lkIjo4ODgsIm5hbWUiOiJhdXRvIGFwcHJvdmVyIiwiZGVzaWduYXRpb24iOiJhcHByb3ZlciIsImV4cCI6MTY1MzY0MTAwMiwiaWF0IjoxNjUzNTU0NjAyLCJqdGkiOiJkNGI0OGI4NC04YjMzLTQwODItODBhMS0yMGUzNjlhNjBlNjMifQ.JZf-s0KnC9CtCFpG3Y5UXkCsS6qMvO6VQBu4jY-lndpQZSoGwQhDluAED23wDgLs0RYp0Of1a1e2af4NTx2fJBcaT432799cHWAFDT2SPKXT6Uo0SduBip7r9HC6QVzi9geGImqOy_RfNCjr6bb-xg2XIyah8D1gIPQ00ANEFWvMjs_CiVU9GA5Cu-6wf7Mj2nKv82iWXw50YgWwekmorUVI7eVvdOk-GBj0vlmkUWXuXsV9JsIh0BDf-Xb7SpXFNwe7SONvUKlQ6X-SECDPq9v0Iu6AuhmvVAdfhMdL9Rw3MeqMb06lQhbKG61yM6cyA_YK-3p3nPF6OSW7Rg1l8g"
        }
        else if(approverName == "auto approver 2"){
            token = "Bearer eyJraWQiOiJkb3hhLWNvbm5leDIiLCJ0eXAiOiJqd3QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJiZWQ4OTgxOS1kODY3LTRjNzYtYjRmNS0xODE5MmZiMWRiMDkiLCJjdHgiOiJwZXJzb25hbCIsInJvbGVzIjoiRU5USVRZX1VTRVIiLCJpc3MiOiJodHRwOlwvXC9vYXV0aC1zZXJ2aWNlIiwibG9jYWxlIjoiZW4iLCJjbGllbnRfaWQiOiI2YTliNGE1Ni1hMzc1LTQzNDMtYWE2OS1iNzhmYzkzYmQzZmUiLCJhdWQiOiI2YTliNGE1Ni1hMzc1LTQzNDMtYWE2OS1iNzhmYzkzYmQzZmUiLCJjb21wYW5pZXMiOlt7InJvbGVzIjoiRU5USVRZX1VTRVIiLCJ1dWlkIjoiNjg5ZmJhYzUtNzI5MS00Y2FkLWI4NGMtNTJlOTVkNDQ5OWE4IiwiYXV0aG9yaXRpZXMiOm51bGx9XSwibmJmIjoxNjUzNTU2NjMwLCJ1c2VyX2lkIjoxMDgwLCJuYW1lIjoiYXV0byBhcHByb3ZlciAyIiwiZGVzaWduYXRpb24iOiJhdXRvIGFwcHJvdmVyIDIiLCJleHAiOjE2NTM2NDMwMzAsImlhdCI6MTY1MzU1NjYzMCwianRpIjoiYTFjMzdjMjMtNTEwZC00NDZiLTkwOTgtYTAxN2RjNDY1MWI4In0.D7J0h8vYMI16v_4viZwcKcVyK8y3S8d27Bntr0b5PqMvEsfytD9TMyyBoDoLWoKo1hJ5AVgZq5_vUsVPc2WRm2FiwktNYkK7LmwPnKL_YVmRDYvk8I5txgoWKmDrIbc3-9uDm2fOwsJ7kD2FAYjDC_XZTRw4wmEkaj9NU2nzAZqgoQYQ38MzYGIrTq-LE-Xt_S-J6d7Ktiq-QT7ZU5WHQmBaBM9DkNa24V1dAi_EuCEoAsIbjGjD63hbZexMD7OS9q6Tqn6OIHHeQ3-eeFM8MUIFKUbYZdZVNU0P-G2UYYeXZ7uGoZqakh8YIaMFJab4S-WfH3iQL2VoSi0k99rd1A"
        }
        cy.request({
            method: 'GET',
            url: 'https://api-connex-dev.doxa-holdings.com/purchase/689fbac5-7291-4cad-b84c-52e95d4499a8/prerequisition/list/',
            headers: {
                authorization: token,
            }
       }).its('body').then((body) => {
            const array = body.data;
            const elementRoot = array.find(element => element.pprTitle === pprTitle);
            const uuidRoot = elementRoot.pprUuid;
            commonAction.navigateTo(`https://connex-dev.doxa-holdings.com/pre-requisitions/details?uuid=${uuidRoot}`)
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
