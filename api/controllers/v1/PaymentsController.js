/**
 * PaymentsController
 *
 * @description :: Server-side logic for managing Payments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	create: function(req, res) {
		var payload = req.body;

		var options = {
			payload: payload
		};

		var paymentsService = new PaymentsService();
		paymentsService.create(options, function(err, result) {
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

  createCustomerCardPayment: function(req, res) {
		var customerId = req.param("customerId") || "";
		var cardId = req.param("cardId") || "";
		var payload = req.body;

		var options = {
			customerId: customerId,
			cardId: cardId,
			payload: payload
		};

		var paymentsService = new PaymentsService();
		paymentsService.createCustomerCardPayment(options, function(err, result) {
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
