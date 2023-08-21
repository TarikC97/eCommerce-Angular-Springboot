export default{
    //json export for okta signUp
    //issuer of tokens - url when authorizing with Okta.
    //redirectUri - send user at certain url when logIn
    //scopes: openid- required for authentication requests
    //scopes: profile - user first name,last name...
    //scopes: email - user email address      
    oidc:{
        clientId: '0oaawbpv9ieVbk1gb5d7',
        issuer:'https://dev-49939240.okta.com/oauth2/default',
        redirectUri:'http://localhost:4200/login/callback',
        scopes:['openid','profile','email'],
        

    }
}
