import fetch from 'node-fetch';
import config from './config.mjs';

export const getClientCredentialToken = async() => {
    const authdetails = {
        'grant_type': 'client_credentials',
        'scope': 'airview_read',
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
    if(res && res.access_token) return res.access_token;
    else {
        console.log(res)
        return null;
    }
}