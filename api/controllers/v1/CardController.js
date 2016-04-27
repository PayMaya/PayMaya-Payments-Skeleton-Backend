/**
 * CardController
 *
 * @description :: Server-side logic for managing Cards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  
  show: function(req, res) {
    var customerId = req.param("customerId") || "";

    if (_.isEmpty(customerId)) {
      return res.badRequest({
        "error": "Missing customerId parameter."
      });
    }

    var options = {customerId: customerId};

    var cardService = new CardService();
    cardService.list(options, function(err, result) {
      if (err) {
        return res.serverError(err);
      }

      var response = result.response;
      var body = result.body;

      if (response.statusCode >= 200 && response.statusCode <= 399) {
        return res.json(body);
      }

      if(response.statusCode == 400) {
        return res.badRequest(body);
      }

      if(response.statusCode == 404) {
        return res.notFound(body);
      }

      return res.serverError(body);
    });
  },

  create: function(req, res) {
    var customerId = req.param("customerId") || "";
    var payload = req.body;
    
    if (_.isEmpty(customerId)) {
      return res.badRequest({
        "error": "Missing customerId parameter."
      });
    }

    var options = {
      customerId: customerId,
      payload: payload
    };
    
    var cardService = new CardService();
    cardService.vault(options, function(err, result) {
      if (err) {
        return res.serverError(err);
      }

      var response = result.response;
      var body = result.body;

      if (response.statusCode >= 200 && response.statusCode <= 399) {
        return res.json(body);
      }

      if(response.statusCode == 400) {
        return res.badRequest(body);
      }

      if(response.statusCode == 404) {
        return res.notFound(body);
      }

      return res.serverError(body);
    });
  }

};

