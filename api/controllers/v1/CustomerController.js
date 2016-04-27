/**
 * CustomerController
 *
 * @description :: Server-side logic for managing Customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  create: function(req, res) {
    var customerService = new CustomerService();
    customerService.create({}, function(err, result) {
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

