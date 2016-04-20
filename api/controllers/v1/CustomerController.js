/**
 * CustomerController
 *
 * @description :: Server-side logic for managing customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  show: function(req, res) {

  },

  create: function(req, res) {
    var customerService = new CustomerService();
    customerService.create({}, function(err, result) {
      if (err) {
        return res.serverError(err);
      }

      return res.json(result);
    });
  }

};

