const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const jwt = require("jsonwebtoken");

let cachedtoken = null;
const hasValidCachedToken = () => {
    if(cachedtoken) {
        const decoded = jwt.decode(cachedtoken);
        //five minutes less than the current expiration time. just to be safe
        const expiresOn = new Date( decoded.exp * 1000 - 1000 * 300 );
        const now = new Date();
        return expiresOn > now;
    } else return false;
};

module.exports= {
    getClientCredentialToken: async(config) => {
        if(hasValidCachedToken()) return cachedtoken;
        const authdetails = {
            'grant_type': 'client_credentials',
            'scope': config.scopes.join(","),
            'resource': config.resource,
            'client_id': config.clientId,
            'client_secret': config.clientSecret
        };
        
        //build the form body
        let body = [];
        for (var property in authdetails) {
            const encodedKey = encodeURIComponent(property);
            const encodedValue = encodeURIComponent(authdetails[property]);
            body.push(encodedKey + "=" + encodedValue);
        }        
        body = body.join("&");
    
        //send the request to get credentials
        const response = await fetch(config.logInUrl, {
            method: 'POST',
            body: body,
            headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}
        });
    
        const res = await response.json();
        if(res && res.access_token) {
            cachedtoken = res.access_token;
            return res.access_token;
        }
        else {
            console.log(res)
            return null;
        }
    }
} 