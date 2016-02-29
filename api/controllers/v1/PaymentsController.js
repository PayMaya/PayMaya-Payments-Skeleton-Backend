/**
 * PaymentsController
 *
 * @description :: Server-side logic for managing Payments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	create: function(req, res) {
		var paymentToken = req.body.paymentToken || "";
		var totalAmount = req.body.totalAmount || "";
		var buyer = req.body.buyer || "";

		if ( !paymentToken ) {
			return res.badRequest("Missing payment token");
		}

		if ( !totalAmount ) {
			return res.badRequest("Missing total amount");
		}

		if ( !buyer ) {
			return res.badRequest("Missing buyer information");
		}

		PaymentsHelper.requestPayments(paymentToken, totalAmount, buyer, function(err, result) {
			if (err) {
				return res.serverError(err);
			}

			return res.json(JSON.parse(result));
		});
	}

};
