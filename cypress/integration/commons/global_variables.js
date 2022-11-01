var url
var mailGetnadaUrl
var invUrl

mailGetnadaUrl = 'https://getnada.com'

if (Cypress.env('ENV') == 'dev'){
    url = 'https://connex-dev.doxa-holdings.com'
    invUrl = 'https://invoices-dev.doxa-holdings.com'
}
else if (Cypress.env('ENV') == 'stag'){ 
    url = 'https://connex-stag.doxa-holdings.com'
    invUrl = 'https://invoices-stag.doxa-holdings.com'
}
else{
    url = 'https://connex-stag.doxa-holdings.com'
    invUrl = 'https://invoices-stag.doxa-holdings.com'
}
    
module.exports = { 
    url,
    mailGetnadaUrl,
    invUrl,
};
