PayMaya Payments Skeleton Backend
========

## Dependencies

* Node.js >= 0.12.5

## Dev Dependencies

* Git

## Quick Install

### Development environment

    $ git clone https://github.com/PayMaya/PayMaya-Payments-Skeleton-Backend.git
    $ cd PayMaya-Payments-Skeleton-Backend
    $ npm install
    $ node app.js

## Sample Usage

1. PayMaya Payments Skeleton Backend is using Sails.js MVC Framework. For more info about Sails.js, head to this link: http://sailsjs.org/
2. You have to put your Secret API Key to the `config/env/development.js` file.
3. You also need to base64-encode your Secret API Key and put it in the file `api/services/PaymentsHelper.js`. For base64 encoding using Node.js, you can use the following code:
```
var buffer = new Buffer(sails.config.payments.sandbox.secretApiKey);
var base64EncodedKeys = buffer.toString('base64');
```
After you have done the steps above, go back to your terminal and re-run your app.

## Getting your access token

1. Register your app via /register by providing username, email, and password.
2. Upon successful registration, your account details will be provided along with your access token. You can also view these details anytime by logging in (/login).
```
{
  "userData": {
    "username": "paymaya-ios-sdk",
    "email": "paymayadevs-ios@voyager.ph",\
    "createdAt": "2016-02-24T01:53:21.521Z",
    "updatedAt": "2016-02-24T01:53:21.521Z",
    "id": 38
  },
  "token": "WEW0y6rsTfClk5g5095ohCZyQNAcvAgqIPrDQG7F2JYOB2BIux5Vxe9p66Ztvm/8"
}
```
3. Use these access token by adding Authorization parameter on your request header with value "Bearer \<access_token\>".
```
Authorization: Bearer WEW0y6rsTfClk5g5095ohCZyQNAcvAgqIPrDQG7F2JYOB2BIux5Vxe9p66Ztvm/8
```

