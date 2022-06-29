var url

if (process.env.env === 'stag'){
    url = 'https://connex-dev.doxa-holdings.com'
}
else{ 
    url = 'https://connex-stag.doxa-holdings.com/'
} 

module.exports = {
    url
};
