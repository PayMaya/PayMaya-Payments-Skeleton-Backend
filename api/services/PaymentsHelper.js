var https = require("https");

module.exports = {

  requestPayments: function(paymentToken, callback) {
    var payload = {
      "paymentTokenId": paymentToken,
      "totalAmount": {
        "amount": 100,
        "currency": "PHP"
      },
      "buyer": {
        "firstName": "Cza",
        "middleName": "dela",
        "lastName": "Bongat",
        "contact": {
          "phone": "+63(2)1234567890",
          "email": "paymayabuyer1@gmail.com"
        },
        "billingAddress": {
          "line1": "9F Robinsons Cybergate 3",
          "line2": "Pioneer Street",
          "city": "Mandaluyong City",
          "state": "Metro Manila",
          "zipCode": "12345",
          "countryCode": "PH"
        }
      }
    };

    var stringifiedPayload = JSON.stringify(payload);
    // Logs the payload to the command line console
    sails.log.info("stringifiedPayload");
    sails.log.info(stringifiedPayload);

    /**
     * Create your Authorization header here.
     * You need to base64 encode your secret key followed by a colon (:)
     * To access your secret key, use sails.config.payments.sandbox.secretApiKey
     *
     */


    // Logs your key to the command line console
    sails.log.info("base64EncodedKeys: " + base64EncodedKeys);

    var requestOptions = {
      "host": sails.config.payments.sandbox.host,
      "path": sails.config.payments.sandbox.path,
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "Authorization": "Basic " + base64EncodedKeys
      }
    };

    // Logs your requestOptions to the command line console
    sails.log.info("requestOptions");
    sails.log.info(JSON.stringify(requestOptions, null, 2));

    var onResponseCallback = function(response) {
      var responseString = "";

      response.on("data", function(chunk) {
        responseString += chunk;
      });

      response.on("end", function() {
        return callback(null, responseString);
      });

      response.on("error", function(err) {
        sails.log.error(err);
        return callback(err);
      });
    };

    var postRequest = https.request(requestOptions, onResponseCallback);
    postRequest.write(stringifiedPayload);
    postRequest.end();
    return;
  }

};
