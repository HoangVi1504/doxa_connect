var url

if (Cypress.env('ENV') == 'dev'){
    url = 'https://connex-dev.doxa-holdings.com'
}
else if (Cypress.env('ENV') == 'stag'){ 
    url = 'https://connex-stag.doxa-holdings.com/'
} 

module.exports = {
    url
};
