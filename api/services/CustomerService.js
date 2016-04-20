var request = require("request");

module.exports = CustomerService;

function CustomerService() {
  var self = this;

  self._mockData = {
    firstName: "John",
    middleName: "Michaels",
    lastName: "Doe",
    birthday: "1987-10-10",
    sex: "m",
    contact: {
      phone: "+63(2)1234567890",
      email: "paymayabuyer1@gmail.com"
    },
    "billingAddress": {
      "line1": "9F Robinsons Cybergate 3",
      "line2": "Pioneer Street",
      "city": "Mandaluyong City",
      "state": "Metro Manila",
      "zipCode": "12345",
      "countryCode": "PH"
    },
    "metadata": {}
  };
};

CustomerService.prototype.create = function(options, done) {
  var self = this;
  var buffer = new Buffer(sails.config.cardVault.sandbox.secretApiKey + ":");
  var base64EncodedKeys = buffer.toString('base64');
  var url = sails.config.cardVault.sandbox.host + sails.config.cardVault.sandbox.customers.post;

  var params = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic " + base64EncodedKeys
    },
    url: url,
    body: self._mockData,
    json: true
  };

  request.post(params, function(error, response, body) {
    sails.log.info("response body: ", body);
    return done(error, body);
  });
};
