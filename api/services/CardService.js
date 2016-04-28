var request = require("request");

module.exports = CardService;

function CardService() {}

CardService.prototype.vault = function(options, done) {
  var customerId = options.customerId || "";
  var payload = options.payload || {};
  
  var buffer = new Buffer(sails.config.cardVault.sandbox.secretApiKey + ":");
  var base64EncodedKeys = buffer.toString('base64');
  var url = sails.config.cardVault.sandbox.host + sails.config.cardVault.sandbox.cards.vault;
  
  url = url.replace("{customer_id}", customerId);
  
  var params = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic " + base64EncodedKeys
    },
    url: url,
    body: payload,
    json: true
  };

  sails.log.info("@CardService.vault params: ", params);

  request.post(params, function(error, response, body) {
    sails.log.info("@CardService.vault body: ", body);

    var result = {
      response: response,
      body: body
    };

    return done(error, result);
  });
};

CardService.prototype.list = function(options, done) {
  var customerId = options.customerId || "";

  var buffer = new Buffer(sails.config.cardVault.sandbox.secretApiKey + ":");
  var base64EncodedKeys = buffer.toString('base64');
  var url = sails.config.cardVault.sandbox.host + sails.config.cardVault.sandbox.cards.list;

  url = url.replace("{customer_id}", customerId);

  var params = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic " + base64EncodedKeys
    },
    url: url,
    json: true
  };

  sails.log.info("@CardService.list params: ", params);

  request.get(params, function(error, response, body) {
    sails.log.info("@CardService.list body: ", body);

    var result = {
      response: response,
      body: body
    };

    return done(error, result);
  });
};