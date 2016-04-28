var request = require("request");

module.exports = PaymentsService;

function PaymentsService() {}

PaymentsService.prototype.create = function(options, done) {
  var payload = options.payload || {};
  
  var buffer = new Buffer(sails.config.payments.sandbox.secretApiKey + ":");
  var base64EncodedKeys = buffer.toString('base64');
  var url = sails.config.payments.sandbox.host + sails.config.payments.sandbox.path;

  var params = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic " + base64EncodedKeys
    },
    url: url,
    body: payload,
    json: true
  };

  sails.log.info("@PaymentsService.create params: ", params);

  request.post(params, function(error, response, body) {
    sails.log.info("@PaymentsService.create body: ", body);

    var result = {
      response: response,
      body: body
    };

    return done(error, result);
  });
};

PaymentsService.prototype.createCustomerCardPayment = function(options, done) {
  var customerId = options.customerId || "";
  var cardId = options.cardId || "";
  var payload = options.payload || {};
  
  var buffer = new Buffer(sails.config.payments.sandbox.secretApiKey + ":");
  var base64EncodedKeys = buffer.toString('base64');
  var url = sails.config.cardVault.sandbox.host + sails.config.cardVault.sandbox.payments.create;
  
  url = url.replace("{customer_id}", customerId);
  url = url.replace("{card_id}", cardId);
  
  var params = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic " + base64EncodedKeys
    },
    url: url,
    body: payload,
    json: true
  };

  sails.log.info("@PaymentsService.createCustomerCardPayment params: ", params);

  request.post(params, function(error, response, body) {
    sails.log.info("@PaymentsService.createCustomerCardPayment body: ", body);

    var result = {
      response: response,
      body: body
    };

    return done(error, result);
  });
};

//
// module.exports = {
//
//   requestPayments: function(paymentToken, totalAmount, buyer, callback) {
//     var payload = {
//       "paymentTokenId": paymentToken,
//       "totalAmount": totalAmount,
//       "buyer": buyer
//     };
//
//     var stringifiedPayload = JSON.stringify(payload);
//     // Logs the payload to the command line console
//     sails.log.info("stringifiedPayload");
//     sails.log.info(stringifiedPayload);
//
//     /**
//      * Create your Authorization header here.
//      * You need to base64 encode your secret key followed by a colon (:)
//      * To access your secret key, use sails.config.payments.sandbox.secretApiKey
//      *
//      */
//
//     var buffer = new Buffer(sails.config.payments.sandbox.secretApiKey + ":");
//     var base64EncodedKeys = buffer.toString('base64');
//
//
//     // Logs your key to the command line console
//     sails.log.info("base64EncodedKeys: " + base64EncodedKeys);
//
//     var requestOptions = {
//       "host": sails.config.payments.sandbox.host,
//       "path": sails.config.payments.sandbox.path,
//       "method": "POST",
//       "headers": {
//         "Content-Type": "application/json",
//         "Authorization": "Basic " + base64EncodedKeys
//       }
//     };
//
//     // Logs your requestOptions to the command line console
//     sails.log.info("requestOptions");
//     sails.log.info(JSON.stringify(requestOptions, null, 2));
//
//     var onResponseCallback = function(response) {
//       var responseString = "";
//
//       response.on("data", function(chunk) {
//         responseString += chunk;
//       });
//
//       response.on("end", function() {
//         return callback(null, responseString);
//       });
//
//       response.on("error", function(err) {
//         sails.log.error(err);
//         return callback(err);
//       });
//     };
//
//     var postRequest = https.request(requestOptions, onResponseCallback);
//     postRequest.write(stringifiedPayload);
//     postRequest.end();
//     return;
//   }
//
// };
